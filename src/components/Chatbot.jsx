import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Ku soo dhawaaw Goox Store! Waxaan ahay kaaliyahaaga gaarka ah (Goox Assistant). Maxaan maanta kugu caawin karaa?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const faqItems = [
    {
      q: "📦 Waqtiga Dhalmada (Delivery)",
      reply: "Dhalmadu waxay qaadataa 24 ilaa 48 saacadood gudahood magaalada Muqdisho iyo nawaaxigeeda. Gobolada kale waxay ku qaadataa 3-5 maalmood."
    },
    {
      q: "💰 Habka Lacag Bixinta (Payment)",
      reply: "Waxaad ku bixin kartaa EVC Plus, Premier Wallet, Zaad, Sahal, ama Cash on Delivery (Lacagta marka alaabta laguu keeno)."
    },
    {
      q: "🔄 Siyaasadda Celinta (Return)",
      reply: "Haa, waxaad alaabta ku celin kartaa muddo 7 maalmood gudahood ah haddii ay cillad leedahay ama aysan ahayn wixii aad dalbatay."
    },
    {
      q: "📞 La Xiriir Maamulka",
      reply: "Waxaad nagala soo xiriiri kartaa Whatsapp lambarka +252 614 940391 ama wac lambarka ah: +252 614 940391."
    }
  ];

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // POST request to n8n webhook
      const response = await fetch("https://weses.app.n8n.cloud/webhook-test/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text,
          chatInput: text,
          input: text,
          text: text,
          sender: "user",
          sessionId: "gooxstore-session-999",
          products: products
        })
      });

      let botResponse = "";

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (typeof data === 'string') {
            botResponse = data;
          } else if (Array.isArray(data) && data.length > 0) {
            const first = data[0];
            botResponse = first.output || first.response || first.reply || first.text || first.message || JSON.stringify(first);
          } else if (data && typeof data === 'object') {
            botResponse = data.output || data.response || data.reply || data.text || data.message || JSON.stringify(data);
          }
        } else {
          botResponse = await response.text();
        }
      } else {
        throw new Error(`Server wuxuu soo celiyay qalad (Status: ${response.status})`);
      }

      if (!botResponse || typeof botResponse !== 'string' || botResponse.trim() === '') {
        throw new Error("Jawaab eber ah (empty response) ayaa laga helay n8n");
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.warn("n8n Webhook call failed:", error);

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: '⚠️ Cilad ayaa ka jirta isku-xirka caawiyaha AI. Fadlan isku day mar kale.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFaqClick = (faq) => {
    handleSendMessage(faq.q);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch(err => console.warn("Failed to load products.json:", err));
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Widget */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[480px] bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Chat Header */}
          <div className="bg-brand-blue p-4 flex items-center justify-between text-white select-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                <Bot size={22} className="text-white" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-brand-blue rounded-full animate-pulse"></span>
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-sm tracking-tight">Goox Assistant</h3>
                <span className="text-[10px] text-sky-100 font-semibold block">Online (Aktif)</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div key={msg.id} className={`flex gap-2.5 ${isBot ? 'justify-start text-left' : 'justify-end text-right'}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-sky-100 text-brand-blue flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm">
                      G
                    </div>
                  )}
                  <div className="max-w-[75%]">
                    <div className={`p-3 rounded-2xl text-xs font-medium shadow-sm leading-relaxed whitespace-pre-line ${
                      isBot ? 'bg-white text-slate-700 rounded-tl-none' : 'bg-brand-blue text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-400 font-bold block mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start text-left">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-brand-blue flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm animate-pulse">
                  G
                </div>
                <div className="max-w-[75%]">
                  <div className="p-3 bg-white text-slate-700 rounded-2xl rounded-tl-none text-xs font-medium shadow-sm flex items-center gap-1.5 py-4">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Quick Chips */}
          <div className="px-4 py-2 border-t border-slate-100 bg-white flex flex-wrap gap-2 justify-start max-h-[110px] overflow-y-auto no-scrollbar">
            {faqItems.map((faq, index) => (
              <button
                key={index}
                onClick={() => handleFaqClick(faq)}
                className="text-[10px] font-bold text-slate-600 hover:text-brand-blue bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-100 px-2.5 py-1 rounded-full transition-all cursor-pointer select-none"
              >
                {faq.q.split(" (")[0]}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Qor su'aashaada halkan..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue focus:bg-white transition-all text-slate-700 placeholder-slate-400"
            />
            <button
              type="submit"
              className="p-2 bg-brand-blue hover:bg-sky-600 text-white rounded-xl active:scale-95 transition-all cursor-pointer shadow-md shadow-sky-50 flex items-center justify-center"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-blue hover:bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group"
        aria-label="Toggle Chatbot"
      >
        <MessageCircle size={26} className="group-hover:rotate-6 transition-transform" />
        {/* Unread message notification dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] font-extrabold shadow-sm animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
}
