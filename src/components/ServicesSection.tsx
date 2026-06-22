import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';
import { Service } from '../types';
import TiltCard from './TiltCard';

// Utility helper to render dynamic icons easily
function MagicIcon({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  // Map strings to Lucide components
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section 
      id="services"
      className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-screen flex flex-col justify-center"
    >
      {/* Golden Section Pre-Header */}
      <div className="text-center md:text-left mb-16">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
        >
          CURATED SOLUTIONS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 font-display text-3xl md:text-5xl font-light tracking-tight text-white uppercase"
        >
          OUR <span className="text-[#D4AF37] font-semibold">PREMIUM</span> SERVICES
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          className="h-0.5 bg-[#D4AF37] mt-4 hidden md:block"
        />
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <TiltCard
            key={service.id}
            index={index}
            onClick={() => setSelectedService(service)}
          >
            {/* Soft inner blur bubble background matching TiltCard layout */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D4AF37]/10 transition-all duration-500" />

            {/* Glowing Golden Border Line Effect */}
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-[#D4AF37] to-transparent group-hover:h-full transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500" />

            {/* Service Icon */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white group-hover:text-black group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 mb-6 shadow-inner">
              <MagicIcon name={service.icon} className="w-5 h-5" />
            </div>

            {/* Title & Description */}
            <h3 className="font-display text-xl font-medium tracking-wide text-white group-hover:text-[#D4AF37] transition-colors mb-3">
              {service.title}
            </h3>
            
            <p className="font-sans text-xs line-clamp-3 text-gray-400 leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Elegant luxury CTA Trigger */}
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase group-hover:underline">
              <span>Get More Details</span>
              <Icons.ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Premium Service Expansion Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#090909] border border-[#D4AF37]/20 p-6 md:p-10 text-white shadow-[0_0_50px_rgba(212,175,55,0.15)] pointer-events-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <Icons.X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <MagicIcon name={selectedService.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-[#D4AF37]/75 uppercase">SERVICE PORTAL</span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Subtext Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
                  
                  {/* Column 1: Core Description & Timeline */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-2">OVERVIEW</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {selectedService.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-white/5 rounded-2xl border border-white/10 w-fit">
                        <Icons.Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="font-mono text-[10px] tracking-wider text-gray-300">ESTIMATED TIMELINE: <strong className="text-white">{selectedService.timeline}</strong></span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-3">KEY STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="font-mono text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Benefits & Process */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-3">IMPACT BENEFITS</h4>
                      <ul className="flex flex-col gap-2">
                        {selectedService.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-gray-300">
                            <Icons.CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-3">CREATIVE PIPELINE</h4>
                      <ol className="flex flex-col gap-2">
                        {selectedService.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 font-sans text-xs text-gray-400">
                            <span className="font-mono text-[#D4AF37] font-semibold text-[10px] w-5">0{i+1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                </div>

                {/* Footer CTA */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-sans text-[11px] text-gray-400 text-center sm:text-left">
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
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:scale-[1.03] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-pointer"
                  >
                    Start Your Project
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
