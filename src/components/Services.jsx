import { useDispatch } from 'react-redux';
import { setService, openModal } from '../store/bookingSlice';

const services = [
  {
    name: 'Classic Cut',
    price: 50,
    icon: '/services_images/scissors-svgrepo-com.svg',
    description: 'Timeless precision cut tailored to your face shape and personal style.',
  },
  {
    name: 'Beard Sculpt',
    price: 50,
    icon: '/services_images/grinding-beard-svgrepo-com.svg',
    description: 'Expert beard shaping and detailing for the distinguished gentleman.',
  },
  {
    name: 'Hot Towel Shave',
    price: 50,
    icon: '/services_images/straight-razor-svgrepo-com.svg',
    description: 'Luxurious straight-razor shave with hot towels and premium oils.',
  },
  {
    name: 'Hair & Beard Combo',
    price: 50,
    icon: '/services_images/barber-pole-svgrepo-com.svg',
    description: 'Complete grooming package — precision cut paired with beard sculpting.',
  },
  {
    name: 'Fade Mastery',
    price: 50,
    icon: '/services_images/razor-barber-svgrepo-com.svg',
    description: 'Seamless gradient fades from skin to length, crafted to perfection.',
  },
  {
    name: 'Premium Package',
    price: 300,
    icon: '/services_images/crown-svgrepo-com.svg',
    description: 'The ultimate experience — cut, shave, facial treatment, and styling.',
  },
];

const Services = () => {
  const dispatch = useDispatch();

  const handleServiceClick = (serviceName) => {
    dispatch(setService(serviceName));
    dispatch(openModal());
  };

  return (
    <section id="services" className="relative py-24 px-6 lg:px-12 bg-transparent font-['Outfit']">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a853]/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[0.08em] mb-4"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #f5e6c8, #c9944a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            OUR SERVICES
          </h2>
          <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          <p className="font-satoshi text-gray-400 mt-6 text-lg font-light max-w-md mx-auto">
            Masterful grooming services designed for the modern gentleman
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              onClick={() => handleServiceClick(service.name)}
              className="group relative cursor-pointer rounded-xl border-l-[3px] border-l-[#d4a853]/40 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-[#d4a853]/60 hover:border-l-[#d4a853] hover:shadow-[0_8px_40px_rgba(212,168,83,0.15)]"
              style={{
                background: 'rgba(18, 18, 20, 0.6)',
                perspective: '800px',
                transform: 'rotateX(2deg) rotateY(-3deg)',
                transition: 'all 500ms cubic-bezier(0.23, 1, 0.32, 1)',
                animation: `serviceSlideIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(-12px) translateZ(20px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateX(2deg) rotateY(-3deg)';
              }}
            >
              {/* Decorative top-right corner triangle */}
              <div
                className="absolute top-0 right-0 w-0 h-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  borderLeft: '40px solid transparent',
                  borderTop: '40px solid rgba(212, 168, 83, 0.3)',
                  borderRadius: '0 0.75rem 0 0',
                }}
              />

              {/* Gold dot grid background pattern */}
              <div 
                className="absolute inset-0 bg-repeat bg-center opacity-10 bg-[size:20px_20px] pointer-events-none rounded-xl"
                style={{
                  backgroundImage: 'radial-gradient(rgba(212, 168, 83, 0.4) 1px, transparent 1px)',
                }}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-5 transition-transform duration-500 group-hover:scale-110 flex items-center justify-start">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-12 h-12 object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(212, 168, 83, 0.3))',
                    }}
                  />
                </div>

                {/* Service name */}
                <h3 className="text-white text-xl font-semibold tracking-wide mb-2 group-hover:text-[#f5e6c8] transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-satoshi text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #d4a853, #c9944a)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ₱{service.price}
                  </span>
                  <span className="font-satoshi text-gray-500 text-sm font-light">/session</span>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute bottom-8 right-8 text-[#d4a853]/0 group-hover:text-[#d4a853]/70 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes serviceSlideIn {
          from {
            opacity: 0;
            transform: rotateX(8deg) rotateY(-6deg) translateY(30px);
          }
          to {
            opacity: 1;
            transform: rotateX(2deg) rotateY(-3deg) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
