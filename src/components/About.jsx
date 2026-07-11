import React from 'react';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5', label: 'Master Barbers' },
    { number: '15k+', label: 'Satisfied Clients' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 bg-transparent font-['Outfit'] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d4a853]/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#c9944a]/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column — Text */}
        <div className="flex-1 max-w-xl">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[0.08em] mb-4"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #f5e6c8, #c9944a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            OUR HERITAGE
          </h2>
          <div className="w-20 h-[2px] bg-[#d4a853] mb-8" />

          <h3 className="font-playfair text-white text-2xl md:text-3xl font-semibold tracking-wide mb-6 leading-snug">
            Where Precision Meets Heritage and Style
          </h3>

          <p className="font-satoshi text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-light">
            Founded on the values of authentic craftsmanship and timeless refinement, Jhay Barber Shop represents the pinnacle of modern grooming. We don't just cut hair; we shape identities and restore confidence.
          </p>

          <p className="font-satoshi text-gray-400 text-base leading-relaxed mb-10 font-light">
            Our master barbers blend classic, straight-razor techniques with contemporary styling trends. Every haircut, shave, and sculpt is executed with absolute attention to detail, using premium imported products to nourish your skin and hair.
          </p>

          {/* Key values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#d4a853] text-lg">◆</span>
              <span className="text-white text-sm font-semibold tracking-wider font-satoshi">Master Straight Shaves</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#d4a853] text-lg">◆</span>
              <span className="text-white text-sm font-semibold tracking-wider font-satoshi">Bespoke Hair Sculpting</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#d4a853] text-lg">◆</span>
              <span className="text-white text-sm font-semibold tracking-wider font-satoshi">Premium Styling Oils</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#d4a853] text-lg">◆</span>
              <span className="text-white text-sm font-semibold tracking-wider font-satoshi">Complimentary Hot Towel</span>
            </div>
          </div>
        </div>

        {/* Right Column — Cards and Images */}
        <div className="flex-1 w-full relative flex items-center justify-center mt-8 lg:mt-0">
          {/* Main image container - Luxury Brown Gold Frame */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] bg-gradient-to-br from-[#5c3a21] via-[#3a2211] to-[#1a0f07] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-sm border-[2px] border-[#d4a853]/60 iso-card">
            {/* Inner frame */}
            <div className="w-full h-full border-[6px] border-double border-[#d4a853]/90 p-2 bg-[#0a0603] shadow-[inset_0_0_30px_rgba(0,0,0,1)]">
              {/* Photo Area */}
              <div className="w-full h-full relative overflow-hidden border border-[#d4a853]/40 shadow-inner">
                <img
                  src="/owner/owner.png"
                  alt="Jhay Barber Shop Owner"
                  className="w-full h-full object-cover object-center"
                />
                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#d4a853]/20 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Floating Stats Overlay Card */}
          <div className="absolute bottom-[-30px] right-[5%] sm:right-[15%] bg-[#121214] p-6 rounded-xl flex gap-6 divide-x divide-[#d4a853]/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)] transform translate-z-[50px] border border-[#d4a853]/30">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col items-center justify-center ${idx > 0 ? 'pl-6' : ''}`}>
                <span className="text-[#d4a853] text-3xl font-extrabold tracking-tight drop-shadow-[0_2px_4px_rgba(212,168,83,0.3)]">
                  {stat.number}
                </span>
                <span className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
