import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, X, ArrowLeft, RefreshCw, Cpu, MessageSquareDot } from 'lucide-react';
import CardParticles from './CardParticles';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Greetings. I am Zephyr, Xentriq's automated AI engineering coordinator. How can I facilitate your digital supremacy? Our team is optimized to deliver immersive digital solutions in under 2 weeks.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Suggested prompts
  const suggestions = [
    { text: "⚡ How is delivery under 2 weeks?", payload: "How is it possible for you to deliver bespoke premium websites or apps in under 2 weeks?" },
    { text: "🛠️ Suggest a tech stack", payload: "I need a high-performance web app dashboard. What tech stack does Xentriq Studio recommend?" },
    { text: "📱 Custom Mobile Apps", payload: "Do you build custom iOS and Android mobile apps? What are the timelines and approaches?" },
    { text: "💼 Initiate partnership", payload: "I would like to start a project with Xentriq Studio. How do we initiate collaboration?" },
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-zephyr-chat', handleOpenChat);
    return () => {
      window.removeEventListener('open-zephyr-chat', handleOpenChat);
    };
  }, []);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    setError(null);
    setLoading(true);

    const userMessage: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Our AI core is currently cycling. Please retry.');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ]);
    } catch (err: any) {
      console.error("Chatbot Fetch Error:", err);
      setError(err.message || 'Apologies, a response could not be secured.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Core initialized. I am Zephyr, Xentriq's AI coordinator. State your requirement and we will outline an architectural framework.",
      },
    ]);
    setError(null);
  };

  // Particles hover tracking for Chat panel
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {/* Floating launcher trigger - stacked above WhatsApp button (at bottom-24) */}
      <div className="fixed bottom-24 right-6 z-50 pointer-events-auto">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-black border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-[0_8px_32px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden transition-all duration-300"
        >
          {/* Subtle golden background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent group-hover:scale-110 transition-transform duration-500 rounded-full" />
          
          <Sparkles className="w-5 h-5 text-[#D4AF37] relative z-10 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white relative z-10 transition-colors">
            Chat with AI Agent
          </span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse relative z-10" />
        </motion.button>
      </div>

      {/* AI Chat Drawer / Sidebar on the right */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto bg-black/75 backdrop-blur-md">
            
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />

            {/* Chat Panel Box - Minimal and Flat */}
            <motion.div
              ref={panelRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="w-full max-w-lg h-full bg-[#030303] shadow-2xl relative flex flex-col justify-between overflow-hidden"
            >
              {/* Luxury background particles integration */}
              <CardParticles isHovered={isHovered} mouseX={mousePos.x} mouseY={mousePos.y} count={35} />

              {/* Chat Header */}
              <div className="p-6 border-b border-white/5 bg-[#030303]/98 relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1 flex items-center justify-center text-[#D4AF37]">
                    <Cpu className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-white tracking-wider flex items-center gap-2">
                      ZEPHYR AI ENGINE
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[9px] tracking-widest text-[#D4AF37]/80 uppercase">
                        Active Cloud Agent • Free Tier
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Reset trigger */}
                  <button 
                    onClick={resetChat}
                    className="p-1 text-gray-400 hover:text-[#D4AF37] transition-all cursor-pointer focus:outline-none"
                    title="Initialize New Session"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  {/* Close trigger */}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-400 hover:text-white transition-all cursor-pointer focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages Body Container - Fixed Scrollability with flex-1 min-h-0 */}
              <div 
                ref={chatContainerRef}
                className="flex-1 min-h-0 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent relative z-10 touch-pan-y"
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* FLAT messaging style with NO boxes or borders */}
                    <div
                      className={`max-w-[90%] py-1 font-sans text-xs leading-relaxed ${
                        msg.role === 'user' ? 'text-right pl-6' : 'text-left pr-6'
                      }`}
                    >
                      {/* Sub-label for sender identifier */}
                      <p className={`font-mono text-[8px] uppercase tracking-widest mb-1 opacity-40 ${
                        msg.role === 'user' ? 'text-[#D4AF37]' : 'text-gray-400'
                      }`}>
                        {msg.role === 'user' ? 'VISITOR INPUT' : 'ZEPHYR AGENT'}
                      </p>
                      
                      {/* Body Message - Flat, gorgeous, high-contrast text */}
                      <p className="whitespace-pre-line text-[13px] tracking-wide font-light text-gray-200 leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Loading indicator */}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="py-1 max-w-[90%] text-gray-400">
                      <p className="font-mono text-[8px] uppercase tracking-widest mb-1.5 opacity-40">
                        CONSTRUCTING COILED FRAMEWORK...
                      </p>
                      <div className="flex items-center gap-1.5 pl-1">
                        <motion.span animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <motion.span animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <motion.span animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-2 text-xs text-red-400"
                  >
                    <p className="font-mono text-[8px] tracking-wider uppercase font-bold mb-1">
                      CORE INTERRUPTED
                    </p>
                    <p className="font-light">{error}</p>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Footer Panel: Suggestion Chips & Prompt Input */}
              <div className="p-6 border-t border-white/5 bg-[#030303]/98 relative z-10 space-y-4">
                
                {/* Prompt suggestions list - flat text trigger elements */}
                {messages.length === 1 && !loading && (
                  <div className="space-y-1.5">
                    <p className="font-mono text-[8px] tracking-widest uppercase text-gray-500 pl-1">
                      SUGGESTED DIRECTIVES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(sug.payload)}
                          className="text-[10px] text-gray-400 hover:text-[#D4AF37] tracking-wider font-mono text-left block cursor-pointer transition-colors focus:outline-none mr-3"
                        >
                          // {sug.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Fields - Elegant base border only */}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    placeholder="Inquire about custom modules, stack architecture..."
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#D4AF37]/80 text-white placeholder-gray-600 py-3.5 pl-1 pr-12 text-xs transition-all focus:outline-none select-text disabled:opacity-50"
                  />
                  <button
                    onClick={() => handleSendMessage(input)}
                    disabled={loading || !input.trim()}
                    className="absolute right-0 p-2 text-gray-400 hover:text-[#D4AF37] disabled:opacity-30 disabled:hover:text-gray-400 transition-colors cursor-pointer focus:outline-none flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center pt-1">
                  <p className="font-mono text-[7.5px] uppercase tracking-widest text-[#D4AF37]/60">
                    Xentriq AI Engine v1.2 • Built on Gemini 3.5
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
