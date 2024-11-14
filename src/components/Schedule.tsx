import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Task {
  id: string;
  time: string;
  description: string;
}

export function Schedule() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ time: '', description: '' });

  const addTask = () => {
    if (newTask.time && newTask.description) {
      setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
      setNewTask({ time: '', description: '' });
    }
  };

  return (
    <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
        <Calendar className="text-pink-600" />
        Daily Schedule
      </h3>

      <div className="flex gap-4 mb-4">
        <input
          type="time"
          value={newTask.time}
          onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
          className="px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          placeholder="Task description"
          className="flex-1 px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={addTask}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg"
          >
            <Clock className="text-pink-500" size={20} />
            <span className="font-semibold text-pink-800">{task.time}</span>
            <span className="flex-1 text-gray-700">{task.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}