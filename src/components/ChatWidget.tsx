
"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, X, Calendar, Bot } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowOptions(true), 50); // Small delay to allow button animation
      return () => clearTimeout(timer);
    } else {
      setShowOptions(false);
    }
  }, [isOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-700 transition-colors hover:scale-110 active:scale-90 transition-transform duration-200"
          onClick={toggleChat}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
        <div
          className={`absolute bottom-20 right-0 w-72 bg-white rounded-lg shadow-xl p-4 border border-gray-100 transition-all duration-300 ease-out transform origin-bottom-right ${showOptions ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Como podemos ajudar?</h3>
          <button
            onClick={openModal}
            className="w-full flex items-center justify-start text-left bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mb-2 transition-colors hover:shadow-md"
          >
            <Calendar className="mr-3" size={20} />
            Solicitar Orçamento
          </button>
          <a
            href="https://wa.me/5585992666435"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-start text-left bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors hover:shadow-md"
          >
            <Bot className="mr-3" size={20} />
            Testar nosso agente de IA
          </a>
        </div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
