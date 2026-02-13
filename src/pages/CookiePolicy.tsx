import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-performa-purple text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold font-display">Cookie Policy</h1>
          <p className="text-white/80 mt-4">Last updated: February 13, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Performa Human Resource Management and Staffing Agency uses cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your experience on our site</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Deliver relevant content and advertisements</li>
              <li>Enable certain website features and functionality</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Essential Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
              and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Analytics Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              These cookies help us understand how visitors interact with our website by collecting and reporting information 
              anonymously. This helps us improve the way our website works and understand what content is most useful to visitors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functionality Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              These cookies allow the website to remember choices you make (such as your language preference or region) and 
              provide enhanced, more personalized features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Marketing Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              These cookies track your online activity to help deliver more relevant advertising or to limit how many times 
              you see an advertisement. They are also used to measure the effectiveness of advertising campaigns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our 
              website and deliver advertisements. These include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Google Analytics:</strong> To understand how visitors use our site</li>
              <li><strong>Social Media Platforms:</strong> To enable social media sharing and interactions</li>
              <li><strong>Advertising Partners:</strong> To deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Duration</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies can be either session cookies or persistent cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Session Cookies:</strong> These are temporary cookies that remain on your device until you close your browser</li>
              <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Browser Settings</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies 
              if you prefer. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Opt-Out Options</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can opt out of certain types of cookies through these services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-performa-purple hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
              <li><strong>Advertising Cookies:</strong> Visit <a href="http://www.aboutads.info/choices/" className="text-performa-purple hover:underline" target="_blank" rel="noopener noreferrer">aboutads.info</a> or <a href="http://www.youronlinechoices.eu/" className="text-performa-purple hover:underline" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              If you choose to disable or reject cookies, some parts of our website may not function properly. You may not be 
              able to access certain features, and your experience may be less personalized. Essential cookies cannot be disabled 
              as they are necessary for the website to function.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business 
              practices. We will post any changes on this page and update the "Last updated" date. We encourage you to review 
              this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. More Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For more information about our use of cookies and how we protect your privacy, please see our <Link to="/privacy" className="text-performa-purple hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Performa Human Resource Management and Staffing Agency</p>
              <p className="text-gray-600">CAC Registration: RC 1991081</p>
              <p className="text-gray-600">Email: contact@performastaffing.com</p>
              <p className="text-gray-600">Location: Abuja, Federal Capital Territory, Nigeria</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
