import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Search, X, Tag } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  posted: string
  category: string
}

interface Suggestion {
  text: string
  kind: 'title' | 'category' | 'location' | 'company'
}

const featuredJobs: Job[] = [
  { id: '1', title: 'HR Manager', company: 'Leading Tech Company', location: 'Abuja, FCT', type: 'Full-time', salary: '₦350k - ₦500k/month', posted: '2 days ago', category: 'Human Resources' },
  { id: '2', title: 'Front Desk Officer', company: '5-Star Hotel Chain', location: 'Lagos Island', type: 'Full-time', salary: '₦120k - ₦180k/month', posted: '3 days ago', category: 'Hospitality' },
  { id: '3', title: 'Software Engineer', company: 'Fintech Startup', location: 'Victoria Island, Lagos', type: 'Full-time', salary: '₦400k - ₦700k/month', posted: '1 week ago', category: 'Technology' },
  { id: '4', title: 'Accountant', company: 'Construction Firm', location: 'Abuja, FCT', type: 'Contract', salary: '₦250k - ₦350k/month', posted: '1 week ago', category: 'Finance' },
  { id: '5', title: 'Training Coordinator', company: 'Government Agency', location: 'Abuja, FCT', type: 'Full-time', salary: '₦180k - ₦250k/month', posted: '2 weeks ago', category: 'Training & Development' },
  { id: '6', title: 'Executive Assistant', company: 'Corporate HQ', location: 'Lekki, Lagos', type: 'Full-time', salary: '₦200k - ₦300k/month', posted: '2 weeks ago', category: 'Administration' },
]

/** Highlight matching substring in text */
const HighlightMatch: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query.trim()) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span className="font-bold text-performa-purple">{text.slice(idx, idx + query.length)}</span>
      {text.slice(idx + query.length)}
    </>
  )
}

const kindLabel: Record<Suggestion['kind'], string> = {
  title: 'Role',
  category: 'Category',
  location: 'Location',
  company: 'Company',
}

const kindColor: Record<Suggestion['kind'], string> = {
  title: 'bg-purple-100 text-purple-700',
  category: 'bg-blue-100 text-blue-700',
  location: 'bg-green-100 text-green-700',
  company: 'bg-orange-100 text-orange-700',
}

