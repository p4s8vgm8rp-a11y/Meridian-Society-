import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConciergeBell, Users, Globe, BookOpen } from 'lucide-react';
import PremiumCard from '../components/PremiumCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  // In a real app, this would come from a context or auth hook
  const userName = "Alexander"; 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <header className="mb-16 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-4">
          Welcome back, {userName}
        </h1>
        <p className="text-stone-500 font-light text-lg tracking-wide">
          Your private gateway to opportunities, connections, and intellectual exchange.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Concierge Card */}
        <PremiumCard
          title="Concierge"
          description="Travel, access, academic support, and curated lifestyle requests. Your personal interface for excellence."
          icon={<ConciergeBell size={32} strokeWidth={1} />}
          actionLabel="Access Concierge"
          onAction={() => navigate('/concierge')}
          className="md:col-span-1"
        />

        {/* The Society Card */}
        <PremiumCard
          title="The Society"
          description="Exclusive events, member directory & announcements. Engage with the global network."
          icon={<Users size={32} strokeWidth={1} />}
          actionLabel="Enter Society"
          onAction={() => navigate('/society')}
          className="md:col-span-1"
        />

        {/* Featured Opportunities Card */}
        <PremiumCard
          title="Featured Opportunities"
          description="Scholarships, internships, conferences, and fellowships curated for your academic profile."
          icon={<Globe size={32} strokeWidth={1} />}
          actionLabel="Explore"
          onAction={() => navigate('/opportunities')}
          className="md:col-span-1"
        />
      </div>

      {/* Featured Section (Optional teaser) */}
      <div className="mt-16 border-t border-stone-200 pt-12">
        <h2 className="font-serif text-2xl text-meridian-navy mb-8">Latest Curations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-stone-100 rounded-luxury shadow-sm">
            <span className="text-xs uppercase tracking-widest text-meridian-gold mb-3 block font-bold">Fellowship</span>
            <h3 className="font-serif text-xl mb-2 text-meridian-navy">The Rhodes Trust - 2026 Application Cycle</h3>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">Early access preparation materials are now available for Meridian members.</p>
            <button className="text-xs uppercase font-bold tracking-widest text-meridian-navy border-b border-meridian-navy hover:text-meridian-gold hover:border-meridian-gold transition-colors pb-0.5">View Details</button>
          </div>
          <div className="bg-white p-8 border border-stone-100 rounded-luxury shadow-sm">
             <span className="text-xs uppercase tracking-widest text-meridian-gold mb-3 block font-bold">Private Event</span>
            <h3 className="font-serif text-xl mb-2 text-meridian-navy">Symposium on Artificial Intelligence Ethics</h3>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">Hosted at The Royal Institution. Limited seating reserved for society members.</p>
             <button onClick={() => navigate('/society')} className="text-xs uppercase font-bold tracking-widest text-meridian-navy border-b border-meridian-navy hover:text-meridian-gold hover:border-meridian-gold transition-colors pb-0.5">RSVP Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;