import { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'ai' | 'design-marketing'>('all');
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  // Filter tabs
  const tabs = [
    { id: 'all', label: 'All Solutions' },
    { id: 'development', label: 'Software & Mobile' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'design-marketing', label: 'Design & Growth' },
  ];

  // Map category fields
  const filteredServices = SERVICES.filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'development') return service.category === 'development';
    if (activeTab === 'ai') return service.category === 'ai';
    if (activeTab === 'design-marketing') return service.category === 'design' || service.category === 'marketing';
    return true;
  });

  // Dynamic Lucide icon helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-white transition-colors duration-300" />;
    }
    return <Icons.Cpu className="w-6 h-6 text-white" />;
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-[#05050a]/20">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-indigo-300 tracking-wider mb-4">
            <Icons.Layers className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>EXPERT CAPABILITIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
            Bespoke Services <span className="text-gradient-purple">Designed for Scale</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            We build state-of-the-art software systems, hyper-optimized interfaces, and autonomous AI agents designed to integrate directly into your operations.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-display font-medium text-xs sm:text-sm transition-all duration-300 border cursor-pointer relative ${
                activeTab === tab.id
                  ? 'bg-white/10 border-indigo-500/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                  : 'bg-white/2 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full border border-indigo-500/20 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredIndex(service.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectService(service)}
                className="group p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-500 cursor-pointer relative overflow-hidden liquid-reflection"
              >
                {/* Visual Glass highlights inside card */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
                  hoveredIndex === service.id ? 'bg-indigo-500/15 scale-125' : 'bg-transparent'
                }`} />

                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10 transition-all duration-500 shadow-sm">
                      {renderIcon(service.icon)}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      {service.category}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Badges & CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {service.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-indigo-200/80 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-indigo-400 group-hover:text-white transition-colors">
                    Details
                    <Icons.ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
