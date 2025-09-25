export interface Report {
  id: string;
  title: string;
  category: string;
  description: string;
  lastUpdated: string;
  htmlFile: string;
}

export const batteryReports: Report[] = [
  // 应用领域调研
  {
    id: "app-1",
    title: "eVTOL产品信息调研",
    category: "应用领域",
    description: "全球电动垂直起降飞行器市场、政策、动态与供应链分析",
    lastUpdated: "2024-03-20",
    htmlFile: "evtol-research.html"
  },
  {
    id: "app-2", 
    title: "低速车行业调研",
    category: "应用领域",
    description: "低速电动车电池市场洞察，包括客户需求、竞争格局和法规标准",
    lastUpdated: "2024-03-19",
    htmlFile: "low-speed-vehicle.html"
  },
  {
    id: "app-3",
    title: "移动储能行业调研",
    category: "应用领域", 
    description: "移动储能行业的客户需求洞察、竞争格局分析和全球法规标准",
    lastUpdated: "2024-03-18",
    htmlFile: "mobile-energy-storage.html"
  },
  // 电芯技术
  {
    id: "cell-1",
    title: "新发布电芯技术分析",
    category: "电芯技术",
    description: "新一代动力电芯市场洞察，涵盖不同形状、化学体系和制造商的最新产品",
    lastUpdated: "2024-03-17",
    htmlFile: "new-battery-cells.html"
  },
  {
    id: "cell-2",
    title: "新电池包调研分析",
    category: "电芯技术",
    description: "动力电池技术与市场洞察，汇集全球主要厂商的最新电池包技术信息",
    lastUpdated: "2024-03-16",
    htmlFile: "new-battery-packs.html"
  },
  {
    id: "cell-3",
    title: "竞品电芯安全技术进展",
    category: "电芯技术",
    description: "电动汽车电芯安全技术洞察，探索热失控防护、结构创新与无热蔓延技术",
    lastUpdated: "2024-03-15",
    htmlFile: "cell-safety-tech.html"
  },
  {
    id: "cell-4",
    title: "电池拆解分析数据库",
    category: "电芯技术",
    description: "综合性电池拆解分析报告，包含多家制造商的详细技术数据和性能对比",
    lastUpdated: "2024-03-14",
    htmlFile: "battery-teardown.html"
  },
  {
    id: "cell-5",
    title: "铁锂圆柱46系列电芯市场调研",
    category: "电芯技术",
    description: "近5年铁锂圆柱46系列电芯市场调研，包含主要厂商的技术参数和市场信息",
    lastUpdated: "2024-03-13",
    htmlFile: "battery-info-progress.html"
  },
  // 测试技术
  {
    id: "test-1",
    title: "测试方案调研",
    category: "测试技术",
    description: "主流电池制造商电芯测试方案概览，涵盖EVE、CATL、BYD等领先企业的测试解决方案",
    lastUpdated: "2024-03-12",
    htmlFile: "test-solution-research.html"
  },
  {
    id: "test-2",
    title: "测试工装调研",
    category: "测试技术",
    description: "主流电池公司液冷测试方案调研，聚焦行业领先企业的液冷散热工装及测试方案",
    lastUpdated: "2024-03-11",
    htmlFile: "test-equipment-research.html"
  },
  {
    id: "test-3",
    title: "测试焊接调研",
    category: "测试技术",
    description: "电池电芯焊接技术分析报告，涵盖各大厂商的焊接方式、材料选择和技术参数",
    lastUpdated: "2024-03-10",
    htmlFile: "test-welding-research.html"
  },
  // 工艺技术
  {
    id: "process-1",
    title: "干法电极工艺技术",
    category: "工艺技术",
    description: "全球干法电极技术研究报告，对比分析各公司的工艺路线和技术优势",
    lastUpdated: "2024-03-09",
    htmlFile: "dry-electrode-process.html"
  },
  {
    id: "process-2",
    title: "负极硅碳合浆产气技术",
    category: "工艺技术",
    description: "负极硅碳合浆产气技术对比分析，涵盖全球主要制造商的解决方案",
    lastUpdated: "2024-03-08",
    htmlFile: "silicon-carbon-slurry.html"
  },
  {
    id: "process-3",
    title: "双层涂布工艺技术",
    category: "工艺技术",
    description: "全球电池双层涂布技术对比报告，分析不同涂布策略和检测方法",
    lastUpdated: "2024-03-07",
    htmlFile: "double-layer-coating.html"
  },
  {
    id: "process-4",
    title: "UV喷涂工艺技术",
    category: "工艺技术",
    description: "全球电池行业UV喷涂技术对标报告，涵盖主要厂商的UV涂层应用情况",
    lastUpdated: "2024-03-06",
    htmlFile: "uv-coating.html"
  }
];

export const categories = ["应用领域", "电芯技术", "测试技术", "工艺技术"];