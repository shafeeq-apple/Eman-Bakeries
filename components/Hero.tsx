
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: 'url("https://picsum.photos/id/429/1920/1080")' }} // Wheat/Bread texture
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-eman-black/90 via-eman-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-block border-b-2 border-eman-gold pb-1">
            <span className="text-eman-gold uppercase tracking-[0.3em] text-xs font-bold">Est. 1978</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
            The Art of <br />
            <span className="text-eman-gold italic pr-4">Refined</span> Baking.
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-lg leading-relaxed">
            Crafting exceptional breads and pastries with an uncompromising dedication to quality, tradition, and innovation.
          </p>

          <div className="pt-8 flex gap-4">
            <a 
              href="#collection" 
              className="px-8 py-4 bg-eman-gold text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-eman-black transition-all duration-300"
            >
              Discover Products
            </a>
            <a 
              href="#locator" 
              className="px-8 py-4 border border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-eman-black transition-all duration-300"
            >
              Find a Dealer
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <span className="text-2xl">↓</span>
      </div>
    </section>
  );
};

export default Hero;
