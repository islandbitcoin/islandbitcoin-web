'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animated gradient orbs for background
function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)',
          top: '-20%',
          right: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

// Animated wave SVG
function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 1440 320"
        className="w-full h-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.path
          fill="rgba(6,182,212,0.1)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  );
}

// Pillar Card Component
function PillarCard({
  title,
  description,
  icon,
  accentColor,
  link,
  linkText,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  link?: string;
  linkText: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: accentColor }}
      />
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Glow effect */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
          style={{ background: accentColor }}
        />
        
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
          style={{ background: `${accentColor}20` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div style={{ color: accentColor }}>{icon}</div>
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

        {/* Link */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-4"
            style={{ color: accentColor }}
          >
            {linkText}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-slate-500 font-semibold">
            {linkText}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// Icons
const CommunityIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MiningIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const WalletIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BitcoinIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.89h-1.47v-1.71h1.47v1.71zm3.83-6.63c-.24.56-.6 1-1.08 1.33-.32.22-.66.38-1.02.5-.36.11-.74.18-1.14.22v1.59h-1.47v-1.59c-.75-.04-1.45-.19-2.11-.44-.66-.25-1.23-.63-1.7-1.14l1.29-1.26c.34.38.74.68 1.21.9.46.22.97.33 1.51.33.45 0 .84-.08 1.17-.25.33-.17.49-.44.49-.81 0-.26-.08-.47-.24-.63-.16-.16-.37-.29-.63-.39-.26-.1-.56-.19-.88-.27-.33-.08-.66-.17-1-.28-.34-.1-.66-.24-.97-.4-.31-.17-.58-.37-.81-.62-.23-.25-.41-.55-.55-.9-.13-.35-.2-.77-.2-1.25 0-.65.14-1.21.41-1.67.28-.47.64-.85 1.08-1.14.44-.3.94-.51 1.5-.65.56-.14 1.13-.21 1.71-.21V4.1h1.47v1.8c.59.05 1.14.17 1.65.36.51.19.95.46 1.32.81l-1.14 1.32c-.28-.28-.61-.5-.99-.65-.38-.15-.79-.23-1.23-.23-.48 0-.88.09-1.2.27-.32.18-.48.45-.48.81 0 .24.08.44.23.59.15.15.35.28.59.38.24.1.52.19.82.26.31.07.62.16.93.25.32.1.63.22.93.37.3.15.56.34.79.57.23.23.41.51.54.84.14.33.2.72.2 1.18 0 .68-.12 1.26-.37 1.74z"/>
  </svg>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <GradientOrbs />
      
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-white.svg" alt="Island Bitcoin" className="h-10" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pillars" className="text-slate-400 hover:text-white transition-colors">Our Mission</a>
            <a href="https://community.islandbitcoin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Community</a>
            <a href="https://getflash.io" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Flash</a>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
            >
              Join Us
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        <WaveBackground />
        
        {/* Floating Bitcoin Icons */}
        <motion.div
          className="absolute top-20 left-10 text-orange-500/20"
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BitcoinIcon />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-cyan-500/20"
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BitcoinIcon />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">Building the Future of Money</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              ISLAND
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              BITCOIN
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building the circular Bitcoin economy in the tropics.
            <br />
            <span className="text-slate-500">From adoption to infrastructure — we are sovereign.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#pillars"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
            >
              Explore Our Mission
            </motion.a>
            <motion.a
              href="https://community.islandbitcoin.com"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Join the Community
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Pillars Section */}
      <section id="pillars" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Four Pillars of{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Freedom
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our mission spans community, infrastructure, sustainability, and giving back.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <PillarCard
              title="Community & Adoption"
              description="The heartbeat of Island Bitcoin. We organize meetups, educate merchants, and foster a sovereign community across the Caribbean."
              icon={<CommunityIcon />}
              accentColor="#f97316"
              link="https://community.islandbitcoin.com"
              linkText="Join the Meetup"
              delay={0}
            />
            <PillarCard
              title="Tropical Mining"
              description="Harnessing renewable energy in tropical climates to secure the network. Sustainable, sovereign hashing power from paradise."
              icon={<MiningIcon />}
              accentColor="#22c55e"
              linkText="Operations Scaling Soon"
              delay={0.1}
            />
            <PillarCard
              title="Flash Wallet"
              description="The ultimate Bitcoin & Lightning infrastructure. Buying, selling, spending, and earning rewards — all in one powerful app."
              icon={<WalletIcon />}
              accentColor="#eab308"
              link="https://getflash.io"
              linkText="Get Flash"
              delay={0.2}
            />
            <PillarCard
              title="Island Bitcoin Foundation"
              description="Our non-profit arm dedicated to providing Bitcoin services and financial freedom to those who need it most."
              icon={<HeartIcon />}
              accentColor="#ec4899"
              linkText="Coming Soon"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '8+', label: 'Caribbean Islands' },
              { value: '500+', label: 'Community Members' },
              { value: '21M', label: 'Sats Transacted' },
              { value: '∞', label: 'Possibilities' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                Be part of the circular Bitcoin economy. Meet us in paradise.
              </p>
              <motion.a
                href="https://community.islandbitcoin.com"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-bold text-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo-white.svg" alt="Island Bitcoin" className="h-8 opacity-60" />
            <span className="text-slate-500">
              © {new Date().getFullYear()} Island Bitcoin. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/isaboricua" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://community.islandbitcoin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              Community
            </a>
            <a href="https://getflash.io" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              Flash
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
