'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const cases = [
  {
    title: 'Automação de Processos para Fintech',
    image: '/images/logo desenrolaai.jpg',
  },
  {
    title: 'Plataforma de Análise de Dados para Varejo',
    image: '/images/logo desenrolaai.jpg',
  },
  {
    title: 'Agente de IA para Atendimento ao Cliente',
    image: '/images/logo desenrolaai.jpg',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function CasesSection() {
  return (
    <section id="cases" className="bg-gray-50 py-20 px-4 rounded-3xl">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Cases de Sucesso</h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">Veja como ajudamos nossos clientes a inovar.</p>
        </motion.div>

        <Swiper
          modules={[Navigation, A11y, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation
          loop={true}
          slideToClickedSlide={true}
          className="mySwiper"
        >
          {[...cases, ...cases, ...cases, ...cases].map((caseItem, index) => (
            <SwiperSlide key={index} style={{ height: '400px' }}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div className="relative h-56 w-full">
                  <Image src={caseItem.image} alt={caseItem.title} layout="fill" objectFit="cover" className="w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{caseItem.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}