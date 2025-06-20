import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      category: "Terapias Nucleares",
      questions: [
        {
          q: "¿Qué son los tratamientos de medicina nuclear?",
          a: "Los tratamientos de medicina nuclear utilizan sustancias radiactivas para atacar y destruir células cancerosas mientras minimizan el daño al tejido sano circundante."
        },
        {
          q: "¿Qué tan efectivas son las terapias nucleares para el tratamiento del cáncer?",
          a: "La efectividad varía según el tipo de cáncer, pero muchos pacientes experimentan una mejora significativa o remisión."
        },
        {
          q: "¿Hay efectos secundarios asociados con las terapias nucleares?",
          a: "Los efectos secundarios comunes pueden incluir fatiga, náuseas y dolor localizado; sin embargo, muchos pacientes toleran bien estas terapias."
        }
      ]
    },
    {
      category: "Tomografías PET",
      questions: [
        {
          q: "¿Qué es una tomografía PET y cómo funciona?",
          a: "Una tomografía PET utiliza una pequeña cantidad de material radiactivo para visualizar la actividad metabólica en el cuerpo, ayudando a detectar cáncer y otras enfermedades."
        },
        {
          q: "¿Es segura una tomografía PET?",
          a: "Sí, las tomografías PET se consideran seguras; la exposición a la radiación es mínima y comparable a otras pruebas de imagen."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        {faqs.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
            <div className="space-y-6">
              {category.questions.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 