'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/logo-white.svg" alt="Island Bitcoin" className="h-6 opacity-50" />
          <span className="text-sm text-white/30">
            © {new Date().getFullYear()} Island Bitcoin
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://community.islandbitcoin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            Community
          </a>
          <a
            href="https://getflash.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            Flash
          </a>
          <a
            href="/investors"
            className="text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            Investors
          </a>
          <a
            href="/privacy"
            className="text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-sm text-white/30 hover:text-white transition-colors duration-300"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
