import React, { useState, useEffect } from "react";
import TerapiaModal from './modals/TerapiaModal';
import GammaCamaraModal from './modals/GammaCamaraModal';

const Navbar = ({ onMenuClick }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPetModal, setShowPetModal] = useState(false);
  const [selectedTerapia, setSelectedTerapia] = useState(null);
  const [showGammaModal, setShowGammaModal] = useState(false);
  const [gammaSection, setGammaSection] = useState('general');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const petImages = [
    {
      id: 1,
      image: "/src/assets/pet-ct.jpg",
      title: "PET-CT",
      description: "Nuestro equipo PET-CT de última generación"
    },
    {
      id: 2,
      image: "/src/assets/pet-ct.jpg",
      title: "Sala de Control",
      description: "Sala de control del PET-CT"
    },
    {
      id: 3,
      image: "/src/assets/pet-ct.jpg",
      title: "Área de Procedimientos",
      description: "Área donde se realizan los procedimientos PET-CT"
    }
  ];

  const renderPetModal = () => {
    if (!showPetModal) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={() => setShowPetModal(false)}
      >
        <div 
          className="bg-white rounded-xl w-full max-w-4xl relative transform transition-all duration-300"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setShowPetModal(false)}
            className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Equipos PET</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {petImages.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Datos completos de las terapias
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  };

  // Datos de equipos PET
  const equiposPetData = {
    'pet-ct-discovery': {
      titulo: "PET/CT Brivo NM615",
      descripcion: "El Brivo NM615 es una cámara gamma con capacidad SPECT de solo cabezal (single‑head), fabricada por GE Healthcare. Está diseñada para ofrecer alto rendimiento a un costo accesible, con una ruta de actualización sencilla hacia sistemas dual‑head SPECT/CT (Discovery NM630 o NM/CT 670)",
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
      ]
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
      ]
    }
  };

  // Datos de Gamma Cámara
  const gammaCamaraData = {
    general: {
      titulo: "Gamma Cámara SPECT/CT - Información General",
      descripcion: "La Gamma Cámara SPECT/CT es un equipo avanzado que permite obtener imágenes funcionales y anatómicas de alta resolución, facilitando diagnósticos precisos en medicina nuclear. Este sistema híbrido combina la tecnología SPECT (Single Photon Emission Computed Tomography) con tomografía computarizada para proporcionar información tanto funcional como anatómica en un solo estudio.",
      caracteristicas: [
        "Tecnología híbrida SPECT/CT",
        "Imágenes funcionales y anatómicas combinadas",
        "Alta sensibilidad y resolución",
        "Baja dosis de radiación",
        "Sistema de doble cabezal",
        "Software avanzado de reconstrucción"
      ],
      aplicaciones: [
        "Diagnóstico de enfermedades óseas",
        "Cardiología nuclear",
        "Estudios renales y tiroideos",
        "Evaluación de infecciones y tumores",
        "Estudios de paratiroides",
        "Linfogammagrafía"
      ],
      imagen: "/src/assets/gamma-camara.jpg"
    },
    especificaciones: {
      titulo: "Gamma Cámara SPECT/CT - Especificaciones Técnicas",
      descripcion: "Características técnicas detalladas del equipo Gamma Cámara SPECT/CT, incluyendo especificaciones del detector, sistema SPECT y componentes integrados.",
      caracteristicas: [
        "Detector de alta resolución NaI(Tl)",
        "Sistema SPECT de doble cabezal",
        "CT multicorte integrado (16 cortes)",
        "Software avanzado de reconstrucción de imágenes",
        "Colimadores intercambiables",
        "Campo de visión: 53.3 x 38.7 cm",
        "Resolución espacial: < 4.2 mm"
      ],
      aplicaciones: [
        "Optimización de protocolos de imagen",
        "Reducción de artefactos",
        "Fusión precisa de imágenes SPECT y CT",
        "Reconstrucción iterativa",
        "Corrección de atenuación"
      ],
      imagen: "/src/assets/gamma-camara.jpg"
    },
    estudios: {
      titulo: "Gamma Cámara SPECT/CT - Estudios Realizados",
      descripcion: "Principales estudios que se pueden realizar con la Gamma Cámara SPECT/CT, abarcando todas las especialidades de medicina nuclear.",
      caracteristicas: [
        "Gammagrafía ósea (cuerpo completo y SPECT)",
        "Gammagrafía tiroidea",
        "Gammagrafía renal (DMSA, DTPA, MAG3)",
        "Estudios cardíacos (perfusión miocárdica)",
        "Estudios de paratiroides",
        "Linfogammagrafía",
        "Gammagrafía pulmonar"
      ],
      aplicaciones: [
        "Detección de metástasis óseas",
        "Evaluación de función renal",
        "Diagnóstico de enfermedades tiroideas",
        "Valoración de isquemia cardíaca",
        "Localización de adenomas paratiroideos",
        "Evaluación del sistema linfático"
      ],
      imagen: "/src/assets/gamma-camara.jpg"
    }
  };

  const handleTerapiaClick = (terapiaId) => {
    setSelectedTerapia(terapiasData[terapiaId] || equiposPetData[terapiaId]);
  };

  return (
    <>
      {/* Barra de redes sociales */}
      <div className="fixed top-0 w-full bg-secondary text-white py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-4">
          <a href="https://facebook.com/hans.bowles.9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/imagenhibrida_/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://wa.me/59175006874" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
      <header
        className={`fixed z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/50 backdrop-blur-md shadow-md rounded-full mx-4 top-12 w-[80%] left-[10%]"
            : "bg-primary top-8 w-full"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-300
          ${scrolled ? "flex flex-col items-center justify-center h-16" : "flex flex-col items-center justify-center h-28"}
        `}>
          {/* Links desktop */}
          <nav className={`hidden md:flex space-x-8 transition-all duration-300
            ${scrolled ? "" : "justify-center"}
          `}>
            <button onClick={() => onMenuClick('inicio')} className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              hover:bg-secondary/20 hover:rounded-full px-4 py-2
            `}>
              Inicio
            </button>
            <button onClick={() => onMenuClick('aboutus')} className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              hover:bg-secondary/20 hover:rounded-full px-4 py-2
            `}>
              Nosotros
            </button>
            
            {/* Menú Terapias con submenús anidados */}
            <div className="relative group">
              <button 
                onClick={() => onMenuClick('terapias')}
                className={`font-medium transition-all duration-300 relative group
                  ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
                  hover:bg-secondary/20 hover:rounded-full px-4 py-2
                `}
              >
                Terapias
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios Óseos
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía Ósea
                    </button>
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Centellografía Ósea
                    </button>
                  </div>
                </div>
                
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios de Infección
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía Ciprofloxacina
                    </button>
                  </div>
                </div>

                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios Cardíacos y Sistema Linfático
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía de Perfusión Miocárdica
                    </button>
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía de Viabilidad Miocárdica
                    </button>
                  </div>
                </div>
                
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios Neuro-Urológicos
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía DMSA Renal
                    </button>
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Renograma DTPA
                    </button>
                  </div>
                </div>
                
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios Pulmonares
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía Pulmonar de Perfusión-Ventilación
                    </button>
                  </div>
                </div>
                
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('terapias')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Estudios Endocrinológicos
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('terapias')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >
                      Gammagrafía Tiroidea
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => onMenuClick('equipos-pet')}
                className={`font-medium transition-all duration-300 relative group
                  ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
                  hover:bg-secondary/20 hover:rounded-full px-4 py-2
                `}
              >
                Equipos PET
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <div className="relative group/submenu">
                  <button 
                    onClick={() => onMenuClick('equipos-pet')}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    PET CT
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => onMenuClick('equipos-pet')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >PET/CT Discovery MI</button>
                    <button 
                      onClick={() => onMenuClick('equipos-pet')}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >PET/CT Biograph Vision</button>
                  </div>
                </div>
                <div className="relative group/submenu">
                  <button 
                    onClick={() => { setGammaSection('general'); setShowGammaModal(true); }}
                    className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                  >
                    Gamma Cámara
                  </button>
                  <div className="absolute left-full top-0 w-48 bg-white/40 backdrop-blur-sm border rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 pointer-events-none group-hover/submenu:pointer-events-auto transition">
                    <button 
                      onClick={() => { setGammaSection('general'); setShowGammaModal(true); }}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >Información General</button>
                    <button 
                      onClick={() => { setGammaSection('especificaciones'); setShowGammaModal(true); }}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >Especificaciones Técnicas</button>
                    <button 
                      onClick={() => { setGammaSection('estudios'); setShowGammaModal(true); }}
                      className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-white/30 hover:text-secondary rounded"
                    >Estudios Realizados</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => onMenuClick('team')} className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              hover:bg-secondary/20 hover:rounded-full px-4 py-2
            `}>
              Nuestro Equipo
            </button>
            <button onClick={() => onMenuClick('testimonials')} className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              hover:bg-secondary/20 hover:rounded-full px-4 py-2
            `}>
              Testimonios
            </button>
            <button onClick={() => onMenuClick('gallery')} className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-900 hover:text-secondary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              hover:bg-secondary/20 hover:rounded-full px-4 py-2
            `}>
              Galería
            </button>
            <button onClick={() => onMenuClick('contact')} className={`font-semibold border px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden group
              ${scrolled ? "text-secondary border-secondary hover:bg-secondary hover:text-white" : "text-white border-white hover:bg-white hover:text-primary"}
              before:content-[''] before:absolute before:w-full before:h-full before:bg-current before:left-0 before:top-0 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 group-hover:before:opacity-30
            `}>
              <span className="relative z-10">Contáctanos</span>
            </button>
          </nav>
          {/* Botón menú móvil */}
          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={() => setOpen(!open)}
              className={`focus:outline-none transition-colors duration-300
                ${scrolled ? "text-gray-900" : "text-white"}
              `}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Menú móvil */}
        {open && (
          <nav className="md:hidden bg-white shadow-lg px-4 pb-4">
            <button onClick={() => onMenuClick('inicio')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Inicio</button>
            <button onClick={() => onMenuClick('aboutus')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Nosotros</button>
            <button onClick={() => onMenuClick('terapias')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Terapias</button>
            <button onClick={() => onMenuClick('equipos-pet')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Equipos PET</button>
            <button onClick={() => onMenuClick('team')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Nuestro Equipo</button>
            <button onClick={() => onMenuClick('testimonials')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Testimonios</button>
            <button onClick={() => onMenuClick('gallery')} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Galería</button>
            <button onClick={() => onMenuClick('contact')} className="block w-full text-left py-2 text-secondary font-semibold border border-secondary rounded hover:bg-secondary hover:text-white transition">Contáctanos</button>
            <button onClick={() => { setGammaSection('general'); setShowGammaModal(true); setOpen(false); }} className="block w-full text-left py-2 text-gray-900 hover:bg-secondary hover:text-white rounded">Gamma Cámara</button>
          </nav>
        )}
      </header>

      {renderPetModal()}

      <TerapiaModal 
        isOpen={!!selectedTerapia} 
        onClose={() => setSelectedTerapia(null)} 
        terapia={selectedTerapia} 
      />

      <GammaCamaraModal 
        isOpen={showGammaModal} 
        onClose={() => setShowGammaModal(false)} 
        data={gammaCamaraData[gammaSection]} 
      />

      <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 