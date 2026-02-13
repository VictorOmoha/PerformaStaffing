import type { FC } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { ArrowRight, Building2, Briefcase, BookOpen, Award } from 'lucide-react'

const HomePage: FC = () => {
  const quickLinks = [
    {
      title: 'Our Services',
      description: 'Comprehensive HR solutions tailored to your needs',
      icon: Building2,
      link: '/services',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Industries',
      description: 'Specialized staffing across key sectors',
      icon: Award,
      link: '/industries',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Careers',
      description: 'Explore exciting job opportunities',
      icon: Briefcase,
      link: '/careers',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Insights',
      description: 'Expert HR advice and industry trends',
      icon: BookOpen,
      link: '/blog',
      color: 'from-orange-500 to-orange-700'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Quick Links Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4">
                Explore More
              </h2>
              <p className="text-lg text-gray-600">
                Discover all that Performa has to offer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-performa-purple/30"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-performa-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-performa-purple font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
