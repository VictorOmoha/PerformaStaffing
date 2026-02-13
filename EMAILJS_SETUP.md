# EmailJS Setup Guide for Contact Form

This guide will help you integrate EmailJS to make the contact form functional without needing a backend server.

## Why EmailJS?

- **No backend required**: Sends emails directly from the frontend
- **Free tier**: 200 emails/month (perfect for getting started)
- **Easy setup**: Takes about 10 minutes
- **Reliable**: Used by thousands of websites

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account)
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail recommended)
3. Follow the prompts to connect your email
4. **Save your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Click "Email Templates" → "Create New Template"
2. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Company: {{from_company}}
Service Interest: {{service_interest}}

Message:
{{message}}
```

3. **Save your Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abcdef123456`)

### 5. Install EmailJS Package

```bash
npm install @emailjs/browser
```

### 6. Update Contact Component

Replace the form submission code in `src/components/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitted(false)
  
  // Replace these with your actual IDs from EmailJS
  const SERVICE_ID = 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
  
  emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_company: formData.company,
      service_interest: formData.service,
      message: formData.message,
    },
    PUBLIC_KEY
  )
  .then(() => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    }, 3000)
  })
  .catch((error) => {
    console.error('Email send failed:', error)
    alert('Failed to send message. Please try again or contact us directly.')
  })
}
```

### 7. Test the Form

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your email inbox for the submission

## Security Best Practices

### Option 1: Environment Variables (Recommended for Production)

Create a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update the code:

```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

**Important**: Add `.env` to `.gitignore` to keep credentials private!

### Option 2: Direct Integration (Quick Start)

For getting started quickly, you can hardcode the values directly in the component. This is fine for public keys as EmailJS has rate limiting and domain restrictions.

## Troubleshooting

### Emails not arriving?

1. Check spam/junk folder
2. Verify Service ID, Template ID, and Public Key are correct
3. Check EmailJS dashboard for error logs
4. Ensure your email service is properly connected

### Rate limit errors?

- Free tier: 200 emails/month
- Upgrade to paid plan if needed ($7/month for 1000 emails)

### CORS errors?

- Make sure you're using the Public Key, not the Private Key
- EmailJS handles CORS automatically

## Alternative: Formspree

If you prefer a different solution, [Formspree](https://formspree.io/) is another excellent option:

1. Sign up at formspree.io
2. Get your form endpoint URL
3. Update form submission to POST to that URL

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: contact@performastaffing.com

---

**Status**: Contact form currently logs to console. Follow this guide to make it fully functional.
