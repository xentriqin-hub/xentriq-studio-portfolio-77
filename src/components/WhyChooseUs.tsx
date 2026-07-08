import React from 'react';
import { motion } from 'motion/react';
import { WHY_US_CARDS } from '../data';
import {
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Gauge,
  HeartHandshake
} from 'lucide-react';

const IconMap: Record<string, React.ComponentType<any>> = {
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Gauge,
  HeartHandshake,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative px-6 md:px-12 border-b border-white/[0.02]">
      {/* Absolute floating accent grids */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#A855F7]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block mb-4">
            // Why Partner With Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Designed for those who{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#B497CF] bg-clip-text text-transparent">
              refuse the ordinary
            </span>
            .
          </h2>
          <p className="font-sans text-gray-400 font-light mt-4 text-base">
            We operate at the leading edge of technical standards, ensuring your business stands out, scales safely, and executes at peak performance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_CARDS.map((card, index) => {
            const IconComponent = IconMap[card.icon] || Sparkles;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-2xl bg-white/[0.01] hover:bg-[#A855F7]/[0.01] border border-white/[0.04] hover:border-[#A855F7]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between h-[280px]"
              >
                {/* Underlay glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#A855F7]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-[#A855F7]/5 group-hover:border-[#A855F7]/30 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#A855F7] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-gray-400 text-xs leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
