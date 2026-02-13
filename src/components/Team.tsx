import React from 'react'
import { Users, Award, Briefcase, GraduationCap, Scale, FileText, Phone } from 'lucide-react'

const teamRoles = [
  {
    icon: Users,
    title: 'CEO / Lead Consultant',
    description: 'Strategic leadership, business development, and overall organizational direction.',
    responsibilities: [
      'Business strategy & vision',
      'Partnership development',
      'Financial oversight',
      'Team leadership',
    ],
  },
  {
    icon: Scale,
    title: 'Legal Secretary',
    description: 'Legal documentation, contracts, and compliance management.',
    responsibilities: [
      'Contract drafting',
      'Legal advisory',
      'Compliance oversight',
      'Documentation management',
    ],
  },
  {
    icon: Briefcase,
    title: 'Recruitment Specialist',
    description: 'Talent acquisition across all skill levels and industries.',
    responsibilities: [
      'Candidate sourcing',
      'Interview coordination',
      'Background verification',
      'Client matching',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training & Development Consultant',
    description: 'Employee training, skill development, and performance enhancement.',
    responsibilities: [
      'Training program design',
      'Skills assessment',
      'Development planning',
      'Performance tracking',
    ],
  },
  {
    icon: Users,
    title: 'Admin & HR Manager',
    description: 'Day-to-day operations, HR administration, and staff coordination.',
    responsibilities: [
      'HR administration',
      'Staff coordination',
      'Policy implementation',
      'Office management',
    ],
  },
  {
    icon: Award,
    title: 'Business Developer',
    description: 'Marketing, sales, and strategic business growth initiatives.',
    responsibilities: [
      'Client acquisition',
      'Market research',
      'Brand development',
      'Partnership building',
    ],
  },
  {
    icon: FileText,
    title: 'Accountant',
    description: 'Financial management, payroll processing, and compliance.',
    responsibilities: [
      'Financial reporting',
      'Payroll processing',
      'Tax compliance',
      'Budget management',
    ],
  },
  {
    icon: Phone,
    title: 'Front Desk Officer',
    description: 'Client reception, communication, and administrative support.',
    responsibilities: [
      'Client reception',
      'Call management',
      'Appointment scheduling',
      'Administrative support',
    ],
  },
]

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Expert Staff, Quality Results
          </h2>
          <p className="text-lg text-gray-600">
            Our diverse team of professionals brings expertise across recruitment, 
            training, legal, and administrative functions to deliver comprehensive HR solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-performa-purple/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-performa-purple/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-performa-purple group-hover:text-white transition-colors duration-300">
                <role.icon className="w-6 h-6 text-performa-purple group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-performa-purple transition-colors">
                {role.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {role.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-1.5">
                {role.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 bg-performa-gold rounded-full flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Our Team Matters */}
        <div className="mt-20 bg-performa-purple rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-performa-gold mb-2">8+</div>
              <div className="text-gray-300">Specialized Roles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-performa-gold mb-2">10+</div>
              <div className="text-gray-300">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-performa-gold mb-2">100%</div>
              <div className="text-gray-300">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
