import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Liquid Glass Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/15 to-purple-600/15 blur-[100px] md:blur-[130px] animate-float-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 blur-[80px] md:blur-[110px] animate-float-2 pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-indigo-500/5 blur-[50px] animate-float-3 pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        {/* Visual Showcase - Cinematic Brand Sphere */}
        <motion.div
          id="hero-visual-showcase"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[340px] aspect-square mb-8"
        >
          {/* Main Glass Orbit Container */}
          <div className="relative w-full h-full rounded-full flex items-center justify-center">
            {/* Pulsing Backlit Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/10 to-purple-500/15 blur-[40px] animate-pulse pointer-events-none" />
            
            {/* Outer Rotating Celestial Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 rounded-full border border-white/5 bg-transparent pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-indigo-500/10 bg-transparent pointer-events-none"
            />
            
            {/* Floating Glass Brand Sphere */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full glass-card border border-white/10 flex items-center justify-center p-4 shadow-[0_0_40px_rgba(99,102,241,0.12)] overflow-hidden"
            >
              {/* Internal Refraction Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
              
              {/* Logo Frame */}
              <div className="relative w-full h-full rounded-full bg-[#030308]/60 border border-white/5 flex items-center justify-center overflow-hidden group shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                <img 
                  src="https://i.ibb.co/JwHnypRF/xentriqstudio.png" 
                  alt="Xentriq Studio Brand Mascot" 
                  className="w-4/5 h-4/5 object-contain select-none group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dynamic Glass Highlight Lines */}
              <div className="absolute -inset-x-20 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-12 transform origin-top-left pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div id="hero-text-content" className="flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs text-indigo-200 font-mono tracking-wider mb-6 hover:border-indigo-500/30 transition-colors cursor-default mx-auto"
          >
            <span>EXQUISITE DIGITAL CRAFTSMANSHIP</span>
          </motion.div>
 
          {/* Heading */}
          <motion.h3
            id="hero-heading"
            className="sr-only"
          >
            Xentriq Studio
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1] mb-6 text-center"
          >
            <span className="text-gradient-purple">Xentriq Studio</span>
          </motion.h1>
 
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-10 text-center"
          >
            Building Digital Experiences Powered by Innovation and AI.
          </motion.p>
 
          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="glass-button-primary text-white text-base font-display font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(99,102,241,0.25)] cursor-pointer liquid-reflection w-full sm:w-auto"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
 
            <a
              href="#services"
              className="glass-button text-gray-300 hover:text-white text-base font-display font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2 border border-white/5 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 fill-current text-white" />
              Explore Services
            </a>
          </motion.div>
 
          {/* Value Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/5 w-full max-w-lg mx-auto"
          >
            <div>
              <div className="font-display font-semibold text-2xl text-white">99.8%</div>
              <div className="font-sans text-xs text-gray-400 mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="font-display font-semibold text-2xl text-white">100%</div>
              <div className="font-sans text-xs text-gray-400 mt-1">Bespoke Design</div>
            </div>
            <div>
              <div className="font-display font-semibold text-2xl text-white">10x</div>
              <div className="font-sans text-xs text-gray-400 mt-1">AI Automation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
