import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, ScoreBar, StatusBadge, PersonAvatar } from "@/components/dash/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Plus, Filter, Download } from "lucide-react";
import { leads, type Lead } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/leads")({
  head: () => ({ meta: [{ title: "My Leads · Aether AI" }] }),
  component: LeadsPage,
});

const stages: Lead["status"][] = ["New", "Contacted", "Qualified", "Proposal", "Won"];

function LeadsPage() {
  const [q, setQ] = useState("");
  const filtered = leads.filter((l) =>
    [l.name, l.company, l.email].some((v) => v.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="My High-Velocity Lead Board"
        subtitle="Sourced & actively engaged · 2,843 total"
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-1.5 h-4 w-4" />Filter</Button>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Export</Button>
            <Button size="sm" className="bg-gradient-brand"><Plus className="mr-1.5 h-4 w-4" />New Lead</Button>
          </>
        }
      />

      <Tabs defaultValue="table">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
          <TabsList>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="kanban">Pipeline Board</TabsTrigger>
          </TabsList>
          <div className="relative md:max-w-sm flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search leads, companies..." className="pl-9 h-9" />
          </div>
        </div>

        <TabsContent value="table" className="mt-4">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Lead</th>
                      <th className="px-4 py-3 font-medium">Score</th>
                      <th className="px-4 py-3 font-medium">Source</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Intent</th>
                      <th className="px-4 py-3 font-medium">Value</th>
                      <th className="px-4 py-3 font-medium">Owner</th>
                      <th className="px-4 py-3 font-medium">Last Engaged</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((l) => (
                      <tr key={l.id} className="border-t hover:bg-muted/20 transition">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <PersonAvatar name={l.name} />
                            <div className="min-w-0">
                              <div className="font-medium truncate">{l.name}</div>
                              <div className="text-[11px] text-muted-foreground truncate">{l.company} · {l.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3"><ScoreBar score={l.score} /></td>
                        <td className="px-4 py-3 text-xs">{l.source}</td>
                        <td className="px-4 py-3"><StatusBadge status={l.status} /></td>
                        <td className="px-4 py-3"><StatusBadge status={l.intent} /></td>
                        <td className="px-4 py-3 text-xs font-medium tabular-nums">${l.value.toLocaleString()}</td>
                        <td className="px-4 py-3 text-xs">{l.owner}</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">{l.lastEngaged}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kanban" className="mt-4">
          <div className="grid gap-3 md:grid-cols-5">
            {stages.map((stage) => {
              const items = leads.filter((l) => l.status === stage);
              return (
                <div key={stage} className="rounded-xl border bg-muted/30 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={stage} />
                      <span className="text-xs text-muted-foreground">{items.length}</span>
                    </div>
                    <Button size="icon" variant="ghost" className="h-6 w-6"><Plus className="h-3.5 w-3.5" /></Button>
                  </div>
                  <div className="space-y-2">
                    {items.map((l) => (
                      <Card key={l.id} className="cursor-grab active:cursor-grabbing hover:shadow-elegant transition">
                        <CardContent className="p-3 space-y-2">
                          <div className="flex items-center gap-2">
                            <PersonAvatar name={l.name} />
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium truncate">{l.name}</div>
                              <div className="text-[10px] text-muted-foreground truncate">{l.company}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <ScoreBar score={l.score} />
                            <span className="text-xs font-semibold tabular-nums">${(l.value / 1000).toFixed(0)}k</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <StatusBadge status={l.intent} />
                            <span className="text-[10px] text-muted-foreground">{l.lastEngaged}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {items.length === 0 && (
                      <div className="rounded-lg border border-dashed p-6 text-center text-xs text-muted-foreground">
                        Drop leads here
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
