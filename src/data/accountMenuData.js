import { 
  Heart, 
  Gift, 
  Trophy, 
  ShoppingBag, 
  RotateCw, 
  Package, 
  List, 
  Users, 
  Settings 
} from 'lucide-react';

export const ACCOUNT_MENU_ITEMS = [
  {
    id: 'beauty-preferences',
    icon: Heart,
    title: 'Beauty Preferences',
    subtitle: 'Complete for personalized recommendations and filters',
    path: '/account/preferences'
  },
  {
    id: 'beauty-insider',
    icon: Gift,
    title: 'Beauty Insider Summary',
    subtitle: 'View activity, savings, benefits',
    path: '/account/insider'
  },
  {
    id: 'rewards',
    icon: Trophy,
    title: 'Rewards Bazaar',
    subtitle: 'Redeem items, samples, more',
    rightText: '0 Points',
    path: '/account/rewards'
  },
  {
    id: 'challenges',
    icon: Trophy,
    title: 'Beauty Insider Challenges',
    badge: 'NEW',
    path: '/account/challenges'
  },
  {
    id: 'buy-again',
    icon: RotateCw,
    title: 'Buy It Again',
    subtitle: 'Reorder from in-store and online purchases',
    path: '/account/buy-again'
  },
  {
    id: 'orders',
    icon: Package,
    title: 'Orders',
    subtitle: 'View & track online or pickup orders',
    path: '/account/orders'
  },
  {
    id: 'auto-replenish',
    icon: RotateCw,
    title: 'Auto-Replenish',
    subtitle: 'Never run out of your go-tos with subscription delivery',
    path: '/account/auto-replenish'
  },
  {
    id: 'my-lists',
    icon: List,
    title: 'My Lists',
    subtitle: 'Organize and share saved products',
    path: '/account/lists'
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community',
    subtitle: 'Get inspired by fellow beauty lovers',
    path: '/community'
  },
  {
    id: 'settings',
    icon: Settings,
    title: 'Account Settings',
    subtitle: 'Payment, contact info, addresses, password',
    path: '/account/settings'
  }
];

