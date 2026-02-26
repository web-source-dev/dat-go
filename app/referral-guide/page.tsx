'use client';

import React from 'react';

function ReferralGuide() {
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
              <h1 className="text-2xl font-semibold tracking-tight">Referral Guide</h1>
              <p className="mt-1 text-sm text-neutral-500">Updated: January 2026</p>
            </div>
            <button
              onClick={handleBack}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close referral guide"
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
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Referral Program</p>
                <h2 className="mt-2 text-2xl font-semibold">Earn Rs. 1,000 per active referral</h2>
                <p className="mt-2 text-neutral-700">Each active referral lowers your next monthly bill.</p>
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-neutral-700">
                  <p className="font-medium">Target 3 active referrals to save Rs. 3,000 per month.</p>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">1. How It Works</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <h3 className="font-semibold">Share your code</h3>
                    <p className="mt-1 text-sm text-neutral-700">Copy and send your referral code to people you know.</p>
                  </div>
                  <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                    <h3 className="font-semibold">They sign up</h3>
                    <p className="mt-1 text-sm text-neutral-700">They apply your code during signup and start paying.</p>
                  </div>
                  <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
                    <h3 className="font-semibold">You save monthly</h3>
                    <p className="mt-1 text-sm text-neutral-700">You get Rs. 1,000 off for each active referral.</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">2. Active Referral Rules</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <h3 className="font-semibold">Counts as Active</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>User registered with your code</li>
                      <li>User paid within the last month</li>
                      <li>Account is active and compliant</li>
                      <li>Status recalculates monthly on the 1st</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
                    <h3 className="font-semibold">Becomes Inactive When</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>No recent payment</li>
                      <li>Policy-violating or banned account</li>
                      <li>Referral code not applied correctly</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">3. Savings Examples</h2>
                <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-neutral-700">
                  <p><strong>Monthly bill:</strong> Rs. 12,000</p>
                  <p><strong>1 active referral:</strong> Pay Rs. 11,000</p>
                  <p><strong>3 active referrals:</strong> Pay Rs. 9,000</p>
                  <p><strong>12 active referrals:</strong> Pay Rs. 0 (max discount cap)</p>
                </div>
                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <h3 className="font-semibold">How to grow faster</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li>Share your code right after helping someone onboard</li>
                    <li>Follow up so referrals complete first payment</li>
                    <li>Focus on quality users who stay active</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">4. Program Rules</h2>
                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li>No fake accounts, spam, or referral manipulation</li>
                    <li>No misleading claims about benefits</li>
                    <li>Violation may lead to discount removal or account suspension</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">5. Common Questions</h2>
                <div className="mt-4 space-y-3 text-sm text-neutral-700">
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <p className="font-semibold text-neutral-900">When do I start earning?</p>
                    <p className="mt-1">After signup, code application, and first payment. Discount appears on your next bill.</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <p className="font-semibold text-neutral-900">Can I change my referral code?</p>
                    <p className="mt-1">No. Codes are permanent to keep the program fair.</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <p className="font-semibold text-neutral-900">Is there a referral limit?</p>
                    <p className="mt-1">No hard limit, but only active referrals generate discounts.</p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick Summary</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Reward</p>
                    <p className="mt-1 font-semibold text-neutral-900">Rs. 1,000 per active referral</p>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Status Update</p>
                    <p className="mt-1 font-semibold text-neutral-900">Monthly on the 1st</p>
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-neutral-500">Goal</p>
                    <p className="mt-1 font-semibold text-neutral-900">3 referrals = Rs. 3,000 saved</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Referral Support</h2>
                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Email</p>
                    <p className="mt-1 font-medium">referrals@dat-go.com</p>
                  </div>
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Dashboard</p>
                    <p className="mt-1 font-medium">Track your referral stats in-app</p>
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

export default ReferralGuide;
