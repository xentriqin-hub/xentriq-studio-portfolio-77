import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [percent, setPercent] = useState(0);
  const [subText, setSubText] = useState('CALIBRATING GPU PARALLAX...');

  useEffect(() => {
    const subTexts = [
      'BOOTING XENTRIQ VORTEX ENGINE...',
      'CALIBRATING GEOMETRIC SHADERS...',
      'SAMPLING VOLUMETRIC VECTOR MAPS...',
      'SYNCHRONIZING AI ORCHESTRATION LABS...',
      'COMPOSITING LUXURY DIGITAL LAYERS...'
    ];

    let timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinish();
          }, 600);
          return 100;
        }
        
        // Random incremental counts to feel like realistic computational loads
        const diff = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + diff, 100);
        
        const subIdx = Math.floor((next / 100) * subTexts.length);
        if (subTexts[subIdx]) {
          setSubText(subTexts[subIdx]);
        }
        
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] text-white"
        id="luxury-loader"
      >
        <div className="relative flex flex-col items-center">
          {/* Pulsing logo with dynamic golden halo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.92, 1, 0.92], 
              opacity: 1,
              filter: ['drop-shadow(0 0 10px rgba(212, 175, 55, 0.35))', 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.65))', 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.35))']
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Logo size={120} glow={false} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 font-display text-xs tracking-[0.4em] text-white/50 font-semibold"
          >
            XENTRIQ STUDIO
          </motion.h2>

          {/* Golden luxury loader percentage */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-display text-4xl font-light tracking-widest text-[#D4AF37]"
          >
            {percent}%
          </motion.div>

          {/* Elegant active progress line */}
          <div className="relative mt-6 w-56 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#AA8015] via-[#F5DF88] to-[#AA8015]"
            />
          </div>

          {/* Interactive loading logs */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={subText}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 0.45, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-4 font-mono text-[10px] tracking-wider text-center text-gray-400"
            >
              {subText}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
