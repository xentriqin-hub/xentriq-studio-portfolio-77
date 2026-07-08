import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { DotField } from './DotField';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 px-6 md:px-12">
      {/* 1. Background Dot Field Effect */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(168, 85, 247, 0.35)"
          gradientTo="rgba(180, 151, 207, 0.25)"
          glowColor="#120F17"
        />
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A855F7]/10 blur-[120px] pointer-events-none z-0 animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#B497CF]/8 blur-[120px] pointer-events-none z-0 animate-pulse duration-[12s]" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12 md:py-20">
        {/* Left Side: Headline & Text */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-ping" />
            <span className="font-mono text-xs tracking-wider text-gray-300 uppercase">
              Building Intelligent Digital Experiences
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white"
          >
            We Build Software That{' '}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#F3E8FF] bg-clip-text text-transparent">
              Moves Businesses Forward
            </span>
            <span className="text-[#A855F7]">.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light"
          >
            We design, develop, automate, and create digital experiences that help startups, creators, and businesses grow faster with modern technology.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <button
              onClick={() => onScrollToSection('contact')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#B497CF] text-black font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onScrollToSection('portfolio')}
              className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-white font-sans font-medium text-base transition-all duration-300 hover:scale-[1.02] backdrop-blur-md flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>View Our Work</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Abstract 3D/AI-inspired Visualizer */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-[450px] aspect-square relative"
          >
            {/* Spinning background glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A855F7]/10 to-transparent border border-white/[0.02] animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-transparent to-[#B497CF]/5 border border-white/[0.03] animate-[spin_25s_linear_infinite_reverse]" />

            {/* Glass Container */}
            <div className="absolute inset-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden group">
              {/* Animated Core Sphere */}
              <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#B497CF] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700" />
              
              <svg viewBox="0 0 200 200" className="w-72 h-72 relative z-10 pointer-events-none">
                {/* Outer rotating orbit paths */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                  style={{ transformOrigin: '100px 100px' }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="55"
                  fill="none"
                  stroke="rgba(180, 151, 207, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="40 20"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                  style={{ transformOrigin: '100px 100px' }}
                />

                {/* Cyberpunk Core Geometry */}
                <motion.polygon
                  points="100,50 143,75 143,125 100,150 57,125 57,75"
                  fill="none"
                  stroke="url(#coreGradient)"
                  strokeWidth="2"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 45, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  style={{ transformOrigin: '100px 100px' }}
                />

                {/* Sub-polygons */}
                <motion.polygon
                  points="100,70 126,85 126,115 100,130 74,115 74,85"
                  fill="rgba(168, 85, 247, 0.05)"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                  animate={{ scale: [1, 0.95, 1], rotate: [0, -45, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  style={{ transformOrigin: '100px 100px' }}
                />

                {/* Core floating center dot */}
                <circle cx="100" cy="100" r="8" fill="#A855F7" className="shadow-[0_0_15px_#A855F7]" />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="none"
                  stroke="#B497CF"
                  strokeWidth="1"
                  animate={{ r: [12, 22, 12], opacity: [0.8, 0, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#B497CF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Technical indicators on overlay */}
              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-gray-500 flex flex-col space-y-1">
                <span>MODEL: CORE_ENG_V6</span>
                <span>STATUS: STABLE_SYNC_ACTIVE</span>
              </div>
              <div className="absolute top-6 right-6 font-mono text-[9px] text-[#A855F7]">
                SYS.ONLINE
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          onClick={() => onScrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
};
