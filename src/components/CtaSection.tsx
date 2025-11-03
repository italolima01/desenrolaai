'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add the form submission logic (e.g., to an API)
    console.log('Form data submitted:', formData);
    alert('Obrigado pelo seu contato! Responderemos em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="cta" className="relative bg-pattern-white py-20 text-center pb-48">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Pronto para transformar seu negócio com IA?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl mb-8 max-w-3xl mx-auto text-gray-600"
        >
          Preencha o formulário abaixo e descubra como nossas soluções personalizadas podem impulsionar sua empresa.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </motion.div>

      </div>
      {/* Wave divider to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,60 C240,0 360,120 600,60 C840,0 960,120 1200,60 C1320,30 1440,90 1440,60 L1440,120 L0,120 Z" 
            fill="#ffffff" 
            fillOpacity="1" 
          />
          <path 
            d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 C1320,60 1440,100 1440,80 L1440,120 L0,120 Z" 
            fill="#ffffff" 
            fillOpacity="0.8" 
          />
        </svg>
      </div>
    </section>
  );
}
