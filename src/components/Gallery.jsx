import React from 'react';
import { CylinderCarousel } from './ui/cylinder-carousel';

const IMAGES = [
  { src: '/gallery/09a532c7-0f92-42a1-be2b-cd6069cc1341.jpg', alt: 'Gallery Image 1' },
  { src: '/gallery/25faf7d2-2c72-4f40-89da-b091c7f5e98e.jpg', alt: 'Gallery Image 2' },
  { src: '/gallery/35e14792-5c3c-4fb0-8fd6-d5b7e4e52c5e.jpg', alt: 'Gallery Image 3' },
  { src: '/gallery/3ef73e85-b132-4ffc-8580-ee66f819e25d.jpg', alt: 'Gallery Image 4' },
  { src: '/gallery/52576474-bb08-447c-9109-f3370f5103a7.jpg', alt: 'Gallery Image 5' },
  { src: '/gallery/669a7fc8-0070-49a7-8220-0a10b8fd33d9.jpg', alt: 'Gallery Image 6' },
  { src: '/gallery/7d45eeba-399f-4d6c-80fe-78c16793c6b7.jpg', alt: 'Gallery Image 7' },
  { src: '/gallery/98d77452-0c18-4254-9265-52b285f73ac4.jpg', alt: 'Gallery Image 8' },
  { src: '/gallery/IMG_2316.png', alt: 'Gallery Image 9' },
  { src: '/gallery/c2eb5724-cc5b-45f3-b733-fc1ad0c13a79.jpg', alt: 'Gallery Image 10' },
  { src: '/gallery/d1981e8a-66cd-4a2f-a220-4294c9f6ce26.jpg', alt: 'Gallery Image 11' },
  { src: '/gallery/f627d65a-a962-42c6-9faa-884e81b90930.jpg', alt: 'Gallery Image 12' },
  { src: '/gallery/fdf81ce6-977b-410a-89fe-03698c1b7595.jpg', alt: 'Gallery Image 13' },
  { src: '/gallery/291c8a06-ded0-4128-aab0-506c2bb91d06.jpg', alt: 'Gallery Image 14' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 bg-transparent font-['Outfit'] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a853]/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 px-6">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[0.08em] mb-4"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #f5e6c8, #c9944a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            THE GALLERY
          </h2>
          <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          <p className="text-gray-400 mt-6 text-lg font-light max-w-md mx-auto font-satoshi">
            Visualizing the precision, heritage, and atmosphere of our shop.
          </p>
        </div>

        {/* VengenceUI Cylinder Carousel */}
        <div className="min-h-[500px] flex items-center justify-center -mt-20">
          <CylinderCarousel
            images={IMAGES}
            animationDuration={30}
            cardWidth={240}
            cardClassName="shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
