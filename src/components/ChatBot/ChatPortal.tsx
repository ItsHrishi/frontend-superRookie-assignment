import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const ChatPortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Welcome to SocialMetrics AI Assistant! I can help you with:\n\n• Analytics insights\n• Performance metrics\n• Content recommendations\n• Custom reports\n\nHow can I assist you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = (message: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "I'll analyze that and get back to you with insights. Is there anything specific you'd like to know about your social media performance?",
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-8 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-bounce group sm:p-6"
      >
        <Bot className="w-6 h-6 sm:w-12 sm:h-12" />
        <span className="absolute -top-2 -right-2 bg-accent-danger text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
        <span className="absolute -left-20 text-wrap -top-16 bg-white dark:bg-dark-100 text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ask me anything about your analytics!
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-8 right-8 w-[95vw] sm:w-[400px] md:w-[450px] 
      bg-white dark:bg-dark-100 rounded-xl shadow-2xl 
      transition-all transform hover:scale-[1.02] z-50
      ${isMinimized ? 'h-[72px]' : 'h-[600px] max-h-[calc(100vh-120px)]'}`}>
      <ChatHeader
        onClose={() => setIsOpen(false)}
        onMinimize={() => setIsMinimized(!isMinimized)}
      />

      {!isMinimized && (
        <>
          <div className="p-4 h-[calc(100%-144px)] overflow-y-auto space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
          </div>
          <ChatInput onSend={handleSend} />
        </>
      )}
    </div>
  );
};

export default ChatPortal;