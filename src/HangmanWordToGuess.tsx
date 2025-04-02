type WordToGuessProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWordToGuess({
  guessedLetters,
  wordToGuess,
}: WordToGuessProps) {
  return (
    <div className="flex gap-x-6 text-4xl">
      {wordToGuess
        .split("")
        .map((letter) =>
          guessedLetters.includes(letter.toUpperCase()) ? letter : " _ ",
        )}
    </div>
  );
}
