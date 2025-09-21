'use client';

// Navbar component - Desktop and Mobile menus
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className="fixed w-full z-50 px-4 py-4 transition-all duration-300">
      <div className="container mx-auto">
        <div className={`transition-all duration-300 rounded-xl px-6 py-4 shadow-2xl ${scrolled ? 'glass-effect border border-[rgba(59,130,246,0.35)]' : 'border border-transparent'}`}>
          <div className="flex justify-between items-center relative">
                        <div className="flex-shrink-0">
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                <Image src="/images/Logo_DesenrolaAi.svg" alt="Desenrola.AI Logo" width={64} height={64} />
                <span>DESENROLA.AI</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center space-x-8 flex-1">
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Home
              </Link>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Serviços
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform">
                Sobre
              </Link>
              <Link to="cases" spy={true} smooth={true} offset={-70} duration={500} className="text-white hover:text-[rgb(var(--color-primary))] transition-all duration-300 hover:scale-105 transform cursor-pointer" >
                Cases
              </Link>
            </div>
            
            {/* Contact Button */}
            <div className="hidden md:block w-1/4 text-right">
              <Link to="cta" spy={true} smooth={true} offset={-70} duration={500} className="btn-primary">
                Fale Conosco
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-lg rounded-xl mt-4 md:hidden z-50"
              >
                <div className="flex flex-col items-center py-6 space-y-6">
                  <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Home
                  </Link>
                  <Link to="services" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Serviços
                  </Link>
                  <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Sobre
                  </Link>
                  <Link to="cases" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="text-white hover:text-[rgb(var(--color-secondary))] transition-all duration-300 hover:scale-105 transform">
                    Cases
                  </Link>
                </div>
                <div className="flex justify-center py-6 border-t border-white/10">
                  <Link to="cta" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)} className="btn-primary">
                    Fale Conosco
                  </Link>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}