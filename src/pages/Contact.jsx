import { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import partners from "../data/partners.js";

const initialForm = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

const contactLinks = [
  {
    label: "WhatsApp Inquiries",
    href: "https://wa.me/254715153310",
    description: "Send a direct inquiry on WhatsApp: 0715153310",
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/FA9AB3f3tJCJXvKuFrkWQr?s=cl&p=a&ilr=4",
    description: "Join the DevNest WhatsApp community",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devnest-ke/",
    description: "Follow DevNest Eldoret on LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/devnest-eldoret",
    description: "Explore projects and code on GitHub",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devnestke/",
    description: "See community highlights on Instagram",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div>
      <section className="border-b border-blue-200 bg-[#e8f1ff]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="Contact Us"
            title="Partnerships, questions, venue coordination, and community inquiries"
            description="Use this page to reach DevNest Eldoret for collaboration, meetup support, speaking, sponsorship, or general questions."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Visit or reach out
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret hosts community activity at The WorkNest and is open
            to local partnerships that strengthen the tech ecosystem.
          </p>
          <figure className="mt-6">
            <img
              src="/images/event-photo-group-discussion-optimized.jpg"
              alt="DevNest members sharing ideas in a small group discussion."
              className="aspect-[16/9] w-full rounded-md object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-xs leading-5 text-slate-500">
              Community conversations at The WorkNest
            </figcaption>
          </figure>
          <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
            <div className="py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                Venue
              </p>
              <p className="mt-2 text-base font-semibold text-slate-950">
                The WorkNest, Elgon View Mall, Eldoret
              </p>
            </div>
            <div className="py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                Quick Inquiry
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                For the fastest response, send your inquiry on WhatsApp using
                0715153310.
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
            <div className="py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                Community
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ideal for developers, students, founders, entrepreneurs,
                speakers, and ecosystem partners.
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Send a message
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This form is a demo and does not send messages yet. For a response,
            contact us using the links above.
          </p>

          <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 transition hover:text-[#0066FF]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                  {link.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          {submitted ? (
            <div className="mt-8 border-l-2 border-[#FF6600] pl-4 text-sm leading-7 text-slate-700">
              Your message was not sent because this demo form is not connected
              to an inbox. Please contact us using one of the links above.
            </div>
          ) : null}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </span>
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
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Organization
              </span>
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </span>
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

      <section className="border-t border-emerald-200 bg-[#eaf5f1]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Partners"
            title="Organizations connected to the community"
          />
          <div className="mt-8 divide-y divide-emerald-200 border-t border-emerald-200">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-4 py-5 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-6"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website`}
                  className="group flex h-16 w-16 items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#0066FF]/15 sm:w-24"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 max-w-20 object-contain transition-transform group-hover:scale-[1.03] sm:max-w-24"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div>
                  <h3 className="text-sm font-semibold text-slate-950 transition-colors group-hover:text-[#0066FF]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {partner.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
