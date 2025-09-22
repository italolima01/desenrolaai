'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div id="hero" ref={ref} className="relative h-screen flex items-center justify-center text-center overflow-x-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        <Image
          src="/images/fundo desenrola site.jpeg"
          alt="Fundo"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="contrast-125 blur-[1px]"
        />
        <div className="absolute inset-0 bg-black/80" />
        
      </motion.div>

      {/* Bottom gradient to transition from blue to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-b from-transparent to-white/100" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: 0.2 
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              >
                Soluções de IA
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                sob medida para sua empresa
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 20,
              delay: 1.2 
            }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-300"
          >
            Desenvolvemos softwares inteligentes e agentes de IA personalizados para otimizar processos e automatizar tarefas.
          </motion.p>

          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70} // Ajuste o offset se a barra de navegação fixa estiver cobrindo a seção
            duration={500}
            className="inline-block mt-8 hover:text-blue-400 transition-colors"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10, 
                delay: 1.6 
              }}
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(14, 165, 233, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Saiba Mais
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}