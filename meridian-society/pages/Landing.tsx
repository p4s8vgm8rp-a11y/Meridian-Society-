import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Users, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleExploreOpportunities = () => {
    if (isAuthenticated) {
      navigate('/opportunities');
    } else {
      navigate('/login', { 
        state: { 
          from: { pathname: '/opportunities' },
          message: "Please log in to access member opportunities." 
        } 
      });
    }
  };

  return (
    <div className="animate-fade-in-up">
      {/* Cinematic Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-meridian-dark overflow-hidden">
        {/* Background Image - Cinematic & Atmospheric */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-60 bg-cover bg-center"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-meridian-navy/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-12">
             <span className="inline-block border border-meridian-gold/60 text-meridian-gold px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] backdrop-blur-sm bg-meridian-navy/30">
               Admissions Open 2026
             </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-meridian-cream mb-10 leading-[1.1]">
            The Private Network for <br/> 
            <span className="italic font-serif text-white opacity-90">Ambitious Minds</span>
          </h1>

          {/* Subheading */}
          <p className="text-stone-200 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed opacity-90 antialiased">
            Meridian Society connects exceptional students and future leaders through curated opportunities, elite networking, and intellectual discourse.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => navigate('/apply')}
              className="bg-meridian-navy text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Apply for Membership
            </button>
            <button 
              onClick={handleExploreOpportunities}
              className="bg-transparent border border-white text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Designed for the Intellectual Elite */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             {/* Left Text */}
             <div className="order-2 md:order-1">
                <h2 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-8 leading-tight">
                  Designed for the <br/>
                  Intellectual Elite
                </h2>
                <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
                  <p>
                    Meridian Society is a selective intellectual network that connects ambitious students globally, provides access to exclusive opportunities, fosters high-level academic & professional dialogue, and offers strategic guidance & community support.
                  </p>
                </div>
                <div className="mt-12">
                  <button 
                    onClick={() => navigate('/manifesto')} 
                    className="group flex items-center px-8 py-3 rounded-luxury border border-meridian-navy/20 text-meridian-navy text-xs font-bold uppercase tracking-widest hover:bg-meridian-navy/5 hover:border-meridian-navy transition-all duration-300"
                  >
                    Read our Manifesto <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
             </div>

             {/* Right Image */}
             <div className="order-1 md:order-2 relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-luxury shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                      alt="Graduation" 
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[1.5s]" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/80 to-transparent flex items-end p-10">
                      <p className="font-serif italic text-white text-2xl">"Where ambition meets opportunity."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Section 3: Membership Benefits (Curated for Excellence) */}
      <div className="py-32 bg-meridian-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-20">
              <span className="text-meridian-gold text-xs font-bold uppercase tracking-widest block mb-6">Membership Benefits</span>
              <h2 className="font-serif text-4xl md:text-5xl text-meridian-navy">Curated for Excellence</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-10 border border-stone-100 rounded-luxury shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="text-meridian-navy mb-6">
                    <BookOpen strokeWidth={1} size={32} />
                 </div>
                 <h3 className="font-serif text-xl text-meridian-navy mb-4">Academic Excellence</h3>
                 <p className="text-stone-500 font-light text-sm leading-relaxed">
                    Scholarships, research placements, and summer schools.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-10 border border-stone-100 rounded-luxury shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="text-meridian-navy mb-6">
                    <Globe strokeWidth={1} size={32} />
                 </div>
                 <h3 className="font-serif text-xl text-meridian-navy mb-4">Global Networking</h3>
                 <p className="text-stone-500 font-light text-sm leading-relaxed">
                    Connect with high-achieving peers from top universities.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-10 border border-stone-100 rounded-luxury shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="text-meridian-navy mb-6">
                    <Users strokeWidth={1} size={32} />
                 </div>
                 <h3 className="font-serif text-xl text-meridian-navy mb-4">Elite Mentorship</h3>
                 <p className="text-stone-500 font-light text-sm leading-relaxed">
                    Guidance from industry leaders and academic pioneers.
                 </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-10 border border-stone-100 rounded-luxury shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="text-meridian-navy mb-6">
                    <MessageSquare strokeWidth={1} size={32} />
                 </div>
                 <h3 className="font-serif text-xl text-meridian-navy mb-4">Intellectual Discourse</h3>
                 <p className="text-stone-500 font-light text-sm leading-relaxed">
                    Private forums, debates, and exclusive publications.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;