import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";

import Keyboard from "./Keyboard";
import HangmanWordToGuess from "./HangmanWordToGuess";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="flex w-full content-center gap-x-10">
      <h1 className="text-9xl font-bold">
        HANG
        <br />
        MAN
      </h1>

      <div className="flex flex-col items-start gap-y-10">
        <HangmanDrawing />
        <HangmanWordToGuess />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
