import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Loader2, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6kQNy7KJCFvfB-dnwlFsmVSDbhZXb2W-y3i6omTundSZsOw2SVWb9TAPdR6P9pN8T/exec";

const Apply: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    institution: '',
    academicInterests: '',
    achievements: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        formType: "application",
        name: formData.fullName,
        email: formData.email,
        applicationData: formData,
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

      setStep(4); // Success state
    } catch (err) {
      setError('There was an issue submitting your application. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <span className="inline-block border border-meridian-gold text-meridian-gold px-6 py-2 rounded-full text-xs uppercase tracking-widest mb-6">Admissions Open 2026</span>
        <h1 className="font-serif text-4xl md:text-5xl text-meridian-navy mb-4">Apply to Meridian Society</h1>
        <p className="text-stone-500 font-light">Join a global network of ambitious minds.</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-16 space-x-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1.5 w-12 rounded-full transition-colors ${step >= i ? 'bg-meridian-gold' : 'bg-stone-200'}`} />
        ))}
      </div>

      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-8 animate-fade-in-up">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" />
            </div>
           </div>
           <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Country of Residence</label>
              <input name="country" value={formData.country} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" />
           </div>
           <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">School / University</label>
              <input name="institution" value={formData.institution} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" />
           </div>
           <div className="flex justify-end pt-6">
             <button type="submit" className="bg-meridian-navy text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md">Next Step</button>
           </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-8 animate-fade-in-up">
           <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Academic Interests</label>
              <input name="academicInterests" placeholder="e.g. Macroeconomics, Ethics, Biochemistry..." value={formData.academicInterests} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" />
           </div>
           <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Achievements & Distinctions</label>
              <textarea name="achievements" rows={4} value={formData.achievements} onChange={handleChange} required className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20" placeholder="List key awards, grades, or roles held." />
           </div>
           <div className="flex justify-between pt-6">
             <button type="button" onClick={() => setStep(1)} className="text-stone-500 text-xs uppercase tracking-widest hover:text-meridian-navy font-bold">Back</button>
             <button type="submit" className="bg-meridian-navy text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md">Next Step</button>
           </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
           <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Why do you want to join Meridian Society?</label>
              <textarea name="reason" rows={8} value={formData.reason} onChange={handleChange} required disabled={loading} className="w-full bg-white border border-stone-200 p-4 rounded-lg focus:outline-none focus:border-meridian-gold focus:ring-1 focus:ring-meridian-gold/20 disabled:opacity-50" placeholder="Please elaborate on your motivations and what you hope to contribute." />
           </div>
           
           {error && (
             <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-center text-red-800 text-sm">
               <AlertCircle size={16} className="mr-2 flex-shrink-0" />
               {error}
             </div>
           )}

           <div className="flex justify-between pt-6">
             <button type="button" onClick={() => setStep(2)} disabled={loading} className="text-stone-500 text-xs uppercase tracking-widest hover:text-meridian-navy font-bold disabled:opacity-50">Back</button>
             <button type="submit" disabled={loading} className="bg-meridian-navy text-white px-10 py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md flex items-center disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? 'Submitting...' : 'Submit Application'}
                {loading && <Loader2 size={14} className="ml-2 animate-spin" />}
             </button>
           </div>
        </form>
      )}

      {step === 4 && (
        <div className="text-center py-12 animate-fade-in-up bg-white border border-stone-200 p-8 rounded-luxury shadow-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-900 mb-6">
            <Check size={40} />
          </div>
          <h2 className="font-serif text-3xl text-meridian-navy mb-4">Application Received</h2>
          <p className="text-stone-600 font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you, {formData.fullName}. Your application has been securely transmitted to our admissions committee. You will receive a confirmation email at {formData.email} shortly.
          </p>
          <button onClick={() => navigate('/')} className="text-xs uppercase font-bold tracking-widest text-meridian-navy border-b border-meridian-navy pb-1 hover:text-meridian-gold hover:border-meridian-gold transition-colors">Return Home</button>
        </div>
      )}
    </div>
  );
};

export default Apply;