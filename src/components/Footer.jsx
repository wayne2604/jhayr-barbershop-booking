import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quickLinks = ['Services', 'Gallery', 'About Us', 'Contact'];
const contactInfo = [
  { label: 'Angcool Water Station, Dipolog City', icon: <img src="/contacts/location-pin-svgrepo-com.svg" alt="Location" className="w-5 h-5 object-contain" /> },
  { label: '+639483498283', icon: <img src="/contacts/call-192-svgrepo-com.svg" alt="Call" className="w-5 h-5 object-contain" /> },
  { label: 'jhaybarber@gmail.com', icon: <img src="/contacts/email-svgrepo-com.svg" alt="Email" className="w-5 h-5 object-contain" /> },
];
const socialIcons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
    label: 'Facebook'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: 'X'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: 'Instagram'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm6.623 7.928l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.928h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.89l5.624-6.812zm9.201-1.464l4.623-3.761v9.484l-4.623-5.723z" />
      </svg>
    ),
    label: 'Gmail'
  },
];

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const renderModalContent = () => {
    if (activeModal === 'privacy') {
      return (
        <div className="space-y-4 text-sm font-light text-gray-300 font-satoshi">
          <h3 className="font-playfair text-2xl font-bold text-white mb-6">Privacy Policy</h3>
          <p>At Jhay Barbershop, your privacy is a top priority. We collect personal information, such as your name, contact details, and appointment history, solely to provide and improve our services.</p>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law.</p>
          <p>All payment processing is securely handled by trusted third-party providers, and we do not store your raw credit card information on our servers.</p>
        </div>
      );
    }
    if (activeModal === 'terms') {
      return (
        <div className="space-y-4 text-sm font-light text-gray-300 font-satoshi">
          <h3 className="font-playfair text-2xl font-bold text-white mb-6">Terms of Service</h3>
          <p>By booking an appointment with Jhay Barbershop, you agree to arrive on time. Appointments late by more than 15 minutes may be subject to cancellation or rescheduling to respect the time of other clients.</p>
          <p>Cancellations must be made at least 24 hours in advance. Failure to do so may result in a cancellation fee applied to your next visit.</p>
          <p>We reserve the right to refuse service to anyone demonstrating inappropriate behavior or posing a health risk to our staff and other clients.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <footer className="relative bg-transparent font-['Outfit']">
      {/* Gold accent line at top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex justify-center max-w-xs mb-6">
              <img
                src="/logo/jhay_logo.png"
                alt="Jhay Barber Shop"
                className="h-32 w-auto object-contain mr-18"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 max-w-xs">
              Where precision meets artistry. A premium barbershop experience crafted
              for the modern gentleman who demands excellence.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#d4a853]/60 border border-[#d4a853]/15 bg-white/[0.03] hover:bg-[#d4a853]/10 hover:border-[#d4a853]/40 hover:text-[#d4a853] transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 text-sm font-light hover:text-[#d4a853] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#d4a853] transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-gray-400 text-sm font-light"
                >
                  <span className="text-base mt-0.5 opacity-70">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-white/60 text-xs font-semibold tracking-[0.1em] uppercase mb-2">
                Hours
              </p>
              <p className="text-gray-400 text-sm font-light">Mon – Fri: 9AM – 7PM</p>
              <p className="text-gray-400 text-sm font-light">Sat: 9AM – 5PM</p>
              <p className="text-gray-500 text-sm font-light">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Jhay Barbershop. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs font-light tracking-wide">
            Developed by:{' '}
            <a
              href="https://rhett-manubag-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a853]/80 hover:text-[#d4a853] hover:underline transition-all duration-300 font-satoshi font-medium"
            >
              Rhett Wayne Manubag
            </a>
          </p>

          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-gray-500 text-xs font-light hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-gray-500 text-xs font-light hover:text-[#d4a853] transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>

    <AnimatePresence>
      {activeModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#121214] border border-[#d4a853]/20 p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden font-['Outfit']"
          >
            {/* Gold Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent opacity-50" />
            
            {renderModalContent()}
            
            <button 
              onClick={() => setActiveModal(null)}
              className="mt-8 w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-[#d4a853]/10 hover:border-[#d4a853]/30 hover:text-[#d4a853] text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 font-satoshi"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Footer;
