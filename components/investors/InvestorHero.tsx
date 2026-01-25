'use client';

import { motion } from 'framer-motion';

export default function InvestorHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-orange-950/30" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Investor Relations
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          <div className="px-8 py-6 border-t border-b border-white/20">
            <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
              <span className="font-semibold">PRIVATE COMPANY</span>
              <span className="text-2xl md:text-3xl font-bold text-orange-400">$0.970</span>
              <span className="text-white/40">0.00 (0.00%)</span>
            </div>
            <p className="text-sm text-white/40 mt-3">
              Last updated: January 21, 2026 | 4:00 PM ET
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
