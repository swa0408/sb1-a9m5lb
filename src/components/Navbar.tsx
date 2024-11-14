import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="text-pink-500" />
            <span className="text-2xl font-bold text-pink-800">SWA</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            {[
              { path: '/profile', label: 'Profile' },
              { path: '/daily-routine', label: 'Routine' },
              { path: '/journal', label: 'Journal' },
              { path: '/focus-mode', label: 'Focus' },
              { path: '/partner', label: 'Partner' },
              { path: '/motivation', label: 'Motivation' },
              { path: '/goals', label: 'Goals' },
              { path: '/tasks', label: 'Tasks' },
              { path: '/daily-reflection', label: 'Reflection' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'bg-pink-100 text-pink-800'
                    : 'text-gray-600 hover:bg-pink-50 hover:text-pink-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}