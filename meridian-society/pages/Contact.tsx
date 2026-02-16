import React, { useState } from 'react';
import { Mail, Clock, Send, Check, AlertCircle, Loader2 } from 'lucide-react';

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6kQNy7KJCFvfB-dnwlFsmVSDbhZXb2W-y3i6omTundSZsOw2SVWb9TAPdR6P9pN8T/exec";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Membership Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        formType: "contact",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        pageUrl: window.location.href,
        createdAt: new Date().toISOString()
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Membership Inquiry', message: '' });
    } catch (err) {
      setError('Unable to send message at this time. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in-up">
       <header className="mb-16 text-center">
        <span className="text-meridian-gold text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-6">Contact The Society</h1>
        <p className="text-stone-500 font-light text-xl max-w-2xl mx-auto leading-relaxed">
           We welcome inquiries regarding membership, strategic partnerships, and press relations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
         
         {/* Contact Info Sidebar */}
         <div className="md:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-luxury border border-stone-200 shadow-sm">
               <div className="flex items-start mb-6">
                  <Mail className="text-meridian-gold mt-1 mr-4" size={24} strokeWidth={1} />
                  <div>
                     <h3 className="font-serif text-xl text-meridian-navy mb-2">Email Us</h3>
                     <a href="mailto:info@meridiansociety.co.uk" className="text-stone-600 font-light hover:text-meridian-navy transition-colors block mb-1">info@meridiansociety.co.uk</a>
                     <p className="text-xs text-stone-400">General & Membership Inquiries</p>
                  </div>
               </div>
               
               <div className="flex items-start">
                  <Clock className="text-meridian-gold mt-1 mr-4" size={24} strokeWidth={1} />
                  <div>
                     <h3 className="font-serif text-xl text-meridian-navy mb-2">Response Time</h3>
                     <p className="text-stone-600 font-light">We aim to respond to all member inquiries within 48 hours.</p>
                  </div>
               </div>
            </div>

            <div className="bg-meridian-navy text-meridian-cream p-8 rounded-luxury">
               <h3 className="font-serif text-2xl text-meridian-gold mb-4">Concierge</h3>
               <p className="font-light text-stone-300 mb-6 leading-relaxed">
                  Existing members are encouraged to use the dedicated Concierge portal for rapid assistance with requests.
               </p>
               <div className="text-xs uppercase tracking-widest font-bold text-meridian-gold opacity-50">Members Only</div>
            </div>
         </div>

         {/* Contact Form */}
         <div className="md:col-span-8">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-luxury border border-stone-200 shadow-sm">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                         <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                         <input name="name" value={formData.name} onChange={handleChange} required disabled={loading} className="w-full border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold bg-transparent transition-colors disabled:opacity-50" placeholder="Alexander Hamilton" />
                      </div>
                      <div>
                         <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                         <input name="email" type="email" value={formData.email} onChange={handleChange} required disabled={loading} className="w-full border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold bg-transparent transition-colors disabled:opacity-50" placeholder="alexander@example.com" />
                      </div>
                   </div>

                   <div className="mb-8">
                      <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Subject</label>
                      <div className="relative">
                         <select name="subject" value={formData.subject} onChange={handleChange} disabled={loading} className="w-full border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold bg-transparent appearance-none cursor-pointer transition-colors disabled:opacity-50">
                            <option>Membership Applications</option>
                            <option>Events & Partnerships</option>
                            <option>Concierge Requests</option>
                            <option>Media & Press</option>
                            <option>General Enquiries</option>
                         </select>
                         {/* Custom chevron could go here */}
                      </div>
                   </div>

                   <div className="mb-10">
                      <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
                      <textarea name="message" rows={6} value={formData.message} onChange={handleChange} required disabled={loading} className="w-full border border-stone-300 p-4 rounded-lg text-meridian-dark focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20 bg-transparent transition-all resize-none disabled:opacity-50" placeholder="How may we assist you today?" />
                   </div>

                   {error && (
                     <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center text-red-800 text-sm">
                       <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                       {error}
                     </div>
                   )}

                   <button type="submit" disabled={loading} className="bg-meridian-navy text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {loading ? 'Sending...' : 'Send Message'} 
                      {loading ? <Loader2 size={14} className="ml-3 animate-spin" /> : <Send size={14} className="ml-3" />}
                   </button>
                </form>
            ) : (
                <div className="bg-white p-16 rounded-luxury border border-stone-200 shadow-sm text-center h-full flex flex-col items-center justify-center animate-fade-in-up">
                   <div className="w-16 h-16 bg-green-50 text-green-900 rounded-full flex items-center justify-center mb-6">
                      <Check size={32} />
                   </div>
                   <h3 className="font-serif text-3xl text-meridian-navy mb-4">Message Sent</h3>
                   <p className="text-stone-600 font-light max-w-md mx-auto mb-8">
                      Thank you for contacting The Meridian Society. We have received your inquiry and will respond to {formData.email} shortly.
                   </p>
                   <button onClick={() => setSubmitted(false)} className="text-xs uppercase tracking-widest text-meridian-navy font-bold border-b border-meridian-navy pb-1 hover:text-meridian-gold hover:border-meridian-gold transition-colors">
                      Send Another Message
                   </button>
                </div>
            )}
         </div>

      </div>
    </div>
  );
};

export default Contact;