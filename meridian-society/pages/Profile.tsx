import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alexander L.',
    email: 'alexander.l@ox.ac.uk',
    institution: 'University of Oxford',
    membershipStatus: 'Founding Member',
    academicInterests: 'Macroeconomics, Artificial Intelligence, Philosophy',
    achievements: 'Dean\'s List 2026, Rhodes Scholar Finalist'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save to backend would go here
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white border border-stone-200 p-8 md:p-12 rounded-luxury shadow-sm">
        <div className="flex justify-between items-center mb-10 border-b border-stone-100 pb-6">
          <h1 className="font-serif text-3xl text-meridian-navy">Member Profile</h1>
          <button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="text-xs uppercase tracking-widest text-meridian-gold hover:text-meridian-navy transition-colors font-bold"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
              {isEditing ? (
                 <input name="name" value={profile.name} onChange={handleChange} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-meridian-gold bg-transparent" />
              ) : (
                 <p className="text-lg text-meridian-navy font-serif">{profile.name}</p>
              )}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Membership Status</label>
              <p className="text-lg text-meridian-gold font-serif">{profile.membershipStatus}</p>
            </div>
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Email</label>
             <p className="text-meridian-dark font-light">{profile.email}</p>
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Institution</label>
             {isEditing ? (
                 <input name="institution" value={profile.institution} onChange={handleChange} className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-meridian-gold bg-transparent" />
              ) : (
                 <p className="text-meridian-dark font-light">{profile.institution}</p>
              )}
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Academic Interests</label>
             {isEditing ? (
                 <textarea name="academicInterests" rows={2} value={profile.academicInterests} onChange={handleChange} className="w-full border border-stone-300 p-3 focus:outline-none focus:border-meridian-gold bg-transparent" />
              ) : (
                 <p className="text-meridian-dark font-light">{profile.academicInterests}</p>
              )}
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Key Achievements</label>
             {isEditing ? (
                 <textarea name="achievements" rows={2} value={profile.achievements} onChange={handleChange} className="w-full border border-stone-300 p-3 focus:outline-none focus:border-meridian-gold bg-transparent" />
              ) : (
                 <p className="text-meridian-dark font-light">{profile.achievements}</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;