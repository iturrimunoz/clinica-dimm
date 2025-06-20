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
      </div>
     
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
      `}</style>
    </section>
  );
};

export default Hero; 