// Mock data for the Aether AI Lead Intelligence Platform

export const kpis = {
  totalLeads: 2843,
  qualifiedLeads: 1284,
  highIntent: 412,
  conversionRate: 24.6,
  revenueForecast: 1284000,
  pipelineValue: 3420000,
};

export const conversionFunnel = [
  { stage: "New Leads", value: 2843, pct: 100 },
  { stage: "Contacted", value: 1942, pct: 68.3 },
  { stage: "Qualified", value: 1284, pct: 45.2 },
  { stage: "Proposal", value: 612, pct: 21.5 },
  { stage: "Won", value: 254, pct: 8.9 },
];

export const salesVelocity = [
  { day: "Mon", deals: 12, value: 84000 },
  { day: "Tue", deals: 18, value: 124000 },
  { day: "Wed", deals: 15, value: 96000 },
  { day: "Thu", deals: 22, value: 168000 },
  { day: "Fri", deals: 28, value: 212000 },
  { day: "Sat", deals: 9, value: 56000 },
  { day: "Sun", deals: 6, value: 38000 },
];

export const revenueTrend = [
  { month: "Jan", actual: 184, forecast: 180 },
  { month: "Feb", actual: 212, forecast: 205 },
  { month: "Mar", actual: 248, forecast: 240 },
  { month: "Apr", actual: 296, forecast: 285 },
  { month: "May", actual: 324, forecast: 320 },
  { month: "Jun", actual: 388, forecast: 380 },
  { month: "Jul", actual: 0, forecast: 425 },
  { month: "Aug", actual: 0, forecast: 478 },
];

export const leadSources = [
  { name: "LinkedIn", value: 842, color: "var(--color-chart-1)" },
  { name: "Webinar", value: 624, color: "var(--color-chart-2)" },
  { name: "Referral", value: 482, color: "var(--color-chart-3)" },
  { name: "Google Ads", value: 396, color: "var(--color-chart-4)" },
  { name: "Email", value: 312, color: "var(--color-chart-5)" },
  { name: "Other", value: 187, color: "oklch(0.7 0.02 250)" },
];

export const teamPerformance = [
  { name: "Ayesha K.", deals: 48, revenue: 412 },
  { name: "Sales Reps", deals: 42, revenue: 368 },
  { name: "Sarena T.", deals: 38, revenue: 324 },
  { name: "Rachel B.", deals: 34, revenue: 296 },
  { name: "Marcus J.", deals: 29, revenue: 248 },
  { name: "Priya S.", deals: 26, revenue: 218 },
];

export const engagementHeatmap = Array.from({ length: 7 }, (_, d) =>
  Array.from({ length: 12 }, (_, h) => ({
    day: d,
    hour: h,
    value: Math.round(Math.random() * 100),
  }))
).flat();

export const activityTimeline = [
  { id: 1, type: "visit", title: "New website visit", subtitle: "Acme Corp viewed pricing page", time: "3m ago" },
  { id: 2, type: "email", title: "Email opened", subtitle: "Globex replied to outreach", time: "12m ago" },
  { id: 3, type: "meeting", title: "Meeting booked", subtitle: "Initech — Product demo Thu 2pm", time: "1h ago" },
  { id: 4, type: "deal", title: "Deal won", subtitle: "Hooli closed $48,000", time: "2h ago" },
  { id: 5, type: "score", title: "Lead score increased", subtitle: "Massive Dynamic +18 points", time: "4h ago" },
];

export type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  score: number;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Proposal" | "Won" | "Lost";
  intent: "Hot" | "Warm" | "Cold";
  value: number;
  owner: string;
  lastEngaged: string;
  industry: string;
  location: string;
};

export const leads: Lead[] = [
  { id: "L-001", name: "Ayesha Khan", company: "Acme Corp", email: "ayesha@acme.com", phone: "(206) 592-8933", score: 89, source: "Webinar", status: "Qualified", intent: "Hot", value: 48000, owner: "Marcus J.", lastEngaged: "2h ago", industry: "SaaS", location: "Seattle, US" },
  { id: "L-002", name: "Jonah Ellis", company: "Globex", email: "jonah@globex.com", phone: "(215) 938-8837", score: 76, source: "LinkedIn", status: "Won", intent: "Hot", value: 124000, owner: "Ayesha K.", lastEngaged: "1d ago", industry: "Fintech", location: "London, UK" },
  { id: "L-003", name: "Nillis Park", company: "Initech", email: "nillis@initech.com", phone: "(203) 725-3319", score: 76, source: "LinkedIn", status: "Contacted", intent: "Warm", value: 32000, owner: "Sarena T.", lastEngaged: "3d ago", industry: "AI", location: "Berlin, DE" },
  { id: "L-004", name: "Hiarson Vela", company: "Soylent", email: "hiarson@soylent.com", phone: "(203) 552-3580", score: 25, source: "LinkedIn", status: "New", intent: "Cold", value: 12000, owner: "Rachel B.", lastEngaged: "5d ago", industry: "Healthcare", location: "Boston, US" },
  { id: "L-005", name: "Rares Popescu", company: "Hooli", email: "rares@hooli.com", phone: "(415) 555-2210", score: 92, source: "Webinar", status: "Proposal", intent: "Hot", value: 86000, owner: "Marcus J.", lastEngaged: "5h ago", industry: "SaaS", location: "San Francisco, US" },
  { id: "L-006", name: "Priya Sharma", company: "Massive Dynamic", email: "priya@massive.com", phone: "(212) 555-9921", score: 81, source: "Referral", status: "Qualified", intent: "Hot", value: 64000, owner: "Priya S.", lastEngaged: "1h ago", industry: "Manufacturing", location: "Mumbai, IN" },
  { id: "L-007", name: "Marco Bellini", company: "Stark Industries", email: "marco@stark.com", phone: "(310) 555-7762", score: 68, source: "Google Ads", status: "Contacted", intent: "Warm", value: 28000, owner: "Sarena T.", lastEngaged: "2d ago", industry: "Defense", location: "Milan, IT" },
  { id: "L-008", name: "Sofia Lindqvist", company: "Wayne Enterprises", email: "sofia@wayne.com", phone: "(646) 555-1182", score: 54, source: "Email", status: "New", intent: "Warm", value: 18000, owner: "Rachel B.", lastEngaged: "1w ago", industry: "Real Estate", location: "Stockholm, SE" },
];

export const followUpSequences = [
  { id: 1, name: "Webinar Follow-up", steps: 7, active: 142, openRate: 68, replyRate: 18 },
  { id: 2, name: "Product Demo Nurture", steps: 5, active: 96, openRate: 72, replyRate: 24 },
  { id: 3, name: "Cold Outreach Q3", steps: 9, active: 284, openRate: 42, replyRate: 9 },
  { id: 4, name: "Re-engagement", steps: 4, active: 64, openRate: 51, replyRate: 14 },
];

export const aiInsights = [
  { title: "12 leads predicted to close this week", body: "Based on engagement velocity and historical patterns.", tone: "success" as const },
  { title: "Hooli at high churn risk", body: "No engagement in 14 days. Recommend personal outreach.", tone: "warning" as const },
  { title: "LinkedIn outperforming Google Ads by 38%", body: "Consider reallocating $12k budget for Q4.", tone: "info" as const },
];
