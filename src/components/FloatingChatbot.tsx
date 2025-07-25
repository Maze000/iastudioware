import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send, Bot, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m your AI WareStudio virtual assistant. How can I help you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost') || input.includes('plan') || input.includes('pricing')) {
      return 'Our plans range from $149 NZD (Basic) to $450 NZD (Monthly). Each plan includes different features. Are you interested in any particular plan?';
    }
    
    if (input.includes('basic')) {
      return 'The Basic Plan ($149 NZD) includes: professional landing page, integrated form (email or Sheets), responsive design, basic support, SSL certificate, and mobile optimization. Perfect to get started!';
    }
    
    if (input.includes('intermediate')) {
      return 'The Intermediate Plan ($200 NZD) includes: full website (5-10 pages), CRM-integrated forms, basic automations (emails, alerts), social media integrations, analytics dashboard, and priority support.';
    }
    
    if (input.includes('advanced')) {
      return 'The Advanced Plan ($300 NZD) includes: full online store with cart & checkout, web + mobile PWA, AI bots for sales/support, advanced automations (Make, n8n), analytics dashboards, custom integrations, and multi-language support.';
    }
    
    if (input.includes('monthly')) {
      return 'The Monthly Plan ($450 NZD) includes: paid ads (Meta, Google, TikTok), email automation campaigns, continuous support and optimization, monthly performance reports, A/B testing, and dedicated account manager.';
    }
    
    if (input.includes('contact') || input.includes('support')) {
      return 'You can contact us through our support page or send us an email. We\'re here to help you with any questions about our services.';
    }
    
    if (input.includes('time') || input.includes('how long') || input.includes('duration')) {
      return 'Development time depends on the chosen plan. Generally: Basic Plan (1-2 weeks), Intermediate Plan (2-3 weeks), Advanced Plan (3-4 weeks).';
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! 😊 How can I help you? I can answer questions about our plans, pricing, services, or any other questions you might have.';
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return 'You\'re welcome! 😊 Is there anything else I can help you with? I\'m here to answer all your questions about IA WareStudio.';
    }
    
    return 'Thank you for your question. For more specific information about our services, I recommend contacting our support team. Is there anything else I can help you with?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-violet-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI WareStudio Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white placeholder-gray-500"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 h-10 w-10"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        } text-white border-0 flex items-center justify-center group`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        )}
      </Button>
    </div>
  );
};

export default FloatingChatbot;
