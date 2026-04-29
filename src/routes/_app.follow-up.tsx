import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ChartCard } from "@/components/dash/Primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Clock, Sparkles, Plus, ChevronRight, Send } from "lucide-react";
import { followUpSequences } from "@/lib/mock-data";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export const Route = createFileRoute("/_app/follow-up")({
  head: () => ({ meta: [{ title: "AI Follow-Up · Aether AI" }] }),
  component: FollowUp,
});

const seqPerformance = [
  { day: "Day 1", openRate: 68, replyRate: 12, conversionRate: 4 },
  { day: "Day 3", openRate: 54, replyRate: 18, conversionRate: 7 },
  { day: "Day 7", openRate: 42, replyRate: 22, conversionRate: 12 },
  { day: "Day 14", openRate: 36, replyRate: 28, conversionRate: 18 },
  { day: "Day 21", openRate: 28, replyRate: 24, conversionRate: 22 },
];

const sequenceSteps = [
  { day: 1, type: "LinkedIn", title: "Connection Request", body: "Hi {{firstName}}, noticed your work on..." },
  { day: 4, type: "Email", title: "Personalized Intro", body: "AI-generated based on profile" },
  { day: 7, type: "Conditional", title: "Branch on sentiment", body: "If positive → demo invite" },
  { day: 10, type: "SMS", title: "Quick check-in", body: "Soft reminder" },
  { day: 14, type: "Email", title: "Case study", body: "Personalized industry case" },
];

function FollowUp() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Automated AI Follow-up Sequences"
        subtitle="Multi-channel cadences powered by GPT."
        actions={<Button size="sm" className="bg-gradient-brand"><Plus className="mr-1.5 h-4 w-4" />New Sequence</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {followUpSequences.map((s) => (
          <Card key={s.id} className="shadow-card hover:shadow-elegant transition cursor-pointer">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-[11px] text-muted-foreground">{s.steps} steps · {s.active} active</div>
                </div>
                <Badge className="bg-success/15 text-success border-0">Active</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider">Open</div>
                  <div className="text-lg font-semibold">{s.openRate}%</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground tracking-wider">Reply</div>
                  <div className="text-lg font-semibold">{s.replyRate}%</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">View<ChevronRight className="ml-1 h-3 w-3" /></Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ChartCard
          title="Sequence Builder"
          description="Initial Prospect Engagement · Warm Lead"
          className="lg:col-span-2"
          action={<Button size="sm" variant="outline"><Sparkles className="mr-1.5 h-3 w-3" />AI Edit</Button>}
        >
          <div className="space-y-3">
            {sequenceSteps.map((step, i) => {
              const Icon = step.type === "Email" ? Mail : step.type === "SMS" ? MessageSquare : step.type === "LinkedIn" ? Send : Clock;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white text-xs font-bold">
                      {step.day}
                    </div>
                    {i < sequenceSteps.length - 1 && <div className="my-1 h-10 w-px bg-border" />}
                  </div>
                  <div className="flex-1 rounded-lg border bg-card p-3 hover:border-accent/30 transition">
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                      <Badge variant="outline" className="text-[10px]">{step.type}</Badge>
                      <div className="text-sm font-medium">{step.title}</div>
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{step.body}</div>
                  </div>
                </div>
              );
            })}
            <Button variant="outline" className="w-full border-dashed">
              <Plus className="mr-1.5 h-4 w-4" />Add step
            </Button>
          </div>
        </ChartCard>

        <ChartCard title="Sequence Performance" description="Open · Reply · Convert">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={seqPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={10} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={10} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 11 }} />
              <Line type="monotone" dataKey="openRate" stroke="var(--color-chart-1)" strokeWidth={2} />
              <Line type="monotone" dataKey="replyRate" stroke="var(--color-chart-2)" strokeWidth={2} />
              <Line type="monotone" dataKey="conversionRate" stroke="var(--color-chart-3)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-2 border-t pt-3">
            <div className="text-xs font-semibold">AI Live Draft</div>
            <div className="rounded-lg bg-muted/40 p-3 text-[11px]">
              Hello Ayesha,<br/><br/>
              Saw Globex's Series A last week — congrats. Aether helps teams like yours close 3x faster with AI scoring.<br/><br/>
              Worth a 15-min call?<br/><br/>
              — Sales Copilot
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
