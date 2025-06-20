import React from 'react';
import doctorBowles from '../images/doctor-bowles.jpg';
import tecnicoAlmendras from '../images/tecnico-almendras.jpg';
import Hero from './Hero';

const Team = ({ title }) => {
  const team = [
    {
      name: "Dr. Hans Bowles",
      role: "Director Médico",
      specialty: "Medicina Nuclear",
      education: "Especialista en Medicina Nuclear",
      experience: "Más de 15 años de experiencia",
      description: "Lidera nuestro equipo con experiencia en diagnóstico por imágenes y medicina nuclear. Comprometido con la excelencia en el cuidado del paciente.",
      image: doctorBowles,
      certifications: ["Director Medico", "Medicina Nuclear Avanzada"],
      languages: ["Español", "Inglés"]
    },
    {
      name: "Lic. Rene Almendras",
      role: "Técnico Médico",
      specialty: "Tecnología Radiológica",
      education: "Licenciatura en Tecnología Radiológica",
      experience: "Más de 10 años de experiencia",
      description: "Especialista en operación de equipos PET-CT y Gamma Cámara. Experto en protocolos de seguridad y calidad en imagenología.",
      image: tecnicoAlmendras,
      certifications: ["Operación de PET-CT", "Radioprotección"],
      languages: ["Español"]
    }
  ];

  return (
    <>
      <Hero title={title} />
      <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo Profesional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un equipo de expertos comprometidos con la excelencia en el diagnóstico y tratamiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {member.certifications.map((cert, index) => (
                              <span 
                                key={index}
                                className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-700 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-500 mb-2">{member.specialty}</p>
                    <p className="text-gray-600 mb-2">{member.education}</p>
                    <p className="text-gray-600 mb-2">{member.experience}</p>
                    <p className="text-gray-700 mb-4">{member.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">Idiomas:</span>
                      {member.languages.map((lang, i) => (
                        <span key={i} className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full mr-1">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team; 