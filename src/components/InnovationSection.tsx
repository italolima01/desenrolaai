'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InnovationSection() {
  return (
    <section id="about" className="relative text-white pt-20 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/fundo desenrola site.jpeg"
          alt="Fundo"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Gradiente radial sutil para textura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      {/* Conteúdo principal */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-[1.02]">
                {/* Efeito de brilho em volta da imagem */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/70 to-sky-500/70 rounded-2xl blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
                
                <Image
                  src="/images/brain-ai.jpg"
                  alt="Inovação em IA"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl z-10"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-30 z-20" />
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Potencializando negócios com soluções inovadoras de TI
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Na <span className="font-semibold text-[rgb(var(--color-primary))]">Desenrola AI</span>, somos movidos pela paixão por tecnologia e inovação. Nosso objetivo é simples: ajudar sua empresa a alcançar novos patamares através de soluções inteligentes em IA e software personalizado.
              </p>

              <p className="text-gray-300 text-base sm:text-lg">
                Unimos conhecimento técnico e visão estratégica para desenvolver e implementar soluções que automatizam processos, aumentam a produtividade e impulsionam o crescimento do seu negócio. Atendemos empresas de diferentes setores, criando soluções exclusivas e personalizadas que se adaptam às necessidades únicas de cada cliente.
              </p>

            </motion.div>
          </div>
        </div>
      </div>
            {/* Swoosh divider to next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
}