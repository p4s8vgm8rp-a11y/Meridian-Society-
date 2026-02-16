import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Check for redirect message
  useEffect(() => {
    if (location.state?.message) {
      setInfoMessage(location.state.message);
    }
  }, [location.state]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        login(); // Update auth context
        
        // Redirect to the page they came from, or dashboard by default
        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
      } else {
        setError('Invalid credentials. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-meridian-navy mb-4">Member Login</h2>
          <p className="text-stone-500 font-light">Enter your credentials to access the society.</p>
        </div>

        {infoMessage && (
          <div className="mb-8 p-4 bg-meridian-gold/10 border border-meridian-gold/20 rounded-luxury text-center animate-fade-in-up">
            <p className="text-meridian-navy text-sm font-medium">{infoMessage}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold transition-colors"
              placeholder="name@institution.edu"
              required
            />
          </div>

          <div>
             <div className="flex justify-between mb-2">
                <label className="block text-xs uppercase tracking-widest text-stone-500">Password</label>
                <button type="button" onClick={() => navigate('/reset-password')} className="text-xs text-meridian-gold hover:text-meridian-navy transition-colors">Forgot password?</button>
             </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-stone-300 py-3 text-meridian-dark focus:outline-none focus:border-meridian-gold transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-800 text-sm bg-red-50 p-3 border border-red-100 rounded-luxury">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-meridian-navy text-white py-4 rounded-luxury text-xs uppercase tracking-widest font-bold hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-50 mt-8 shadow-md"
          >
            {loading ? 'Authenticating...' : 'Enter Society'}
          </button>
        </form>
        
        <div className="text-center mt-12">
            <p className="text-stone-400 text-sm">Not yet a member?</p>
            <button onClick={() => navigate('/apply')} className="text-meridian-navy text-sm border-b border-meridian-navy pb-0.5 mt-2 hover:text-meridian-gold hover:border-meridian-gold transition-colors">Apply for Membership</button>
        </div>
      </div>
    </div>
  );
};

export default Login;