import type { FC } from 'react'
import Navbar from '../components/Navbar'
import CareersPreview from '../components/CareersPreview'
import FindWorkForm from '../components/FindWorkForm'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const CareersPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              Find Work
            </h1>
            <p className="text-xl text-white/90">
              Discover your next career move with Nigeria's leading organizations
            </p>
          </div>
        </section>

        <CareersPreview />
        <FindWorkForm />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default CareersPage
