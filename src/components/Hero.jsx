import React from "react";

const Hero = ({ title, path, isInicio }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center p-12">
      <div className="relative z-30 w-full max-w-7xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 min-h-[29rem] flex flex-col justify-center transition-all duration-300 hover:shadow-2xl">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up">
            {title}
          </h1>

          {/* Sección de Información Diaria */}
          {isInicio && (
            <div className="mt-4 animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl font-semibold text-secondary mb-2">Información del Día</h2>
              <p className="text-gray-700">
                Aquí puedes colocar información relevante que se actualice diariamente, como horarios especiales, anuncios importantes o consejos de salud.
              </p>
            </div>
          )}
        </div>

        {/* Cards de Información Relevante */}
        {isInicio && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card Grande: Horarios de Atención */}
            <div className="lg:col-span-2 group bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20
                    transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:rotate-[-2deg]
                    animate-fade-in-up animation-delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary ml-4 group-hover:text-primary/80 transition-colors duration-300">Horarios de Atención</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Horarios Regulares
                    </h4>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="font-medium">Lunes a Viernes</span>
                        <span className="text-primary font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="font-medium">Sábados</span>
                        <span className="text-primary font-semibold">8:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <span className="font-medium">Domingos</span>
                        <span className="text-gray-400 font-semibold">Cerrado</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      Servicios Especiales
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg border-l-4 border-secondary">
                        <p className="font-semibold text-secondary">Urgencias: 24/7</p>
                        <p className="text-sm text-gray-600">Atención inmediata disponible</p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="font-semibold text-primary">PET-CT: Con cita previa</p>
                        <p className="text-sm text-gray-600">Estudios especializados</p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-gray-custom/10 to-gray-custom/5 rounded-lg border-l-4 border-gray-custom">
                        <p className="font-semibold text-gray-custom">Consultas: L-V</p>
                        <p className="text-sm text-gray-600">Atención personalizada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Pequeña 1: Servicios Destacados */}
            <div className="group bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20
                    transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:rotate-[-2deg]
                    animate-fade-in-up animation-delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary ml-3 group-hover:text-secondary/80 transition-colors duration-300">Servicios Destacados</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• PET-CT de última generación</li>
                  <li>• Gammagrafía ósea</li>
                  <li>• Estudios cardíacos</li>
                  <li>• Medicina nuclear especializada</li>
                </ul>
              </div>
            </div>

            {/* Card Pequeña 2: Contacto Rápido */}
            <div className="group bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20
                    transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:rotate-[-2deg]
                    animate-fade-in-up animation-delay-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-custom/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-custom/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-gray-custom group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-custom ml-3 group-hover:text-gray-custom/80 transition-colors duration-300">Contacto Rápido</h3>
                </div>
                <p className="text-gray-600 mb-3">Teléfono: (123) 456-7890</p>
                <p className="text-gray-600 mb-3">WhatsApp: +1 234-567-8900</p>
                <p className="text-gray-600 mb-3">Email: info@clinica.com</p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg">
                  Agendar Cita
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
     
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero; 