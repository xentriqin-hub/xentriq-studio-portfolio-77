import React from 'react';
import * as Icons from 'lucide-react';
import { comparisonMetrics } from '../data';
import TiltCard from './TiltCard';

function MagicIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us"
      className="relative py-28 px-6 md:px-10 max-w-7xl mx-auto z-15 min-h-[80vh] flex flex-col justify-center border-t border-white/5"
    >
      {/* Editorial Header */}
      <div className="text-center mb-20">
        <span className="font-mono text-[10px] tracking-[0.6em] text-white uppercase">
          why choose us
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
          THE BENCHMARK OF <span className="text-white font-semibold">SUPERIORITY</span>
        </h2>
        <div className="h-0.5 w-24 bg-white mx-auto mt-4" />
      </div>

      {/* Bento Differentiator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisonMetrics.map((item, idx) => (
          <TiltCard
            key={item.title}
            index={idx}
            className="flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <MagicIcon name={item.icon} className="w-5 h-5" />
            </div>

            <div className="mt-6">
              <h3 className="font-display text-lg font-bold tracking-wide text-white mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
