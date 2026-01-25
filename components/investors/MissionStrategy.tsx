'use client';

import { motion } from 'framer-motion';
import { subsidiaries } from '@/lib/investor-content';

export default function MissionStrategy() {
  return (
    <section className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
              Increasing access to digital sovereignty
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Island Bitcoin builds technology to increase access to financial sovereignty 
              and digital independence across the Caribbean and beyond. Each of our 
              subsidiaries unlocks different aspects of the digital economy for more people.
            </p>
            <p className="text-white/70 leading-relaxed">
              Together, we&apos;re helping build a financial ecosystem that is truly open 
              to everyone, regardless of geographic location or economic status.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="pb-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white mb-1">
                Taddesse Inc.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Parent company and holding entity for all Island Bitcoin subsidiaries.
              </p>
            </div>
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-1">
                  {subsidiary.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {subsidiary.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
