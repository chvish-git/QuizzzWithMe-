import { create } from 'zustand';
import { GameState } from './types';

export const useGameStore = create<GameState>((set) => ({
  username: null,
  currentQuestion: 0,
  score: 0,
  timeLeft: 7,
  gameStarted: false,
  gameEnded: false,
  setUsername: (username) => set({ username }),
  startGame: () => set({ gameStarted: true, gameEnded: false }),
  endGame: () => set({ gameEnded: true }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  setTimeLeft: (time) => set({ timeLeft: time }),
  nextQuestion: () => set((state) => ({
    currentQuestion: state.currentQuestion + 1,
    timeLeft: 7,
  })),
  resetGame: () => set({
    currentQuestion: 0,
    score: 0,
    timeLeft: 7,
    gameStarted: false,
    gameEnded: false,
  }),
}));