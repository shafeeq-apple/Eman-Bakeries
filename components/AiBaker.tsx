import React, { useState, useRef, useEffect } from 'react';
import { generateBakingAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiBaker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Eman Bakeries. I am your personal baking concierge. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const response = await generateBakingAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div id="ai-concierge" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white shadow-2xl w-80 md:w-96 h-[500px] mb-4 rounded-sm flex flex-col overflow-hidden border border-gray-200 animate-[slideInUp_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-eman-black text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif font-bold text-lg">Eman Concierge</h3>
              <p className="text-xs text-eman-gold uppercase tracking-wider">Powered by Gemini</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-eman-gold text-white rounded-l-lg rounded-tr-lg' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-r-lg rounded-tl-lg shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 border border-gray-200 rounded-r-lg rounded-tl-lg">
                  <span className="animate-pulse text-eman-gold text-xl">● ● ●</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our pastries..."
                className="flex-1 bg-gray-50 border border-gray-200 p-2 text-sm focus:outline-none focus:border-eman-gold"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-eman-black text-white px-4 py-2 text-sm uppercase font-bold hover:bg-eman-gold transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-eman-gold text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <span className="group-hover:rotate-12 transition-transform">🧑‍🍳</span>
      </button>
    </div>
  );
};

export default AiBaker;