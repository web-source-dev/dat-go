'use client';

import React, { useEffect, useState } from 'react';

function TermsOfUse() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 text-white overflow-hidden">
        <div className="w-full h-full overflow-hidden flex flex-col">
          <div className="bg-blue-600 px-8 py-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <h1 className="text-2xl font-bold text-white">TERMS OF USE</h1>
              </div>
              <div className="w-10 h-10"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-400">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 text-white overflow-hidden">
      <div className="w-full h-full overflow-hidden flex flex-col">
        <div className="bg-blue-600 px-8 py-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <h1 className="text-2xl font-bold text-white">TERMS OF USE</h1>
            </div>
            <button
              onClick={handleBack}
              className="w-10 h-10 flex items-center justify-center hover:bg-red-600 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">Last updated: January 2026</p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using DAT GO ("the Application"), you agree to be bound by these Terms of Use ("Terms"). If you disagree with any part of these terms, then you may not access the Application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  DAT GO is a desktop application that provides access to DAT (Digital Asset Trading) services, including market data, trading tools, and related financial services. The application facilitates secure access to trading platforms and provides referral programs for user acquisition.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.1 Account Creation</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>One account per user is permitted</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.2 Account Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Keep your password confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>Do not share your account credentials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Billing</h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">4.1 Monthly Subscription</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Service is provided on a monthly subscription basis</li>
                  <li>Payment is due on your designated billing date</li>
                  <li>Late payments may result in service suspension</li>
                  <li>All fees are non-refundable except as required by law</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">4.2 Referral Discounts</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Active referrals may qualify for monthly discounts</li>
                  <li>Discounts are applied automatically to upcoming payments</li>
                  <li>Referral eligibility requires active payment history</li>
                  <li>Discount amounts may change with program updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use Policy</h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.1 Permitted Use</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Use the application for legitimate trading activities</li>
                  <li>Share referral codes with eligible individuals</li>
                  <li>Access market data and trading tools as provided</li>
                  <li>Report technical issues or request support</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.2 Prohibited Activities</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Attempt to hack, disrupt, or damage the application</li>
                  <li>Use the application for fraudulent purposes</li>
                  <li>Share account credentials or referral codes inappropriately</li>
                  <li>Create multiple accounts or manipulate referral programs</li>
                  <li>Transmit harmful code or malware</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Referral Program</h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.1 Program Rules</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Referrals must be made to eligible individuals only</li>
                  <li>Referred users must complete account setup and payment</li>
                  <li>Referral codes can only be used once per user</li>
                  <li>Fraudulent referrals will result in account suspension</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.2 Referral Rewards</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Rewards are Rs. 1,000 per active referral per month</li>
                  <li>Active status requires recent payment history</li>
                  <li>Rewards are applied as discounts to your monthly bill</li>
                  <li>Reward amounts and eligibility may change</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  The Application and its original content, features, and functionality are owned by DAT GO and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your account and access to the Application immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Application will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-gray-300 mb-4">
                  The Application is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or specific results from using our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  In no event shall DAT GO be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These Terms shall be governed by and construed in accordance with applicable local laws, without regard to conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes through the application. Continued use constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300"><strong>Email:</strong> legal@dat-go.com</p>
                  <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
