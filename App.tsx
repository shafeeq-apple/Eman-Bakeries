
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductShowcase from './components/ProductShowcase';
import QualityStats from './components/QualityStats';
import DistributorLocator from './components/DistributorLocator';
import AiBaker from './components/AiBaker';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-eman-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ProductShowcase />
        <QualityStats />
        <DistributorLocator />
      </main>
      <AiBaker />
      <Footer />
    </div>
  );
};

export default App;
