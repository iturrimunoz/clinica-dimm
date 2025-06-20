import React from 'react';
import Hero from './Hero';

const Contact = ({ title }) => (
  <>
    <Hero title={title} />
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contáctanos</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-custom">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-custom">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-custom">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-custom">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">Teléfono</h4>
                <p className="text-gray-custom">+591-750-06874</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">Email</h4>
                <p className="text-gray-custom">dr.bowles-gerentemedico@dimm-bolivia.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">Dirección</h4>
                <p className="text-gray-custom">
                  Av. Marcelo Terceros,<br />
                  <br />
                  Santa Cruz de la Sierra, Bolivia
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mapa de Google más grande en la parte inferior */}
        <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1417.3258536888782!2d-63.19922325416666!3d-17.765549997830696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sbo!4v1748274722631!5m2!1ses-419!2sbo"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen="auto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  </>
);

export default Contact; 