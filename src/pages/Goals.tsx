import React, { useState } from 'react';
import { Target, Plus, Check } from 'lucide-react';

export default function Goals() {
  const [goals, setGoals] = useState<Array<{ id: string; text: string; completed: boolean }>>([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { id: Date.now().toString(), text: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-pink-800 flex items-center gap-2 mb-6">
          <Target className="text-pink-600" />
          My Goals
        </h2>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new goal..."
            className="flex-1 px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onKeyPress={(e) => e.key === 'Enter' && addGoal()}
          />
          <button
            onClick={addGoal}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {goals.map(goal => (
            <div
              key={goal.id}
              className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                goal.completed ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`rounded-full p-1 ${
                  goal.completed ? 'bg-green-500' : 'bg-pink-500'
                } text-white`}
              >
                <Check size={20} />
              </button>
              <span className={`flex-1 ${goal.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {goal.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}