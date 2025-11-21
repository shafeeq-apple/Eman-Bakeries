import React, { useState } from 'react';
import { DISTRIBUTORS } from '../constants';
import { Distributor } from '../types';

const DistributorLocator: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);

  const regions = ['All', ...Array.from(new Set(DISTRIBUTORS.map(d => d.region)))];

  const filteredDistributors = DISTRIBUTORS.filter(d => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesSearch = d.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="locator" className="relative min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-eman-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-serif text-4xl mb-2">Locate a Distributor</h2>
          <p className="text-gray-400">Find Eman products near you.</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row h-[800px]">
        {/* Sidebar Controls */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-8 border-r border-gray-200 overflow-y-auto custom-scrollbar">
          {/* Search & Filter */}
          <div className="space-y-6 mb-8 sticky top-0 bg-gray-50 z-10 pb-4 border-b border-gray-200">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Search</label>
              <input 
                type="text" 
                placeholder="City, Name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-white focus:border-eman-gold outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Region</label>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border ${
                      selectedRegion === region 
                        ? 'bg-eman-black text-white border-eman-black' 
                        : 'bg-white text-gray-600 border-gray-300 hover:border-eman-gold'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* List */}
          <div className="space-y-4">
            {filteredDistributors.map((distributor) => (
              <div 
                key={distributor.id}
                onClick={() => setSelectedDistributor(distributor)}
                className={`p-6 border cursor-pointer transition-all duration-300 group ${
                  selectedDistributor?.id === distributor.id 
                    ? 'border-eman-gold bg-white shadow-lg scale-[1.02]' 
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg text-eman-black">{distributor.name}</h3>
                  <span className="text-xs font-bold bg-gray-100 px-2 py-1 text-gray-500 uppercase">{distributor.type}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{distributor.address}</p>
                <p className="text-sm text-eman-black font-medium mb-4">{distributor.city}, {distributor.region}</p>
                <div className="flex items-center gap-2 text-eman-gold text-sm font-bold uppercase tracking-wider group-hover:underline">
                  <span>📍 View on Map</span>
                </div>
              </div>
            ))}
            {filteredDistributors.length === 0 && (
              <p className="text-center text-gray-400 py-8">No distributors found matching your criteria.</p>
            )}
          </div>
        </div>

        {/* Interactive Map Representation */}
        <div className="w-full lg:w-2/3 bg-slate-200 relative overflow-hidden group">
          {/* Simulated Map Background (Usually Google Maps API, simulated here for visual simplicity) */}
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
             style={{ backgroundImage: 'url("https://picsum.photos/id/10/1600/900")' }} 
          ></div>
          
          {/* Pins Overlay */}
          <div className="absolute inset-0 p-12 flex items-center justify-center">
             {selectedDistributor ? (
                <div className="bg-white p-8 shadow-2xl max-w-md animate-fade-in-up">
                   <h3 className="font-serif text-3xl mb-2">{selectedDistributor.name}</h3>
                   <hr className="border-eman-gold w-12 mb-4"/>
                   <p className="text-gray-600 mb-4">{selectedDistributor.address}, {selectedDistributor.city}</p>
                   
                   <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📞</span>
                        <a href={`tel:${selectedDistributor.phone}`} className="text-eman-black hover:text-eman-gold transition-colors">
                          {selectedDistributor.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏲</span>
                        <span className="text-gray-600">Mon - Sun: 08:00 - 22:00</span>
                      </div>
                   </div>

                   <button className="mt-8 w-full bg-eman-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-eman-gold transition-colors">
                      Get Directions
                   </button>
                </div>
             ) : (
               <div className="bg-white/80 backdrop-blur-md p-8 text-center">
                 <span className="text-4xl block mb-4">🌍</span>
                 <h3 className="font-serif text-2xl text-eman-black">Select a location</h3>
                 <p className="text-gray-600">Choose a distributor from the list to view details.</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorLocator;