import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InvestorHero from '@/components/investors/InvestorHero';
import MissionStrategy from '@/components/investors/MissionStrategy';
import FinancialReports from '@/components/investors/FinancialReports';
import NewsEvents from '@/components/investors/NewsEvents';

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    'Mission, strategy, and financial reporting for Island Bitcoin and its subsidiaries.',
};

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <Header />
      
      <main>
        <InvestorHero />
        <MissionStrategy />
        <FinancialReports />
        <NewsEvents />
      </main>
      
      <Footer />
    </div>
  );
}
