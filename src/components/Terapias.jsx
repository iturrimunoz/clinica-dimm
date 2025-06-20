import React, { useState } from 'react';
import Hero from './Hero';
import gammaCamaraImg from '../assets/gamma-camara.jpg';

// Componente Modal para mostrar información detallada de la terapia
const TerapiaModal = ({ isOpen, onClose, terapia }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-primary">{terapia?.titulo}</h2>
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
            <p className="text-gray-600 mb-4">{terapia?.descripcion}</p>
            
            {terapia?.caracteristicas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Características:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {terapia.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
              </div>
            )}

            {terapia?.aplicaciones && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Aplicaciones:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {terapia.aplicaciones.map((aplicacion, index) => (
                    <li key={index}>{aplicacion}</li>
                  ))}
                </ul>
              </div>
            )}

            {terapia?.imagen && (
              <div className="mt-6">
                <img 
                  src={terapia.imagen} 
                  alt={terapia.titulo}
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

const Terapias = ({ title }) => {
  const [selectedTerapia, setSelectedTerapia] = useState(null);

  const terapiasData = {
    // Estudios Óseos
    'gammagrafia-osea': {
      titulo: "Gammagrafía Ósea",
      descripcion: "Estudio de medicina nuclear que permite visualizar la actividad metabólica del hueso.",
      caracteristicas: [
        "Alta sensibilidad para detectar cambios metabólicos",
        "Imágenes de alta resolución",
        "Estudio de cuerpo completo",
        "Resultados en 24-48 horas"
      ],
      aplicaciones: [
        "Detección de metástasis óseas",
        "Evaluación de fracturas",
        "Diagnóstico de artritis",
        "Monitoreo de tratamientos oncológicos"
      ],
      imagen: gammaCamaraImg,
      categoria: "Estudios Óseos"
    },
    'centellografia-osea': {
      titulo: "Centellografía Ósea",
      descripcion: "Técnica de imagen que permite evaluar la función y estructura del sistema óseo.",
      caracteristicas: [
        "Imágenes tomográficas",
        "Alta resolución espacial",
        "Estudio tridimensional",
        "Baja dosis de radiación"
      ],
      aplicaciones: [
        "Evaluación de lesiones óseas",
        "Diagnóstico de enfermedades metabólicas",
        "Planificación de cirugías",
        "Seguimiento de tratamientos"
      ],
      imagen: "/src/assets/centellografia-osea.jpg",
      categoria: "Estudios Óseos"
    },

    // Estudios de Infección
    'gammagrafia-ciprofloxacina': {
      titulo: "Gammagrafía con Ciprofloxacina",
      descripcion: "Estudio especializado para la detección de infecciones mediante radiofármacos.",
      caracteristicas: [
        "Alta especificidad para infecciones",
        "Resultados rápidos",
        "Baja dosis de radiación",
        "Técnica no invasiva"
      ],
      aplicaciones: [
        "Detección de infecciones óseas",
        "Localización de abscesos",
        "Evaluación de infecciones post-quirúrgicas",
        "Diagnóstico de osteomielitis"
      ],
      imagen: "/src/assets/gammagrafia-ciprofloxacina.jpg",
      categoria: "Estudios de Infección"
    },

    // Estudios Cardíacos y Sistema Linfático
    'gammagrafia-perfusion-miocardica': {
      titulo: "Gammagrafía de Perfusión Miocárdica",
      descripcion: "Estudio que evalúa el flujo sanguíneo al músculo cardíaco en reposo y esfuerzo.",
      caracteristicas: [
        "Imágenes de alta resolución",
        "Estudio en reposo y esfuerzo",
        "Evaluación de viabilidad miocárdica",
        "Resultados cuantitativos"
      ],
      aplicaciones: [
        "Diagnóstico de enfermedad coronaria",
        "Evaluación de isquemia",
        "Planificación de revascularización",
        "Pronóstico de eventos cardíacos"
      ],
      imagen: "/src/assets/gammagrafia-perfusion.jpg",
      categoria: "Estudios Cardíacos y Sistema Linfático"
    },
    'gammagrafia-viabilidad-miocardica': {
      titulo: "Gammagrafía de Viabilidad Miocárdica",
      descripcion: "Estudio que determina si el músculo cardíaco dañado puede recuperarse.",
      caracteristicas: [
        "Evaluación de tejido viable",
        "Imágenes de alta resolución",
        "Estudio de metabolismo miocárdico",
        "Resultados precisos"
      ],
      aplicaciones: [
        "Selección de pacientes para revascularización",
        "Evaluación post-infarto",
        "Planificación de tratamiento",
        "Pronóstico de recuperación"
      ],
      imagen: "/src/assets/gammagrafia-viabilidad.jpg",
      categoria: "Estudios Cardíacos y Sistema Linfático"
    },

    // Estudios Neuro-Urológicos
    'gammagrafia-dmsa-renal': {
      titulo: "Gammagrafía DMSA Renal",
      descripcion: "Estudio que evalúa la función y estructura del parénquima renal.",
      caracteristicas: [
        "Alta resolución anatómica",
        "Evaluación de función renal",
        "Baja dosis de radiación",
        "Técnica no invasiva"
      ],
      aplicaciones: [
        "Evaluación de daño renal",
        "Diagnóstico de pielonefritis",
        "Estudio de malformaciones",
        "Seguimiento de tratamientos"
      ],
      imagen: "/src/assets/gammagrafia-dmsa.jpg",
      categoria: "Estudios Neuro-Urológicos"
    },
    'renograma-dtpa': {
      titulo: "Renograma DTPA",
      descripcion: "Estudio dinámico que evalúa la función renal y el drenaje urinario.",
      caracteristicas: [
        "Estudio dinámico",
        "Evaluación de función renal",
        "Análisis de drenaje",
        "Resultados cuantitativos"
      ],
      aplicaciones: [
        "Evaluación de función renal",
        "Diagnóstico de obstrucción",
        "Estudio de reflujo",
        "Seguimiento post-trasplante"
      ],
      imagen: "/src/assets/renograma-dtpa.jpg",
      categoria: "Estudios Neuro-Urológicos"
    },

    // Estudios Pulmonares
    'gammagrafia-pulmonar': {
      titulo: "Gammagrafía Pulmonar de Perfusión-Ventilación",
      descripcion: "Estudio que evalúa la circulación y ventilación pulmonar.",
      caracteristicas: [
        "Imágenes de perfusión y ventilación",
        "Alta sensibilidad",
        "Estudio no invasivo",
        "Resultados rápidos"
      ],
      aplicaciones: [
        "Diagnóstico de embolismo pulmonar",
        "Evaluación de función pulmonar",
        "Planificación quirúrgica",
        "Seguimiento de tratamientos"
      ],
      imagen: "/src/assets/gammagrafia-pulmonar.jpg",
      categoria: "Estudios Pulmonares"
    },

    // Estudios Endocrinológicos
    'gammagrafia-tiroidea': {
      titulo: "Gammagrafía Tiroidea",
      descripcion: "Estudio que evalúa la función y estructura de la glándula tiroides.",
      caracteristicas: [
        "Imágenes de alta resolución",
        "Evaluación de función tiroidea",
        "Baja dosis de radiación",
        "Resultados precisos"
      ],
      aplicaciones: [
        "Diagnóstico de nódulos tiroideos",
        "Evaluación de hipertiroidismo",
        "Localización de tejido tiroideo",
        "Seguimiento de tratamientos"
      ],
      imagen: "/src/assets/gammagrafia-tiroidea.jpg",
      categoria: "Estudios Endocrinológicos"
    }
  };

  // Agrupar terapias por categoría
  const terapiasPorCategoria = Object.entries(terapiasData).reduce((acc, [id, terapia]) => {
    if (!acc[terapia.categoria]) {
      acc[terapia.categoria] = [];
    }
    acc[terapia.categoria].push({ id, ...terapia });
    return acc;
  }, {});

  const handleTerapiaClick = (terapia) => {
    setSelectedTerapia(terapia);
  };

  return (
    <>
      <Hero title={title} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(terapiasPorCategoria).map(([categoria, terapias]) => (
            <div key={categoria} className="mb-16 last:mb-0">
              <h2 className="text-4xl font-bold text-primary text-center mb-12">
                {categoria}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {terapias.map((terapia) => (
                  <div 
                    key={terapia.id}
                    onClick={() => handleTerapiaClick(terapia)}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer relative overflow-hidden group"
                  >
                    {terapia.imagen && (
                      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={terapia.imagen} 
                          alt={terapia.titulo}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {terapia.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {terapia.descripcion}
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="text-secondary hover:text-primary transition-colors flex items-center space-x-1">
                        <span>Ver más detalles</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <TerapiaModal 
        isOpen={!!selectedTerapia} 
        onClose={() => setSelectedTerapia(null)} 
        terapia={selectedTerapia} 
      />
    </>
  );
};

export default Terapias; 