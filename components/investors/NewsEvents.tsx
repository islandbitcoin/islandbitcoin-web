'use client';

import { motion } from 'framer-motion';

export default function NewsEvents() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-orange-400 mb-8">
              Latest News
            </h2>
            
            <p className="text-white/40 text-sm">
              News and announcements coming soon.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-orange-400 mb-8">
              Upcoming Events
            </h2>
            
            <p className="text-white/40 text-sm">
              Events calendar coming soon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
