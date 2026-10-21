'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the entrance animation. */
  delay?: number;
  /** Entrance offset direction. Defaults to a small upward fade. */
  offset?: { x?: number; y?: number };
  /** When true (default), animate on scroll into view; otherwise animate on mount. */
  onScroll?: boolean;
  /** HTML tag rendered while static (before hydration / without JS). Use "div" by default. */
  as?: 'div' | 'section';
}

/**
 * Entrance animation that never hides content from non-JS visitors:
 * server/static HTML renders fully visible; the framer-motion wrapper
 * only mounts after hydration.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  offset = { y: 20 },
  onScroll = true,
  as = 'div',
}: RevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const hidden = { opacity: 0, x: 0, y: 0, ...offset };
  const shown = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={hidden}
      {...(onScroll
        ? { whileInView: shown, viewport: { once: true, margin: '-100px' } }
        : { animate: shown })}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
