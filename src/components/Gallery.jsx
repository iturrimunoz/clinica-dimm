import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';

// Importar las imágenes
import recepcionImg from '../assets/recepcion.avif';
import petCtImg from '../assets/pet-ct.jpg';
import gammaCamaraImg from '../assets/gamma-camara.jpg';

const Gallery = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de contenido
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'instalaciones', name: 'Instalaciones' },
    { id: 'equipamiento', name: 'Equipamiento' },
    { id: 'videos', name: 'Videos' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Recepción",
      description: "Área de recepción y atención al paciente con ambiente acogedor y profesional",
      image: recepcionImg,
      category: "instalaciones",
      featured: true
    },
    {
      id: 2,
      title: "Equipo PET-CT",
      description: "Tecnología de última generación para diagnósticos precisos en oncología, neurología y cardiología",
      image: petCtImg,
      category: "equipamiento",
      featured: true
    },
    {
      id: 3,
      title: "Gamma Cámara SPECT/CT",
      description: "Equipo especializado para estudios de medicina nuclear con tecnología híbrida",
      image: gammaCamaraImg,
      category: "equipamiento",
      featured: true
    },
    {
      id: 4,
      title: "Sala de Control PET-CT",
      description: "Área de control y monitoreo de estudios PET-CT con tecnología avanzada",
      image: petCtImg,
      category: "instalaciones",
      featured: false
    },
    {
      id: 5,
      title: "Sala de Control Gamma Cámara",
      description: "Estación de trabajo para el control y procesamiento de estudios de medicina nuclear",
      image: gammaCamaraImg,
      category: "instalaciones",
      featured: false
    },
    {
      id: 6,
      title: "Área de Preparación",
      description: "Espacio dedicado para la preparación de pacientes antes de los estudios",
      image: recepcionImg,
      category: "instalaciones",
      featured: false
    },
    {
      id: 7,
      title: "Sala de Espera",
      description: "Área de espera confortable para pacientes y familiares",
      image: recepcionImg,
      category: "instalaciones",
      featured: false
    },
    {
      id: 8,
      title: "Detalle PET-CT",
      description: "Vista detallada del equipo PET-CT mostrando su tecnología avanzada",
      image: petCtImg,
      category: "equipamiento",
      featured: false
    },
    {
      id: 9,
      title: "Detalle Gamma Cámara",
      description: "Vista detallada de la Gamma Cámara SPECT/CT",
      image: gammaCamaraImg,
      category: "equipamiento",
      featured: false
    }
  ];

  const videoItems = [
    {
      id: 1,
      title: "Introducción a la Medicina Nuclear",
      description: "Conoce más sobre nuestros servicios y tecnología avanzada",
      url: "https://www.youtube.com/watch?v=tu-video-id-1",
      thumbnail: petCtImg,
      category: "videos",
      featured: true
    },
    {
      id: 2,
      title: "Nuestro Equipo PET-CT",
      description: "Tour virtual por nuestras instalaciones y equipos",
      url: "https://www.youtube.com/watch?v=tu-video-id-2",
      thumbnail: gammaCamaraImg,
      category: "videos",
      featured: true
    },
    {
      id: 3,
      title: "Procedimientos Seguros",
      description: "Conoce nuestros protocolos de seguridad y calidad",
      url: "https://www.youtube.com/watch?v=tu-video-id-3",
      thumbnail: recepcionImg,
      category: "videos",
      featured: true
    }
  ];

  const filteredItems = [...galleryItems, ...videoItems].filter(item => 
    activeCategory === 'todos' || item.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setSelectedImage(null);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const renderVideoModal = () => {
    if (!selectedVideo) return null;
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl w-full max-w-4xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-t-xl overflow-hidden">
              <ReactPlayer 
                url={selectedVideo.url} 
                width="100%" 
                height="100%" 
                controls 
                playing
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const renderImageModal = () => {
    if (!selectedImage) return null;
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl w-full max-w-4xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-4">
              <div className="w-full aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden flex justify-center items-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-b-xl">
              <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
              <p className="text-gray-600 mt-2">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Hero title={title} />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero title={title} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Galería */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={item.image || item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => item.url ? openVideoModal(item) : setSelectedImage(item)}
                    className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-medium"
                  >
                    {item.url ? 'Ver Video' : 'Ver Imagen'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modales */}
        {renderImageModal()}
        {renderVideoModal()}
      </div>
    </div>
  );
};

export default Gallery; 