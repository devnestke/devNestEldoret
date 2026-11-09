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

  const upcomingMeetup = filteredMeetups.find(
    (meetup) => meetup.status === "Upcoming",
  );
  const completedMeetups = filteredMeetups.filter(
    (meetup) => meetup.status === "Completed",
  );

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

      {upcomingMeetup ? (
        <section className="border-y border-blue-200 bg-[#e8f1ff]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
            <img
              src={upcomingMeetup.image}
              alt={`${upcomingMeetup.title} event poster`}
              className="aspect-[1170/570] w-full rounded-md object-contain"
              loading="eager"
              decoding="async"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F807B]">
                Upcoming event
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {upcomingMeetup.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {upcomingMeetup.summary}
              </p>
              <div className="mt-6 grid gap-4 border-t border-blue-200 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Date
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">
                    {upcomingMeetup.dateLabel}
                  </p>
                </div>
                {upcomingMeetup.venue ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Venue
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-950">
                      {upcomingMeetup.venue}
                    </p>
                  </div>
                ) : null}
              </div>
              <a
                href={upcomingMeetup.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#0066FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
              >
                Get Ticket
              </a>
            </div>
          </div>
        </section>
      ) : null}

      {completedMeetups.length > 0 ? (
        <section className="border-b border-orange-200 bg-[#fff7ef]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <SectionHeading
              eyebrow="Past events"
              title="Previous meetups"
              description="Browse past sessions and open event photo albums."
            />
            <div className="mt-5 divide-y divide-orange-200">
              {completedMeetups.map((meetup) => {
                const date = new Date(`${meetup.dateISO}T12:00:00Z`);
                const day = new Intl.DateTimeFormat("en", {
                  day: "2-digit",
                  timeZone: "UTC",
                }).format(date);
                const month = new Intl.DateTimeFormat("en", {
                  month: "short",
                  timeZone: "UTC",
                }).format(date);
                const weekday = new Intl.DateTimeFormat("en", {
                  weekday: "short",
                  timeZone: "UTC",
                }).format(date);

                return (
                  <article
                    key={meetup.id}
                    className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 py-5 sm:grid-cols-[4rem_minmax(0,1fr)_7rem_auto] sm:items-center sm:gap-x-5"
                  >
                    <div className="row-span-2 flex h-16 w-14 flex-col items-center justify-center rounded-md bg-[#4064AF] text-white sm:row-span-1 sm:h-[4.5rem] sm:w-16">
                      <span className="text-[0.65rem] font-semibold uppercase">
                        {weekday}
                      </span>
                      <span className="text-2xl font-semibold leading-7">
                        {day}
                      </span>
                      <span className="text-[0.65rem] font-semibold uppercase">
                        {month}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {meetup.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {meetup.summary}
                      </p>
                      {meetup.venue ? (
                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {meetup.venue}
                        </p>
                      ) : null}
                    </div>
                    <img
                      src={meetup.image}
                      alt=""
                      className="col-start-2 h-16 w-28 rounded object-cover sm:col-start-auto"
                      loading="lazy"
                      decoding="async"
                    />
                    {meetup.photosUrl ? (
                      <a
                        href={meetup.photosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-start-2 inline-flex text-sm font-semibold text-[#4064AF] hover:text-[#0F807B] sm:col-start-auto"
                      >
                        View Photos
                      </a>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {filteredMeetups.length === 0 ? (
        <p className="mx-auto max-w-7xl px-4 py-12 text-sm text-slate-600 sm:px-6 lg:px-8">
          No meetups match your search.
        </p>
      ) : null}
    </div>
  );
}
