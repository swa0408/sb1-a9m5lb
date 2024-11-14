import React, { useState } from 'react';
import { Book, Save } from 'lucide-react';
import { format } from 'date-fns';

export default function Journal() {
  const [entries, setEntries] = useState<Array<{ date: string; content: string }>>([]);
  const [currentEntry, setCurrentEntry] = useState('');

  const saveEntry = () => {
    if (currentEntry.trim()) {
      setEntries([
        { date: format(new Date(), 'PPP'), content: currentEntry },
        ...entries
      ]);
      setCurrentEntry('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-pink-800 flex items-center gap-2">
            <Book className="text-pink-600" />
            My Journal
          </h2>
          <button
            onClick={saveEntry}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
          >
            <Save size={20} />
            Save Entry
          </button>
        </div>
        
        <textarea
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full h-48 p-4 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-pink-600 mb-2">{entry.date}</div>
            <p className="text-gray-700 whitespace-pre-wrap">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}