import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Apply from './pages/Apply';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Manifesto from './pages/Manifesto';
import Membership from './pages/Membership';
import Concierge from './pages/Concierge';
import Society from './pages/Society';
import Profile from './pages/Profile';
import Opportunities from './pages/Opportunities';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/manifesto" element={<Manifesto />} />
            
            {/* Footer Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/concierge" element={
              <ProtectedRoute>
                <Concierge />
              </ProtectedRoute>
            } />
            <Route path="/society" element={
              <ProtectedRoute>
                <Society />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/opportunities" element={
              <ProtectedRoute message="Please log in to access member opportunities.">
                <Opportunities />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;