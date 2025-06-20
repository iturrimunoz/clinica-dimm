import React, { useState } from 'react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <button
        onClick={toggleInfo}
        className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        aria-label="Información del Dr. Bowles"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </button>

      {/* Panel de información */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 transform transition-all duration-300 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Dr. Bowles
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Especialista en Medicina Nuclear y Diagnóstico por Imagen
              </p>
              <div className="text-sm text-gray-500">
                <p>• Director Médico</p>
                <p>• Más de 20 años de experiencia</p>
                <p>• Especialista en PET/CT</p>
              </div>
            </div>
          </div>
          <button
            onClick={toggleInfo}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Cerrar"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingButton; 