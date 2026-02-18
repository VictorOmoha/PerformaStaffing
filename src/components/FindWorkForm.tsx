import React, { useState, useRef } from 'react'
import { CheckCircle, Upload, X, FileText } from 'lucide-react'

const MAX_FILE_MB = 5

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
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvError, setCvError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setCvError('')
    if (!file) return

    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) {
      setCvError('Only PDF, DOC, or DOCX files are accepted.')
      return
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setCvError(`File must be under ${MAX_FILE_MB}MB.`)
      return
    }
    setCvFile(file)
  }

  const removeFile = () => {
    setCvFile(null)
    setCvError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        // Strip the data URL prefix (e.g., "data:application/pdf;base64,")
        resolve(result.split(',')[1])
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      let cvBase64: string | undefined
      let cvMimeType: string | undefined
      let cvFileName: string | undefined

      if (cvFile) {
        cvBase64 = await fileToBase64(cvFile)
        cvMimeType = cvFile.type
        cvFileName = cvFile.name
      }

      const payload = {
        ...formData,
        ...(cvBase64 ? { cvBase64, cvMimeType, cvFileName } : {}),
      }

      const response = await fetch('/.netlify/functions/submit-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed. Please try again.')
      }

      setSubmitted(true)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Profile Submitted!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you! We've received your profile{cvFile ? ' and CV' : ''}. A Performa consultant
          will reach out when a matching opportunity becomes available. Check your email for confirmation.
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
              <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Current Location *</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="e.g. Abuja, Lagos"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
          </div>

          {/* Career Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Role / Field of Interest *</label>
              <input type="text" name="roleInterest" value={formData.roleInterest} onChange={handleChange} required placeholder="e.g. Software Engineer, HR Officer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Experience Level *</label>
              <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent">
                <option value="">Select level...</option>
                <option value="Entry Level (0–2 years)">Entry Level (0–2 years)</option>
                <option value="Mid Level (3–5 years)">Mid Level (3–5 years)</option>
                <option value="Senior Level (6–10 years)">Senior Level (6–10 years)</option>
                <option value="Executive (10+ years)">Executive (10+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Availability *</label>
              <select name="availability" value={formData.availability} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent">
                <option value="">Select availability...</option>
                <option value="Immediately available">Immediately available</option>
                <option value="Available in 2 weeks">Available in 2 weeks</option>
                <option value="Available in 1 month">Available in 1 month</option>
                <option value="Available in 3 months">Available in 3 months</option>
                <option value="Open to the right opportunity">Open to the right opportunity</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">LinkedIn or Portfolio URL</label>
              <input type="url" name="linkedinOrPortfolio" value={formData.linkedinOrPortfolio} onChange={handleChange} placeholder="https://linkedin.com/in/yourname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent" />
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Brief About You & Key Skills *</label>
            <textarea name="about" value={formData.about} onChange={handleChange} required rows={4}
              placeholder="Summarize your experience, key skills, and what kind of role or company you're looking for..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent resize-none" />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Attach Your CV <span className="text-gray-500 font-normal">(PDF, DOC, DOCX — max {MAX_FILE_MB}MB)</span>
            </label>

            {cvFile ? (
              /* File selected — show preview */
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{cvFile.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(cvFile.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Remove file"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* Upload dropzone */
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex flex-col items-center justify-center gap-2 px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-performa-purple hover:bg-performa-purple/5 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-performa-purple/10 rounded-full flex items-center justify-center group-hover:bg-performa-purple/20 transition-colors">
                  <Upload className="w-6 h-6 text-performa-purple" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-performa-purple">Click to upload your CV</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX up to {MAX_FILE_MB}MB</p>
                </div>
              </button>
            )}

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />

            {cvError && (
              <p className="text-sm text-red-600 mt-2 flex items-center gap-1.5">
                <X className="w-3.5 h-3.5 flex-shrink-0" /> {cvError}
              </p>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
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
