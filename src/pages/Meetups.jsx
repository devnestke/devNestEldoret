import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

const filters = ['All', 'Upcoming', 'Completed']

const meetups = [
  {
    id: 'building-ai-agents',
    title: 'Building AI Agents',
    status: 'Upcoming',
    dateLabel: 'Friday, August 28, 2026',
    timeLabel: '5:00 PM - 8:00 PM EAT',
    venue: 'The WorkNest, Naivas, Elgon View Mall',
    summary: 'A live build session covering agent architecture, tools, memory, evaluation, and responsible deployment.',
    outline: [
      'Choosing agent loops and tool patterns',
      'Prompt architecture for multi-step tasks',
      'Shipping an agent-backed demo by the end of the meetup',
    ],
    slidesUrl: '',
    recapUrl: '',
    image: '/images/event-building-ai-agents.jpeg',
  },
  {
    id: 'prompt-engineering-101',
    title: 'Prompt Engineering 101',
    status: 'Completed',
    dateLabel: 'Friday, July 31, 2026',
    timeLabel: '5:00 PM - 8:00 PM EAT',
    venue: 'The WorkNest, Eldoret',
    summary: 'A practical intro to prompt patterns, evaluation loops, and reusable prompt systems for real work.',
    outline: [
      'Reusable prompt structures',
      'Prompt testing and critique loops',
      'Slides and follow-up resources shared with attendees',
    ],
    slidesUrl: 'https://github.com/devnest-eldoret',
    recapUrl: 'https://linkedin.com/company/devnest-eldoret',
    image: '/images/event-photo-table-circle.jpg',
  },
  {
    id: 'codex-meetup',
    title: 'Codex Meetup',
    status: 'Completed',
    dateLabel: 'Thursday, June 25, 2026',
    timeLabel: '5:00 PM - 8:00 PM EAT',
    venue: 'WorkNest Co-Working Space, Eldoret',
    summary: 'A code-first workshop on AI-assisted development, fast iteration loops, and shipping stronger prototypes.',
    outline: [
      'Live coding with AI support',
      'Project recaps from local builders',
      'Photo gallery placeholder for community coverage',
    ],
    slidesUrl: 'https://github.com/devnest-eldoret',
    recapUrl: 'https://youtube.com/@devnest-eldoret',
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

const photoGallery = [
  {
    src: '/images/event-photo-group-1.jpg',
    alt: 'DevNest Eldoret group photo outside The WorkNest after a previous event.',
  },
  {
    src: '/images/event-photo-group-2.jpg',
    alt: 'DevNest Eldoret attendees gathered for a community photo at The WorkNest.',
  },
  {
    src: '/images/event-photo-team-1.jpg',
    alt: 'DevNest Eldoret team members posing beside the event banner.',
  },
  {
    src: '/images/event-photo-team-2.jpg',
    alt: 'DevNest Eldoret community member standing next to the DevNest banner.',
  },
  {
    src: '/images/event-photo-team-3.jpg',
    alt: 'DevNest Eldoret organizer pictured with the DevNest banner at The WorkNest.',
  },
]

export default function Meetups() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')

  const filteredMeetups = useMemo(() => {
    return meetups.filter((meetup) => {
      const matchesStatus = status === 'All' || meetup.status === status
      const text = `${meetup.title} ${meetup.summary} ${meetup.venue}`.toLowerCase()
      const matchesQuery = text.includes(query.trim().toLowerCase())
      return matchesStatus && matchesQuery
    })
  }, [query, status])

  const featured = meetups[0]
  const pastMeetups = meetups.filter((meetup) => meetup.status === 'Completed')

  return (
    <div>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="Meetups & Workshops"
            title="Build with people who care about practical AI and digital execution"
            description="Search sessions, review what has already happened, and lock your seat for the next live workshop."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="relative block">
              <span className="sr-only">Search meetups</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, topic, or venue"
                className="w-full rounded-full border border-slate-200 bg-white px-12 py-3.5 text-sm text-slate-950 outline-none transition focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setStatus(filter)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    status === filter ? 'bg-[#0066FF] text-white' : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <img src={featured.image} alt="" className="h-full min-h-72 w-full object-cover" />
            <div className="p-8 lg:p-10">
              <p className="inline-flex rounded-full bg-[#FF6600]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                Featured Next Meetup
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">{featured.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{featured.summary}</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">{featured.dateLabel}</div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">{featured.venue}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                {featured.outline.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0066FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://kulevents.co.ke/events/building-ai-agents"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
              >
                Get Ticket for {featured.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catalog"
            title="Filter every meetup and workshop"
            description={`${filteredMeetups.length} session${filteredMeetups.length === 1 ? '' : 's'} match your current search.`}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredMeetups.map((meetup) => (
              <article key={meetup.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={meetup.image} alt="" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-950">{meetup.title}</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                      {meetup.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">{meetup.dateLabel}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{meetup.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {meetup.status === 'Upcoming' ? (
                      <a
                        href="https://kulevents.co.ke/events/building-ai-agents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
                      >
                        Get Ticket
                      </a>
                    ) : (
                      <>
                        <a
                          href={meetup.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#0066FF] hover:text-[#0066FF]"
                        >
                          View Slides
                        </a>
                        <a
                          href={meetup.recapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#0066FF] hover:text-[#0066FF]"
                        >
                          View Recap
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Past Sessions"
          title="Key takeaways from Prompt Engineering 101 and Codex Meetup"
          description="Recent sessions focused on reusable prompting systems, AI-assisted development, and faster product iteration."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pastMeetups.map((meetup) => (
            <article key={meetup.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">{meetup.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{meetup.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {meetup.outline.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF6600]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Atmosphere"
            title="More of the people, not just the program"
            description="These image-led blocks give the meetup experience more warmth and make the site feel less like a static event catalog."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {communityMoments.map((moment) => (
              <article key={moment.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={moment.image} alt={moment.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="More photos from previous events"
          description="These additional images give the meetup page a fuller record of the people and atmosphere from past sessions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photoGallery.map((photo) => (
            <article key={photo.src} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover" />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
