import React from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  index?: number;
}

// Spatial UI Design System: 3D tilt animations using Framer Motion.
export default function TiltCard({
  children,
  className = '',
  onClick,
}: TiltCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative rounded-[24px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 text-left transition-all duration-200 ease-out hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_12px_40px_-10px_rgba(255,255,255,0.1)] ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
