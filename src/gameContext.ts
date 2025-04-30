import { createContext, useContext, useEffect, useReducer } from "react";

import words from "./wordList.json";

type GameState = {
  wordToGuess: string;
  guessedLetters: string[];
  mistakes: number;
  isFinished: boolean;
  result: "win" | "lose" | null;
  score: number;
  difficulty: "easy" | "hard" | null;
};

type GameAction =
  | { type: "SET_DIFFICULTY"; payload: "easy" | "hard" }
  | { type: "SET_WORD"; payload: string }
  | { type: "ADD_GUESSED_LETTER"; payload: string }
  | { type: "INCREMENT_MISTAKES" }
  | { type: "SET_RESULT"; payload: "win" | "lose" }
  | { type: "RESTART_GAME" }
  | { type: "INCREMENT_SCORE"; payload: number };

const initialState: GameState = {
  wordToGuess: "",
  guessedLetters: [],
  mistakes: 0,
  isFinished: false,
  result: null,
  score: 0,
  difficulty: null,
};



export const GameContext = createContext(null);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "SET_WORD":
      return { ...state, wordToGuess: action.payload };
    case "ADD_GUESSED_LETTER":
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, action.payload.toUpperCase()],
      };
    case "INCREMENT_MISTAKES":
      return { ...state, mistakes: state.mistakes + 1 };
    case "SET_RESULT":
      return { ...state, isFinished: true, result: action.payload };
    case "INCREMENT_SCORE":
      return { ...state, score: state.score + action.payload };
    case "RESTART_GAME":
      return {
        ...state,
        wordToGuess: "",
        guessedLetters: [],
        mistakes: 0,
        isFinished: false,
        result: null,
        difficulty: null,
      };
    default:
      return state;
  }
}


type GameProviderProps = {
    children: React.ReactNode;
  };
  
  export const GameProvider = ({ children }: GameProviderProps) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem("SCORE", JSON.stringify(state.score));
    }, [state.score]);
  
    useEffect(() => {
      if (!state.wordToGuess) return;
  
      if (state.mistakes >= 6) {
        dispatch({ type: "SET_RESULT", payload: "lose" });
        return;
      }
  
      const hasWon = state.wordToGuess
        .split("")
        .every((letter) => state.guessedLetters.includes(letter.toUpperCase()));
  
      if (hasWon) {
        dispatch({ type: "SET_RESULT", payload: "win" });
        dispatch({ type: "INCREMENT_SCORE", payload: state.difficulty === "easy" ? 1 : 3 });
      }
    }, [state.guessedLetters, state.mistakes, state.wordToGuess, state.difficulty]);
  
    useEffect(() => {
      if (state.difficulty) {
        const wordsList = state.difficulty === "easy" ? words.easyWords : words.hardWords;
        const word = wordsList[Math.floor(Math.random() * wordsList.length)];
        dispatch({ type: "SET_WORD", payload: word });
      }
    }, [state.difficulty]);
  
    return (
      <GameContext.Provider value={{ state, dispatch }}>
        {children}
      </GameContext.Provider>
    );
  };


  export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error("useGame must be used within GameProvider");
    return context;
  };