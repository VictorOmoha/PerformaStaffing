import React from 'react'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  industry: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Adebayo Okonkwo",
      role: "HR Director",
      company: "TechHub Nigeria",
      content: "Performa's recruitment process is exceptional. They understood our technical requirements and delivered qualified candidates within two weeks. The screening process was thorough, and we've retained 100% of their placements for over a year.",
      rating: 5,
      industry: "Technology"
    },
    {
      name: "Fatima Ibrahim",
      role: "Operations Manager",
      company: "Grand Meridian Hotel",
      content: "Finding skilled hospitality staff in Abuja was challenging until we partnered with Performa. Their understanding of the hospitality sector and commitment to quality matching has been outstanding. They're now our exclusive staffing partner.",
      rating: 5,
      industry: "Hospitality"
    },
    {
      name: "Chief Emmanuel Nwachukwu",
      role: "Managing Director",
      company: "Silverstone Financial Services",
      content: "The background screening and compliance support Performa provided exceeded our regulatory requirements. Their professionalism and attention to detail give us confidence in every placement. Highly recommended for financial sector staffing.",
      rating: 5,
      industry: "Finance"
    },
    {
      name: "Dr. Amina Yusuf",
      role: "Director of Training",
      company: "Federal Ministry of Agriculture",
      content: "Performa's training programs transformed our team's capabilities. The needs assessment was comprehensive, and the trainers were exceptional. We've seen measurable improvements in productivity and staff satisfaction.",
      rating: 5,
      industry: "Government"
    },
    {
      name: "Michael Okafor",
      role: "CEO",
      company: "BuildRight Construction Ltd.",
      content: "We needed project managers and engineers urgently for a major contract. Performa delivered within 72 hours without compromising quality. Their talent pool and rapid response time saved our project timeline.",
      rating: 5,
      industry: "Construction"
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-performa-purple to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-performa-gold/20 text-performa-gold rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Trusted by Nigeria's Leading Organizations
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            See what our clients say about their experience working with Performa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-performa-gold/20 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-performa-gold" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-performa-gold text-performa-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold text-white mb-1">{testimonial.name}</p>
                <p className="text-sm text-white/70">{testimonial.role}</p>
                <p className="text-sm text-performa-gold font-medium">{testimonial.company}</p>
                <p className="text-xs text-white/50 mt-2">{testimonial.industry} Sector</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials - Hidden on Mobile */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={index + 3}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-performa-gold/20 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-performa-gold" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-performa-gold text-performa-gold" />
                ))}
              </div>

              <p className="text-white/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold text-white mb-1">{testimonial.name}</p>
                <p className="text-sm text-white/70">{testimonial.role}</p>
                <p className="text-sm text-performa-gold font-medium">{testimonial.company}</p>
                <p className="text-xs text-white/50 mt-2">{testimonial.industry} Sector</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-performa-gold mb-2">500+</div>
              <div className="text-white/80">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-performa-gold mb-2">50+</div>
              <div className="text-white/80">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-performa-gold mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-performa-gold mb-2">8+</div>
              <div className="text-white/80">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
