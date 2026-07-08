import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden px-6 md:px-12">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A855F7]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs tracking-widest text-[#A855F7] uppercase block mb-4">
            // Our Method
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            A battle-tested engine of{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#B497CF] bg-clip-text text-transparent">
              rigorous execution
            </span>
            .
          </h2>
          <p className="font-sans text-gray-400 font-light mt-4 text-sm max-w-xl mx-auto">
            From the initial creative brainstorm to cloud deployment, we adhere to strict quality checks and micro-milestones to guarantee project success.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 sm:pl-12 border-l border-white/[0.06] ml-4 sm:ml-8 space-y-12">
          
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Pulsing checkpoint node on the left border */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-[#A855F7] flex items-center justify-center transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#A855F7] transition-colors duration-300 animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#A855F7] transition-colors duration-300" />
              </div>

              {/* Step Content */}
              <div className="p-8 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 relative">
                {/* Number indicator */}
                <div className="absolute top-6 right-8 font-mono text-3xl md:text-4xl font-extrabold text-white/[0.02] group-hover:text-[#A855F7]/[0.05] transition-colors duration-500 select-none">
                  {step.number}
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-mono text-xs text-[#A855F7] font-semibold">
                    STEP {step.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                  <h3 className="font-display font-bold text-xl text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="font-sans text-gray-400 text-sm leading-relaxed font-light max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
