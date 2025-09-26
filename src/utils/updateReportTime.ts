import { batteryReports } from '../data/reports';

/**
 * 获取当前北京时间的日期字符串 (YYYY-MM-DD)
 */
export function getCurrentBeijingDate(): string {
  const now = new Date();
  // 北京时间是 UTC+8
  const beijingTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
  return beijingTime.toISOString().split('T')[0];
}

/**
 * 根据HTML文件名查找对应的报告并返回更新后的报告数据
 * @param htmlFileName HTML文件名 (例如: "battery-teardown.html")
 * @returns 更新后的报告数据字符串，可以直接复制到reports.ts中
 */
export function updateReportLastUpdated(htmlFileName: string): string {
  const currentDate = getCurrentBeijingDate();
  const report = batteryReports.find(r => r.htmlFile === htmlFileName);
  
  if (!report) {
    console.error(`未找到HTML文件 ${htmlFileName} 对应的报告`);
    return '';
  }

  console.log(`更新报告 "${report.title}" 的时间为: ${currentDate}`);
  
  // 生成更新后的报告对象字符串
  const updatedReport = `  {
    id: "${report.id}",
    title: "${report.title}",
    category: "${report.category}",
    description: "${report.description}",
    lastUpdated: "${currentDate}",
    htmlFile: "${report.htmlFile}"
  }`;

  return updatedReport;
}

/**
 * 批量更新多个报告的时间
 * @param htmlFileNames HTML文件名数组
 */
export function batchUpdateReportTimes(htmlFileNames: string[]): void {
  const currentDate = getCurrentBeijingDate();
  
  htmlFileNames.forEach(fileName => {
    const report = batteryReports.find(r => r.htmlFile === fileName);
    if (report) {
      console.log(`需要更新: ${report.title} -> ${currentDate}`);
    }
  });
}