import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  FileText, 
  Zap, 
  Search, 
  Grid, 
  Bookmark, 
  Heart, 
  Bell, 
  WifiOff, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Cpu, 
  ExternalLink,
  Flame,
  Smartphone,
  Laptop,
  CheckCircle,
  Activity,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import TiltCard from './TiltCard';

// Hook-based Animated Counter to count up when visible
function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isNumericStr = (s: string) => /\d+/.test(s);

  useEffect(() => {
    if (!isInView || !isNumericStr(value)) return;
    
    const matches = value.match(/\d+/);
    if (!matches) return;
    const target = parseInt(matches[0], 10);
    let startTime: number | null = null;
    
    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // easeOut
      setDisplayValue(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  if (!isNumericStr(value)) {
    return (
      <span ref={ref} className="font-display font-light text-[#D4AF37]">
        {value}
      </span>
    );
  }

  const nonDigitSuffix = value.replace(/\d+/g, '');
  return (
    <span ref={ref} className="font-display font-light bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] bg-clip-text text-transparent">
      {displayValue}
      {nonDigitSuffix}
    </span>
  );
}

export default function FeaturedProjectSection() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  // Gentle interactive parallax/tilt on device showcase panel hover
  const handleShowcaseMouseMove = (e: React.MouseEvent) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position normalized from center: -1 to +1
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);
    
    setTiltX(x * 6); // Subtle shift
    setTiltY(y * -6);
  };

  const handleShowcaseMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  const badges = [
    { text: 'Progressive Web App (PWA)', icon: Laptop },
    { text: 'Android App', icon: Smartphone },
    { text: 'Firebase Powered', icon: Flame },
    { text: 'Real-Time News', icon: Activity },
    { text: 'Material Design', icon: Grid },
    { text: 'Offline Support', icon: WifiOff },
    { text: 'Secure Authentication', icon: ShieldCheck }
  ];

  const features = [
    { 
      title: 'Official Tamil Nadu Government News', 
      desc: 'Authentic updates sourced directly from official state administration channels, free from sensationalism.', 
      icon: FileText 
    },
    { 
      title: 'Real-Time Updates', 
      desc: 'Sub-millisecond latency article delivery ensures critical breaking notices are instant.', 
      icon: Zap 
    },
    { 
      title: 'Powerful Search', 
      desc: 'Multi-index keywords matching instantly parses archived announcements, schemes and jobs boards.', 
      icon: Search 
    },
    { 
      title: 'Category Browsing', 
      desc: 'Seamlessly transition across schemes, notifications, public orders, and regional updates.', 
      icon: Grid 
    },
    { 
      title: 'Bookmark Articles', 
      desc: 'Save vital news documents locally to reference or parse whenever required.', 
      icon: Bookmark 
    },
    { 
      title: 'Like & Comments', 
      desc: 'Secure reactions and verified conversational columns to engage with fellow citizens.', 
      icon: Heart 
    },
    { 
      title: 'Push Notifications', 
      desc: 'High-priority state announcement alerts pushed directly to client launchers instantly.', 
      icon: Bell 
    },
    { 
      title: 'Offline Reading', 
      desc: 'Highly robust caching policies keep previous articles readable without internet cells.', 
      icon: WifiOff 
    },
    { 
      title: 'Dark Mode', 
      desc: 'Premium low-brightness space designed specifically for eye-comfort during evening checks.', 
      icon: Moon 
    },
    { 
      title: 'Light Mode', 
      desc: 'Dynamic high-contrast white viewport optimizing screen legibility under extreme outdoor sunlight.', 
      icon: Sun 
    },
    { 
      title: 'Firebase Authentication', 
      desc: 'Biometric and credential gateways ensuring reliable user records sync instantly.', 
      icon: ShieldCheck 
    },
    { 
      title: 'Fast Performance', 
      desc: 'Zero layout shifts, sub-second loads, and lightweight bundle indexes.', 
      icon: Cpu 
    }
  ];

  const statistics = [
    { value: '100%', label: 'Responsive' },
    { value: '24/7', label: 'Availability' },
    { value: 'Fast', label: 'Performance' },
    { value: 'Secure', label: 'Firebase' }
  ];

  // Helper smooth scroll
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="featured-project" 
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 flex flex-col justify-center border-t border-white/5 overflow-hidden"
    >
      {/* Background radial gold glow blots */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header Title Block */}
      <div className="text-center mb-16 relative">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.6em] text-[#D4AF37] uppercase block mb-3"
        >
          FEATURED PRODUCT
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white uppercase leading-none"
        >
          TN <span className="text-[#D4AF37] font-semibold tracking-wide">TODAY</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-sans text-xs sm:text-sm tracking-[0.25em] text-gray-400 font-medium uppercase"
        >
          Tamil Nadu's Modern Government News Platform
        </motion.p>
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
      </div>

      {/* 2. Core Narrative Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl font-light text-white leading-relaxed border-l-2 border-[#D4AF37] pl-5"
          >
            Empowering citizens through verified real-time digital announcement networks.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm text-gray-300 leading-relaxed"
          >
            TN Today is a modern digital news platform focused on delivering official Tamil Nadu Government news in a fast, clean, and user-friendly experience. The platform is designed to help citizens, students, job seekers, and professionals stay updated with trusted government announcements, schemes, education, employment, public services, and important state updates.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm text-gray-300 leading-relaxed"
          >
            The project is being developed by Xentriq Studio with a strong focus on speed, reliability, accessibility, and a premium user experience.
          </motion.p>
        </div>

        {/* Glass Style Platform Badges list */}
        <div className="lg:col-span-6">
          <h4 className="font-mono text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold mb-6">PREMIUM SPECIFICATIONS</h4>
          <motion.div 
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                  }}
                  className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 bg-[#0a0a0a]/70 hover:bg-[#D4AF37]/5 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-amber-100 hover:text-[#D4AF37] uppercase transition-all duration-300 flex items-center gap-2.5 select-none shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{badge.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* 3. Interactive Device Mockup Showcase & Development Status */}
      <div className="mb-24">
        <h4 className="font-mono text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold text-center mb-10">INTERACTIVE CONCEPT SHOWCASE</h4>
        
        <div 
          ref={showcaseRef}
          onMouseMove={handleShowcaseMouseMove}
          onMouseLeave={handleShowcaseMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-[#070707]/60 border border-white/5 rounded-[36px] p-8 md:p-14 relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          style={{
            transform: `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          {/* Internal glowing lights */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#D4AF37]/2 to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/4 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Device Mockups Side (Left (Phone) & Right (Desktop PWA)) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            {/* ANDROID PHONE MOCKUP (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="md:col-span-5 flex flex-col items-center justify-center relative group"
            >
              {/* Backlight gold halo flare */}
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-[44px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              {/* Phone Frame */}
              <div className="relative w-[260px] h-[520px] bg-black rounded-[42px] border-[5px] border-[#D4AF37]/25 group-hover:border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.08)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.18)] flex flex-col justify-between overflow-hidden transition-all duration-500 scale-95 md:scale-100 origin-center">
                {/* Screen Reflection Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-70 transform skew-y-12 pointer-events-none z-30" />
                
                {/* Top Notch Speaker */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-2.5" />
                  <span className="w-10 h-1 bg-slate-900 rounded-full" />
                </div>

                {/* Simulated App Screen */}
                <div className="w-full h-full p-2.5 pt-8 bg-[#040404] flex flex-col overflow-hidden text-left relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 px-2 mb-1.5">
                    <span>TN Today</span>
                    <div className="flex items-center gap-1">
                      <span>• LIVE • </span>
                      <span>10:42 AM</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="border-b border-[#D4AF37]/15 pb-2 mb-2 flex justify-between items-center">
                    <span className="font-display text-[10px] tracking-[0.2em] font-semibold text-[#D4AF37]">TN TODAY</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] font-mono text-[6px] uppercase tracking-wider animate-pulse">BREAKING</span>
                  </div>

                  {/* News Main Card */}
                  <div className="rounded-xl border border-white/5 bg-[#0a0a0a] p-2 flex flex-col gap-1.5 mb-2 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <div className="h-20 rounded-lg bg-gradient-to-br from-[#111] to-[#333] border border-white/5 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#D4AF37]/5" />
                      <FileText className="w-6 h-6 text-[#D4AF37]/35" />
                      <span className="absolute bottom-1 left-2 font-mono text-[5px] text-[#D4AF37]">GOVERNMENT OF TAMIL NADU</span>
                    </div>
                    <span className="text-[6px] font-mono text-[#D4AF37] uppercase tracking-wider">CM SCHEMES • TODAY</span>
                    <h5 className="font-display text-[9px] text-white leading-tight font-medium hover:text-[#D4AF37] transition-all">
                      Honorable CM Launches New Tech & Digital Skill Scholarship and Incubators Scheme
                    </h5>
                  </div>

                  {/* Miniature feed list */}
                  <div className="flex flex-col gap-1.5 overflow-hidden flex-1 select-none">
                    <div className="p-1.5 rounded-lg border border-white/5 bg-[#090909] flex gap-2 items-center">
                      <div className="w-6 h-6 rounded bg-[#D4AF37]/10 shrink-0 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-[7px] text-slate-200 truncate">Welfare applications now open for state exams coaching</p>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg border border-white/5 bg-[#090909] flex gap-2 items-center">
                      <div className="w-6 h-6 rounded bg-[#D4AF37]/10 shrink-0 flex items-center justify-center">
                        <Cpu className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-[7px] text-slate-200 truncate">Tech Parks expand across tier-2 cities in state roadmap</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Navigation Controls */}
                  <div className="border-t border-[#D4AF37]/15 pt-2 mt-auto flex justify-around text-gray-500 text-[6px] font-mono uppercase tracking-widest">
                    <span className="text-[#D4AF37] font-semibold">FEED</span>
                    <span>SEARCH</span>
                    <span>SAVED</span>
                    <span>PROFILE</span>
                  </div>
                </div>
              </div>

              {/* Bottom reflection shadow */}
              <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent blur-[1px] mt-6 md:mt-8" />
              <p className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase mt-2">ANDROID APPLICATION</p>
            </motion.div>

            {/* LAPTOP / DESKTOP PWA MOCKUP (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="md:col-span-7 flex flex-col items-center justify-center relative group"
            >
              {/* Backlight gold halo flare */}
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              {/* Laptop Screen Upper Case */}
              <div className="relative w-full max-w-[460px] h-[280px] bg-black rounded-2xl border-[4px] border-[#D4AF37]/25 group-hover:border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.06)] group-hover:shadow-[0_0_70px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden transition-all duration-500">
                {/* Screen Reflection Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-white/8 opacity-60 transform skew-y-12 pointer-events-none z-30" />

                {/* Simulated PWA Desktop Screen */}
                <div className="w-full h-full bg-[#040404] flex flex-col overflow-hidden text-left relative">
                  {/* PWA Browser Chrome Bar */}
                  <div className="w-full bg-[#0a0a0a] border-b border-[#D4AF37]/15 py-1 px-3 flex items-center justify-between text-gray-500 text-[6px] font-mono select-none">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="px-4 py-0.5 rounded bg-black/40 border border-[#D4AF37]/10 w-44 text-center text-[5px] tracking-wide text-gray-400">
                      https://tntoday.xentriqstudio.com
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-2.5 h-2.5 text-emerald-500" />
                      <span className="text-[#D4AF37] text-[5px]">SECURE</span>
                    </div>
                  </div>

                  {/* PWA App Body */}
                  <div className="flex-1 flex overflow-hidden">
                    {/* Left Sidebar PWA Menu */}
                    <div className="w-24 bg-[#060606] border-r border-[#D4AF37]/10 p-2 flex flex-col gap-2 select-none">
                      <span className="font-display text-[7px] font-semibold text-[#D4AF37] tracking-widest pl-1">TN TODAY</span>
                      
                      <div className="flex flex-col gap-1 text-[5.5px] font-mono text-gray-400">
                        <span className="bg-[#D4AF37]/15 text-[#D4AF37] px-1.5 py-0.5 rounded pl-1">STATE FEED</span>
                        <span className="hover:text-white px-1.5 py-0.5 rounded pl-1">SCHEMES DEPT</span>
                        <span className="hover:text-white px-1.5 py-0.5 rounded pl-1">EMPLOYMENT</span>
                        <span className="hover:text-white px-1.5 py-0.5 rounded pl-1">PUBLIC HEALTH</span>
                        <span className="hover:text-white px-1.5 py-0.5 rounded pl-1">EDUCATION NEWS</span>
                        <span className="hover:text-white px-1.5 py-0.5 rounded pl-1">BOOKMARKED</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-3 flex flex-col overflow-hidden">
                      {/* Banner banner */}
                      <div className="p-2 rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/4 flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <span className="text-[5px] font-mono text-[#D4AF37] uppercase tracking-[0.15em] block">PRODUCTION READY PWA</span>
                          <h6 className="font-display text-[8px] text-white font-medium leading-none mt-0.5">Tamil Nadu State Circular Hub</h6>
                        </div>
                        <span className="text-[6px] font-mono px-1.5 py-0.5 bg-[#D4AF37]/15 rounded border border-[#D4AF37]/20 text-[#D4AF37] shrink-0 font-bold uppercase tracking-widest">LIVE DIRECTORY</span>
                      </div>

                      {/* Web Grid Showcase Items */}
                      <div className="grid grid-cols-2 gap-2 overflow-hidden flex-1">
                        <div className="border border-white/5 rounded-lg p-2 bg-[#080808]">
                          <span className="font-mono text-[5px] text-[#D4AF37] block">SCHEME TRACKER</span>
                          <p className="font-display text-[7px] text-white leading-tight font-medium mt-1">Free laptop for college entrants program database launched</p>
                          <div className="h-0.5 w-4 bg-amber-500 mt-2" />
                        </div>
                        <div className="border border-white/5 rounded-lg p-2 bg-[#080808]">
                          <span className="font-mono text-[5px] text-[#D4AF37] block">EXAMS SCHEDULER</span>
                          <p className="font-display text-[7px] text-white leading-tight font-medium mt-1">State administrative exams dates schedule announced officially</p>
                          <div className="h-0.5 w-4 bg-amber-500 mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="w-[490px] h-3 bg-gradient-to-b from-[#222] via-[#0b0b0b] to-[#040404] rounded-b-xl border-t border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.8)] relative z-20 flex items-center justify-center">
                <span className="w-16 h-1 bg-[#1a1a1a] rounded-full border-t border-white/5" />
              </div>

              {/* Laptop shadow reflection */}
              <div className="w-[450px] h-6 bg-gradient-to-t from-transparent via-[#D4AF37]/10 to-transparent blur-md mt-1 pointer-events-none scale-y-[-0.6]" />
              <p className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase">PROGRESSIVE WEB APP (PWA)</p>
            </motion.div>
          </div>

          {/* DEVELOPMENT STATUS (Right Column of the Showcase) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6 z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
            <h4 className="font-mono text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold mb-2">DEVELOPMENT STATUS</h4>
            
            {/* Status launching card */}
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#0a0a0a] p-4 flex flex-col justify-center items-start gap-3 relative shadow-[0_8px_32px_rgba(212,175,55,0.05)]">
              {/* Gold pulsing backdrop circle */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_#D4AF37] animate-ping" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#D4AF37]" />
              
              <div>
                <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest block">RELEASE ENGINE</span>
                <span className="font-display text-lg font-light text-white uppercase tracking-wider block mt-0.5">Launches Soon</span>
              </div>
            </div>

            {/* Platform indicators */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <div>
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">PROGRESSIVE WEB APP</span>
                  <span className="font-display text-xs text-white uppercase tracking-wide">Production Ready</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_8px_#10b981]" />
              </div>

              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <div>
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">ANDROID APP</span>
                  <span className="font-display text-xs text-white uppercase tracking-wide">Coming Very Soon</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_8px_#f59e0b]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Statistics Sub-Grid Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
        {statistics.map((stat, idx) => (
          <div 
            key={idx}
            className="rounded-3xl border border-white/5 bg-[#080808]/50 p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group select-none hover:border-[#D4AF37]/20 transition-colors duration-300"
          >
            {/* Subtle glow hover layer */}
            <div className="absolute inset-0 bg-[#D4AF37]/1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-2">
              <AnimatedCounter value={stat.value} />
            </div>
            
            <span className="font-mono text-[9px] tracking-[0.25em] text-gray-400 group-hover:text-[#D4AF37] uppercase transition-colors duration-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* 5. Beautiful Twelve Animated Feature Cards Grid */}
      <div className="mb-28">
        <div className="text-center mb-16">
          <span className="font-mono text-[9px] tracking-[0.6em] text-[#D4AF37] uppercase block mb-2">FEATURES GRID</span>
          <h3 className="font-display text-3xl font-light text-white uppercase tracking-tight">ENGINEERED TO SPECIFICATION</h3>
          <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto mt-3" />
        </div>

        {/* 12 Features grid using TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <TiltCard
                key={idx}
                index={idx}
                className="flex flex-col gap-4 min-h-[220px] justify-between text-left border border-white/5 group bg-[#080808]/90"
              >
                {/* Glow backlight bubble inside TiltCard */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/1 rounded-full blur-[40px] group-hover:bg-[#D4AF37]/4 transition-colors duration-500" />

                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/15 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="font-display text-sm font-medium leading-tight tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feat.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* 6. High-contrast Call to Action Section */}
      <div className="relative rounded-[40px] border border-[#D4AF37]/20 bg-[#070707]/90 p-8 sm:p-12 md:p-16 text-center shadow-[0_15px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Dynamic ambient halo backlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Sparkle decorative element */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white uppercase mb-4"
        >
          INTERESTED IN BUILDING <br />
          <span className="text-[#D4AF37] font-semibold">SOMETHING SIMILAR?</span>
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Whether you need a modern website, Android application, Progressive Web App, or custom software solution, Xentriq Studio can help transform your ideas into reality.
        </motion.p>

        {/* Action Buttons styled like the standard elements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Scroll back to Portfolio block or a general action */}
          <button 
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-[#D4AF37] hover:text-white bg-black/60 border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Solid Golden Start Project triggering standard Contact form */}
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5DF88] to-[#C59B27] hover:scale-[1.03] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] cursor-pointer"
          >
            <span>Start Your Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
