import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

interface ReportCardProps {
  title: string;
  category: string;
  description: string;
  lastUpdated: string;
  onView: () => void;
}

export const ReportCard = ({ title, category, description, lastUpdated, onView }: ReportCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-tech-gradient rounded-lg">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-tech-blue transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            更新于 {lastUpdated}
          </span>
          <Button
            size="sm"
            onClick={onView}
            className="bg-tech-gradient hover:opacity-90 transition-opacity"
          >
            查看报告
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};