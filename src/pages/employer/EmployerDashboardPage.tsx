import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Briefcase, MapPin, Clock, ChevronDown, LogOut, Eye, Trash2, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import type { Job, Employer } from '../../lib/supabase'
import { useAuth } from '../../context/AuthContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const statusConfig = {
  pending: { label: 'Pending Review', color: 'bg-yellow-100 text-yellow-700', icon: AlertCircle },
  active: { label: 'Active', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  closed: { label: 'Closed', color: 'bg-gray-100 text-gray-600', icon: XCircle },
}

const EmployerDashboardPage: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [employer, setEmployer] = useState<Employer | null>(null)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => {
    if (!user) return
    fetchData()
  }, [user])

  const fetchData = async () => {
    setLoading(true)

    const { data: empData } = await supabase
      .from('employers')
      .select('*')
      .eq('user_id', user!.id)
      .single()

    setEmployer(empData)

    if (empData) {
      const { data: jobData } = await supabase
        .from('jobs')
        .select('*')
        .eq('employer_id', empData.id)
        .order('created_at', { ascending: false })

      setJobs(jobData || [])
    }

    setLoading(false)
  }

  const handleDelete = async (jobId: string) => {
    await supabase.from('jobs').delete().eq('id', jobId)
    setJobs(prev => prev.filter(j => j.id !== jobId))
    setDeleteId(null)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const stats = {
    total: jobs.length,
    active: jobs.filter(j => j.status === 'active').length,
    pending: jobs.filter(j => j.status === 'pending').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {loading ? 'Loading...' : `${employer?.company_name || 'Your Company'}`}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">{user?.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/employer/post-job" className="btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Post a Job
              </Link>
              <button onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Jobs Posted</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-1">{stats.active}</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">Your Job Postings</h2>
              <Link to="/employer/post-job" className="text-sm text-performa-purple font-semibold hover:underline flex items-center gap-1">
                <Plus className="w-4 h-4" /> New Posting
              </Link>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 border-4 border-performa-purple border-t-transparent rounded-full animate-spin" />
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-16 px-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
                <p className="text-gray-600 mb-6 text-sm">Your first posting is one click away.</p>
                <Link to="/employer/post-job" className="btn-primary inline-flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Post Your First Job
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {jobs.map(job => {
                  const status = statusConfig[job.status]
                  const StatusIcon = status.icon
                  return (
                    <div key={job.id} className="px-6 py-5 flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="font-semibold text-gray-900 truncate">{job.title}</h3>
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {status.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.contract_type}</span>
                          {job.salary_range && <span>{job.salary_range}</span>}
                          <span>Posted {new Date(job.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => setDeleteId(job.id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Pending notice */}
          {stats.pending > 0 && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>{stats.pending} job{stats.pending > 1 ? 's' : ''} pending review.</strong>{' '}
                The Performa team will review and activate your posting within 24 hours. You'll receive an email when it goes live.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete this job?</h3>
            <p className="text-sm text-gray-600 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteId)}
                className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default EmployerDashboardPage
