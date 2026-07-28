import { useState } from 'react'

const destinations = ['Canada', 'USA', 'UK', 'Australia', 'New Zealand', 'Germany', 'Ireland', 'Europe', 'UAE', 'Not sure yet']

export default function EnquiryForm({ tone = 'light' }) {
  const [status, setStatus] = useState('idle')

  const isDark = tone === 'dark'
  const fieldClass = isDark
    ? 'w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none'
    : 'w-full rounded-xl border border-navy-800/12 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 focus:border-ocean-500 focus:outline-none'
  const labelClass = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-white/60' : 'text-navy-500'}`

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to CRM / contact-form endpoint (see Developer Notes)
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className={`rounded-2xl p-6 text-center ${isDark ? 'bg-white/10' : 'bg-leaf-100'}`}>
        <p className={`font-display text-lg font-semibold ${isDark ? 'text-white' : 'text-navy-800'}`}>
          Thanks — we&rsquo;ve got your details.
        </p>
        <p className={`mt-1 text-sm ${isDark ? 'text-white/70' : 'text-navy-600'}`}>
          A counsellor will reach out within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="full-name">Full name</label>
        <input id="full-name" name="full-name" type="text" required placeholder="Jordan Lee" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" placeholder="+92 300 1234567" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="destination">Preferred destination</label>
        <select id="destination" name="destination" className={fieldClass} defaultValue="">
          <option value="" disabled>Choose a country</option>
          {destinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">What would you like help with?</label>
        <textarea id="message" name="message" rows={3} placeholder="e.g. MSc in Data Science, scholarship options" className={fieldClass} />
      </div>
      <button type="submit" className="btn-primary sm:col-span-2">
        Book my free consultation
      </button>
    </form>
  )
}
