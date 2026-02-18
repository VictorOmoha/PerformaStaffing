import React, { useState } from 'react'
import { CheckCircle, Upload } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_bwswdj3'
const TEMPLATE_ID = 'template_56q6uwg'
const PUBLIC_KEY = '_B94n2ygD2Ng44ZJ4'

const FindWorkForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roleInterest: '',
    experienceLevel: '',
    availability: '',
    location: '',
    linkedinOrPortfolio: '',
    about: '',
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
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_company: 'Job Seeker',
      service_interest: `Find Work — ${formData.roleInterest} (${formData.experienceLevel})`,
      message: `
Availability: ${formData.availability}
Location: ${formData.location}
LinkedIn / Portfolio: ${formData.linkedinOrPortfolio || 'Not provided'}

About the Candidate:
${formData.about}
      `.trim(),
    }

    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      service_interest: `Job Application — ${formData.roleInterest}`,
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
        setError('Failed to submit. Please email us at contact@performastaffing.com')
        setIsSubmitting(false)
      })
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Profile Submitted!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you! We've added your profile to our talent database. A Performa consultant
          will reach out when a matching opportunity becomes available.
        </p>
      </div>
    )
  }

  return (
    <section id="submit-profile" className="section-padding bg-gradient-to-br from-performa-purple/5 to-purple-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Get Discovered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4">
            Submit Your Profile
          </h2>
          <p className="text-lg text-gray-600">
            Can't find the right role? Submit your profile and we'll match you with
            opportunities that fit your skills and goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm space-y-6">
          {/* Personal Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
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
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Current Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g. Abuja, Lagos"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              />
            </div>
          </div>

          {/* Career Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Role / Field of Interest *
              </label>
              <input
                type="text"
                name="roleInterest"
                value={formData.roleInterest}
                onChange={handleChange}
                required
                placeholder="e.g. Software Engineer, HR Officer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Experience Level *
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              >
                <option value="">Select level...</option>
                <option value="Entry Level (0–2 years)">Entry Level (0–2 years)</option>
                <option value="Mid Level (3–5 years)">Mid Level (3–5 years)</option>
                <option value="Senior Level (6–10 years)">Senior Level (6–10 years)</option>
                <option value="Executive (10+ years)">Executive (10+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Availability *
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              >
                <option value="">Select availability...</option>
                <option value="Immediately available">Immediately available</option>
                <option value="Available in 2 weeks">Available in 2 weeks</option>
                <option value="Available in 1 month">Available in 1 month</option>
                <option value="Available in 3 months">Available in 3 months</option>
                <option value="Open to the right opportunity">Open to the right opportunity</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                LinkedIn or Portfolio URL
              </label>
              <input
                type="url"
                name="linkedinOrPortfolio"
                value={formData.linkedinOrPortfolio}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Brief About You & Key Skills *
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Summarize your experience, key skills, and what kind of role or company you're looking for..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none"
            />
          </div>

          {/* CV Note */}
          <div className="flex items-start gap-3 p-4 bg-performa-purple/5 border border-performa-purple/20 rounded-lg">
            <Upload className="w-5 h-5 text-performa-purple mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-performa-purple">Want to attach your CV?</span>{' '}
              After submitting, email it to{' '}
              <a href="mailto:careers@performastaffing.com" className="text-performa-purple underline">
                careers@performastaffing.com
              </a>{' '}
              with your name in the subject line. We'll match it to your profile.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit My Profile →'}
          </button>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-medium">✗ {error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default FindWorkForm
