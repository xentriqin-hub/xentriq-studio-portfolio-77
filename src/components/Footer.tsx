import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Our Story', id: 'about' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Delivery Process', id: 'process' },
    { label: 'Get in Touch', id: 'contact' }
  ];

  return (
    <footer className="relative bg-[#020202] border-t border-white/5 pt-20 pb-10 px-6 md:px-10 z-15">
      
      {/* Decorative Purple Top Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B2FF7]/35 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Upper Column rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Logo brand & Slogan brief */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div 
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit animate-pulse"
            >
              <Logo size={48} />
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold tracking-[0.2em] text-white">XENTRIQ</span>
                <span className="font-mono text-[8px] tracking-[0.45em] text-[#7B2FF7] font-bold">STUDIO</span>
              </div>
            </div>

            <p className="font-sans text-[11px] text-gray-400 max-w-sm leading-relaxed mt-2">
              Xentriq Studio combines luxury aesthetics and custom computer science to deliver ultra-premium, interactive 3D WebGL architectures, and autonomous AI automations.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#7B2FF7] hover:border-[#7B2FF7]/50 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#7B2FF7] hover:border-[#7B2FF7]/50 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#7B2FF7] hover:border-[#7B2FF7]/50 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#7B2FF7] hover:border-[#7B2FF7]/50 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links catalog navigation */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] font-bold text-[#7B2FF7] uppercase">
              INDEX REGISTRY
            </h4>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="font-sans text-[11px] text-gray-400 hover:text-[#7B2FF7] transition-colors text-left font-semibold uppercase tracking-wider cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core corporate contacts info */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[10px] tracking-[0.3em] font-bold text-[#7B2FF7] uppercase">
              GLOBAL OFFICE
            </h4>

            <div className="flex flex-col gap-3 font-sans text-xs text-gray-400">
              <a 
                href="https://wa.me/7824918457?text=Hi%20Xentriq%20Studio%20Team,%20I'm%20interested%20in%20partnering%20on%20a%20luxury%20digital%20solution." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-white transition-colors"
                title="Chat with us on WhatsApp"
              >
                <div className="w-4 h-4 rounded-full bg-[#7B2FF7]/10 flex items-center justify-center shrink-0">
                  <span className="text-[8px] font-bold text-[#7B2FF7]">W</span>
                </div>
                <span>WhatsApp: +91 78249 18457</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7B2FF7] shrink-0" />
                <span>admin@xentriqstudio.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright rows */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-gray-500 tracking-wider">
          <p>© {new Date().getFullYear()} XENTRIQ STUDIO WORLDWIDE. ALL RIGHTS CONSERVED.</p>
          
          <div className="flex gap-6 uppercase select-none">
            <a 
              href="/privacy" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.history.pushState({}, '', '/privacy'); 
                window.dispatchEvent(new Event('popstate')); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.history.pushState({}, '', '/terms'); 
                window.dispatchEvent(new Event('popstate')); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Terms & Conditions
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (window.location.pathname !== '/') { 
                  window.history.pushState({}, '', '/'); 
                  window.dispatchEvent(new Event('popstate')); 
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150); 
                } else { 
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } 
              }} 
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
