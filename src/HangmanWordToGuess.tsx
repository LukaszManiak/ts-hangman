import { useEffect, useState } from "react";

type WordToGuessProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWordToGuess({
  guessedLetters,
  wordToGuess,
}: WordToGuessProps) {
  const [mistakes, setMistakes] = useState<number>(0);

  return (
    <>
      <div>mistakes:{mistakes}</div>
      <p></p>
      <div className="flex gap-x-6">
        {wordToGuess.split("").map((letter, index) => {
          if (guessedLetters.includes(letter.toUpperCase())) {
            return <p key={index}>{letter}</p>;
          } else {
            return <p key={index}>{"_"}</p>;
          }
        })}
      </div>
    </>
  );
}
