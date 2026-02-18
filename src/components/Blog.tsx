import React, { useState, useEffect, useMemo } from 'react'
import { Calendar, User, ArrowRight, Clock, X, Search, Tag, BookOpen } from 'lucide-react'

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
  fullContent: string[]  // Array of paragraphs
}

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
    featured: true,
    fullContent: [
      "Nigeria's HR landscape is undergoing a seismic shift. As the country's economy continues to diversify and the tech ecosystem matures, human resource professionals are being asked to do more with less — while delivering more strategic value than ever before.",
      "One of the most significant trends is the adoption of AI-powered recruitment tools. Nigerian companies — particularly those in fintech, FMCG, and professional services — are increasingly using applicant tracking systems and AI screening tools to reduce time-to-hire and filter large candidate pools more effectively. This doesn't eliminate the human touch; it elevates it, freeing recruiters to focus on assessment and relationship-building.",
      "Remote and hybrid work has gone from a pandemic necessity to a competitive differentiator. Top talent in Lagos, Abuja, and Port Harcourt now expects flexibility as a baseline, not a perk. Companies that haven't updated their remote work policies risk losing their best performers to competitors — or to international employers offering remote roles in dollars or pounds.",
      "Skills-based hiring is also gaining momentum. Instead of relying solely on academic credentials, forward-thinking Nigerian employers are assessing candidates on demonstrable competencies — coding tests, case studies, portfolio reviews, and situational assessments. This opens the talent pool significantly, particularly for roles in tech and creative industries.",
      "Finally, employee wellbeing has moved from the periphery to the centre of HR strategy. Mental health support, flexible leave policies, and fair pay transparency are no longer 'nice to haves' — they are retention tools. In a market where skilled professionals have more options than ever, culture and wellbeing are the new competitive moat.",
      "The HR leaders who will thrive in 2026 are those who approach their function as a strategic business partner — using data, empathy, and innovation to build workforces that are resilient, engaged, and ready for what comes next.",
    ],
  },
  {
    id: '2',
    title: '5 Red Flags to Watch for During the Recruitment Process',
    excerpt: 'Learn how to identify warning signs early in the hiring process that could save your organization from costly bad hires and turnover.',
    author: 'Recruitment Specialist',
    date: '2026-02-05',
    readTime: '4 min',
    category: 'Recruitment Tips',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    fullContent: [
      "A bad hire costs more than a salary. Factor in lost productivity, team morale, client impact, and the cost of restarting the recruitment process, and a single poor hiring decision can cost an organization anywhere from 30% to 150% of that role's annual salary. The good news: most bad hires give you signals early — if you know what to look for.",
      "Red Flag #1 — Inconsistency Between the CV and Interview: When a candidate's spoken account of their experience doesn't match what's written on their CV, that's not always nerves. Probe gently but specifically. Ask for dates, team sizes, specific achievements. Honest candidates welcome the detail; dishonest ones deflect.",
      "Red Flag #2 — Unexplained Gaps or Frequent Short Tenures: One or two short stints might be explainable. A consistent pattern of 6-12 month tenures across multiple employers warrants a direct conversation. Ask what drove each transition. The answer — and how they give it — tells you everything.",
      "Red Flag #3 — Speaking Negatively About Former Employers: Candidates who freely criticize past managers or organizations in an interview setting often bring that same energy into your workplace. Listen for how they frame challenges — are they accountable, or always the victim of someone else's failure?",
      "Red Flag #4 — Lack of Specific Examples: When you ask behavioural interview questions ('Tell me about a time when...') and the candidate responds with vague generalities, it's often a sign that the experience they're claiming is either exaggerated or non-existent. Push for specifics. Strong performers always have stories.",
      "Red Flag #5 — Disinterest in the Role or Company: A candidate who hasn't researched your organization, can't articulate why they want this specific role, or is more focused on salary before any other conversation may be treating your position as a backup option. Enthusiasm isn't everything — but complete absence of it is telling.",
      "The key is to treat recruitment as a two-way investigation. The best candidates expect rigour. A structured interview process with defined scoring criteria reduces bias and catches these red flags before they become expensive lessons.",
    ],
  },
  {
    id: '3',
    title: "Understanding Nigeria's Labour Laws: A Guide for Employers",
    excerpt: "Navigate the complexities of Nigerian employment law with our comprehensive guide covering contracts, termination, benefits, and compliance requirements.",
    author: 'Legal Advisory',
    date: '2026-01-28',
    readTime: '7 min',
    category: 'Legal & Compliance',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    fullContent: [
      "Nigeria's employment law framework is governed primarily by the Labour Act (Cap L1, LFN 2004), the Employees Compensation Act, the Pension Reform Act, and the National Health Insurance Authority Act. For employers operating in Nigeria — local or multinational — understanding these frameworks is not optional. Non-compliance carries financial penalties, reputational risk, and in some cases, criminal liability.",
      "Employment Contracts: Every employee is entitled to a written contract within three months of commencement. The contract must specify the nature of the work, remuneration, hours of work, leave entitlements, and notice period. Verbal agreements are legally recognized but nearly impossible to enforce in disputes — always document.",
      "Termination and Redundancy: The Labour Act requires that employers give adequate notice before termination. The minimum notice period is one day for daily workers, one week for monthly workers (less than 2 years), and one month for employees with 2+ years of service. Wrongful termination claims are increasingly common and costly. Document performance issues thoroughly before any dismissal process.",
      "Pension Contributions: Under the Pension Reform Act 2014, both employer and employee are required to make monthly pension contributions — a minimum of 10% from the employer and 8% from the employee (of monthly emoluments including basic, housing, and transport). Failure to remit contributions attracts a penalty of 2% per month on the outstanding amount.",
      "Leave Entitlements: Employees are entitled to a minimum of 6 days' annual leave after 12 months of continuous service. Senior staff typically receive between 21 and 30 days by convention. Maternity leave is 12 weeks on full pay. Paternity leave, while not federally mandated, is increasingly offered as a retention tool.",
      "NDPR Compliance in HR: The Nigeria Data Protection Regulation (NDPR) applies to employee data — recruitment records, payroll information, performance data, and health records. Employers must have a lawful basis for processing employee data, maintain appropriate security controls, and be able to respond to data access requests. HR departments that ignore NDPR risk significant fines.",
      "The safest approach for any employer is to work with a qualified HR consultant or legal advisor to conduct a compliance audit and update employment documentation annually. Labour law in Nigeria evolves — what was compliant last year may not be compliant today.",
    ],
  },
  {
    id: '4',
    title: "How to Conduct Effective Employee Training in the Hospitality Sector",
    excerpt: "Discover proven strategies for designing and delivering training programs that improve service quality and employee retention in Nigeria's hospitality industry.",
    author: 'Training Consultant',
    date: '2026-01-20',
    readTime: '6 min',
    category: 'Training & Development',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    fullContent: [
      "The Nigerian hospitality sector — spanning hotels, restaurants, event management, and tourism — employs hundreds of thousands of workers, many of whom enter the industry with limited formal training. The gap between customer expectations and frontline service delivery remains one of the sector's most persistent challenges. Closing that gap requires a deliberate, consistent training culture.",
      "Start with a Training Needs Analysis (TNA): Before designing any program, conduct a systematic TNA. Interview department heads, review guest feedback, observe service delivery firsthand, and benchmark against industry standards. This prevents the common trap of training for the wrong things — spending time on product knowledge when the real gap is communication and conflict resolution.",
      "Prioritize Soft Skills Alongside Technical Skills: In hospitality, technical skills (operating a POS system, preparing specific dishes, managing reservations) are trainable in days. The differentiators — empathy, communication, problem-solving under pressure, cultural sensitivity — take sustained investment. Design training programs that split time between technical and interpersonal competencies.",
      "Use Real Scenarios, Not Hypotheticals: Role-plays and scenario-based learning are significantly more effective in hospitality training than lectures or manuals. Create scenarios drawn from actual service failures and wins in your establishment. When trainees practice handling a difficult guest, a kitchen emergency, or an overbooked situation in a safe environment, they perform better when it happens for real.",
      "Microlearning for Frontline Staff: Long training days are operationally disruptive in hospitality. Break training into 15-20 minute modules that can be delivered during shift briefings, on tablets at stations, or via WhatsApp voice notes. Bite-sized, frequent learning is more effective and far easier to sustain than quarterly all-day workshops.",
      "Measure and Reinforce: Training without measurement is an expense, not an investment. Use guest satisfaction scores, mystery shopper reports, and supervisor observation checklists to measure the impact of training over time. Recognize and reward staff who consistently apply what they've learned — behavior that gets recognized gets repeated.",
      "In Nigeria's rapidly growing hospitality market, the establishments that invest consistently in their people will win on service quality, guest loyalty, and staff retention. The cost of training is always less than the cost of losing your best people — or your guests.",
    ],
  },
  {
    id: '5',
    title: 'Background Screening Best Practices: Protecting Your Organization',
    excerpt: 'Learn the essential elements of thorough background screening, from verification processes to NDPR compliance, ensuring you hire with confidence.',
    author: 'Compliance Team',
    date: '2026-01-15',
    readTime: '5 min',
    category: 'Background Screening',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    fullContent: [
      "In 2024, the Nigerian Financial Intelligence Unit reported a significant increase in financial fraud cases involving employees in trusted positions. Many of these cases involved individuals whose backgrounds were never properly verified before hire. Background screening is not bureaucracy — it is risk management.",
      "What Should a Comprehensive Background Check Include? A thorough screening process covers: academic credential verification (WAEC, university degrees, professional certifications), employment history confirmation with previous employers, professional reference interviews, criminal record checks through state and federal channels, and for senior roles, a credit and financial history check.",
      "Academic Credential Verification: Certificate forgery is more common in Nigeria than most employers acknowledge. NYSC discharge certificates, university degrees, and professional certifications should all be verified directly with the issuing institutions. Services like the West African Examinations Council (WAEC) verification portal and direct university registry checks should be standard for all hiring.",
      "Reference Checks Done Right: Most organizations ask for references but conduct them poorly — a brief call asking generic questions. A structured reference check should include specific questions about performance, reliability, conduct under pressure, and whether the referee would rehire the candidate. Listen for hesitation as much as words.",
      "NDPR Compliance in Screening: Candidates must give explicit written consent before any background check is conducted. The scope of the check must be communicated clearly. Data collected during screening must be stored securely, used only for hiring purposes, and destroyed after a defined retention period. Non-compliance with NDPR in your screening process creates legal exposure.",
      "Turnaround Time and Candidate Experience: A poorly managed screening process damages your employer brand. Set clear timelines with candidates, communicate proactively if there are delays, and ensure the process feels respectful — not interrogative. The best candidates have options; if your screening process feels invasive or disorganized, they'll withdraw.",
      "The investment in proper background screening is minimal relative to the potential cost of a bad hire in a sensitive role. For positions involving finance, data access, client relationships, or leadership, thorough verification should be non-negotiable.",
    ],
  },
  {
    id: '6',
    title: 'Building a Diverse and Inclusive Workforce in Nigeria',
    excerpt: 'Practical strategies for creating inclusive hiring practices and fostering workplace diversity that drives innovation and business success.',
    author: 'HR Consultant',
    date: '2026-01-08',
    readTime: '6 min',
    category: 'Diversity & Inclusion',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    fullContent: [
      "Nigeria is one of the most ethnically and culturally diverse countries in the world — over 250 ethnic groups, dozens of major languages, and a population that spans a vast economic and educational spectrum. This diversity is a profound organizational asset. But it doesn't manage itself. Building a truly inclusive workplace requires intentional strategy, not just good intentions.",
      "Start with Inclusive Job Descriptions: The language in your job postings signals who belongs. Gendered language ('aggressive salesperson', 'nurturing team player'), unnecessary credential requirements ('must have a degree' for roles that don't require one), and jargon-heavy descriptions all narrow your candidate pool unnecessarily. Audit your job descriptions for exclusionary language before posting.",
      "Structured Interviews Reduce Bias: Unstructured interviews disproportionately favour candidates who mirror the interviewer's background, communication style, and cultural references. A structured interview — same questions for all candidates, scored against predefined criteria — levels the playing field. It's also more predictive of job performance.",
      "Geographically Diverse Talent Pipelines: Many Nigerian organizations default to recruiting from the same universities in Lagos and Abuja. This limits both diversity and talent access. Expand your pipeline to include institutions in the South-South, South-East, and North — regions with significant untapped talent pools. University partnerships, internship programs, and remote-first roles make this achievable.",
      "Ethnic and Religious Sensitivity in the Workplace: In a multi-ethnic, multi-faith workforce, policies around public holidays, prayer times, dietary accommodation, and cultural events matter. Acknowledging these dimensions — through a thoughtful leave policy, a respect-at-work charter, and manager training on cultural sensitivity — transforms diversity from a statistic into a lived experience.",
      "Measure What You Manage: Diversity without data is just a talking point. Track representation at each level of your organization — entry, mid, senior, executive, and board. Measure promotion rates, pay equity, and retention rates by demographic. If the data reveals gaps, address them systematically. Public commitment to diversity targets accelerates accountability.",
      "The business case for diversity in Nigeria is clear: diverse teams make better decisions, serve a broader customer base more effectively, and innovate more consistently. Inclusion isn't charity — it's strategy. And in Nigeria's complex, multicultural market, it's a competitive advantage.",
    ],
  },
]

