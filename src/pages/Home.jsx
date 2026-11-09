import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import partners from "../data/partners.js";

const communityMoments = [
  {
    title: "Hands-on Workshops",
    description:
      "Live coding, prompt teardown sessions, and practical build time where members work shoulder to shoulder.",
    image: "/images/event-photo-session-room-optimized.jpg",
  },
  {
    title: "Small Group Mentoring",
    description:
      "Students, founders, and developers get direct feedback in smaller conversations that feel personal.",
    image: "/images/event-photo-table-circle-optimized.jpg",
  },
  {
    title: "Builder Networking",
    description:
      "The community is designed to feel human first, with room for conversation, collaboration, and follow-through.",
    image: "/images/event-photo-group-discussion-optimized.jpg",
  },
];

const communityPrinciples = [
  {
    title: "Learn by doing",
    description:
      "Work through practical AI and software challenges, with time to test ideas and ask better questions.",
  },
  {
    title: "Share what you know",
    description:
      "Present works in progress, exchange feedback, and learn from the paths other builders have taken.",
  },
  {
    title: "Build with others",
    description:
      "Meet peers, mentors, and collaborators who can help move promising ideas into useful products.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-blue-200 bg-[#e8f1ff]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              A home for builders to learn, collaborate, and ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              DevNest brings students, developers, and founders together to
              explore technology, share practical knowledge, and build useful
              things for the world around them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/meetups"
                className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
              >
                Explore Meetups
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:text-[#0066FF]"
              >
                About DevNest
              </Link>
            </div>

            <div className="mt-10 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-3">
              <p className="text-sm leading-6 text-slate-600">
                Practical AI and digital skills
              </p>
              <p className="text-sm leading-6 text-slate-600">
                Peer learning and mentorship
              </p>
              <p className="text-sm leading-6 text-slate-600">
                A stronger local builder network
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-4 h-24 rounded-full bg-[#0066FF]/12 blur-3xl" />
            <img
              src="/images/event-photo-team-1-optimized.jpg"
              alt="DevNest Eldoret team members at a community event."
              className="relative h-80 w-full rounded-2xl object-cover object-[center_35%] sm:h-[420px]"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff1e6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <SectionHeading
            eyebrow="How we work"
            title="Turn curiosity into capability"
            description="DevNest is a place to practice, share progress, and make technology useful beyond the room."
          />
          <div className="mt-10 grid gap-x-10 sm:grid-cols-3">
            {communityPrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="border-t border-slate-200 py-5"
              >
                <p className="text-sm font-semibold text-[#FF6600]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-200 bg-[#eaf5f1]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <SectionHeading
            eyebrow="In the community"
            title="A community built through shared work"
            description="Join hands-on workshops, small-group mentoring, and conversations with fellow builders at The WorkNest."
            align="center"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {communityMoments.map((moment) => (
              <article key={moment.title}>
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="h-64 w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {moment.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {moment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf1ff]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <SectionHeading
            eyebrow="Partners"
            title="Built with local ecosystem partners"
            description="DevNest Eldoret works alongside organizations that support community learning, practical events, and stronger execution in Eldoret."
            align="center"
          />
          <div className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="border-t border-blue-200 py-5"
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name} website`}
                  className="group flex h-16 w-32 items-center justify-start focus:outline-none focus:ring-4 focus:ring-[#0066FF]/15"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 max-w-32 object-contain transition-transform group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <h3 className="mt-2 text-sm font-semibold text-slate-950">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
