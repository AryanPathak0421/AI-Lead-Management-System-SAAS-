import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, BarChart3, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/_app/reports")({
  head: () => ({ meta: [{ title: "Reports · Aether AI" }] }),
  component: Reports,
});

const reports = [
  { title: "Executive Summary", desc: "Q3 performance overview", icon: TrendingUp, type: "Weekly", size: "2.4 MB" },
  { title: "Lead Conversion Report", desc: "Funnel & velocity metrics", icon: BarChart3, type: "Monthly", size: "1.8 MB" },
  { title: "Sales Rep Performance", desc: "Individual scorecards", icon: Users, type: "Weekly", size: "3.1 MB" },
  { title: "Revenue Forecast", desc: "12-month projection", icon: TrendingUp, type: "Quarterly", size: "4.2 MB" },
  { title: "Campaign Attribution", desc: "ROI by channel", icon: BarChart3, type: "Monthly", size: "1.2 MB" },
  { title: "Pipeline Health Check", desc: "Risk & opportunity scan", icon: FileText, type: "Weekly", size: "2.0 MB" },
];

function Reports() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports & Exports"
        subtitle="Download executive-ready insights"
        actions={<Button size="sm" className="bg-gradient-brand"><FileText className="mr-1.5 h-4 w-4" />New Report</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <Card key={r.title} className="shadow-card hover:shadow-elegant transition group">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand">
                  <r.icon className="h-5 w-5 text-white" />
                </div>
                <Badge variant="outline" className="text-[10px]">{r.type}</Badge>
              </div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.desc}</div>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />Updated 2h ago · {r.size}
                </div>
                <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
