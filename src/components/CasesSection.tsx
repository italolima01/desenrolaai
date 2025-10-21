"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type CaseItem = {
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const cases: CaseItem[] = [
  {
    category: 'Agente de IA',
    title: 'Agente de Atendimento para E-commerce',
    description:
      'Agente de IA que opera 24/7 no SAC, resolvendo 80% das dúvidas de clientes sobre pedidos, frete e produtos de forma autônoma.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop',
    tags: ['IA Conversacional', 'E-commerce', 'Automação'],
  },
  {
    category: 'Sistema Customizado',
    title: 'Plataforma de Gestão Logística',
    description:
      'Sistema customizado para otimizar rotas de entrega, resultando em 15% de redução de custos e integração em tempo real com o estoque.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Logística'],
  },
  {
    category: 'Agente de IA',
    title: 'IA para Qualificação de Leads',
    description:
      'Agente autônomo que analisa, segmenta e nutre leads de inbound marketing, entregando apenas os mais qualificados para a equipe de vendas.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop',
    tags: ['CRM', 'Inteligência Artificial', 'Vendas'],
  },
  {
    category: 'Sistema Customizado',
    title: 'Sistema de Análise de Dados de Produção',
    description:
      'Dashboard que coleta e analisa dados do chão de fábrica em tempo real, identificando gargalos e oportunidades de melhoria.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Analytics', 'Indústria 4.0', 'BI'],
  },
  {
    category: 'Agente de IA',
    title: 'Automação de Processos Financeiros',
    description:
      'Agente de IA que automatiza a conciliação de pagamentos, emissão de notas e relatórios, reduzindo trabalho manual em até 90%.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['RPA', 'Fintech', 'IA'],
  },
  {
    category: 'Sistema Customizado',
    title: 'Intranet Corporativa Inteligente',
    description:
      'Plataforma interna com um agente de IA integrado que auxilia funcionários a encontrar informações, agendar reuniões e acessar sistemas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'SharePoint', 'UX/UI'],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function CasesSection() {
  return (
    <section id="cases" className="bg-[#0f1724] py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cases de Sucesso</h2>
          <p className="text-slate-300 text-lg sm:text-xl">Soluções feitas sob medida que geram resultados reais.</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <Carousel cases={cases} cardVariants={cardVariants} />
        </div>
      </div>
    </section>
  );
}

