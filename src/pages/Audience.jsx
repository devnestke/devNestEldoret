import SectionHeading from '../components/SectionHeading.jsx'
import { audienceSegments } from '../data/siteData.js'

export default function Audience() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="Audience"
            title="Tailored value for developers, students, entrepreneurs, and founders"
            description="DevNest Eldoret is structured around what each group needs to learn faster, build better, and move with more confidence."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {audienceSegments.map((segment, index) => (
            <article key={segment.title} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr]">
                <img src={segment.image} alt="" className="h-full min-h-64 w-full rounded-[28px] object-cover" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{segment.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{segment.description}</p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                    {segment.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0066FF]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
