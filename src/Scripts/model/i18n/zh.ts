/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "zh", // DO NOT TRANSLATE
    enName: "Chinese", // DO NOT TRANSLATE
    name: "中国",

    strings: {
        [_.addCtrlTitle]: "打开",
        [_.aggregatedTableName]: "源自多张表格",
        [_.AnalyzeModel]: "分析模型",
        [_.analyzeModelSummary]: `您的数据集大小是 <strong>{size:bytes}</strong> 并包含 <strong>{count}</strong> 列`,
        [_.analyzeModelSummary2]: `, 其中<span class="text-highlight"><strong>{count}</strong> 列在模型中未被引用</span>`,
        [_.appName]: "Bravo for Power BI", //DO NOT TRANSLATE
        [_.appUpdateAvailable]: "有可用的新版本: {version}",
        [_.appUpdateChangelog]: "更新日志",
        [_.appUpdateDownload]: "下载",
        [_.appUpdateViewDetails]: "查看详情",
        [_.appUpToDate]: "Bravo 已是最新版",
        [_.appVersion]: "版本 {version}",
        [_.backupReminder]: "在继续下一步之前，请务必保存您当前报告的备份 - <b>部分更改操作之后有可能无法撤销</b>.",
        [_.BestPractices]: "最佳实践",
        [_.canceled]: "已取消",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "已添加",
        [_.changeStatusDeleted]: "D",
        [_.changeStatusDeletedTitle]: "已删除",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "已修改",
        [_.checking]: "检查...",
        [_.clearCtrlTitle]: "清空",
        [_.closeCtrlTitle]: "关闭",
        [_.closeOtherTabs]: "关闭其他",
        [_.closeTab]: "关闭",
        [_.collapseAllCtrlTitle]: "折叠全部",
        [_.columnExportedCompleted]: "表格已成功导出。",
        [_.columnExportedFailed]: "由于未知错误，表格未能成功导出。",
        [_.columnExportedTruncated]: "由于行数超过了允许的最大值，表格被截断。",
        [_.columnMeasureFormatted]: "该度量值已经是标准格式",
        [_.columnMeasureNotFormattedTooltip]: "该度量值不是标准格式",
        [_.columnMeasureWithError]: "该度量值包含错误",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">未引用的列</span> 通常可以从模型中移除以优化性能。在移除之前, 请确保您没有在任何报告页面中使用这些列, 这一点Bravo无法为您做出判断。`,
        [_.columnUnreferencedTooltip]: "在当前模型中没有对该列的引用",
        [_.confirmTabCloseMessage]: "您尚未保存对本文件的修改.<br>您确定要关闭吗?",
        [_.connectBrowse]: "浏览",
        [_.connectDatasetsTableEndorsementCol]: "认可",
        [_.connectDatasetsTableNameCol]: "名称",
        [_.connectDatasetsTableOwnerCol]: "管理员",
        [_.connectDatasetsTableWorkspaceCol]: "工作区",
        [_.connectDialogAttachPBIMenu]: "powerbi.com 数据集",
        [_.connectDialogConnectPBIMenu]: "运行的Power BI Desktop报告",
        [_.connectDialogOpenVPXMenu]: "VPAX 文件",
        [_.connectDialogTitle]: "打开",
        [_.connectDragFile]: "拖拽一个VPAX文件到这里<br>或者浏览您的电脑",
        [_.connectNoReports]: "当前没有正在运行的Power BI Desktop报告.<br>请用Power BI Desktop打开一个报告并等待它出现在本窗口。",
        [_.copiedErrorDetails]: "已复制",
        [_.copy]: "复制",
        [_.copyErrorDetails]: "复制错误",
        [_.copyFormulaCtrlTitle]: "复制标准格式的度量值",
        [_.copyMessage]: "复制消息",
        [_.copyright]: "版权所有",
        [_.createIssue]: "报告问题",
        [_.cut]: "剪切",
        [_.dataUsageLink]: "如何使用您的数据?",
        [_.dataUsageMessage]: `为了对您的代码进行标准格式化, Bravo 会将数据集中的度量值通过一个安全的连接发送给由SQLBI管理的DAX Formatter服务接口.<p><strong>该服务不会在任何地方存储您的数据和代码。</strong></p><p>出于数据统计目的，有些信息可能会被收集，比如：最常用的DAX函数，代码复杂程度或者平均代码长度等。</p>`,
        [_.dataUsageTitle]: "如何使用您的数据?",
        [_.DaxFormatter]: "DAX标准格式化",
        [_.daxFormatterAgreement]: "Bravo需要将您的度量值发送到DAX Formatter服务接口以进行标准格式化",
        [_.daxFormatterAnalyzeConfirm]: "出于分析目的, Bravo需要将所有度量值发送给DAX Formatter服务接口。您确定继续吗?",
        [_.daxFormatterAutoPreviewOption]: "自动预览",
        [_.daxFormatterFormat]: "标准格式化选中的度量值",
        [_.daxFormatterFormatDisabled]: "标准格式化 (不支持)",
        [_.daxFormatterFormattedCode]: "标准格式 (预览)",
        [_.daxFormatterOriginalCode]: "当前格式",
        [_.daxFormatterPreviewAllButton]: "预览所有度量值",
        [_.daxFormatterPreviewButton]: "预览",
        [_.daxFormatterPreviewDesc]: "为生成标准格式预览, Bravo需要将该度量值发送给DAX Formatter服务接口。",
        [_.daxFormatterSuccessSceneMessage]: "恭喜, <strong>{count} 个度量值</strong> 已成功标准格式化。",
        [_.daxFormatterSummary]: `您的数据集包含 {count} 个度量值: <span class="text-error"><strong>{errors:number}</strong> 个存在错误</strong></span>, <span class="text-highlight"><strong>{formattable:number}</strong> 个需要格式优化</span>, <strong>{analyzable:number}</strong> 个待分析 (<span class="link manual-analyze">现在分析</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `您的数据集包含 <strong>{count}</strong> 个度量值: <span class="text-error"><strong>{errors:number}</strong> 个存在错误</strong></span> 以及 <span class="text-highlight"><strong>{formattable:number}</strong> 个需要格式优化</span>`,
        [_.defaultTabName]: "未命名",
        [_.dialogCancel]: "取消",
        [_.dialogOK]: "确定",
        [_.dialogOpen]: "打开",
        [_.docLimited]: "受限制的",
        [_.docLimitedTooltip]: "本文件部分功能不能完全使用。",
        [_.doneCtrlTitle]: "完成",
        [_.emailAddress]: "电子邮件",
        [_.emailAddressPlaceholder]: "输入您的电子邮件",
        [_.error]: "错误",
        [_.errorAborted]: "操作中止",
        [_.errorAnalysisServicesConnectionFailed]: "数据库与Bravo连接错误",
        [_.errorCheckForUpdates]: "不能查看更新 - 无法连接远程数据库",
        [_.errorConnectionUnsupported]: "不支持目标资源的连接",
        [_.errorDatasetConnectionUnknown]: "未指定连接",
        [_.errorDatasetsEmptyListing]: "未找到打开的报告",
        [_.errorDatasetsListing]: "无法获取Power BI Service的数据集列表",
        [_.errorExportDataFileError]: "导出数据时出现错误。请稍后再试。",
        [_.errorGetEnvironments]: "请输入有效的Power BI帐户。",
        [_.errorManageDateTemplateError]: "DAX模板引擎启动异常",
        [_.errorNetworkError]: "您没有连接到网络",
        [_.errorNone]: "未知错误",
        [_.errorNotAuthorized]: "您没有权限查看指定的资源",
        [_.errorNotConnected]: "您没有连接到Power BI, 请登录后再试",
        [_.errorNotFound]: "不能连接到指定资源",
        [_.errorReportConnectionUnknown]: "无效连接",
        [_.errorReportConnectionUnsupportedAnalysisServicesCompatibilityMode]: "Power BI Desktop Analysis Services 实例的兼容模式不是 PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServicesConnectionNotFound]: "未找到Power BI Desktop Analysis Services的TCP连接",
        [_.errorReportConnectionUnsupportedAnalysisServicesProcessNotFound]: "未找到Power BI Desktop Analysis Services 实例的进程",
        [_.errorReportConnectionUnsupportedConnectionException]: "Power BI Desktop Analysis Services 实例连接异常",
        [_.errorReportConnectionUnsupportedDatabaseCollectionEmpty]: "Power BI Desktop Analysis Services 实例不包含任何数据库。 请尝试通过Power BI Desktop的 外部工具 选项卡下的Bravo图标连接到报告。",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "Power BI Desktop Analysis Services 实例包含多个数据库, 而我们只需要0个或1个。",
        [_.errorReportConnectionUnsupportedProcessNotReady]: "Power BI Desktop进程正在打开, 或者Analysis Services实例尚未准备好。",
        [_.errorReportsEmptyListing]: "没找到未打开的报告",
        [_.errorRetry]: "再试一次",
        [_.errorSignInMsalExceptionOccurred]: "登录请求出现异常",
        [_.errorSignInMsalTimeoutExpired]: "操作超时, 登录请求被取消",
        [_.errorTimeout]: "请求超时",
        [_.errorTitle]: "Whoops...",
        [_.errorTOMDatabaseDatabaseNotFound]: "该数据库不存在, 或者用户没有管理员访问权限",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "更新请求与目标资源的当前状态有冲突",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "更新请求失败, 一个或多个度量值存在错误",
        [_.errorTOMDatabaseUpdateFailed]: "尝试将本地模型修改保存到数据库服务器时, 数据库更新失败",
        [_.errorTryingToUpdateMeasuresWithErrors]: `更新请求失败, 因为以下度量值包含错误: <br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "未经处理的错误 - 请提交该错误并提供Trace ID(如果有Trace ID的话)",
        [_.errorUnspecified]: "未知错误",
        [_.errorUserSettingsSaveError]: "无法保存设置",
        [_.errorVpaxFileExportError]: "在导出VPAX文件时发生了一个错误。",
        [_.errorVpaxFileImportError]: "在导入VPAX文件时发生错误。",
        [_.expandAllCtrlTitle]: "扩展全部",
        [_.ExportData]: "导出数据",
        [_.exportDataCSVCustomDelimiter]: "自定义分隔符",
        [_.exportDataCSVDelimiter]: "分隔符",
        [_.exportDataCSVDelimiterComma]: "逗号",
        [_.exportDataCSVDelimiterDesc]: `选择字符作为每个字段的分隔符. <em>自动</em> 使用您系统设置的默认字符`,
        [_.exportDataCSVDelimiterOther]: "其他...",
        [_.exportDataCSVDelimiterPlaceholder]: "字符",
        [_.exportDataCSVDelimiterSemicolon]: "分号",
        [_.exportDataCSVDelimiterSystem]: "自动",
        [_.exportDataCSVDelimiterTab]: "制表符",
        [_.exportDataCSVEncoding]: "编码格式",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "保存在子文件夹中",
        [_.exportDataCSVFolderDesc]: "将生成的CSV文件保存在子文件夹中。",
        [_.exportDataCSVQuote]: "用引号包含字符串",
        [_.exportDataCSVQuoteDesc]: "确保每一个字符串都包含在双引号中",
        [_.exportDataExcelCreateExportSummary]: "导出记录日志",
        [_.exportDataExcelCreateExportSummaryDesc]: "在导出文件中添加一页记录所有导出明细的日志",
        [_.exportDataExport]: "导出选中的表",
        [_.exportDataExportAs]: "导出为",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "正在导出 {table}...",
        [_.exportDataExportingDone]: "完成!",
        [_.exportDataNoColumns]: "这个表不能被导出,因为它没有包含任何列。",
        [_.exportDataNotQueryable]: "这个表不能被导出，因为它包含一个或多个具有无效表达式的计算列或需要重新计算的列。",
        [_.exportDataOpenFile]: "打开导出文件",
        [_.exportDataOpenFolder]: "打开导出文件所在的文件夹",
        [_.exportDataOptions]: "导出选项",
        [_.exportDataStartExporting]: "初始化...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} </strong> 张表成功导出",
        [_.exportDataSummary]: "您的数据集包含 <strong>{count} </strong> 张可以导出的表",
        [_.exportDataTypeCSV]: "CSV (逗号分隔)",
        [_.exportDataTypeXLSX]: "Excel 工作簿",
        [_.failed]: "失败",
        [_.filterMeasuresWithErrorsCtrlTitle]: "只显示尚未格式化或者包含错误的度量值",
        [_.filterUnrefCtrlTitle]: "只显示未被引用的列",
        [_.formattingMeasures]: "正在标准格式化您的度量值...",
        [_.goBackCtrlTitle]: "取消并后退",
        [_.groupByTableCtrlTitle]: "以表格名分组",
        [_.helpConnectVideo]: "如何连接",
        [_.helpCtrlTitle]: "帮助",
        [_.hideUnsupportedCtrlTitle]: "仅支持", // To Do: double check
        [_.less]: "更少",// To Do: double check
        [_.license]: "Released under MIT license.", // To Do: double check
        [_.loading]: "加载...",
        [_.ManageDates]: "管理日期表",
        [_.manageDatesApplyCtrlTitle]: "应用更改",
        [_.manageDatesAuto]: "自动",
        [_.manageDatesAutoScan]: "自动扫描",
        [_.manageDatesAutoScanActiveRelationships]: "活动的关系",
        [_.manageDatesAutoScanDesc]: "设置 <em>全局</em> 扫描数据集中所有包含日期的列. 设置 <em>选择列...</em> 选取要扫描的日期列. 设置 <em>活动的关系</em> 和 <em>非活动的关系</em> 仅扫描通过关系关联的日期列",
        [_.manageDatesAutoScanDisabled]: "禁用",
        [_.manageDatesAutoScanFirstYear]: "起始年份",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "全局",
        [_.manageDatesAutoScanInactiveRelationships]: "非活动的关系",
        [_.manageDatesAutoScanLastYear]: "最终年份",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "选择列...",
        [_.manageDatesBrowserPlaceholder]: "没有要更改的项目",
        [_.manageDatesCalendarDesc]: "选择一个日历模板来应用于这个模型。Bravo将创建或更新所需的日期表, 同时保持现有关系不变。",
        [_.manageDatesCalendarTemplateName]: "日历模板",
        [_.manageDatesCalendarTemplateNameDesc]: "选择 <em>月份模板</em>生成月份维度细分日历表. 选择 <em>周模板</em> 生成 445-454-544-ISO 标准日历表. 选择 <em>自定义</em> 生成可灵活自定义时间跨度的日历表.",
        [_.manageDatesCreatingTables]: "更新模型...",
        [_.manageDatesDatesDesc]: "设置您模型中日期的格式与区域",
        [_.manageDatesDatesTableDesc]: "您可以在报告中使用这张日期表",
        [_.manageDatesDatesTableName]: "日期表",
        [_.manageDatesDatesTableReferenceDesc]: "这是一张隐藏表, 包含生成日期表的所有DAX函数代码",
        [_.manageDatesDatesTableReferenceName]: "日期表定义",
        [_.manageDatesHolidaysDesc]: "在您的模型中添加假期表. Bravo会创建或更新所需表格, 并保持现有关系不变",
        [_.manageDatesHolidaysEnabledDesc]: "在您的模型中添加假期表",
        [_.manageDatesHolidaysEnabledName]: "假期",
        [_.manageDatesHolidaysTableDefinitionDesc]: "这是一张隐藏表, 包含生成假期表的所有DAX函数代码",
        [_.manageDatesHolidaysTableDefinitionName]: "假期定义表",
        [_.manageDatesHolidaysTableDesc]: "这是您可以在报告中使用的假期表",
        [_.manageDatesHolidaysTableName]: "假期表",
        [_.manageDatesIntervalDesc]: "为您的模型选择一个时间区间",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "特定国家的假期",
        [_.manageDatesISOCustomFormatDesc]: "选择一个IETF BCP语言标记来定义区域格式, 例如: en-US",
        [_.manageDatesISOCustomFormatName]: "自定义格式",
        [_.manageDatesISOFormatDesc]: "选择一个日期的区域格式",
        [_.manageDatesISOFormatName]: "区域格式",
        [_.manageDatesISOFormatOther]: "其他...",
        [_.manageDatesISOFormatOtherPlaceholder]: "区域",
        [_.manageDatesMenuCalendar]: "日历",
        [_.manageDatesMenuDates]: "日期",
        [_.manageDatesMenuHolidays]: "假期",
        [_.manageDatesMenuInterval]: "时间区间",
        [_.manageDatesMenuPreviewCode]: "表达式",
        [_.manageDatesMenuPreviewModel]: "模型更改",
        [_.manageDatesMenuPreviewTable]: "示例数据",
        [_.manageDatesMenuPreviewTreeDate]: "日期",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "日期与假期",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "时间智能",
        [_.manageDatesMenuTimeIntelligence]: "时间智能",
        [_.manageDatesModelCheck]: "查看模型",
        [_.manageDatesPreview]: "预览",
        [_.manageDatesPreviewCtrlTitle]: "变更预览",
        [_.manageDatesSampleData]: "示例数据",
        [_.manageDatesSampleDataError]: "无法生成示例数据",
        [_.manageDatesStatusCompatible]: `<div class="hero">您的模型已经包含与Bravo<b>兼容的日期表</b>.</div>如果您在这里做了修改,您的日期表将随之更新,而已经建立的关系不会受到影响`,
        [_.manageDatesStatusError]: `<div class="hero">无法应用当前设置</div> 错误 {error}`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">您的模型包含与Bravo <b>不兼容的日期表</b>.</div>如要修改, 请为Bravo将要自动生成的一张或多张表指定其他的名字.<br><br>查看 <b>日期</b> 和 <b>假期</b>.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">您的模型不再有效.</div> 请尝试重新启动应用.`,
        [_.manageDatesStatusOk]: `<div class="hero">您的模型 <b>可以使用管理日期表功能</b>.</div>您可以创建新的日期表, 不会影响现有度量值和报告.`,
        [_.manageDatesSuccessSceneMessage]: "恭喜,您的模型已经更新成功",
        [_.manageDatesTemplateFirstDayOfWeek]: "每周的第一天",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "对于ISO周, 请选择 <em>周一</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "每年的第一个月",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "对于ISO周, 请选择 <em>一月</em>.",
        [_.manageDatesTemplateMonthsInYear]: "一年中的月份",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "标准模板",
        [_.manageDatesTemplateNameConfig02]: "月模板",
        [_.manageDatesTemplateNameConfig03]: "自定义",
        [_.manageDatesTemplateNameConfig04]: "周模板",
        [_.manageDatesTemplateQuarterWeekType]: "周历系统",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "定义会计年度的日期",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "对于ISO周, 请选择 <em>年度最后一天</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "年度第一天",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "年度最后一天",
        [_.manageDatesTemplateWeeklyType]: "年度最后一个工作日",
        [_.manageDatesTemplateWeeklyTypeDesc]: "如果您的每一周从周日开始, 那么前一个工作日就是周六. 如果您选择 <em>年度最后一个工作日</em> 那么财政年度将在最后一个月的最后一个周六结束. 否则, 财政年度将在最接近年底最后一天的周六结束 - 这个周六有可能出现在下一年. 对于周模板, 选择 <em>最接近年底的工作日</em>.",
        [_.manageDatesTemplateWeeklyTypeLast]: "年度最后一个工作日",
        [_.manageDatesTemplateWeeklyTypeNearest]: "最接近年底的工作日",
        [_.manageDatesTimeIntelligenceDesc]: "为您的模型创建最常见的时间智能DAX函数",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "时间智能函数",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "所有的度量值",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "选择度量值...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "选择要创建时间智能函数的度量值.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "目标度量值",
        [_.manageDatesYearRange]: "日期区间",
        [_.manageDatesYearRangeDesc]: "为您的模型定义一个时间区间. 如果不填 <em>起始年份</em> 和/或 <em>结束年份</em> 就会应用自动扫描的结果",
        [_.menuCtrlTitle]: "收起/展开菜单",
        [_.minimizeCtrlTitle]: "最小化",
        [_.modelLanguage]: "模型语言 ({culture})",
        [_.more]: "更多",
        [_.notificationCtrlTitle]: "通知",
        [_.notificationsTitle]: "{count} 个通知",
        [_.openSourcePayoff]: "{appName} 是一个SQLBI与Github社区共同开发和维护的一款开源工具. 加入我们",
        [_.openWithDaxFormatterCtrlTitle]: "使用DAX Formatter在线标准格式化",
        [_.optionAccount]: "Power BI 账户",
        [_.optionAccountDescription]: "设置您的账户以访问Power BI 在线数据集",
        [_.optionBrowserAuthentication]: "在浏览器中进行身份验证",
        [_.optionBrowserAuthenticationDescription]: "使用默认浏览器进行身份验证。这是一种替代登录方法，可用于解决两因素身份验证的问题。",
        [_.optionCheckForUpdates]: "自动检查更新",
        [_.optionDiagnostic]: "诊断级别",
        [_.optionDiagnosticDescription]: "在诊断窗格中显示错误和日志. 选择 <em>基本</em> 记录部分信息 (这些信息将被匿名化). <em>详细</em> 记录所有信息(所有信息将完整保留)",
        [_.optionDiagnosticLevelBasic]: "基本",
        [_.optionDiagnosticLevelNone]: "无",
        [_.optionDiagnosticLevelVerbose]: "详细",
        [_.optionDiagnosticMore]: "要报告应用错误, 请使用",
        [_.optionFormattingBreaks]: "度量值名称-表达式 区分",
        [_.optionFormattingBreaksAuto]: "自动",
        [_.optionFormattingBreaksDescription]: "如何区分度量值的名称与其表达式. 选择 <em>自动</em> 以自动确定模型中使用的样式",
        [_.optionFormattingBreaksInitial]: "换行",
        [_.optionFormattingBreaksNone]: "同一行",
        [_.optionFormattingIncludeTimeIntelligence]: "包括时间智能",
        [_.optionFormattingIncludeTimeIntelligenceDescription]: "包括通过管理日期自动创建的措施以供时间智能创建。",
        [_.optionFormattingLines]: "代码行",
        [_.optionFormattingLinesDescription]: "选择使用长代码行或短代码行",
        [_.optionFormattingLinesValueLong]: "长代码行",
        [_.optionFormattingLinesValueShort]: "短代码行",
        [_.optionFormattingPreview]: "自动预览",
        [_.optionFormattingPreviewDescription]: "自动发送度量值到DAX Formatter并生成预览",
        [_.optionFormattingSeparators]: "分隔符",
        [_.optionFormattingSeparatorsDescription]: "选择小数点符号以及列表分隔符",
        [_.optionFormattingSeparatorsValueAuto]: "自动",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "空格",
        [_.optionFormattingSpacesDescription]: "函数名称后是否加空格",
        [_.optionFormattingSpacesValueBestPractice]: "最佳实践",
        [_.optionFormattingSpacesValueFalse]: "无空格 - IF( ",
        [_.optionFormattingSpacesValueTrue]: "有空格 - IF ( ",
        [_.optionInvalidValue]: "无效值",
        [_.optionLanguage]: "语言",
        [_.optionLanguageDescription]: "选择Bravo的语言, 需要重新加载",
        [_.optionLanguageResetConfirm]: "您需要重新加载Bravo以应用新的语言设置吗?",
        [_.optionPolicyNotice]: "此选项由您的组织管理。",
        [_.optionProxyAddress]: "代理服务器地址",
        [_.optionProxyAddressDescription]: "提供代理服务器的地址。",
        [_.optionProxyBypassList]: "排除地址列表",
        [_.optionProxyBypassListDescription]: "使用代理服务器，除了以插入条目开头的地址。使用分号（;）分开条目。",
        [_.optionProxyBypassOnLocal]: "绕过本地地址",
        [_.optionProxyBypassOnLocalDescription]: "请勿将代理与本地（Intranet）地址一起使用。",
        [_.optionProxyConfirmDeleteCredentials]: "您确定从系统中删除自定义凭据吗？",
        [_.optionProxyCustomCredentials]: "自定义凭据",
        [_.optionProxyCustomCredentialsDescription]: "使用自定义凭据对代理服务器进行身份验证。离开以使用系统凭据。",
        [_.optionProxyCustomCredentialsEdit]: "编辑自定义凭据",
        [_.optionProxyType]: "代理服务器",
        [_.optionProxyTypeCustom]: "风俗",
        [_.optionProxyTypeDescription]: "选择代理服务器。",
        [_.optionProxyTypeNone]: "没有任何",
        [_.optionProxyTypeSystem]: "系统",
        [_.optionsDialogAboutMenu]: "关于",
        [_.optionsDialogFormattingMenu]: "格式化",
        [_.optionsDialogGeneralMenu]: "通用",
        [_.optionsDialogProxyMenu]: "代理",
        [_.optionsDialogTelemetryMenu]: "诊断",
        [_.optionsDialogTitle]: "选项",
        [_.optionTelemetry]: "远程诊断",
        [_.optionTelemetryDescription]: "匿名地将使用数据发送给SQLBI",
        [_.optionTelemetryMore]: "这将帮助我们理解您怎样使用Bravo以及如何继续优化。我们不会收集任何个人信息。请注意,如果您禁用该选项, 开发团队将无法收集任何未处理的错误或提供额外的信息或支持.",
        [_.optionTheme]: "主题",
        [_.optionThemeDescription]: "设置Bravo主题, 设置 <em>系统</em> 让操作系统选择",
        [_.optionThemeValueAuto]: "系统",
        [_.optionThemeValueDark]: "深色模式",
        [_.optionThemeValueLight]: "浅色模式",
        [_.otherColumnsRowName]: "较小的列...",
        [_.paste]: "粘贴",
        [_.powerBiObserving]: "等待Power BI Desktop打开文件...",
        [_.powerBiObservingCancel]: "取消",
        [_.powerBiSigninDescription]: "登录Power BI Service将您的在线数据集连接到Bravo",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "连接到 Power BI Desktop",
        [_.quickActionConnectPBITitle]: "连接到 Power BI Service",
        [_.quickActionOpenVPXTitle]: "打开一个Vertipaq Analyzer文件",
        [_.refreshCtrlTitle]: "刷新",
        [_.refreshPreviewCtrlTitle]: "刷新预览",
        [_.saveVpaxCtrlTile]: "另存为 VPAX",
        [_.savingVpax]: "生成 VPAX...",
        [_.sceneUnsupportedReason]: "该数据源不能使用此功能.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `不支持启用自动日期/时间选项的模型.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/">Power BI禁用自动日期/时间 (video)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "该功能需要数据库中至少有一张表",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "该功能仅由Power BI桌面模式下的模型支持.",
        [_.sceneUnsupportedReasonMetadataOnly]: "该数据库是由VPAX文件生成的, 其中只包括其元数据.",
        [_.sceneUnsupportedReasonReadOnly]: "与该数据库的连接是只读的.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "该数据集不支持XMLA端点.",
        [_.sceneUnsupportedTitle]: "不支持",
        [_.searchColumnPlaceholder]: "搜索列",
        [_.searchDatasetPlaceholder]: "搜索数据集",
        [_.searchEntityPlaceholder]: "搜索表/列",
        [_.searchMeasurePlaceholder]: "搜索度量值",
        [_.searchPlaceholder]: "搜索",
        [_.searchTablePlaceholder]: "搜索表",
        [_.settingsCtrlTitle]: "选项",
        [_.sheetOrphan]: "不可用",
        [_.sheetOrphanPBIXTooltip]: "该报告已经在Power BI Desktop关闭. 不允许任何写入操作",
        [_.sheetOrphanTooltip]: "这个模型已经不可用. 不允许任何写入操作.",
        [_.showDiagnosticPane]: "显示明细",
        [_.sideCtrlTitle]: "切换并列式视图",
        [_.signedInCtrlTitle]: "以 {name} 登录",
        [_.signIn]: "登录",
        [_.signInCtrlTitle]: "登录",
        [_.signOut]: "退出",
        [_.sqlbiPayoff]: "Bravo是SQLBI的项目.",
        [_.syncCtrlTitle]: "同步",
        [_.tableColCardinality]: "基数",
        [_.tableColCardinalityTooltip]: "非重复项的数量",
        [_.tableColColumn]: "列",
        [_.tableColColumns]: "列",
        [_.tableColMeasure]: "度量值",
        [_.tableColPath]: "表 \\ 列",
        [_.tableColRows]: "行",
        [_.tableColSize]: "大小",
        [_.tableColTable]: "表",
        [_.tableColWeight]: "占比",
        [_.tableSelectedCount]: "{count} 选中的",
        [_.tableValidationInvalid]: "不能使用这个名称",
        [_.tableValidationValid]: "这个名称有效",
        [_.themeCtrlTitle]: "主题变更",
        [_.toggleTree]: "切换树形图",
        [_.traceId]: "跟踪ID",
        [_.unknownMessage]: "收到的信息无效",
        [_.updateChannelBeta]: "测试版",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "开发版",
        [_.updateChannelStable]: "稳定版",
        [_.updateMessage]: "Bravo有可用的新版本: {version}",
        [_.validating]: "正在验证...",
        [_.version]: "版本",
        [_.welcomeHelpText]: "观看以下视频学习如何使用Bravo:",
        [_.welcomeHelpTitle]: "如何使用Bravo?",
        [_.welcomeText]: "Bravo是一个方便实用的Power BI工具包, 你可以用它来分析您的模型, 标准格式化您的度量值, 创建日期表, 并导出数据。",
        [_.whitespacesTitle]: "空白区域",
        [_.wrappingTitle]: "文本自动换行",
    }
}
export default locale;