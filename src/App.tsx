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
      setScore((s) => s + 1);
    }
  }, [mistakes, guessedLetters, wordToGuess]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <div className="flex items-center gap-x-4">
        <h1 className="text-9xl font-bold">HANGMAN</h1>
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
