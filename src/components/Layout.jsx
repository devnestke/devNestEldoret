import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { cn } from "../lib/cn.js";
import partners from "../data/partners.js";
import SeoManager from "./SeoManager.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Meetups", to: "/meetups" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/devnest-ke/" },
  { label: "GitHub", href: "https://github.com/devnest-eldoret" },
  { label: "Instagram", href: "https://www.instagram.com/devnestke/" },
  { label: "TikTok", href: "https://www.tiktok.com/@devnest.eldoret" },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/FA9AB3f3tJCJXvKuFrkWQr?s=cl&p=a&ilr=4",
  },
];

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.25 3.9 3.25 5.03C3.25 6.15 4.16 7.06 5.23 7.06H5.25C6.34 7.06 7.25 6.15 7.25 5.03C7.23 3.9 6.34 3 5.25 3ZM20.75 12.58C20.75 9.41 19.06 7.94 16.81 7.94C14.99 7.94 14.18 8.95 13.73 9.66V8.5H10.35C10.39 9.27 10.35 20 10.35 20H13.73V13.58C13.73 13.24 13.75 12.89 13.85 12.65C14.12 11.97 14.74 11.26 15.79 11.26C17.17 11.26 17.72 12.32 17.72 13.88V20H21.1V13.49C21.1 13.14 21.09 12.83 20.75 12.58Z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.476 2 2 6.589 2 12.253C2 16.785 4.865 20.63 8.839 21.987C9.339 22.082 9.521 21.767 9.521 21.497C9.521 21.255 9.512 20.457 9.507 19.584C6.726 20.208 6.139 18.216 6.139 18.216C5.685 17.032 5.029 16.718 5.029 16.718C4.121 16.083 5.097 16.096 5.097 16.096C6.101 16.17 6.629 17.154 6.629 17.154C7.521 18.717 8.97 18.266 9.539 18.003C9.63 17.333 9.889 16.876 10.175 16.617C7.955 16.356 5.62 15.462 5.62 11.479C5.62 10.345 6.015 9.418 6.66 8.687C6.555 8.424 6.208 7.366 6.759 5.933C6.759 5.933 7.599 5.654 9.509 6.983C10.31 6.752 11.17 6.637 12.026 6.634C12.882 6.637 13.742 6.752 14.544 6.983C16.452 5.654 17.29 5.933 17.29 5.933C17.842 7.366 17.495 8.424 17.39 8.687C18.036 9.418 18.429 10.345 18.429 11.479C18.429 15.472 16.089 16.353 13.863 16.609C14.223 16.931 14.544 17.565 14.544 18.536C14.544 19.93 14.531 21.055 14.531 21.497C14.531 21.769 14.711 22.086 15.218 21.986C19.19 20.627 22.053 16.784 22.053 12.253C22.053 6.589 17.576 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2H16.25C19.5637 2 22 4.43629 22 7.75V16.25C22 19.5637 19.5637 22 16.25 22H7.75C4.43629 22 2 19.5637 2 16.25V7.75C2 4.43629 4.43629 2 7.75 2ZM7.5 4C5.567 4 4 5.567 4 7.5V16.5C4 18.433 5.567 20 7.5 20H16.5C18.433 20 20 18.433 20 16.5V7.5C20 5.567 18.433 4 16.5 4H7.5ZM17.25 5.5C17.9404 5.5 18.5 6.05964 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05964 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.84 3C15.06 4.86 16.11 6.04 17.83 6.15V8.72C16.84 8.81 15.96 8.48 15.16 8V13.19C15.16 19.79 7.98 21.85 5.09 17.12C3.23 14.07 4.37 8.72 9.58 8.53V11.24C9.18 11.31 8.75 11.41 8.39 11.54C7.31 11.96 6.69 12.91 6.86 14.12C7.19 16.44 10.76 17.13 11.42 13.52C11.53 12.92 11.49 12.31 11.49 11.69V3H14.84Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.55 2 2.08 6.46 2.08 11.96C2.08 13.72 2.54 15.43 3.42 16.93L2 22L7.22 20.63C8.64 21.41 10.24 21.82 11.96 21.82H12.04C17.53 21.82 22 17.36 22 11.86C22 6.36 17.53 2 12.04 2ZM17.89 15.99C17.65 16.65 16.54 17.25 15.95 17.34C15.54 17.41 15.02 17.44 13.33 16.74C11.29 15.89 9.96 13.81 9.86 13.68C9.77 13.56 9.04 12.59 9.04 11.58C9.04 10.57 9.57 10.08 9.76 9.89C9.96 9.7 10.19 9.65 10.33 9.65C10.46 9.65 10.6 9.65 10.71 9.66C10.82 9.66 10.97 9.62 11.12 9.97C11.27 10.33 11.64 11.34 11.69 11.44C11.74 11.54 11.77 11.66 11.7 11.79C11.64 11.91 11.6 11.98 11.49 12.1C11.39 12.21 11.28 12.34 11.19 12.44C11.09 12.55 10.98 12.66 11.12 12.9C11.26 13.13 11.75 13.93 12.48 14.57C13.42 15.39 14.22 15.66 14.47 15.77C14.72 15.87 14.86 15.85 14.99 15.7C15.12 15.56 15.54 15.07 15.69 14.84C15.84 14.61 16 14.65 16.21 14.73C16.42 14.8 17.56 15.36 17.79 15.48C18.02 15.6 18.17 15.66 18.23 15.77C18.29 15.88 18.13 16.53 17.89 15.99Z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SeoManager />
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0" aria-label="DevNest Eldoret home">
            <img
              src="/devnest_logo.png"
              alt="DevNest Eldoret logo"
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-slate-100 text-slate-950"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://kulevents.co.ke/events/devnest-build-a-thon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
            >
              Join Next Meetup
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-slate-100 text-slate-950"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://kulevents.co.ke/events/devnest-build-a-thon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 inline-flex justify-center rounded-full bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0050cc]"
              >
                Join Next Meetup
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-[#102a43] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-4 py-10 sm:px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img
              src="/devnest_logo.png"
              alt="DevNest Eldoret logo"
              className="h-10 w-auto"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF6600]">
              Build. Learn. Ship.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
              A community in Eldoret for building practical AI and digital
              skills together.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Explore
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Partners
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Visit
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <span>Eldoret, Kenya</span>
              <a
                href="https://wa.me/254715153310"
                className="transition hover:text-white"
              >
                WhatsApp: 0715 153 310
              </a>
              <Link to="/contact" className="transition hover:text-white">
                Contact the team
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-white hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/254715153310"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition hover:bg-[#1faa52] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
        aria-label="Ask on WhatsApp at 0715153310"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/16">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        <span className="hidden sm:inline">Ask on WhatsApp</span>
      </a>
    </div>
  );
}
