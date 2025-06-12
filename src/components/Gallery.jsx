import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Nuestras Instalaciones",
      description: "Centro médico equipado con la más alta tecnología para el diagnóstico por imágenes",
      image: "/src/assets/instalaciones.jpg",
      category: "Instalaciones"
    },
    {
      id: 2,
      title: "Equipo PET-CT",
      description: "Tecnología de última generación para diagnósticos precisos",
      image: "/src/assets/pet-ct.jpg",
      category: "Equipamiento"
    },
    {
      id: 3,
      title: "Sala de Control",
      description: "Área de control y monitoreo de estudios",
      image: "/src/assets/sala-control.jpg",
      category: "Instalaciones"
    },
    {
      id: 4,
      title: "Área de Espera",
      description: "Espacio confortable para nuestros pacientes",
      image: "/src/assets/sala-espera.jpg",
      category: "Instalaciones"
    },
    {
      id: 5,
      title: "Gamma Cámara",
      description: "Equipo especializado para estudios de medicina nuclear",
      image: "/src/assets/gamma-camara.jpg",
      category: "Equipamiento"
    },
    {
      id: 6,
      title: "Sala de Procedimientos",
      description: "Área preparada para realizar estudios especializados",
      image: "/src/assets/procedimientos.jpg",
      category: "Instalaciones"
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
        onClick={closeModal}
      >
        <div 
          className="bg-white rounded-xl w-full max-w-4xl relative transform transition-all duration-300 animate-scaleIn"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            aria-label="Cerrar imagen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-b-xl">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{selectedImage.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-secondary font-medium">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Nuestras Instalaciones</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce nuestras instalaciones y equipos de última generación, diseñados para brindar el mejor servicio a nuestros pacientes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-primary/10"
              onClick={() => openImageModal(item)}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                  </svg>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                <span className="inline-block px-2 py-0.5 text-xs text-secondary bg-secondary/10 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
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
          <div className="bg-white p-8 rounded-xl shadow-lg">
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
        </div>
      </div>
      {renderImageModal()}
    </section>
  );
};

export default Gallery; 