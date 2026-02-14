import React, { useState } from 'react'
import { Mail, Clock, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // EmailJS configuration
    const SERVICE_ID = 'service_bwswdj3'
    const TEMPLATE_ID = 'template_5n76a6f'
    const PUBLIC_KEY = '_B94n2ygD2Ng44ZJ4'

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Not provided',
      from_company: formData.company || 'Not provided',
      service_interest: formData.service || 'Not specified',
      message: formData.message,
    }

    // Send email via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true)
        setIsSubmitting(false)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
        }, 5000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setError('Failed to send message. Please try emailing us directly at contact@performastaffing.com')
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
              Ready to Transform Your Staffing?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you need to recruit top talent or find your next opportunity, 
              our team is ready to help. Contact us today for a consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-performa-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-performa-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:contact@performastaffing.com" className="text-gray-600 hover:text-performa-purple transition-colors">
                    contact@performastaffing.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-performa-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-performa-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Response on WhatsApp</h3>
                  <p className="text-sm text-gray-600">Get instant answers to your questions</p>
                </div>
              </div>
              <a
                href="https://wa.me/2348000000000?text=Hello%20Performa%2C%20I%27m%20interested%20in%20your%20staffing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Update WhatsApp number: Replace in Contact.tsx (line ~73)
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                    placeholder="+234"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="recruitment">Recruitment & Staffing</option>
                  <option value="training">Training & Development</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="screening">Background Screening</option>
                  <option value="assessment">Talent Assessment</option>
                  <option value="payroll">Payroll & Compliance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none"
                  placeholder="Tell us about your staffing needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    ✓ Message sent successfully! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    ✗ {error}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
