import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { MapPin, Globe, Users } from 'lucide-react';
import { CATEGORIES } from '../constants';

const DISTRIBUTORS = [
  { id: 1, name: "Al Raya", arabic: "الراية", color: "from-green-900" },
  { id: 2, name: "HyperPanda", arabic: "هايبر بنده", color: "from-red-900" },
  { id: 3, name: "Danube", arabic: "الدانوب", color: "from-blue-900" },
  { id: 4, name: "Arabian Food Supplies", arabic: "التموين العربي", color: "from-emerald-900" },
  { id: 5, name: "Noori", arabic: "نوري", color: "from-orange-900" },
];

export const DistributorsSection: React.FC = () => {
  // Grab a few product images for the floating effect
  const displayProducts = CATEGORIES[0].products.slice(0, 3);

  return (
    <section id="distributors" className="relative py-32 bg-brand-surface overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      
      {/* Gold Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
             <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <div className="flex items-center space-x-4 mb-6">
                  <Globe className="w-5 h-5 text-brand-gold" />
                  <span className="text-brand-gold font-sans uppercase tracking-[0.25em] text-xs font-bold">
                    Kingdom-Wide Reach
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Our <span className="text-brand-gold">Distributors</span>
                </h2>
                
                <div className="w-20 h-[1px] bg-white/20 mb-8" />
             </motion.div>

             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-brand-gold/30 pl-6"
             >
               The products of Eman Bakeries are entrusted to the hands of customers across the Kingdom and abroad through our network of approved distributors. 
               <br /><br />
               Responsible for sales in all regions, our partners ensure that the freshness of our ovens reaches your table. As competition rises, we continue to evolve our technologies to support this vast supply chain.
             </motion.p>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
             >
               <Button variant="primary" className="mt-4">
                 <span className="flex items-center">
                   <Users className="w-4 h-4 mr-2" /> Become a Distributor
                 </span>
               </Button>
             </motion.div>
          </div>

          {/* Right Column: Visual Map Composition */}
          <div className="relative h-[600px] flex items-center justify-center">
             
             {/* Abstract Map Representation */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative w-full h-full max-h-[500px] aspect-square rounded-full border border-white/5 bg-brand-dark/50 backdrop-blur-sm flex items-center justify-center overflow-hidden"
             >
                {/* Simulated Map Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saudi_Arabia_location_map.svg/1070px-Saudi_Arabia_location_map.svg.png')] bg-contain bg-no-repeat bg-center mix-blend-overlay filter grayscale contrast-150" />
                
                {/* Animated Pulse Points (Simulating Major Cities) */}
                {[
                  { top: '40%', left: '30%' }, // Jeddah approx
                  { top: '35%', left: '50%' }, // Riyadh approx
                  { top: '25%', left: '70%' }, // Dammam approx
                  { top: '60%', left: '40%' }, // South approx
                  { top: '20%', left: '25%' }, // North approx
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(198,168,124,0.5)] z-20"
                    style={{ top: pos.top, left: pos.left }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  >
                    <div className="absolute inset-0 animate-ping bg-brand-gold rounded-full opacity-75" />
                  </motion.div>
                ))}

                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent w-full h-full animate-[spin_4s_linear_infinite] opacity-30" />
             </motion.div>

             {/* Floating Product Cards */}
             {displayProducts.map((product, idx) => (
               <motion.div
                  key={product.id}
                  className={`absolute z-30 w-32 md:w-40 
                    ${idx === 0 ? 'top-[10%] left-[10%]' : 
                      idx === 1 ? 'bottom-[15%] right-[10%]' : 'top-[40%] -right-[5%]'}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (idx * 0.2), duration: 0.8 }}
               >
                 <motion.div
                    className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl w-full"
                    animate={{ y: [0, -10, 0] }} // Float animation
                    transition={{ 
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx }
                    }}
                 >
                   <div className="aspect-square w-full overflow-hidden mb-2 bg-brand-dark/20">
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="h-1 w-8 bg-brand-gold mb-1" />
                   <p className="text-[9px] text-gray-300 uppercase tracking-widest truncate">{product.name}</p>
                 </motion.div>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Distributor Logos Grid */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-24"
        >
          <h3 className="text-center text-sm font-sans uppercase tracking-[0.3em] text-gray-500 mb-12">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {DISTRIBUTORS.map((dist) => (
              <div 
                key={dist.id}
                className="group relative h-32 bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all duration-500 flex flex-col items-center justify-center p-4 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dist.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center transform group-hover:-translate-y-1 transition-transform duration-500">
                  <span className="block font-serif text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {dist.name}
                  </span>
                  <span className="block font-sans text-brand-gold text-sm mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {dist.arabic}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};