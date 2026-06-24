import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative w-full min-h-[92vh] pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden z-10 px-6"
    >
      {/* Main Glassmorphism Hero Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl rounded-[28px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 sm:p-16 md:p-20 text-center shadow-2xl my-auto"
      >
        
        {/* WELCOME TO Line */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="font-mono text-[10px] sm:text-xs text-white font-semibold tracking-[0.3em] uppercase">
            WELCOME TO
          </span>
        </motion.div>

        {/* XENTRIQ STUDIO Line */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight text-white uppercase mb-4"
        >
          XENTRIQ STUDIO
        </motion.h1>

        {/* PORTFOLIO Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-base sm:text-xl md:text-2xl text-white/60 font-semibold tracking-[0.4em] uppercase mb-8"
        >
          PORTFOLIO
        </motion.div>

        {/* Slogan subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans text-base sm:text-xl text-gray-300 max-w-xl mx-auto tracking-wide font-normal leading-relaxed mb-12"
        >
          Creating Premium Digital Experiences
        </motion.p>

        {/* REPRESENTING IDENTITY tag preserved */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-6 border-t border-white/10 flex justify-center items-center"
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-white/50 uppercase font-semibold">
            REPRESENTING IDENTITY
          </span>
        </motion.div>
      </motion.div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 flex flex-col items-center gap-2 cursor-pointer z-20 group transition-all duration-200 hover:-translate-y-0.5"
        onClick={handleScrollDown}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 group-hover:text-white uppercase transition-colors font-medium">
          Scroll To Explore
        </span>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/50 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
        </div>
      </motion.div>
    </section>
  );
}
