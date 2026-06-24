import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "7824918457";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Xentriq%20Studio%20Team,%20I'm%20interested%20in%20partnering%20on%20a%20luxury%20digital%20solution.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Decorative luxury greeting chat bubble */}
      {isOpen && (
        <div
          className="p-4 rounded-2xl bg-white/95 border border-gray-200 backdrop-blur-md shadow-2xl max-w-xs relative text-left"
        >
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/50 rounded-tl-lg" />
          
          <p className="font-mono text-[9px] tracking-widest text-white font-bold uppercase mb-1">
            DIRECT PORTAL DIRECTIVE
          </p>
          <p className="font-sans text-xs text-gray-600 leading-relaxed mb-3">
            Need ultra-rapid consultation? Chat with a premium engineering coordinator directly in under 5 minutes.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white font-sans text-[10px] font-bold uppercase tracking-wider text-black hover:bg-gray-200 transition-all text-center w-full justify-center"
          >
            INITIATE SECURE CHAT
          </a>
        </div>
      )}

      {/* Floating high-fidelity WhatsApp Launcher */}
      <button
        id="whatsapp-floating-button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 hover:border-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden transition-all duration-300 focus:outline-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7B2FF7] via-black to-[#9D4EDD] opacity-100 transition-all duration-500 rounded-full" />
        
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 relative z-10 transition-all duration-300"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-white" />
          <path 
            d="M12.016 4C7.591 4 4 7.619 4 12.079c0 1.545.434 2.986 1.189 4.223L4 20l3.812-1.22c1.171.642 2.512 1.009 3.938 1.009 4.425 0 8.016-3.619 8.016-8.08C19.766 7.618 16.175 4 12.016 4zm4.492 11.233c-.244.693-1.218 1.272-1.683 1.341-.453.067-.935.109-2.923-.717-2.545-1.054-4.183-3.666-4.31-3.837-.127-.171-1.026-1.378-1.026-2.631s.655-1.871.888-2.115c.234-.244.51-.305.679-.305.17 0 .34.004.488.011.153.007.362-.058.566.444.204.502.697 1.716.756 1.838.059.122.098.264.017.428-.08.163-.122.264-.242.405-.121.141-.253.315-.361.423-.121.122-.248.254-.107.498.141.244.624 1.034 1.336 1.671.918.822 1.691 1.077 1.933 1.198.242.122.383.102.524-.059.141-.162.607-.711.768-.953.162-.244.323-.203.543-.122.22.081 1.396.663 1.637.785.241.122.403.183.463.284.059.102.059.59-.185 1.283z" 
            fill="white" 
          />
        </svg>
        <div className="absolute inset-0 border border-white/50 rounded-full" />
      </button>
    </div>
  );
}
