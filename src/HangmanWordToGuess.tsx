type WordToGuessProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWordToGuess({
  guessedLetters,
  wordToGuess,
}: WordToGuessProps) {
  return (
    <div className="flex gap-x-6">
      {wordToGuess
        .split("")
        .map((letter) =>
          guessedLetters.includes(letter.toUpperCase()) ? letter : " _ ",
        )}
    </div>
  );
}
