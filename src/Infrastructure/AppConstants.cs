﻿using Microsoft.Win32;
using Sqlbi.Bravo.Infrastructure.Helpers;
using Sqlbi.Bravo.Infrastructure.Security;
using System;
using System.Diagnostics;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Sqlbi.Bravo.Infrastructure
{
    internal static class AppConstants
    {
        public static readonly string ApiAuthenticationSchema = "BravoAuth";
        public static readonly string ApiAuthenticationToken = Cryptography.GenerateSimpleToken();
        public static readonly string ApplicationManufacturer = "SQLBI";
        public static readonly string ApplicationName = "Bravo";
        public static readonly string ApplicationStoreAliasName = "BravoStore";
        public static readonly string ApplicationMainWindowTitle = "Bravo for Power BI";
        public static readonly string ApplicationInstanceUniqueName = $"{ApplicationName}-{Guid.NewGuid():D}";
        public static readonly string ApplicationRegistryKeyName = $@"{ Registry.LocalMachine.Name }\SOFTWARE\{ ApplicationManufacturer }\{ ApplicationName }";
        public static readonly string ApplicationRegistryApplicationTelemetryEnableValue = "applicationTelemetryEnabled";
        public static readonly bool TelemetryEnabledDefault = true;
        public static readonly string TelemetryInstrumentationKey = "47a8970c-6293-408a-9cce-5b7b311574d3";
        public static readonly string PBIDesktopProcessName = "PBIDesktop";
        public static readonly string PBIDesktopSSASProcessImageName = "msmdsrv.exe";
        public static readonly string PBIDesktopMainWindowTitleSuffix = " - Power BI Desktop";
        public static readonly TimeSpan MSALSignInTimeout = TimeSpan.FromMinutes(5);

        static AppConstants()
        {
            var currentProcess = Process.GetCurrentProcess();

            CurrentSessionId = currentProcess.SessionId;
            VersionInfo = FileVersionInfo.GetVersionInfo(currentProcess.MainModule?.FileName ?? throw new BravoUnexpectedException("MainModule.FileName is null"));
            ApplicationFileVersion = VersionInfo.FileVersion ?? throw new BravoUnexpectedException("FileVersion is null");
            ApplicationProductVersion = VersionInfo.ProductVersion ?? throw new BravoUnexpectedException("ProductVersion is null");

            IsPackagedAppInstance = DesktopBridgeHelper.IsRunningAsMsixPackage();
            ApplicationDataPath = Path.Combine(Environment.GetFolderPath(IsPackagedAppInstance ? Environment.SpecialFolder.UserProfile : Environment.SpecialFolder.LocalApplicationData, Environment.SpecialFolderOption.DoNotVerify), ApplicationName);
            ApplicationTempPath = Path.Combine(ApplicationDataPath, ".temp");
            UserSettingsFilePath = Path.Combine(ApplicationDataPath, "usersettings.json");
            MsalTokenCacheFilePath = Path.Combine(ApplicationDataPath, ".msalcache");

            DefaultJsonOptions = new(JsonSerializerDefaults.Web) { MaxDepth = 32 }; // see Microsoft.AspNetCore.Mvc.JsonOptions.JsonSerializerOptions
            DefaultJsonOptions.Converters.Add(new JsonStringEnumMemberConverter()); // https://github.com/dotnet/runtime/issues/31081#issuecomment-578459083
        }

        /// <summary>
        /// Specifies the unique identifier that spans a period of time from log in to log out and is generated by the operating system when the user's session is created.
        /// It allows us to correctly identify the ownership of the process in case multiple sessions are active or in multi-session environments such as Remote Desktop Services (a.k.a Terminal Services).
        /// </summary>
        public static int CurrentSessionId { get; }

        /// <summary>
        /// Returns true if the current app istance is running as packaged application
        /// </summary>
        public static bool IsPackagedAppInstance { get; }
    
        public static string ApplicationFileVersion { get; }

        public static string ApplicationProductVersion { get; }

        public static JsonSerializerOptions DefaultJsonOptions { get; }

        public static string ApplicationDataPath { get; }

        public static string ApplicationTempPath { get; }

        public static string UserSettingsFilePath { get; }

        public static string MsalTokenCacheFilePath { get; }

        public static FileVersionInfo VersionInfo { get; }
    }
}
