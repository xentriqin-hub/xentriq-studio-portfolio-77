import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#05050a]/40 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" id="navbar-logo" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-[#0a0a14] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.ibb.co/JwHnypRF/xentriqstudio.png" 
                alt="Xentriq Studio Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white">
                XENTRIQ
              </span>
              <span className="font-mono text-[9px] text-purple-400 tracking-widest font-medium">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-400 hover:text-white transition-colors relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-indigo-500 rounded-full transition-all duration-300 group-hover:w-8" />
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="nav-contact-btn"
              href="#contact"
              className="glass-button-primary text-white font-sans font-medium text-sm py-2.5 px-5 rounded-full flex items-center gap-2 cursor-pointer liquid-reflection"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[73px] left-0 right-0 z-40 md:hidden bg-[#05050a]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-medium text-lg text-gray-300 hover:text-white py-2 border-b border-white/5 flex justify-between items-center"
                >
                  {link.name}
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-button-primary w-full text-white text-center font-display font-medium py-3 rounded-xl flex items-center justify-center gap-2"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
