import React from 'react';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'BESPOKE GROOMING' },
    { number: '1k+', label: 'Satisfied Clients' },
  ];

  return (
    <section id="about-us" className="relative py-24 px-6 lg:px-12 bg-transparent font-['Outfit'] overflow-hidden">
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
            Founded by master barber and owner Henson Loqueza, JHAY BARBERSHOP represent the pinnacle of authentic craftsmanship. We don't just cut hair; we shape identities and restore confidence.
          </p>

          <p className="font-satoshi text-gray-400 text-base leading-relaxed mb-10 font-light">
            He materfully blends classic, straight-razor techniques with the contemporary styling trends. Every haircut, shave, and sculpt is executed with absolute precision, using premium imported products to nourish your skin and hair.
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
          {/* SVG Clip Path for Baroque Frame Silhouette */}
          <svg width="0" height="0" className="absolute pointer-events-none">
            <defs>
              <clipPath id="baroque-frame" clipPathUnits="objectBoundingBox">
                {/* Wavy, curvy, sharp-cornered baroque shield path */}
                <path d="M 0.5 0 Q 0.65 0, 0.75 0.1 Q 0.9 0, 0.95 0.15 Q 0.85 0.35, 0.85 0.5 Q 0.85 0.65, 0.95 0.85 Q 0.9 1, 0.75 0.9 Q 0.65 1, 0.5 1 Q 0.35 1, 0.25 0.9 Q 0.1 1, 0.05 0.85 Q 0.15 0.65, 0.15 0.5 Q 0.15 0.35, 0.05 0.15 Q 0.1 0, 0.25 0.1 Q 0.35 0, 0.5 0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Main image container - Thick 3D Molding Picture Frame */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center iso-card z-10 mt-6 mb-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
            
            {/* 1. Outer Gold Bevel (Edge of the frame) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#d4a853] via-[#8c651b] to-[#3a2211]"
              style={{ clipPath: 'url(#baroque-frame)' }}
            />

            {/* 2. Deep Shadow Groove (Creates 3D molding separation) */}
            <div 
              className="absolute inset-[6px] bg-gradient-to-br from-[#2a180b] to-[#0a0603]"
              style={{ clipPath: 'url(#baroque-frame)' }}
            />

            {/* 3. Main Thick Gold Ridge (The heavy shiny part of the frame) */}
            <div 
              className="absolute inset-[12px] bg-gradient-to-tr from-[#8c651b] via-[#d4a853] to-[#f2d07e]"
              style={{ clipPath: 'url(#baroque-frame)' }}
            />

            {/* 4. Inner Dark Bevel (Sloping down to the canvas) */}
            <div 
              className="absolute inset-[30px] bg-gradient-to-bl from-[#5c3a21] to-[#1a0f07]"
              style={{ clipPath: 'url(#baroque-frame)' }}
            />

            {/* 5. The Inner Canvas/Photo Area (Deeply recessed, thick borders achieved!) */}
            <div 
              className="absolute inset-[36px] bg-[#0a0603] flex items-center justify-center overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,1)]"
              style={{ clipPath: 'url(#baroque-frame)' }}
            >
              <img
                src="/owner/owner.png"
                alt="Jhay Barber Shop Owner"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Gold dot grid background overlay */}
              <div
                className="absolute inset-0 bg-repeat bg-center opacity-30 pointer-events-none"
                style={{
                  backgroundSize: '20px 20px',
                  backgroundImage: 'radial-gradient(rgba(212, 168, 83, 0.4) 1px, transparent 1px)',
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>
            
          </div>

          {/* Floating Stats Overlay Card */}
          <div 
            className="absolute z-20 bottom-[-50px] sm:bottom-[-30px] right-2 sm:right-[15%] p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#d4a853]/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)] transform translate-z-[50px] border border-[#d4a853]/30 overflow-hidden backdrop-blur-sm"
            style={{ background: 'rgba(18, 18, 20, 0.6)' }}
          >
            {/* Gold dot grid background pattern */}
            <div
              className="absolute inset-0 bg-repeat bg-center opacity-10 bg-[size:20px_20px] pointer-events-none rounded-xl"
              style={{
                backgroundImage: 'radial-gradient(rgba(212, 168, 83, 0.4) 1px, transparent 1px)',
              }}
            />
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col items-center justify-center relative z-10 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''}`}>
                <span className="text-[#d4a853] text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-[0_2px_4px_rgba(212,168,83,0.3)]">
                  {stat.number}
                </span>
                <span className="text-white/60 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase mt-1">
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
