import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import meetups from "../data/meetups.js";

const filters = ["All", "Upcoming", "Completed"];

export default function Meetups() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filteredMeetups = useMemo(() => {
    return meetups.filter((meetup) => {
      const matchesStatus = status === "All" || meetup.status === status;
      const text =
        `${meetup.title} ${meetup.summary} ${meetup.venue}`.toLowerCase();
      const matchesQuery = text.includes(query.trim().toLowerCase());
      return matchesStatus && matchesQuery;
    });
  }, [query, status]);

  return (
    <div>
      <section className="border-b border-blue-200 bg-[#e8f1ff]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
                    status === filter
                      ? "bg-[#0066FF] text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-orange-200 bg-[#fff7ef]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionHeading
            eyebrow="Meetup schedule"
            title="Upcoming and past events"
            description="Browse upcoming sessions and revisit previous DevNest meetups."
          />
          <div className="mt-5 divide-y divide-slate-200">
            {filteredMeetups.map((meetup) => (
              <article
                key={meetup.id}
                className="grid gap-4 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-6"
              >
                <img
                  src={meetup.image}
                  alt={`${meetup.title} event image`}
                  className="h-44 w-full rounded-md object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {meetup.title}
                    </h3>
                    <span
                      className={`shrink-0 text-xs font-semibold uppercase tracking-[0.16em] ${meetup.status === "Upcoming" ? "text-[#0066FF]" : "text-slate-500"}`}
                    >
                      {meetup.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    {meetup.dateLabel}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {meetup.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {meetup.status === "Upcoming" ? (
                      <a
                        href={meetup.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
                      >
                        Get Ticket
                      </a>
                    ) : null}
                    {meetup.photosUrl ? (
                      <a
                        href={meetup.photosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#0066FF] hover:text-[#0066FF]"
                      >
                        View Photos
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
