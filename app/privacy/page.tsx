import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Island Bitcoin collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <Header />
      
      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/40 mb-12">Last updated: January 24, 2026</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-white/70 leading-relaxed">
                Taddesse Incorporated (&quot;Taddesse Inc.,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) and its subsidiaries, including Island Bitcoin LLC, respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website islandbitcoin.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li><strong className="text-white/90">Personal Data:</strong> Name, email address, and contact information you voluntarily provide when contacting us or subscribing to communications.</li>
                <li><strong className="text-white/90">Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong className="text-white/90">Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To communicate with you, including responding to inquiries</li>
                <li>To send periodic emails and updates (with your consent)</li>
                <li>To detect and prevent fraud or unauthorized access</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
              <p className="text-white/70 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to or restrict processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Links</h2>
              <p className="text-white/70 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the website after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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
