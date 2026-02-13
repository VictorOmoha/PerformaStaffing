import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-performa-purple text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold font-display">Terms of Service</h1>
          <p className="text-white/80 mt-4">Last updated: February 13, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Performa Human Resource Management and Staffing Agency. By accessing or using our website and services, 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Performa provides professional staffing and human resource management services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Recruitment and talent acquisition</li>
              <li>Background screening and verification</li>
              <li>Training and development programs</li>
              <li>HR consulting and advisory services</li>
              <li>Talent assessment and psychometric testing</li>
              <li>Payroll management and compliance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Job Seekers</h3>
            <p className="text-gray-600 leading-relaxed mb-4">If you are a job seeker using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Provide accurate, current, and complete information in your applications</li>
              <li>Update your information promptly if any changes occur</li>
              <li>Not misrepresent your qualifications, experience, or credentials</li>
              <li>Consent to background checks and verification processes when required</li>
              <li>Maintain confidentiality of any sensitive information shared during the recruitment process</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Employers and Clients</h3>
            <p className="text-gray-600 leading-relaxed mb-4">If you are an employer or client using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Comply with all applicable employment laws and regulations</li>
              <li>Not discriminate based on protected characteristics</li>
              <li>Honor agreements made regarding placements and fees</li>
              <li>Maintain confidentiality of candidate information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fees and Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Service fees are agreed upon in separate contracts or service agreements. Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fees are due as specified in the service agreement</li>
              <li>Late payments may incur additional charges</li>
              <li>Refund policies are outlined in individual service agreements</li>
              <li>All fees are in Nigerian Naira (NGN) unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of 
              Performa Human Resource Management and Staffing Agency and is protected by Nigerian and international 
              copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works 
              from our content without express written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
            <p className="text-gray-600 leading-relaxed">
              Both parties agree to maintain the confidentiality of all proprietary and sensitive information 
              exchanged during the course of our business relationship. This includes but is not limited to 
              candidate information, client business details, and strategic plans.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While we strive to provide accurate and reliable services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We do not guarantee specific placement outcomes or employment results</li>
              <li>We are not liable for actions taken by placed candidates or hiring organizations</li>
              <li>Our liability is limited to the fees paid for the specific service in question</li>
              <li>We are not responsible for decisions made by employers or candidates</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend access to our services at any time, without prior notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, 
              or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. 
              Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of 
              the courts in Abuja, Federal Capital Territory, Nigeria.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our 
              services after any such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are provided "as is" and "as available" without any warranties of any kind, either express 
              or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses 
              or other harmful components.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
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

export default TermsOfService
