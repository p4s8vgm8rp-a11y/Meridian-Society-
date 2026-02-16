import React from 'react';
import { Mic, Radio } from 'lucide-react';

const Concierge: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 h-[calc(100vh-140px)] flex flex-col justify-center items-center animate-fade-in-up relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-meridian-navy rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-meridian-navy rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-meridian-navy rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl px-6">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-meridian-navy/5 text-meridian-navy mb-8">
           <Radio className="animate-pulse" size={32} strokeWidth={1.5} />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-6">Meridian Voice Concierge</h1>
        
        <p className="text-stone-600 font-light text-lg leading-relaxed mb-10">
          Our advanced AI concierge is online and ready to assist you. 
          Please use the interface in the bottom right corner to begin a secure voice session.
        </p>

        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-meridian-gold font-bold">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
           <span>System Online</span>
        </div>
      </div>

      {/* Embed the ElevenLabs Widget */}
      {/* The widget typically renders as a floating element in the bottom right */}
      {/* @ts-ignore */}
      <elevenlabs-convai agent-id="agent_1601khkaqdg6fh49m9fww0ny1b5s"></elevenlabs-convai>
      
    </div>
  );
};

export default Concierge;