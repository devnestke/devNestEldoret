import SectionHeading from "../components/SectionHeading.jsx";
import { learningTracks } from "../data/siteData.js";

export default function Curriculum() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <SectionHeading
            eyebrow="Curriculum"
            title="AI and digital skills paths designed for students and developers"
            description="Each track combines structured learning, live practice, and clear module breakdowns so progress is visible before the next meetup even starts."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">
              Learning Path
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              From foundations to shipping
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The curriculum moves from prompt systems and agent workflows into
              full-stack implementation so learners can connect ideas to shipped
              products.
            </p>
            <img
              src="/images/curriculum-path.svg"
              alt="Illustrated roadmap showing prompt architecture, autonomous agents, and full-stack development."
              className="mt-8 h-auto w-full rounded-[28px] border border-slate-200 bg-white"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="grid gap-6">
            {learningTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {track.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Estimated duration: {track.duration}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    Progress preview: {track.progress}%
                  </p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#0066FF]"
                    style={{ width: `${track.progress}%` }}
                  />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {track.modules.map((module) => (
                    <div
                      key={module}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
