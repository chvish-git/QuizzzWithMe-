import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store';
import { Brain } from 'lucide-react';

export const LoginScreen = () => {
  const [inputUsername, setInputUsername] = useState('');
  const setUsername = useGameStore((state) => state.setUsername);
  const startGame = useGameStore((state) => state.startGame);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setUsername(inputUsername);
      startGame();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-baby-pink to-baby-blue p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Brain className="w-16 h-16 text-periwinkle" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome to QuizzzWithMe!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg border border-lavender focus:outline-none focus:border-periwinkle"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-periwinkle hover:bg-lavender text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </motion.div>
  );
};