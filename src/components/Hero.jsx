import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Importar las imágenes
import doctorBowles from '../assets/doctor-bowles.jpg';
import tecnicoAlmendras from '../assets/tecnico-almendras.jpg';
import gammaCamara1 from '../assets/gammacamara1.jpeg';
import gammaCamara2 from '../assets/gammacamara2.jpeg';
import gammaCamara3 from '../assets/gammacamara.jpeg';

const Hero = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    {
      id: 'medicina-nuclear',
      title: 'Medicina Nuclear',
      description: 'Servicios especializados en medicina nuclear con tecnología de vanguardia',
      image: doctorBowles,
      details: [
        'Diagnóstico preciso con tecnología avanzada',
        'Equipo médico altamente calificado',
        'Atención personalizada',
        'Resultados confiables y rápidos'
      ]
    },
    {
      id: 'tecnologia',
      title: 'Tecnología Avanzada',
      description: 'Equipamiento de última generación para diagnósticos precisos',
      image: gammaCamara1,
      details: [
        'Gammacámaras de última generación',
        'Sistemas de procesamiento avanzado',
        'Mantenimiento preventivo constante',
        'Calibración periódica de equipos'
      ]
    }
  ];

  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId);
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-primary/95 to-primary/80">
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' bg-white w-3 h-3"></span>';
          },
        }}
        className="h-full w-full"
      >
        {components.map((component) => (
          <SwiperSlide key={component.id}>
            <div className="relative h-screen w-full">
              <img
                src={component.image}
                alt={component.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20" />
              <div className="relative z-30 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                      {component.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
                      {component.description}
                    </p>
                    <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                      <button 
                        onClick={() => handleComponentClick(component.id)}
                        className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                      >
                        Ver Detalles
                      </button>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                        Conoce Más
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal de Detalles */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative animate-fade-in-up">
            <button 
              onClick={() => setSelectedComponent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                {components.find(c => c.id === selectedComponent)?.title}
              </h2>
              <p className="text-gray-600">
                {components.find(c => c.id === selectedComponent)?.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Características Principales:</h3>
                <ul className="space-y-2">
                  {components.find(c => c.id === selectedComponent)?.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => setSelectedComponent(null)}
                className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: white !important;
          opacity: 0.5 !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Hero; 