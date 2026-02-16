import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PremiumCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  backgroundImage?: string;
}

const PremiumCard: React.FC<PremiumCardProps> = ({ 
  title, 
  description, 
  icon, 
  actionLabel, 
  onAction,
  className = "",
  backgroundImage
}) => {
  return (
    <div 
      className={`group relative overflow-hidden bg-white border border-stone-200 p-8 rounded-luxury hover:shadow-xl transition-all duration-500 ease-out ${className}`}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          {icon && <div className="text-meridian-gold">{icon}</div>}
        </div>
        
        <h3 className="font-serif text-2xl text-meridian-navy mb-3 group-hover:text-meridian-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-stone-600 font-light leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {actionLabel && (
          <button 
            onClick={onAction}
            className="flex items-center text-xs uppercase tracking-widest text-meridian-navy font-bold group-hover:translate-x-2 transition-transform duration-300"
          >
            {actionLabel} <ArrowRight size={14} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PremiumCard;