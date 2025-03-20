const keyboardLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard() {
  return (
    <div className="flex w-1/2 flex-wrap items-center justify-center gap-4">
      {keyboardLetters.map((letter: string) => (
        <button>{letter}</button>
      ))}
    </div>
  );
}
