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
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <h1 className="text-9xl font-bold">HANGMAN</h1>

      <div className="flex flex-col items-center gap-y-20">
        {/* <HangmanDrawing /> */}
        <HangmanWordToGuess
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
        />
        <Keyboard
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
