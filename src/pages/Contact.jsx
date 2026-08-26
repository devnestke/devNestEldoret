import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

const initialForm = {
  name: '',
  email: '',
  organization: '',
  message: '',
}

const contactLinks = [
  {
    label: 'WhatsApp Inquiries',
    href: 'https://wa.me/254715153310',
    description: 'Send a direct inquiry on WhatsApp: 0715153310',
  },
  {
    label: 'WhatsApp Community',
    href: 'https://chat.whatsapp.com/FA9AB3f3tJCJXvKuFrkWQr?s=cl&p=a&ilr=4',
    description: 'Join the DevNest WhatsApp community',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/devnest-ke/',
    description: 'Follow DevNest Eldoret on LinkedIn',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/devnest-eldoret',
    description: 'Explore projects and code on GitHub',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/devnestke/',
    description: 'See community highlights on Instagram',
  },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="Contact Us"
            title="Partnerships, questions, venue coordination, and community inquiries"
            description="Use this page to reach DevNest Eldoret for collaboration, meetup support, speaking, sponsorship, or general questions."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Visit or reach out</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret hosts community activity at The WorkNest and is open to local partnerships that strengthen
            the tech ecosystem.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">Venue</p>
              <p className="mt-2 text-base font-semibold text-slate-950">The WorkNest, Elgon View Mall, Eldoret</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">Quick Inquiry</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                For the fastest response, send your inquiry on WhatsApp using 0715153310.
              </p>
              <a
                href="https://wa.me/254715153310"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1faa52]"
              >
                Ask on WhatsApp
              </a>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">Community</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ideal for developers, students, founders, entrepreneurs, speakers, and ecosystem partners.
              </p>
            </div>
          </div>
          <img
            src="/images/event-photo-group-discussion.jpg"
            alt="DevNest Eldoret members in a small group discussion during a previous event."
            className="mt-8 h-72 w-full rounded-[28px] border border-slate-200 object-cover"
          />
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Send a message</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Share your inquiry and the form will capture it in React state for now.
          </p>

          <div className="mt-8 grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition hover:border-[#0066FF] hover:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">{link.label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{link.description}</p>
              </a>
            ))}
          </div>

          {submitted ? (
            <div className="mt-8 rounded-[28px] bg-slate-50 p-6 text-sm leading-7 text-slate-700">
              Your message has been captured in state for this demo. Connect this form to your preferred backend,
              email service, or forms platform when ready.
            </div>
          ) : null}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Organization</span>
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea
                required
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <button
              type="submit"
              className="inline-flex rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Partners"
            title="Organizations connected to the community"
            description="These partner logos are now part of the site and can be updated directly in code whenever new partners join."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <img src="/images/partner-worknest.png" alt="The WorkNest Eldoret logo" className="max-h-36 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <img src="/images/partner-ubc.png" alt="UBC logo" className="max-h-36 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
