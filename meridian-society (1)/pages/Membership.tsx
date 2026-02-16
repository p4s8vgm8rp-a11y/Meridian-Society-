import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Crown, Star, Check, Sparkles, Plane } from 'lucide-react';

const Membership: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="bg-meridian-navy text-meridian-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/3 -translate-y-1/3">
           <Crown size={600} strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-meridian-gold text-xs font-bold uppercase tracking-[0.3em] mb-6 block">The Society</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-8">Membership Structure</h1>
          <p className="font-serif text-2xl text-stone-300 italic max-w-3xl mx-auto leading-relaxed">
            "Meridian Society membership is selective and designed for individuals committed to intellectual excellence, meaningful connections, and personal advancement."
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-stone-600 font-light text-lg leading-relaxed">
          Meridian Society is a selective intellectual network connecting ambitious students, professionals, and future leaders. 
          Membership is structured to support members at every stage of their academic and professional journey, fostering a community 
          that is diverse in expertise but unified in ambition.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tier 1: Student */}
          <div className="bg-white border border-stone-200 rounded-luxury p-8 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <GraduationCap className="text-meridian-navy mb-4" size={32} strokeWidth={1} />
              <h3 className="font-serif text-2xl text-meridian-navy">Student</h3>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Ages 16–22</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-stone-100">
              <div className="flex items-baseline">
                <span className="text-3xl font-serif text-meridian-gold">£60</span>
                <span className="text-stone-400 text-sm ml-2">/ year</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">£45 Joining Fee</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="Member portal access" />
              <Feature text="Scholarship & internship curation" />
              <Feature text="Academic pathway guidance" />
              <Feature text="Intellectual forums" />
              <Feature text="Select in-person events" />
            </ul>

            <button onClick={() => navigate('/apply')} className="w-full py-3 border border-meridian-navy text-meridian-navy text-xs uppercase tracking-widest font-bold hover:bg-meridian-navy hover:text-white transition-colors rounded-lg">
              Apply Now
            </button>
          </div>

          {/* Tier 2: Associate */}
          <div className="bg-white border border-stone-200 rounded-luxury p-8 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="mb-6">
              <Briefcase className="text-meridian-navy mb-4" size={32} strokeWidth={1} />
              <h3 className="font-serif text-2xl text-meridian-navy">Associate</h3>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Ages 22–30</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-stone-100">
              <div className="flex items-baseline">
                <span className="text-3xl font-serif text-meridian-gold">£120</span>
                <span className="text-stone-400 text-sm ml-2">/ year</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">£95 Joining Fee</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="All Student benefits" />
              <Feature text="Career introductions" />
              <Feature text="Networking mixers" />
              <Feature text="Mentorship opportunities" />
              <Feature text="Priority event booking" />
            </ul>

            <button onClick={() => navigate('/apply')} className="w-full py-3 border border-meridian-navy text-meridian-navy text-xs uppercase tracking-widest font-bold hover:bg-meridian-navy hover:text-white transition-colors rounded-lg">
              Apply Now
            </button>
          </div>

          {/* Tier 3: Professional */}
          <div className="bg-meridian-navy text-meridian-cream border border-meridian-navy rounded-luxury p-8 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
            <div className="mb-6">
              <Star className="text-meridian-gold mb-4" size={32} strokeWidth={1} />
              <h3 className="font-serif text-2xl text-white">Professional</h3>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Leaders & Founders</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-baseline">
                <span className="text-3xl font-serif text-meridian-gold">£320</span>
                <span className="text-stone-400 text-sm ml-2">/ year</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">£250 Joining Fee</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="All Associate benefits" light />
              <Feature text="Private networking salons" light />
              <Feature text="Executive dinners" light />
              <Feature text="Strategy roundtables" light />
              <Feature text="Concierge assistance" light />
            </ul>

            <button onClick={() => navigate('/apply')} className="w-full py-3 bg-meridian-gold text-meridian-navy text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors rounded-lg">
              Apply Now
            </button>
          </div>

          {/* Tier 4: Founding */}
          <div className="bg-white border-2 border-meridian-gold/30 rounded-luxury p-8 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
            <div className="absolute top-4 right-4 text-meridian-gold opacity-20">
               <Crown size={64} />
            </div>
            <div className="mb-6">
              <Crown className="text-meridian-gold mb-4" size={32} strokeWidth={1} />
              <h3 className="font-serif text-2xl text-meridian-navy">Founding Member</h3>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Strictly Limited</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-stone-100">
              <div className="flex items-baseline">
                <span className="text-3xl font-serif text-meridian-gold">£450</span>
                <span className="text-stone-400 text-sm ml-2">/ year</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">£1,000 Joining Fee</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="All Professional benefits" />
              <Feature text="Lifetime recognition" />
              <Feature text="VIP event seating" />
              <Feature text="Direct network intros" />
              <Feature text="Annual Founders Dinner" />
            </ul>

            <button onClick={() => navigate('/apply')} className="w-full py-3 border border-meridian-gold text-meridian-gold text-xs uppercase tracking-widest font-bold hover:bg-meridian-gold hover:text-white transition-colors rounded-lg">
              Inquire
            </button>
          </div>

        </div>
      </div>

      {/* Age Based Benefits & Addons */}
      <div className="bg-white py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Age Benefits */}
              <div>
                 <h2 className="font-serif text-3xl text-meridian-navy mb-8">Age-Based Accessibility</h2>
                 <div className="space-y-8">
                    <div className="flex">
                       <div className="w-24 flex-shrink-0 text-meridian-gold font-bold text-sm uppercase tracking-wider pt-1">Under 18</div>
                       <div>
                          <p className="text-meridian-navy font-serif text-lg">Academic Focus</p>
                          <p className="text-stone-600 font-light text-sm">Reduced student joining fee, university pathway guidance, and supervised event access.</p>
                       </div>
                    </div>
                    <div className="flex">
                       <div className="w-24 flex-shrink-0 text-meridian-gold font-bold text-sm uppercase tracking-wider pt-1">Under 25</div>
                       <div>
                          <p className="text-meridian-navy font-serif text-lg">Early Career</p>
                          <p className="text-stone-600 font-light text-sm">Reduced event pricing and priority access to internships & placements.</p>
                       </div>
                    </div>
                    <div className="flex">
                       <div className="w-24 flex-shrink-0 text-meridian-gold font-bold text-sm uppercase tracking-wider pt-1">Under 30</div>
                       <div>
                          <p className="text-meridian-navy font-serif text-lg">Development</p>
                          <p className="text-stone-600 font-light text-sm">Career development priority and mentorship matching focus.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Optional Add-ons */}
              <div>
                 <h2 className="font-serif text-3xl text-meridian-navy mb-8">Optional Enhancements</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-stone-200 p-6 rounded-luxury hover:border-meridian-gold transition-colors">
                       <Sparkles className="text-meridian-navy mb-3" size={24} strokeWidth={1} />
                       <h3 className="font-serif text-xl text-meridian-navy">Concierge Access</h3>
                       <p className="text-meridian-gold text-xs font-bold uppercase tracking-wider mb-3">£20 / month</p>
                       <p className="text-stone-600 font-light text-sm text-sm">Travel, reservations, lifestyle recommendations, and productivity support.</p>
                    </div>
                    <div className="border border-stone-200 p-6 rounded-luxury hover:border-meridian-gold transition-colors">
                       <Plane className="text-meridian-navy mb-3" size={24} strokeWidth={1} />
                       <h3 className="font-serif text-xl text-meridian-navy">Events Pass</h3>
                       <p className="text-meridian-gold text-xs font-bold uppercase tracking-wider mb-3">£75 / year</p>
                       <p className="text-stone-600 font-light text-sm text-sm">Preferential pricing, early booking windows, and exclusive receptions.</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>

    </div>
  );
};

const Feature: React.FC<{text: string, light?: boolean}> = ({ text, light }) => (
  <li className="flex items-start">
    <Check size={14} className={`mt-1 mr-3 flex-shrink-0 ${light ? 'text-meridian-gold' : 'text-meridian-navy'}`} />
    <span className={`text-sm font-light ${light ? 'text-stone-300' : 'text-stone-600'}`}>{text}</span>
  </li>
);

export default Membership;
