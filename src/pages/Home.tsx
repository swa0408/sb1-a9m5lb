import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Calendar, Book, Clock, 
  Users, Sparkles, Target, CheckSquare, 
  MessageSquare 
} from 'lucide-react';

const features = [
  { icon: User, title: 'My Profile', path: '/profile', color: 'pink' },
  { icon: Calendar, title: 'Daily Routine', path: '/daily-routine', color: 'blue' },
  { icon: Book, title: 'My Journal', path: '/journal', color: 'pink' },
  { icon: Clock, title: 'Focus Mode', path: '/focus-mode', color: 'blue' },
  { icon: Users, title: 'Partner', path: '/partner', color: 'pink' },
  { icon: Sparkles, title: 'Motivation', path: '/motivation', color: 'blue' },
  { icon: Target, title: 'Goals', path: '/goals', color: 'pink' },
  { icon: CheckSquare, title: 'Tasks', path: '/tasks', color: 'blue' },
  { icon: MessageSquare, title: 'Daily Reflection', path: '/daily-reflection', color: 'pink' }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">
          Welcome to Student With Ambition
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your personal space for growth, focus, and connection. Choose a section below to get started on your journey to success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, path, color }) => (
          <Link
            key={path}
            to={path}
            className={`p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 
              ${color === 'pink' ? 'bg-pink-50' : 'bg-blue-50'}`}
          >
            <div className="flex items-center gap-4">
              <Icon 
                className={`w-8 h-8 ${
                  color === 'pink' ? 'text-pink-500' : 'text-blue-500'
                }`} 
              />
              <h2 className={`text-xl font-semibold ${
                color === 'pink' ? 'text-pink-800' : 'text-blue-800'
              }`}>
                {title}
              </h2>
            </div>
            <div className={`mt-2 text-sm ${
              color === 'pink' ? 'text-pink-600' : 'text-blue-600'
            }`}>
              Click to access {title.toLowerCase()}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Connect with your partner using the Partner section to share your journey
        </p>
      </div>
    </div>
  );
}