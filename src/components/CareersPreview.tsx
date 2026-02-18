import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Search } from 'lucide-react'

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

const CareersPreview: React.FC = () => {
  const featuredJobs: Job[] = [
    {
      id: '1',
      title: 'HR Manager',
      company: 'Leading Tech Company',
      location: 'Abuja, FCT',
      type: 'Full-time',
      salary: '₦350k - ₦500k/month',
      posted: '2 days ago',
      category: 'Human Resources'
    },
    {
      id: '2',
      title: 'Front Desk Officer',
      company: '5-Star Hotel Chain',
      location: 'Lagos Island',
      type: 'Full-time',
      salary: '₦120k - ₦180k/month',
      posted: '3 days ago',
      category: 'Hospitality'
    },
    {
      id: '3',
      title: 'Software Engineer',
      company: 'Fintech Startup',
      location: 'Victoria Island, Lagos',
      type: 'Full-time',
      salary: '₦400k - ₦700k/month',
      posted: '1 week ago',
      category: 'Technology'
    },
    {
      id: '4',
      title: 'Accountant',
      company: 'Construction Firm',
      location: 'Abuja, FCT',
      type: 'Contract',
      salary: '₦250k - ₦350k/month',
      posted: '1 week ago',
      category: 'Finance'
    },
    {
      id: '5',
      title: 'Training Coordinator',
      company: 'Government Agency',
      location: 'Abuja, FCT',
      type: 'Full-time',
      salary: '₦180k - ₦250k/month',
      posted: '2 weeks ago',
      category: 'Training & Development'
    },
    {
      id: '6',
      title: 'Executive Assistant',
      company: 'Corporate HQ',
      location: 'Lekki, Lagos',
      type: 'Full-time',
      salary: '₦200k - ₦300k/month',
      posted: '2 weeks ago',
      category: 'Administration'
    }
  ]

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

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skill, or company..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-performa-purple focus:border-transparent"
                />
              </div>
              <button className="btn-primary whitespace-nowrap px-8">
                Search Jobs
              </button>
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

        {/* Featured Jobs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-performa-purple/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-performa-purple/10 rounded-lg flex items-center justify-center group-hover:bg-performa-purple group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6 text-performa-purple group-hover:text-white" />
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  {job.posted}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-performa-purple transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{job.company}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-performa-purple" />
                  {job.location}
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

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-performa-purple font-medium">
                  {job.category}
                </span>
                <button className="text-performa-purple font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-performa-purple to-purple-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Can't Find the Right Job?
              </h3>
              <p className="text-white/90 mb-6">
                Submit your CV to our talent database, and we'll match you with opportunities that fit your skills and career goals.
              </p>
              <a href="#submit-profile" className="btn-secondary inline-block">
                Submit Your CV
              </a>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Looking to Hire?
              </h3>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-performa-purple font-semibold hover:gap-3 transition-all"
          >
            View All 150+ Job Openings
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Developer Note */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left text-sm text-gray-600">
          <p className="font-semibold mb-2">📝 Developer Note:</p>
          <p>
            This is a preview/teaser for a future careers portal. To make fully functional:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
            <li>Build dedicated /careers page with job listings</li>
            <li>Integrate job board backend (e.g., Workable, Greenhouse API)</li>
            <li>Add application form with file upload for CVs</li>
            <li>Implement job search/filter functionality</li>
            <li>Add employer job posting dashboard</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CareersPreview
