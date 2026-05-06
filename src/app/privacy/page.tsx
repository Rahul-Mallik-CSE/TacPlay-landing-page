/** @format */

import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="#" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-secondary">Last updated: May 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              TACPLAY (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="mt-4">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.1 Personal Information</h3>
                <p>
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials and login information</li>
                  <li>Payment information and billing address</li>
                  <li>Field or player profile details</li>
                  <li>Game booking and booking history</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                <p>
                  When you access TACPLAY, we automatically collect:
                </p>
                <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
                  <li>Device information (type, operating system, browser)</li>
                  <li>IP address and location data</li>
                  <li>Usage data and interaction patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Provide and improve our services</li>
              <li>Process bookings and payments</li>
              <li>Send transactional and promotional communications</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage and optimize user experience</li>
              <li>Connect players with fields and teams</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. However, we may share information with:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li><strong>Service Providers:</strong> Payment processors (Stripe), analytics tools, hosting providers</li>
              <li><strong>Field Owners & Players:</strong> Booking information necessary to facilitate games</li>
              <li><strong>Legal Requirements:</strong> When required by law or in response to legal requests</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure payment processing via Stripe</li>
              <li>Regular security audits and monitoring</li>
              <li>Restricted access to sensitive information</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <p>
              Under GDPR and similar regulations, you have the right to:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Restrict how your data is processed</li>
              <li>Request a copy of your data (data portability)</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can manage your cookie preferences through your browser settings or by visiting our Cookie Settings page.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. You may request deletion of your data at any time, subject to legal requirements.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. GDPR Compliance</h2>
            <p>
              TACPLAY is GDPR-compliant. We process personal data lawfully, fairly, and transparently. Your personal data is only processed with a valid legal basis (consent, contract, legal obligation, or legitimate interests).
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-background/40 rounded-lg border border-background/60">
              <p className="font-semibold text-white mb-2">TACPLAY Privacy Team</p>
              <p>Email: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a></p>
              <p>Phone: <a href="tel:+34623295692" className="text-primary hover:underline">+34 623 295 692</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
