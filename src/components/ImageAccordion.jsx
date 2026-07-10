import React, { useState } from 'react';

export default function ImageAccordion() {
  const items = [
    { 
      id: 1, 
      title: 'CORTE', 
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 2, 
      title: 'LIMPIEZA', 
      imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 3, 
      title: 'AFEITADO', 
      imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 4, 
      title: 'HERRAMIENTAS', 
      imageUrl: 'https://images.unsplash.com/photo-1512690117906-8d6951759245?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      id: 5, 
      title: 'BARBA', 
      imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600' 
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
                <span className="text-xs md:text-sm font-mono font-bold tracking-widest block text-center">
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
