import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, SendIcon, PaperclipIcon, SmileIcon } from 'lucide-react';
interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
}
export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  isOpen,
  onClose,
  restaurantName
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'restaurant',
    text: `Hi! Welcome to ${restaurantName}. How can we help you today?`,
    time: '2:30 PM'
  }]);
  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      // Simulate restaurant response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'restaurant',
          text: "Thanks for your message! We'll get back to you shortly.",
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };
  return <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />}
      </AnimatePresence>
      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primaryDark text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-xl font-bold">{restaurantName}</h2>
                  <p className="text-white/80 text-sm">
                    Usually replies instantly
                  </p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <XIcon size={24} />
                </button>
              </div>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-backgroundAlt">
              {messages.map(msg => <motion.div key={msg.id} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-white text-textDark shadow-sm'}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-textLight'}`}>
                      {msg.time}
                    </p>
                  </div>
                </motion.div>)}
            </div>
            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <PaperclipIcon size={20} className="text-textLight" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <SmileIcon size={20} className="text-textLight" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                <button onClick={handleSend} className="p-3 bg-primary text-white rounded-xl hover:bg-primaryDark transition-colors">
                  <SendIcon size={20} />
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};