import React from 'react';
import { Sparkles } from 'lucide-react';

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The only way to do great work is to love what you do.",
  // Add more quotes here
];

export default function Motivation() {
  const [currentQuote, setCurrentQuote] = React.useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const getNewQuote = () => {
    let newQuote = currentQuote;
    while (newQuote === currentQuote) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    setCurrentQuote(newQuote);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-pink-800 flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-pink-600" />
          Daily Motivation
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-inner mb-6">
          <p className="text-xl text-gray-800 italic">"{currentQuote}"</p>
        </div>

        <button
          onClick={getNewQuote}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}