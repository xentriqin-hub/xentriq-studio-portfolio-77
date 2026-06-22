import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { comparisonMetrics } from '../data';
import TiltCard from './TiltCard';

function MagicIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-[80vh] flex flex-col justify-center border-t border-white/5"
    >
      {/* Editorial Header */}
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase"
        >
          why choose us
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 font-display text-3xl md:text-5xl font-light tracking-tight text-white uppercase"
        >
          THE BENCHMARK OF <span className="text-[#D4AF37] font-semibold">SUPERIORITY</span>
        </motion.h2>
        <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto mt-4" />
      </div>

      {/* Bento Differentiator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisonMetrics.map((item, idx) => (
          <TiltCard
            key={item.title}
            index={idx}
            className="flex flex-col justify-between min-h-[220px]"
          >
            {/* Animated Glow overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/2 rounded-full blur-3xl group-hover:bg-[#D4AF37]/5 transition-all" />

            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300">
              <MagicIcon name={item.icon} className="w-5 h-5" />
            </div>

            <div className="mt-6">
              <h3 className="font-display text-lg font-medium tracking-wide text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