function Carousel({ cases, cardVariants }: { cases: CaseItem[]; cardVariants: Variants }) {
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const GAP = 12; // px gap between cards in mobile
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function calcVisible() {
      const w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    }

    function updateSizes() {
      const vw = window.innerWidth;
      const v = calcVisible();

      // card width: prefer 320px on larger phones, but ensure it never exceeds viewport minus some margin
      const preferred = 320;
      const minCard = 280;
      const computedCard = Math.min(preferred, Math.max(minCard, Math.floor(vw - 48)));
      setCardWidth(computedCard);

      // set container padding so the single card centers exactly in viewport
      const pad = Math.max(0, Math.floor((vw - computedCard) / 2));
      if (containerRef.current) {
        containerRef.current.style.paddingLeft = `${pad}px`;
        containerRef.current.style.paddingRight = `${pad}px`;
        containerRef.current.style.gap = `${GAP}px`;
      }

      setVisible(v);
      setIndex((i) => Math.min(i, Math.max(0, cases.length - v)));
    }

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [cases.length]);

  const maxIndex = Math.max(0, cases.length - visible);

  function prev() {
    if (visible === 1) {
      const pages = cases.length;
      const nextIdx = (index - 1 + pages) % pages;
      scrollToIndex(nextIdx);
      return;
    }

    setIndex((i) => {
      const pages = Math.max(1, maxIndex + 1);
      return (i - 1 + pages) % pages;
    });
  }
  function next() {
    if (visible === 1) {
      const pages = cases.length;
      const nextIdx = (index + 1) % pages;
      scrollToIndex(nextIdx);
      return;
    }

    setIndex((i) => {
      const pages = Math.max(1, maxIndex + 1);
      return (i + 1) % pages;
    });
  }

  function scrollToIndex(i: number) {
    if (!containerRef.current) {
      setIndex(i);
      return;
    }
    const children = Array.from(containerRef.current.children) as HTMLElement[];
    const child = children[i];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      // fallback: scroll by container width
      const w = containerRef.current.clientWidth;
      containerRef.current.scrollTo({ left: i * w, behavior: 'smooth' });
    }
    setIndex(i);
  }

  return (
    <div className="relative px-0 lg:px-12 max-w-[100vw] overflow-hidden">
      <button
        aria-label="Anterior"
        onClick={prev}
        className={`absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#0b1320]/90 p-3 text-white shadow-md hover:scale-105 transition-transform`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

        <div className="overflow-hidden">
          {visible === 1 ? (
            // Mobile: native horizontal scroll with snap per card
            <div
              ref={containerRef as React.RefObject<HTMLDivElement>}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                gap: `${GAP}px`,
              }}
              onScroll={() => {
                if (!containerRef.current) return;
                const scrollLeft = containerRef.current.scrollLeft;
                const itemWidth = cardWidth + GAP;
                const newIndex = Math.round(scrollLeft / itemWidth) || 0;
                setIndex(newIndex);
              }}
            >
              {cases.map((caseItem: CaseItem, idx: number) => (
              <div key={idx} data-card className="snap-center flex-none px-1" style={{ width: `${cardWidth}px` }}>
                  <article
                    className="bg-[#0b1320] border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 h-full flex flex-col group"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image src={caseItem.image} alt={caseItem.title} fill style={{ objectFit: 'cover' }} className="object-cover transition-transform duration-300 ease-out group-hover:scale-110" />
                    </div>

                    <div className="p-8 bg-gradient-to-t from-[#07121a] to-transparent flex-1 flex flex-col">
                      <span className="text-xs text-sky-300 font-medium mb-2 block">{caseItem.category}</span>
                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{caseItem.title}</h3>
                      <p className="text-slate-300 text-sm mb-6 line-clamp-4 flex-1">{caseItem.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {caseItem.tags.map((tag: string) => (
                          <span key={tag} className="text-xs text-sky-200 bg-sky-900/10 border border-sky-800/30 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${(index * 100) / visible}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ width: `${(cases.length * 100) / visible}%` }}
            >
              {cases.map((caseItem: CaseItem, idx: number) => (
                <div key={idx} style={{ width: `${100 / visible}%` }} className="px-4 py-2">
                  <motion.article
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                    className="bg-[#0b1320] border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 h-full flex flex-col"
                  >
                    <div className="relative h-72 w-full">
                      <Image src={caseItem.image} alt={caseItem.title} fill style={{ objectFit: 'cover' }} className="object-cover" />
                    </div>

                    <div className="p-8 bg-gradient-to-t from-[#07121a] to-transparent flex-1 flex flex-col">
                      <span className="text-xs text-sky-300 font-medium mb-2 block">{caseItem.category}</span>
                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{caseItem.title}</h3>
                      <p className="text-slate-300 text-sm mb-6 line-clamp-4 flex-1">{caseItem.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {caseItem.tags.map((tag: string) => (
                          <span key={tag} className="text-xs text-sky-200 bg-sky-900/10 border border-sky-800/30 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {visible === 1
            ? cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 w-8 rounded-full transition-colors ${i === index ? 'bg-sky-400' : 'bg-slate-700'}`}
                  aria-label={`Ir para card ${i + 1}`}
                />
              ))
            : Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-8 rounded-full transition-colors ${i === index ? 'bg-sky-400' : 'bg-slate-700'}`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
        </div>
      <button
        aria-label="Próximo"
        onClick={next}
        className={`absolute right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#0b1320]/90 p-3 text-white shadow-md hover:scale-105 transition-transform`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
