import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../data';
import { Service } from '../types';
import TiltCard from './TiltCard';

function MagicIcon({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section 
      id="services"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-screen flex flex-col justify-center border-t border-white/5"
    >
      {/* Section Header */}
      <div className="text-center md:text-left mb-16">
        <span className="font-mono text-[10px] tracking-[0.6em] text-white uppercase font-semibold block mb-2">
          CURATED SOLUTIONS
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
          OUR <span className="text-white">PREMIUM</span> SERVICES
        </h2>
        <div className="h-0.5 w-20 bg-white mt-4 hidden md:block opacity-80" />
      </div>

      {/* Services Spatial UI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <TiltCard
            key={service.id}
            index={index}
            onClick={() => setSelectedService(service)}
          >
            {/* Service Icon */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 text-white mb-6 shadow-sm transition-colors duration-200 group-hover:bg-white group-hover:text-black">
              <MagicIcon name={service.icon} className="w-5 h-5" />
            </div>

            {/* Title & Description */}
            <h3 className="font-display text-xl font-bold tracking-wide text-white mb-3 transition-colors duration-200">
              {service.title}
            </h3>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-8 line-clamp-3 font-normal">
              {service.description}
            </p>

            {/* Action Link */}
            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] tracking-widest text-white font-bold uppercase">
              <span>Get More Details</span>
              <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Spatial UI Glass Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-y-contain rounded-[28px] bg-[#050505]/95 backdrop-blur-3xl border border-white/10 p-6 md:p-10 text-white shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <Icons.X className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#7B2FF7]/10 border border-[#7B2FF7]/30 text-[#7B2FF7]">
                  <MagicIcon name={selectedService.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#7B2FF7] uppercase font-bold">SERVICE PORTAL</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#7B2FF7] uppercase font-bold mb-2">OVERVIEW</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                      {selectedService.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-4 px-4 py-2.5 bg-white/[0.03] rounded-xl border border-white/10 w-fit">
                      <Icons.Clock className="w-4 h-4 text-[#7B2FF7]" />
                      <span className="font-mono text-[10px] tracking-wider text-gray-400">
                        ESTIMATED TIMELINE: <strong className="text-white font-bold">{selectedService.timeline}</strong>
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#7B2FF7] uppercase font-bold mb-3">KEY STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="font-mono text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#7B2FF7] uppercase font-bold mb-3">IMPACT BENEFITS</h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-gray-400">
                          <Icons.CheckCircle2 className="w-4 h-4 text-[#7B2FF7] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#7B2FF7] uppercase font-bold mb-3">CREATIVE PIPELINE</h4>
                    <ol className="flex flex-col gap-2.5">
                      {selectedService.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-gray-400">
                          <span className="font-mono text-[#7B2FF7] font-bold text-xs w-6">0{i+1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-gray-400 text-center sm:text-left">
                  Ready to build this experience with absolute luxury specifications?
                </p>
                
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const contactEl = document.getElementById('contact');
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full font-display text-xs tracking-widest uppercase font-bold text-white bg-[#7B2FF7] hover:bg-[#9D4EDD] transition-all duration-200 cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
