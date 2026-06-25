import { ShieldCheck, Flame, Palette, Milestone, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Apple-Inspired Visual Prestige',
      desc: 'We craft immersive digital environments with liquid glassmorphism, precise tracking, spacious grids, and deliberate animations that generate absolute user confidence.',
      icon: Palette,
      color: 'text-white',
      bgGlow: 'from-indigo-500/10 to-indigo-600/5'
    },
    {
      title: 'Full-Stack Technical Safeguards',
      desc: 'We enforce strict TypeScript, proxy secrets securely through custom server endpoints, and manage databases to keep enterprise integrations fully protected.',
      icon: ShieldCheck,
      color: 'text-white',
      bgGlow: 'from-emerald-500/10 to-emerald-600/5'
    },
    {
      title: 'Blazing Fast Performance Scores',
      desc: 'We optimize Core Web Vitals to achieve near-instantaneous load speeds, ensuring flawless user navigation, search discoverability, and high client retention.',
      icon: Flame,
      color: 'text-white',
      bgGlow: 'from-rose-500/10 to-rose-600/5'
    },
    {
      title: 'Tailored Automation & AI Audits',
      desc: 'We deploy robust, autonomous agents and custom chatbots securely inside private virtual containers, allowing you to scale internal workflows safely.',
      icon: Milestone,
      color: 'text-white',
      bgGlow: 'from-purple-500/10 to-purple-600/5'
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 relative overflow-hidden bg-[#05050a]/40">
      {/* Background blur */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none animate-float-3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-purple-300 tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5 text-white" />
            <span>OUR EDGE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
            Engineered for <span className="text-gradient-purple">Absolute Trust</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            We abandon standard templates and generic practices to create digital products that operate at the pinnacle of visual prestige and processing speed.
          </p>
        </motion.div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl p-6 sm:p-8 glass-card-premium flex gap-5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glowing fluid accent backing card */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/1 opacity-10 group-hover:to-white/2 transition-all duration-500 pointer-events-none" />

                {/* Left Icon Panel */}
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shadow-lg group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10 transition-all duration-500">
                    <Icon className={`w-6 h-6 ${point.color}`} />
                  </div>
                </div>

                {/* Right Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
