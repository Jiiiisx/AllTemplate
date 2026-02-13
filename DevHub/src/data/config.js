import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  CheckSquare, 
  Github, 
  Code2, 
  GitPullRequest, 
  MessageSquare,
  Settings
} from "lucide-react";

export const siteConfig = {
  name: "DevHub",
  adminName: "Raji Dev",
  adminRole: "Maintainer",
  avatar: "https://ui-avatars.com/api/?name=Raji+Dev&background=6366F1&color=fff",
  
  // Navigation for Developer Community
  navigation: [
    { name: "Project Pulse", path: "/", icon: LayoutDashboard },
    { name: "Repositories", path: "/repos", icon: Github },
    { name: "Documentation", path: "/docs", icon: BookOpen },
    { name: "Tasks & Todo", path: "/tasks", icon: CheckSquare },
    { name: "Community", path: "/community", icon: Users },
    { name: "Settings", path: "/settings", icon: Settings },
  ],

  // Developer-focused Stats
  stats: [
    { title: "Active Contributors", value: "128", trend: "+14", icon: Users },
    { title: "Open PRs", value: "24", trend: "-5", icon: GitPullRequest },
    { title: "Code Health", value: "98%", trend: "+2%", icon: Code2 },
  ],

  // AI Dev Insight
  aiInsight: {
    title: '"Auth-Module needs documentation update."',
    description: "Our engine detected 5 new exported functions in 'auth-service.ts' that lack JSDoc comments. Would you like to generate tasks for the community?",
    badge: "AI Auditor",
    version: "DevEngine v1.0"
  },

  // Recent Dev Activities
  activities: [
    { name: "Sarah J.", action: "opened a new PR #402", time: "5m", color: "bg-blue-500/10 text-blue-500" },
    { name: "Alex K.", action: "merged 'fix/login-bug'", time: "20m", color: "bg-green-500/10 text-green-500" },
    { name: "Bot", action: "flagged 2 security issues", time: "1h", color: "bg-red-500/10 text-red-500" }
  ],

  // Community Milestones
  schedule: [
    { title: "v2.0 Beta Release", date: "Today, 4PM", color: "bg-accent" },
    { title: "Community Call", date: "Tomorrow, 10AM", color: "bg-purple-500" },
    { title: "Docs Sprint", date: "Friday, 2AM", color: "bg-amber-500" }
  ]
};