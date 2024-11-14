import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

interface TimerProps {
  initialDuration: number;
}

export function Timer({ initialDuration }: TimerProps) {
  const [time, setTime] = useState(initialDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(100);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setTime(initialDuration * 60);
    setProgress(100);
  }, [initialDuration]);

  useEffect(() => {
    resetTimer();
  }, [initialDuration, resetTimer]);

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => {
          const newTime = time - 1;
          setProgress((newTime / (initialDuration * 60)) * 100);
          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      // TODO: Play sound notification
    }

    return () => clearInterval(interval);
  }, [isActive, time, initialDuration]);

  const toggleTimer = () => setIsActive(!isActive);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-8 rounded-2xl shadow-lg text-center relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 h-1 bg-pink-500 transition-all duration-1000"
        style={{ width: `${progress}%` }}
      />

      <h3 className="text-2xl font-semibold text-pink-800 mb-6">Focus Timer</h3>
      
      <div className="text-6xl font-bold text-pink-900 mb-8 font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={toggleTimer}
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105"
        >
          {isActive ? <Pause size={32} /> : <Play size={32} />}
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105"
        >
          <RefreshCw size={32} />
        </button>
      </div>
    </div>
  );
}