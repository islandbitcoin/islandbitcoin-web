'use client';

import Reveal from '@/components/ui/Reveal';
import { IconArrow } from '@/components/ui/icons';

export default function PillarCard({
  title,
  description,
  tagline,
  icon,
  link,
  linkText,
  index,
}: {
  title: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  link?: string;
  linkText: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="group relative">
      <div className="h-full border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300">
        <div className="text-white/20 text-sm font-mono mb-6">0{index + 1}</div>
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-3">{description}</p>
        <p className="text-white/40 text-xs italic mb-6">{tagline}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-orange-400 transition-colors duration-300"
          >
            {linkText}
            <IconArrow />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/40">
            {linkText}
          </span>
        )}
      </div>
    </Reveal>
  );
}
