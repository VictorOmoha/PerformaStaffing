import type { FC } from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Let's discuss how we can help transform your HR operations
            </p>
          </div>
        </section>
        
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
