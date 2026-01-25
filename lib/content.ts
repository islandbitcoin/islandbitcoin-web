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
    linkText: 'Coming Soon',
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
    linkText: 'Coming Soon',
  },
];

// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
