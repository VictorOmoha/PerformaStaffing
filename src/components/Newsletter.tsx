import React, { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email)
      setSubscribed(true)
      setLoading(false)
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000)
    }, 1000)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-performa-purple via-purple-800 to-performa-purple text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-performa-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-performa-gold" />
        </div>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-display">
          Stay Informed with HR Insights
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Get expert tips, industry trends, and exclusive content delivered to your inbox. 
          Join 1,000+ HR professionals and business leaders.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-performa-gold"
              />
            </div>
            <button
              type="submit"
              disabled={loading || subscribed}
              className={`px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                subscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-performa-gold text-performa-purple hover:bg-performa-gold-light'
              } disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
            >
              {subscribed ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  {loading ? 'Subscribing...' : 'Subscribe'}
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-white/70 mt-4">
            📬 One email per week. No spam. Unsubscribe anytime.
          </p>
        </form>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
          <div>
            <div className="text-2xl font-bold text-performa-gold mb-2">Weekly</div>
            <div className="text-white/80 text-sm">Expert HR insights delivered every Tuesday</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-performa-gold mb-2">Exclusive</div>
            <div className="text-white/80 text-sm">Access to templates, guides & resources</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-performa-gold mb-2">Free</div>
            <div className="text-white/80 text-sm">No cost, no credit card required</div>
          </div>
        </div>

        {/* Note for developer */}
        <div className="mt-8 p-4 bg-white/10 rounded-lg text-left text-sm text-white/70">
          <p className="font-semibold mb-2">📝 Developer Note:</p>
          <p>
            Newsletter currently logs to console. To make functional:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
            <li>Option 1: Use EmailJS (same as contact form)</li>
            <li>Option 2: Integrate Mailchimp API</li>
            <li>Option 3: Use ConvertKit or Substack</li>
            <li>Option 4: Custom backend endpoint</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
