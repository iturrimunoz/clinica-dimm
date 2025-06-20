import React from 'react';
import logo1 from '../assets/Logo1.png';
import Hero from './Hero';


const SobreNosotros = ({ title }) => (
  <>
    <Hero title={title} />
    <section id="aboutus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos un centro médico especializado en diagnóstico por imágenes, comprometidos con la excelencia y la innovación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center space-y-8">
            <img
              src={logo1}
              alt="Logo Imagen Híbrida"
              className="rounded-2xl shadow-xl w-full max-w-md object-contain"
            />
        
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Proporcionar servicios de diagnóstico por imágenes de la más alta calidad, utilizando tecnología de vanguardia y un equipo humano altamente capacitado, para contribuir al bienestar de nuestros pacientes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser el centro de referencia en diagnóstico por imágenes en Bolivia, reconocido por nuestra excelencia técnica, innovación constante y compromiso con la salud de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default SobreNosotros;