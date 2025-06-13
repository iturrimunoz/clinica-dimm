import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
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
      title: "Nuestras Instalaciones",
      description: "Centro médico equipado con la más alta tecnología para el diagnóstico por imágenes",
      image: "/src/assets/instalaciones.jpg",
      category: "instalaciones",
      featured: true
    },
    {
      id: 2,
      title: "Equipo PET-CT",
      description: "Tecnología de última generación para diagnósticos precisos",
      image: "/src/assets/pet-ct.jpg",
      category: "equipamiento",
      featured: true
    },
    {
      id: 3,
      title: "Sala de Control",
      description: "Área de control y monitoreo de estudios",
      image: "/src/assets/sala-control.jpg",
      category: "instalaciones",
      featured: true
    },
    {
      id: 4,
      title: "Área de Espera",
      description: "Espacio confortable para nuestros pacientes",
      image: "/src/assets/sala-espera.jpg",
      category: "instalaciones",
      featured: true
    },
    {
      id: 5,
      title: "Gamma Cámara",
      description: "Equipo especializado para estudios de medicina nuclear",
      image: "/src/assets/gamma-camara.jpg",
      category: "equipamiento",
      featured: true
    },
    {
      id: 6,
      title: "Sala de Procedimientos",
      description: "Área preparada para realizar estudios especializados",
      image: "/src/assets/procedimientos.jpg",
      category: "instalaciones",
      featured: true
    }
  ];

  const videoItems = [
    {
      id: 1,
      title: "Introducción a la Medicina Nuclear",
      description: "Conoce más sobre nuestros servicios y tecnología",
      url: "https://www.youtube.com/watch?v=tu-video-id-1",
      thumbnail: "/src/assets/video-thumb-1.jpg",
      category: "videos",
      featured: true
    },
    {
      id: 2,
      title: "Nuestro Equipo PET-CT",
      description: "Tour virtual por nuestras instalaciones",
      url: "https://www.youtube.com/watch?v=tu-video-id-2",
      thumbnail: "/src/assets/video-thumb-2.jpg",
      category: "videos",
      featured: true
    },
    {
      id: 3,
      title: "Procedimientos Seguros",
      description: "Conoce nuestros protocolos de seguridad",
      url: "https://www.youtube.com/watch?v=tu-video-id-3",
      thumbnail: "/src/assets/video-thumb-3.jpg",
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
                    playerVars: { 
                      modestbranding: 1,
                      rel: 0
                    }
                  }
                }}
              />
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h3>
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
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-t-xl overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                <span className="px-3 py-1 text-sm text-secondary bg-secondary/10 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestras Instalaciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conoce nuestras instalaciones y equipos de última generación, diseñados para brindar el mejor servicio a nuestros pacientes
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de contenido */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative ${
                item.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="bg-white rounded-md shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-1.5 text-white">
                      <h3 className="text-[10px] font-bold mb-0.5">{item.title}</h3>
                      <p className="text-[8px] opacity-90 line-clamp-2">{item.description}</p>
                      {item.category !== 'videos' && (
                        <span className="inline-block px-1 py-0.5 text-[8px] bg-white/20 rounded-full mt-0.5">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </div>
                  {item.category === 'videos' ? (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => openVideoModal(item)}
                    >
                      <div className="w-5 h-5 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="w-4 h-4 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-2 h-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Tecnología</h3>
            <p className="text-gray-600 mb-4">
              Contamos con equipos de última generación para brindar diagnósticos precisos y confiables:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>PET-CT de última generación</li>
              <li>Gamma Cámara SPECT/CT</li>
              <li>Sistemas de procesamiento de imágenes avanzados</li>
              <li>Equipos de seguridad y protección radiológica</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestro Compromiso</h3>
            <p className="text-gray-600 mb-4">
              En Imagen Híbrida nos comprometemos a:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Brindar atención personalizada y de calidad</li>
              <li>Mantener instalaciones limpias y confortables</li>
              <li>Utilizar tecnología de vanguardia</li>
              <li>Garantizar la seguridad de nuestros pacientes</li>
            </ul>
          </div>
        </motion.div>
      </div>
      {renderImageModal()}
      {renderVideoModal()}
    </section>
  );
};

export default Gallery; 