const INITIAL_VISIBLE = 3

const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const categories = [...new Set(posts.map((p) => p.category))]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.author.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = !activeCategory || p.category === activeCategory
      return matchesQuery && matchesCategory
    })
  }, [query, activeCategory])

  const featuredPost = filteredPosts.find((p) => p.featured)
  const regularPosts = filteredPosts.filter((p) => !p.featured)
  const visibleRegularPosts = showAll ? regularPosts : regularPosts.slice(0, INITIAL_VISIBLE)

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setActivePost(null) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activePost ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activePost])

  const clearFilters = () => {
    setQuery('')
    setActiveCategory(null)
    setShowAll(false)
  }

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Insights & Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            HR Insights & Industry News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay informed with expert insights, best practices, and the latest trends in HR and recruitment
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowAll(true) }}
              placeholder="Search articles by title, topic, or author..."
              className="w-full pl-12 pr-10 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={clearFilters}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                !activeCategory && !query
                  ? 'bg-performa-purple text-white border-performa-purple'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-performa-purple hover:text-performa-purple'
              }`}
            >
              All Articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat === activeCategory ? null : cat); setShowAll(true) }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-performa-purple text-white border-performa-purple'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-performa-purple hover:text-performa-purple'
                }`}
              >
                <Tag className="w-3 h-3" />
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try a different search term or browse all categories.</p>
            <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && !activeCategory && !query && (
              <div className="mb-16">
                <div className="bg-gradient-to-br from-performa-purple to-purple-900 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-performa-gold text-performa-purple text-xs font-bold rounded-full">FEATURED</span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">{featuredPost.category}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(featuredPost.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm"><User className="w-4 h-4" />{featuredPost.author}</div>
                        <button
                          onClick={() => setActivePost(featuredPost)}
                          className="flex items-center gap-2 px-6 py-3 bg-performa-gold text-performa-purple font-semibold rounded-lg hover:bg-performa-gold-light transition-colors"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(query || activeCategory ? regularPosts : visibleRegularPosts).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white text-performa-purple text-xs font-bold rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-performa-purple transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500"><User className="w-3 h-3" />{post.author}</div>
                      <button
                        onClick={() => setActivePost(post)}
                        className="text-performa-purple font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All / Load More */}
            {!query && !activeCategory && regularPosts.length > INITIAL_VISIBLE && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="btn-outline border-performa-purple text-performa-purple hover:bg-performa-purple hover:text-white"
                >
                  {showAll ? 'Show Less' : `View All ${regularPosts.length + (featuredPost ? 1 : 0)} Articles`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Article Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setActivePost(null) }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

            {/* Modal Header Image */}
            <div className="relative h-52 overflow-hidden rounded-t-2xl flex-shrink-0">
              <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-performa-gold text-performa-purple text-xs font-bold rounded-full">
                  {activePost.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-8 py-6">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{activePost.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(activePost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{activePost.readTime} read</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">{activePost.title}</h2>

              {/* Article Body */}
              <div className="space-y-4">
                {activePost.fullContent.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setActivePost(null)}
                  className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition-colors text-center"
                >
                  ← Back to Articles
                </button>
                <a
                  href="/#contact"
                  onClick={() => setActivePost(null)}
                  className="btn-primary flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
