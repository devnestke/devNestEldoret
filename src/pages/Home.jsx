import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

const meetups = [
  {
    id: 'building-ai-agents',
    title: 'Building AI Agents',
    status: 'Upcoming',
    dateLabel: 'Friday, August 28, 2026',
    venue: 'The WorkNest, Naivas, Elgon View Mall',
    summary: 'A live build session covering agent architecture, tools, memory, evaluation, and responsible deployment.',
    image: '/images/event-building-ai-agents.jpeg',
  },
  {
    id: 'prompt-engineering-101',
    title: 'Prompt Engineering 101',
    status: 'Completed',
    dateLabel: 'Friday, July 31, 2026',
    venue: 'The WorkNest, Eldoret',
    summary: 'A practical intro to prompt patterns, evaluation loops, and reusable prompt systems for real work.',
    image: '/images/event-photo-table-circle.jpg',
  },
  {
    id: 'codex-meetup',
    title: 'Codex Meetup',
    status: 'Completed',
    dateLabel: 'Thursday, June 25, 2026',
    venue: 'WorkNest Co-Working Space, Eldoret',
    summary: 'A code-first workshop on AI-assisted development, fast iteration loops, and shipping stronger prototypes.',
    image: '/images/event-photo-group-discussion.jpg',
  },
]

const communityMoments = [
  {
    title: 'Hands-on Workshops',
    description: 'Live coding, prompt teardown sessions, and practical build time where members work shoulder to shoulder.',
    image: '/images/event-photo-session-room.jpg',
  },
  {
    title: 'Small Group Mentoring',
    description: 'Students, founders, and developers get direct feedback in smaller conversations that feel personal.',
    image: '/images/event-photo-table-circle.jpg',
  },
  {
    title: 'Builder Networking',
    description: 'The community is designed to feel human first, with room for conversation, collaboration, and follow-through.',
    image: '/images/event-photo-group-discussion.jpg',
  },
]

export default function Home() {
  const featured = meetups[0]

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(0,102,255,0.18),_transparent_28%),linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[#FF6600]/20 bg-[#FF6600]/10 px-4 py-2 text-sm font-semibold text-[#FF6600]">
              NEXT MEETUP: BUILDING AI AGENTS
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Build. Learn. Ship. Master AI &amp; Digital Skills in Eldoret.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A practical community for builders who want stronger AI skills, sharper digital execution, and real
              products shipped with local momentum.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://kulevents.co.ke/events/building-ai-agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
              >
                Get Ticket for Next Meetup
              </a>
              <Link
                to="/meetups"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-[#0066FF] hover:text-[#0066FF]"
              >
                Explore Meetups
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CalendarDays className="h-4 w-4 text-[#0066FF]" />
                  <span>{featured.dateLabel}</span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-[#FF6600]" />
                  <span>{featured.venue}</span>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">What happens here</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Live demos, prompt systems, agent architecture, peer critique, and practical launch workflows hosted at The WorkNest.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-4 h-24 rounded-full bg-[#0066FF]/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_32px_80px_rgba(15,23,42,0.12)]">
              <img
                src="/images/hero-ai-community.png"
                alt="AI-generated image of young African builders collaborating in a bright coworking space."
                className="h-[420px] w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Meetups"
          title="Upcoming and past sessions built around applied learning"
          description="Every session is designed to leave attendees with clearer systems, stronger confidence, and something tangible to keep building."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {meetups.map((meetup) => (
            <article key={meetup.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img src={meetup.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                    {meetup.status}
                  </span>
                  <span className="text-sm text-slate-500">{meetup.dateLabel}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{meetup.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{meetup.summary}</p>
                <div className="mt-5">
                  <Link to="/meetups" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF]">
                    View meetup details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Community"
            title="A more human picture of how DevNest feels on the ground"
            description="The site now gives more visual space to people learning together, building together, and meeting in person at The WorkNest."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {communityMoments.map((moment) => (
              <article key={moment.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                  <img src={moment.image} alt={moment.title} className="h-64 w-full object-cover" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{moment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Partners"
          title="Built with local ecosystem partners"
          description="DevNest Eldoret works alongside organizations that support community learning, practical events, and stronger execution in Eldoret."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <img src="/images/partner-worknest.png" alt="The WorkNest Eldoret logo" className="h-32 w-auto object-contain" />
            <h3 className="mt-6 text-2xl font-semibold text-slate-950">The WorkNest Eldoret</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Our hosting and community space partner, giving DevNest a physical home for meetups, workshops, and in-person learning.
            </p>
          </article>
          <article className="flex flex-col items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <img src="/images/partner-ubc.png" alt="UBC logo" className="h-32 w-auto object-contain" />
            <h3 className="mt-6 text-2xl font-semibold text-slate-950">UBC</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              A supporting partner helping drive builder visibility, engagement, and event momentum across the local ecosystem.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
