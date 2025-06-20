import React, { useState } from 'react';

const DrBowlesButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drBowlesData = {
    nombre: "Dr. Hans Bowles",
    cargo: "Director Médico",
    especialidad: "Medicina Nuclear",
    experiencia: "Más de 15 años de experiencia",
    educacion: "Especialista en Medicina Nuclear",
    descripcion: "Lidera nuestro equipo con experiencia en diagnóstico por imágenes y medicina nuclear. Comprometido con la excelencia en el cuidado del paciente.",
    certificaciones: [
      "Director Médico",
      "Medicina Nuclear Avanzada"
    ],
    idiomas: [
      "Español",
      "Inglés"
    ],
    contacto: {
      telefono: "+591-750-06874",
      email: "dr.bowles-gerentemedico@dimm-bolivia.com"
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-secondary transition-all duration-300 z-50 flex items-center space-x-2 group"
      >
        <span className="text-2xl">👨‍⚕️</span>
        <span className="hidden md:block font-semibold">Dr. Bowles</span>
        <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Información del Director Médico
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary">{drBowlesData.nombre}</h2>
                  <p className="text-gray-600">{drBowlesData.cargo}</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Especialidad</h3>
                  <p className="text-gray-600">{drBowlesData.especialidad}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia</h3>
                  <p className="text-gray-600">{drBowlesData.experiencia}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Educación</h3>
                  <p className="text-gray-600">{drBowlesData.educacion}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Descripción</h3>
                  <p className="text-gray-600">{drBowlesData.descripcion}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificaciones</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {drBowlesData.certificaciones.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Idiomas</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {drBowlesData.idiomas.map((idioma, index) => (
                      <li key={index}>{idioma}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contacto</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">Teléfono:</span> {drBowlesData.contacto.telefono}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span> {drBowlesData.contacto.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrBowlesButton; 