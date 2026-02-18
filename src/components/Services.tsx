import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, GraduationCap, Briefcase, ClipboardCheck, UserCheck, Shield, X, CheckCircle, ArrowRight } from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  fullDescription: string
  benefits: string[]
  idealFor: string[]
  deliverables: string[]
}

const services: Service[] = [
  {
    icon: Users,
    title: 'Recruitment & Staffing',
    description: 'We source, screen, and place highly qualified candidates for permanent, temporary, and contract positions across various industries.',
    features: ['Permanent Staffing', 'Temporary Staffing', 'Contract Staffing', 'Executive Search'],
    fullDescription: 'Our recruitment and staffing service connects you with the right talent at the right time. We leverage a deep network of pre-screened professionals across Nigeria, combining rigorous vetting with industry expertise to deliver candidates who not only meet your technical requirements but also align with your organizational culture.',
    benefits: [
      'Access to 10,000+ pre-screened candidates across Nigeria',
      'Average time-to-hire reduced by 60% vs. in-house recruiting',
      'Full replacement guarantee within the first 90 days',
      'Dedicated account manager throughout the process',
    ],
    idealFor: ['Growing companies scaling their teams', 'Organizations facing urgent talent gaps', 'Businesses entering new markets in Nigeria'],
    deliverables: ['Shortlisted candidate profiles within 48 hours', 'Interview scheduling and coordination', 'Offer negotiation support', 'Onboarding documentation assistance'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Customized training programs to enhance employee skills, boost productivity, and align talent with organizational goals.',
    features: ['Skill Development', 'Leadership Training', 'Customer Service', 'Safety Training'],
    fullDescription: "We design and deliver training programs tailored to your workforce's specific gaps and your organization's growth trajectory. From soft skills to technical certifications, our facilitators bring real-world industry experience to every session — whether in-person, virtual, or blended.",
    benefits: [
      'Measurable productivity uplift within 30 days post-training',
      'Programs aligned to Nigerian industry standards and global best practices',
      'Pre and post-assessments to track skill improvement',
      'Training certificates recognized by partner organizations',
    ],
    idealFor: ['Companies investing in staff retention', 'New hires requiring onboarding acceleration', 'Teams transitioning to new roles or tools'],
    deliverables: ['Custom training curriculum', 'Facilitator-led sessions (in-person or virtual)', 'Training materials and workbooks', 'Post-training assessment report'],
  },
  {
    icon: Briefcase,
    title: 'HR Consulting',
    description: 'Expert guidance on HR policies, compliance, organizational structure, and strategic workforce planning.',
    features: ['Policy Development', 'Compliance Advisory', 'Performance Management', 'Organizational Design'],
    fullDescription: 'Our HR consultants work as an extension of your leadership team, providing strategic guidance on building people systems that scale. We help you design HR frameworks that attract talent, reduce attrition, and keep you fully compliant with Nigerian labor law.',
    benefits: [
      'HR infrastructure built to support 2x–10x growth',
      'Full compliance with Nigerian Labour Act and PENCOM regulations',
      'Reduced HR overhead through streamlined policies and processes',
      'Objective, third-party perspective on organizational challenges',
    ],
    idealFor: ['Startups building their first HR function', 'SMEs restructuring for growth', 'Multinationals entering the Nigerian market'],
    deliverables: ['HR audit report', 'Policy handbook and SOP documentation', 'Org chart and role clarity framework', 'Performance management system setup'],
  },
  {
    icon: ClipboardCheck,
    title: 'Background Screening',
    description: 'Thorough verification of candidate credentials, references, and background to ensure quality hires.',
    features: ['Reference Checks', 'Credential Verification', 'Criminal Background', 'Work History'],
    fullDescription: 'Our background screening service protects your organization from costly mis-hires. We verify every claim a candidate makes — from academic credentials and professional certifications to employment history and criminal records — giving you complete confidence before you extend an offer.',
    benefits: [
      'Turnaround in 2–5 business days',
      'Access to national and state-level criminal records databases',
      'Academic verification across Nigerian universities and polytechnics',
      'Detailed written report for every candidate screened',
    ],
    idealFor: ['Roles with access to sensitive data or finances', 'Healthcare and education sector hiring', 'Any organization with a zero-tolerance fraud policy'],
    deliverables: ['Comprehensive background check report', 'Reference contact summaries', 'Credential authenticity confirmation', 'Red flag flagging with recommendations'],
  },
  {
    icon: UserCheck,
    title: 'Talent Assessment',
    description: 'Comprehensive evaluation of candidate skills, personality, and cultural fit using proven assessment tools.',
    features: ['Skills Testing', 'Personality Assessments', 'Competency Mapping', 'Cultural Fit Analysis'],
    fullDescription: 'Stop guessing — start assessing. Our talent assessment service uses validated psychometric tools and competency frameworks to help you predict job performance before hire. We evaluate cognitive ability, personality traits, role-specific skills, and cultural alignment to give you a complete picture of every candidate.',
    benefits: [
      'Validated tools used by Fortune 500 companies globally',
      'Reduces bad hire risk by up to 80%',
      'Objective data to support hiring decisions and reduce bias',
      'Benchmark reporting to compare candidates against top performers',
    ],
    idealFor: ['Senior and mid-level hiring decisions', 'Competitive recruitment processes with multiple strong candidates', 'Organizations building structured talent pipelines'],
    deliverables: ['Individual assessment reports per candidate', 'Comparative ranking report', 'Interview question recommendations based on results', 'Onboarding guidance tailored to assessment insights'],
  },
  {
    icon: Shield,
    title: 'Payroll & Compliance',
    description: 'End-to-end payroll management and compliance services to ensure your workforce operations run smoothly.',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Labor Law Compliance'],
    fullDescription: 'Payroll errors cost businesses more than money — they damage trust. Our payroll and compliance service ensures every employee is paid accurately and on time, every deduction is legally correct, and your organization stays fully compliant with FIRS, PENCOM, and the Nigerian Labour Act — without the headache.',
    benefits: [
      '99.9% payroll accuracy guarantee',
      'Real-time compliance monitoring for regulatory changes',
      'Secure, confidential handling of all employee data',
      'Monthly reports and payslips for every employee',
    ],
    idealFor: ['Companies with 10–500 employees seeking payroll outsourcing', 'Businesses struggling with FIRS or PENCOM compliance', 'Organizations scaling rapidly and needing payroll infrastructure'],
    deliverables: ['Monthly payroll processing and disbursement', 'Tax filings and remittances (PAYE, Pension, NHF)', 'Employee payslips and records', 'Annual compliance audit report'],
  },
]

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeService ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeService])

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Comprehensive HR Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From recruitment to training, we provide end-to-end human resource management
            services tailored to your organization's unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-performa-purple/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-performa-purple to-performa-purple-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-performa-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-performa-gold rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveService(service)}
                className="inline-flex items-center mt-6 text-performa-purple font-medium hover:text-performa-gold transition-colors group/link"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We adapt our services to meet your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Needs
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setActiveService(null) }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between z-10 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-performa-purple to-performa-purple-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <activeService.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{activeService.title}</h2>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-6 space-y-8">
              {/* Overview */}
              <div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {activeService.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {activeService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Ideal For</h3>
                <ul className="space-y-2">
                  {activeService.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-performa-gold rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">What You Get</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeService.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-performa-purple rounded-full mt-1.5 flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 pb-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request-staff"
                  onClick={() => setActiveService(null)}
                  className="btn-primary flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setActiveService(null)}
                  className="flex-1 text-center px-6 py-3 rounded-lg border-2 border-performa-purple text-performa-purple font-semibold hover:bg-performa-purple hover:text-white transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services
