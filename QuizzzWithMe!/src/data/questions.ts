export const questions = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    category: "Science",
    difficulty: "Easy",
    domain: "Astronomy"
  },
  {
    id: 2,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
    category: "Geography",
    difficulty: "Easy",
    domain: "Capitals"
  },
  {
    id: 3,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: "Au",
    category: "Science",
    difficulty: "Medium",
    domain: "Chemistry"
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
    category: "Art",
    difficulty: "Easy",
    domain: "Paintings"
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
    category: "Geography",
    difficulty: "Easy",
    domain: "Oceans"
  },
  {
    id: 6,
    question: "Which programming language was created by James Gosling?",
    options: ["Python", "Java", "C++", "Ruby"],
    correctAnswer: "Java",
    category: "Technology",
    difficulty: "Medium",
    domain: "Programming"
  },
  {
    id: 7,
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    correctAnswer: "12",
    category: "Mathematics",
    difficulty: "Easy",
    domain: "Arithmetic"
  },
  {
    id: 8,
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    correctAnswer: "Hydrogen",
    category: "Science",
    difficulty: "Medium",
    domain: "Chemistry"
  },
  {
    id: 9,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    category: "Literature",
    difficulty: "Easy",
    domain: "Plays"
  },
  {
    id: 10,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
    category: "Geography",
    difficulty: "Medium",
    domain: "Capitals"
  },
  {
    id: 11,
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"],
    correctAnswer: "Albert Einstein",
    category: "Science",
    difficulty: "Medium",
    domain: "Physics"
  },
  {
    id: 12,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Jupiter",
    category: "Science",
    difficulty: "Easy",
    domain: "Astronomy"
  },
  {
    id: 13,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Korea", "Japan", "Thailand"],
    correctAnswer: "Japan",
    category: "Geography",
    difficulty: "Easy",
    domain: "Countries"
  },
  {
    id: 14,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
    category: "Science",
    difficulty: "Medium",
    domain: "Geology"
  },
  {
    id: 15,
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "George Eastman"],
    correctAnswer: "Alexander Graham Bell",
    category: "History",
    difficulty: "Medium",
    domain: "Inventions"
  },
  {
    id: 16,
    question: "What is the main component of the Sun?",
    options: ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
    correctAnswer: "Hydrogen",
    category: "Science",
    difficulty: "Hard",
    domain: "Astronomy"
  },
  {
    id: 17,
    question: "Which famous painting features a woman with a mysterious smile?",
    options: ["The Starry Night", "The Mona Lisa", "The Scream", "Girl with a Pearl Earring"],
    correctAnswer: "The Mona Lisa",
    category: "Art",
    difficulty: "Easy",
    domain: "Paintings"
  },
  {
    id: 18,
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    correctAnswer: "H2O",
    category: "Science",
    difficulty: "Easy",
    domain: "Chemistry"
  },
  {
    id: 19,
    question: "Which planet is known as the Morning Star?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: "Venus",
    category: "Science",
    difficulty: "Medium",
    domain: "Astronomy"
  },
  {
    id: 20,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Skin"],
    correctAnswer: "Skin",
    category: "Science",
    difficulty: "Medium",
    domain: "Biology"
  }
] as const;

// Fisher-Yates shuffle algorithm
const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get 15 random questions
export const getRandomQuestions = () => {
  return shuffle([...questions]).slice(0, 15);
};