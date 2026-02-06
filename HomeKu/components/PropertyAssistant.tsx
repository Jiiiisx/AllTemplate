
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Property } from '../data/properties';

interface PropertyAssistantProps {
  property: Property;
}

export default function PropertyAssistant({ property }: PropertyAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: `Welcome. I am your personal concierge for ${property.title}. How may I assist you with this property today?` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Secure API Key Logic with Validation
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const isKeyValid = apiKey.startsWith('AIza') && apiKey.length > 30;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !apiKey) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const context = `
        You are an elite real estate concierge for "HomeKu". 
        You are currently showing the property: "${property.title}" in ${property.location}.
        Price: ${property.price}. 
        Specs: ${property.beds} beds, ${property.baths} baths, ${property.sqft} sqft.
        Description: ${property.description}.
        Amenities: ${property.amenities.join(', ')}.

        Instructions:
        1. Be extremely polite, sophisticated, and professional.
        2. Answer questions ONLY based on the property data above.
        3. If you don't know the answer (e.g., about specific taxes or nearby schools not mentioned), 
           politely suggest "booking a private tour" for more detailed information.
        4. Keep answers concise but elegant.
      `;

      const prompt = `${context}

User Question: ${userMessage}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "I apologize, but I am having trouble connecting to my service. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Bubble Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-brand-gold text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'auto_awesome'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-card border border-theme shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-6 bg-background border-b border-theme flex justify-between items-center">
            <div>
              <h3 className="text-brand-gold font-serif italic text-lg">Digital Concierge</h3>
              <p className="text-[10px] text-secondary tracking-widest uppercase mt-1">Property Assistant • Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background/50 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-xs tracking-wide leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-gold text-black rounded-l-xl rounded-tr-xl' 
                    : 'bg-primary/5 text-secondary border border-theme rounded-r-xl rounded-tl-xl'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-primary/5 p-4 rounded-r-xl rounded-tl-xl border border-theme">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
                        <div ref={chatEndRef} />
                      </div>
            
                      {/* Suggested Questions */}
                      {!loading && apiKey && (
                        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-background/40 backdrop-blur-md border-t border-theme">
                          {[
                            "Key amenities?",
                            "Tell me about the area",
                            "Is it family friendly?",
                            "Investment potential?"
                          ].map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => {
                                setInput(suggestion);
                                setTimeout(() => document.getElementById('send-btn')?.click(), 100);
                              }}
                              className="whitespace-nowrap px-3 py-1.5 rounded-full border border-theme text-[9px] uppercase tracking-widest text-secondary hover:text-brand-gold hover:border-brand-gold transition-all"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
            
                                          {/* Input */}
            
                                          <div className="p-4 bg-background border-t border-theme">
            
                                            {!isKeyValid ? (
            
                                              <div className="text-[9px] text-center text-zinc-500 uppercase tracking-[0.2em] leading-relaxed">
            
                                                AI Assistant is currently in preview mode.<br />
            
                                                Set a valid VITE_GEMINI_API_KEY in .env to enable chat.
            
                                              </div>
            
                                            ) : (
            
                                              <div className="flex gap-2">
            
                                                <input 
            
                                                  type="text" 
            
                                                  value={input}
            
                                                  onChange={(e) => setInput(e.target.value)}
            
                                                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
            
                                                  placeholder="Ask about this property..."
            
                                                  className="flex-1 bg-card border border-theme px-4 py-3 text-xs outline-none focus:border-brand-gold transition-colors"
            
                                                />
            
                                                                                                <button 
            
                                                                                                  id="send-btn"
            
                                                                                                  onClick={handleSend}
            
                                                                                                  className="bg-brand-gold text-black px-4 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
            
                                                                                                >
            
                                                                                                  <span className="material-symbols-outlined text-sm font-bold">arrow_upward</span>
            
                                                                                                </button>
            
                                                
            
                                              </div>
            
                                            )}
            
                                          </div>
            
                                
            
        </div>
      )}
    </div>
  );
};
