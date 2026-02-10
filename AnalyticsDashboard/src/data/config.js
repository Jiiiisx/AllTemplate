
import { Users, DollarSign, Activity, LayoutDashboard, Settings, Briefcase } from "lucide-react";

export const siteConfig = {
  name: "SaaSify",
  adminName: "Sarah Jhonson",
  adminRole: "Admin Account",
  avatar: "https://ui-avatars.com/api/?name=Sarah+Jhonson&background=6366F1&color=fff",
  
  // Sidebar Navigation
  navigation: [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Settings", path: "/settings", icon: Settings },
  ],

  // Statistics Data
  stats: [
    { title: "Total Users", value: "24.8K", trend: "+12%", icon: Users },
    { title: "Revenue", value: "$12,400", trend: "+5%", icon: DollarSign },
    { title: "Active Now", value: "1,204", trend: "+18%", icon: Activity },
  ],

  // AI Insight Message
  aiInsight: {
    title: '"Revenue is projected to hit $15k this week."',
    description: "Our AI detected a 24% spike in conversion rates from mobile users in Switzerland. We recommend boosting ad spend by $200.",
    badge: "AI Analysis",
    version: "Growth Engine v2.0"
  },

  // Recent Activities
  activities: [
    { name: "Alex Morgan", action: "Upgraded to Pro", time: "2m", color: "bg-accent/10 text-accent" },
    { name: "John Doe", action: "New registration", time: "15m", color: "bg-zinc-100 text-zinc-500" },
    { name: "Sarah Connor", action: "Changed password", time: "1h", color: "bg-zinc-100 text-zinc-500" }
  ],

  // Upcoming Schedule
  schedule: [
    { title: "Review Pro Plan", date: "Today, 4PM", color: "bg-blue-500" },
    { title: "Team Sync", date: "Tomorrow, 10AM", color: "bg-purple-500" },
    { title: "Server Maintenance", date: "Friday, 2AM", color: "bg-amber-500" }
  ]
};
