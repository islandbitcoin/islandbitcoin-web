'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import FocusTrap from 'focus-trap-react';
import { IconX } from '@/components/ui/icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll enabled={isOpen}>
          <FocusTrap>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black border-l border-white/10 z-50 flex flex-col"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white"
                aria-label="Close menu"
              >
                <IconX />
              </button>

              <nav className="flex flex-col gap-6 p-12 mt-16">
                <a href="#mission" onClick={onClose} className="text-lg text-white/80 hover:text-white transition-colors">
                  Mission
                </a>
                <a href="https://community.islandbitcoin.com" target="_blank" rel="noopener noreferrer" onClick={onClose} className="text-lg text-white/80 hover:text-white transition-colors">
                  Community
                </a>
                <a href="#products" onClick={onClose} className="text-lg text-white/80 hover:text-white transition-colors">
                  Products
                </a>
                <a
                  href="https://community.islandbitcoin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold text-center hover:bg-white/90 transition-colors"
                >
                  Join Us
                </a>
              </nav>
            </motion.div>
          </FocusTrap>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}
