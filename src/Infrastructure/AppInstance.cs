﻿namespace Sqlbi.Bravo.Infrastructure
{
    using Sqlbi.Bravo.Infrastructure.Configuration.Settings;
    using Sqlbi.Bravo.Infrastructure.Helpers;
    using Sqlbi.Bravo.Infrastructure.Messages;
    using System;
    using System.Diagnostics;
    using System.IO;
    using System.IO.Pipes;
    using System.Text;
    using System.Text.Json;
    using System.Threading;

    internal class AppInstance : IDisposable
    {
        private readonly bool _owned;
        private readonly Mutex _mutex;
        private readonly string _pipeName;
        private readonly string _mutexName;

        // GH ISSUE https://github.com/sql-bi/Bravo/issues/459
        // https://stackoverflow.com/questions/32739224/c-sharp-unauthorizedaccessexception-when-enabling-messagemode-for-read-only-name
        private const PipeDirection DefaultPipeDirection = PipeDirection.InOut;

        private NamedPipeServerStream? _pipeServer;
        private bool _disposed;

        public AppInstance()
        {
            var appId = "8D4D9F1D39F94C7789D84729480D8198"; // Do not change !!
            var appName = AppEnvironment.DeploymentMode == AppDeploymentMode.Packaged ? AppEnvironment.ApplicationStoreAliasName : AppEnvironment.ApplicationName;
            var pipeNamePrefix = AppEnvironment.DeploymentMode == AppDeploymentMode.Packaged ? "LOCAL\\" : string.Empty; // Named pipes in packaged applications must use the syntax \\.\pipe\LOCAL\ for the pipe name

            _pipeName = $"{pipeNamePrefix}{appName}.{appId}";
            _mutexName = $"{appName}{appId}";
            _mutex = new Mutex(initiallyOwned: true, name: _mutexName, createdNew: out _owned);

            if (_owned)
            {
                StartPipeServer();
                GC.KeepAlive(_mutex);
            }
        }

        /// <summary>
        /// Determines if the current instance is the only running instance of the application or if another instance is already running
        /// </summary>
        /// <returns>true if the current instance is the only running instance of the application; otherwise, false</returns>
        public bool IsOwned => _owned;

        /// <summary>
        /// Occurs when a new (secondary) instance of the application is started and the notification is sent to the primary (owner) instance
        /// </summary>
        public event EventHandler<AppInstanceStartupEventArgs>? OnNewInstance;

        /// <summary>
        /// Sends a message to the primary instance owner notifying it of startup arguments for the current instance
        /// </summary>
        public void NotifyOwner()
        {
            using var client = new NamedPipeClientStream(serverName: ".", _pipeName, DefaultPipeDirection, PipeOptions.Asynchronous | PipeOptions.CurrentUserOnly);

            try
            {
                client.Connect(timeout: 3_000);
            }
            catch (Exception ex) when (ex is IOException || ex is TimeoutException)
            {
                ExceptionHelper.WriteToEventLog(ex, EventLogEntryType.Warning);
                TelemetryHelper.TrackException(ex);
                return;
            }

            var startupSettings = StartupSettings.CreateFromCommandLineArguments();
            var startupMessage = AppInstanceStartupMessage.CreateFrom(startupSettings);
            var json = JsonSerializer.Serialize(startupMessage);
            var bytes = Encoding.Unicode.GetBytes(json).AsSpan();

            try
            {
                client.Write(bytes);
                client.Flush();
            }
            catch (Exception ex) when (ex is ObjectDisposedException || ex is InvalidOperationException || ex is IOException)
            {
                ExceptionHelper.WriteToEventLog(ex, EventLogEntryType.Warning);
                TelemetryHelper.TrackException(ex);
                return;
            }
        }

        private void StartPipeServer()
        {
            _pipeServer = new NamedPipeServerStream(_pipeName, DefaultPipeDirection, NamedPipeServerStream.MaxAllowedServerInstances, PipeTransmissionMode.Byte, PipeOptions.Asynchronous | PipeOptions.CurrentUserOnly);
            _pipeServer.BeginWaitForConnection(OnPipeConnection, state: _pipeServer);
        }

        private void OnPipeConnection(IAsyncResult asyncResult)
        {
            BravoUnexpectedException.ThrowIfNull(asyncResult.AsyncState);

            using var pipeServer = (NamedPipeServerStream)asyncResult.AsyncState;
            pipeServer.EndWaitForConnection(asyncResult);

            StartPipeServer();

            using var reader = new StreamReader(pipeServer, Encoding.Unicode);
            var json = reader.ReadToEnd();

            var startupMessage = default(AppInstanceStartupMessage?);
            try
            {
                startupMessage = JsonSerializer.Deserialize<AppInstanceStartupMessage>(json);
            }
            catch (JsonException)
            {
                // TODO: log JsonException ?
            }

            OnNewInstance?.Invoke(this, new AppInstanceStartupEventArgs(startupMessage));
        }

        #region IDisposable

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    if (_owned)
                        _mutex.ReleaseMutex();

                    _pipeServer?.Dispose();
                    _mutex.Dispose();
                }

                _disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        #endregion
    }

    internal class AppInstanceStartupEventArgs : EventArgs
    {
        public AppInstanceStartupEventArgs(AppInstanceStartupMessage? message)
        {
            Message = message;
        }

        public AppInstanceStartupMessage? Message { get; }
    }
}
