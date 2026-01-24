import React from 'react';

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText: string;
}

export const pillars: Pillar[] = [
  {
    title: 'Community',
    description: 'Building a sovereign community to provide our families with more freedom.',
    icon: null, // Will be replaced with IconCommunity component
    link: 'https://community.islandbitcoin.com',
    linkText: 'Join the meetup',
  },
  {
    title: 'Mining',
    description: 'Harnessing renewable energy in the tropics to free our access to energy.',
    icon: null, // Will be replaced with IconLightning component
    linkText: 'Coming soon',
  },
  {
    title: 'Infrastructure',
    description: 'Building the rails for free and open access to the global economy.',
    icon: null, // Will be replaced with IconWallet component
    link: 'https://getflash.io',
    linkText: 'Get Flash',
  },
  {
    title: 'Foundation',
    description: 'Empowering people to give and receive freely through charitable activities.',
    icon: null, // Will be replaced with IconHeart component
    linkText: 'Coming soon',
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
