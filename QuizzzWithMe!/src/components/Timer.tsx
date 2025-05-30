import React, { useEffect } from 'react';
import { useGameStore } from '../store';
import { motion } from 'framer-motion';

export const Timer = () => {
  const { timeLeft, setTimeLeft, endGame } = useGameStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      if (timeLeft <= 1) {
        endGame();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, endGame]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: timeLeft <= 3 ? [1, 1.2, 1] : 1 }}
      transition={{ duration: 0.5 }}
      className={`text-2xl font-bold ${
        timeLeft <= 3 ? 'text-red-500' : 'text-periwinkle'
      }`}
    >
      {timeLeft}s
    </motion.div>
  );
};