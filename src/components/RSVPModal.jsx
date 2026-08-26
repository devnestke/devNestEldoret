import { useEffect, useId, useState } from 'react'
import { X } from 'lucide-react'

const initialState = {
  name: '',
  email: '',
  role: '',
}

export default function RSVPModal({ isOpen, onClose, meetupTitle = 'Building AI Agents' }) {
  const titleId = useId()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setForm(initialState)
      setErrors({})
      setSubmitted(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  function validate() {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.role) nextErrors.role = 'Select your role.'

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">RSVP</p>
            <h3 id={titleId} className="mt-2 text-2xl font-semibold text-slate-950">
              Join {meetupTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
            aria-label="Close RSVP form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-3xl bg-slate-50 p-6">
            <p className="text-lg font-semibold text-slate-950">You are on the list.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We will send meetup details to <span className="font-medium text-slate-950">{form.email}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 inline-flex rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
                placeholder="Your full name"
              />
              {errors.name ? <span className="mt-2 block text-sm text-[#FF6600]">{errors.name}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
                placeholder="you@example.com"
              />
              {errors.email ? <span className="mt-2 block text-sm text-[#FF6600]">{errors.email}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Role</span>
              <select
                name="role"
                value={form.role}
                onChange={updateField}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              >
                <option value="">Select your role</option>
                <option value="Developer">Developer</option>
                <option value="Student">Student</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Founder">Founder</option>
              </select>
              {errors.role ? <span className="mt-2 block text-sm text-[#FF6600]">{errors.role}</span> : null}
            </label>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
            >
              Confirm RSVP
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
