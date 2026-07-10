import { useDispatch } from 'react-redux';
import { openModal } from '../store/bookingSlice';
import ImageAccordion from './ImageAccordion';

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] font-['Outfit']">
      {/* Radial glow backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#d4a853]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-[#c9944a]/4 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#d4a853]/[0.02] blur-[150px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gold circles */}
        <div
          className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-[#d4a853]/40"
          style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[35%] left-[5%] w-1.5 h-1.5 rounded-full bg-[#c9944a]/30"
          style={{ animation: 'heroFloat 5s ease-in-out 1s infinite' }}
        />
        <div
          className="absolute top-[60%] left-[15%] w-1 h-1 rounded-full bg-[#d4a853]/50"
          style={{ animation: 'heroFloat 3.5s ease-in-out 0.5s infinite' }}
        />
        <div
          className="absolute top-[25%] right-[8%] w-2.5 h-2.5 rounded-full bg-[#d4a853]/20"
          style={{ animation: 'heroFloat 6s ease-in-out 2s infinite' }}
        />
        <div
          className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#c9944a]/35"
          style={{ animation: 'heroFloat 4.5s ease-in-out 1.5s infinite' }}
        />

        {/* Floating gold lines */}
        <div
          className="absolute top-[45%] left-[8%] w-8 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853]/40 to-transparent"
          style={{ animation: 'heroFloat 5s ease-in-out 0.8s infinite' }}
        />
        <div
          className="absolute top-[70%] right-[12%] w-12 h-[1px] bg-gradient-to-r from-transparent via-[#c9944a]/30 to-transparent"
          style={{ animation: 'heroFloat 4s ease-in-out 2.5s infinite' }}
        />
        <div
          className="absolute top-[20%] left-[40%] w-6 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853]/25 to-transparent rotate-45"
          style={{ animation: 'heroFloat 5.5s ease-in-out 1.2s infinite' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left — text content */}
        <div className="flex-1 max-w-xl" style={{ transform: 'translateZ(50px)' }}>
          <p className="text-[#d4a853]/70 tracking-[0.35em] uppercase text-sm mb-4 font-light">
            Premium Barbershop Experience
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-[0.06em] leading-[1.1] mb-6"
            style={{
              background: 'linear-gradient(135deg, #d4a853 0%, #f5e6c8 40%, #c9944a 70%, #d4a853 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            THE ART
            <br />
            OF GROOMING
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
            Where precision meets artistry. Elevate your style with master craftsmen
            who sculpt confidence, one cut at a time.
          </p>

          <button
            onClick={() => dispatch(openModal())}
            className="group relative px-10 py-4 rounded-lg font-semibold tracking-[0.15em] uppercase text-sm text-[#0a0a0f] transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #c9944a)',
            }}
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-[#d4a853]/40" />
          </button>
        </div>

        {/* Right — Image Accordion */}
        <div className="flex-1 w-full max-w-2xl">
          <ImageAccordion />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
