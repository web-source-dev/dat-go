'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BackgroundEffect from '../components/BackgroundEffect';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBanned: boolean;
  isOnline: Date;
  plan: string;
  permissions: any;
  monthlyPaymentAmount: number;
  billingDate: number;
  referralCode: string;
  anydeskid: string;
  isTrial: boolean;
  trialEndDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Payment {
  _id: string;
  month: number;
  year: number;
  amount: number;
  status: string;
  dueDate: Date;
  paymentDate: Date;
  referralDiscount: number;
  referralDiscountReason: string;
  isRefunded?: boolean;
  referralStatuses?: any[];
}

interface DATSession {
  _id: string;
  name: string;
  proxy: string;
  isLoggedIn: boolean;
  fileName: string;
  label: string;
  hasCookies: boolean;
  cookieCount: number;
  createdAt: Date;
}

interface DeviceSession {
  _id: string;
  deviceId: string;
  deviceInfo: any;
  location: any;
  isActive: boolean;
  loginAt: Date;
  lastActivity: Date;
}

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [sessions, setSessions] = useState<DATSession[]>([]);
  const [deviceSessions, setDeviceSessions] = useState<DeviceSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState('');
  const [inputReferralCode, setInputReferralCode] = useState('');
  const [referralCodeError, setReferralCodeError] = useState('');
  const [referredUsers, setReferredUsers] = useState<any[]>([]);
  const [referralDiscounts, setReferralDiscounts] = useState([]);
  const [userPayments, setUserPayments] = useState<Payment[]>([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [billingDate, setBillingDate] = useState(0);
  const [copyingCode, setCopyingCode] = useState(false);
  const [expandedPaymentId, setExpandedPaymentId] = useState<string | null>(null);
  const [activeMessages, setActiveMessages] = useState<any[]>([]);
  const [referralSuccess, setReferralSuccess] = useState<string>('');

  useEffect(() => {
    const initializeApp = async () => {
      const token = searchParams.get('token');
      const userId = searchParams.get('userId');

      if (!token || !userId) {
        // Check if we have stored credentials
        const storedToken = localStorage.getItem('dat_go_token');
        const storedUserId = localStorage.getItem('dat_go_userId');

        if (storedToken && storedUserId) {
          await fetchUserData(storedToken, storedUserId);
          return;
        }

        setError('Missing authentication parameters');
        setLoading(false);
        return;
      }

      // Store credentials securely
      localStorage.setItem('dat_go_token', token);
      localStorage.setItem('dat_go_userId', userId);

      // Clean URL by removing sensitive parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('token');
      url.searchParams.delete('userId');
      window.history.replaceState({}, '', url.toString());

      await fetchUserData(token, userId);
    };

    initializeApp();
  }, [searchParams]);

  const fetchUserData = async (token: string, userId: string) => {
    try {
      setLoading(true);

      // Fetch user data
      const userResponse = await fetch(`https://api.kmldigital.xyz/user/${userId}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (!userResponse.ok) {
        // If token is invalid, clear stored data and show error
        if (userResponse.status === 401) {
          localStorage.removeItem('dat_go_token');
          localStorage.removeItem('dat_go_userId');
        }
        throw new Error('Authentication failed. Please log in again.');
      }

      const userData = await userResponse.json();
      setUser(userData.user);
      setReferralCode(userData.user.referralCode || '');
      setMonthlyPayment(userData.user.monthlyPaymentAmount || 0);
      setBillingDate(userData.user.billingDate || 0);

      // Fetch payments
      const paymentsResponse = await fetch(`https://api.kmldigital.xyz/payment/user/${userId}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (paymentsResponse.ok) {
        const paymentsData = await paymentsResponse.json();
        setPayments(paymentsData.payments || []);
        setUserPayments(paymentsData.payments || []);
        if (paymentsData.user) {
          setMonthlyPayment(paymentsData.user.monthlyPaymentAmount || 0);
          setBillingDate(paymentsData.user.billingDate || 0);
        }
      }

      // Fetch sessions
      const sessionsResponse = await fetch(`https://api.kmldigital.xyz/session/my`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (sessionsResponse.ok) {
        const sessionsData = await sessionsResponse.json();
        setSessions(sessionsData.sessions || []);
      }

      // Fetch device sessions
      const deviceResponse = await fetch(`https://api.kmldigital.xyz/device/sessions`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (deviceResponse.ok) {
        const deviceData = await deviceResponse.json();
        setDeviceSessions(deviceData.sessions || []);
      }

      // Fetch referrals
      const referredResponse = await fetch(`https://api.kmldigital.xyz/user/referred-by/${userId}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (referredResponse.ok) {
        const referredData = await referredResponse.json();
        setReferredUsers(referredData || []);
      }

      // Fetch active messages
      const messagesResponse = await fetch(`https://api.kmldigital.xyz/message/active?platform=web&sessionId=`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (messagesResponse.ok) {
        const messagesData = await messagesResponse.json();
        setActiveMessages(messagesData.messages || []);
      }

      // Fetch referral discounts
      const referralDiscountsResponse = await fetch(`https://api.kmldigital.xyz/payment/referral-discounts/${userId}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (referralDiscountsResponse.ok) {
        const referralDiscountsData = await referralDiscountsResponse.json();
        setReferralDiscounts(referralDiscountsData || []);
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load data';
      setError(errorMessage);

      // If authentication failed, redirect to login after a short delay
      if (errorMessage.includes('Authentication failed')) {
        setTimeout(() => {
          localStorage.removeItem('dat_go_token');
          localStorage.removeItem('dat_go_userId');
          window.location.href = '/';
        }, 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (a: number) => `Rs. ${a?.toLocaleString('en-PK') || 0}`;
  const formatDate = (d: Date | string) => d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A';
  const formatMonthYear = (month: number, year: number) => {
    const date = new Date(year, month - 1, 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const currentMonthPayment = userPayments.find(
    (p: Payment) => p.month === currentMonth && p.year === currentYear
  );

  let prevMonth = currentMonth - 1;
  let prevYear = currentYear;
  if (prevMonth < 1) {
    prevMonth = 12;
    prevYear = currentYear - 1;
  }
  const previousMonthPayment = userPayments.find(
    (p: Payment) => p.month === prevMonth && p.year === prevYear
  );

  const checkPaymentStatus = () => {
    if (!currentMonthPayment || currentMonthPayment.status === 'paid' || currentMonthPayment.isRefunded) {
      return null;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTime = today.getTime();

    const billingDay = billingDate || 1;
    const billingDateObj = new Date(currentYear, currentMonth - 1, billingDay);
    billingDateObj.setHours(0, 0, 0, 0);
    const billingDateTime = billingDateObj.getTime();

    const dueDate = new Date(currentMonthPayment.dueDate);
    if (isNaN(dueDate.getTime())) {
      return null;
    }
    dueDate.setHours(0, 0, 0, 0);
    const dueDateTime = dueDate.getTime();

    if (todayTime >= billingDateTime) {
      if (todayTime <= dueDateTime) {
        const daysRemaining = Math.floor((dueDateTime - todayTime) / (1000 * 60 * 60 * 24));
        return {
          showWarning: true,
          payment: currentMonthPayment,
          daysRemaining: daysRemaining,
          isOverdue: false
        };
      } else {
        const daysOverdue = Math.floor((todayTime - dueDateTime) / (1000 * 60 * 60 * 24));
        return {
          showWarning: true,
          payment: currentMonthPayment,
          daysOverdue: daysOverdue,
          isOverdue: true
        };
      }
    }

    return null;
  };

  const paymentWarning = checkPaymentStatus();

  const copyReferralCode = async () => {
    try {
      setCopyingCode(true);
      await navigator.clipboard.writeText(referralCode);
    } finally {
      setCopyingCode(false);
    }
  };

  const useReferralCode = async () => {
    if (!inputReferralCode.trim()) {
      setReferralCodeError('Please enter a referral code');
      return;
    }

    setReferralCodeError('');
    try {
      const token = localStorage.getItem('dat_go_token');
      const userId = localStorage.getItem('dat_go_userId');

      if (!token || !userId) {
        setReferralCodeError('Authentication required');
        return;
      }

      const response = await fetch(`https://api.kmldigital.xyz/user/${userId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          referredByCode: inputReferralCode.trim().toUpperCase()
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('dat_go_token');
          localStorage.removeItem('dat_go_userId');
          throw new Error('Session expired. Please log in again.');
        }
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to apply referral code');
      }

      // Clear input and show success
      setInputReferralCode('');
      setReferralCodeError('');
      setReferralSuccess('Referral code applied successfully!');

      // Refresh user data
      await fetchUserData(token, userId);

      // Clear success message after 3 seconds
      setTimeout(() => setReferralSuccess(''), 3000);

    } catch (error: any) {
      console.error('Referral code error:', error);
      setReferralCodeError(error.message || 'Unable to apply referral code. Please try again.');
    }
  };

  const handleLogout = () => {
    // Clear stored authentication data
    localStorage.removeItem('dat_go_token');
    localStorage.removeItem('dat_go_userId');
    // Clear any other app data
    localStorage.clear();
    window.location.href = '/'; // Redirect to login page
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400">No user data available</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BackgroundEffect />
      <div className="relative min-h-screen text-white font-sans flex flex-col">

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 py-6 space-y-6 flex flex-col flex-1 overflow-y-auto pb-28">

        {paymentWarning && paymentWarning.showWarning && (
          <div className="bg-red-600 border-2 border-red-500 rounded-2xl p-5 mb-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  {paymentWarning.isOverdue ? 'Payment Overdue - Action Required' : 'Payment Due Soon - Action Required'}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {paymentWarning.isOverdue ? (
                    <>
                      Your payment of {formatCurrency(paymentWarning.payment.amount)} was due on {formatDate(paymentWarning.payment.dueDate)}.
                      {paymentWarning.daysOverdue !== undefined && paymentWarning.daysOverdue > 0 && ` (${paymentWarning.daysOverdue} day${paymentWarning.daysOverdue > 1 ? 's' : ''} overdue)`}
                      <br />
                      Please pay immediately to avoid losing access to your account.
                    </>
                  ) : (
                    <>
                      Your payment of {formatCurrency(paymentWarning.payment.amount)} is due on {formatDate(paymentWarning.payment.dueDate)}.
                      <br />
                      You have {paymentWarning.daysRemaining !== undefined ? paymentWarning.daysRemaining : 0} day{paymentWarning.daysRemaining !== undefined && paymentWarning.daysRemaining !== 1 ? 's' : ''} remaining to pay before you lose access to your account.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Active Messages */}
        {activeMessages.length > 0 && (
          <div className="space-y-3 mb-4">
            {activeMessages.map((message, index) => (
              <div key={message._id || index} className="bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{message.title || 'Message'}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{message.message || ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="glass p-5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-4">
            <img
              src="./logo.png"
              alt="DAT GO - Professional Loadboard Provider"
              className="h-16 w-16"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">DAT GO</h1>
              <p className="text-sm text-gray-400 hidden sm:block">Professional Loadboard Provider</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleLogout}
              className="bg-white/5 hover:bg-red-500/20 text-gray-300 px-5 py-3 rounded-xl transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">

          <div className="space-y-4 overflow-hidden">

            <div className="glass p-4 rounded-2xl">
              <h3 className="section-title">Billing Overview</h3>
              <div className="grid gap-4">
                <div className="stat-card">
                  <p>Monthly Amount</p>
                  <h2>{formatCurrency(monthlyPayment)}</h2>
                </div>
                {currentMonthPayment && (
                  <div className="stat-card">
                    <p>Current Month Payment</p>
                    <h2>{formatCurrency(currentMonthPayment.amount)}</h2>
                    {currentMonthPayment.referralDiscount > 0 && (
                      <div className="mt-1">
                        <p className="text-xs text-green-400">
                          Referral discount: -{formatCurrency(currentMonthPayment.referralDiscount)}
                        </p>
                        <p className="text-xs text-gray-400 line-through mt-0.5">
                          {formatCurrency(currentMonthPayment.amount + currentMonthPayment.referralDiscount)}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-gray-300 mt-1">
                      {currentMonthPayment.status === 'paid' ? 'Paid' : 'Due'}{' '}
                      {formatDate(currentMonthPayment.dueDate)}
                    </p>
                  </div>
                )}
                {previousMonthPayment && (
                  <div className="stat-card">
                    <p>Previous Month Payment</p>
                    <p className="text-xs text-gray-400 mb-1">{formatMonthYear(previousMonthPayment.month, previousMonthPayment.year)}</p>
                    <h2>{formatCurrency(previousMonthPayment.amount)}</h2>
                    {previousMonthPayment.referralDiscount > 0 && (
                      <p className="text-xs text-green-400 mt-1">
                        Referral discount: -{formatCurrency(previousMonthPayment.referralDiscount)}
                      </p>
                    )}
                    <p className="text-sm text-gray-300 mt-1">
                      {previousMonthPayment.isRefunded ? 'Refunded' : previousMonthPayment.status === 'paid' ? 'Paid' : 'Due'}{' '}
                      {formatDate(previousMonthPayment.dueDate)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="glass p-4 rounded-2xl">
              <h3 className="section-title">Your Referral Code</h3>
              <div className="bg-white/6 border border-white/10 rounded-lg p-4 flex items-center justify-between">
                <span className="font-mono text-lg font-bold">{referralCode}</span>
                <button
                  onClick={copyReferralCode}
                  disabled={copyingCode || !referralCode}
                  className={`px-4 py-2 rounded-lg border border-white/10 text-white ${copyingCode ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {copyingCode ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl">
              <h3 className="section-title">Apply Referral</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={inputReferralCode}
                  onChange={(e) => {
                    setInputReferralCode(e.target.value.toUpperCase());
                    setReferralCodeError('');
                  }}
                  placeholder="Enter referral code"
                  className="w-full bg-white/6 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 uppercase"
                />
                <div className="min-h-[20px] flex items-center">
                  {referralCodeError && (
                    <p className="text-red-400 text-sm">{referralCodeError}</p>
                  )}
                  {referralSuccess && (
                    <p className="text-green-400 text-sm">{referralSuccess}</p>
                  )}
                </div>
                <button
                  onClick={useReferralCode}
                  disabled={!inputReferralCode.trim()}
                  className="w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg px-4 py-3 text-white disabled:opacity-60"
                >
                  Apply Code
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <a
                    href="/referral-guide"
                    className="block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    How Referral Program Works
                  </a>
                  <a
                    href="/payment-guide"
                    className="block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Payment Guide
                  </a>
                  <a
                    href="/privacy-policy"
                    className="block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-of-use"
                    className="block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Terms of Use
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 space-y-4 min-h-0 flex flex-col">

            <div className="glass p-4 rounded-2xl min-h-0 flex flex-col">
              <h3 className="section-title mb-4">Payment History</h3>
              {loading ? (
                <div className="h-24 bg-white/5 rounded-lg animate-pulse" />
              ) : userPayments.length === 0 ? (
                <p className="text-gray-400 text-center py-10">No payments yet</p>
              ) : (
                <div className="space-y-3 flex-1 min-h-0 overflow-y-auto pr-2">
                  {userPayments.map((p: Payment, i: number) => {
                    const paymentId = p._id || `${p.year}-${p.month}-${i}`;
                    const originalAmount = p.referralDiscount > 0
                      ? (p.amount + p.referralDiscount)
                      : p.amount;
                    const hasDiscount = p.referralDiscount > 0;
                    const isRefunded = p.isRefunded;
                    const referralStatuses = p.referralStatuses || [];

                    let prevMonth = p.month - 1;
                    let prevYear = p.year;
                    if (prevMonth < 1) {
                      prevMonth = 12;
                      prevYear = p.year - 1;
                    }
                    const isExpanded = expandedPaymentId === paymentId;

                    return (
                      <div key={paymentId} className="list-card flex flex-col">
                        <button
                          type="button"
                          className="flex items-center justify-between w-full text-left"
                          onClick={() =>
                            setExpandedPaymentId(prev => (prev === paymentId ? null : paymentId))
                          }
                        >
                          <div>
                            <h4>{formatMonthYear(p.month, p.year)}</h4>
                            <p className="text-sm text-gray-400">
                              Due {formatDate(p.dueDate)}
                            </p>
                            {hasDiscount && (
                              <p className="text-xs text-green-400 mt-1">
                                Referral discount: -{formatCurrency(p.referralDiscount)}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="font-bold text-sm">
                                {formatCurrency(p.amount)}
                              </p>
                              {hasDiscount && (
                                <p className="text-xs text-gray-400 line-through">
                                  {formatCurrency(originalAmount)}
                                </p>
                              )}
                              <span
                                className={`badge ${isRefunded
                                    ? 'bg-orange-500/30 text-orange-300'
                                    : p.status === 'paid'
                                      ? 'badge-active'
                                      : ''
                                  }`}
                              >
                                {isRefunded ? 'Refunded' : p.status}
                              </span>
                            </div>
                            <span
                              className={`text-sm transition-transform ${isExpanded ? 'rotate-180' : ''
                                }`}
                            >
                              ▼
                            </span>
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            {isRefunded && (
                              <p className="text-xs text-orange-400 mb-1">
                                Payment refunded
                              </p>
                            )}

                            {hasDiscount && (
                              <div className="mt-1 text-xs text-green-400">
                                <div className="flex items-center gap-1">
                                  <span>
                                    {p.referralDiscountReason ||
                                      `${formatCurrency(p.referralDiscount)} referral discount`}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <p className="text-sm text-gray-400 line-through">
                                    {formatCurrency(originalAmount)}
                                  </p>
                                  <p className="text-xs text-green-400">
                                    -{formatCurrency(p.referralDiscount)}
                                  </p>
                                  <p className="font-bold">
                                    {formatCurrency(p.amount)}
                                  </p>
                                </div>
                              </div>
                            )}

                            {hasDiscount && isRefunded && (
                              <p className="text-xs text-orange-400 mt-1">
                                Discount removed due to refund
                              </p>
                            )}

                            {referralStatuses.length > 0 && (
                              <div className="mt-3">
                                <p className="text-xs text-gray-400 mb-2 font-medium">
                                  Referral status for {formatMonthYear(p.month, p.year)} (based on {formatMonthYear(prevMonth, prevYear)} payments):
                                </p>
                                <div className="space-y-1.5 w-full">
                                  {referralStatuses.map((ref: any, idx: number) => (
                                    <div
                                      key={idx}
                                      className="flex items-start justify-between text-xs w-full"
                                    >
                                      <div className="flex-1">
                                        <span className="text-gray-300 font-medium">
                                          {ref.name}
                                        </span>
                                        {ref.reason && (
                                          <p className="text-gray-500 text-[10px] mt-0.5">
                                            {ref.reason}
                                          </p>
                                        )}
                                      </div>
                                      <span
                                        className={`px-2 py-0.5 rounded text-[10px] font-medium ml-2 ${ref.status === 'active'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : ref.status === 'banned'
                                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                              : ref.status === 'refunded'
                                                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                          }`}
                                      >
                                        {ref.status === 'active'
                                          ? 'Active'
                                          : ref.status === 'banned'
                                            ? 'Banned'
                                            : ref.status === 'refunded'
                                              ? 'Refunded'
                                              : 'Inactive'}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="glass p-4 rounded-2xl min-h-0 flex flex-col">
              <h3 className="section-title mb-4">Your Referrals</h3>
              {referredUsers.length === 0 ? (
                <p className="text-gray-400 text-center py-10">No referrals yet</p>
              ) : (
                <div className="space-y-3 flex-1 min-h-0 overflow-y-auto pr-2">
                  {referredUsers.map((u: any, i: number) => {
                    const isActive = u.hasPaidForCurrentMonth && !u.isBanned && !u.hasRefundedPayment;
                    const isBanned = u.isBanned;
                    const isRefunded = u.hasRefundedPayment || u.status === 'refunded';
                    const status = isBanned ? 'banned' : (isRefunded ? 'refunded' : (isActive ? 'active' : 'inactive'));

                    return (
                      <div key={i} className="list-card">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4>{u.name}</h4>
                            <span className={`badge ${status === 'active'
                                ? 'badge-active'
                                : status === 'banned'
                                  ? 'bg-red-500/30 text-red-300'
                                  : status === 'refunded'
                                    ? 'bg-orange-500/30 text-orange-300'
                                    : 'bg-gray-500/30 text-gray-300'
                              }`}>
                              {status === 'active' ? 'Active' : status === 'banned' ? 'Banned' : status === 'refunded' ? 'Refunded' : 'Inactive'}
                            </span>
                          </div>
                          {u.statusReason && (
                            <p className={`text-xs mt-1 ${isRefunded ? 'text-orange-400' : 'text-gray-500'
                              }`}>
                              {u.statusReason}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 px-4 pb-3 pt-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">Need Help? Contact us on WhatsApp:</p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <a
                  href="https://wa.me/923183342804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  +92 (318) 334-2804
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://wa.me/923107864419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  +92 (326) 273-7212
                </a>
              </div>
            </div>
            <div className="text-center text-xs text-gray-500">
              © 2026 DAT GO. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          padding: 1.25rem;
          border-radius: 1rem;
        }
        .stat-card h2 {
          font-size: 1.75rem;
          font-weight: 700;
        }
        .list-card {
          display: block;
          padding: 1rem 1.25rem;
          background: rgba(255,255,255,0.03);
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .badge {
          padding: 0.25rem 0.6rem;
          border-radius: 0.5rem;
          background: rgba(255,255,255,0.08);
          font-size: 0.75rem;
        }
        .badge-active {
          background: rgba(99,102,241,0.3);
        }
      `}</style>
    </div>
    </>
  );
}
