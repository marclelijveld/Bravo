/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "en", //DO NOT TRANSLATE
    name: "English", //DO NOT TRANSLATE

    strings: {
        /* Labels & Messages */
        [_.addCtrlTitle]: "Open",
        [_.aggregatedTableName]: "Multiple tables",
        [_.AnalyzeModel]: "Analyze Model",
        [_.analyzeModelSummary]: `Your dataset is <strong>{size:bytes}</strong> large and contains <strong>{count}</strong> column{{s}}`,
        [_.analyzeModelSummary2]: `, <span class="text-highlight"><strong>{count}</strong> of which {{are|is}} not referenced.</span>`,
        [_.analyzeModelTableColCardinality]: "Cardinality",
        [_.analyzeModelTableColCardinalityTooltip]: "Number of unique elements",
        [_.analyzeModelTableColColumn]: "Column",
        [_.analyzeModelTableColEntity]: "Table \\ Column",
        [_.analyzeModelTableColRows]: "Rows",
        [_.analyzeModelTableColSize]: "Size",
        [_.analyzeModelTableColTable]: "Table",
        [_.analyzeModelTableColWeight]: "Weight",
        [_.appName]: "Bravo for Power BI",
        [_.appVersion]: "Version {version}",
        [_.appUpToDate]: "Bravo is up to date!",
        [_.appUpdateAvailable]: "New version available: {version}",
        [_.appUpdateChangelog]: "Changelog",
        [_.appUpdateDownload]: "Download",
        [_.appUpdateViewDetails]: "View details",
        [_.BestPractices]: "Best Practices",
        [_.closeOtherTabs]: "Close others",
        [_.closeTab]: "Close",
        [_.collapseAllCtrlTitle]: "Collapse all",
        [_.columnMeasureFormatted]: "This measure is already formatted.",
        [_.columnMeasureNotFormattedTooltip]: "This measure is not formatted.",
        [_.columnMeasureWithError]: "This measure contains errors.",
        [_.columnUnreferencedExplanation]: `Unreferenced columns can generally be removed from the model to optimize performance. Before removing them, make sure you are not using these columns in any reports, which Bravo cannot determine.`,
        [_.columnUnreferencedTooltip]: "This column is not referenced in your model.",
        [_.confirmTabCloseMessage]: "It seems you didn't save the changes to this document.<br>Are you sure to close it?",
        [_.connectBrowse]: "Browse",
        [_.connectDatasetsTableEndorsementCol]: "Endorsement",
        [_.connectDatasetsTableNameCol]: "Name",
        [_.connectDatasetsTableOwnerCol]: "Owner",
        [_.connectDatasetsTableWorkspaceCol]: "Workspace",
        [_.connectDialogAttachPBIMenu]: "Datasets on powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Active Reports on Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "VPAX Files",
        [_.connectDialogTitle]: "Open",
        [_.connectDragFile]: "Drag a VPAX file here<br>or browse your computer",
        [_.connectNoReports]: "No active reports found.<br>Open a report with Power BI Desktop and wait for it to appear here.",
        [_.copy]: "Copy",
        [_.copyright]: "All rights are reserved.",
        [_.copyErrorDetails]: "Copy Error Details",
        [_.copiedErrorDetails]: "Copied!",
        [_.copyFormulaCtrlTitle]: "Copy formatted measure",
        [_.cut]: "Cut",
        [_.dataUsageLink]: "How your data is used?", 
        [_.dataUsageMessage]: `To format your code, Bravo sends the measures of this dataset to DAX Formatter, a service managed by SQLBI, over a secure connection.<p><strong>The service does not store your data anywhere.</strong></p><p>Some information such as the most used DAX functions, a complexity index, and average query length can be saved for statistical purposes.</p>`,
        [_.dataUsageTitle]: "How your data is used?",
        [_.DaxFormatter]: "Format DAX",
        [_.daxFormatterAgreement]: "To format DAX, Bravo sends your measures to the DAX Formatter service.",
        [_.daxFormatterAutoPreviewOption]: "Automatic preview",
        [_.daxFormatterFormat]: "Format Selected",
        [_.daxFormatterFormattedCode]: "Formatted (Preview)",
        [_.daxFormatterOriginalCode]: "Current",
        [_.daxFormatterPreviewAllButton]: "Preview All Measures",
        [_.daxFormatterPreviewButton]: "Preview",
        [_.daxFormatterPreviewDesc]: "To generate a preview, Bravo needs to send this measure to the DAX Formatter service.",
        [_.daxFormatterSuccessSceneMessage]: "Congratulations, <strong>{count} measure{{s}}</strong> {{have|has}} been successfully formatted.",
        [_.daxFormatterSummary]: "Your report contains <strong>{count} measure{{s}}</strong> that can be formatted.",
        [_.daxFormatterTableColMeasure]: "Measure",
        [_.daxFormatterTableColTable]: "Table",
        [_.daxFormatterTableSelected]: "{count} Selected",
        [_.defaultTabName]: "Untitled",
        [_.dialogCancel]: "Cancel",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "Open",
        [_.docReadOnly]: "Read-only",
        [_.docReadOnlyTooltip]: "This document is not editable.",
        [_.doneCtrlTitle]: "Done",
        [_.emailAddress]: "Email address",
        [_.emailAddressPlaceholder]: "Enter your email address",
        [_.error]: "Error",
        [_.expandAllCtrlTitle]: "Expand all",
        [_.ExportData]: "Export Data",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Show measures with errors only",
        [_.filterUnrefCtrlTitle]: "Show unreferenced columns only",
        [_.formattingMeasures]: "Formatting measures...",
        [_.goBackCtrlTitle]: "Cancel and go back",
        [_.groupByTableCtrlTitle]: "Group by Table",
        [_.helpConnectVideo]: "How to Connect",
        [_.helpCtrlTitle]: "Help",
        [_.hideUnsupportedCtrlTitle]: "Supported only",
        [_.license]: "Released under MIT license.",
        [_.ManageDates]: "Manage Dates",
        [_.menuCtrlTitle]: "Collapse/Expand menu",
        [_.notificationCtrlTitle]: "Notifications",
        [_.notificationsTitle]: "{count} notification{{s}}",
        [_.openSourcePayoff]: "Bravo for Power BI is an open-source tool developed and mantained by SQLBI and the Github community. Join us at",
        [_.openWithDaxFormatterCtrlTitle]: "Format online with DAX Formatter",  

        [_.optionAccount]: "Power BI Account",
        [_.optionAccountDescription]: "Set the account to access Power BI online datasets.",
        [_.optionLanguage]: "Language",
        [_.optionLanguageDescription]: "Choose the language of Bravo. Reload required.",
        [_.optionLanguageResetConfirm]: "Do you want to reload Bravo to apply the new language?",

        [_.optionFormattingLines]: "Lines",
        [_.optionFormattingLinesDescription]: "Choose to keep lines short or long.",
        [_.optionFormattingLinesValueLong]: "Long lines",
        [_.optionFormattingLinesValueShort]: "Short lines",

        [_.optionFormattingPreview]: "Automatic Preview",
        [_.optionFormattingPreviewDescription]: "Automatically send measures to DAX Formatter to generate previews.",
        [_.optionFormattingSeparators]: "Separators",
        [_.optionFormattingSeparatorsDescription]: "Choose the separators for numbers and lists.",
        [_.optionFormattingSeparatorsValueAuto]: "Auto",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSpaces]: "Spacing",
        [_.optionFormattingSpacesDescription]: "Manage spaces after function names.",
        [_.optionFormattingSpacesValueBestPractice]: "Best practice",
        [_.optionFormattingSpacesValueTrue]: "Space - IF ( ",
        [_.optionFormattingSpacesValueFalse]: "No space - IF( ",
        [_.optionTelemetry]: "Telemetry",
        [_.optionTelemetryDescription]: "Send anonymous usage data to SQLBI.",
        [_.optionTelemetryExplanation]: "Help us understand how you use Bravo and how to improve it. No personal information is collected. Please note that if this option is disabled, the development team will not able to collect any unhandled errors and provide additional information or support.",

        [_.optionTheme]: "Theme",
        [_.optionThemeDescription]: "Set the theme of Bravo. Leave <em>Auto</em> to let the system choose.",
        [_.optionThemeValueAuto]: "Auto",
        [_.optionThemeValueLight]: "Light",
        [_.optionThemeValueDark]: "Dark",

        [_.optionsDialogAboutMenu]: "About",
        [_.optionsDialogFormattingMenu]: "Formatting",
        [_.optionsDialogGeneralMenu]: "General",
        [_.optionsDialogTelemetryMenu]: "Telemetry",
        [_.optionsDialogTitle]: "Options",
        [_.otherColumnsRowName]: "Smaller columns...",
        [_.paste]: "Paste",
        [_.powerBiSigninDescription]: "Sign in to Power BI Service to connect Bravo to your online datasets.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Attach to Power BI Desktop",
        [_.quickActionConnectPBITitle]: "Connect to Power BI Service",
        [_.quickActionOpenVPXTitle]: "Open a Vertipaq Analyzer file",
        [_.refreshCtrlTitle]: "Refresh",
        [_.refreshPreviewCtrlTitle]: "Refresh preview",
        [_.saveVpaxCtrlTile]: "Save as VPAX",
        [_.savingVpax]: "Generating VPAX...",
        [_.sceneNotReady]: "Unfortunately this feature is not yet available.",
        [_.sceneNotReadyTitle]: "Woof?",
        [_.searchColumnPlaceholder]: "Search Column",
        [_.searchDatasetPlaceholder]: "Search Dataset",
        [_.searchMeasurePlaceholder]: "Search Measure",
        [_.settingsCtrlTitle]: "Options",
        [_.sheetOrphan]: "Not available",
        [_.sheetOrphanPBIXTooltip]: "The report has been closed in Power BI Desktop. Any writing operation is disallowed.",
        [_.sheetOrphanTooltip]: "This model is not available anymore. Any writing operation is disallowed.",
        [_.signedInCtrlTitle]: "Signed in as {name}",
        [_.signIn]: "Sign In",
        [_.signInCtrlTitle]: "Sign In",
        [_.signOut]: "Sign Out",
        [_.sqlbiPayoff]: "Bravo is brought to you by SQLBI.",
        [_.syncCtrlTitle]: "Synchronize",
        [_.themeCtrlTitle]: "Change Theme",
        [_.traceId]: "Trace Id",
        [_.unknownMessage]: "Invalid Message Received",
        [_.updateMessage]: "A new version of Bravo is available: {version}",
        [_.version]: "Version",
        [_.welcomeHelpText]: "Watch the videos below to learn how to use Bravo:",
        [_.welcomeHelpTitle]: "How to use Bravo?",
        [_.welcomeText]: "Bravo is a handy Power BI toolkit that you can use to analyze your models, format measures, create date tables, and export data.",
        [_.welcomeTitle]: "Bravo for Power BI",

        /* Errors */
        [_.errorAborted]: "Operation aborted.",
        [_.errorAnalysisServicesConnectionFailed]: "A connection problem arises between the server and Bravo.",
        [_.errorConnectionUnsupported]: "The connection to the requested resource is not supported.",
        [_.errorDatasetConnectionUnknown]: "Unspecified connection.",
        [_.errorDatasetConnectionUnsupportedExcelWorkbookDataset]: "Excel workbook datasets are not supported.", 
        [_.errorDatasetConnectionUnsupportedLiveConnectionToExternalDatasets]: "Datasets based on a live connection to a Power BI dataset in another workspace are not supported.", 
        [_.errorDatasetConnectionUnsupportedOnPremLiveConnection]: "Datasets based on a live connection to an Azure Analysis Services or SQL Server Analysis Services model are not supported.",
        [_.errorDatasetConnectionUnsupportedPersonalWorkspace]: "Personal workspaces are not supported.",
        [_.errorDatasetConnectionUnsupportedPushDataset]: "Datasets with Push data are not supported.",
        [_.errorDatasetConnectionUnsupportedWorkspaceSku]: "Workspace capacity SKU not supported.",
        [_.errorDatasetsEmptyListing]: "No unopened datasets available.",
        [_.errorDatasetsListing]: "Unable to retrieve the list of datasets of Power BI Service.",
        [_.errorExportDataFileError]: "Something wrong happened while exporting data. Please try again.",
        [_.errorNetworkError]: "You are not connected to the Internet.",
        [_.errorNone]: "Unspecified error.",
        [_.errorNotAuthorized]: "You are not authorized to view the specified resource.",
        [_.errorNotConnected]: "You are not connected to Power BI - please sign in to proceed.",
        [_.errorNotFound]: "Unable to connect to the specified resource.",
        [_.errorReportConnectionUnknown]: "Invalid connection.",
        [_.errorReportConnectionUnsupportedAnalysisServecesCompatibilityMode]: "Power BI Desktop Analysis Services instance compatibility mode is not PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServecesConnectionNotFound]: "Power BI Desktop Analysis Services TCP connection not found.",
        [_.errorReportConnectionUnsupportedAnalysisServecesProcessNotFound]: "Power BI Desktop Analysis Services instance process not found.", 
        [_.errorReportConnectionUnsupportedConnectionException]: "An exception was raised when connecting to the Power BI Desktop Analysis Services instance.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionIsEmpty]: "The Power BI Desktop Analysis Services instance does not contain any databases. Try to connect to the report using the Bravo icon in the External Tools of Power BI Desktop.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "Power BI Desktop Analysis Services instance contains an unexpected number of databases (> 1) while we expect zero or one.",
        [_.errorReportConnectionUnsupportedProcessNotYetReady]: "Power BI Desktop process is opening or the Analysis Services instance is not yet ready.", 
        [_.errorReportsEmptyListing]: "No unopened reports available.",
        [_.errorReportsListing]: "Unable to attach to Power BI Desktop.<br>Try to reset the application.",
        [_.errorRetry]: "Retry",
        [_.errorSignInMsalExceptionOccurred]: "Unexpected error in the sign-in request.",
        [_.errorSignInMsalTimeoutExpired]: "The sign-in request was canceled because the timeout period expired before the operation was completed.",
        [_.errorTimeout]: "Request timeout.",
        [_.errorTitle]: "Whoops...",
        [_.errorTOMDatabaseDatabaseNotFound]: "The database does not exist in the collection or the user does not have administrator rights to access it.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "The requested update conflicts with the current state of the target resource.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "The requested update failed because one or more measures contain errors.", 
        [_.errorTOMDatabaseUpdateFailed]: "The database update failed while saving the local changes made to the model on database server.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `The requested update failed because the following measures contain errors:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Unhandled error - please report it and provide the trace id, if available.",
        [_.errorUnspecified]: "Unspecified error.",
        [_.errorUserSettingsSaveError]: "Unable to save the settings.",
        [_.errorVpaxFileContainsCorruptedData]: "The VPAX file format is not valid or contains corrupted data.",

    }
}
export default locale;