import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Mail, Lock, Phone, Briefcase, Eye, EyeOff } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const EmployerSignupPage: React.FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    companyName: '', industry: '', phone: '', website: '', email: '', password: '', confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { emailRedirectTo: `${window.location.origin}/employer/dashboard` },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    if (data.user) {
      const { error: profileError } = await supabase.from('employers').insert({
        user_id: data.user.id,
        company_name: form.companyName,
        industry: form.industry || null,
        phone: form.phone || null,
        website: form.website || null,
      })

      if (profileError) {
        setError('Account created but profile setup failed. Please contact support.')
        setLoading(false)
        return
      }
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full text-center py-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a confirmation link to <strong>{form.email}</strong>. Click it to activate your account and start posting jobs.
            </p>
            <Link to="/employer/login" className="btn-primary inline-block">Go to Login</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="gradient-purple text-white py-16">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold font-display mb-4">Post Jobs for Free</h1>
            <p className="text-white/90">Create your employer account and connect with Nigeria's top talent today.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Create Employer Account</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Company Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" name="companyName" value={form.companyName} onChange={handleChange} required
                      placeholder="Acme Nigeria Ltd" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">Industry</label>
                    <select name="industry" value={form.industry} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent">
                      <option value="">Select industry...</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance & Banking">Finance & Banking</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Oil & Gas">Oil & Gas</option>
                      <option value="Government / Public Sector">Government / Public Sector</option>
                      <option value="Education">Education</option>
                      <option value="Retail & FMCG">Retail & FMCG</option>
                      <option value="Construction & Real Estate">Construction & Real Estate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+234" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                    </div>
                  </div>
                </div>

                {/* Auth */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} required
                        placeholder="Min. 8 characters" className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                      <button type="button" onClick={() => setShowPassword(v => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">Confirm Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required
                        placeholder="Repeat password" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                    </div>
                  </div>
                </div>

                {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">✗ {error}</div>}

                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                  {loading ? 'Creating Account...' : 'Create Employer Account →'}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/employer/login" className="text-performa-purple font-semibold hover:underline">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default EmployerSignupPage
