
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, Sparkle } from 'lucide-react';
import { askCivioAssistant } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Bonjour Jean ! Je suis votre concierge numérique. Comment puis-je vous assister aujourd'hui ?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askCivioAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-24 md:bottom-10 w-16 h-16 bg-civio-gradient rounded-[22px] shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center text-white z-40 hover:scale-110 active:scale-95 transition-all group float-animation"
      >
        <Sparkles className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:right-8 md:bottom-28 md:w-[420px] md:h-[650px] bg-white md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-500 glass">
          <div className="p-8 bg-slate-900 text-white flex items-center justify-between shrink-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-civio-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <Bot size={28} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg">Concierge IA</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Agent Actif</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2.5 hover:bg-white/10 rounded-full transition-colors relative z-10"
            >
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[28px] text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-xl shadow-blue-500/20' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm font-medium'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[28px] rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5 items-center">
                   <Sparkle size={12} className="text-blue-500 animate-spin" />
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100 shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Comment puis-je vous aider ?"
                className="w-full pl-6 pr-14 py-4 bg-slate-100 border-none rounded-2xl text-sm font-medium outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-3 p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/30 disabled:bg-slate-200 disabled:shadow-none transition-all active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
               <span>CIVIO Intelligence</span>
               <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
               <span>Beta 1.0</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
