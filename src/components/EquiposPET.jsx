import React, { useState } from 'react';
import Hero from './Hero';

// Componente Modal para mostrar información de equipos
const EquipoModal = ({ isOpen, onClose, equipo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-primary">{equipo?.titulo}</h2>
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
            <p className="text-gray-600 mb-4">{equipo?.descripcion}</p>
            
            {equipo?.caracteristicas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Características Técnicas:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {equipo.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </div>
            )}

            {equipo?.aplicaciones && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Aplicaciones:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {equipo.aplicaciones.map((aplicacion, index) => (
                    <li key={index}>{aplicacion}</li>
                  ))}
                </ul>
              </div>
            )}

            {equipo?.imagen && (
              <div className="mt-6">
                <img 
                  src={equipo.imagen} 
                  alt={equipo.titulo}
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

const EquiposPET = ({ title }) => {
  const [selectedEquipo, setSelectedEquipo] = useState(null);

  const equiposData = {
    'pet-ct-discovery': {
      titulo: "PET/CT Discovery MI",
      descripcion: "Sistema de última generación para diagnóstico por imagen molecular.",
      caracteristicas: [
        "Alta resolución temporal",
        "Baja dosis de radiación",
        "Imágenes de alta calidad",
        "Tecnología Time-of-Flight"
      ],
      aplicaciones: [
        "Diagnóstico oncológico",
        "Estudios neurológicos",
        "Evaluación cardíaca",
        "Investigación clínica"
      ],
      imagen: "/src/assets/pet-ct-discovery.jpg"
    },
    'pet-ct-biograph': {
      titulo: "PET/CT Biograph Vision",
      descripcion: "Equipo avanzado para diagnóstico oncológico y neurológico.",
      caracteristicas: [
        "Tecnología Time-of-Flight",
        "Reconstrucción rápida",
        "Alta sensibilidad",
        "Baja dosis de radiación"
      ],
      aplicaciones: [
        "Diagnóstico temprano de cáncer",
        "Estudios neurológicos",
        "Evaluación de respuesta al tratamiento",
        "Investigación clínica"
      ],
      imagen: "/src/assets/pet-ct-biograph.jpg"
    }
  };

  const handleEquipoClick = (equipoId) => {
    setSelectedEquipo(equiposData[equipoId]);
  };

  return (
    <>
      <Hero title={title} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Nuestros Equipos PET
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(equiposData).map(([id, equipo]) => (
              <div 
                key={id}
                onClick={() => handleEquipoClick(id)}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {equipo.imagen && (
                  <img 
                    src={equipo.imagen} 
                    alt={equipo.titulo}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {equipo.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {equipo.descripcion}
                </p>
                <button className="text-secondary hover:text-primary transition-colors">
                  Ver más detalles →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EquipoModal 
        isOpen={!!selectedEquipo} 
        onClose={() => setSelectedEquipo(null)} 
        equipo={selectedEquipo} 
      />
    </>
  );
};

export default EquiposPET; 