import React from 'react';
import Hero from './Hero';

const Testimonials = ({ title }) => {
  const testimonials = [
    {
      name: "Sr. Aarav Sharma",
      text: "El Dr. Swagat realizó mi Tomografía PET con la máxima profesionalidad. Explicó el procedimiento detalladamente y mostró una empatía genuina. Las instalaciones estaban bien equipadas y me sentí confiado en su experiencia. Altamente recomendado para pacientes con cáncer que buscan un especialista confiable y compasivo."
    },
    {
      name: "Sr. Rohan Desai",
      text: "La terapia contra el cáncer del Dr. Swagat fue notablemente efectiva y compasiva. Su enfoque personalizado tuvo un impacto significativo en mi bienestar. Altamente recomendado para quienes necesitan una atención considerada."
    },
    {
      name: "Juan D.",
      text: "No puedo agradecer lo suficiente al Dr. Swagat por su excepcional atención y experiencia en el tratamiento de mi cáncer de próstata con terapia PSMA. Desde el momento en que lo conocí, irradiaba confianza y compasión. Su enfoque innovador en medicina nuclear es verdaderamente notable. El tratamiento fue un cambio radical para mí."
    }
  ];

  return (
    <>
      <Hero title={title} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¡Lo que dicen nuestros pacientes!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-secondary mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials; 