const quickLinks = ['Services', 'Gallery', 'About Us', 'Careers', 'Gift Cards'];
const contactInfo = [
  { label: '123 Craft Street, Downtown', icon: '📍' },
  { label: '+1 (555) 234-5678', icon: '📞' },
  { label: 'hello@artofgrooming.com', icon: '✉️' },
];
const socialIcons = [
  { symbol: '◆', label: 'Facebook' },
  { symbol: '◇', label: 'Twitter' },
  { symbol: '★', label: 'Instagram' },
  { symbol: '●', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0e0e14] font-['Outfit']">
      {/* Gold accent line at top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <h3
              className="text-2xl font-bold tracking-[0.08em] mb-3"
              style={{
                background: 'linear-gradient(135deg, #d4a853, #f5e6c8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              THE ART OF GROOMING
            </h3>
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
                  <span className="text-sm">{social.symbol}</span>
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

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} The Art of Grooming. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-gray-500 text-xs font-light hover:text-[#d4a853] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-500 text-xs font-light hover:text-[#d4a853] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
