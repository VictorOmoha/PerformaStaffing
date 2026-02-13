# Performa Staffing Agency Website

Professional website for Performa Human Resource Management and Staffing Agency - A CAC-certified staffing agency (RC 1991081) providing expert recruitment and HR services across Nigeria.

## 🎨 Brand Identity

- **Primary Color**: Purple (#4C267C)
- **Secondary Color**: Gold (#FDC503 / #FFD402)
- **Logo**: PerformLogo.png
- **Designer**: Amina Gimba

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Heroicons
- **Routing**: React Router DOM

## 📦 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/VictorOmoha/PerformaStaffing.git

# Navigate to project directory
cd performa-staffing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Features

### Current Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ **15 comprehensive sections**: Navbar, Hero, Services, Industries, About, Team, Testimonials, Case Studies, Careers Preview, Blog, FAQ, Newsletter, Contact, Footer + 3 Legal Pages
- ✅ Dynamic navbar with scroll effects
- ✅ Smooth animations and transitions throughout
- ✅ Professional brand integration (purple #4C267C + gold #FDC503)
- ✅ Comprehensive SEO meta tags and Open Graph data
- ✅ **Legal pages**: Privacy Policy, Terms of Service, Cookie Policy (all NDPR compliant)
- ✅ **Contact form** (frontend ready, EmailJS guide included)
- ✅ **WhatsApp quick contact button** (popular in Nigeria)
- ✅ **5 client testimonials** across multiple industries
- ✅ **4 detailed case studies** with challenge-solution-results format
- ✅ **Careers preview** with 6 sample job listings
- ✅ **Blog section** with featured + regular posts
- ✅ **FAQ accordion** with 15+ questions (general, employers, candidates)
- ✅ **Newsletter signup** with email capture
- ✅ Trust indicators and social proof throughout

### Services Highlighted

1. **Recruitment & Staffing**: Talent acquisition and placement
2. **Training & Development**: Professional development programs
3. **HR Consulting**: Strategic HR advisory services
4. **Background Screening**: Comprehensive verification services
5. **Talent Assessment**: Psychometric testing and evaluation
6. **Payroll & Compliance**: Payroll management and regulatory compliance

### Industries Served

- Hospitality & Tourism
- Corporate Sector
- Government & Public Sector
- Technology & Startups
- Finance & Banking
- Healthcare & more

## 🔧 Configuration Needed

### 1. Contact Form Backend

The contact form currently logs to console. To make it functional:

- **Recommended**: EmailJS (see `EMAILJS_SETUP.md` for detailed guide)
- **Alternative**: Formspree, custom API, or backend service

### 2. Google Analytics

Add your tracking ID in `index.html`:

```html
<!-- Uncomment and add your GA_MEASUREMENT_ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 3. Domain Email

Update email address when domain is ready:
- Current placeholder: `contact@performastaffing.com`
- Files to update: `src/components/Contact.tsx`, `src/components/Footer.tsx`

### 4. Social Media Links

Update social media URLs in `src/components/Footer.tsx`:
- LinkedIn
- Facebook
- Twitter

## 📁 Project Structure

```
performa-staffing/
├── public/
│   └── logo.png                 # Company logo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar (sticky, scroll effects)
│   │   ├── Hero.tsx             # Hero section with stats
│   │   ├── Services.tsx         # 6 services showcase
│   │   ├── Industries.tsx       # 6 industries served
│   │   ├── About.tsx            # About section with mission
│   │   ├── Team.tsx             # 8 team roles
│   │   ├── Testimonials.tsx     # 5 client testimonials
│   │   ├── CaseStudies.tsx      # 4 detailed case studies (tabbed UI)
│   │   ├── CareersPreview.tsx   # Job listings preview
│   │   ├── Blog.tsx             # Blog with featured + regular posts
│   │   ├── FAQ.tsx              # 15+ FAQ accordion
│   │   ├── Newsletter.tsx       # Email subscription
│   │   ├── Contact.tsx          # Contact form + WhatsApp
│   │   └── Footer.tsx           # Footer with legal links
│   ├── pages/
│   │   ├── HomePage.tsx         # Main landing page (15 sections)
│   │   ├── PrivacyPolicy.tsx    # Privacy policy (NDPR compliant)
│   │   ├── TermsOfService.tsx   # Terms of service
│   │   └── CookiePolicy.tsx     # Cookie policy
│   ├── App.tsx                  # Main app with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template with SEO meta tags
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
├── package.json                 # Dependencies
├── EMAILJS_SETUP.md             # Contact form setup guide
└── README.md                    # This file
```

## 🎨 Color Customization

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'performa-purple': '#4C267C',
  'performa-gold': '#FDC503',
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

The site can be deployed to any static hosting service that supports single-page applications.

## 📊 SEO Features

- ✅ Meta descriptions and keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ⏳ Google Analytics (ready to configure)

## 🔒 Compliance

- ✅ Privacy Policy (NDPR compliant)
- ✅ Terms of Service
- ✅ Cookie Policy
- ✅ CAC registration displayed (RC 1991081)

## 📈 Performance

Built with performance in mind:
- Vite for fast builds and hot module replacement
- Code splitting with React Router
- Optimized images and assets
- Minimal dependencies

## 🤝 Contributing

This is a private project for Performa Staffing Agency.

## 📝 License

© 2026 Performa Human Resource Management and Staffing Agency Ltd. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: contact@performastaffing.com
- Location: Abuja, Federal Capital Territory, Nigeria

---

**Built by**: [Omoha Solutions](https://omohasolutions.com)  
**Powered by**: React + Vite + Tailwind CSS
