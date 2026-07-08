import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, MessageSquareCode } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Software Development', id: 'services' },
    { label: 'Web Applications', id: 'services' },
    { label: 'Mobile Engineering', id: 'services' },
    { label: 'AI Solutions', id: 'services' },
    { label: 'UI / UX Design', id: 'services' },
  ];

  const studioLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Process Model', id: 'process' },
    { label: 'About Agency', id: 'about' },
    { label: 'Start Project', id: 'contact' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/[0.04] pt-20 pb-12 relative overflow-hidden px-6 md:px-12">
      {/* Subtle radial background highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.04]">
          
          {/* Logo & Narrative Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left">
            <div 
              onClick={() => onScrollToSection('home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <img 
                src="https://i.ibb.co/G3TcSTkz/xentriq-studio-intagram-logo.jpg" 
                alt="Xentriq Studio Logo" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg object-cover transition-transform duration-300"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Xentriq Studio<span className="text-[#A855F7]">.</span>
              </span>
            </div>
            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Xentriq Studio crafts bleeding-edge software architectures, beautiful digital art direction, and autonomous AI system layers for modern ambitious brands.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com/xentriqin-hub" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://x.com/seshakofficial" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-lg border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/xentriq-studio-a02929407?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://figma.com" target="_blank" rel="noreferrer" aria-label="Figma" className="w-9 h-9 rounded-lg border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <MessageSquareCode className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 lg:col-start-7 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-wide uppercase mb-6 text-gray-500">
              Agency Navigation
            </h4>
            <ul className="space-y-3.5">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-wide uppercase mb-6 text-gray-500">
              Core Capabilities
            </h4>
            <ul className="space-y-3.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="font-sans text-xs text-gray-500 font-light">
            © {currentYear} Xentriq Studio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-500 font-light">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="font-mono text-[10px] text-[#A855F7]">v1.0.0 Stable Build</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
