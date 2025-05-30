import React from 'react';
import { LoginScreen } from './components/LoginScreen';
import { QuizScreen } from './components/QuizScreen';
import { GameOver } from './components/GameOver';
import { useGameStore } from './store';

function App() {
  const gameStarted = useGameStore((state) => state.gameStarted);
  const gameEnded = useGameStore((state) => state.gameEnded);
  const username = useGameStore((state) => state.username);

  if (!username || !gameStarted) {
    return <LoginScreen />;
  }

  if (gameEnded) {
    return <GameOver />;
  }

  return <QuizScreen />;
}

export default App;