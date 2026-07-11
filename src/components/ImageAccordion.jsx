import React, { useState } from 'react';

export default function ImageAccordion() {
  const items = [
    {
      id: 1,
      title: 'CUT',
      imageUrl: '/hero_images/first.JPG'
    },
    {
      id: 2,
      title: 'CLIPPER',
      imageUrl: '/hero_images/second.JPG'
    },
    {
      id: 3,
      title: 'CROP',
      imageUrl: '/hero_images/third.JPG'
    },
    {
      id: 4,
      title: 'CLEAN',
      imageUrl: '/hero_images/fourth.JPG'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full flex justify-center items-center py-4">
      {/* Main Accordion Container */}
      <div className="flex w-full h-[500px] gap-2 md:gap-3 overflow-hidden">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative h-full overflow-hidden rounded-2xl border border-[#d4a853]/10 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isHovered ? 'flex-[3.5] grayscale-0 border-[#d4a853]/40 shadow-[0_0_30px_rgba(212,168,83,0.15)]' : 'flex-1 grayscale'}
                ${isAnyHovered && !isHovered ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'}
              `}
            >
              {/* Background Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay (Darkens unhovered cards to match your screenshots) */}
              <div
                className={`absolute inset-0 transition-colors duration-500
                  ${isHovered ? 'bg-black/10' : 'bg-black/40'}
                `}
              />

              {/* Text Label Layer */}
              <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/90 text-white border border-[#d4a853]/30 px-6 py-2 shadow-xl transition-all duration-500 whitespace-nowrap z-10
                  ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}
                `}
              >
                <span className="font-ibm text-xs md:text-sm font-bold tracking-widest block text-center">
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
