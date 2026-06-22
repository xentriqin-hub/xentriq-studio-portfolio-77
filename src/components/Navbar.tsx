import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Story', id: 'about' },
    { label: 'Stack', id: 'technologies' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detector based on viewport boundaries
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#020202]/70 backdrop-blur-md border-b border-[#D4AF37]/15' 
            : 'py-5 bg-transparent'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Logo size={40} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-white">XENTRIQ</span>
              <span className="font-mono text-[8px] tracking-[0.4em] text-[#D4AF37]">STUDIO</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-2 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-xs tracking-wider uppercase transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-[#D4AF37]' : 'text-gray-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeBubbleNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="relative px-6 py-2.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] hover:scale-[1.03] transition-all overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] cursor-pointer"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span 
              className={`h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                isOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
              }`}
            />
            <span 
              className={`h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                isOpen ? 'opacity-0 w-0' : 'w-4'
              }`}
            />
            <span 
              className={`h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                isOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-5'
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-35 bg-[#020202] flex flex-col justify-center p-8 lg:hidden border-b border-[#D4AF37]/15"
          >
            <nav className="flex flex-col gap-6 text-center mt-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-display text-2xl tracking-widest uppercase transition-colors ${
                    activeSection === item.id ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-3 w-full max-w-xs rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#C59B27] cursor-pointer"
              >
                Start Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
