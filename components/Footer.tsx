import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eman-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl mb-6">EMAN <span className="text-eman-gold text-sm tracking-[0.4em] align-middle ml-2">BAKERIES</span></h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Elevating the standard of industrial baking since 1978. 
            We blend heritage with innovation to deliver products of unmatched quality.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-eman-gold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>info@emanbakeries.com</li>
            <li>+971 4 800 EMAN</li>
            <li>Dubai Investment Park 2<br/>Dubai, UAE</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-eman-gold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Supply Chain Transparency</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Eman Bakeries. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>Facebook</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;