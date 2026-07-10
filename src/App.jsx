import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AnimatedNavFramer from './components/AnimatedNavFramer';
import FallingHair from './components/FallingHair';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ── Ambient light layers ── */}
      <div className="ambient-layer" aria-hidden="true" />

      {/* ── Structural grid lines ── */}
      <div className="grid-lines" aria-hidden="true" />

      {/* ── Dynamic falling/floating hair strands ── */}
      <FallingHair />

      {/* ── Floating Navigation Menu ── */}
      <AnimatedNavFramer />

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
