'use client';

import Reveal from '@/components/ui/Reveal';

const news = [
  {
    outlet: 'Forbes · Nov 2025',
    title: "Jamaica's First Native Bitcoin App Is Helping With Hurricane Relief",
    href: 'https://www.forbes.com/sites/frankcorva/2025/11/20/jamaicas-first-native-bitcoin-app-is-helping-with-hurricane-relief/',
  },
  {
    outlet: 'Breez · Jan 2024',
    title: 'Building on Lightning: Flash Is Reinventing Caribbean Money with the Breez SDK',
    href: 'https://medium.com/breez-technology/building-on-lightning-flash-is-reinventing-caribbean-money-with-the-breez-sdk-d26ef8b81fb8',
  },
  {
    outlet: 'One Love Bitcoin · 4 seasons',
    title: 'Our documentary interview series — 26 episodes, 20+ countries',
    href: 'https://onelovebitcoin.com',
  },
];

export default function NewsEvents() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal offset={{ x: -20 }}>
            <h2 className="text-2xl font-semibold text-orange-400 mb-8">
              Latest News
            </h2>

            <ul className="space-y-6">
              {news.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <p className="text-xs text-white/40 mb-1">{item.outlet}</p>
                    <p className="text-sm text-white/70 group-hover:text-orange-400 transition-colors duration-300 leading-relaxed">
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          
          <Reveal offset={{ x: 20 }} delay={0.2}>
            <h2 className="text-2xl font-semibold text-orange-400 mb-8">
              Upcoming Events
            </h2>
            
            <p className="text-white/40 text-sm leading-relaxed">
              Meetups, workshops, and conference details live on the community site.
            </p>
            <a
              href="https://community.islandbitcoin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-white/60 hover:text-orange-400 transition-colors duration-300"
            >
              See what&rsquo;s on →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
