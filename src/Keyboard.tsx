const keyboardLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type KeyboardProps = {
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Keyboard({
  guessedLetters,
  setGuessedLetters,
}: KeyboardProps) {
  function handleLetterClick(letter: string) {
    if (!guessedLetters.includes(letter)) {
      console.log(guessedLetters);
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  return (
    <div className="flex w-1/2 flex-wrap items-center justify-center gap-4">
      {keyboardLetters.map((letter: string) => (
        <button
          key={letter}
          disabled={guessedLetters.includes(letter)}
          className={`rounded border px-4 py-2 hover:cursor-pointer ${
            guessedLetters.includes(letter)
              ? "bg-blue-500 text-white"
              : "bg-none"
          }`}
          id={letter}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
