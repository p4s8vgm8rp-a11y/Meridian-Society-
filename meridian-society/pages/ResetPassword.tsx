import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz6kQNy7KJCFvfB-dnwlFsmVSDbhZXb2W-y3i6omTundSZsOw2SVWb9TAPdR6P9pN8T/exec";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        formType: "password_reset",
        email: email,
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
    } catch (err) {
      setError('Unable to send reset link. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md">
        <button onClick={() => navigate('/login')} className="flex items-center text-stone-500 hover:text-meridian-navy mb-8 text-sm transition-colors">
            <ArrowLeft size={16} className="mr-2"/> Back to Login
        </button>

        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-meridian-navy mb-4">Reset your password</h2>
          <p className="text-stone-500 font-light">Enter your email and we will send you a secure reset link.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className="w-full bg-transparent border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold transition-colors"
                required
                disabled={loading}
              />
            </div>

            {error && (
               <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-center text-red-800 text-sm">
                 <AlertCircle size={14} className="mr-2 flex-shrink-0" />
                 {error}
               </div>
             )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-meridian-navy text-white py-4 rounded-luxury text-xs uppercase tracking-widest hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md font-bold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>Sending <Loader2 size={14} className="ml-2 animate-spin"/></>
              ) : (
                'Send reset link'
              )}
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-100 p-6 rounded-luxury text-center shadow-sm">
            <h3 className="font-serif text-xl text-green-900 mb-2">Reset link sent</h3>
            <p className="text-green-800 font-light text-sm mb-6">If an account exists for {email}, we’ve sent a reset link.</p>
            <button onClick={() => navigate('/login')} className="text-xs uppercase font-bold tracking-wide text-green-900 border-b border-green-900 hover:text-green-700 hover:border-green-700 transition-colors">Return to Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;