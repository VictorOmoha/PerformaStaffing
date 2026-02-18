import type { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import EmployerSignupPage from './pages/employer/EmployerSignupPage'
import EmployerLoginPage from './pages/employer/EmployerLoginPage'
import EmployerDashboardPage from './pages/employer/EmployerDashboardPage'
import PostJobPage from './pages/employer/PostJobPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import AboutPage from './pages/AboutPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CareersPage from './pages/CareersPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import RequestStaffPage from './pages/RequestStaffPage'

const App: FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-staff" element={<RequestStaffPage />} />
        <Route path="/employer/signup" element={<EmployerSignupPage />} />
        <Route path="/employer/login" element={<EmployerLoginPage />} />
        <Route path="/employer/dashboard" element={<ProtectedRoute><EmployerDashboardPage /></ProtectedRoute>} />
        <Route path="/employer/post-job" element={<ProtectedRoute><PostJobPage /></ProtectedRoute>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
