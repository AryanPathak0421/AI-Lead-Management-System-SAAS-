import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dash/Primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings · Aether AI" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Manage your workspace, integrations, and preferences." />

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="workspace">Workspace</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4">
          <Card><CardContent className="p-6 space-y-4 max-w-xl">
            <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Ayesha Khan" /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="ayesha@aether.ai" /></div>
            <div className="space-y-1.5"><Label>Title</Label><Input defaultValue="Sales Manager" /></div>
            <Button className="bg-gradient-brand">Save changes</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="workspace" className="mt-4">
          <Card><CardContent className="p-6 space-y-4 max-w-xl">
            <div className="space-y-1.5"><Label>Workspace name</Label><Input defaultValue="Aether HQ" /></div>
            <div className="space-y-1.5"><Label>Default currency</Label><Input defaultValue="USD" /></div>
            <div className="flex items-center justify-between"><Label>Auto-assign new leads</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Enable AI scoring</Label><Switch defaultChecked /></div>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-4">
          <div className="grid gap-3 md:grid-cols-3">
            {["Salesforce", "HubSpot", "Slack", "Gmail", "Outlook", "LinkedIn", "Zoom", "Calendly", "Stripe"].map((i) => (
              <Card key={i}><CardContent className="p-4 flex items-center justify-between">
                <div className="font-medium">{i}</div>
                <Button size="sm" variant="outline">Connect</Button>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card><CardContent className="p-6 space-y-4 max-w-xl">
            {["New lead assigned", "Deal status changed", "Daily summary", "AI insights", "Weekly report"].map((n) => (
              <div key={n} className="flex items-center justify-between"><Label>{n}</Label><Switch defaultChecked /></div>
            ))}
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-4">
          <Card><CardContent className="p-6 space-y-3 max-w-xl">
            <div className="text-sm text-muted-foreground">Current plan</div>
            <div className="text-2xl font-semibold">Aether Enterprise</div>
            <div className="text-sm">$48 / user / month · 24 users</div>
            <Button variant="outline">Manage plan</Button>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
