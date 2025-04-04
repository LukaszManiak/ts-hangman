type FinishedModalWindowProps = {
  result: "win" | "lose" | null;
  handleRestartGame: () => void;
};

export default function ModalWindow({
  result,
  handleRestartGame,
}: FinishedModalWindowProps) {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-blue-600 bg-white p-8 xl:w-1/3">
      <h1 className="text-4xl font-bold tracking-widest">
        {result?.toUpperCase()}
      </h1>
      <button
        onClick={() => handleRestartGame()}
        className="cursor-pointer rounded-xl bg-blue-500 px-6 py-2 text-center text-white transition-all duration-200 ease-in-out hover:bg-blue-400"
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
