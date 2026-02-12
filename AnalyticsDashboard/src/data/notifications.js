
import { Bell, ShieldAlert, GitPullRequest, MessageSquare, Star } from "lucide-react";

export const notificationsData = [
  {
    id: 1,
    type: 'security',
    title: 'Security Alert',
    message: 'New login detected from Tokyo, Japan. Was this you?',
    time: '2 mins ago',
    unread: true,
    icon: ShieldAlert,
    color: 'text-red-500 bg-red-500/10'
  },
  {
    id: 2,
    type: 'github',
    title: 'Pull Request Merged',
    message: 'Alex Morgan merged PR #402 into devhub-core.',
    time: '45 mins ago',
    unread: true,
    icon: GitPullRequest,
    color: 'text-accent bg-accent/10'
  },
  {
    id: 3,
    type: 'community',
    title: 'New Mention',
    message: 'Sarah tagged you in "Update JSDoc for auth-service".',
    time: '3 hours ago',
    unread: false,
    icon: MessageSquare,
    color: 'text-emerald-500 bg-emerald-500/10'
  },
  {
    id: 4,
    type: 'system',
    title: 'Project Milestone',
    message: 'DevHub Core reached 1,000 GitHub Stars! 🎉',
    time: 'Yesterday',
    unread: false,
    icon: Star,
    color: 'text-amber-500 bg-amber-500/10'
  }
];
