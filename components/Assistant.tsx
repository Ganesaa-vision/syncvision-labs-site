import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SyncVision Intelligence Online. Operational. How can I assist with your systems architecture today?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);
    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
    } catch (error) {
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-titanium border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-[90vw] sm:w-[400px] h-[600px] mb-6 flex flex-col overflow-hidden animate-fade-in font-mono ring-1 ring-white/5">
          <div className="bg-armor p-6 border-b border-white/10 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-interstellar rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
                <span className="font-bold text-[10px] uppercase tracking-widest text-slate-100">SyncVision.Intel_v3</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth no-scrollbar" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-[12px] leading-relaxed rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-interstellar text-slate-200 rounded-tr-none' : 'bg-armor border border-white/5 text-slate-200 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-armor border border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                   <div className="w-1.5 h-1.5 bg-interstellar rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-interstellar rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-interstellar rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          <div className="p-6 bg-armor border-t border-white/10 shadow-inner">
            <div className="flex gap-2">
              <input 
                type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query system..." 
                className="flex-1 bg-titanium border border-white/10 focus:border-interstellar px-5 py-3 rounded-xl text-[12px] outline-none transition-all text-slate-200 placeholder-slate-400/20 shadow-inner"
              />
              <button 
                onClick={handleSend} disabled={!inputValue.trim() || isThinking}
                className="bg-interstellar text-slate-200 px-5 py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-lg active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-interstellar text-slate-100 w-16 h-16 flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 ring-4 ring-interstellar/10 active:scale-95"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        ) : (
            <div className="font-mono font-black text-2xl tracking-tighter">V</div>
        )}
      </button>
    </div>
  );
};

export default Assistant;