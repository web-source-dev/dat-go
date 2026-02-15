'use client';

import React, { useEffect, useState } from 'react';

function ReferralGuide() {
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
                <h1 className="text-2xl font-bold text-white">REFERRAL PROGRAM GUIDE</h1>
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
              <h1 className="text-2xl font-bold text-white">REFERRAL PROGRAM GUIDE</h1>
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

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-green-400 mb-2">🎁 Earn Rs. 1,000 per Active Referral</h2>
                <p className="text-gray-300">Share your referral code and get monthly discounts on your bill</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. How It Works</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">1️⃣</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Share Code</h3>
                    <p className="text-gray-300 text-sm">Copy your unique referral code from the dashboard</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">2️⃣</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Friend Signs Up</h3>
                    <p className="text-gray-300 text-sm">They register using your code and start paying</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Get Discount</h3>
                    <p className="text-gray-300 text-sm">Rs. 1,000 off your monthly bill for each active referral</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Your Referral Code</h2>

                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">🔗 Finding Your Code</h3>
                  <ol className="text-gray-300 space-y-2 text-sm">
                    <li>1. Log in to the DAT GO application</li>
                    <li>2. Open the Referral Dashboard (floating button or menu)</li>
                    <li>3. Your unique 8-character code is displayed at the top</li>
                    <li>4. Click "Copy Code" to share it easily</li>
                  </ol>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚠️ Important Notes</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Each code is unique to your account</li>
                    <li>• Codes are case-sensitive (usually uppercase)</li>
                    <li>• You can only use one referral code when signing up</li>
                    <li>• Referral codes cannot be changed once applied</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Active Referral Requirements</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">✅ What Makes a Referral Active</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>✓ Paid within last month:</strong> Referred user made a payment recently</li>
                      <li><strong>✓ Account active:</strong> Not banned or suspended</li>
                      <li><strong>✓ Code applied:</strong> Used your referral code during signup</li>
                      <li><strong>✓ Monthly check:</strong> Status updated on the 1st of each month</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Inactive Referral Reasons</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>✗ No recent payment:</strong> Haven't paid in over a month</li>
                      <li><strong>✗ Account banned:</strong> Suspended for policy violations</li>
                      <li><strong>✗ Code not used:</strong> Didn't apply your referral code</li>
                      <li><strong>✗ Fraudulent signup:</strong> Violates program rules</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Status Check Timeline</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li><strong>Monthly Update:</strong> Referral status recalculated on the 1st of each month</li>
                    <li><strong>Discount Applied:</strong> Next month's bill gets the discount</li>
                    <li><strong>Real-time Display:</strong> Dashboard shows current status immediately</li>
                    <li><strong>Historical Tracking:</strong> View all past earnings and discounts</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Earning Examples</h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">📈 Example 1: Single Active Referral</h3>
                    <div className="text-sm text-gray-300 space-y-1 mb-3">
                      <p><strong>Your Monthly Bill:</strong> Rs. 12,000</p>
                      <p><strong>Active Referrals:</strong> 1 user (paid this month)</p>
                      <p><strong>Monthly Discount:</strong> 1 × Rs. 1,000 = Rs. 1,000</p>
                      <p><strong>You Pay:</strong> Rs. 12,000 - Rs. 1,000 = <strong>Rs. 11,000</strong></p>
                    </div>
                    <div className="text-xs text-green-400 bg-green-900/20 p-2 rounded">
                      💰 You save Rs. 1,000 this month!
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">🚀 Example 2: Multiple Active Referrals</h3>
                    <div className="text-sm text-gray-300 space-y-1 mb-3">
                      <p><strong>Your Monthly Bill:</strong> Rs. 12,000</p>
                      <p><strong>Active Referrals:</strong> 3 users (all paid this month)</p>
                      <p><strong>Monthly Discount:</strong> 3 × Rs. 1,000 = Rs. 3,000</p>
                      <p><strong>You Pay:</strong> Rs. 12,000 - Rs. 3,000 = <strong>Rs. 9,000</strong></p>
                    </div>
                    <div className="text-xs text-green-400 bg-green-900/20 p-2 rounded">
                      💰 You save Rs. 3,000 this month!
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">⏰ Example 3: Mixed Active/Inactive</h3>
                    <div className="text-sm text-gray-300 space-y-1 mb-3">
                      <p><strong>Your Monthly Bill:</strong> Rs. 12,000</p>
                      <p><strong>Total Referrals:</strong> 4 users</p>
                      <p><strong>Active Referrals:</strong> 2 users (paid recently)</p>
                      <p><strong>Inactive Referrals:</strong> 2 users (haven't paid in 2+ months)</p>
                      <p><strong>Monthly Discount:</strong> 2 × Rs. 1,000 = Rs. 2,000</p>
                      <p><strong>You Pay:</strong> Rs. 12,000 - Rs. 2,000 = <strong>Rs. 10,000</strong></p>
                    </div>
                    <div className="text-xs text-yellow-400 bg-yellow-900/20 p-2 rounded">
                      ⚠️ 2 referrals inactive - focus on getting them to pay to increase savings!
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Referral Best Practices</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do's</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Share personally:</strong> Tell friends and family about the service</li>
                      <li><strong>Explain benefits:</strong> Help them understand the value</li>
                      <li><strong>Follow up:</strong> Check if they signed up and are paying</li>
                      <li><strong>Be honest:</strong> Share genuine experiences</li>
                      <li><strong>Stay active:</strong> Keep your own account in good standing</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don'ts</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Don't spam:</strong> Avoid mass messaging or unwanted sharing</li>
                      <li><strong>Don't fake accounts:</strong> Creating dummy accounts is fraud</li>
                      <li><strong>Don't pressure:</strong> Let people decide for themselves</li>
                      <li><strong>Don't misrepresent:</strong> Be honest about costs and benefits</li>
                      <li><strong>Don't share codes publicly:</strong> Keep them personal</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Tracking Your Success</h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Dashboard Metrics</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Total Referrals:</strong> All users who used your code</li>
                      <li><strong>Active Referrals:</strong> Currently earning you discounts</li>
                      <li><strong>Inactive Referrals:</strong> Not currently active</li>
                      <li><strong>Total Earned:</strong> Lifetime discount amount received</li>
                      <li><strong>Monthly Savings:</strong> Current month's projected discount</li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">🎯 Maximizing Earnings</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Quality over quantity:</strong> Focus on users likely to stay active</li>
                      <li><strong>Regular check-ins:</strong> Monitor referral status monthly</li>
                      <li><strong>Help new users:</strong> Ensure they understand payment requirements</li>
                      <li><strong>Timing matters:</strong> Referrals need to pay consistently to stay active</li>
                      <li><strong>Network building:</strong> Encourage referrals to refer others</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Program Rules & Fair Play</h2>

                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-400 mb-2">🚫 Prohibited Activities</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Fraudulent accounts:</strong> Creating fake users or multiple accounts</li>
                      <li><strong>Code manipulation:</strong> Altering or sharing codes inappropriately</li>
                      <li><strong>Spam referrals:</strong> Unsolicited mass sharing</li>
                      <li><strong>False promises:</strong> Misrepresenting program benefits</li>
                      <li><strong>Account sharing:</strong> Sharing login credentials</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚠️ Violation Consequences</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li><strong>Discount revocation:</strong> Loss of earned referral benefits</li>
                      <li><strong>Account suspension:</strong> Temporary access restriction</li>
                      <li><strong>Account termination:</strong> Permanent ban for severe violations</li>
                      <li><strong>Financial penalties:</strong> Repayment of fraudulent discounts</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Q: When do I start earning from referrals?</h3>
                    <p className="text-gray-300 text-sm">
                      You start earning once your referred user signs up, applies your code, and makes their first payment. The discount appears on your next monthly bill.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Q: What if my referral stops paying?</h3>
                    <p className="text-gray-300 text-sm">
                      If a referred user doesn't pay for more than a month, they become inactive and you stop earning from them until they resume payments.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Q: Can I change my referral code?</h3>
                    <p className="text-gray-300 text-sm">
                      No, referral codes are permanent and unique to each account. This prevents code manipulation and ensures fair play.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Q: Is there a limit to how many referrals I can have?</h3>
                    <p className="text-gray-300 text-sm">
                      There's no hard limit, but only active referrals (those who pay monthly) earn you discounts. Quality referrals are more valuable than quantity.
                    </p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Q: Can referrals refer others?</h3>
                    <p className="text-gray-300 text-sm">
                      Yes! Your referrals get their own referral codes and can earn discounts too. This creates a network effect where everyone benefits.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Need Help?</h2>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Referral Program Support</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white mb-1">Email Support</p>
                      <p className="text-sm text-gray-400">referrals@dat-go.com</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white mb-1">Referral Dashboard</p>
                      <p className="text-sm text-gray-400">Check your stats anytime</p>
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

export default ReferralGuide;
