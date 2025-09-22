'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaLightbulb, FaAngleDoubleRight } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'Agentes de IA Personalizados',
      subtitle: 'Automatize tarefas específicas do seu negócio.',
      description:
        'Projetamos e implementamos agentes autônomos que integram dados, executam fluxos e tomam decisões para acelerar rotinas e reduzir custos.',
      Icon: FaRobot,
    },
    {
      title: 'Softwares Sob Medida',
      subtitle: 'Desenvolvemos sistemas de ponta, otimizados para você.',
      description:
        'Aplicações web e serviços escaláveis, com arquitetura moderna, performance e segurança, feitos para as necessidades da sua empresa.',
      Icon: FaCogs,
    },
    {
      title: 'Consultoria em IA',
      subtitle: 'Orientação estratégica para implementar IA de forma eficiente.',
      description:
        'Do diagnóstico à implantação: avaliamos oportunidades, definimos roadmap e apoiamos seu time na adoção de IA com governança.',
      Icon: FaLightbulb,
    },
  ];

  return (
    <section id="services" className="relative bg-white py-20 pb-48 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">O que oferecemos</h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">Descomplicamos a tecnologia para você focar no que importa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ title, subtitle, description, Icon }, idx) => (
            <FlipCard key={idx} title={title} subtitle={subtitle} description={description} Icon={Icon} />
          ))}
        </div>
      </div>

      {/* Wave divider to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,60 C240,0 360,120 600,60 C840,0 960,120 1200,60 C1320,30 1440,90 1440,60 L1440,120 L0,120 Z" 
            fill="#030712" 
            fillOpacity="1" 
          />
          <path 
            d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 C1320,60 1440,100 1440,80 L1440,120 L0,120 Z" 
            fill="#000000" 
            fillOpacity="0.8" 
          />
        </svg>
      </div>
    </section>
  );
}

type IconType = (props: { size?: number }) => React.ReactNode;

function FlipCard({ title, subtitle, description, Icon }: { title: string; subtitle: string; description: string; Icon: IconType }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-full min-h-56 md:min-h-64 [perspective:1000px]"
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((v) => !v)}
    >
      <motion.div
        className="group relative h-full w-full rounded-2xl border border-gray-200/70 bg-white p-8 flex shadow-sm transition-shadow hover:shadow-lg hover:border-[rgb(var(--color-primary))] [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={{ scale: flipped ? 1 : 1.05 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 p-8 flex flex-col [backface-visibility:hidden]">
          <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center rounded-full bg-gray-100 text-gray-700 group-hover:bg-[rgb(var(--color-primary))] group-hover:text-white transition-colors">
            <FaAngleDoubleRight size={14} />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gray-100 text-gray-800">
              <Icon size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
          <div className="text-sm text-gray-500">Clique para voltar</div>
        </div>
      </motion.div>
    </div>
  );
}


