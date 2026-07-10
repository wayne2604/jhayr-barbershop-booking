import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ── Ambient light layers ── */}
      <div className="ambient-layer" aria-hidden="true" />

      {/* ── Structural grid lines ── */}
      <div className="grid-lines" aria-hidden="true" />

      {/* ── Navigation Bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d4a853]/30"
              style={{
                background: 'linear-gradient(135deg, rgba(212,168,83,0.15), rgba(201,148,74,0.05))',
              }}
            >
              <span className="text-lg font-bold text-gold-gradient">N</span>
            </div>
            <span className="text-lg font-semibold tracking-[0.15em] text-white/90 transition-colors duration-300 group-hover:text-[#d4a853]">
              NOIR
            </span>
          </a>

          {/* Links */}
          <div className="hidden items-center gap-8 md:flex">
            {['Services', 'Gallery', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                id={`nav-${link.toLowerCase()}`}
                className="relative text-sm font-medium tracking-wider text-white/60 transition-colors duration-300 hover:text-[#d4a853]
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#d4a853] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button
            id="nav-book-btn"
            className="hidden rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wider text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] md:block"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #c9944a)',
            }}
          >
            BOOK NOW
          </button>

          {/* Mobile hamburger */}
          <button className="flex flex-col gap-1.5 md:hidden" id="nav-mobile-toggle" aria-label="Toggle menu">
            <span className="h-[2px] w-6 bg-[#d4a853]/80 transition-transform duration-300" />
            <span className="h-[2px] w-4 bg-[#d4a853]/60 transition-transform duration-300" />
            <span className="h-[2px] w-5 bg-[#d4a853]/70 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="relative z-10">
        <Hero />
        <Services />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Booking Modal (portal-like, above everything) ── */}
      <Booking />
    </div>
  );
}
