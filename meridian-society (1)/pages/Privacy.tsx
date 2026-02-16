import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in-up">
      <header className="mb-16 border-b border-stone-200 pb-8">
        <span className="text-meridian-gold text-xs font-bold uppercase tracking-widest mb-3 block">Legal</span>
        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-4">Privacy Policy</h1>
        <p className="text-stone-500 font-light text-lg">Last Updated: January 2026</p>
      </header>
      
      <div className="space-y-12 text-stone-600 font-light leading-relaxed text-lg">
        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">Introduction</h2>
          <p>
            The Meridian Society respects member privacy and is committed to protecting your personal information. 
            This policy outlines how we collect, use, and safeguard data in accordance with our commitment to 
            discretion and excellence. We operate with strict adherence to data protection standards to ensure 
            your trust is maintained.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">Information Collected</h2>
          <p className="mb-4">We collect specific information to facilitate your membership and improve our services:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-meridian-gold">
            <li><strong>Personal Identity:</strong> Name, institution, and contact details provided during application.</li>
            <li><strong>Membership Data:</strong> Application information, including academic interests and achievements.</li>
            <li><strong>Transactional Data:</strong> Payment and billing details (processed securely via third-party providers).</li>
            <li><strong>Engagement Data:</strong> Event registrations, attendance history, and opportunity interactions.</li>
            <li><strong>Usage Data:</strong> Website analytics to improve member experience and digital performance.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">How Information Is Used</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-meridian-gold">
            <li><strong>Administration:</strong> Processing memberships, renewals, and account management.</li>
            <li><strong>Communication:</strong> Sending event invitations, society updates, and newsletters.</li>
            <li><strong>Curation:</strong> Tailoring opportunity notifications to your academic profile.</li>
            <li><strong>Improvement:</strong> Enhancing our services, events, and digital platform based on usage patterns.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">Data Protection</h2>
          <p>
            Your information is stored securely using industry-standard encryption and security protocols. 
            <strong>We never sell your personal data to third parties.</strong> Data is only shared with trusted partners 
            when strictly necessary for event logistics (e.g., venue security lists) or legal compliance.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">Cookies & Analytics</h2>
          <p>
            Our website uses cookies to distinguish you from other users, helping us provide a seamless 
            browsing experience. We use basic analytics to understand traffic patterns and optimize our 
            platform's performance. You may adjust your browser settings to refuse cookies, though this 
            may limit access to certain member features.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-meridian-navy mb-4">Member Rights</h2>
          <p className="mb-4">As a member, you retain rights over your personal data. You may request:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-meridian-gold">
            <li>Access to the personal data we hold about you.</li>
            <li>Corrections to any inaccurate or incomplete information.</li>
            <li>Deletion of your personal data (subject to administrative retention requirements).</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-luxury border border-stone-200 mt-12 shadow-sm">
           <h3 className="font-serif text-xl text-meridian-navy mb-2">Privacy Queries</h3>
           <p className="mb-4 text-sm">For any concerns regarding your data or to exercise your rights, please contact our Data Protection Officer.</p>
           <a href="mailto:privacy@meridiansociety.co.uk" className="text-meridian-navy border-b border-meridian-navy pb-0.5 hover:text-meridian-gold hover:border-meridian-gold transition-colors text-sm font-bold uppercase tracking-widest">privacy@meridiansociety.co.uk</a>
        </section>
      </div>
    </div>
  );
};

export default Privacy;