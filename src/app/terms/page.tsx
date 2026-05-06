/** @format */

import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="#" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-secondary">Last updated: May 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using TACPLAY, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on TACPLAY for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on TACPLAY</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of TACPLAY</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p>
              When you create an account on TACPLAY, you are responsible for:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your password and account</li>
              <li>Accepting responsibility for all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Booking and Payments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.1 Game Bookings</h3>
                <p>
                  Players agree to book games in good faith. Cancellations must be made according to the field owner&apos;s cancellation policy. No-shows may result in account penalties or suspension.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.2 Payment Processing</h3>
                <p>
                  All payments are processed securely via Stripe. By providing payment information, you authorize TACPLAY and Stripe to charge your payment method for the services rendered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.3 Refund Policy</h3>
                <p>
                  Refunds are subject to the field owner&apos;s cancellation policy. TACPLAY does not issue refunds directly; all refund requests must be submitted through your booking.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Field Owner Responsibilities</h2>
            <p>
              Field owners agree to:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Provide accurate information about their fields and availability</li>
              <li>Honor confirmed bookings</li>
              <li>Respond to player inquiries in a timely manner</li>
              <li>Maintain safe, legal facilities that comply with local regulations</li>
              <li>Provide accurate pricing and not engage in discriminatory practices</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Player Conduct</h2>
            <p>
              Players agree to:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Follow all field rules and safety guidelines</li>
              <li>Treat other players and field staff with respect</li>
              <li>Not engage in harassment, discrimination, or offensive behavior</li>
              <li>Cancel bookings responsibly</li>
              <li>Provide accurate information on their profiles</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Activities</h2>
            <p>
              You agree not to:
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside">
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in harassment, hate speech, or discrimination</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Submit false information or fake reviews</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Share your account with others</li>
              <li>Solicit other users outside of TACPLAY to bypass our commission</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p>
              TACPLAY is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, TACPLAY and its owners disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="mt-4">
              TACPLAY shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless TACPLAY, its owners, and employees from any claims, damages, losses, or expenses arising from your violation of these terms or your use of the platform.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
            <p>
              Any disputes arising from your use of TACPLAY shall be governed by and construed in accordance with the laws of Spain, and you irrevocably submit to the exclusive jurisdiction of the courts located in Spain.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
            <p>
              TACPLAY reserves the right to terminate your account and access to the service at any time, without notice, for violation of these terms or for any other reason at our sole discretion.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
            <p>
              TACPLAY reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-6 bg-background/40 rounded-lg border border-background/60">
              <p className="font-semibold text-white mb-2">TACPLAY Legal Team</p>
              <p>Email: <a href="mailto:legal@tacplay.eu" className="text-primary hover:underline">legal@tacplay.eu</a></p>
              <p>Phone: <a href="tel:+34623295692" className="text-primary hover:underline">+34 623 295 692</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
