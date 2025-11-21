import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { StatData } from '../types';

const DATA: StatData[] = [
  { name: 'Purity', value: 99 },
  { name: 'Taste', value: 95 },
  { name: 'Fresh', value: 98 },
  { name: 'Sustain', value: 92 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-eman-gold shadow-xl">
        <p className="font-serif text-eman-black">{label}</p>
        <p className="text-eman-gold font-bold">{payload[0].value}% Score</p>
      </div>
    );
  }
  return null;
};

const QualityStats: React.FC = () => {
  return (
    <section id="quality" className="py-24 bg-eman-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl">Uncompromising <br/><span className="text-eman-gold">Standards.</span></h2>
          <p className="text-gray-300 font-light text-lg leading-relaxed">
            At Eman Bakeries, perfection is not an aspiration; it is our baseline. 
            We utilize state-of-the-art monitoring systems to ensure every loaf, pastry, and sweet meets rigorous global standards.
          </p>
          <ul className="space-y-4">
            {['ISO 22000 Certified', 'Non-GMO Ingredients', 'Sustainable Packaging'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm tracking-widest uppercase">
                <span className="text-eman-gold">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F4A3E" vertical={false} />
              <XAxis dataKey="name" stroke="#9CA3AF" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" fill="#C5A55D" barSize={40} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-widest">Annual Quality Audit Scores</p>
        </div>
      </div>
    </section>
  );
};

export default QualityStats;