import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in · Aether AI" }] }),
  component: Login,
});

function Login() {
  return <AuthShell mode="login" />;
}

export function AuthShell({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="relative hidden md:block bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold">Aether AI</span>
          </Link>
          <div className="space-y-4 max-w-sm">
            <h2 className="text-3xl font-semibold leading-tight">
              The AI-powered CRM your revenue team has been waiting for.
            </h2>
            <p className="text-white/70">
              Score leads, automate follow-ups, forecast revenue — all in one intelligent workspace.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {[47, 12, 23, 38].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="h-8 w-8 rounded-full border-2 border-white/30" alt="" />
                ))}
              </div>
              <div className="text-sm text-white/80">Trusted by 4,000+ teams</div>
            </div>
          </div>
          <div className="text-xs text-white/50">© 2026 Aether AI</div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="md:hidden mb-6 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold">Aether AI</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {isLogin ? "Sign in to your workspace." : "Start your 14-day free trial."}
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
          >
            {!isLogin && (
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Ayesha Khan" />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@company.com" className="pl-9" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-gradient-brand shadow-elegant">
              {isLogin ? "Sign in" : "Create account"} <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or continue with</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" type="button">Google</Button>
            <Button variant="outline" type="button">Microsoft</Button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isLogin ? (
              <>Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link></>
            ) : (
              <>Already a member? <Link to="/login" className="text-primary font-medium">Sign in</Link></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
