'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PillarCard from '@/components/home/PillarCard';
import { pillars, staggerContainer } from '@/lib/content';
import { IconCommunity, IconLightning, IconWallet, IconHeart, IconArrow } from '@/components/ui/icons';

export default function Home() {
  const pillarsWithIcons = pillars.map((pillar, index) => ({
    ...pillar,
    icon: index === 0 ? <IconCommunity /> : 
          index === 1 ? <IconLightning /> :
          index === 2 ? <IconWallet /> : <IconHeart />
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <Header />

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-white/60 uppercase tracking-wider">Building the future of money</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 flex justify-center"
          >
            <img 
              src="/logo-colored.svg" 
              alt="Island Bitcoin" 
              className="w-full max-w-xl h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12"
          >
            Bitcoin sovereignty for the Caribbean.
          </motion.p>

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
              href="#newsletter"
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-colors duration-300"
            >
              Get Updates
            </a>
          </motion.div>
        </div>

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

      <section id="mission" className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillarsWithIcons.map((pillar, index) => (
              <PillarCard key={pillar.title} {...pillar} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-white/50">Tools for financial sovereignty.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-orange-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <IconWallet />
              </div>
              
              <div className="p-10 flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Flash</h3>
                  <p className="text-white/60 text-lg mb-8 max-w-md">
                    The easiest way to send, receive, and spend Bitcoin in the Caribbean. 
                    Self-custodial, lightning-fast, and built for paradise.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://getflash.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Get Flash
                    <IconArrow />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/5 bg-white/[0.01] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/[0.02]" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white/20">
                <IconLightning />
              </div>
              <h3 className="text-xl font-bold text-white/40 mb-2">More Coming Soon</h3>
              <p className="text-white/30 text-sm">We are building the future infrastructure of money.</p>
            </motion.div>
          </div>
        </div>
      </section>

       <section id="newsletter" className="py-32 px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto text-center"
         >
           <div className="border border-white/10 rounded-3xl p-6 md:p-20 bg-gradient-to-b from-white/[0.03] to-transparent">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Start your Bitcoin
               <br />
               <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                 journey today.
               </span>
             </h2>
              <div>
                <p className="text-white/60 text-sm mb-4">Monthly dispatches on Caribbean Bitcoin adoption.</p>
                 <iframe
                   src="https://subscribe-forms.beehiiv.com/091a2688-13dd-4e42-af26-397684e59816"
                   className="beehiiv-embed w-full md:max-w-xl rounded-2xl border border-white/10 bg-black mx-auto"
                   frameBorder="0"
                   scrolling="no"
                   title="Island Bitcoin Newsletter"
                   style={{ minHeight: '520px', height: '520px', width: '100%' }}
                 />
              </div>
           </div>
         </motion.div>
       </section>

      <Footer />
    </div>
  );
}
