import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestions = [
  "Which leads are most likely to convert this week?",
  "Draft a personalized outreach for Hooli",
  "Show me high-risk deals",
  "Find leads from SaaS companies in London",
];

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border bg-card shadow-elegant animate-fade-in-up">
          <div className="flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Sales Copilot</div>
                <div className="text-[11px] text-muted-foreground">AI · Online</div>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setOpen(false)} className="h-7 w-7">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2 p-3 max-h-72 overflow-y-auto scrollbar-thin">
            <div className="rounded-lg bg-muted p-3 text-sm">
              Hi Ayesha 👋 I'm your AI Sales Copilot. Try asking me about leads, deals, or campaigns.
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground pt-2">Suggestions</div>
            {suggestions.map((s) => (
              <button
                key={s}
                className="w-full text-left rounded-lg border bg-background p-2.5 text-xs hover:bg-accent/10 hover:border-accent/30 transition"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t p-2">
            <Input placeholder="Ask anything..." className="h-9 border-transparent bg-muted/40" />
            <Button size="icon" className="h-9 w-9 bg-gradient-brand">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-elegant animate-pulse-ring hover:scale-105 transition"
        aria-label="Open AI assistant"
      >
        <Bot className="h-6 w-6" />
      </button>
    </>
  );
}