const CareersPreview: React.FC = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [activeIdx, setActiveIdx] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(featuredJobs)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /** Build suggestion pool from all job fields */
  const buildSuggestions = useCallback((q: string): Suggestion[] => {
    if (!q.trim()) return []
    const lower = q.toLowerCase()
    const seen = new Set<string>()
    const results: Suggestion[] = []

    const push = (text: string, kind: Suggestion['kind']) => {
      const key = `${kind}:${text}`
      if (!seen.has(key) && text.toLowerCase().includes(lower)) {
        seen.add(key)
        results.push({ text, kind })
      }
    }

    featuredJobs.forEach((job) => {
      push(job.title, 'title')
      push(job.category, 'category')
      push(job.location, 'location')
      push(job.company, 'company')
    })

    return results.slice(0, 6)
  }, [])

  /** Filter jobs based on active query */
  const filterJobs = useCallback((q: string) => {
    if (!q.trim()) {
      setFilteredJobs(featuredJobs)
      return
    }
    const lower = q.toLowerCase()
    setFilteredJobs(
      featuredJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(lower) ||
          job.company.toLowerCase().includes(lower) ||
          job.location.toLowerCase().includes(lower) ||
          job.category.toLowerCase().includes(lower) ||
          job.type.toLowerCase().includes(lower)
      )
    )
  }, [])

  const handleQueryChange = (val: string) => {
    setQuery(val)
    setActiveIdx(-1)
    setActiveFilter(null)
    const s = buildSuggestions(val)
    setSuggestions(s)
    setShowSuggestions(s.length > 0)
    filterJobs(val)
  }

  const applySelection = (text: string) => {
    setQuery(text)
    setActiveFilter(text)
    setSuggestions([])
    setShowSuggestions(false)
    filterJobs(text)
    inputRef.current?.blur()
  }

  const clearSearch = () => {
    setQuery('')
    setActiveFilter(null)
    setSuggestions([])
    setShowSuggestions(false)
    setFilteredJobs(featuredJobs)
    inputRef.current?.focus()
  }

  /** Keyboard navigation */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIdx >= 0 && suggestions[activeIdx]) {
        applySelection(suggestions[activeIdx].text)
      } else {
        filterJobs(query)
        setShowSuggestions(false)
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
      setActiveIdx(-1)
    }
  }

  /** Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const categoryFilters = [...new Set(featuredJobs.map((j) => j.category))]

  return (
    <section id="careers-preview" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-performa-purple/10 text-performa-purple rounded-full text-sm font-medium mb-4">
            Find Your Next Opportunity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Current Job Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore exciting career opportunities across Nigeria's leading organizations
          </p>

          {/* Search Bar with Auto-Suggest */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                {/* Input */}
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    if (suggestions.length > 0) setShowSuggestions(true)
                  }}
                  placeholder="Search by role, skill, location, or company..."
                  className="w-full pl-12 pr-10 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                  autoComplete="off"
                />
                {/* Clear button */}
                {query && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    {suggestions.map((s, i) => (
                      <button
                        key={`${s.kind}-${s.text}`}
                        onMouseDown={() => applySelection(s.text)}
                        onMouseEnter={() => setActiveIdx(i)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          i === activeIdx ? 'bg-performa-purple/5' : 'hover:bg-gray-50'
                        } ${i !== 0 ? 'border-t border-gray-100' : ''}`}
                      >
                        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="flex-1 text-sm text-gray-800">
                          <HighlightMatch text={s.text} query={query} />
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${kindColor[s.kind]}`}>
                          {kindLabel[s.kind]}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => { filterJobs(query); setShowSuggestions(false) }}
                className="btn-primary whitespace-nowrap px-8"
              >
                Search Jobs
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button
                onClick={clearSearch}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  !activeFilter
                    ? 'bg-performa-purple text-white border-performa-purple'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-performa-purple hover:text-performa-purple'
                }`}
              >
                All Roles
              </button>
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => applySelection(cat)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    activeFilter === cat
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
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-performa-purple mb-2">150+</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Industries</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">Daily</div>
            <div className="text-sm text-gray-600">New Postings</div>
          </div>
        </div>

        {/* Job Cards */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-performa-purple/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-performa-purple/10 rounded-lg flex items-center justify-center group-hover:bg-performa-purple group-hover:text-white transition-colors">
                    <Briefcase className="w-6 h-6 text-performa-purple group-hover:text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {job.posted}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-performa-purple transition-colors">
                  <HighlightMatch text={job.title} query={query} />
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  <HighlightMatch text={job.company} query={query} />
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-performa-purple" />
                    <HighlightMatch text={job.location} query={query} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-performa-purple" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-performa-purple" />
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-performa-purple font-medium">
                    <HighlightMatch text={job.category} query={query} />
                  </span>
                  <a
                    href="#submit-profile"
                    className="text-performa-purple font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results for "{query}"</h3>
            <p className="text-gray-600 mb-6">Try a different search term or browse by category above.</p>
            <button onClick={clearSearch} className="btn-primary">
              Clear Search
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-performa-purple to-purple-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Can't Find the Right Job?</h3>
              <p className="text-white/90 mb-6">
                Submit your profile to our talent database, and we'll match you with opportunities that fit your skills and career goals.
              </p>
              <a href="#submit-profile" className="btn-secondary inline-block">
                Submit Your CV
              </a>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Looking to Hire?</h3>
              <p className="text-white/90 mb-6">
                Post your job openings with us and get access to our network of pre-screened, qualified candidates.
              </p>
              <Link to="/request-staff" className="btn-outline border-white text-white hover:bg-white hover:text-performa-purple inline-block">
                Post a Job
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-performa-purple font-semibold hover:gap-3 transition-all"
          >
            View All 150+ Job Openings
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CareersPreview
