'use client';

import { motion } from 'framer-motion';
import { FaUserCog, FaMicrochip, FaRocket, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    title: 'Experiência Personalizada',
    description: 'Soluções desenhadas para atender as necessidades únicas do seu negócio.',
    Icon: FaUserCog,
  },
  {
    title: 'Tecnologias de Ponta',
    description: 'Utilizamos as mais recentes inovações em IA e desenvolvimento de software.',
    Icon: FaMicrochip,
  },
  {
    title: 'Entrega Rápida',
    description: 'Processos ágeis para entregar valor de forma rápida e iterativa.',
    Icon: FaRocket,
  },
  {
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte dedicado para garantir o sucesso a longo prazo.',
    Icon: FaHeadset,
  },
];

export default function FeaturesSection() {
  return (<>
    <section id="features" className="relative text-white py-20 px-4">
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

      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Por que escolher a <span className="text-[rgb(var(--color-primary))]">Desenrola AI</span>?</h2>
          <p className="text-gray-300 mt-4 text-base sm:text-lg">Nossos diferenciais que garantem o seu sucesso.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-150 flex flex-col items-center text-center hover:border-blue-500/50"
            >
              <div className="p-4 rounded-full bg-blue-900/50 text-blue-400 mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>);
}