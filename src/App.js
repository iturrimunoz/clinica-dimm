import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SobreNosotros from './components/SobreNosotros';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Terapias from './components/Terapias';
import EquiposPET from './components/EquiposPET';

function App() {
  const [activeComponent, setActiveComponent] = useState('inicio');

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  const getTitle = () => {
    switch (activeComponent) {
      case 'inicio':
        return 'Inicio';
      case 'aboutus':
        return 'Sobre Nosotros';
      case 'services':
        return 'Servicios';
      case 'team':
        return 'Nuestro Equipo';
      case 'gallery':
        return 'Galería';
      case 'testimonials':
        return 'Testimonios';
      case 'contact':
        return 'Contacto';
      case 'terapias':
        return 'Terapias';
      case 'equipos-pet':
        return 'Equipos PET';
      default:
        return 'Inicio';
    }
  };

  const getPath = () => {
    switch (activeComponent) {
      case 'inicio':
        return 'Inicio';
      case 'aboutus':
        return 'Inicio / Nosotros';
      case 'services':
        return 'Inicio / Servicios';
      case 'team':
        return 'Inicio / Equipo';
      case 'gallery':
        return 'Inicio / Galería';
      case 'testimonials':
        return 'Inicio / Testimonios';
      case 'contact':
        return 'Inicio / Contacto';
      case 'terapias':
        return 'Inicio / Terapias';
      case 'equipos-pet':
        return 'Inicio / Equipos PET';
      default:
        return 'Inicio';
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'inicio':
        return <Hero title={getTitle()} path={getPath()} isInicio={true} />;
      case 'aboutus':
        return <SobreNosotros title={getTitle()} path={getPath()} />;
      case 'services':
        return <Services title={getTitle()} path={getPath()} />;
      case 'team':
        return <Team title={getTitle()} path={getPath()} />;
      case 'gallery':
        return <Gallery title={getTitle()} path={getPath()} />;
      case 'testimonials':
        return <Testimonials title={getTitle()} path={getPath()} />;
      case 'contact':
        return <Contact title={getTitle()} path={getPath()} />;
      case 'terapias':
        return <Terapias title={getTitle()} path={getPath()} />;
      case 'equipos-pet':
        return <EquiposPET title={getTitle()} path={getPath()} />;
      default:
        return <Hero title={getTitle()} path={getPath()} isInicio={true} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={handleMenuClick} />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default App;
