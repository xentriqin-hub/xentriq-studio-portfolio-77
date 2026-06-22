import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export default function Logo({ className = '', size = 48, glow = true }: LogoProps) {
  return (
    <div 
      className={`${className} flex items-center justify-center overflow-hidden rounded-full transition-all duration-300`}
      style={{
        width: size,
        height: size,
        filter: glow ? 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.455))' : 'none',
      }}
    >
      <img
        src="https://i.ibb.co/cct88CtX/Chat-GPT-Image-Jun-22-2026-09-33-16-AM.png"
        alt="Xentriq Studio Logo"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover select-none scale-[1.25] translate-y-[11%] transition-transform duration-300"
      />
    </div>
  );
}

