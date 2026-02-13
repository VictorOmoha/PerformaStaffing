import React from 'react'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured?: boolean
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of HR in Nigeria: Trends Shaping 2026 and Beyond',
      excerpt: 'Explore the emerging trends transforming human resource management in Nigeria, from AI-driven recruitment to remote work optimization and skills-based hiring strategies.',
      author: 'Performa Editorial Team',
      date: '2026-02-10',
      readTime: '5 min',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      featured: true
    },
    {
      id: '2',
      title: '5 Red Flags to Watch for During the Recruitment Process',
      excerpt: 'Learn how to identify warning signs early in the hiring process that could save your organization from costly bad hires and turnover.',
      author: 'Recruitment Specialist',
      date: '2026-02-05',
      readTime: '4 min',
      category: 'Recruitment Tips',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      id: '3',
      title: 'Understanding Nigeria\'s Labour Laws: A Guide for Employers',
      excerpt: 'Navigate the complexities of Nigerian employment law with our comprehensive guide covering contracts, termination, benefits, and compliance requirements.',
      author: 'Legal Advisory',
      date: '2026-01-28',
      readTime: '7 min',
      category: 'Legal & Compliance',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
    },
    {
      id: '4',
      title: 'How to Conduct Effective Employee Training in the Hospitality Sector',
      excerpt: 'Discover proven strategies for designing and delivering training programs that improve service quality and employee retention in Nigeria\'s hospitality industry.',
      author: 'Training Consultant',
      date: '2026-01-20',
      readTime: '6 min',
      category: 'Training & Development',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    },
    {
      id: '5',
      title: 'Background Screening Best Practices: Protecting Your Organization',
      excerpt: 'Learn the essential elements of thorough background screening, from verification processes to NDPR compliance, ensuring you hire with confidence.',
      author: 'Compliance Team',
      date: '2026-01-15',
      readTime: '5 min',
      category: 'Background Screening',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    },
    {
      id: '6',
      title: 'Building a Diverse and Inclusive Workforce in Nigeria',
      excerpt: 'Practical strategies for creating inclusive hiring practices and fostering workplace diversity that drives innovation and business success.',
      author: 'HR Consultant',
      date: '2026-01-08',
      readTime: '6 min',
      category: 'Diversity & Inclusion',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80'
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Insights & Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            HR Insights & Industry News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert insights, best practices, and the latest trends in HR and recruitment
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-performa-purple to-purple-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-performa-gold text-performa-purple text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-performa-gold text-performa-purple font-semibold rounded-lg hover:bg-performa-gold-light transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-performa-purple text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-performa-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <button className="text-performa-purple font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-outline border-performa-purple text-performa-purple hover:bg-performa-purple hover:text-white">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
