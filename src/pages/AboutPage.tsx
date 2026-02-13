import type { FC } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              About Performa
            </h1>
            <p className="text-xl text-white/90">
              CAC-certified staffing agency committed to excellence in human resource management
            </p>
          </div>
        </section>
        
        <About />
        <Team />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
