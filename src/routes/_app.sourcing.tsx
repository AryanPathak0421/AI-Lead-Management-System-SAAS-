import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ChartCard, ScoreBar, StatusBadge, PersonAvatar } from "@/components/dash/Primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Linkedin, Globe, Mail, Sparkles, Building2, MapPin, Users } from "lucide-react";
import { leads } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/sourcing")({
  head: () => ({ meta: [{ title: "Prospect Sourcing · Aether AI" }] }),
  component: Sourcing,
});

const sources = [
  { name: "Website Forms", icon: Globe, count: 482, color: "bg-info/15 text-info" },
  { name: "LinkedIn Scraping", icon: Linkedin, count: 842, color: "bg-primary/10 text-primary" },
  { name: "Email Capture", icon: Mail, count: 312, color: "bg-warning/15 text-warning" },
  { name: "Social Media", icon: Sparkles, count: 264, color: "bg-accent/15 text-accent" },
];

function Sourcing() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Prospect Sourcing"
        subtitle="Discover, enrich, and import leads from any source."
        actions={<Button size="sm" className="bg-gradient-brand"><Sparkles className="mr-1.5 h-4 w-4" />AI Find Leads</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sources.map((s) => (
          <Card key={s.name} className="shadow-card hover:shadow-elegant transition">
            <CardContent className="p-5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-2xl font-semibold">{s.count.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">{s.name}</div>
              <Button variant="outline" size="sm" className="mt-3 w-full">Configure</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChartCard
        title="AI Search"
        description="Describe your ideal customer in natural language"
      >
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              defaultValue="SaaS companies, 50-200 employees, in London, raised Series A"
              className="pl-10 h-12 text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["SaaS", "50-200 emp", "London", "Series A", "Hiring sales"].map((t) => (
              <Badge key={t} variant="outline" className="border-accent/30 bg-accent/10 text-accent">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </ChartCard>

      <ChartCard
        title="Enriched Prospects"
        description="142 new leads discovered today"
        action={<Button size="sm" variant="outline">Import all</Button>}
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {leads.slice(0, 6).map((l) => (
            <Card key={l.id} className="hover:shadow-elegant transition">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <PersonAvatar name={l.name} />
                    <div>
                      <div className="text-sm font-semibold">{l.name}</div>
                      <div className="text-[11px] text-muted-foreground">{l.company}</div>
                    </div>
                  </div>
                  <StatusBadge status={l.intent} />
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1"><Building2 className="h-3 w-3" />{l.industry}</div>
                  <div className="flex items-center gap-1"><MapPin className="h-3 w-3" />{l.location}</div>
                  <div className="flex items-center gap-1"><Users className="h-3 w-3" />120 emp</div>
                  <div className="flex items-center gap-1"><Mail className="h-3 w-3" />verified</div>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <ScoreBar score={l.score} />
                  <Button size="sm" variant="outline" className="h-7 text-xs">Add to CRM</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
