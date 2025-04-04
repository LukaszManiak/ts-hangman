// import HangmanDrawing from "./HangmanDrawing";

import { useEffect, useState } from "react";
import words from "./wordList.json";
import Keyboard from "./Keyboard";
import HangmanWordToGuess from "./HangmanWordToGuess";
import FinishedModalWindow from "./FinishedModalWindow";
import LevelModalWindow from "./LevelModalWindow";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState<"win" | "lose" | null>(null);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<"easy" | "hard" | null>(null);

  // creating score
  useEffect(() => {
    localStorage.setItem("SCORE", JSON.stringify(score));
  }, [score]);

  // handle certain key selection
  const addGuessedLetter = (letter: string) => {
    setGuessedLetters((prevGuessed) => [...prevGuessed, letter.toUpperCase()]);

    if (!wordToGuess.toUpperCase().includes(letter.toUpperCase())) {
      setMistakes((prevMistakes) => prevMistakes + 1);
    }
  };

  // game restart
  function handleRestartGame() {
    setIsFinished(false);
    setResult(null);
    setMistakes(0);
    setGuessedLetters([]);
    setWordToGuess("");
    setDifficulty(null);
  }

  // checking difficulty with every run
  useEffect(() => {
    if (difficulty) {
      const wordsList =
        difficulty === "easy" ? words.easyWords : words.hardWords;
      setWordToGuess(wordsList[Math.floor(Math.random() * wordsList.length)]);
    }
  }, [difficulty]);

  //game result
  useEffect(() => {
    if (!wordToGuess) return;

    // lose
    if (mistakes >= 6) {
      setIsFinished(true);
      setResult("lose");
      return;
    }

    // win
    if (
      wordToGuess
        .split("")
        .every((letter) => guessedLetters.includes(letter.toUpperCase()))
    ) {
      setIsFinished(true);
      setResult("win");
      setScore((s) => {
        if (difficulty === "easy") return s + 1;
        if (difficulty === "hard") return s + 3;
        return s;
      });
    }
  }, [mistakes, guessedLetters, wordToGuess, difficulty]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <div className="flex flex-col items-center gap-x-4 gap-y-4 xl:flex-row">
        <h1 className="text-6xl font-bold xl:text-9xl">HANGMAN</h1>
        <p className="rounded-2xl bg-blue-600 px-4 py-2 text-3xl text-blue-50">
          SCORE {score}
        </p>
      </div>

      {isFinished && (
        <FinishedModalWindow
          result={result}
          handleRestartGame={handleRestartGame}
        />
      )}

      {!isFinished && !difficulty && (
        <LevelModalWindow setDifficulty={setDifficulty} />
      )}

      <button
        onClick={() => setScore(0)}
        className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer rounded-2xl bg-red-400 p-3 font-semibold text-red-50 transition-all duration-200 ease-in-out hover:bg-red-500"
      >
        RESTART SCORE
      </button>

      {difficulty && !isFinished && (
        <div className="flex flex-col items-center gap-y-20">
          {/* <HangmanDrawing /> */}
          <p className="text-2xl font-medium">MISTAKES {mistakes}</p>
          <HangmanWordToGuess
            wordToGuess={wordToGuess}
            guessedLetters={guessedLetters}
          />
          <Keyboard
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      )}
    </div>
  );
}

export default App;
