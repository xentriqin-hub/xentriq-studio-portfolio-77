import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-[#05050a]/20">
      {/* Background radial soft light */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-indigo-300 tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white mb-6">
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base">
            Can't find what you are looking for? Learn more about our technical workflows, timeline models, and AI automation compliance safeguards.
          </p>

          {/* Search box inside FAQ */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input w-full px-5 py-3 rounded-full text-sm text-white placeholder-gray-500 font-sans border border-white/5"
            />
          </div>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white/5 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.08)]'
                      : 'bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/3'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-white font-display font-medium text-sm sm:text-base cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-white shrink-0">
                        <HelpCircle className="w-4 h-4 text-white" />
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <div className="px-6 py-5 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty fallback */}
          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center glass-card rounded-2xl">
              <p className="font-sans text-sm text-gray-400">
                No questions found matching "{searchQuery}". Please write our strategy consultants at{' '}
                <a href="mailto:admin@xentriqstudio.com" className="text-indigo-400 font-semibold hover:underline">
                  admin@xentriqstudio.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
