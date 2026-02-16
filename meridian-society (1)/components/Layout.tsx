import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-meridian-cream text-meridian-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-meridian-cream/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
              <h1 className="font-serif text-2xl tracking-widest text-meridian-navy uppercase">
                Meridian <span className="text-meridian-gold">Society</span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {!isAuthenticated ? (
                <>
                  <button onClick={() => navigate('/manifesto')} className="text-sm tracking-wide text-meridian-dark hover:text-meridian-gold transition-colors uppercase font-medium">Manifesto</button>
                  <button onClick={() => navigate('/membership')} className="text-sm tracking-wide text-meridian-dark hover:text-meridian-gold transition-colors uppercase font-medium">Membership</button>
                  <button onClick={() => navigate('/login')} className="text-sm tracking-wide text-meridian-dark hover:text-meridian-gold transition-colors uppercase font-medium">Member Login</button>
                  <button 
                    onClick={() => navigate('/apply')}
                    className="bg-meridian-navy text-white px-8 py-3 rounded-luxury text-xs font-bold tracking-widest uppercase hover:bg-meridian-navyLight hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-sm"
                  >
                    Apply for Membership
                  </button>
                </>
              ) : (
                <>
                   <button onClick={() => navigate('/dashboard')} className={`text-sm tracking-wide hover:text-meridian-gold transition-colors uppercase font-medium ${location.pathname === '/dashboard' ? 'text-meridian-gold' : 'text-meridian-dark'}`}>Dashboard</button>
                   <button onClick={() => navigate('/society')} className={`text-sm tracking-wide hover:text-meridian-gold transition-colors uppercase font-medium ${location.pathname === '/society' ? 'text-meridian-gold' : 'text-meridian-dark'}`}>Society</button>
                   <button onClick={() => navigate('/concierge')} className={`text-sm tracking-wide hover:text-meridian-gold transition-colors uppercase font-medium ${location.pathname === '/concierge' ? 'text-meridian-gold' : 'text-meridian-dark'}`}>Concierge</button>
                   <div className="h-5 w-px bg-stone-300 mx-2"></div>
                   <button onClick={() => navigate('/profile')} className="text-stone-600 hover:text-meridian-gold transition-colors p-2">
                      <UserIcon size={20} />
                   </button>
                   <button onClick={handleLogout} className="text-stone-600 hover:text-red-900 transition-colors p-2">
                      <LogOut size={20} />
                   </button>
                </>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-meridian-navy hover:text-meridian-gold">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-meridian-cream border-t border-stone-200 absolute w-full h-screen">
            <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center">
               {!isAuthenticated ? (
                <>
                  <button onClick={() => {navigate('/manifesto'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Manifesto</button>
                  <button onClick={() => {navigate('/membership'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Membership</button>
                  <button onClick={() => {navigate('/login'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Member Login</button>
                  <button onClick={() => {navigate('/apply'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-gold font-bold">Apply for Membership</button>
                </>
              ) : (
                <>
                  <button onClick={() => {navigate('/dashboard'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Dashboard</button>
                  <button onClick={() => {navigate('/society'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">The Society</button>
                  <button onClick={() => {navigate('/concierge'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Concierge</button>
                  <button onClick={() => {navigate('/profile'); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-meridian-navy">Profile</button>
                  <button onClick={() => {handleLogout(); setIsMenuOpen(false)}} className="text-lg font-serif tracking-wide text-stone-500">Sign Out</button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-meridian-navy text-meridian-cream py-16 border-t border-meridian-navyLight">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl tracking-widest text-meridian-gold mb-8 uppercase">Meridian Society</h2>
          <div className="flex justify-center space-x-10 mb-10 text-sm text-stone-300 font-light tracking-wide">
            <button onClick={() => navigate('/privacy')} className="hover:text-meridian-gold transition-colors">Privacy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-meridian-gold transition-colors">Terms</button>
            <button onClick={() => navigate('/contact')} className="hover:text-meridian-gold transition-colors">Contact</button>
          </div>
          <p className="text-xs text-stone-500 tracking-widest uppercase">
            © 2026 Meridian Society. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;