import React from 'react'
import { Link } from 'react-router-dom'
import { Users, GraduationCap, Briefcase, ClipboardCheck, UserCheck, Shield } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Recruitment & Staffing',
    description: 'We source, screen, and place highly qualified candidates for permanent, temporary, and contract positions across various industries.',
    features: ['Permanent Staffing', 'Temporary Staffing', 'Contract Staffing', 'Executive Search'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Customized training programs to enhance employee skills, boost productivity, and align talent with organizational goals.',
    features: ['Skill Development', 'Leadership Training', 'Customer Service', 'Safety Training'],
  },
  {
    icon: Briefcase,
    title: 'HR Consulting',
    description: 'Expert guidance on HR policies, compliance, organizational structure, and strategic workforce planning.',
    features: ['Policy Development', 'Compliance Advisory', 'Performance Management', 'Organizational Design'],
  },
  {
    icon: ClipboardCheck,
    title: 'Background Screening',
    description: 'Thorough verification of candidate credentials, references, and background to ensure quality hires.',
    features: ['Reference Checks', 'Credential Verification', 'Criminal Background', 'Work History'],
  },
  {
    icon: UserCheck,
    title: 'Talent Assessment',
    description: 'Comprehensive evaluation of candidate skills, personality, and cultural fit using proven assessment tools.',
    features: ['Skills Testing', 'Personality Assessments', 'Competency Mapping', 'Cultural Fit Analysis'],
  },
  {
    icon: Shield,
    title: 'Payroll & Compliance',
    description: 'End-to-end payroll management and compliance services to ensure your workforce operations run smoothly.',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Labor Law Compliance'],
  },
]

const Services: React.FC = () => {
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
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-performa-purple to-performa-purple-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-performa-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-performa-gold rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center mt-6 text-performa-purple font-medium hover:text-performa-gold transition-colors group/link"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
    </section>
  )
}

export default Services
