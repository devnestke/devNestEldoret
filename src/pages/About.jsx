import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

const missionPrinciples = [
  'Teach practical AI and digital skills with real shipping pressure.',
  'Create a local builder network that compounds through collaboration.',
  'Help more people in Eldoret move from curiosity to execution.',
]

const founders = [
  {
    name: 'Stephen Ngobia',
    role: 'Co-Founder',
    image: '/images/founder-stephen.svg',
    bio: 'Stephen Ngobia, Founder & Community Lead, DevNest Eldoret. Stephen Ngobia is a software engineer, entrepreneur, and technology community builder passionate about creating practical solutions through software, artificial intelligence, and innovation. He is the Founder of Unique Brand Creatives (UBC), the company behind platforms including KulEvents and iGig, and currently serves as an AI & Data Specialist at Assent. Stephen is also building TARI (Tax & Revenue Intelligence), an AI-powered assistant designed to help governments and organizations make smarter, data-driven revenue decisions. Through DevNest Eldoret, Stephen is committed to building a thriving developer ecosystem where students, professionals, founders, and innovators can learn, collaborate, and create meaningful technology that solves real-world problems.',
  },
  {
    name: 'Victoria Mutai',
    role: 'Co-Founder',
    image: '/images/founder-victoria.svg',
    bio: 'Victoria Mutai is a software engineer and technology leader with 6+ years of experience building digital solutions across fintech, agritech, and AI-powered systems. She works across modern software ecosystems including web, mobile, and data platforms, but her focus goes beyond engineering. She is deeply committed to using technology as a tool for access, opportunity, and meaningful impact. Victoria is a strong advocate for women in STEM, an active mentor to emerging developers, and a regular contributor to tech communities across Africa through talks, panels, and ecosystem engagements. At DevNest Eldoret, she is a community builder, passionate about strengthening developer ecosystems and supporting the next generation of builders.',
  },
  {
    name: 'Danson Maina',
    role: 'Co-Founder',
    image: '/images/founder-danson.svg',
    bio: 'Danson Maina is a technology leader passionate about the practical adoption of artificial intelligence and the power of communities to drive innovation. In his role at Assent, he leads Data Services and Quality Assurance initiatives, focusing on quality, operational excellence, and scalable technology delivery. Beyond his corporate role, he is the founder of Express AI Consulting, where he helps SMEs and professionals adopt AI and automation through consulting, training, and workflow transformation. He is also a co-founder of DevNest Eldoret, a community dedicated to growing the developer and AI ecosystem across Eldoret and the wider Rift Valley. Outside of his professional work, Danson is deeply committed to community leadership. He serves as the Vice President of Public Relations at Eldoret Toastmasters Club and is the Incoming Vice President of the Rotaract Club of Eldoret. Through these leadership roles, he has developed a passion for building thriving communities, creating opportunities for learning and collaboration, and connecting people around shared purpose. His mission is to make AI accessible, practical, and impactful while helping build communities where people can learn, lead, and create meaningful change together.',
  },
]

export default function About() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="About"
            title="A local community built to strengthen the Eldoret tech ecosystem"
            description="DevNest Eldoret exists to help more builders learn practical AI and digital skills, form stronger collaborations, and ship useful work with discipline."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Mission and principles</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret is designed to turn interest into competence and competence into shipped work that
            strengthens the local ecosystem.
          </p>
          <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">Home Base</p>
            <p className="mt-3 text-base font-semibold text-slate-950">The WorkNest, Elgon View Mall, Eldoret</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Meetups and community sessions are hosted here to keep the learning experience grounded, accessible, and in-person.
            </p>
          </div>
          <ul className="mt-8 space-y-4">
            {missionPrinciples.map((principle) => (
              <li key={principle} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
                {principle}
              </li>
            ))}
          </ul>
          <img
            src="/images/event-photo-session-room.jpg"
            alt="DevNest Eldoret members gathered around a workshop table during a previous event."
            className="mt-8 h-72 w-full rounded-[28px] border border-slate-200 object-cover"
          />
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Working style</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DevNest Eldoret is intentionally practical. Sessions are designed around real build time, peer learning,
            and honest technical conversations that help people improve quickly.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              Members show up to learn by doing: shipping small builds, reviewing ideas live, and connecting across
              student, developer, and founder communities.
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              For partnerships, speaking, venue coordination, or community inquiries, use the dedicated contact page.
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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Leadership"
            title="Founding team"
            description="Each profile includes space for a photo and a short bio, so the site feels more personal and grounded."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {founders.map((founder) => (
              <article key={founder.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={founder.image} alt={`Portrait placeholder for ${founder.name}`} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6600]">{founder.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{founder.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{founder.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
