/**
 * Netlify Function: Newsletter Subscription via Resend
 * POST { email: string }
 *
 * Env vars required (Netlify → Site settings → Environment variables):
 *   RESEND_API_KEY    — your Resend API key (re_xxxx)
 *   RESEND_FROM_EMAIL — verified sender, e.g. "Performa Staffing <hello@performastaffing.com>"
 *   ADMIN_EMAIL       — where to notify of new subscribers (default: contact@performastaffing.com)
 */

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  let email
  try {
    const body = JSON.parse(event.body)
    email = body.email
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) }
  }

  const API_KEY = process.env.RESEND_API_KEY
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Performa Staffing <hello@performastaffing.com>'
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@performastaffing.com'

  if (!API_KEY) {
    console.error('Missing RESEND_API_KEY')
    return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) }
  }

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  }

  try {
    // Send both emails in parallel: confirmation to subscriber + notification to admin

    const sendConfirmation = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're on the list! 🎉 — Performa Staffing",
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a2e;">
            <div style="background: #6b21a8; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">Welcome to the Performa Community!</h1>
            </div>
            <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; line-height: 1.6;">Hey there,</p>
              <p style="font-size: 16px; line-height: 1.6;">
                You're officially subscribed to <strong>HR Insights by Performa Staffing</strong>.
                Every week, you'll get expert tips, hiring trends, and resources to help you build and retain top talent.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">First issue lands in your inbox on Tuesday. 📬</p>
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://performastaffing.com" style="background: #6b21a8; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                  Visit Our Website
                </a>
              </div>
              <p style="font-size: 13px; color: #666; margin-top: 24px;">
                If you didn't subscribe, you can safely ignore this email.
                To unsubscribe, reply with "unsubscribe" in the subject line.
              </p>
              <p style="font-size: 14px; color: #444; margin-top: 8px;">
                — The Performa Staffing Team<br/>
                <a href="mailto:contact@performastaffing.com" style="color: #6b21a8;">contact@performastaffing.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    })

    const sendAdminNotification = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `📬 New Newsletter Subscriber: ${email}`,
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h2 style="color: #6b21a8;">New Subscriber</h2>
            <p style="font-size: 15px;">Someone just subscribed to the Performa newsletter:</p>
            <p style="font-size: 18px; font-weight: bold; color: #1a1a2e;">${email}</p>
            <p style="font-size: 13px; color: #888;">Time: ${new Date().toISOString()}</p>
          </div>
        `,
      }),
    })

    const [confirmRes, adminRes] = await Promise.all([sendConfirmation, sendAdminNotification])

    if (!confirmRes.ok) {
      const errData = await confirmRes.json()
      console.error('Resend confirmation error:', errData)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send confirmation. Please try again.' }),
      }
    }

    if (!adminRes.ok) {
      // Non-fatal — log but don't fail the subscriber experience
      const errData = await adminRes.json()
      console.error('Resend admin notification error:', errData)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscribed! Check your inbox for a confirmation.' }),
    }
  } catch (err) {
    console.error('Subscribe function error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error. Please try again.' }),
    }
  }
}
