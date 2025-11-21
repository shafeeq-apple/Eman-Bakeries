import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Product, ProductCategory } from '../types';

const ITEMS_PER_PAGE = 10;

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Calculate totals
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Get current slice of products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories = ['All', ...Object.values(ProductCategory)];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smooth scroll to top of grid when page changes
    const gridElement = document.getElementById('product-grid-top');
    if (gridElement) {
      const y = gridElement.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <section id="collection" className="py-24 bg-eman-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-eman-black mb-4">Our Collection</h2>
          <p className="text-eman-black/70 max-w-2xl mx-auto">
            Explore our curated selection of artisanal baked goods, crafted for the discerning palate.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === cat 
                  ? 'border-eman-black text-eman-black font-bold' 
                  : 'border-transparent text-gray-400 hover:text-eman-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll Anchor */}
        <div id="product-grid-top"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[800px] content-start">
          {currentProducts.map((product: Product) => (
            <div 
              key={product.id}
              className="group bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="relative h-72 overflow-hidden shrink-0">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-eman-black/0 group-hover:bg-eman-black/40 transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-wider uppercase text-eman-black">
                  {product.category}
                </div>
              </div>
              <div className="p-8 relative flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-eman-black mb-2 group-hover:text-eman-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                   <span className="text-xs text-gray-400 uppercase tracking-wider">
                     {product.calories} kcal
                   </span>
                   <button className="text-sm font-bold uppercase tracking-widest text-eman-black hover:text-eman-gold transition-colors">
                     View Details →
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="mt-20 flex flex-col items-center gap-8 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-16">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-eman-black hover:text-eman-gold"
                    >
                        <span className="text-xl transition-transform group-hover:-translate-x-1">←</span> Previous
                    </button>

                    <div className="flex items-center gap-3 font-serif text-2xl">
                        <span className="text-eman-black font-semibold">{currentPage}</span>
                        <span className="text-gray-300 font-light">/</span>
                        <span className="text-gray-400 font-light">{totalPages}</span>
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-eman-black hover:text-eman-gold"
                    >
                        Next <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
                
                {/* Progress Bar */}
                <div className="h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-eman-gold transition-all duration-500 ease-out"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                </div>
                
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Showing {currentProducts.length} of {filteredProducts.length} items
                </p>
            </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;