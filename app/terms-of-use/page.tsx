'use client';

import React from 'react';

function TermsOfUse() {
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
              <h1 className="text-2xl font-semibold tracking-tight">Terms of Use</h1>
              <p className="mt-1 text-sm text-neutral-500">Last updated: January 2026</p>
            </div>
            <button
              onClick={handleBack}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close terms of use"
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
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Legal Agreement</p>
                <h2 className="mt-2 text-2xl font-semibold">Use of DAT GO requires acceptance of these terms</h2>
                <p className="mt-2 text-neutral-700">
                  By using the application, you agree to account, billing, referral, and acceptable-use rules.
                </p>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">1. Eligibility and Accounts</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                    <h3 className="font-semibold">Account Requirements</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Information must be accurate</li>
                      <li>One account per person</li>
                      <li>Account holder is responsible for all activity</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <h3 className="font-semibold">Security Duties</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Keep credentials private</li>
                      <li>Report unauthorized access immediately</li>
                      <li>Do not share login details</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">2. Subscription, Billing, and Referrals</h2>
                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li>Service is billed monthly on your billing date.</li>
                    <li>Late payment may suspend access.</li>
                    <li>Fees are non-refundable unless required by law.</li>
                    <li>Active referrals may receive monthly discounts.</li>
                    <li>Referral rewards and eligibility can be updated over time.</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">3. Acceptable Use</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <h3 className="font-semibold">Permitted</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Legitimate trading and account management</li>
                      <li>Responsible referral sharing</li>
                      <li>Reporting issues to support</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
                    <h3 className="font-semibold">Prohibited</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Fraud, abuse, hacking, or malware</li>
                      <li>Account sharing or multi-account manipulation</li>
                      <li>Referral program abuse or fake signups</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">4. Liability, Termination, and Updates</h2>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>The application is provided as-is, without guarantee of uninterrupted service.</li>
                  <li>DAT GO may suspend or terminate accounts for policy breaches.</li>
                  <li>Liability is limited to the extent allowed by law.</li>
                  <li>Terms may be updated, and continued use means acceptance.</li>
                </ul>
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick Summary</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Billing Type</p>
                    <p className="mt-1 font-semibold text-neutral-900">Monthly subscription</p>
                  </div>
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                    <p className="text-neutral-500">Policy Note</p>
                    <p className="mt-1 font-semibold text-neutral-900">Referral abuse can lead to suspension</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Legal Contact</h2>
                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Email</p>
                    <p className="mt-1 font-medium">legal@dat-go.com</p>
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

export default TermsOfUse;
