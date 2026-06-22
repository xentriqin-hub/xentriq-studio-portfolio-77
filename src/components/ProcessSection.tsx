import React from 'react';
import { motion } from 'motion/react';
import { processStages } from '../data';
import { Milestone, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProcessSection() {
  return (
    <section 
      id="process"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-screen border-t border-white/5"
    >
      {/* Editorial Header */}
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
        >
          CREATIVE PIPELINE
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 font-display text-3xl md:text-5xl font-light tracking-tight text-white uppercase"
        >
          UNDER 2 WEEKS <span className="text-[#D4AF37] font-semibold">DELIVERY</span>
        </motion.h2>
        <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto mt-4" />
      </div>

      {/* Luxury Timeline Line Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Central Vertical Connector Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37]/40 via-white/10 to-transparent transform -translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col gap-12 md:gap-16">
          {processStages.map((stage, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={stage.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Circle Center Bullet */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center font-mono text-[10px] text-[#D4AF37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] transform -translate-x-1/2 z-10">
                  {stage.id}
                </div>

                {/* Left/Right Card Spacer */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <TiltCard
                    index={index}
                    className="w-full"
                  >
                    {/* Timeline text block metadata */}
                    <div className="flex justify-between items-center gap-2 mb-3">
                      <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] font-bold uppercase">
                        PHASE 0{stage.id}
                      </span>
                      <span className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                        {stage.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-light tracking-wide text-white mb-3 group-hover:text-[#D4AF37] transition-all">
                      {stage.title}
                    </h3>

                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </TiltCard>
                </div>

                {/* Empty Half-side Column spacer (Desktop only) */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
