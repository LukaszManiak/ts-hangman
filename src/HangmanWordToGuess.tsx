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
      {wordToGuess.split("").map((letter, index) => (
        <p key={index}>
          {" "}
          {guessedLetters.includes(letter.toUpperCase()) ? letter : "_"}
        </p>
      ))}
    </div>
  );
}
