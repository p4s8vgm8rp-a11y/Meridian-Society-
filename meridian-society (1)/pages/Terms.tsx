import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in-up">
      <header className="mb-16 border-b border-stone-200 pb-8">
        <span className="text-meridian-gold text-xs font-bold uppercase tracking-widest mb-3 block">Legal</span>
        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-4">Terms & Conditions</h1>
        <p className="text-stone-500 font-light text-lg">Governing membership and usage of The Meridian Society.</p>
      </header>

      <div className="space-y-12 text-stone-600 font-light leading-relaxed text-lg">
         
         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">1. Membership Eligibility</h2>
            <p>
               Membership to The Meridian Society is selective and subject to approval by the Admissions Committee. 
               We reserve the right to decline applications without disclosing specific reasons. Membership is personal, 
               non-transferable, and valid only for the individual approved.
            </p>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">2. Code of Conduct</h2>
            <p className="mb-4">
               The Society fosters an environment of intellectual rigor and mutual respect. Members are expected to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-meridian-gold">
               <li>Maintain professional and respectful behavior at all events and in digital forums.</li>
               <li>Respect the privacy and confidentiality of fellow members (Chatham House Rule applies to specific events).</li>
               <li>Refrain from using the network for unsolicited commercial solicitation.</li>
            </ul>
            <p className="mt-4">
               Violation of this code may result in immediate termination of membership without refund.
            </p>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">3. Payments & Fees</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-meridian-gold">
               <li><strong>Joining Fees:</strong> One-time joining fees are non-refundable upon acceptance.</li>
               <li><strong>Subscriptions:</strong> Annual membership fees are payable in advance and renew automatically unless cancelled 30 days prior to renewal.</li>
               <li><strong>Events:</strong> Specific events may incur additional costs, which will be clearly communicated during RSVP.</li>
            </ul>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">4. Event Participation</h2>
            <p>
               RSVP is required for all events. Due to the exclusive nature of our gatherings, capacity is often limited. 
               The Society reserves the right to refuse entry to any member or guest who arrives intoxicated, behaves inappropriately, 
               or fails to adhere to the dress code.
            </p>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">5. Intellectual Property</h2>
            <p>
               All content, materials, and publications provided by The Meridian Society are protected by copyright. 
               Members may not redistribute, reproduce, or commercially exploit Society materials without explicit written permission.
            </p>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">6. Liability</h2>
            <p>
               While we strive to ensure safety at all events, The Meridian Society accepts no liability for personal loss, 
               damage to property, or injury sustained during Society events, except where required by law.
            </p>
         </section>

         <section>
            <h2 className="font-serif text-2xl text-meridian-navy mb-4">7. Amendments</h2>
            <p>
               These terms may be updated as the Society evolves. Members will be notified of significant changes via email. 
               Continued use of membership privileges constitutes acceptance of the revised terms.
            </p>
         </section>

      </div>
    </div>
  );
};

export default Terms;