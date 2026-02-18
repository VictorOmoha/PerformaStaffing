import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const EmployerLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    navigate('/employer/dashboard')
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/employer/reset-password`,
    })
    setLoading(false)
    if (error) { setError(error.message); return }
    setResetSent(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-md w-full">

          {!showReset ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-performa-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-performa-purple" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Employer Login</h1>
                <p className="text-gray-500 text-sm mt-1">Sign in to manage your job postings</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                      placeholder="Your password"
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                    <button type="button" onClick={() => setShowPassword(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <button type="button" onClick={() => setShowReset(true)}
                    className="text-xs text-performa-purple hover:underline mt-1.5 float-right">
                    Forgot password?
                  </button>
                </div>

                {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 clear-both">✗ {error}</div>}

                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50 clear-both">
                  {loading ? 'Signing in...' : 'Sign In →'}
                </button>

                <p className="text-center text-sm text-gray-600">
                  New employer?{' '}
                  <Link to="/employer/signup" className="text-performa-purple font-semibold hover:underline">Create an account</Link>
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <button onClick={() => { setShowReset(false); setResetSent(false); setError('') }}
                className="text-sm text-performa-purple hover:underline mb-6 flex items-center gap-1">
                ← Back to login
              </button>
              {resetSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Reset Email Sent</h2>
                  <p className="text-gray-600 text-sm">Check <strong>{resetEmail}</strong> for the reset link.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Reset Password</h2>
                  <p className="text-sm text-gray-600 mb-6">Enter your email and we'll send you a reset link.</p>
                  <form onSubmit={handlePasswordReset} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} required
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                    </div>
                    {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">✗ {error}</div>}
                    <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default EmployerLoginPage
