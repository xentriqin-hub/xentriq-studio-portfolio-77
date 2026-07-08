import React from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES } from '../data';

export const TechStack: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Mobile', 'AI', 'Cloud', 'Design'] as const;

  return (
    <section id="technologies" className="py-24 md:py-32 bg-[#050505] relative px-6 md:px-12">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#A855F7]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block mb-4">
            // Our Stack
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            An elite technology engine tuned for{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#B497CF] bg-clip-text text-transparent">
              limitless scalability
            </span>
            .
          </h2>
          <p className="font-sans text-gray-400 font-light mt-4 text-base">
            We operate exclusively on bleeding-edge modern frameworks and languages that ensure hyper-speed deployment, durability, and robust AI orchestration.
          </p>
        </div>

        {/* Technology Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => {
            const items = TECHNOLOGIES.filter((tech) => tech.category === cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.01] hover:bg-[#A855F7]/[0.01] border border-white/[0.04] hover:border-[#A855F7]/25 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.03]">
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    {cat}
                  </h3>
                  <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">
                    {items.length} Techs
                  </span>
                </div>

                {/* Sub-grid of Tech Items */}
                <div className="grid grid-cols-2 gap-3">
                  {items.map((tech, itemIdx) => (
                    <div
                      key={tech.name}
                      className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.03] flex items-center space-x-3 transition-all duration-300 group/item"
                    >
                      {/* Tech Symbol Badge */}
                      <span className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center font-display font-bold text-xs text-white group-hover/item:border-[#A855F7]/40 group-hover/item:text-[#A855F7] transition-all duration-300">
                        {tech.icon}
                      </span>
                      <span className="font-sans text-xs font-light text-gray-300 group-hover/item:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
