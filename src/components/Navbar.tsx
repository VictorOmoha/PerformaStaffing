import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Performa Staffing Agency" 
              className={`h-14 w-auto transition-all ${
                isScrolled ? '' : 'drop-shadow-lg'
              }`}
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold font-display transition-colors ${
                isScrolled ? 'text-performa-purple' : 'text-white'
              }`}>
                PERFORMA
              </h1>
              <p className={`text-xs -mt-1 transition-colors ${
                isScrolled ? 'text-performa-purple/70' : 'text-white/90'
              }`}>
                Staffing Agency
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-performa-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-performa-purple' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-performa-purple font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-secondary block text-center mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
