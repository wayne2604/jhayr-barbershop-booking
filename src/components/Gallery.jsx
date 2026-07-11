import React from 'react';
import { CylinderCarousel } from './ui/cylinder-carousel';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    alt: 'The Master Cut',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600',
    alt: 'Precision Detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600',
    alt: 'Classic Straight Razor',
  },
  {
    src: 'https://images.unsplash.com/photo-1512690117906-8d6951759245?auto=format&fit=crop&q=80&w=600',
    alt: 'Crafted Tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600',
    alt: 'Modern Fade',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600',
    alt: 'The Classic Shop',
  },
  {
    src: 'https://images.unsplash.com/photo-1517832606299-7ae9b620a186?auto=format&fit=crop&q=80&w=600',
    alt: 'Barber Supplies',
  },
  {
    src: 'https://images.unsplash.com/photo-1593702288056-ccbfb434446b?auto=format&fit=crop&q=80&w=600',
    alt: 'Shop Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600',
    alt: 'Hair Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1520338661084-ce39c1048b61?auto=format&fit=crop&q=80&w=600',
    alt: 'Professional Trim',
  },
  {
    src: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?auto=format&fit=crop&q=80&w=600',
    alt: 'Barber Chair',
  },
  {
    src: 'https://images.unsplash.com/photo-1633364951167-27b2b0a94b57?auto=format&fit=crop&q=80&w=600',
    alt: 'Sharp Edges',
  },
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
