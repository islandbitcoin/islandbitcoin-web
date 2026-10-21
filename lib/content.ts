import React from 'react';

export interface Pillar {
  title: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  link?: string;
  linkText: string;
}

export const pillars: Pillar[] = [
  {
    title: 'Community',
    description: 'Cultivating a sovereign network of people who support one another and build toward collective freedom.',
    tagline: 'Strong families. Local resilience. Shared purpose.',
    icon: null, // Will be replaced with IconCommunity component
    link: 'https://community.islandbitcoin.com',
    linkText: 'Join the Meetup',
  },
  {
    title: 'Energy & Mining',
    description: 'Harnessing renewable energy in the tropics to unlock abundant, independent access to power and computation.',
    tagline: 'Energy is the foundation of sovereignty.',
    icon: null, // Will be replaced with IconLightning component
    linkText: 'In development',
  },
  {
    title: 'Infrastructure',
    description: 'Building open, censorship-resistant rails that connect our communities to the global economy.',
    tagline: 'Freedom to earn. Freedom to transact. Freedom to build.',
    icon: null, // Will be replaced with IconWallet component
    link: 'https://getflash.io',
    linkText: 'Get Flash',
  },
  {
    title: 'Foundation',
    description: 'Creating pathways for people to give and receive freely, with dignity and transparency.',
    tagline: 'Because true freedom is shared.',
    icon: null, // Will be replaced with IconHeart component
    linkText: 'In development',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '26', label: 'Episodes of One Love Bitcoin, our documentary series, across 4 seasons' },
  { value: '20+', label: 'Countries filmed, from El Salvador to Ethiopia to Palestine' },
  { value: '6,000+', label: 'Flash users across the Caribbean' },
  { value: '27,500+', label: 'Lightning merchants reachable through Flash' },
];

export interface PressMention {
  outlet: string;
  title: string;
  href: string;
}

export const press: PressMention[] = [
  {
    outlet: 'Forbes',
    title: "Jamaica's first native Bitcoin app is helping with hurricane relief",
    href: 'https://www.forbes.com/sites/frankcorva/2025/11/20/jamaicas-first-native-bitcoin-app-is-helping-with-hurricane-relief/',
  },
  {
    outlet: 'Breez',
    title: 'Building on Lightning: Flash and Caribbean money',
    href: 'https://medium.com/breez-technology/building-on-lightning-flash-is-reinventing-caribbean-money-with-the-breez-sdk-d26ef8b81fb8',
  },
  {
    outlet: 'Blink',
    title: 'How Bitcoin adoption came to the Caribbean',
    href: 'https://www.blink.sv/blog/how-bitcoin-adoption-came-to-the-caribbean',
  },
];
