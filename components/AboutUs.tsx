
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eman-cream/50 -skew-x-12 translate-x-20 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">
        
        {/* 1. Welcome Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2 pt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-eman-gold"></div>
              <span className="text-eman-gold font-bold tracking-[0.2em] text-xs uppercase">Who We Are</span>
            </div>
            <h2 className="font-serif text-5xl text-eman-black mb-8 leading-tight">
              Welcome to <br/><span className="italic text-eman-gold">Eman Bakeries</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Since our opening, Eman Bakeries focuses on creating the highest standards in producing breads and pastries and as a result, won the hearts of faithful customers in Jeddah. Eman Bakeries is a leader in the baking industry, known for its leading brand, innovative products, freshness and quality.
              </p>
              <p>
                Due to the tremendous success in Jeddah, we are planning a vast expansion across the Kingdom.
                Eman Bakeries has constructive ideas and ambitious plans.
                We are committed to meeting high demand with only the highest quality, and because of our innovative baking methods, now anyone can experience our fresh-baked bread. We offer a variety of selling options for restaurants, bakeries and super markets.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="relative h-[600px] w-full overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-eman-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img 
                 src="https://picsum.photos/id/431/800/1000" 
                 alt="Eman Bakeries Craftsmanship" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs shadow-lg z-20">
                 <p className="font-serif text-2xl text-eman-black">"Innovation meeting Tradition."</p>
               </div>
             </div>
          </div>
        </div>

        {/* 2. Quality & Hygiene (Dark Section) */}
        <div className="bg-eman-black text-white p-8 md:p-16 relative overflow-hidden rounded-sm shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10">
             <span className="text-9xl">🛡</span>
           </div>
           <div className="relative z-10 max-w-3xl">
             <h3 className="font-serif text-3xl md:text-4xl mb-8">Quality & <span className="text-eman-gold">Hygiene</span></h3>
             <div className="grid md:grid-cols-2 gap-12">
                <p className="text-gray-300 leading-relaxed">
                  Eman Bakeries took the quality, freshness of ingredients, hygiene, cleanliness & manufacturing technology to a new level in order to reach a leadership position in bakery sector. Within all production phases that start from producing the paste, water cooling and purifying system to having the latest packed product Eman Bakeries ensures on having the highest production quality that meet international standards.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  During all the above-mentioned phases touching the product with hands is not allowed even for bakers who is responsible for making the products, except after full packing through an automatic process.
                  We promise our clients with new products to be introduced to the markets very soon. Moreover, we have other promise; Our products will arrive to all regions.
                </p>
             </div>
           </div>
        </div>

        {/* 3. Goals & Experience (Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           {/* Goals */}
           <div className="bg-eman-cream p-10 border-t-4 border-eman-gold hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-serif text-3xl text-eman-black mb-6">Our Goals</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Due to the increasing reputation bounded together with ideal products, the goal of globalization is the next step for Eman Bakeries. The management is focusing on making their bakeries available to everyone. We are currently planning to expand our operation & be present in every Arab country in the near future.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                Operations in Europe, Egypt and Jordan has become very near to realize.
              </p>
           </div>

           {/* Experience */}
           <div className="space-y-6 flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-eman-black">20 Years of <span className="text-eman-gold">Experience</span></h3>
              <div className="w-16 h-1 bg-eman-black mb-2"></div>
              <p className="text-gray-600 leading-relaxed">
                Eman Bakeries’ management was exceptionally keen to be successful in their beginning steps of operations in the Kingdom of Saudi Arabia. As a result, the bakeries succeeded in introducing the first automated line of production in their factory. This was clear evidence that Eman Bakeries implemented a successful strategy for the future of the factory.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By adopting this strategy, the factory drastically increased their productivity, and had great accomplishments that others in the same field could not achieve. Finally, the quality of products, credibility, and tenacity gained the confidence of many agents in the Kingdom and abroad.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
