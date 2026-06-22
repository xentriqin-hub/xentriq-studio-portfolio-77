import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook to track the scroll position of the hero scene specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calculate high-end cinematic textual disintegration translations
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.88]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [0, 15]);

  const welcomeLetters = "WELCOME TO".split("");
  const studioLetters = "XENTRIQ STUDIO".split("");
  const portfolioLetters = "PORTFOLIO".split("");

  // Letter drift mappings to achieve 3D explosion feel
  const letterX = (index: number, speed: number) => {
    const direction = index % 2 === 0 ? -1 : 1;
    return useTransform(scrollYProgress, [0, 0.5], [0, direction * speed * 25]);
  };

  const letterY = (index: number, speed: number) => {
    const direction = index % 3 === 0 ? -1.5 : 1;
    return useTransform(scrollYProgress, [0, 0.5], [0, direction * speed * 20]);
  };

  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative w-full h-[150vh] flex flex-col justify-start items-center overflow-visible bg-transparent z-10"
    >
      {/* Sticky centered screen to hold target graphics and interactive backdrop */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden">
        
        {/* Full-screen responsive Sketchfab 3D Embed Backdrop */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
          {/* Subtle dark gradient vignettes to blend the iframe edges beautifully into the black canvas background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020202] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none" />
          
          <iframe 
            title="Rocket Orbiting Moon" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            className="w-full h-full transition-opacity duration-1000 origin-center pointer-events-none opacity-30 md:opacity-40 scale-105"
            style={{ 
              border: 'none',
              transform: 'scale(1.08)',
            }}
            src="https://sketchfab.com/models/c613bee6fbd041e58a35d777ae87bdcb/embed?autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_stop=0&dnt=1"
          />
        </div>

        {/* Cinematic Title Group */}
        <motion.div
          style={{ 
            y: textY, 
            scale: textScale, 
            opacity: textOpacity,
            filter: useTransform(blurAmount, (v) => `blur(${v}px)`)
          }}
          className="text-center select-none relative z-10 pointer-events-none"
        >
          {/* WELCOME TO Line */}
          <div className="flex justify-center flex-wrap gap-[0.2em] font-display text-lg md:text-3xl text-gray-500 font-light tracking-[0.4em] uppercase mb-4">
            {welcomeLetters.map((char, i) => (
              <motion.span
                key={`welcome-${i}`}
                style={{ x: letterX(i, 2), y: letterY(i, 1.5) }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* XENTRIQ STUDIO Line */}
          <h1 className="flex justify-center flex-wrap leading-tight text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            {studioLetters.map((char, i) => (
              <motion.span
                key={`studio-${i}`}
                style={{ x: letterX(i, 4), y: letterY(i, 3) }}
                className="inline-block bg-gradient-to-r from-white via-white to-[#D4AF37]/80 bg-clip-text"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* PORTFOLIO Line */}
          <div className="flex justify-center flex-wrap gap-[0.3em] font-display text-md md:text-2xl text-[#D4AF37] font-semibold tracking-[0.5em] uppercase mt-2">
            {portfolioLetters.map((char, i) => (
              <motion.span
                key={`portfolio-${i}`}
                style={{ x: letterX(i, 3), y: letterY(i, 2) }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Slogan subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 font-sans text-sm sm:text-lg text-gray-300 max-w-md mx-auto tracking-wider"
          >
            Creating Premium Digital Experiences
          </motion.p>
        </motion.div>

        {/* Dynamic scroll hint helper indicator */}
        <motion.div
          style={{ opacity: textOpacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-16 flex flex-col items-center gap-2 cursor-pointer z-30 pointer-events-auto"
          onClick={handleScrollDown}
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-[#D4AF37] uppercase">Scroll To Explore</span>
          <ArrowDown className="w-4 h-4 text-gray-500 hover:text-[#D4AF37] transition-colors" />
        </motion.div>
      </div>

      {/* Floating Scroll State Overlays (Gives visual context for the particle logo morph) */}
      <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-10 w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.8 * (1 - Math.abs(window.scrollY / 2000)), scale: 1 }}
          viewport={{ once: false, margin: '-20%' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37]/80 uppercase">REPRESENTING IDENTITY</span>
        </motion.div>
      </div>
    </section>
  );
}
