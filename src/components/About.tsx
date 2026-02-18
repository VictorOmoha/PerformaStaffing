import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
              About Performa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
              Your Trusted HR Partner Since Day One
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Performa Human Resource Management and Staffing Agency Ltd (RC: 1991081) 
              is a CAC-certified staffing and consulting firm dedicated to connecting 
              exceptional talent with forward-thinking organizations across Nigeria.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-performa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client-Focused Approach</h3>
                  <p className="text-gray-600">
                    We prioritize your business goals and adapt our services to meet your unique needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-performa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-600">
                    Every candidate is thoroughly vetted and trained to meet industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-performa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                  <p className="text-gray-600">
                    We build lasting relationships and invest in the development of our partners.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn-primary">
              Let's Work Together
            </Link>
          </div>

          {/* Right Content - Mission & Vision */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-performa-purple to-performa-purple-light rounded-2xl p-10 text-white shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-performa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3">Our Mission</h3>
                  <p className="text-base leading-relaxed">
                    To provide professional and trusted staffing solutions that empower 
                    organizations to grow, and individuals to thrive in their careers.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-performa-gold via-performa-gold-light to-performa-gold-dark rounded-2xl p-10 text-performa-purple shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3">Our Vision</h3>
                  <p className="text-base leading-relaxed font-medium">
                    To become Nigeria's leading staffing agency, recognized for quality talent, 
                    integrity, and excellence in service delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-gray-50 border-2 border-performa-purple/20 rounded-2xl p-10">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-performa-purple flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold font-display text-gray-900">Our Values</h3>
              </div>
              <ul className="space-y-3">
                {['Integrity', 'Excellence', 'Teamwork', 'Accountability', 'Professionalism'].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-performa-gold rounded-full" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
