import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-12 bg-transparent font-['Outfit']">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#d4a853]/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[0.08em] mb-4"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #f5e6c8, #c9944a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            GET IN TOUCH
          </h2>
          <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          <p className="text-gray-400 mt-6 text-lg font-light max-w-md mx-auto font-satoshi">
            Bookings, inquiries, or feedback — we’re here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column — Info & Map */}
          <div className="flex flex-col justify-between gap-10">
            {/* Info details */}
            <div className="space-y-8">
              <h3 className="font-playfair text-white text-2xl md:text-3xl font-semibold tracking-wide leading-snug">
                Visit the Chair, Elevate Your Style
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-xl text-[#d4a853] bg-[#d4a853]/5 border border-[#d4a853]/15 w-12 h-12 rounded-full flex items-center justify-center">
                    📍
                  </span>
                  <div>
                    <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Our Location</h4>
                    <p className="text-gray-400 text-sm font-light font-satoshi">123 Craft Street, Downtown, Suite 100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl text-[#d4a853] bg-[#d4a853]/5 border border-[#d4a853]/15 w-12 h-12 rounded-full flex items-center justify-center">
                    📞
                  </span>
                  <div>
                    <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Call Us</h4>
                    <p className="text-gray-400 text-sm font-light font-satoshi">+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl text-[#d4a853] bg-[#d4a853]/5 border border-[#d4a853]/15 w-12 h-12 rounded-full flex items-center justify-center">
                    ✉️
                  </span>
                  <div>
                    <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Email Info</h4>
                    <p className="text-gray-400 text-sm font-light font-satoshi">hello@artofgrooming.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-white/5 h-64 bg-neutral-950/40 flex items-center justify-center group shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
              {/* Map background style */}
              <div 
                className="absolute inset-0 bg-repeat bg-center opacity-10 bg-[size:20px_20px]"
                style={{
                  backgroundImage: 'radial-gradient(rgba(212, 168, 83, 0.4) 1px, transparent 1px)',
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                <span className="text-[#d4a853] text-4xl mb-4 animate-bounce">📍</span>
                <span className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Downtown Workshop</span>
                <span className="text-gray-500 text-xs font-light tracking-wide mb-4">34.0522° N, 118.2437° W</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg border border-[#d4a853]/30 bg-[#d4a853]/5 text-[#d4a853] hover:bg-[#d4a853] hover:text-[#121214] text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Message Form */}
          <div className="glass p-8 md:p-10 rounded-2xl border-[#d4a853]/15 shadow-3d-lg relative overflow-hidden">
            {/* Top gold glow stripe */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853]/50 to-transparent" />

            <h3 className="font-playfair text-white text-xl font-bold tracking-wide mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2 font-satoshi">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2 font-satoshi">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2 font-satoshi">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full relative px-6 py-4 rounded-lg font-semibold tracking-[0.15em] uppercase text-xs text-[#121214] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #d4a853, #c9944a)',
                }}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin text-sm">◆</span> Sending...
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              {/* Success notification */}
              {isSubmitted && (
                <div className="text-center text-xs text-[#d4a853] tracking-wider uppercase font-semibold font-satoshi mt-4 animate-pulse">
                  Thank you! We will get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
