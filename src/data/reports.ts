export interface Report {
  id: string;
  title: string;
  category: string;
  description: string;
  lastUpdated: string;
  htmlFile: string;
}

export const batteryReports: Report[] = [
  {
    id: "1",
    title: "锂离子电池正极材料技术发展报告",
    category: "正极材料",
    description: "深入分析磷酸铁锂、三元材料等正极材料的最新技术进展和市场应用",
    lastUpdated: "2024-03-15",
    htmlFile: "cathode-materials.html"
  },
  {
    id: "2",
    title: "负极材料石墨化工艺优化研究",
    category: "负极材料",
    description: "研究石墨负极材料的制备工艺、性能优化和成本控制策略",
    lastUpdated: "2024-03-14",
    htmlFile: "anode-materials.html"
  },
  {
    id: "3",
    title: "新型电解液添加剂性能评估",
    category: "电解液",
    description: "评估不同电解液添加剂对电池循环寿命和安全性能的影响",
    lastUpdated: "2024-03-13",
    htmlFile: "electrolyte-additives.html"
  },
  {
    id: "4",
    title: "聚烯烃隔膜技术发展趋势",
    category: "隔膜",
    description: "分析聚烯烃隔膜的技术演进路径和未来发展方向",
    lastUpdated: "2024-03-12",
    htmlFile: "separator-polyolefin.html"
  },
  {
    id: "5",
    title: "铝箔集流体表面处理技术",
    category: "箔材",
    description: "研究铝箔集流体的表面处理工艺对电池性能的影响",
    lastUpdated: "2024-03-11",
    htmlFile: "aluminum-foil.html"
  },
  {
    id: "6",
    title: "高镍三元正极材料稳定性研究",
    category: "正极材料",
    description: "深入探讨高镍三元材料的热稳定性和循环稳定性改善方法",
    lastUpdated: "2024-03-10",
    htmlFile: "high-nickel-cathode.html"
  },
  {
    id: "7",
    title: "硅碳复合负极材料制备工艺",
    category: "负极材料",
    description: "硅碳复合负极材料的制备技术和膨胀抑制策略研究",
    lastUpdated: "2024-03-09",
    htmlFile: "silicon-carbon-anode.html"
  },
  {
    id: "8",
    title: "固态电解质技术路线分析",
    category: "电解液",
    description: "对比分析硫化物、氧化物等固态电解质的技术特点和应用前景",
    lastUpdated: "2024-03-08",
    htmlFile: "solid-electrolyte.html"
  },
  {
    id: "9",
    title: "陶瓷涂覆隔膜性能研究",
    category: "隔膜",
    description: "陶瓷涂覆隔膜的热稳定性和安全性能提升机制研究",
    lastUpdated: "2024-03-07",
    htmlFile: "ceramic-coated-separator.html"
  },
  {
    id: "10",
    title: "铜箔表面粗糙度优化",
    category: "箔材",
    description: "铜箔集流体表面粗糙度对负极材料附着力的影响研究",
    lastUpdated: "2024-03-06",
    htmlFile: "copper-foil-roughness.html"
  },
  {
    id: "11",
    title: "磷酸锰铁锂正极材料开发",
    category: "正极材料",
    description: "新型磷酸锰铁锂正极材料的合成方法和性能优化",
    lastUpdated: "2024-03-05",
    htmlFile: "lmfp-cathode.html"
  },
  {
    id: "12",
    title: "快充负极材料设计策略",
    category: "负极材料",
    description: "针对快充应用的负极材料结构设计和性能提升策略",
    lastUpdated: "2024-03-04",
    htmlFile: "fast-charging-anode.html"
  },
  {
    id: "13",
    title: "低温电解液配方优化",
    category: "电解液",
    description: "低温环境下电解液配方的优化设计和性能验证",
    lastUpdated: "2024-03-03",
    htmlFile: "low-temp-electrolyte.html"
  },
  {
    id: "14",
    title: "功能性隔膜技术发展",
    category: "隔膜",
    description: "具有特殊功能的隔膜技术发展现状和应用前景",
    lastUpdated: "2024-03-02",
    htmlFile: "functional-separator.html"
  },
  {
    id: "15",
    title: "集流体轻量化技术研究",
    category: "箔材",
    description: "电池集流体轻量化技术路径和材料选择策略",
    lastUpdated: "2024-03-01",
    htmlFile: "lightweight-collector.html"
  },
  {
    id: "16",
    title: "钠离子电池正极材料调研",
    category: "正极材料",
    description: "钠离子电池正极材料的技术现状和产业化前景分析",
    lastUpdated: "2024-02-29",
    htmlFile: "sodium-cathode.html"
  },
  {
    id: "17",
    title: "预锂化负极技术研究",
    category: "负极材料",
    description: "负极材料预锂化技术的工艺方法和效果评价",
    lastUpdated: "2024-02-28",
    htmlFile: "prelithiated-anode.html"
  },
  {
    id: "18",
    title: "阻燃电解液技术发展",
    category: "电解液",
    description: "阻燃型电解液的技术路线和安全性能提升机制",
    lastUpdated: "2024-02-27",
    htmlFile: "flame-retardant-electrolyte.html"
  },
  {
    id: "19",
    title: "纳米纤维隔膜制备技术",
    category: "隔膜",
    description: "纳米纤维隔膜的制备工艺和性能优势分析",
    lastUpdated: "2024-02-26",
    htmlFile: "nanofiber-separator.html"
  },
  {
    id: "20",
    title: "复合集流体技术路线",
    category: "箔材",
    description: "复合材料集流体的设计理念和制备技术研究",
    lastUpdated: "2024-02-25",
    htmlFile: "composite-collector.html"
  },
  {
    id: "21",
    title: "无钴正极材料技术路径",
    category: "正极材料",
    description: "无钴正极材料的技术发展路径和性能优化策略",
    lastUpdated: "2024-02-24",
    htmlFile: "cobalt-free-cathode.html"
  },
  {
    id: "22",
    title: "金属锂负极保护技术",
    category: "负极材料",
    description: "金属锂负极的枝晶抑制和界面保护技术研究",
    lastUpdated: "2024-02-23",
    htmlFile: "lithium-metal-protection.html"
  },
  {
    id: "23",
    title: "离子液体电解液应用",
    category: "电解液",
    description: "离子液体电解液在锂电池中的应用潜力和技术挑战",
    lastUpdated: "2024-02-22",
    htmlFile: "ionic-liquid-electrolyte.html"
  },
  {
    id: "24",
    title: "智能隔膜技术发展",
    category: "隔膜",
    description: "具有智能响应功能的隔膜技术发展现状和应用前景",
    lastUpdated: "2024-02-21",
    htmlFile: "smart-separator.html"
  },
  {
    id: "25",
    title: "3D打印集流体技术",
    category: "箔材",
    description: "3D打印技术在集流体制备中的应用和优势分析",
    lastUpdated: "2024-02-20",
    htmlFile: "3d-printed-collector.html"
  },
  {
    id: "26",
    title: "回收正极材料再利用",
    category: "正极材料",
    description: "废旧电池正极材料回收再利用技术和经济性分析",
    lastUpdated: "2024-02-19",
    htmlFile: "recycled-cathode.html"
  },
  {
    id: "27",
    title: "生物质负极材料开发",
    category: "负极材料",
    description: "生物质来源负极材料的制备技术和性能研究",
    lastUpdated: "2024-02-18",
    htmlFile: "biomass-anode.html"
  },
  {
    id: "28",
    title: "水系电解液技术发展",
    category: "电解液",
    description: "水系电解液的技术发展现状和应用局限性分析",
    lastUpdated: "2024-02-17",
    htmlFile: "aqueous-electrolyte.html"
  },
  {
    id: "29",
    title: "生物基隔膜材料研究",
    category: "隔膜",
    description: "生物基材料在电池隔膜中的应用研究和环保优势",
    lastUpdated: "2024-02-16",
    htmlFile: "bio-based-separator.html"
  },
  {
    id: "30",
    title: "柔性集流体技术发展",
    category: "箔材",
    description: "柔性电池应用的集流体技术发展和材料选择",
    lastUpdated: "2024-02-15",
    htmlFile: "flexible-collector.html"
  }
];

export const categories = ["正极材料", "负极材料", "电解液", "隔膜", "箔材"];