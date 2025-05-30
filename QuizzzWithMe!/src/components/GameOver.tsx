import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store';
import { Trophy } from 'lucide-react';

export const GameOver = () => {
  const { score, resetGame } = useGameStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-gradient-to-r from-baby-pink to-baby-blue flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <Trophy className="w-16 h-16 text-periwinkle mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Game Over!</h1>
        <p className="text-2xl mb-8">Your final score: {score}</p>
        <button
          onClick={resetGame}
          className="w-full bg-periwinkle hover:bg-lavender text-white font-bold py-3 rounded-lg transition duration-300"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
};