'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PillarCard from '@/components/home/PillarCard';
import Reveal from '@/components/ui/Reveal';
import { pillars, stats, press } from '@/lib/content';
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
          <Reveal onScroll={false} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-white/60 uppercase tracking-wider">Building the future of money</span>
          </Reveal>

          <Reveal onScroll={false} delay={0.1} className="mb-12 flex justify-center">
            <img
              src="/logo-colored.svg"
              alt="Island Bitcoin"
              className="w-full max-w-xl h-auto"
            />
          </Reveal>

          <Reveal onScroll={false} delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Bitcoin sovereignty for the Caribbean.
            </p>
          </Reveal>

          <Reveal onScroll={false} delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0 animate-pulse" />
        </div>
      </section>

      {/* Proof strip: real numbers, real press */}
      <section aria-label="Track record" className="py-20 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.value + stat.label} className="text-center md:text-left">
                  <dd className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </dd>
                  <dt className="text-xs leading-relaxed text-white/40">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-white/40 mt-10 text-center md:text-left">
              As covered by{' '}
              {press.map((item, index) => (
                <span key={item.outlet}>
                  {index > 0 && (index === press.length - 1 ? ' and ' : ', ')}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 underline decoration-white/20 underline-offset-4 hover:text-orange-400 transition-colors duration-300"
                    title={item.title}
                  >
                    {item.outlet}
                  </a>
                </span>
              ))}
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="py-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Four Pillars of
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Freedom
              </span>
            </h2>
            <p className="text-lg text-white/50">
              A mission rooted in people, powered by infrastructure, and sustained by giving.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarsWithIcons.map((pillar, index) => (
              <PillarCard key={pillar.title} {...pillar} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-white/50">Tools for financial sovereignty.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal className="group col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-orange-500/30 transition-all duration-500">
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
            </Reveal>

            <Reveal delay={0.1} className="group col-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-orange-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <IconLightning />
              </div>

              <div className="p-10 flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 text-white/60 text-xs font-bold rounded-full uppercase tracking-wider">Open Source</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Atoll</h3>
                  <p className="text-white/60 mb-8">
                    Community app stores and Start9 / Umbrel packaging — sovereign
                    infrastructure that normal people can actually run.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/islandbitcoin/atoll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-colors"
                  >
                    Explore on GitHub
                    <IconArrow />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

       <section id="newsletter" className="py-32 px-6">
         <Reveal className="max-w-4xl mx-auto text-center">
           <div className="border border-white/10 rounded-3xl p-4 md:p-20 bg-gradient-to-b from-white/[0.03] to-transparent">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Start your Bitcoin
               <br />
               <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                 journey today.
               </span>
             </h2>
              <div>
                <p className="text-white/60 text-sm mb-8">Monthly dispatches on Caribbean Bitcoin adoption.</p>
                <a
                  href="https://subscribe-forms.beehiiv.com/091a2688-13dd-4e42-af26-397684e59816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-black hover:opacity-90 transition-opacity duration-300"
                >
                  Subscribe to the newsletter
                  <IconArrow />
                </a>
              </div>
           </div>
         </Reveal>
       </section>

      <Footer />
    </div>
  );
}
