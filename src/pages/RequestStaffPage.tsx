import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, Users, Clock, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SERVICE_ID = 'service_bwswdj3'
const TEMPLATE_ID = 'template_56q6uwg'
const PUBLIC_KEY = '_B94n2ygD2Ng44ZJ4'

const RequestStaffPage: React.FC = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    role: '',
    headcount: '',
    contractType: '',
    urgency: '',
    budget: '',
    requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const templateParams = {
      from_name: formData.contactName,
      from_email: formData.email,
      from_phone: formData.phone,
      from_company: formData.company,
      service_interest: `Request Staff — ${formData.role} (${formData.contractType})`,
      message: `
Industry: ${formData.industry}
Role Needed: ${formData.role}
Number of Positions: ${formData.headcount}
Contract Type: ${formData.contractType}
Urgency: ${formData.urgency}
Budget Range: ${formData.budget || 'Not specified'}

Requirements / Additional Notes:
${formData.requirements}
      `.trim(),
    }

    const autoReplyParams = {
      to_name: formData.contactName,
      to_email: formData.email,
      service_interest: `Staff Request — ${formData.role}`,
    }

    Promise.all([
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY),
      emailjs.send(SERVICE_ID, 'template_autoreply', autoReplyParams, PUBLIC_KEY),
    ])
      .then(() => {
        setSubmitted(true)
        setIsSubmitting(false)
      })
      .catch((err) => {
        console.error('EmailJS Error:', err)
        setError('Failed to submit. Please email us directly at contact@performastaffing.com')
        setIsSubmitting(false)
      })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              Request Staff
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tell us your hiring needs and we'll connect you with pre-screened,
              qualified candidates within 48 hours.
            </p>
          </div>
        </section>

        {/* Why Performa */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-performa-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-performa-purple" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Pre-Screened Talent</h3>
                <p className="text-sm text-gray-600">Every candidate is verified, background-checked, and skills-assessed before we present them.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-performa-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-performa-purple" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">48-Hour Turnaround</h3>
                <p className="text-sm text-gray-600">We begin sourcing immediately and deliver your first shortlist within 48 business hours.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-performa-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-performa-purple" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-sm text-gray-600">We specialize across 8+ industries including tech, finance, hospitality, and government.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                  Thank you! Our team will review your staffing request and reach out within
                  24 business hours with next steps.
                </p>
                <Link to="/" className="btn-primary inline-flex">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Tell Us Your Hiring Needs
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and a Performa consultant will be in touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 lg:p-10 space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      Your Contact Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+234"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Staffing Requirements */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                      Staffing Requirements
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        >
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
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Role / Position Needed *
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          placeholder="e.g. HR Manager, Software Engineer"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Number of Positions *
                        </label>
                        <select
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        >
                          <option value="">Select headcount...</option>
                          <option value="1">1</option>
                          <option value="2–5">2–5</option>
                          <option value="6–10">6–10</option>
                          <option value="11–20">11–20</option>
                          <option value="20+">20+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Contract Type *
                        </label>
                        <select
                          name="contractType"
                          value={formData.contractType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        >
                          <option value="">Select type...</option>
                          <option value="Full-time Permanent">Full-time Permanent</option>
                          <option value="Contract">Contract</option>
                          <option value="Temporary">Temporary</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Internship">Internship</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          When Do You Need Staff? *
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        >
                          <option value="">Select timeline...</option>
                          <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                          <option value="1–4 weeks">1–4 weeks</option>
                          <option value="1–3 months">1–3 months</option>
                          <option value="3–6 months">3–6 months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Budget Range (Monthly)
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="Below ₦150k">Below ₦150k</option>
                          <option value="₦150k – ₦300k">₦150k – ₦300k</option>
                          <option value="₦300k – ₦500k">₦300k – ₦500k</option>
                          <option value="₦500k – ₦1M">₦500k – ₦1M</option>
                          <option value="Above ₦1M">Above ₦1M</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Job Requirements & Additional Notes
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe the skills, qualifications, and experience you're looking for. Include any specific requirements or preferences..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Staff Request →'}
                  </button>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm font-medium">✗ {error}</p>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form you agree to our{' '}
                    <Link to="/privacy" className="text-performa-purple hover:underline">
                      Privacy Policy
                    </Link>
                    . We'll never share your information without consent.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default RequestStaffPage
