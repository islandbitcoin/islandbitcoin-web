export interface Subsidiary {
  name: string;
  location: string;
  description: string;
}

export interface Document {
  icon: 'file' | 'microphone' | 'contract' | 'chart' | 'headphones' | 'laptop';
  title: string;
  href: string;
}

export interface NewsItem {
  date: string;
  title: string;
  href: string;
}

export interface EventItem {
  date: string;
  title: string;
  linkText: string;
  href: string;
}

export const subsidiaries: Subsidiary[] = [
  {
    name: 'Island Bitcoin LLC',
    location: 'Florida',
    description: 'Develops software solutions that enable businesses to seamlessly integrate Bitcoin payment and storage capabilities.',
  },
  {
    name: 'Island Bitcoin Jamaica Ltd.',
    location: 'Jamaica',
    description: 'Creates accessible retail solutions and rewards programs that introduce Bitcoin to new users throughout the Caribbean.',
  },
  {
    name: 'Brave Island Mining',
    location: 'Caribbean',
    description: 'Provides sustainable Bitcoin mining operations powered by renewable energy sources, helping secure the network.',
  },
  {
    name: 'Island Bitcoin Foundation',
    location: 'Puerto Rico',
    description: 'Delivers education and community initiatives to increase financial literacy and Bitcoin adoption in underserved areas.',
  },
];

export const financialDocuments: Document[] = [
  { icon: 'file', title: 'Shareholder Letter', href: '#' },
  { icon: 'microphone', title: 'Prepared Remarks from Earnings Call', href: '#' },
  { icon: 'contract', title: '10-K', href: '#' },
  { icon: 'chart', title: 'Historical Financial Information', href: '#' },
  { icon: 'headphones', title: 'Audio File', href: '#' },
  { icon: 'laptop', title: 'Investor Presentation', href: '#' },
];

export const latestNews: NewsItem[] = [
  {
    date: 'Feb 28, 2025',
    title: 'Island Bitcoin Announces Fourth Quarter 2024 Results',
    href: '#',
  },
  {
    date: 'Feb 15, 2025',
    title: 'Island Bitcoin Jamaica Launches New Retail Rewards Program in Kingston',
    href: '#',
  },
  {
    date: 'Jan 22, 2025',
    title: 'Brave Island Mining Achieves 100% Renewable Energy Goal Ahead of Schedule',
    href: '#',
  },
];

export const upcomingEvents: EventItem[] = [
  {
    date: 'Feb 28, 2025',
    title: 'Island Bitcoin Fourth Quarter 2024 Earnings Call',
    linkText: 'Webcast',
    href: '#',
  },
  {
    date: 'Mar 15, 2025',
    title: 'Caribbean Bitcoin Conference Keynote',
    linkText: 'Details',
    href: '#',
  },
  {
    date: 'Apr 05, 2025',
    title: 'Bitcoin Miami 2025 Partner Showcase',
    linkText: 'Register',
    href: '#',
  },
];
