
export enum NavPage {
  DASHBOARD = 'DASHBOARD',
  INFORM = 'INFORM',
  ACT = 'ACT',
  PLAN = 'PLAN',
  VOTE = 'VOTE',
  MERCHANTS = 'MERCHANTS',
  MAIRIE = 'MAIRIE',
  PROFILE = 'PROFILE'
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  likes: number;
}

export interface Poll {
  id: string;
  question: string;
  description: string;
  options: { label: string; votes: number }[];
  status: 'active' | 'completed';
  endDate?: string;
  image?: string;
}

export interface IncidentReport {
  id: string;
  type: string;
  label: string;
  loc: string;
  date: string;
  status: 'pending' | 'in_progress' | 'resolved';
  statusLabel: string;
  image?: string;
}

export interface Merchant {
  id: string;
  name: string;
  type: string;
  hours: string;
  address: string;
  image: string;
  description: string;
}
