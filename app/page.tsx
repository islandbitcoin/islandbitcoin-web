'use client';

import { motion } from 'framer-motion';

// Minimal Icons
const Icons = {
  Community: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  Lightning: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Wallet: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  X: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Pillar Card
function PillarCard({
  title,
  description,
  icon,
  link,
  linkText,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
    >
      <div className="h-full border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300">
        {/* Number */}
        <div className="text-white/20 text-sm font-mono mb-6">0{index + 1}</div>
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>

        {/* Link */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-orange-400 transition-colors duration-300"
          >
            {linkText}
            <Icons.Arrow />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/30">
            {linkText}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const pillars = [
    {
      title: 'Community',
      description: 'Organizing meetups, educating merchants, and building a sovereign Bitcoin community across the Caribbean.',
      icon: <Icons.Community />,
      link: 'https://community.islandbitcoin.com',
      linkText: 'Join the meetup',
    },
    {
      title: 'Mining',
      description: 'Harnessing renewable energy in tropical climates. Sustainable, sovereign hashing power from paradise.',
      icon: <Icons.Lightning />,
      linkText: 'Coming soon',
    },
    {
      title: 'Infrastructure',
      description: 'The ultimate Bitcoin & Lightning infrastructure. Buy, sell, spend, and earn rewards in one app.',
      icon: <Icons.Wallet />,
      link: 'https://getflash.io',
      linkText: 'Get Flash',
    },
    {
      title: 'Foundation',
      description: 'Our non-profit arm providing Bitcoin services and financial freedom to those who need it most.',
      icon: <Icons.Heart />,
      linkText: 'Coming soon',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo-white.svg" alt="Island Bitcoin" className="h-8" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              Mission
            </a>
            <a href="https://community.islandbitcoin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              Community
            </a>
            <a href="https://getflash.io" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              Products
            </a>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              Join Us
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-white/60 uppercase tracking-wider">Building the future of money</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Island
            </span>
            <br />
            <span className="text-white">
              Bitcoin
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12"
          >
            Building the circular Bitcoin economy in the Caribbean.
            <br className="hidden sm:block" />
            From adoption to infrastructure — we are sovereign.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#mission"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-black hover:opacity-90 transition-opacity duration-300"
            >
              Our Mission
            </a>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-colors duration-300"
            >
              Join Community
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0"
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Four pillars of
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                freedom
              </span>
            </h2>
            <p className="text-lg text-white/50">
              Our mission spans community, infrastructure, sustainability, and giving back.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} {...pillar} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="border border-white/10 rounded-3xl p-12 md:p-20 bg-gradient-to-b from-white/[0.03] to-transparent">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start your Bitcoin
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                journey today.
              </span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              The easiest way to use Bitcoin in the Caribbean.
            </p>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-black hover:opacity-90 transition-opacity duration-300"
            >
              Get Started
              <Icons.Arrow />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo-white.svg" alt="Island Bitcoin" className="h-6 opacity-50" />
            <span className="text-sm text-white/30">
              © {new Date().getFullYear()} Island Bitcoin
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/isaboricua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-300"
            >
              <Icons.X />
            </a>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white transition-colors duration-300"
            >
              Community
            </a>
            <a
              href="https://getflash.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white transition-colors duration-300"
            >
              Flash
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
