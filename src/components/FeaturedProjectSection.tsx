import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'motion/react';
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

function AnimatedCounter({ value, duration = 1.2 }: { value: string; duration?: number }) {
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
      const easeProgress = progress * (2 - progress);
      setDisplayValue(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  if (!isNumericStr(value)) {
    return (
      <span className="font-display font-bold text-white">
        {value}
      </span>
    );
  }

  const nonDigitSuffix = value.replace(/\d+/g, '');
  return (
    <span ref={ref} className="font-display font-bold text-white">
      {displayValue}
      {nonDigitSuffix}
    </span>
  );
}

export default function FeaturedProjectSection() {
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
      {/* 1. Header Block */}
      <div className="text-center mb-16 relative">
        <span className="font-mono text-[10px] tracking-[0.6em] text-white uppercase font-semibold block mb-2">
          FEATURED PRODUCT
        </span>
        
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-none">
          TN <span className="text-white">TODAY</span>
        </h2>

        <p className="mt-4 font-sans text-xs sm:text-sm tracking-[0.25em] text-gray-400 font-medium uppercase">
          Tamil Nadu's Modern Government News Platform
        </p>
        <div className="h-[2px] w-20 bg-white mx-auto mt-6" />
      </div>

      {/* 2. Core Narrative Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-relaxed border-l-2 border-white pl-5">
            Empowering citizens through verified real-time digital announcement networks.
          </h3>

          <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
            TN Today is a modern digital news platform focused on delivering official Tamil Nadu Government news in a fast, clean, and user-friendly experience. The platform is designed to help citizens, students, job seekers, and professionals stay updated with trusted government announcements, schemes, education, employment, public services, and important state updates.
          </p>

          <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
            The project is being developed by Xentriq Studio with a strong focus on speed, reliability, accessibility, and a premium user experience.
          </p>
        </div>

        {/* Spatial UI Platform Badges */}
        <div className="lg:col-span-6">
          <h4 className="font-mono text-[10px] tracking-[0.3em] text-white uppercase font-bold mb-6">PREMIUM SPECIFICATIONS</h4>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-[10px] sm:text-xs font-mono tracking-widest text-gray-300 uppercase transition-all duration-200 flex items-center gap-2.5 shadow-sm select-none"
                >
                  <Icon className="w-4 h-4 text-[#7B2FF7] shrink-0" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Static Layered Spatial UI Showcase & Development Status */}
      <div className="mb-24">
        <h4 className="font-mono text-[10px] tracking-[0.3em] text-white uppercase font-bold text-center mb-10">INTERACTIVE CONCEPT SHOWCASE</h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          {/* Mockups Side */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            {/* ANDROID PHONE MOCKUP (Left) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center relative group scale-75 md:scale-100">
              <div className="relative w-[260px] h-[520px] bg-[#050505] rounded-[42px] border-[4px] border-white/10 group-hover:border-white/50 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 origin-center">
                {/* Top Speaker */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-white/5 rounded-full z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2" />
                  <span className="w-10 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Simulated App Screen */}
                <div className="w-full h-full p-3 pt-8 bg-[#050505] flex flex-col overflow-hidden text-left relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-white/40 px-2 mb-2">
                    <span>TN Today</span>
                    <div className="flex items-center gap-1">
                      <span>• LIVE • </span>
                      <span>10:42 AM</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="border-b border-white/10 pb-2 mb-2 flex justify-between items-center">
                    <span className="font-display text-xs tracking-[0.2em] font-bold text-white">TN TODAY</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[7px] uppercase tracking-wider font-semibold">BREAKING</span>
                  </div>

                  {/* News Main Card */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 flex flex-col gap-1.5 mb-2 shadow-sm">
                    <div className="h-20 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white/40" />
                      <span className="absolute bottom-1 left-2 font-mono text-[6px] text-white/60 font-semibold">GOVERNMENT OF TAMIL NADU</span>
                    </div>
                    <span className="text-[7px] font-mono text-white/60 uppercase tracking-wider font-semibold">CM SCHEMES • TODAY</span>
                    <h5 className="font-display text-[10px] text-white leading-tight font-medium">
                      Honorable CM Launches New Tech & Digital Skill Scholarship and Incubators Scheme
                    </h5>
                  </div>

                  {/* Miniature feed list */}
                  <div className="flex flex-col gap-1.5 overflow-hidden flex-1 select-none">
                    <div className="p-2 rounded-lg border border-gray-200 bg-white flex gap-2 items-center">
                      <div className="w-6 h-6 rounded bg-[#7B2FF7]/10 shrink-0 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-[#7B2FF7]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-[8px] text-gray-300 truncate font-medium">Welfare applications now open for state exams coaching</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg border border-gray-200 bg-white flex gap-2 items-center">
                      <div className="w-6 h-6 rounded bg-[#7B2FF7]/10 shrink-0 flex items-center justify-center">
                        <Cpu className="w-3 h-3 text-[#7B2FF7]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-[8px] text-gray-300 truncate font-medium">Tech Parks expand across tier-2 cities in state roadmap</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Controls */}
                  <div className="border-t border-gray-200 pt-2 mt-auto flex justify-around text-gray-400 text-[7px] font-mono uppercase tracking-widest font-semibold">
                    <span className="text-[#7B2FF7]">FEED</span>
                    <span>SEARCH</span>
                    <span>SAVED</span>
                    <span>PROFILE</span>
                  </div>
                </div>
              </div>

              <p className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase mt-4 font-semibold">ANDROID APPLICATION</p>
            </div>

            {/* DESKTOP PWA MOCKUP (Right) */}
            <div className="md:col-span-7 flex flex-col items-center justify-center relative group scale-75 md:scale-100 mt-8 md:mt-0">
              <div className="relative w-full max-w-[480px] h-[300px] bg-white rounded-2xl border-[3px] border-gray-200 group-hover:border-[#2563EB]/50 shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
                {/* Simulated PWA Desktop Screen */}
                <div className="w-full h-full bg-gray-50 flex flex-col overflow-hidden text-left relative">
                  {/* Browser Bar */}
                  <div className="w-full bg-gray-100 border-b border-gray-200 py-1.5 px-3 flex items-center justify-between text-gray-500 text-[7px] font-mono select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <span className="w-2 h-2 rounded-full bg-green-400/80" />
                    </div>
                    <div className="px-4 py-0.5 rounded bg-white border border-gray-200 w-52 text-center text-[6px] tracking-wide text-gray-500">
                      https://tntoday.xentriqstudio.com
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span className="text-[#2563EB] text-[6px]">SECURE</span>
                    </div>
                  </div>

                  {/* PWA App Body */}
                  <div className="flex-1 flex overflow-hidden">
                    {/* Left Sidebar Menu */}
                    <div className="w-28 bg-gray-100 border-r border-gray-200 p-2.5 flex flex-col gap-2 select-none">
                      <span className="font-display text-[8px] font-bold text-[#2563EB] tracking-widest pl-1">TN TODAY</span>
                      
                      <div className="flex flex-col gap-1 text-[6.5px] font-mono text-gray-500 font-medium">
                        <span className="bg-[#2563EB]/15 text-[#2563EB] px-2 py-1 rounded pl-1 font-semibold">STATE FEED</span>
                        <span className="hover:text-[#111111] px-2 py-1 rounded pl-1">SCHEMES DEPT</span>
                        <span className="hover:text-[#111111] px-2 py-1 rounded pl-1">EMPLOYMENT</span>
                        <span className="hover:text-[#111111] px-2 py-1 rounded pl-1">PUBLIC HEALTH</span>
                        <span className="hover:text-[#111111] px-2 py-1 rounded pl-1">EDUCATION NEWS</span>
                        <span className="hover:text-[#111111] px-2 py-1 rounded pl-1">BOOKMARKED</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-3.5 flex flex-col overflow-hidden bg-white">
                      <div className="p-2.5 rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/5 flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <span className="text-[6px] font-mono text-[#2563EB] uppercase tracking-[0.15em] font-bold block">PRODUCTION READY PWA</span>
                          <h6 className="font-display text-[10px] text-[#111111] font-bold leading-none mt-0.5">Tamil Nadu State Circular Hub</h6>
                        </div>
                        <span className="text-[6px] font-mono px-2 py-0.5 bg-[#2563EB]/20 rounded border border-[#2563EB]/30 text-[#2563EB] font-bold uppercase tracking-widest">LIVE DIRECTORY</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 overflow-hidden flex-1">
                        <div className="border border-gray-200 rounded-xl p-2.5 bg-gray-50">
                          <span className="font-mono text-[6px] text-[#2563EB] font-bold block">SCHEME TRACKER</span>
                          <p className="font-display text-[8px] text-[#111111] leading-tight font-medium mt-1">Free laptop for college entrants program database launched</p>
                          <div className="h-0.5 w-6 bg-[#2563EB] mt-2" />
                        </div>
                        <div className="border border-gray-200 rounded-xl p-2.5 bg-gray-50">
                          <span className="font-mono text-[6px] text-[#2563EB] font-bold block">EXAMS SCHEDULER</span>
                          <p className="font-display text-[8px] text-[#111111] leading-tight font-medium mt-1">State administrative exams dates schedule announced officially</p>
                          <div className="h-0.5 w-6 bg-[#2563EB] mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Stand */}
              <div className="w-[500px] h-3 bg-gray-200 rounded-b-xl border-t border-gray-300 shadow-lg relative z-20 flex items-center justify-center">
                <span className="w-16 h-1 bg-gray-300 rounded-full border-t border-white/5" />
              </div>

              <p className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase mt-4 font-semibold">PROGRESSIVE WEB APP (PWA)</p>
            </div>
          </div>

          {/* DEVELOPMENT STATUS (Right Column) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6 z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#7B2FF7] uppercase font-bold mb-1">DEVELOPMENT STATUS</h4>
            
            <div className="rounded-2xl border border-[#2563EB]/30 bg-gray-50 p-5 flex flex-col justify-center items-start gap-2 shadow-sm relative">
              <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
              
              <div>
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-medium">RELEASE ENGINE</span>
                <span className="font-display text-xl font-bold text-[#111111] uppercase tracking-wide block mt-1">Launches Soon</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-medium">PROGRESSIVE WEB APP</span>
                  <span className="font-display text-xs text-[#111111] uppercase tracking-wide font-semibold">Production Ready</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_10px_#10b981]" />
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-medium">ANDROID APP</span>
                  <span className="font-display text-xs text-[#111111] uppercase tracking-wide font-semibold">Coming Very Soon</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_10px_#f59e0b]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Statistics Sub-Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
        {statistics.map((stat, idx) => (
          <div 
            key={idx}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#7B2FF7]/40"
          >
            <div className="font-display text-3xl md:text-5xl font-bold mb-2">
              <AnimatedCounter value={stat.value} />
            </div>
            
            <span className="font-mono text-[10px] tracking-[0.25em] text-gray-600 uppercase font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* 5. Features Cards Grid */}
      <div className="mb-28">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.6em] text-[#2563EB] uppercase font-semibold block mb-2">FEATURES GRID</span>
          <h3 className="font-display text-3xl font-bold text-white uppercase tracking-tight">ENGINEERED TO SPECIFICATION</h3>
          <div className="h-0.5 w-16 bg-[#7B2FF7] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <TiltCard
                key={idx}
                index={idx}
                className="flex flex-col gap-4 min-h-[220px] justify-between text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20 transition-colors duration-200 group-hover:bg-white group-hover:text-black shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="font-display text-sm font-bold leading-tight tracking-wide text-[#111111]">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* 6. Call to Action Section */}
      <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-14 md:p-16 text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#7B2FF7]/10 flex items-center justify-center text-[#7B2FF7] border border-[#7B2FF7]/30">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
          INTERESTED IN BUILDING <br />
          <span className="text-[#7B2FF7]">SOMETHING SIMILAR?</span>
        </h3>

        <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Whether you need a modern website, Android application, Progressive Web App, or custom software solution, Xentriq Studio can help transform your ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-[#7B2FF7] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase font-semibold text-white bg-[#7B2FF7] hover:bg-[#9D4EDD] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start Your Project</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
