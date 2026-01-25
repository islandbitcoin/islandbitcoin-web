'use client';

import { motion } from 'framer-motion';
import { latestNews, upcomingEvents } from '@/lib/investor-content';

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
            
            <div className="space-y-6">
              {latestNews.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="pb-6 border-b border-white/10 last:border-0"
                >
                  <p className="text-sm text-white/40 mb-2">{item.date}</p>
                  <h3 className="text-white/90 font-medium mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Read More
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-5 py-2.5 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                View all news
              </a>
            </div>
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
            
            <div className="space-y-6">
              {upcomingEvents.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="pb-6 border-b border-white/10 last:border-0"
                >
                  <p className="text-sm text-white/40 mb-2">{item.date}</p>
                  <h3 className="text-white/90 font-medium mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <a
                    href={item.href}
                    className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {item.linkText}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-5 py-2.5 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                View all events
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
