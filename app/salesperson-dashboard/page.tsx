'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBanned: boolean;
  monthlyPaymentAmount: number;
  billingDate: number;
  plan: string;
  label?: string;
  anydeskid?: string;
  isTrial: boolean;
  createdAt: string;
  updatedAt: string;
}

interface CommissionSummary {
  totalCommission: number;
  paidCommission: number;
  pendingCommission: number;
  totalUsers: number;
}

interface CommissionByMonth {
  year: number;
  month: number;
  totalCommission: number;
  paidCommission: number;
  payments: Array<{
    userName: string;
    userEmail: string;
    amount: number;
    commission: number;
    commissionPaid: boolean;
    paymentDate: string;
  }>;
}

interface Payment {
  _id: string;
  userId: string;
  amount: number;
  month: number;
  year: number;
  status: 'pending' | 'approved' | 'paid';
  dueDate: string;
  paymentDate?: string;
  referralDiscount?: number;
  referralDiscountReason?: string;
  isRefunded?: boolean;
  notes?: string;
  salespersonCommission?: number;
  salespersonCommissionPaid?: boolean;
}

interface UserPaymentInfo {
  currentMonth?: Payment;
  previousMonth?: Payment;
}

function SalespersonDashboardContent() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [salespersonUsers, setSalespersonUsers] = useState<User[]>([]);
  const [userPayments, setUserPayments] = useState<Map<string, UserPaymentInfo>>(new Map());
  const [commissionData, setCommissionData] = useState<{
    summary: CommissionSummary;
    commissionsByMonth: CommissionByMonth[];
    recentPayments: any[];
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'users'>('users');
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const [createUserForm, setCreateUserForm] = useState({
    name: '',
    email: '',
    password: '',
    monthlyPaymentAmount: 0,
    billingDate: new Date().getDate(),
    referralCode: '',
    plan: 'single',
    label: '',
    anydeskid: '',
    isTrial: false,
    trialDurationHours: 1
  });

  useEffect(() => {
    const initializeDashboard = async () => {
      const token = searchParams.get('token');
      const userId = searchParams.get('userId');

      if (!token || !userId) {
        const storedToken = localStorage.getItem('dat_go_token');
        const storedUserId = localStorage.getItem('dat_go_userId');

        if (storedToken && storedUserId) {
          await fetchDashboardData(storedToken, storedUserId);
          return;
        }

        // Redirect to login page
        window.location.href = '/login';
        return;
      }

      localStorage.setItem('dat_go_token', token);
      localStorage.setItem('dat_go_userId', userId);

      const url = new URL(window.location.href);
      url.searchParams.delete('token');
      url.searchParams.delete('userId');
      window.history.replaceState({}, '', url.toString());

      await fetchDashboardData(token, userId);
    };

    initializeDashboard();
  }, [searchParams]);

  const fetchDashboardData = async (token: string, userId: string) => {
    try {
      setLoading(true);

      // Fetch salesperson details
      const userResponse = await fetch(`https://api.kmldigital.xyz/user/${userId}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (!userResponse.ok) {
        if (userResponse.status === 401) {
          localStorage.removeItem('dat_go_token');
          localStorage.removeItem('dat_go_userId');
        }
        throw new Error('Authentication failed. Please log in again.');
      }

      const userData = await userResponse.json();
      setUser(userData.user);

      // Verify user is a salesperson
      if (userData.user.role !== 'salesperson') {
        setError('Access denied. This dashboard is for salespersons only.');
        setLoading(false);
        return;
      }

      // Fetch salesperson users
      await fetchSalespersonUsers(token);

      // Fetch commission data
      await fetchCommissionData(token);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load dashboard';
      setError(errorMessage);

      if (errorMessage.includes('Authentication failed')) {
        setTimeout(() => {
          localStorage.removeItem('dat_go_token');
          localStorage.removeItem('dat_go_userId');
          window.location.href = '/login';
        }, 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchSalespersonUsers = async (token: string) => {
    try {
      const response = await fetch('https://api.kmldigital.xyz/salesperson/users', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const fetchedUsers = data.users || [];
        setSalespersonUsers(fetchedUsers);

        // Fetch payment data for each user
        await fetchUserPayments(token, fetchedUsers);
      }
    } catch (error) {
      console.error('Error fetching salesperson users:', error);
    }
  };

  const fetchUserPayments = async (token: string, usersList: User[]) => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    let prevMonth = currentMonth - 1;
    let prevYear = currentYear;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear = currentYear - 1;
    }

    const paymentsMap = new Map<string, UserPaymentInfo>();

    // Fetch payments for all users in parallel
    await Promise.all(
      usersList.map(async (user) => {
        try {
          const response = await fetch(`https://api.kmldigital.xyz/payment/user/${user._id}?limit=12`, {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          });

          if (response.ok) {
            const data = await response.json();
            const payments = data.payments || [];

            const currentMonthPayment = payments.find(
              (p: Payment) => p.month === currentMonth && p.year === currentYear
            );
            const previousMonthPayment = payments.find(
              (p: Payment) => p.month === prevMonth && p.year === prevYear
            );

            paymentsMap.set(user._id, {
              currentMonth: currentMonthPayment,
              previousMonth: previousMonthPayment
            });
          }
        } catch (error) {
          // Silently fail for individual users
          console.error(`Failed to fetch payments for user ${user._id}:`, error);
        }
      })
    );

    setUserPayments(paymentsMap);
  };

  const fetchCommissionData = async (token: string) => {
    try {
      const response = await fetch('https://api.kmldigital.xyz/salesperson/commissions', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCommissionData(data);
      }
    } catch (error) {
      console.error('Error fetching commission data:', error);
    }
  };

  const formatCurrency = (amount: number) => `Rs. ${amount?.toLocaleString('en-PK') || 0}`;

  const formatMonthYear = (month: number, year: number) => {
    const date = new Date(year, month - 1, 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatShortDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCreateUser = async () => {
    try {
      const token = localStorage.getItem('dat_go_token');
      if (!token) return;

      const response = await fetch('https://api.kmldigital.xyz/salesperson/users', {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createUserForm)
      });

      if (response.ok) {
        setShowCreateUserModal(false);
        setCreateUserForm({
          name: '',
          email: '',
          password: '',
          monthlyPaymentAmount: 0,
          billingDate: new Date().getDate(),
          referralCode: '',
          plan: 'single',
          label: '',
          anydeskid: '',
          isTrial: false,
          trialDurationHours: 1
        });
        await fetchSalespersonUsers(token);
        await fetchCommissionData(token); // Refresh commission data too
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dat_go_token');
    localStorage.removeItem('dat_go_userId');
    localStorage.clear();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Error</div>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="text-gray-400">No user data available</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Salesperson Dashboard</h1>
              <p className="text-gray-400">Welcome, {user.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="px-6">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-3 font-medium text-sm transition-colors ${
                  activeTab === 'users'
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                My Users ({salespersonUsers.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-300">Total Users</h3>
                  <p className="text-2xl font-bold text-indigo-400">{salespersonUsers.length}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-300">Active Users</h3>
                  <p className="text-2xl font-bold text-green-400">
                    {salespersonUsers.filter(u => !u.isBanned).length}
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-300">Monthly Earned</h3>
                  <p className="text-2xl font-bold text-green-400">
                    {commissionData ? formatCurrency(commissionData.summary.pendingCommission + commissionData.summary.paidCommission) : 'Rs. 0'}
                  </p>
                </div>
              </div>

              {/* Create User Button */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">My Users</h2>
                <button
                  onClick={() => setShowCreateUserModal(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Add New User
                </button>
              </div>

              {/* Users List */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                {salespersonUsers.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">
                    No users yet. Create your first user to start earning commissions!
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Plan
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Monthly Fee
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Current Month
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Previous Month
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Commission
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Created
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {salespersonUsers.map((user) => (
                          <tr key={user._id} className="hover:bg-gray-700/50">
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{user.name}</div>
                                <div className="text-sm text-gray-400">{user.email}</div>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-300 capitalize">{user.plan}</span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className="text-sm text-green-400">{formatCurrency(user.monthlyPaymentAmount)}</span>
                            </td>
                            <td className="px-4 py-4">
                              {(() => {
                                const paymentInfo = userPayments.get(user._id);
                                const currentPayment = paymentInfo?.currentMonth;
                                if (!currentPayment) {
                                  return <span className="text-xs text-muted-foreground">No payment</span>;
                                }
                                const isPaid = currentPayment.status === 'paid';
                                const isRefunded = currentPayment.isRefunded;
                                return (
                                  <div className="text-xs">
                                    <div className="font-medium text-foreground mb-0.5">
                                      {formatMonthYear(currentPayment.month, currentPayment.year)}
                                    </div>
                                    <div className={`font-medium ${isPaid && !isRefunded ? 'text-green-600' : isRefunded ? 'text-orange-600' : 'text-red-600'}`}>
                                      {formatCurrency(currentPayment.amount)}
                                    </div>
                                    <div className={`text-[10px] mt-0.5 ${
                                      isPaid && !isRefunded ? 'text-green-600' :
                                      isRefunded ? 'text-orange-600' :
                                      'text-red-600'
                                    }`}>
                                      {isRefunded ? 'Refunded' : isPaid ? 'Paid' : 'Pending'}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground mt-0.5">
                                      Due {formatShortDate(currentPayment.dueDate)}
                                    </div>
                                  </div>
                                );
                              })()}
                            </td>
                            <td className="px-4 py-4">
                              {(() => {
                                const paymentInfo = userPayments.get(user._id);
                                const previousPayment = paymentInfo?.previousMonth;
                                if (!previousPayment) {
                                  return <span className="text-xs text-muted-foreground">No payment</span>;
                                }
                                const isPaid = previousPayment.status === 'paid';
                                const isRefunded = previousPayment.isRefunded;
                                return (
                                  <div className="text-xs">
                                    <div className="font-medium text-foreground mb-0.5">
                                      {formatMonthYear(previousPayment.month, previousPayment.year)}
                                    </div>
                                    <div className={`font-medium ${isPaid && !isRefunded ? 'text-green-600' : isRefunded ? 'text-orange-600' : 'text-red-600'}`}>
                                      {formatCurrency(previousPayment.amount)}
                                    </div>
                                    <div className={`text-[10px] mt-0.5 ${
                                      isPaid && !isRefunded ? 'text-green-600' :
                                      isRefunded ? 'text-orange-600' :
                                      'text-red-600'
                                    }`}>
                                      {isRefunded ? 'Refunded' : isPaid ? 'Paid' : 'Pending'}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground mt-0.5">
                                      Due {formatShortDate(previousPayment.dueDate)}
                                    </div>
                                  </div>
                                );
                              })()}
                            </td>
                            <td className="px-4 py-4">
                              {(() => {
                                const paymentInfo = userPayments.get(user._id);
                                const currentPayment = paymentInfo?.currentMonth;
                                const previousPayment = paymentInfo?.previousMonth;

                                return (
                                  <div className="space-y-1">
                                    {/* Current Month Commission */}
                                    {currentPayment && currentPayment.salespersonCommission ? (
                                      <div className="text-xs">
                                        <div className={`font-medium ${currentPayment.salespersonCommissionPaid ? 'text-green-400' : 'text-red-400'}`}>
                                          {formatCurrency(currentPayment.salespersonCommission)}
                                        </div>
                                        <div className="text-[10px] text-muted-foreground">
                                          {formatMonthYear(currentPayment.month, currentPayment.year)}
                                        </div>
                                      </div>
                                    ) : null}

                                    {/* Previous Month Commission */}
                                    {previousPayment && previousPayment.salespersonCommission ? (
                                      <div className="text-xs">
                                        <div className={`font-medium ${previousPayment.salespersonCommissionPaid ? 'text-green-400' : 'text-red-400'}`}>
                                          {formatCurrency(previousPayment.salespersonCommission)}
                                        </div>
                                        <div className="text-[10px] text-muted-foreground">
                                          {formatMonthYear(previousPayment.month, previousPayment.year)}
                                        </div>
                                      </div>
                                    ) : null}

                                    {/* No commission message */}
                                    {(!currentPayment?.salespersonCommission && !previousPayment?.salespersonCommission) && (
                                      <span className="text-xs text-muted-foreground">No commission</span>
                                    )}
                                  </div>
                                );
                              })()}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                user.isBanned
                                  ? 'bg-red-900/30 text-red-400'
                                  : 'bg-green-900/30 text-green-400'
                              }`}>
                                {user.isBanned ? 'Banned' : 'Active'}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                              {formatDate(user.createdAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Create New User</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  value={createUserForm.name}
                  onChange={(e) => setCreateUserForm({...createUserForm, name: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={createUserForm.email}
                  onChange={(e) => setCreateUserForm({...createUserForm, email: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  value={createUserForm.password}
                  onChange={(e) => setCreateUserForm({...createUserForm, password: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Monthly Payment (Rs.)</label>
                <input
                  type="number"
                  value={createUserForm.monthlyPaymentAmount}
                  onChange={(e) => setCreateUserForm({...createUserForm, monthlyPaymentAmount: parseInt(e.target.value) || 0})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Plan</label>
                <select
                  value={createUserForm.plan}
                  onChange={(e) => setCreateUserForm({...createUserForm, plan: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                >
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="multi">Multi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Referral Code (Optional)</label>
                <input
                  type="text"
                  value={createUserForm.referralCode}
                  onChange={(e) => setCreateUserForm({...createUserForm, referralCode: e.target.value.toUpperCase()})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                  placeholder="Enter referral code"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isTrial"
                  checked={createUserForm.isTrial}
                  onChange={(e) => setCreateUserForm({...createUserForm, isTrial: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="isTrial" className="text-sm text-gray-300">Trial Account</label>
              </div>
              {createUserForm.isTrial && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Trial Duration (Hours)</label>
                  <input
                    type="number"
                    value={createUserForm.trialDurationHours}
                    onChange={(e) => setCreateUserForm({...createUserForm, trialDurationHours: parseInt(e.target.value) || 1})}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                    min="0.5"
                    step="0.5"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateUserModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateUser}
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SalespersonDashboard() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    }>
      <SalespersonDashboardContent />
    </Suspense>
  );
}
