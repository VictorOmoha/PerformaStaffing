/**
 * Netlify Function: Job Seeker Profile Submission
 * POST { name, email, phone, location, roleInterest, experienceLevel,
 *        availability, linkedinOrPortfolio, about,
 *        cvFileName?, cvBase64?, cvMimeType? }
 *
 * Env vars:
 *   RESEND_API_KEY    — re_xxxx
 *   RESEND_FROM_EMAIL — e.g. "Performa Staffing <hello@performastaffing.com>"
 *   ADMIN_EMAIL       — careers@performastaffing.com
 */

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }
  }

  const {
    name, email, phone, location, roleInterest,
    experienceLevel, availability, linkedinOrPortfolio,
    about, cvFileName, cvBase64, cvMimeType,
  } = body

  if (!name || !email || !phone || !roleInterest) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Required fields missing' }) }
  }

  const API_KEY = process.env.RESEND_API_KEY
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Performa Staffing <hello@performastaffing.com>'
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'careers@performastaffing.com'

  if (!API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) }
  }

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  }

  // Build admin notification payload
  const adminEmailPayload = {
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: `📋 New Profile: ${name} — ${roleInterest}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a2e;">
        <div style="background: #6b21a8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 20px;">New Job Seeker Profile</h2>
        </div>
        <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #666; width: 40%;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6b21a8;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Location</td><td style="padding: 8px 0;">${location || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Role Interest</td><td style="padding: 8px 0; font-weight: 600; color: #6b21a8;">${roleInterest}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Experience</td><td style="padding: 8px 0;">${experienceLevel || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Availability</td><td style="padding: 8px 0;">${availability || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">LinkedIn / Portfolio</td><td style="padding: 8px 0;">${linkedinOrPortfolio ? `<a href="${linkedinOrPortfolio}" style="color: #6b21a8;">${linkedinOrPortfolio}</a>` : 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">CV Attached</td><td style="padding: 8px 0;">${cvFileName ? `✅ ${cvFileName}` : '❌ No CV uploaded'}</td></tr>
          </table>
          ${about ? `<div style="margin-top: 20px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;"><p style="font-size: 13px; color: #555; margin: 0 0 6px; font-weight: 600;">About the Candidate:</p><p style="font-size: 14px; color: #333; margin: 0; line-height: 1.6;">${about}</p></div>` : ''}
          <p style="font-size: 12px; color: #888; margin-top: 20px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} WAT</p>
        </div>
      </div>
    `,
    ...(cvBase64 && cvFileName && cvMimeType ? {
      attachments: [{
        filename: cvFileName,
        content: cvBase64,
      }],
    } : {}),
  }

  // Candidate auto-reply
  const candidateEmailPayload = {
    from: FROM_EMAIL,
    to: [email],
    subject: `We received your profile, ${name.split(' ')[0]}! 🎉`,
    html: `
      <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a2e;">
        <div style="background: #6b21a8; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">Profile Received!</h1>
        </div>
        <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 12px 12px;">
          <p style="font-size: 16px; line-height: 1.6;">Hi ${name.split(' ')[0]},</p>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for submitting your profile to <strong>Performa Staffing</strong>. 
            We've added your information to our talent database.
          </p>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Role of Interest:</strong> ${roleInterest}</p>
            <p style="margin: 8px 0 0; font-size: 14px; color: #555;"><strong>Availability:</strong> ${availability || 'As discussed'}</p>
            ${cvFileName ? `<p style="margin: 8px 0 0; font-size: 14px; color: #555;"><strong>CV Received:</strong> ✅ ${cvFileName}</p>` : ''}
          </div>
          <p style="font-size: 15px; line-height: 1.6; color: #444;">
            Our team will review your profile and reach out when a matching opportunity becomes available. 
            In the meantime, feel free to browse our current openings on our website.
          </p>
          <div style="text-align: center; margin: 28px 0;">
            <a href="https://performastaffing.com/careers" style="background: #6b21a8; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
              View Open Roles
            </a>
          </div>
          <p style="font-size: 14px; color: #444; margin-top: 20px;">
            — The Performa Staffing Team<br/>
            <a href="mailto:careers@performastaffing.com" style="color: #6b21a8;">careers@performastaffing.com</a>
          </p>
        </div>
      </div>
    `,
  }

  try {
    const [adminRes, candidateRes] = await Promise.all([
      fetch('https://api.resend.com/emails', { method: 'POST', headers, body: JSON.stringify(adminEmailPayload) }),
      fetch('https://api.resend.com/emails', { method: 'POST', headers, body: JSON.stringify(candidateEmailPayload) }),
    ])

    if (!adminRes.ok) {
      const err = await adminRes.json()
      console.error('Admin email error:', err)
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send notification. Please try again.' }) }
    }

    if (!candidateRes.ok) {
      const err = await candidateRes.json()
      console.error('Candidate email error:', err)
      // Non-fatal — profile still submitted
    }

    return { statusCode: 200, body: JSON.stringify({ message: 'Profile submitted successfully!' }) }
  } catch (err) {
    console.error('submit-profile error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error. Please try again.' }) }
  }
}
