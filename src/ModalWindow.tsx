type ModalWindowProps = {
  result: "win" | "lose" | null;
  handleRestartGame: () => void;
};

export default function ModalWindow({
  result,
  handleRestartGame,
}: ModalWindowProps) {
  return (
    <div className="flex w-1/3 flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-blue-600 bg-white p-8">
      <h1 className="text-3xl font-bold tracking-wider">{result}</h1>
      <button
        onClick={() => handleRestartGame()}
        className="cursor-pointer rounded-3xl bg-blue-500 px-6 py-2 text-center text-white transition-all duration-200 ease-in-out hover:bg-blue-500"
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
