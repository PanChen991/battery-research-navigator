import { useState, useMemo } from "react";
import { ReportCard } from "@/components/ReportCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { batteryReports, categories } from "@/data/reports";
import { Battery, FileText, TrendingUp } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = useMemo(() => {
    return batteryReports.filter((report) => {
      const matchesCategory = selectedCategory === "全部" || report.category === selectedCategory;
      const matchesSearch = 
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleViewReport = (reportId: string) => {
    // 这里可以添加打开HTML报告的逻辑
    console.log("Opening report:", reportId);
    // 例如：window.open(`/reports/${reportId}.html`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-tech-gradient rounded-xl">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                电池研发报告中心
              </h1>
              <p className="text-muted-foreground">
                电池技术研发报告集中管理平台
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-tech-blue" />
                <span className="text-sm text-muted-foreground">总报告数</span>
              </div>
              <p className="text-2xl font-bold text-tech-blue">{batteryReports.length}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-tech-blue" />
                <span className="text-sm text-muted-foreground">技术领域</span>
              </div>
              <p className="text-2xl font-bold text-tech-blue">{categories.length}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-tech-blue" />
                <span className="text-sm text-muted-foreground">当前显示</span>
              </div>
              <p className="text-2xl font-bold text-tech-blue">{filteredReports.length}</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="space-y-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索报告标题或描述..."
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report, index) => (
            <div
              key={report.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ReportCard
                title={report.title}
                category={report.category}
                description={report.description}
                lastUpdated={report.lastUpdated}
                onView={() => handleViewReport(report.id)}
              />
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">未找到匹配的报告</h3>
            <p className="text-muted-foreground">
              请尝试调整搜索关键词或选择不同的分类
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
