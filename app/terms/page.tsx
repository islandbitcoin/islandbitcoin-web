'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <Header />
      
      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/40 mb-12">Last updated: January 24, 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By accessing or using the Island Bitcoin website (islandbitcoin.com), operated by Taddesse Incorporated (&quot;Taddesse Inc.&quot;) and its subsidiaries, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on Taddesse Inc.&apos;s website for personal, non-commercial use only. This license does not include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for commercial purposes</li>
                <li>Attempting to reverse engineer any software on the website</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring the materials to another person</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p className="text-white/70 leading-relaxed">
                The materials on this website are provided on an &quot;as is&quot; basis. Taddesse Inc. makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p className="text-white/70 leading-relaxed">
                In no event shall Taddesse Incorporated or its subsidiaries be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Taddesse Inc. has been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
              <p className="text-white/70 leading-relaxed">
                The materials appearing on this website may include technical, typographical, or photographic errors. Taddesse Inc. does not warrant that any of the materials on its website are accurate, complete, or current. Taddesse Inc. may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
              <p className="text-white/70 leading-relaxed">
                Taddesse Inc. has not reviewed all sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Taddesse Inc. Use of any linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Investment Disclaimer</h2>
              <p className="text-white/70 leading-relaxed">
                Nothing on this website constitutes financial, investment, legal, or tax advice. Bitcoin and cryptocurrency investments involve significant risk including the potential loss of principal. Past performance is not indicative of future results. You should consult with qualified professionals before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications</h2>
              <p className="text-white/70 leading-relaxed">
                Taddesse Inc. may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law</h2>
              <p className="text-white/70 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:info@islandbitcoin.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  info@islandbitcoin.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
