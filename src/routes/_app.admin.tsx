import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, KpiCard, PersonAvatar } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Activity, Database, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/_app/admin")({
  head: () => ({ meta: [{ title: "Admin Panel · Aether AI" }] }),
  component: Admin,
});

const users = [
  { name: "Ayesha Khan", email: "ayesha@aether.ai", role: "Admin", status: "Active" },
  { name: "Marcus Johnson", email: "marcus@aether.ai", role: "Manager", status: "Active" },
  { name: "Sarena Tanaka", email: "sarena@aether.ai", role: "Sales Agent", status: "Active" },
  { name: "Rachel Bensoir", email: "rachel@aether.ai", role: "Sales Agent", status: "Active" },
  { name: "Priya Sharma", email: "priya@aether.ai", role: "Sales Agent", status: "Inactive" },
];

function Admin() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin & Security"
        subtitle="Manage users, roles, and system health."
        actions={<Button size="sm" className="bg-gradient-brand">Invite User</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Active Users" value="24" delta={2} icon={Users} />
        <KpiCard label="Roles Defined" value="4" icon={Shield} tone="accent" />
        <KpiCard label="Audit Events Today" value="312" delta={8} icon={Activity} />
        <KpiCard label="Backup Health" value="100%" icon={Database} tone="success" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="shadow-card lg:col-span-2">
          <CardContent className="p-0">
            <div className="border-b p-4 font-semibold">User Management</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">User</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.email} className="border-t">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <PersonAvatar name={u.name} />
                          <div>
                            <div className="font-medium">{u.name}</div>
                            <div className="text-[11px] text-muted-foreground">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className={
                          u.role === "Admin" ? "bg-primary/10 text-primary border-primary/20" :
                          u.role === "Manager" ? "bg-accent/15 text-accent border-accent/20" :
                          "bg-muted text-muted-foreground"
                        }>{u.role}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={u.status === "Active" ? "bg-success/15 text-success border-0" : "bg-muted text-muted-foreground border-0"}>
                          {u.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" variant="ghost">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-5 space-y-4">
            <div className="font-semibold">System Status</div>
            {[
              { label: "API Uptime", value: "99.99%" },
              { label: "Database", value: "Healthy" },
              { label: "AI Models", value: "Online" },
              { label: "Last Backup", value: "12 min ago" },
              { label: "SOC 2 Compliance", value: "Certified" },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  {s.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-5">
          <div className="font-semibold mb-4">Role Permissions Matrix</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Permission</th>
                  <th className="px-3 py-2 font-medium text-center">Admin</th>
                  <th className="px-3 py-2 font-medium text-center">Manager</th>
                  <th className="px-3 py-2 font-medium text-center">Agent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["View leads", true, true, true],
                  ["Edit leads", true, true, true],
                  ["Delete leads", true, true, false],
                  ["Manage users", true, false, false],
                  ["Configure billing", true, false, false],
                  ["Export reports", true, true, false],
                  ["Access AI insights", true, true, true],
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-3 py-2.5">{row[0]}</td>
                    {[row[1], row[2], row[3]].map((v, j) => (
                      <td key={j} className="px-3 py-2.5 text-center">
                        {v ? <CheckCircle2 className="inline h-4 w-4 text-success" /> : <span className="text-muted-foreground">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
