import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DailyRoutine from './pages/DailyRoutine';
import Journal from './pages/Journal';
import FocusMode from './pages/FocusMode';
import Partner from './pages/Partner';
import Motivation from './pages/Motivation';
import Goals from './pages/Goals';
import Tasks from './pages/Tasks';
import DailyReflection from './pages/DailyReflection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/daily-routine" element={<DailyRoutine />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/focus-mode" element={<FocusMode />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/daily-reflection" element={<DailyReflection />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;