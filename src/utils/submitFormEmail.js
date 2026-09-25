import { FORM_RECIPIENT_EMAIL } from '../config/email.js'

/**
 * Sends form data via FormSubmit (no backend required for testing).
 * For production, swap this implementation or point FORM_RECIPIENT_EMAIL
 * to your organization inbox in src/config/email.js.
 */
export async function submitFormEmail({ subject, fields, replyTo }) {
  const body = new FormData()
  body.append('_subject', subject)
  body.append('_template', 'table')
  body.append('_captcha', 'false')
  if (replyTo) {
    body.append('_replyto', replyTo)
  }
  Object.entries(fields).forEach(([key, value]) => {
    body.append(key, value ?? '')
  })

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FORM_RECIPIENT_EMAIL)}`, {
    method: 'POST',
    body,
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || 'Unable to send your message. Please try again or contact us directly.')
  }
  return data
}
