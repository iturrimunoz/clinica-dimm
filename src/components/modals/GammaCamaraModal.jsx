import React from 'react';

const GammaCamaraModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-primary">{data?.titulo}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{data?.descripcion}</p>
            {data?.caracteristicas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Características Técnicas:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {data.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </div>
            )}
            {data?.aplicaciones && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Aplicaciones:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {data.aplicaciones.map((aplicacion, index) => (
                    <li key={index}>{aplicacion}</li>
                  ))}
                </ul>
              </div>
            )}
            {data?.imagen && (
              <div className="mt-6">
                <img 
                  src={data.imagen} 
                  alt={data.titulo}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GammaCamaraModal; 