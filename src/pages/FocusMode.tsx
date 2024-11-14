import React, { useState } from 'react';
import { Timer } from '../components/Timer';
import { Clock, Music, Volume2 } from 'lucide-react';

const ambientSounds = [
  { id: 'rain', name: 'Rain', icon: '🌧️' },
  { id: 'forest', name: 'Forest', icon: '🌲' },
  { id: 'cafe', name: 'Cafe', icon: '☕' },
  { id: 'waves', name: 'Ocean', icon: '🌊' },
];

export default function FocusMode() {
  const [duration, setDuration] = useState(25);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-pink-800 mb-4 flex items-center gap-2">
              <Clock className="text-pink-600" />
              Timer Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-pink-700 mb-2">
                  Focus Duration (minutes)
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center text-pink-800 font-semibold mt-2">
                  {duration} minutes
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Music className="text-blue-600" />
              Ambient Sounds
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {ambientSounds.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => setSelectedSound(sound.id)}
                  className={`p-4 rounded-lg flex items-center gap-2 transition-colors ${
                    selectedSound === sound.id
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-white text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <span className="text-2xl">{sound.icon}</span>
                  <span>{sound.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Timer initialDuration={duration} />

          <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-pink-800 mb-4 flex items-center gap-2">
              <Volume2 className="text-pink-600" />
              Focus Tips
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>🎯 Set clear goals for your focus session</li>
              <li>📱 Put your phone on silent mode</li>
              <li>💧 Stay hydrated during breaks</li>
              <li>🧘‍♀️ Take deep breaths when feeling overwhelmed</li>
              <li>👀 Follow the 20-20-20 rule for eye strain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}