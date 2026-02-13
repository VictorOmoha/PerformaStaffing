import React from 'react'
import { ArrowRight, Users, Award, Target } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen gradient-purple overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-performa-gold rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Award className="w-4 h-4 text-performa-gold" />
              <span className="text-sm font-medium text-white">
                RC: 1991081 — CAC Certified
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-6">
              Quality Human Resource
              <span className="text-gradient-gold block mt-2">Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl lg:max-w-none">
              Professional staffing, training, and consulting services for organizations 
              in Abuja and across Nigeria. We match skilled talent with the right opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-secondary group">
                Request Staff
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-performa-purple">
                Find Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-performa-gold">500+</div>
                <div className="text-sm text-gray-300 mt-1">Placements</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-performa-gold">50+</div>
                <div className="text-sm text-gray-300 mt-1">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-performa-gold">95%</div>
                <div className="text-sm text-gray-300 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Orbital Animation */}
          <div className="hidden lg:block relative">
            <div className="relative flex items-center justify-center h-[500px]">
              {/* Main Circle */}
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-performa-gold to-performa-gold-light rounded-full flex items-center justify-center mb-4 shadow-2xl">
                    <Users className="w-10 h-10 text-performa-purple" />
                  </div>
                  <p className="text-white font-semibold text-lg">Your Trusted</p>
                  <p className="text-performa-gold font-bold text-2xl">HR Partner</p>
                </div>
              </div>

              {/* Orbiting Card 1 - Skilled Talent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
                <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Skilled Talent</p>
                      <p className="text-xs text-gray-500">Verified & Trained</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Card 2 - Certified */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-2">
                <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-performa-purple/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-performa-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Certified</p>
                      <p className="text-xs text-gray-500">Industry Standard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
