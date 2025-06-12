import React, { useState } from 'react';

// Subcomponente para PET-CT
const PetCT = ({ onOpenModal }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 mb-8 cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={() => onOpenModal({
        title: "PET-CT",
        description: "El PET-CT (Tomografía por Emisión de Positrones - Tomografía Computarizada) es una tecnología de diagnóstico por imagen que combina dos técnicas en un solo equipo para proporcionar información tanto funcional como anatómica del cuerpo.",
        image: "/src/assets/pet-ct.jpg",
        features: [
          "Detecta la actividad metabólica y funcional de los tejidos",
          "Proporciona imágenes anatómicas detalladas",
          "Diagnóstico y estadificación de cáncer",
          "Evaluación de respuesta al tratamiento",
          "Detección temprana de recidivas",
          "Evaluación de enfermedades neurológicas",
          "Estudio de enfermedades cardíacas"
        ],
        specifications: [
          "Resolución espacial mejorada",
          "Tiempo de adquisición reducido",
          "Dosis de radiación optimizada",
          "Software de procesamiento avanzado"
        ]
      })}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img 
            src="/src/assets/pet-ct.jpg" 
            alt="PET-CT Scanner" 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-primary mb-4">PET-CT</h3>
          <p className="text-gray-600 mb-4">
            El PET-CT (Tomografía por Emisión de Positrones - Tomografía Computarizada) es una tecnología 
            de diagnóstico por imagen que combina dos técnicas en un solo equipo:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>PET: Detecta la actividad metabólica y funcional de los tejidos</li>
            <li>CT: Proporciona imágenes anatómicas detalladas</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Aplicaciones Principales:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Diagnóstico y estadificación de cáncer</li>
              <li>Evaluación de respuesta al tratamiento</li>
              <li>Detección temprana de recidivas</li>
              <li>Evaluación de enfermedades neurológicas</li>
              <li>Estudio de enfermedades cardíacas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Subcomponente para Gamma Cámara
const GammaCamara = ({ onOpenModal }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={() => onOpenModal({
        title: "Gamma Cámara",
        description: "La Gamma Cámara es un equipo de medicina nuclear que permite obtener imágenes funcionales del cuerpo mediante la detección de radiación gamma emitida por radiofármacos administrados al paciente.",
        image: "/src/assets/gamma-camara.jpg",
        features: [
          "Detectores de alta sensibilidad",
          "Resolución espacial mejorada",
          "Sistema de procesamiento de imágenes avanzado",
          "Capacidad de tomografía SPECT"
        ],
        applications: [
          "Gammagrafía ósea",
          "Estudios cardíacos",
          "Gammagrafía renal",
          "Estudios tiroideos",
          "Gammagrafía pulmonar"
        ]
      })}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img 
            src="/src/assets/gamma-camara.jpg" 
            alt="Gamma Cámara" 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-primary mb-4">Gamma Cámara</h3>
          <p className="text-gray-600 mb-4">
            La Gamma Cámara es un equipo de medicina nuclear que permite obtener imágenes 
            funcionales del cuerpo mediante la detección de radiación gamma emitida por 
            radiofármacos administrados al paciente.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Características Técnicas:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Detectores de alta sensibilidad</li>
              <li>Resolución espacial mejorada</li>
              <li>Sistema de procesamiento de imágenes avanzado</li>
              <li>Capacidad de tomografía SPECT</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Estudios Realizados:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Gammagrafía ósea</li>
              <li>Estudios cardíacos</li>
              <li>Gammagrafía renal</li>
              <li>Estudios tiroideos</li>
              <li>Gammagrafía pulmonar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Modal
const EquipmentModal = ({ equipment, onClose }) => {
  if (!equipment) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl w-full max-w-4xl relative transform transition-all duration-300 animate-scaleIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src={equipment.image} 
                alt={equipment.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-primary mb-4">{equipment.title}</h3>
              <p className="text-gray-600 mb-6">{equipment.description}</p>
              
              {equipment.features && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Características:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {equipment.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {equipment.specifications && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Especificaciones Técnicas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {equipment.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {equipment.applications && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Aplicaciones:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {equipment.applications.map((app, index) => (
                      <li key={index}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const EquiposPET = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const openModal = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const closeModal = () => {
    setSelectedEquipment(null);
  };

  return (
    <section id="equipos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Equipos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos con tecnología de última generación para brindar diagnósticos precisos 
            y confiables a nuestros pacientes.
          </p>
        </div>

        {/* Subcomponentes */}
        <PetCT onOpenModal={openModal} />
        <GammaCamara onOpenModal={openModal} />

        {/* Modal */}
        <EquipmentModal equipment={selectedEquipment} onClose={closeModal} />

        {/* Sección de contacto */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas más información sobre nuestros equipos o quieres agendar un estudio?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default EquiposPET; 