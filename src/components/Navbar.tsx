import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Story', id: 'about' },
    { label: 'Featured', id: 'featured-project' },
    { label: 'Stack', id: 'technologies' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 250;
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
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 z-40 transition-all duration-200 ease-out ${
          scrolled 
            ? 'py-3 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/10 shadow-sm' 
            : 'py-5 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group transition-opacity duration-200 hover:opacity-90"
          >
            <Logo size={40} className="transition-transform duration-200 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-white">XENTRIQ</span>
              <span className="font-mono text-[8px] tracking-[0.4em] text-white">STUDIO</span>
            </div>
          </div>

          {/* Desktop Segmented Navigation Controls */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Premium Glass CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-white bg-white/10 hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-200 cursor-pointer"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span 
              className={`h-0.5 bg-white rounded-full transition-all duration-200 ${
                isOpen ? 'w-5 rotate-45 translate-y-[8px]' : 'w-5'
              }`}
            />
            <span 
              className={`h-0.5 bg-white rounded-full transition-all duration-200 ${
                isOpen ? 'opacity-0 w-0' : 'w-4'
              }`}
            />
            <span 
              className={`h-0.5 bg-white rounded-full transition-all duration-200 ${
                isOpen ? 'w-5 -rotate-45 -translate-y-[8px]' : 'w-5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-35 bg-[#050505]/95 backdrop-blur-3xl flex flex-col justify-center p-8 lg:hidden border-b border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5 text-center mt-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-xl tracking-widest uppercase py-2 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3.5 w-full max-w-xs rounded-full font-display text-xs tracking-widest uppercase font-semibold text-white bg-white/10 hover:bg-white hover:text-black border border-white/10 transition-all duration-200 cursor-pointer"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </>
  );
}
