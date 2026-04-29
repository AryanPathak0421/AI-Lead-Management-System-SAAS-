import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, KpiCard, ChartCard } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target, DollarSign, Activity, Download } from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend,
  Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { conversionFunnel, leadSources, teamPerformance, revenueTrend } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Aether AI" }] }),
  component: Analytics,
});

const goalData = [
  { week: "W1", actual: 42, target: 50 },
  { week: "W2", actual: 58, target: 60 },
  { week: "W3", actual: 72, target: 70 },
  { week: "W4", actual: 85, target: 80 },
  { week: "W5", actual: 94, target: 90 },
  { week: "W6", actual: 112, target: 100 },
];

const sankeyFlow = [
  { from: "Lead Company", value: 100, label: "70.23%" },
  { from: "Lead Contacted", value: 70, label: "56.85%" },
  { from: "Qualified", value: 56, label: "47.40%" },
  { from: "Proposal Won", value: 34, label: "17.10%" },
  { from: "Refrent Won", value: 17, label: "8.50%" },
];

const tooltipStyle = { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 11 };

function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Aether Performance Analytics"
        subtitle="Lead velocity & success factors"
        actions={<Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Export</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Avg. Conversion Time" value="14 days" delta={-8} icon={Activity} tone="accent" />
        <KpiCard label="AI Follow-up Success" value="68%" delta={12} icon={Target} tone="success" />
        <KpiCard label="Avg. Deal Value" value="$2.75K" delta={6} icon={DollarSign} />
        <KpiCard label="Top Rep Win Rate" value="83%" delta={4} icon={Trophy} tone="warning" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard title="Overall Lead Conversion Funnel" description="Last 30 days · This Quarter" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={conversionFunnel}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="stage" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {conversionFunnel.map((_, i) => (
                  <Cell key={i} fill={`var(--color-chart-${(i % 5) + 1})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Follow-up Sequence Heatmap" description="Predictive Success Rate">
          <div className="space-y-2">
            {[88, 75, 75, 62, 54].map((v, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Sequence {i + 1}</span>
                  <span className="font-semibold">{v}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent to-primary" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard title="Lead Source & Campaign Attribution" description="By channel">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={leadSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {leadSources.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Goal Performance Tracking" description="Actual vs Target" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={goalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="week" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="actual" stroke="var(--color-chart-1)" strokeWidth={2.5} />
              <Line type="monotone" dataKey="target" stroke="var(--color-chart-4)" strokeWidth={2} strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="AI-Driven Deal Risk Assessment">
          <div className="space-y-3">
            {[
              { label: "High-risk deal · Soylent", risk: "High", value: 12000 },
              { label: "High-risk deal 1 · Hooli", risk: "High", value: 86000 },
              { label: "Medium-risk · Initech", risk: "Medium", value: 32000 },
              { label: "Low-risk · Acme Corp", risk: "Low", value: 48000 },
            ].map((d, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <div className="text-sm font-medium">{d.label}</div>
                  <div className="text-[11px] text-muted-foreground">${d.value.toLocaleString()}</div>
                </div>
                <Badge className={
                  d.risk === "High" ? "bg-destructive/15 text-destructive border-0" :
                  d.risk === "Medium" ? "bg-warning/15 text-warning border-0" :
                  "bg-success/15 text-success border-0"
                }>{d.risk}</Badge>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Top Sales Reps & Win Rates">
          <div className="space-y-3">
            {teamPerformance.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{r.name}</span>
                    <span className="font-semibold">{60 + r.deals / 2}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${60 + r.deals / 2}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <ChartCard title="Revenue Trend & Forecast" description="$K · 8 months">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={revenueTrend}>
            <defs>
              <linearGradient id="aRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey="actual" stroke="var(--color-chart-1)" fill="url(#aRev)" strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
