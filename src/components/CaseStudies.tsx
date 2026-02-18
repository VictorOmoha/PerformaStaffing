import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, TrendingUp, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

interface CaseStudy {
  id: string
  client: string
  industry: string
  challenge: string
  solution: string[]
  results: string[]
  metrics: {
    label: string
    value: string
  }[]
  icon: React.ElementType
  color: string
}

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0)

  const cases: CaseStudy[] = [
    {
      id: '1',
      client: 'Leading Hospitality Group',
      industry: 'Hospitality & Tourism',
      challenge: 'A 5-star hotel chain needed to recruit and train 120 staff members within 6 weeks for three new properties opening simultaneously in Abuja, Lagos, and Port Harcourt.',
      solution: [
        'Rapid-response recruitment campaign across multiple channels',
        'Pre-screening and skills assessment of 500+ candidates',
        'Customized 2-week intensive training program',
        'Background verification and compliance checks',
        'Ongoing performance monitoring for first 90 days'
      ],
      results: [
        'Successfully placed all 120 staff members on time',
        '95% of placements passed 90-day probation',
        'Zero compliance issues during inspection',
        'Client rated service quality as 4.8/5.0',
        'Extended contract for ongoing recruitment needs'
      ],
      metrics: [
        { label: 'Staff Placed', value: '120' },
        { label: 'Completion Time', value: '6 Weeks' },
        { label: 'Retention Rate', value: '95%' }
      ],
      icon: Building2,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: '2',
      client: 'Technology Startup',
      industry: 'Technology & Innovation',
      challenge: 'A fast-growing fintech startup needed to build a 25-person engineering and product team quickly while maintaining high technical standards and cultural fit.',
      solution: [
        'Technical skills assessment framework development',
        'Targeted sourcing from tech hubs and universities',
        'Multi-stage interview process design',
        'Competitive compensation benchmarking',
        'Culture-fit evaluation and team integration support'
      ],
      results: [
        'Built complete engineering team in 12 weeks',
        'All hires met or exceeded technical requirements',
        '100% retention after 1 year',
        'Team delivered MVP 2 weeks ahead of schedule',
        'Client secured Series A funding citing strong team'
      ],
      metrics: [
        { label: 'Engineers Hired', value: '25' },
        { label: 'Time to Hire', value: '12 Weeks' },
        { label: '1-Year Retention', value: '100%' }
      ],
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: '3',
      client: 'Government Agency',
      industry: 'Public Sector',
      challenge: 'A federal ministry needed comprehensive training for 200 civil servants on modern project management methodologies and digital tools to improve service delivery.',
      solution: [
        'Needs assessment and competency gap analysis',
        'Custom curriculum design aligned with public sector context',
        'Blended learning approach (in-person + online)',
        'Practical case studies using real government projects',
        'Post-training certification and ongoing support'
      ],
      results: [
        'Trained 200 staff across 4 cohorts in 3 months',
        'Average competency scores increased 68%',
        'Project completion rates improved 45%',
        'Ministry won excellence award for service delivery',
        'Program expanded to 3 additional ministries'
      ],
      metrics: [
        { label: 'Staff Trained', value: '200' },
        { label: 'Competency Increase', value: '68%' },
        { label: 'Efficiency Gain', value: '45%' }
      ],
      icon: Users,
      color: 'from-green-500 to-green-700'
    },
    {
      id: '4',
      client: 'Financial Services Firm',
      industry: 'Banking & Finance',
      challenge: 'A commercial bank needed rigorous background screening for 80 new hires across sensitive positions, with zero margin for error due to regulatory requirements.',
      solution: [
        'Multi-level verification protocol development',
        'Employment history verification (10+ years)',
        'Educational credential authentication',
        'Criminal record and credit history checks',
        'Professional reference validation',
        'Regulatory compliance documentation'
      ],
      results: [
        'Screened all 80 candidates within 3 weeks',
        'Identified 7 cases of credential fraud',
        'Zero regulatory compliance issues',
        'Bank passed CBN audit with commendation',
        'Became preferred screening partner for 3 other banks'
      ],
      metrics: [
        { label: 'Candidates Screened', value: '80' },
        { label: 'Fraud Detected', value: '7 Cases' },
        { label: 'Compliance Issues', value: '0' }
      ],
      icon: Award,
      color: 'from-orange-500 to-orange-700'
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Real Results for Real Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped organizations across Nigeria solve complex HR challenges and achieve measurable results
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {cases.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCase === index
                  ? 'bg-performa-purple text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {caseStudy.industry}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`transition-all duration-500 ${
                activeCase === index ? 'block' : 'hidden'
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${caseStudy.color} p-8 lg:p-12 text-white`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <caseStudy.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">{caseStudy.industry}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold">{caseStudy.client}</h3>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold mb-1">{metric.value}</div>
                      <div className="text-white/80 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Challenge & Solution */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-sm font-bold">
                        1
                      </span>
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {caseStudy.challenge}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">
                        2
                      </span>
                      Our Solution
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-performa-purple flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm font-bold">
                        3
                      </span>
                      The Results
                    </h4>
                    <ul className="space-y-4">
                      {caseStudy.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 p-6 bg-performa-purple/5 rounded-xl border border-performa-purple/20">
                      <p className="text-sm text-gray-600 italic">
                        "Performa's professionalism and attention to detail exceeded our expectations. 
                        They understood our unique needs and delivered results that directly impacted our bottom line."
                      </p>
                      <p className="text-sm font-semibold text-performa-purple mt-3">
                        — {caseStudy.client} Representative
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their HR operations with Performa's expertise
          </p>
          <Link to="/request-staff" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
