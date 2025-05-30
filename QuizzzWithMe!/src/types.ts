export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  domain: string;
}

export interface GameState {
  username: string | null;
  currentQuestion: number;
  score: number;
  timeLeft: number;
  gameStarted: boolean;
  gameEnded: boolean;
  setUsername: (username: string) => void;
  startGame: () => void;
  endGame: () => void;
  incrementScore: () => void;
  setTimeLeft: (time: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}