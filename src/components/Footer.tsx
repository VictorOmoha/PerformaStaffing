import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-performa-purple text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Performa Staffing Agency" 
                  className="h-14 w-auto"
                />
                <div>
                  <h3 className="font-bold text-lg">PERFORMA</h3>
                  <p className="text-xs text-gray-400">Staffing Agency</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Professional staffing solutions for Nigeria's leading organizations.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-performa-gold hover:text-performa-purple transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-performa-gold hover:text-performa-purple transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-performa-gold hover:text-performa-purple transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-performa-gold transition-colors">Services</Link></li>
                <li><Link to="/industries" className="hover:text-performa-gold transition-colors">Industries</Link></li>
                <li><Link to="/about" className="hover:text-performa-gold transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-performa-gold transition-colors">Case Studies</Link></li>
                <li><Link to="/careers" className="hover:text-performa-gold transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/blog" className="hover:text-performa-gold transition-colors">Blog & Insights</Link></li>
                <li><Link to="/contact" className="hover:text-performa-gold transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-performa-gold transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-performa-gold transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-performa-gold transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <a href="mailto:contact@performastaffing.com" className="flex items-center gap-3 hover:text-performa-gold transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@performastaffing.com</span>
                </a>
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Abuja, Federal Capital Territory, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-xs text-gray-500 text-center md:text-left">
                <p>
                  &copy; {currentYear} Performa Human Resource Management and Staffing Agency Ltd.
                  <br />
                  RC: 1991081 | CAC Certified
                </p>
              </div>
              
              {/* Built By */}
              <div className="text-xs text-gray-500 text-center md:text-right">
                <p>
                  Built by <a href="https://omohasolutions.com" target="_blank" rel="noopener noreferrer" className="text-performa-gold hover:underline">Omoha Solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
