'use client';

import React, { useEffect, useState } from 'react';

function PrivacyPolicy() {
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
                <h1 className="text-2xl font-bold text-white">PRIVACY POLICY</h1>
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
              <h1 className="text-2xl font-bold text-white">PRIVACY POLICY</h1>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300 mb-4">
                  Welcome to DAT GO ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our DAT trading platform application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.1 Personal Information</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Name and email address</li>
                  <li>Payment information and billing details</li>
                  <li>Referral codes and usage history</li>
                  <li>Account preferences and settings</li>
                  <li>Device and usage information</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.2 Usage Data</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Login times and session duration</li>
                  <li>Features accessed and usage patterns</li>
                  <li>Error logs and crash reports</li>
                  <li>Performance metrics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Provide and maintain our DAT trading services</li>
                  <li>Process payments and manage billing</li>
                  <li>Administer referral programs and bonuses</li>
                  <li>Send important service notifications</li>
                  <li>Improve our application and user experience</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist our operations (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Secure password hashing</li>
                  <li>Regular security audits</li>
                  <li>Limited access to personal data</li>
                  <li>Automatic session timeouts</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your account and data</li>
                  <li>Data portability</li>
                  <li>Opt-out of certain data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-4">
                  Our application may use local storage and session management for functionality. We do not use third-party tracking cookies or analytics services that collect personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                <p className="text-gray-300 mb-4">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Account data is retained while your account is active and for a reasonable period thereafter.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300 mb-4">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date and providing in-app notifications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300"><strong>Email:</strong> privacy@dat-go.com</p>
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

export default PrivacyPolicy;
