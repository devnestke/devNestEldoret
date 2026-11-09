import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";

const missionPrinciples = [
  "Teach practical AI and digital skills with real shipping pressure.",
  "Create a local builder network that compounds through collaboration.",
  "Help more people in Eldoret move from curiosity to execution.",
];

const founders = [
  {
    name: "Stephen Ngobia",
    role: "Co-Founder",
    image: "/images/founder-stephen.svg",
    summary:
      "Software engineer and entrepreneur building practical technology and a stronger local developer community.",
    bio: "Stephen Ngobia, Founder & Community Lead, DevNest Eldoret. Stephen Ngobia is a software engineer, entrepreneur, and technology community builder passionate about creating practical solutions through software, artificial intelligence, and innovation. He is the Founder of Unique Brand Creatives (UBC), the company behind platforms including KulEvents and iGig, and currently serves as an AI & Data Specialist at Assent. Stephen is also building TARI (Tax & Revenue Intelligence), an AI-powered assistant designed to help governments and organizations make smarter, data-driven revenue decisions. Through DevNest Eldoret, Stephen is committed to building a thriving developer ecosystem where students, professionals, founders, and innovators can learn, collaborate, and create meaningful technology that solves real-world problems.",
  },
  {
    name: "Victoria Mutai",
    role: "Co-Founder",
    image: "/images/founder-victoria.jpeg",
    summary:
      "Software engineer and mentor focused on inclusive technology, women in STEM, and emerging developers.",
    bio: "Victoria Mutai is a software engineer and technology leader with 6+ years of experience building digital solutions across fintech, agritech, and AI-powered systems. She works across modern software ecosystems including web, mobile, and data platforms, but her focus goes beyond engineering. She is deeply committed to using technology as a tool for access, opportunity, and meaningful impact. Victoria is a strong advocate for women in STEM, an active mentor to emerging developers, and a regular contributor to tech communities across Africa through talks, panels, and ecosystem engagements. At DevNest Eldoret, she is a community builder, passionate about strengthening developer ecosystems and supporting the next generation of builders.",
  },
  {
    name: "Danson Maina",
    role: "Co-Founder",
    image: "/images/founder-danson.svg",
    summary:
      "Technology leader helping teams adopt AI and automation while building opportunities for the local tech community.",
    bio: "Danson Maina is a technology leader passionate about the practical adoption of artificial intelligence and the power of communities to drive innovation. In his role at Assent, he leads Data Services and Quality Assurance initiatives, focusing on quality, operational excellence, and scalable technology delivery. Beyond his corporate role, he is the founder of Express AI Consulting, where he helps SMEs and professionals adopt AI and automation through consulting, training, and workflow transformation. He is also a co-founder of DevNest Eldoret, a community dedicated to growing the developer and AI ecosystem across Eldoret and the wider Rift Valley. Outside of his professional work, Danson is deeply committed to community leadership. He serves as the Vice President of Public Relations at Eldoret Toastmasters Club and is the Incoming Vice President of the Rotaract Club of Eldoret. Through these leadership roles, he has developed a passion for building thriving communities, creating opportunities for learning and collaboration, and connecting people around shared purpose. His mission is to make AI accessible, practical, and impactful while helping build communities where people can learn, lead, and create meaningful change together.",
  },
];

export default function About() {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const dialogRef = useRef(null);
  const dialogTitleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedFounder && !dialog.open) dialog.showModal();
    if (!selectedFounder && dialog.open) dialog.close();
  }, [selectedFounder]);

  return (
    <div>
      <section className="border-b border-blue-200 bg-[#e8f1ff]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="About"
            title="A local community built to strengthen the Eldoret tech ecosystem"
            description="DevNest Eldoret exists to help more builders learn practical AI and digital skills, form stronger collaborations, and ship useful work with discipline."
          />
        </div>
      </section>

      <section className="border-b border-orange-200 bg-[#fff1e6]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Leadership"
            title="Founding team"
            description="Meet the people building DevNest Eldoret and supporting the next generation of local builders."
          />
          <div className="mt-10 grid gap-x-6 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="border-t border-slate-200 pt-6"
              >
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  className="h-48 w-full object-cover sm:h-52"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
                    {founder.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    {founder.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {founder.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFounder(founder)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:text-[#0050cc] focus:outline-none focus:ring-4 focus:ring-[#0066FF]/15"
                    aria-haspopup="dialog"
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="pt-2">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Mission and principles
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret is designed to turn interest into competence and
            competence into shipped work that strengthens the local ecosystem.
          </p>
          <figure className="mt-6">
            <img
              src="/images/event-photo-team-1-optimized.jpg"
              alt="DevNest Eldoret members gathered at a community event."
              className="aspect-[16/9] w-full rounded-md object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-xs leading-5 text-slate-500">
              DevNest members building community in Eldoret
            </figcaption>
          </figure>
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">
              Home Base
            </p>
            <p className="mt-3 text-base font-semibold text-slate-950">
              The WorkNest, Elgon View Mall, Eldoret
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Meetups and community sessions are hosted here to keep the
              learning experience grounded, accessible, and in-person.
            </p>
          </div>
          <ul className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
            {missionPrinciples.map((principle) => (
              <li
                key={principle}
                className="py-4 text-sm leading-6 text-slate-700"
              >
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Working style
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret is intentionally practical. Sessions are designed
            around real build time, peer learning, and honest technical
            conversations that help people improve quickly.
          </p>
          <div className="mt-8 space-y-4">
            <div className="border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700">
              Members show up to learn by doing: shipping small builds,
              reviewing ideas live, and connecting across student, developer,
              and founder communities.
            </div>
            <div className="border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700">
              For partnerships, speaking, venue coordination, or community
              inquiries, use the dedicated contact page.
            </div>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
            >
              Go to Contact Us
            </Link>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClose={() => setSelectedFounder(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/50"
      >
        {selectedFounder ? (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
                  {selectedFounder.role}
                </p>
                <h2
                  id={dialogTitleId}
                  className="mt-2 text-2xl font-semibold text-slate-950"
                >
                  {selectedFounder.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
                aria-label="Close biography"
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              {selectedFounder.bio}
            </p>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
