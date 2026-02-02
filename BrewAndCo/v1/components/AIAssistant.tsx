
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: 'Welcome to Brew & Co. I am your personal barista assistant. How can I help you find the perfect extraction today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a sophisticated barista and coffee expert for "Brew & Co." 
          Our brand values: Minimalism, Single-Origin beans, Scientific precision, and Austin-based craft.
          Your tone is professional, elegant, and helpful. 
          Keep responses concise (max 3 sentences) and focused on coffee quality, brewing methods, or our philosophy.`,
        },
      });

      const aiText = response.text || "I apologize, I'm having trouble connecting to the roast logs. How else can I assist?";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Forgive me, my calibration is slightly off. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[200] w-14 h-14 bg-primary text-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'temp_preferences_custom'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 z-[200] w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
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
                onClick={handleSend}
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
