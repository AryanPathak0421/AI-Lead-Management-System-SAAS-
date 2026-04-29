import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles, Bot } from "lucide-react";

export const Route = createFileRoute("/_app/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant · Aether AI" }] }),
  component: Assistant,
});

function Assistant() {
  return (
    <div className="space-y-6">
      <PageHeader title="Sales Copilot" subtitle="Your 24/7 AI sales assistant" />

      <Card className="shadow-card">
        <CardContent className="flex h-[70vh] flex-col p-0">
          <div className="flex-1 overflow-y-auto scrollbar-thin p-6 space-y-4">
            <Message role="ai" text="Hi Ayesha 👋 I'm your AI Sales Copilot. I can help you find leads, draft outreach, analyze deals, and much more. What would you like to do today?" />
            <Message role="user" text="Which leads are most likely to close this week?" />
            <Message role="ai" text="Based on engagement velocity and historical patterns, I've identified 12 leads with >75% close probability this week. Top 3: Hooli ($86K), Acme Corp ($48K), Massive Dynamic ($64K). Want me to draft personalized follow-ups?" />
          </div>
          <div className="border-t p-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              {["Draft outreach for Hooli", "Show high-risk deals", "Find SaaS leads in London", "Summarize this week"].map((s) => (
                <button key={s} className="rounded-full border px-3 py-1.5 text-xs hover:bg-accent/10 hover:border-accent/30 transition">
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input placeholder="Ask anything about your leads, deals, or campaigns..." className="h-11" />
              <Button className="bg-gradient-brand h-11 px-5"><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Message({ role, text }: { role: "ai" | "user"; text: string }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-md rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
          {text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-brand">
        <Sparkles className="h-4 w-4 text-white" />
      </div>
      <div className="max-w-xl rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-sm">{text}</div>
    </div>
  );
}
