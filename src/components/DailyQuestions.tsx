import React, { useState, useEffect } from 'react';
import { AlarmClock, Save, BarChart } from 'lucide-react';
import { format } from 'date-fns';

interface Reflection {
  date: string;
  morningAnswer: string;
  eveningAnswer: string;
}

export function DailyQuestions() {
  const [morningAnswer, setMorningAnswer] = useState('');
  const [eveningAnswer, setEveningAnswer] = useState('');
  const [morningTime, setMorningTime] = useState('07:00');
  const [eveningTime, setEveningTime] = useState('22:00');
  const [reflections, setReflections] = useState<Reflection[]>([]);

  const saveReflection = () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const newReflection = {
      date: today,
      morningAnswer,
      eveningAnswer
    };

    setReflections([newReflection, ...reflections].slice(0, 15));
    setMorningAnswer('');
    setEveningAnswer('');
  };

  const generateAnalysis = () => {
    if (reflections.length < 7) return "Complete at least 7 days of reflections for analysis.";

    const positiveKeywords = ['achieve', 'goal', 'success', 'motivated', 'happy', 'productive'];
    const negativeKeywords = ['tired', 'struggle', 'difficult', 'fail', 'stress', 'procrastinate'];

    let positiveCount = 0;
    let negativeCount = 0;

    reflections.forEach(reflection => {
      const combined = (reflection.morningAnswer + reflection.eveningAnswer).toLowerCase();
      positiveKeywords.forEach(word => {
        if (combined.includes(word)) positiveCount++;
      });
      negativeKeywords.forEach(word => {
        if (combined.includes(word)) negativeCount++;
      });
    });

    const sentiment = positiveCount > negativeCount ? 'positive' : 'negative';
    const consistency = reflections.length >= 14 ? 'consistent' : 'building';

    return `Based on your last ${reflections.length} reflections:
    - Overall sentiment: ${sentiment}
    - Consistency: ${consistency}
    - Key observation: ${
      sentiment === 'positive'
        ? 'You show strong motivation and goal orientation'
        : 'Consider focusing more on small wins and progress'
    }`;
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-100 p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
          <AlarmClock className="text-blue-600" />
          Daily Reflection
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-blue-700 mb-2">Morning Question Time</label>
            <input
              type="time"
              value={morningTime}
              onChange={(e) => setMorningTime(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-blue-700 mb-2">Evening Question Time</label>
            <input
              type="time"
              value={eveningTime}
              onChange={(e) => setEveningTime(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-white p-6 rounded-lg space-y-4">
            <div>
              <label className="block text-blue-700 mb-2">Why are you here?</label>
              <textarea
                value={morningAnswer}
                onChange={(e) => setMorningAnswer(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-blue-700 mb-2">Did you make it worth it today?</label>
              <textarea
                value={eveningAnswer}
                onChange={(e) => setEveningAnswer(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <button
              onClick={saveReflection}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Save Today's Reflection
            </button>
          </div>
        </div>
      </div>

      {reflections.length > 0 && (
        <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
            <BarChart className="text-pink-600" />
            15-Day Analysis
          </h3>
          
          <div className="bg-white p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-700">{generateAnalysis()}</pre>
          </div>

          <div className="mt-6 space-y-4">
            {reflections.map((reflection, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="text-pink-600 font-semibold mb-2">{reflection.date}</div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Morning:</span> {reflection.morningAnswer}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Evening:</span> {reflection.eveningAnswer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}