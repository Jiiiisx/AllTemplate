
import React, { useState, useRef, useEffect } from 'react';
import { getCoffeeAdvice } from '../services/geminiService';

const BrewAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Welcome to Brew & Co. How can I refine your coffee ritual today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getCoffeeAdvice(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response || "Something went wrong." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-clay text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined !text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-cream border border-espresso/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-6 bg-espresso text-white flex items-center justify-between">
            <div>
              <h3 className="font-display font-medium text-sm tracking-widest uppercase">Brew Assistant</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Head Roaster AI</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-clay text-white rounded-br-none' 
                  : 'bg-tan/30 text-espresso rounded-bl-none border border-espresso/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-tan/30 p-4 rounded-xl rounded-bl-none animate-pulse flex gap-1">
                  <div className="w-1 h-1 bg-espresso/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-espresso/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-espresso/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-espresso/5">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about beans, brewing, or stories..."
                className="w-full bg-cream rounded-full py-3 px-6 pr-12 text-xs focus:outline-none focus:ring-1 focus:ring-clay border border-espresso/5"
              />
              <button 
                onClick={handleSend}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-clay hover:text-espresso transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrewAssistant;
