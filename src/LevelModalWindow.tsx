type LevelModalWindowProps = {
  setDifficulty: React.Dispatch<React.SetStateAction<"easy" | "hard" | null>>;
};

export default function LevelModalWindow({
  setDifficulty,
}: LevelModalWindowProps) {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center gap-y-4 rounded-3xl border-2 border-blue-600 bg-white p-8 xl:w-1/3">
      <h1 className="text-center text-4xl font-bold tracking-widest">
        CHOOSE DIFFICULTY LEVEL
      </h1>
      <div className="flex items-center gap-x-6">
        <button
          onClick={() => setDifficulty("easy")}
          className="cursor-pointer rounded-xl bg-green-600 px-6 py-2 text-center text-white transition-all duration-200 ease-in-out hover:bg-green-400"
        >
          EASY
        </button>
        <button
          onClick={() => setDifficulty("hard")}
          className="cursor-pointer rounded-xl bg-orange-600 px-6 py-2 text-center text-white transition-all duration-200 ease-in-out hover:bg-orange-400"
        >
          HARD
        </button>
      </div>
    </div>
  );
}
