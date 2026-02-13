import type { FC } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import CaseStudies from '../components/CaseStudies'
import CareersPreview from '../components/CareersPreview'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <About />
        <Team />
        <Testimonials />
        <CaseStudies />
        <CareersPreview />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
