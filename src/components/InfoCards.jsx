import React from 'react';

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      titulo: "Atención Personalizada",
      descripcion: "Brindamos atención médica personalizada con un enfoque integral para cada paciente.",
      icono: "👨‍⚕️",
      color: "from-primary/90 to-primary/70"
    },
    {
      id: 2,
      titulo: "Tecnología Avanzada",
      descripcion: "Contamos con equipos de última generación para diagnósticos precisos y tratamientos efectivos.",
      icono: "🔬",
      color: "from-secondary/90 to-secondary/70"
    },
    {
      id: 3,
      titulo: "Equipo Especializado",
      descripcion: "Nuestro equipo médico está altamente capacitado y en constante actualización.",
      icono: "👥",
      color: "from-primary/90 to-primary/70"
    },
    {
      id: 4,
      titulo: "Horario Extendido",
      descripcion: "Atención de lunes a sábado con horarios flexibles para tu comodidad.",
      icono: "⏰",
      color: "from-secondary/90 to-secondary/70"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En nuestra clínica nos comprometemos a brindar la mejor atención médica
            con tecnología de vanguardia y un equipo humano excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br p-6 text-white shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${card.color})`
              }}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {card.icono}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {card.titulo}
                </h3>
                <p className="text-white/90">
                  {card.descripcion}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Agenda tu cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoCards; 