import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="text-center mb-20">
        <h1 className="font-serif text-5xl md:text-6xl text-meridian-dark mb-6">The Meridian Manifesto</h1>
        <div className="h-1 w-24 bg-meridian-gold mx-auto"></div>
      </header>

      <div className="space-y-24">
        <Section 
          number="I" 
          title="Intellectual Excellence" 
          content="We believe that the pursuit of knowledge is a noble and unending endeavor. Meridian Society members are defined not merely by their grades, but by their insatiable curiosity and their rigorous commitment to understanding the complexities of our world." 
        />
        <Section 
          number="II" 
          title="Global Perspective" 
          content="True leadership requires a vision that transcends borders. We foster a community that is diverse in geography but unified in ambition, ensuring our members possess the cultural fluency required to navigate and influence a globalized society." 
        />
        <Section 
          number="III" 
          title="Opportunity & Access" 
          content="Talent is universal; opportunity is not. Meridian Society exists to bridge this gap, providing our members with the networks, resources, and mentorship necessary to translate their potential into tangible impact." 
        />
         <Section 
          number="IV" 
          title="Civil Discourse" 
          content="In an era of polarization, we champion the art of civil disagreement. We cultivate a safe, private environment where ideas can be challenged robustly but respectfully, sharpening the intellect through dialectic rather than dogma." 
        />
        <Section 
          number="V" 
          title="Leadership & Responsibility" 
          content="Privilege implies responsibility. Our members are groomed not just for personal success, but for public service and ethical leadership. We aspire to leave the world more enlightened, more just, and more prosperous than we found it." 
        />
      </div>

      <div className="mt-24 text-center">
         <p className="font-serif italic text-2xl text-stone-500">"Where ambition meets opportunity."</p>
      </div>
    </div>
  );
};

const Section: React.FC<{number: string, title: string, content: string}> = ({ number, title, content }) => (
  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 animate-fade-in-up">
    <div className="flex-shrink-0">
      <span className="font-serif text-4xl text-meridian-gold opacity-50 block w-16 text-center border-b border-stone-200 pb-2">{number}</span>
    </div>
    <div>
      <h3 className="font-serif text-3xl text-meridian-dark mb-4">{title}</h3>
      <p className="text-stone-600 leading-relaxed font-light text-lg text-justify">{content}</p>
    </div>
  </div>
);

export default Manifesto;
