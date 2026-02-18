import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Utensils, 
  Building2, 
  Landmark, 
  Monitor, 
  Flame, 
  Home,
  GraduationCap,
  HeartPulse,
  ShoppingBag
} from 'lucide-react'

const industries = [
  {
    icon: Utensils,
    name: 'Hospitality',
    description: 'Hotels, restaurants, and catering services',
    roles: ['Chefs', 'Waiters', 'Housekeeping', 'Concierge', 'Event Staff'],
  },
  {
    icon: Building2,
    name: 'Corporate',
    description: 'Private sector businesses and enterprises',
    roles: ['Admin Staff', 'Managers', 'Sales', 'Customer Service'],
  },
  {
    icon: Landmark,
    name: 'Government',
    description: 'Public sector and government institutions',
    roles: ['Clerical', 'Officers', 'Support Staff', 'Project Staff'],
  },
  {
    icon: Monitor,
    name: 'Information Technology',
    description: 'Tech companies and IT departments',
    roles: ['Developers', 'IT Support', 'Project Managers', 'Data Analysts'],
  },
  {
    icon: Flame,
    name: 'Oil & Gas',
    description: 'Energy sector operations and support',
    roles: ['Technicians', 'Engineers', 'Safety Officers', 'Field Staff'],
  },
  {
    icon: Landmark,
    name: 'Banking & Finance',
    description: 'Financial institutions and insurance',
    roles: ['Tellers', 'Account Officers', 'Risk Analysts', 'Compliance'],
  },
  {
    icon: Home,
    name: 'Domestic Staffing',
    description: 'Private homes and residences',
    roles: ['Maids', 'Nannies', 'Drivers', 'Security', 'Gardeners', 'Cooks'],
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Schools, colleges, and universities',
    roles: ['Teachers', 'Administrators', 'Support Staff', 'Librarians'],
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Hospitals and medical facilities',
    roles: ['Nurses', 'Caregivers', 'Admin Staff', 'Support Personnel'],
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'Stores and consumer businesses',
    roles: ['Sales Associates', 'Store Managers', 'Cashiers', 'Stock Clerks'],
  },
]

const Industries: React.FC = () => {
  return (
    <section id="industries" className="section-padding bg-performa-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDC503' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-performa-gold/20 text-performa-gold rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
            Staffing Across All Sectors
          </h2>
          <p className="text-lg text-gray-300">
            From hospitals to hotels, government to tech, we provide qualified staff 
            across Nigeria's most vital industries.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-performa-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-performa-gold to-performa-gold-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-6 h-6 text-performa-purple" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-performa-gold transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {industry.description}
              </p>

              {/* Roles Tags */}
              <div className="flex flex-wrap gap-1.5">
                {industry.roles.slice(0, 3).map((role, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-md"
                  >
                    {role}
                  </span>
                ))}
                {industry.roles.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-white/10 text-performa-gold rounded-md">
                    +{industry.roles.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Don't see your industry? We adapt to serve businesses of all types.
          </p>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Industries
