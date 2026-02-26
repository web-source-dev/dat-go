'use client';

import React from 'react';

function PrivacyPolicy() {
  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-100 text-neutral-900">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <header className="border-b border-neutral-300 bg-neutral-50 px-6 py-5 sm:px-8">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Privacy Policy</h1>
              <p className="mt-1 text-sm text-neutral-500">Last updated: January 2026</p>
            </div>
            <button
              onClick={handleBack}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close privacy policy"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto grid w-full max-w-6xl gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Privacy Commitment</p>
                <h2 className="mt-2 text-2xl font-semibold">Your data stays protected</h2>
                <p className="mt-2 text-neutral-700">
                  We collect only the information needed to run billing, referrals, and platform security.
                </p>
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-neutral-700">
                  <p className="font-medium">We do not sell your personal information.</p>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                    <h3 className="font-semibold">Personal Information</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Name and email address</li>
                      <li>Billing and payment details</li>
                      <li>Referral code usage</li>
                      <li>Account preferences</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
                    <h3 className="font-semibold">Usage Information</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Login/session data</li>
                      <li>Features used</li>
                      <li>Error and crash logs</li>
                      <li>Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">2. How We Use Data</h2>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>Provide and improve the DAT GO application</li>
                  <li>Process subscriptions, billing, and referral discounts</li>
                  <li>Send critical service and account notices</li>
                  <li>Prevent fraud and protect account security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">3. Sharing and Security</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold">When we may share data</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>With your consent</li>
                      <li>For legal compliance</li>
                      <li>With trusted service providers under confidentiality terms</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <h3 className="font-semibold">How we protect data</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Encrypted transmission/storage</li>
                      <li>Secure authentication controls</li>
                      <li>Limited access and periodic reviews</li>
                      <li>Session timeout safeguards</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">4. Your Rights and Data Retention</h2>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>Access and correct your personal information</li>
                  <li>Request deletion of your account data</li>
                  <li>Request data portability where applicable</li>
                  <li>Opt out of some data processing</li>
                  <li>Data is retained only as needed for service and legal obligations</li>
                </ul>
                </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick Summary</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Policy Version</p>
                    <p className="mt-1 font-semibold text-neutral-900">January 2026</p>
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-neutral-500">Data Sales</p>
                    <p className="mt-1 font-semibold text-neutral-900">Not sold to third parties</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Privacy Contact</h2>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="mt-2 text-sm text-neutral-600">We may update this policy from time to time. Material changes are reflected in-app with an updated date. <br /> <br /> For any questions or concerns about this privacy policy, please contact us:</p>
                  </div>
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Email</p>
                    <p className="mt-1 font-medium">privacy@dat-go.com</p>
                  </div>
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Phone</p>
                    <p className="mt-1 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
