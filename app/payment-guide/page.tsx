'use client';

import React, { useEffect, useState } from 'react';

function PaymentGuide() {
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
                <h1 className="text-2xl font-bold text-white">PAYMENT GUIDE</h1>
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
              <h1 className="text-2xl font-bold text-white">PAYMENT GUIDE</h1>
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
              <p className="text-sm text-gray-400 mb-6">Updated: January 2026</p>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-blue-400 mb-2">💰 Monthly Subscription: Rs. 12,000</h2>
                <p className="text-gray-300">Due on the 21st of each month with 2-day grace period</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Billing Cycle</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Payment Due Date</h3>
                    <p className="text-gray-300">21st of each month</p>
                    <p className="text-sm text-gray-400">Your designated billing date</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">⏰ Grace Period</h3>
                    <p className="text-gray-300">23rd of each month</p>
                    <p className="text-sm text-gray-400">2 days after due date</p>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">🚫 Late Payment Consequences</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Account suspension after grace period</li>
                    <li>• Service interruption</li>
                    <li>• Potential account banning for repeated late payments</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Payment Methods</h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">🏦 Bank Transfer</h3>
                    <div className="text-sm text-gray-300 space-y-2">
                      <p><strong>Account Name:</strong> DAT GO Services Pvt Ltd</p>
                      <p><strong>Account Number:</strong> 1234-5678-9012-3456</p>
                      <p><strong>Bank:</strong> National Bank of Pakistan</p>
                      <p><strong>IBAN:</strong> PK36NBPA1234567890123456</p>
                      <p><strong>Swift Code:</strong> NBPA-PK-KA</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">💳 Online Payment</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Pay securely through our integrated payment portal (coming soon)
                    </p>
                    <p className="text-xs text-gray-400">
                      Supported methods: Credit/Debit Cards, Digital Wallets
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">📱 Mobile Banking</h3>
                    <p className="text-gray-300 text-sm">
                      Use your preferred mobile banking app to transfer funds
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Referral Discounts</h2>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-2">🎁 Earn Rs. 1,000 per Active Referral</h3>
                  <p className="text-gray-300">Get discounts on your monthly bill by referring paying users</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Active Referral Requirements</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Referred user must be registered</li>
                      <li>• Must have paid within last month</li>
                      <li>• Account must be active (not banned)</li>
                      <li>• Referral code properly applied</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 How Discounts Work</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Calculated monthly on the 1st</li>
                      <li>• Applied to next month's bill</li>
                      <li>• Maximum discount = your bill amount</li>
                      <li>• Cannot go below Rs. 0</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">📅 Example Calculation</h3>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Monthly Bill:</strong> Rs. 12,000</p>
                    <p><strong>Active Referrals:</strong> 2 users</p>
                    <p><strong>Discount Amount:</strong> 2 × Rs. 1,000 = Rs. 2,000</p>
                    <p><strong>Amount Due:</strong> Rs. 12,000 - Rs. 2,000 = <strong>Rs. 10,000</strong></p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Process</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Check Your Bill</h3>
                      <p className="text-gray-300 text-sm">View your payment history in the app to see current amount due</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Make Payment</h3>
                      <p className="text-gray-300 text-sm">Transfer funds using bank details or online payment methods</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Notify Admin</h3>
                      <p className="text-gray-300 text-sm">Contact admin or use payment portal to confirm transaction</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Confirmation</h3>
                      <p className="text-gray-300 text-sm">Admin marks payment as paid and service continues</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Reminders</h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">🔔 Notification Timeline</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Due Date (21st):</strong> Payment reminder sent</li>
                      <li><strong>Grace Period (23rd):</strong> Final notice before suspension</li>
                      <li><strong>After 23rd:</strong> Account may be suspended</li>
                      <li><strong>Repeated Late Payments:</strong> Account banning possible</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">💡 Pro Tips</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Set up automatic payments to avoid late fees</li>
                      <li>• Check referral status to maximize discounts</li>
                      <li>• Keep payment receipts for your records</li>
                      <li>• Contact support if you encounter payment issues</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Troubleshooting</h2>

                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-400 mb-2">❌ Payment Not Showing</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      If your payment doesn't appear as "paid" after transferring funds:
                    </p>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Wait 24-48 hours for bank processing</li>
                      <li>• Send payment confirmation to admin</li>
                      <li>• Include transaction ID/reference number</li>
                      <li>• Contact support for assistance</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">⚠️ Account Suspended</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      If your account gets suspended due to late payment:
                    </p>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Pay outstanding amount immediately</li>
                      <li>• Contact admin to reactivate account</li>
                      <li>• Service will resume once payment is confirmed</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Support</h2>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Need Help with Payment?</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white mb-1">Email Support</p>
                      <p className="text-sm text-gray-400">billing@dat-go.com</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white mb-1">Phone Support</p>
                      <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGuide;
