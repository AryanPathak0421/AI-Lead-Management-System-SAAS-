import { createFileRoute } from "@tanstack/react-router";
import {
  PageHeader,
  KpiCard,
  ChartCard,
} from "@/components/dash/Primitives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Flame,
  TrendingUp,
  DollarSign,
  Filter,
  Download,
  Sparkles,
  Mail,
  Calendar as CalendarIcon,
  Eye,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
import {
  kpis,
  conversionFunnel,
  salesVelocity,
  revenueTrend,
  leadSources,
  teamPerformance,
  activityTimeline,
  aiInsights,
} from "@/lib/mock-data";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · Aether AI" }] }),
  component: Dashboard,
});

const tooltipStyle = {
  background: "var(--color-card)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  fontSize: 12,
};

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Find & Prospect Leads"
        subtitle="Real-time intelligence across your entire pipeline."
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-1.5 h-4 w-4" />Filters</Button>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Export</Button>
            <Button size="sm" className="bg-gradient-brand shadow-elegant"><Sparkles className="mr-1.5 h-4 w-4" />AI Sourcing</Button>
          </>
        }
      />

      {/* KPI grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <KpiCard label="Total Leads" value="2,843" delta={12.4} icon={Users} />
        <KpiCard label="Qualified" value="1,284" delta={8.1} icon={Target} tone="accent" />
        <KpiCard label="High Intent" value="412" delta={24.6} icon={Flame} tone="warning" />
        <KpiCard label="Conversion Rate" value="24.6%" delta={3.2} icon={TrendingUp} tone="success" />
        <KpiCard label="Forecast Q3" value="$1.28M" delta={18.2} icon={DollarSign} tone="success" />
      </div>

      {/* Row 1: Funnel + Revenue */}
      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard
          title="Lead Conversion Funnel"
          description="Last 30 days"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={conversionFunnel} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
              <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis dataKey="stage" type="category" stroke="var(--color-muted-foreground)" fontSize={11} width={90} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {conversionFunnel.map((_, i) => (
                  <Cell key={i} fill={`var(--color-chart-${(i % 5) + 1})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Lead Sources" description="By channel">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={leadSources}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
              >
                {leadSources.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 2: Revenue trend + Velocity */}
      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard title="Revenue Trend" description="Actual vs forecast ($K)" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueTrend}>
              <defs>
                <linearGradient id="revActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="revForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="actual" stroke="var(--color-chart-1)" fill="url(#revActual)" strokeWidth={2} />
              <Area type="monotone" dataKey="forecast" stroke="var(--color-chart-2)" fill="url(#revForecast)" strokeWidth={2} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Sales Velocity" description="Deals closed this week">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={salesVelocity}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="deals" stroke="var(--color-chart-2)" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Row 3: Team perf + AI Insights + Activity */}
      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard title="Team Performance" description="Deals closed by rep">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={teamPerformance} margin={{ left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={10} angle={-15} textAnchor="end" height={50} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="deals" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="AI Insights"
          description="Generated by Sales Copilot"
          action={<Badge className="bg-gradient-brand text-white border-0"><Sparkles className="h-3 w-3 mr-1" />Live</Badge>}
        >
          <div className="space-y-3">
            {aiInsights.map((insight, i) => (
              <div key={i} className="rounded-lg border bg-gradient-subtle p-3">
                <div className="flex items-start gap-2">
                  <div className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded ${
                    insight.tone === "success" ? "bg-success/15 text-success" :
                    insight.tone === "warning" ? "bg-warning/20 text-warning" : "bg-info/15 text-info"
                  }`}>
                    <Zap className="h-3 w-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold">{insight.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{insight.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Activity Timeline" description="Latest events">
          <div className="space-y-3">
            {activityTimeline.map((a) => {
              const Icon = a.type === "visit" ? Eye : a.type === "email" ? Mail : a.type === "meeting" ? CalendarIcon : a.type === "deal" ? DollarSign : TrendingUp;
              return (
                <div key={a.id} className="flex gap-3 text-sm">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-xs">{a.title}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{a.subtitle}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground whitespace-nowrap">{a.time}</div>
                </div>
              );
            })}
          </div>
        </ChartCard>
      </div>

      {/* Row 4: Engagement heatmap */}
      <ChartCard title="Engagement Heatmap" description="Lead activity by day & hour">
        <Heatmap />
      </ChartCard>
    </div>
  );
}

function Heatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 12 }, (_, i) => `${i * 2}h`);
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="flex gap-1 pl-12 mb-1">
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-[10px] text-muted-foreground">{h}</div>
          ))}
        </div>
        {days.map((d, di) => (
          <div key={d} className="flex items-center gap-1 mb-1">
            <div className="w-12 text-[11px] text-muted-foreground">{d}</div>
            {hours.map((_, hi) => {
              const v = (Math.sin(di * 0.7 + hi * 0.5) + 1) / 2;
              const opacity = 0.15 + v * 0.85;
              return (
                <div
                  key={hi}
                  className="flex-1 h-7 rounded"
                  style={{ background: `oklch(0.68 0.12 195 / ${opacity})` }}
                  title={`${d} ${hi * 2}h: ${Math.round(v * 100)}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
