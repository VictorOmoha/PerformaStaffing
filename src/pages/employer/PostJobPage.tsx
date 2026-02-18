import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../context/AuthContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PostJobPage: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [employerId, setEmployerId] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    title: '',
    location: '',
    contractType: '',
    salaryRange: '',
    deadline: '',
    description: '',
    requirements: '',
  })

  useEffect(() => {
    if (!user) return
    supabase
      .from('employers')
      .select('id')
      .eq('user_id', user.id)
      .single()
      .then(({ data }) => { if (data) setEmployerId(data.id) })
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!employerId) { setError('Employer profile not found. Please contact support.'); return }

    setLoading(true)
    setError('')

    const { error: insertError } = await supabase.from('jobs').insert({
      employer_id: employerId,
      title: form.title,
      location: form.location,
      contract_type: form.contractType,
      salary_range: form.salaryRange || null,
      deadline: form.deadline || null,
      description: form.description,
      requirements: form.requirements || null,
      status: 'pending',
    })

    setLoading(false)

    if (insertError) {
      setError(insertError.message)
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full text-center py-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Submitted!</h2>
            <p className="text-gray-600 mb-8">
              Your posting is under review. The Performa team will activate it within 24 hours and notify you by email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/employer/dashboard" className="btn-primary">View Dashboard</Link>
              <button onClick={() => { setSubmitted(false); setForm({ title: '', location: '', contractType: '', salaryRange: '', deadline: '', description: '', requirements: '' }) }}
                className="px-6 py-3 rounded-lg border-2 border-performa-purple text-performa-purple font-semibold hover:bg-performa-purple hover:text-white transition-colors">
                Post Another Job
              </button>
            </div>
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
          <div className="max-w-3xl mx-auto px-6">
            <Link to="/employer/dashboard" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold font-display mb-2">Post a New Job</h1>
            <p className="text-white/90">Fill in the details and our team will review your posting within 24 hours.</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 lg:p-10 space-y-6">

              {/* Basic Info */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Job Details</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Job Title *</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange} required
                      placeholder="e.g. Senior Software Engineer, HR Manager"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Location *</label>
                    <input type="text" name="location" value={form.location} onChange={handleChange} required
                      placeholder="e.g. Abuja, FCT"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Contract Type *</label>
                    <select name="contractType" value={form.contractType} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent">
                      <option value="">Select type...</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Salary Range (Monthly)</label>
                    <input type="text" name="salaryRange" value={form.salaryRange} onChange={handleChange}
                      placeholder="e.g. ₦300k – ₦500k"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Application Deadline</label>
                    <input type="date" name="deadline" value={form.deadline} onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Job Description</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Description *</label>
                    <textarea name="description" value={form.description} onChange={handleChange} required rows={5}
                      placeholder="Describe the role, responsibilities, and what a typical day looks like..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Requirements & Qualifications</label>
                    <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={4}
                      placeholder="List required skills, experience, and qualifications (one per line)..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none" />
                  </div>
                </div>
              </div>

              {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">✗ {error}</div>}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Submit for Review →'}
                </button>
                <Link to="/employer/dashboard"
                  className="flex-1 text-center px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors">
                  Cancel
                </Link>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Jobs are reviewed by the Performa team within 24 hours before going live. You'll be notified by email.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PostJobPage
