import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { useGameStore } from '../store';
import { getRandomQuestions } from '../data/questions';
import { Timer } from './Timer';

export const QuizScreen = () => {
  const { currentQuestion, score, incrementScore, nextQuestion, endGame } = useGameStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questions] = useState(() => getRandomQuestions());
  
  const [playPop] = useSound('/sounds/pop.mp3');
  const [playCorrect] = useSound('/sounds/correct.mp3');
  const [playWrong] = useSound('/sounds/wrong.mp3');

  const currentQuestionData = questions[currentQuestion];

  useEffect(() => {
    if (selectedAnswer) {
      const timer = setTimeout(() => {
        if (currentQuestion === questions.length - 1) {
          endGame();
        } else {
          nextQuestion();
          setSelectedAnswer(null);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, currentQuestion, nextQuestion, endGame]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections
    
    playPop();
    setSelectedAnswer(answer);
    
    if (answer === currentQuestionData.correctAnswer) {
      playCorrect();
      incrementScore();
    } else {
      playWrong();
    }
  };

  const getButtonColor = (option: string) => {
    if (!selectedAnswer) return 'bg-lavender hover:bg-periwinkle';
    if (option === currentQuestionData.correctAnswer) return 'bg-mint text-white';
    if (option === selectedAnswer && option !== currentQuestionData.correctAnswer) return 'bg-peach text-white';
    return 'bg-lavender opacity-50';
  };

  // Shuffle options for current question
  const shuffledOptions = React.useMemo(() => {
    return [...currentQuestionData.options].sort(() => Math.random() - 0.5);
  }, [currentQuestion, currentQuestionData.options]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-baby-pink to-baby-blue p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 items-center">
              <span className="text-2xl font-bold text-periwinkle">Score: {score}</span>
              <span className="text-lg text-gray-600">Question: {currentQuestion + 1}/{questions.length}</span>
            </div>
            <Timer />
          </div>
          
          <motion.h2 
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-6 text-gray-800"
          >
            {currentQuestionData.question}
          </motion.h2>

          <div className="grid grid-cols-1 gap-4">
            {shuffledOptions.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-xl ${getButtonColor(option)} transition-all duration-300 transform hover:scale-102`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};