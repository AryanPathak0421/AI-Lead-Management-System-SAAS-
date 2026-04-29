import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  ArrowRight,
  Brain,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  Bot,
  CheckCircle2,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aether AI — Lead Intelligence Platform" },
      { name: "description", content: "AI-powered CRM that finds, scores, and converts leads at enterprise scale." },
      { property: "og:title", content: "Aether AI — Lead Intelligence Platform" },
      { property: "og:description", content: "AI-powered CRM that finds, scores, and converts leads at enterprise scale." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Aether AI</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Lead Intelligence
              </div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm md:flex">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#analytics" className="text-muted-foreground hover:text-foreground">Analytics</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="#customers" className="text-muted-foreground hover:text-foreground">Customers</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-brand shadow-elegant">
              <Link to="/dashboard">Open app <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-[0.04]" />
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-28 relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 gap-1.5 border-0 bg-accent/15 text-accent hover:bg-accent/20">
              <Sparkles className="h-3 w-3" /> Now with GPT-powered Sales Copilot
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Turn signals into <span className="text-gradient">revenue.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Aether is the AI-powered CRM that finds, scores, and closes leads — so your reps spend time
              selling, not searching.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-brand shadow-elegant">
                <Link to="/dashboard">Start free trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard">See live demo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              No credit card · 14-day free trial · SOC 2 compliant
            </div>
          </div>

          {/* Hero preview */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="rounded-2xl border bg-card p-2 shadow-elegant">
              <div className="rounded-xl border bg-gradient-subtle overflow-hidden">
                <div className="flex items-center gap-1.5 border-b bg-card/50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                  <span className="ml-3 text-xs text-muted-foreground">app.aether.ai/dashboard</span>
                </div>
                <div className="grid grid-cols-12 gap-3 p-4">
                  <div className="col-span-3 hidden md:block rounded-lg bg-sidebar p-3">
                    <div className="space-y-2">
                      {["Dashboard", "Leads", "Sourcing", "Follow-up", "Analytics"].map((i, idx) => (
                        <div key={i} className={`flex items-center gap-2 rounded px-2 py-1.5 text-xs ${idx === 0 ? "bg-accent/20 text-accent" : "text-sidebar-foreground/70"}`}>
                          <div className="h-3 w-3 rounded bg-current opacity-60" /> {i}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9 grid grid-cols-3 gap-3">
                    {[
                      { l: "Total Leads", v: "2,843", t: "+12%" },
                      { l: "Conversion", v: "24.6%", t: "+3.2%" },
                      { l: "Pipeline", v: "$3.4M", t: "+18%" },
                    ].map((k) => (
                      <div key={k.l} className="rounded-lg border bg-card p-3">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
                        <div className="mt-1 text-xl font-semibold">{k.v}</div>
                        <div className="text-[10px] text-success">{k.t}</div>
                      </div>
                    ))}
                    <div className="col-span-3 h-44 rounded-lg border bg-card p-3">
                      <div className="text-xs font-medium mb-2">Lead Conversion Funnel</div>
                      <div className="flex h-32 items-end gap-2">
                        {[100, 78, 56, 34, 18].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-gradient-brand opacity-80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by 4,000+ revenue teams
          </p>
          <div className="grid grid-cols-2 gap-6 opacity-60 md:grid-cols-6">
            {["ACME", "GLOBEX", "INITECH", "SOYLENT", "HOOLI", "STARK"].map((b) => (
              <div key={b} className="text-center text-sm font-bold tracking-widest">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Everything your revenue team needs.
            </h2>
            <p className="mt-3 text-muted-foreground">
              From the first signal to a closed deal — all in one intelligent workspace.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Brain, title: "AI Lead Scoring", desc: "Score every lead in real time with intent prediction and behavioral signals." },
              { icon: Zap, title: "Smart Capture", desc: "Capture leads from web forms, LinkedIn, email, and social — auto-enriched." },
              { icon: Bot, title: "Sales Copilot", desc: "GPT-powered assistant drafts outreach, summarizes calls, suggests next steps." },
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast revenue, churn risk, and pipeline velocity with ML models." },
              { icon: BarChart3, title: "Rich Dashboards", desc: "30+ widgets including Sankey pipelines, heatmaps, and goal tracking." },
              { icon: Shield, title: "Enterprise-grade", desc: "SOC 2, GDPR, role-based access, audit logs, and SSO." },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border bg-card p-6 shadow-card hover:shadow-elegant hover:border-accent/30 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-gradient-subtle py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {[
            { v: "3.2x", l: "Pipeline velocity" },
            { v: "68%", l: "More qualified leads" },
            { v: "42%", l: "Less manual work" },
            { v: "$1.4M", l: "Avg. revenue lift" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="customers" className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="mt-5 text-2xl font-medium leading-relaxed">
            "Aether replaced three tools and gave us back 12 hours per rep per week.
            Our SDRs love the AI copilot."
          </blockquote>
          <div className="mt-5 text-sm text-muted-foreground">
            Sarah Chen · VP Revenue, Hooli
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center text-white md:p-16">
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to close more deals?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">
              Join thousands of teams growing revenue with Aether AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/dashboard">Open dashboard</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link to="/login">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 Aether AI · All rights reserved</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
