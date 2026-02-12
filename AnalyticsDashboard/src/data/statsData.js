import { Users, CheckSquare, GitPullRequest, Code2 } from "lucide-react";

export const statsHistory = {
  "7D": [
    { title: "Active Contributors", value: "128", trend: "+12", icon: Users },
    { title: "Tasks Resolved", value: "45", trend: "+8", icon: CheckSquare },
    { title: "Merged PRs", value: "32", trend: "+5", icon: GitPullRequest },
  ],
  "30D": [
    { title: "Active Contributors", value: "412", trend: "+45", icon: Users },
    { title: "Tasks Resolved", value: "180", trend: "+22", icon: CheckSquare },
    { title: "Merged PRs", value: "145", trend: "+18", icon: GitPullRequest },
  ],
  "12M": [
    { title: "Active Contributors", value: "2.4K", trend: "+150", icon: Users },
    { title: "Tasks Resolved", value: "1.2K", trend: "+300", icon: CheckSquare },
    { title: "Merged PRs", value: "850", trend: "+120", icon: GitPullRequest },
  ],
  "private": [
    { title: "Server Load", value: "24%", trend: "-2%", icon: Code2 },
    { title: "API Uptime", value: "99.99%", trend: "Stable", icon: GitPullRequest },
    { title: "Active Nodes", value: "12", trend: "Normal", icon: Users },
  ]
};

export const chartDataHistory = {
  "7D": [
    { name: 'Mon', commits: 65, tasks: 40 },
    { name: 'Tue', commits: 68, tasks: 45 },
    { name: 'Wed', commits: 75, tasks: 55 },
    { name: 'Thu', commits: 72, tasks: 50 },
    { name: 'Fri', commits: 80, tasks: 65 },
    { name: 'Sat', commits: 85, tasks: 70 },
    { name: 'Sun', commits: 92, tasks: 80 },
  ],
  "30D": [
    { name: 'Week 1', commits: 45, tasks: 30 },
    { name: 'Week 2', commits: 58, tasks: 40 },
    { name: 'Week 3', commits: 72, tasks: 55 },
    { name: 'Week 4', commits: 88, tasks: 75 },
  ],
  "12M": [
    { name: 'Jan', commits: 30, tasks: 20 },
    { name: 'Feb', commits: 35, tasks: 25 },
    { name: 'Mar', commits: 50, tasks: 40 },
    { name: 'Apr', commits: 55, tasks: 45 },
    { name: 'May', commits: 70, tasks: 60 },
    { name: 'Jun', commits: 95, tasks: 85 },
  ]
};