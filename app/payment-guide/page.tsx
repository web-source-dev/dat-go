'use client';

import React from 'react';

function PaymentGuide() {
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
              <h1 className="text-2xl font-semibold tracking-tight">Payment Guide</h1>
              <p className="mt-1 text-sm text-neutral-500">Updated: January 2026</p>
            </div>
            <button
              onClick={handleBack}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100"
              aria-label="Close payment guide"
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
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Monthly Plan</p>
                <h2 className="mt-2 text-2xl font-semibold">Rs. 12,000</h2>
                <p className="mt-2 text-neutral-600">Due on the 21st of each month with a 2-day grace period.</p>
                <p className="mt-2 text-sm font-medium text-neutral-700">Invite friends and reduce what you pay every month.</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 bg-white/70 p-3">
                    <p className="text-xs text-neutral-500">Due Date</p>
                    <p className="mt-1 font-semibold">21st</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white/70 p-3">
                    <p className="text-xs text-neutral-500">Grace Until</p>
                    <p className="mt-1 font-semibold">23rd</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white/70 p-3">
                    <p className="text-xs text-neutral-500">Referral Credit</p>
                    <p className="mt-1 font-semibold">Rs. 1,000</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-neutral-700">
                  <p className="font-medium">Simple goal: 3 active referrals can save you Rs. 3,000 each month.</p>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li>Account suspension after the grace period</li>
                    <li>Service interruption</li>
                    <li>Potential account banning for repeated late payments</li>
                  </ul>
              </section>

              

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">2. Payment Methods</h2>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold">Bank Transfer</h3>
                    <div className="mt-2 grid gap-1 text-sm text-neutral-700 sm:grid-cols-2">
                      <p><strong>Account Name:</strong> M RIZWAN</p>
                      <p><strong>Account Number:</strong> 24897001202103</p>
                      <p><strong>Bank:</strong> Habib Bank Limited (HBL)</p>
                      <p><strong>IBAN:</strong> PK09HABB0024897001202103</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">3. Referral Discounts</h2>
                <div className="mt-4 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                  <h3 className="font-semibold">Earn Rs. 1,000 per active referral every billing cycle</h3>
                  <p className="mt-1 text-neutral-600">The more active referrals you have, the lower your monthly bill becomes.</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold">Who counts as an active referral</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Referred user must be registered</li>
                      <li>Must have paid within last month</li>
                      <li>Account must be active (not banned)</li>
                      <li>Referral code properly applied</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <h3 className="font-semibold">How Discounts Work</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      <li>Calculated monthly on the 1st</li>
                      <li>Applied to next month&apos;s bill</li>
                      <li>Maximum discount equals your bill amount</li>
                      <li>Amount due cannot go below Rs. 0</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <h3 className="font-semibold">How to get more referrals (fast)</h3>
                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm">
                      <p className="font-medium text-neutral-900">1. Share your code</p>
                      <p className="mt-1 text-neutral-600">Post in your profile and chats.</p>
                    </div>
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm">
                      <p className="font-medium text-neutral-900">2. Explain the value</p>
                      <p className="mt-1 text-neutral-600">Clearly explain the benefit.</p>
                    </div>
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm">
                      <p className="font-medium text-neutral-900">3. Follow up</p>
                      <p className="mt-1 text-neutral-600">Remind them to complete payment.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-neutral-700">
                  <h3 className="font-semibold text-neutral-900">Example Calculation</h3>
                  <div className="mt-2 grid gap-1 sm:grid-cols-2">
                    <p><strong>Monthly Bill:</strong> Rs. 12,000</p>
                    <p><strong>Active Referrals:</strong> 2 users</p>
                    <p><strong>Discount Amount:</strong> 2 x Rs. 1,000 = Rs. 2,000</p>
                    <p><strong>Amount Due:</strong> Rs. 10,000</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700">
                  <h3 className="font-semibold text-neutral-900">Quick Savings</h3>
                  <p className="mt-2"><strong>1 referral:</strong> Rs. 11,000 due</p>
                  <p><strong>3 referrals:</strong> Rs. 9,000 due</p>
                  <p><strong>12 referrals:</strong> Rs. 0 due (max discount cap)</p>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">4. Payment Process</h2>
                <div className="mt-4 space-y-4">
                  <div className="relative pl-11">
                    <div className="absolute left-3 top-8 h-10 w-px bg-neutral-300" />
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">1</div>
                    <h3 className="font-medium">Check Your Bill</h3>
                    <p className="text-sm text-neutral-600">View payment history in your dashboard to see your current amount due.</p>
                  </div>

                  <div className="relative pl-11">
                    <div className="absolute left-3 top-8 h-10 w-px bg-neutral-300" />
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">2</div>
                    <h3 className="font-medium">Make Payment</h3>
                    <p className="text-sm text-neutral-600">Transfer funds using bank details.</p>
                  </div>

                  <div className="relative pl-11">
                    <div className="absolute left-3 top-8 h-10 w-px bg-neutral-300" />
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">3</div>
                    <h3 className="font-medium">Notify Admin</h3>
                    <p className="text-sm text-neutral-600">Contact your agent or admin to confirm transaction. </p>
                  </div>

                  <div className="relative pl-11">
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold">4</div>
                    <h3 className="font-medium">Confirmation</h3>
                    <p className="text-sm text-neutral-600">Admin marks payment as paid and service continues.</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">5. Payment Reminders</h2>
                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li><strong>21st:</strong> Payment reminder sent</li>
                    <li><strong>23rd:</strong> Final notice before suspension</li>
                    <li>Set up automatic payments and keep receipts for records</li>
                    <li>Check referral status each month to maximize discount</li>
                  </ul>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">6. Troubleshooting</h2>
                <div className="mt-4 rounded-lg border border-neutral-200 p-4">
                  <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    <li>If payment is not visible, wait 24 to 48 hours and share transaction proof with admin.</li>
                    <li>If suspended, clear dues and contact admin for reactivation.</li>
                    <li>For unresolved issues, contact support.</li>
                  </ul>
                </div>
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick Summary</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Monthly Bill</p>
                    <p className="mt-1 font-semibold text-neutral-900">Rs. 12,000</p>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Due Date</p>
                    <p className="mt-1 font-semibold text-neutral-900">21st of each month</p>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-neutral-500">Grace Period</p>
                    <p className="mt-1 font-semibold text-neutral-900">Until 23rd</p>
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-neutral-500">Referral Opportunity</p>
                    <p className="mt-1 font-semibold text-neutral-900">Rs. 1,000 saved per active user</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-neutral-300 bg-neutral-50 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Contact Support</h2>
                <div className="mt-4 space-y-3">
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Email Support</p>
                    <p className="mt-1 font-medium">billing@dat-go.com</p>
                  </div>
                  <div className="rounded-md border border-neutral-200 p-3">
                    <p className="text-xs text-neutral-500">Phone Support</p>
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

export default PaymentGuide;
