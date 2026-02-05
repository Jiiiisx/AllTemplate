import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SITE_CONFIG } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: `Welcome to ${SITE_CONFIG.name}. I am your personal barista assistant. How can I help you find the perfect extraction today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const menuInfo = SITE_CONFIG.menu.categories.map(cat => 
    `${cat.name}: ${cat.items.map(i => `${i.name} (${i.price}) - ${i.description}`).join(', ')}`
  ).join('\n');

  const systemPrompt = `SYSTEM INSTRUCTION: You are a professional barista for ${SITE_CONFIG.name}. 
  Philosophy: ${SITE_CONFIG.about.description}. 
  Menu: ${menuInfo}. 
  Tone: Minimalist, elegant, concise.
  
  USER QUESTION: `;

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (overrideInput?: string) => {
    const messageToSend = overrideInput || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          maxOutputTokens: 150,
          temperature: 0.7,
        }
      });

      const result = await model.generateContent(systemPrompt + messageToSend);
      const response = await result.response;
      const aiText = response.text();
      
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error: any) {
      console.error('AI Error Details:', error);
      
      let msg = "Maaf, sistem kami sedang mengalami kendala teknis. Silakan coba lagi nanti.";
      
      if (error.message?.includes('404')) {
        msg = "Error 404: Model 'gemini-2.5-flash' belum tersedia di wilayah atau API Anda.";
      } else if (error.message?.includes('429')) {
        msg = "Kuota penggunaan model ini sudah habis atau dibatasi oleh Google.";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', text: msg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    { label: "☕ Recommend", text: "What coffee do you recommend for me?" },
    { label: "🕒 Hours", text: "When are you open?" },
    { label: "📍 Location", text: "Where is the cafe located?" }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[200] w-14 h-14 bg-primary text-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'temp_preferences_custom'}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 z-[200] w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-6 bg-primary text-white border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Brew Assistant</h3>
              <p className="text-[10px] text-secondary tracking-widest uppercase">Extraction Expert</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 text-xs leading-relaxed rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-secondary text-primary rounded-tr-none font-medium' 
                    : 'bg-accent dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-accent dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSend(s.text)}
                disabled={isLoading}
                className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full text-[10px] font-medium text-slate-600 dark:text-slate-400 hover:border-secondary hover:text-secondary transition-all disabled:opacity-50 active:scale-95"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our roasts..."
                className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-full py-3 px-6 pr-12 text-xs focus:ring-1 focus:ring-secondary transition-all"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary p-1 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined !text-[20px]">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;