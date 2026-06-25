import { Cpu, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import FantasyArtifact from './FantasyArtifact';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-purple-300 tracking-wider mb-4">
            <RefreshCw className="w-3 h-3 text-white animate-spin-slow" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6">
            Pioneering the Next Era of <span className="text-gradient-purple">Digital Alchemy</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed">
            At Xentriq Studio, we discard standard layouts and generic code. We design and assemble bespoke digital environments with an unwavering focus on visual luxury, extreme speed, and cognitive AI agent automation.
          </p>
        </motion.div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main philosophy box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl glass-card-premium p-8 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)]"
          >
            <div>
              <h3 className="font-display font-semibold text-2xl text-white mb-4">
                Exquisite Craft, Extreme Performance
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Our design signature is Apple-inspired minimalism and liquid glassmorphism. Every interface is a highly responsive layer that feels physical and interactive. Beneath this visual luxury lies high-fidelity TypeScript, clean server-side code, and intelligent database designs engineered to scale infinitely.
              </p>
              <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
                Whether creating advanced Progressive Web Apps, native iOS/Android suites, or deploying complex custom AI chatbots, we ensure every interaction is optimized down to milliseconds.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <h4 className="font-display font-medium text-white text-sm mb-1">Clean Engineering</h4>
                <p className="font-sans text-xs text-gray-400">Strict TypeScript, secure API proxies, and clean semantic architecture.</p>
              </div>
              <div>
                <h4 className="font-display font-medium text-white text-sm mb-1">Ethical AI Integrations</h4>
                <p className="font-sans text-xs text-gray-400">Secure, sandboxed data environments using premier model endpoints.</p>
              </div>
            </div>
          </motion.div>

          {/* Core Vision box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-2xl glass-card p-8 flex flex-col justify-center hover:border-purple-500/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            
            <h3 className="font-display font-semibold text-2xl text-white mb-4">
              Autonomous AI Power
            </h3>
            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              We do not just attach simple AI prompts to our products. We build fully capable AI Agents, automated task-reasoning pipelines, and secure custom training adapters that act as full digital employees.
            </p>
            <div className="p-4 rounded-xl bg-[#05050a]/60 border border-white/5 flex gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/10">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-sans font-medium text-xs text-white">Xentriq AI Model Layer</div>
                <div className="font-mono text-[9px] text-gray-400 mt-1">Autonomous reasoning with zero latency. Built server-side safely.</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive 3D Artifact Showcase Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 rounded-2xl glass-card-premium p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-purple-500/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.03)] text-left"
          >
            <div className="md:col-span-7">
              <span className="font-mono text-[9px] text-indigo-300 block mb-2 tracking-widest font-medium">MATHEMATICAL PROJECTED 3D GEOMETRY</span>
              <h3 className="font-display font-semibold text-2xl text-white mb-4">
                Interactive Multi-Dimensional Artifacts
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Hover, drag, and toggle our digital matrix artifacts on the right. Rather than using bloated external libraries or massive assets, we construct custom 3D projection rendering matrices and real-time lighting calculations directly on low-overhead HTML5 Canvases.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                  <span>Real-time painter's algorithm depth sorting for perfect face render order.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span>Interactive light vector tracking derived dynamically from screen cursor coordinates.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>Ultra-lightweight footprint (~5KB of pure mathematical logic, zero external dependencies).</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <FantasyArtifact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
