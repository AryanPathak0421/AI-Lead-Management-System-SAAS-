import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ChartCard, KpiCard } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Brain, Sparkles } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/_app/predictive")({
  head: () => ({ meta: [{ title: "Predictive AI · Aether AI" }] }),
  component: Predictive,
});

const forecast = Array.from({ length: 12 }, (_, i) => ({
  month: `M${i + 1}`,
  predicted: 200 + i * 28 + Math.sin(i) * 20,
  confidence: 180 + i * 28,
}));

const churnRisk = [
  { company: "Hooli", probability: 78, value: 86000 },
  { company: "Soylent", probability: 64, value: 12000 },
  { company: "Stark Industries", probability: 42, value: 28000 },
  { company: "Initech", probability: 28, value: 32000 },
];

function Predictive() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Predictive Analytics Engine"
        subtitle="ML-powered forecasts and risk assessment"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Q4 Revenue Forecast" value="$4.2M" delta={22} icon={TrendingUp} tone="success" />
        <KpiCard label="Churn Risk Accounts" value="14" delta={-12} icon={AlertTriangle} tone="warning" />
        <KpiCard label="ML Model Confidence" value="92%" delta={3} icon={Brain} tone="accent" />
        <KpiCard label="AI Recommendations" value="38" delta={18} icon={Sparkles} />
      </div>

      <ChartCard title="12-Month Revenue Forecast" description="Predicted vs confidence band">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={forecast}>
            <defs>
              <linearGradient id="pred" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 11 }} />
            <Area type="monotone" dataKey="predicted" stroke="var(--color-chart-2)" fill="url(#pred)" strokeWidth={2.5} />
            <Area type="monotone" dataKey="confidence" stroke="var(--color-chart-1)" fill="transparent" strokeDasharray="4 4" strokeWidth={1.5} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Customer Churn Probability" description="Top at-risk accounts">
          <div className="space-y-3">
            {churnRisk.map((r) => (
              <div key={r.company} className="rounded-lg border p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm font-medium">{r.company}</div>
                    <div className="text-[11px] text-muted-foreground">${r.value.toLocaleString()} ARR</div>
                  </div>
                  <Badge className={r.probability > 60 ? "bg-destructive/15 text-destructive border-0" : "bg-warning/15 text-warning border-0"}>
                    {r.probability}% risk
                  </Badge>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${r.probability > 60 ? "bg-destructive" : "bg-warning"}`}
                    style={{ width: `${r.probability}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="AI Recommendations" description="Sales Copilot suggestions">
          <div className="space-y-3">
            {[
              { title: "Increase LinkedIn ad spend by 28%", impact: "+$84K MRR", tone: "success" },
              { title: "Schedule check-in with Hooli ASAP", impact: "Save $86K", tone: "warning" },
              { title: "Launch re-engagement for 142 cold leads", impact: "+$220K pipeline", tone: "info" },
              { title: "Promote Sarena T. to senior territory", impact: "+12% team perf", tone: "info" },
            ].map((r, i) => (
              <Card key={i} className="hover:shadow-elegant transition cursor-pointer">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{r.title}</div>
                    <div className="text-[11px] text-success font-semibold">{r.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
