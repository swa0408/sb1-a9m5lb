import React, { useState, useEffect } from 'react';
import { User, Heart, Edit2, Save } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [connectionCode, setConnectionCode] = useState('');
  const [profile, setProfile] = useState({
    name: '',
    dateOfBirth: '',
    nickname: '',
    favoriteColor: '',
    favoriteFruit: '',
    favoriteSeason: '',
    bio: ''
  });

  useEffect(() => {
    // Generate a unique 8-character code on component mount
    const generateCode = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return code;
    };
    setConnectionCode(generateCode());
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to Supabase
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-pink-800 flex items-center gap-2">
            <User className="text-pink-600" />
            My Profile
          </h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
          >
            {isEditing ? (
              <>
                <Save size={20} /> Save
              </>
            ) : (
              <>
                <Edit2 size={20} /> Edit
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Name', key: 'name' },
              { label: 'Date of Birth', key: 'dateOfBirth', type: 'date' },
              { label: 'Nickname', key: 'nickname' },
              { label: 'Favorite Color', key: 'favoriteColor' },
              { label: 'Favorite Fruit', key: 'favoriteFruit' },
              { label: 'Favorite Season', key: 'favoriteSeason' }
            ].map(({ label, key, type }) => (
              <div key={key} className="bg-white p-4 rounded-lg shadow">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                {isEditing ? (
                  <input
                    type={type || 'text'}
                    value={profile[key]}
                    onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                    className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile[key] || 'Not set'}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows={4}
              />
            ) : (
              <p className="text-gray-800">{profile.bio || 'No bio yet'}</p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="bg-pink-50 px-6 py-4 rounded-lg inline-flex items-center gap-2">
            <Heart className="text-pink-500" />
            <span className="text-pink-800">
              Partner Connection Code: <span className="font-mono font-bold">{connectionCode}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}