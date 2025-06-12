import React from "react";
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
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src={doctorBowles}
              alt="Doctor Bowles"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20" />
            <div className="relative z-30 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    Medicina Nuclear de Excelencia
                  </h1>
                  <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
                    Atención médica especializada con tecnología de vanguardia para tu salud
                  </p>
                  <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                    <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                      Agendar Cita
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

        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src={gammaCamara1}
              alt="Gammacámara"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-20" />
            <div className="relative z-30 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    Tecnología de Última Generación
                  </h1>
                  <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
                    Equipamiento de alta precisión para diagnósticos precisos
                  </p>
                  <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                    <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                      Nuestros Servicios
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                      Ver Equipamiento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

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