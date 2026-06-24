import React from 'react';
import { processStages } from '../data';
import TiltCard from './TiltCard';

export default function ProcessSection() {
  return (
    <section 
      id="process"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-screen border-t border-white/5"
    >
      {/* Editorial Header */}
      <div className="text-center mb-24">
        <span className="font-mono text-[10px] tracking-[0.6em] text-[#7B2FF7] uppercase">
          CREATIVE PIPELINE
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
          UNDER 2 WEEKS <span className="text-[#7B2FF7] font-semibold">DELIVERY</span>
        </h2>
        <div className="h-0.5 w-24 bg-[#7B2FF7] mx-auto mt-4" />
      </div>

      {/* Luxury Timeline Line Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Central Vertical Connector Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2FF7]/40 via-white/10 to-transparent transform -translate-x-1/2 pointer-events-none" />

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
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#7B2FF7] flex items-center justify-center font-mono text-[10px] text-[#7B2FF7] font-bold shadow-[0_0_15px_rgba(123,47,247,0.4)] transform -translate-x-1/2 z-10">
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
                      <span className="font-mono text-[9px] tracking-widest text-[#7B2FF7] font-bold uppercase">
                        PHASE 0{stage.id}
                      </span>
                      <span className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                        {stage.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-wide text-white mb-3">
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
