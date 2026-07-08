import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Process', id: 'process' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/75 backdrop-blur-xl border-b border-white/[0.06] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onScrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <img 
              src="https://i.ibb.co/G3TcSTkz/xentriq-studio-intagram-logo.jpg" 
              alt="Xentriq Studio Logo" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-lg object-cover shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Xentriq Studio<span className="text-[#A855F7]">.</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A855F7] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onScrollToSection('contact')}
              className="relative group px-6 py-2.5 rounded-full bg-white text-black font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.02] flex items-center space-x-1.5 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#A855F7] to-[#B497CF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center space-x-1.5 group-hover:text-white transition-colors duration-300">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0c]/90 border-l border-white/[0.06] p-8 flex flex-col justify-between"
            >
              <div className="space-y-8 mt-16">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onScrollToSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-left font-display text-2xl font-semibold tracking-wide transition-colors ${
                        activeSection === item.id ? 'text-[#A855F7]' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <button
                  onClick={() => {
                    onScrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#B497CF] text-white font-sans font-semibold text-center flex items-center justify-center space-x-2"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-gray-500 font-mono">
                  © 2026 Xentriq Studio
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
