import type { FC } from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const BlogPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <section className="gradient-purple text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-6">
              HR Insights & Resources
            </h1>
            <p className="text-xl text-white/90">
              Expert advice, industry trends, and best practices for HR professionals
            </p>
          </div>
        </section>
        
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage
