import React from "react";
import Hero from './Hero';

const services = [
  {
    title: "PET Scans",
    description: "Imágenes precisas para la detección temprana y diagnóstico efectivo.",
    features: [
      "Centro acreditado",
      "Tecnología avanzada",
      "Técnicos expertos",
      "Ubicación conveniente",
      "Atención enfocada en tu comodidad"
    ]
  },
  {
    title: "Tratamientos contra el cáncer",
    description: "Terapias nucleares avanzadas que atacan condiciones específicas con precisión.",
    features: [
      "Especialistas en oncología",
      "Resultados comprobados",
      "Comunicación clara y empática",
      "Atención colaborativa",
      "Soporte integral (nutrición y consejería)"
    ]
  }
];

const Services = ({ title }) => (
  <>
    <Hero title={title} />
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-custom mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-custom">
                    <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services; 