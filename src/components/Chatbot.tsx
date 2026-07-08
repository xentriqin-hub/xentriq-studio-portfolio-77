import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const SUGGESTED_PROMPTS = [
  "What services do you offer?",
  "What is the average project budget?",
  "How can I start a project with Xentriq Studio?",
  "Tell me about your tech stack"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: "Hi! I'm Xen, your Xentriq Studio AI assistant. How can I help you bring your next software, application, or digital product to life today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate a response from Xen.');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'model', content: data.text }]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred. Please try again.');
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: "I'm sorry, I encountered an issue connecting to my core brain. Please ensure the Gemini API key is configured or try again in a moment."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chatbot-trigger"
            key="chat-trigger-btn"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#B497CF] text-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer transition-shadow"
          >
            <MessageSquare className="w-6 h-6 text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="w-[90vw] sm:w-[380px] h-[550px] rounded-2xl bg-[#09090b] border border-white/[0.08] flex flex-col overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://i.ibb.co/G3TcSTkz/xentriq-studio-intagram-logo.jpg" 
                  alt="Xen Logo" 
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-xl object-cover shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                />
                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-display font-semibold text-sm text-white">Xen</span>
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">AI Studio Assistant</span>
                </div>
              </div>
              <button
                id="chatbot-close"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center border border-white/[0.05] transition-colors cursor-pointer text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/[0.05] scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#A855F7] text-white rounded-tr-none text-left font-sans shadow-md'
                        : 'bg-white/[0.03] text-gray-200 border border-white/[0.05] rounded-tl-none text-left font-sans'
                    }`}
                  >
                    {msg.role === 'model' && (
                      <div className="flex items-center space-x-1 mb-1 font-mono text-[10px] text-gray-400 tracking-wider">
                        <Sparkles className="w-3 h-3 text-[#A855F7]" />
                        <span>XEN</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line text-[13px]">{msg.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] text-gray-400 border border-white/[0.05] rounded-2xl rounded-tl-none p-3.5 max-w-[85%]">
                    <div className="flex items-center space-x-1.5 py-1">
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-1.5 justify-start">
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] text-gray-300 hover:text-white px-2.5 py-1.5 rounded-full transition-all text-left cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white/[0.01] border-t border-white/[0.06] flex items-center space-x-2"
            >
              <input
                id="chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Xen about services, budgets..."
                disabled={isLoading}
                className="flex-1 bg-white/[0.03] border border-white/[0.06] focus:border-[#A855F7]/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 outline-none transition-colors disabled:opacity-50"
              />
              <button
                id="chatbot-submit"
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#A855F7] to-[#B497CF] flex items-center justify-center text-black font-semibold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
