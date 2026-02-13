import type { FC } from 'react'
import Navbar from '../components/Navbar'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const CaseStudiesPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/90">
              Real results for real clients across Nigeria's leading organizations
            </p>
          </div>
        </section>
        
        <CaseStudies />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default CaseStudiesPage
