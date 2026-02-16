import React from 'react';
import { Opportunity } from '../types';
import { Bookmark, ExternalLink } from 'lucide-react';

const MOCK_OPPS: Opportunity[] = [
  {
    id: '1',
    title: 'Rhodes Scholarship 2027',
    organization: 'The Rhodes Trust',
    type: 'Scholarship',
    description: 'The Rhodes Scholarship is the oldest (first awarded in 1902) and perhaps most prestigious international scholarship programme, enabling outstanding young people from around the world to study at the University of Oxford.',
    deadline: 'October 2026'
  },
  {
    id: '2',
    title: 'Global Economic Symposium',
    organization: 'World Economic Forum',
    type: 'Conference',
    description: 'An exclusive gathering of future economic leaders in Davos. Meridian Society has been allocated 3 delegate passes.',
    deadline: 'June 2026'
  },
  {
    id: '3',
    title: 'Strategy Internship',
    organization: 'McKinsey & Company (London)',
    type: 'Internship',
    description: 'Fast-track application process for Meridian members with a focus on quantitative economics.',
    deadline: 'Rolling'
  }
];

const Opportunities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <header className="mb-12">
        <h1 className="font-serif text-4xl text-meridian-navy mb-2">Featured Opportunities</h1>
        <p className="text-stone-500 font-light">Curated scholarships, fellowships, and career accelerators.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_OPPS.map((opp) => (
          <div key={opp.id} className="bg-white p-8 border border-stone-200 rounded-luxury group hover:border-meridian-gold transition-colors duration-300 flex flex-col h-full hover:shadow-lg">
            <div className="flex justify-between items-start mb-6">
               <span className="bg-stone-50 text-stone-600 border border-stone-200 px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-bold">
                {opp.type}
              </span>
              <button className="text-stone-400 hover:text-meridian-gold transition-colors">
                <Bookmark size={20} />
              </button>
            </div>

            <h3 className="font-serif text-xl text-meridian-navy mb-1">{opp.title}</h3>
            <p className="text-stone-400 text-xs uppercase tracking-wider mb-4">{opp.organization}</p>
            
            <p className="text-stone-600 font-light text-sm mb-6 flex-grow leading-relaxed">
              {opp.description}
            </p>

            <div className="pt-6 border-t border-stone-100 flex justify-between items-center mt-auto">
               <span className="text-xs text-meridian-gold font-bold">Deadline: {opp.deadline}</span>
               <button className="flex items-center text-xs uppercase tracking-widest text-meridian-navy hover:text-meridian-gold transition-colors font-bold">
                  Details <ExternalLink size={12} className="ml-1" />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;