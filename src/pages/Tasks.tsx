import React, { useState } from 'react';
import { CheckSquare, Plus } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskList {
  id: string;
  title: string;
  tasks: Task[];
}

export default function Tasks() {
  const [taskLists, setTaskLists] = useState<TaskList[]>([
    { id: '1', title: 'Important', tasks: [] },
    { id: '2', title: 'Urgent', tasks: [] },
    { id: '3', title: 'Later', tasks: [] },
    { id: '4', title: 'Done', tasks: [] },
  ]);

  const [newTask, setNewTask] = useState({ listId: '', text: '' });

  const addTask = (listId: string) => {
    if (newTask.text.trim()) {
      setTaskLists(taskLists.map(list =>
        list.id === listId
          ? {
              ...list,
              tasks: [...list.tasks, { id: Date.now().toString(), text: newTask.text, completed: false }]
            }
          : list
      ));
      setNewTask({ listId: '', text: '' });
    }
  };

  const toggleTask = (listId: string, taskId: string) => {
    setTaskLists(taskLists.map(list =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          }
        : list
    ));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {taskLists.map(list => (
          <div key={list.id} className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
              <CheckSquare className="text-pink-600" />
              {list.title}
            </h3>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTask.listId === list.id ? newTask.text : ''}
                onChange={(e) => setNewTask({ listId: list.id, text: e.target.value })}
                placeholder="Add task..."
                className="flex-1 px-3 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                onKeyPress={(e) => e.key === 'Enter' && addTask(list.id)}
              />
              <button
                onClick={() => addTask(list.id)}
                className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-2">
              {list.tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-pink-50"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(list.id, task.id)}
                    className="rounded text-pink-500 focus:ring-pink-500"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}