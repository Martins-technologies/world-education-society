import { FORM_RECIPIENT_EMAIL } from '../config/email.js'

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${encodeURIComponent(FORM_RECIPIENT_EMAIL)}`
const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(FORM_RECIPIENT_EMAIL)}`
const GENERIC_ERROR = 'Unable to send your message. Please try again or contact us directly.'

/**
 * Flattens sections into ordered FormSubmit fields, using a heading row per
 * section so the notification email reads as grouped blocks.
 */
function fieldsFromSections(sections) {
  const fields = {}
  sections.forEach((section) => {
    fields[`— ${section.title.toUpperCase()} —`] = ' '
    section.items.forEach((item) => {
      fields[item.label] = item.value === 0 ? '0' : item.value || '—'
    })
  })
  return fields
}

function buildMetaFields({ subject, replyTo }) {
  const meta = {
    _subject: subject,
    _template: 'box',
    _captcha: 'false',
  }
  if (replyTo) meta._replyto = replyTo
  return meta
}

/**
 * FormSubmit's AJAX endpoint discards uploads, so submissions carrying a file
 * post a real multipart form into a hidden iframe instead.
 */
function submitWithAttachments({ subject, replyTo, fields, files }) {
  return new Promise((resolve) => {
    const frameName = `wes-form-${Date.now()}`
    const iframe = document.createElement('iframe')
    iframe.setAttribute('name', frameName)
    iframe.setAttribute('aria-hidden', 'true')
    iframe.src = 'about:blank'
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    const form = document.createElement('form')
    form.action = FORMSUBMIT_ENDPOINT
    form.method = 'POST'
    form.enctype = 'multipart/form-data'
    form.target = frameName
    form.style.display = 'none'

    const addHidden = (name, value) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value ?? ''
      form.appendChild(input)
    }

    Object.entries(buildMetaFields({ subject, replyTo })).forEach(([key, value]) => addHidden(key, value))
    Object.entries(fields).forEach(([key, value]) => addHidden(key, value))

    files.forEach((file) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.name = 'attachment'
      const transfer = new DataTransfer()
      transfer.items.add(file)
      input.files = transfer.files
      form.appendChild(input)
    })

    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      window.clearTimeout(fallbackId)
      iframe.remove()
      form.remove()
      resolve({ success: true })
    }

    document.body.appendChild(form)
    form.submit()
    const submittedAt = Date.now()

    // The response is cross-origin, so a load event is the only signal we get.
    iframe.addEventListener('load', () => {
      if (Date.now() - submittedAt < 400) return
      finish()
    })
    // Some browsers never fire load for the posted frame; the POST is already sent.
    const fallbackId = window.setTimeout(finish, 6000)
  })
}

async function submitWithoutAttachments({ subject, replyTo, fields }) {
  const body = new FormData()
  Object.entries(buildMetaFields({ subject, replyTo })).forEach(([key, value]) => body.append(key, value))
  Object.entries(fields).forEach(([key, value]) => body.append(key, value))

  const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
    method: 'POST',
    body,
    headers: { Accept: 'application/json' },
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || GENERIC_ERROR)
  }
  return data
}

/**
 * Sends a website form to the recipient in src/config/email.js.
 * Pass `sections` for grouped output and `files` for attachments.
 */
export async function submitFormEmail({ subject, replyTo, sections = [], fields = {}, files = [] }) {
  const payload = sections.length > 0 ? { ...fieldsFromSections(sections), ...fields } : fields
  const attachments = files.map((entry) => (entry instanceof File ? entry : entry?.file)).filter((file) => file instanceof File && file.size > 0)

  const canAttach = typeof DataTransfer !== 'undefined' && typeof document !== 'undefined'
  if (attachments.length > 0 && canAttach) {
    return submitWithAttachments({ subject, replyTo, fields: payload, files: attachments })
  }
  return submitWithoutAttachments({ subject, replyTo, fields: payload })
}

/** Collects files from a live form's file inputs, then sends via {@link submitFormEmail}. */
export async function submitFormFromElement({
  form,
  subject,
  replyTo,
  sections = [],
  fields = {},
  fileFieldNames = ['attachment', 'resume'],
  extraFiles = [],
}) {
  const data = new FormData(form)
  const files = []
  const alreadyAdded = (file) => files.some((f) => f.name === file.name && f.size === file.size)

  fileFieldNames.forEach((name) => {
    data.getAll(name).forEach((value) => {
      if (value instanceof File && value.size > 0 && !alreadyAdded(value)) files.push(value)
    })
  })
  extraFiles.forEach((file) => {
    if (file instanceof File && file.size > 0 && !alreadyAdded(file)) files.push(file)
  })

  return submitFormEmail({ subject, replyTo, sections, fields, files })
}
