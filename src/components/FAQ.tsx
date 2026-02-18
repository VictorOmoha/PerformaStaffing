import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'employers' | 'candidates'
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    // General Questions
    {
      question: "What services does Performa Staffing Agency provide?",
      answer: "Performa offers comprehensive HR solutions including recruitment and staffing, training and development, HR consulting, background screening, talent assessment, and payroll management. We serve multiple industries across Nigeria with customized staffing solutions.",
      category: "general"
    },
    {
      question: "Which industries do you specialize in?",
      answer: "We serve diverse industries including Hospitality & Tourism, Corporate Sector, Government & Public Sector, Technology & Startups, Finance & Banking, Healthcare, Construction, and Manufacturing. Our team has specialized recruiters for each sector.",
      category: "general"
    },
    {
      question: "Where is Performa Staffing Agency located?",
      answer: "We are headquartered in Abuja, Federal Capital Territory, Nigeria. While our main operations are in Abuja, we provide staffing solutions nationwide and have successfully placed candidates across all Nigerian states.",
      category: "general"
    },
    {
      question: "Is Performa Staffing Agency CAC registered?",
      answer: "Yes, we are fully registered with the Corporate Affairs Commission (CAC) under registration number RC 1991081. We comply with all Nigerian employment laws and regulations.",
      category: "general"
    },
    
    // Employer Questions
    {
      question: "How long does the recruitment process typically take?",
      answer: "The timeline varies based on position complexity and requirements. For standard roles, we typically deliver qualified candidates within 1-2 weeks. For specialized or executive positions, the process may take 3-4 weeks. We also offer urgent placement services for time-sensitive needs.",
      category: "employers"
    },
    {
      question: "What are your fees for recruitment services?",
      answer: "Our fees are competitive and depend on the position level, industry, and service package. We offer flexible pricing models including percentage of annual salary, flat fees, and retainer agreements. Contact us for a customized quote based on your specific needs.",
      category: "employers"
    },
    {
      question: "Do you provide replacement guarantees?",
      answer: "Yes, we offer replacement guarantees for all our placements. If a placed candidate leaves within the guarantee period (typically 3-6 months depending on the package), we will provide a replacement at no additional recruitment fee.",
      category: "employers"
    },
    {
      question: "Can you handle bulk recruitment for large projects?",
      answer: "Absolutely. We have successfully managed bulk recruitment projects requiring 50+ candidates. Our extensive talent database and efficient screening processes enable us to scale quickly while maintaining quality standards.",
      category: "employers"
    },
    {
      question: "What background screening services do you offer?",
      answer: "We provide comprehensive background screening including employment verification, educational qualification checks, professional license validation, criminal record checks (where applicable), credit history review, and reference verification. All screening complies with Nigeria Data Protection Regulation (NDPR).",
      category: "employers"
    },
    
    // Candidate Questions
    {
      question: "How do I apply for jobs through Performa?",
      answer: "You can submit your resume through our contact form, email us directly at contact@performastaffing.com, or visit our office during business hours. Make sure to specify your field of interest and career level. We'll review your profile and contact you when suitable opportunities arise.",
      category: "candidates"
    },
    {
      question: "Is there a fee for job seekers?",
      answer: "No, our services are completely free for job seekers. We are compensated by the employers who hire through us. Never pay any fees to register or apply for jobs through Performa Staffing Agency.",
      category: "candidates"
    },
    {
      question: "What documents do I need to provide?",
      answer: "Typically, you'll need: updated CV/resume, relevant educational certificates, professional certifications (if applicable), valid identification, and professional references. Additional documents may be required based on specific job requirements or employer requests.",
      category: "candidates"
    },
    {
      question: "How long does it take to hear back after applying?",
      answer: "We review all applications within 3-5 business days. If your profile matches current opportunities, we'll contact you for further screening. Due to high application volumes, we may not respond to all applications, but we keep promising profiles on file for future opportunities.",
      category: "candidates"
    },
    {
      question: "Do you offer career counseling and CV review?",
      answer: "Yes, we provide complimentary career guidance and CV review for registered candidates. Our consultants can help you optimize your resume, prepare for interviews, and develop your career strategy. Schedule an appointment through our contact form.",
      category: "candidates"
    },
    {
      question: "Can I work with Performa if I'm currently employed?",
      answer: "Yes, we maintain strict confidentiality for all candidates. Your current employer will not be contacted without your explicit permission. Many of our successful placements come from candidates who were employed during the search process.",
      category: "candidates"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getCategoryIcon = (category: string) => {
    return <HelpCircle className="w-5 h-5 text-performa-purple" />
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and policies
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  {getCategoryIcon(faq.category)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-xs text-performa-purple font-medium uppercase tracking-wide">
                    {faq.category === 'general' && 'General'}
                    {faq.category === 'employers' && 'For Employers'}
                    {faq.category === 'candidates' && 'For Job Seekers'}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pl-16">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQ
