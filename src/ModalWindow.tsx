export default function ModalWindow() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-blue-600 bg-white p-4">
      <h1 className="text-3xl font-bold tracking-wider">RESULT</h1>
      <button className="rounded-3xl bg-blue-500 text-center text-white transition-all duration-200 ease-in-out hover:bg-blue-500">
        PLAY AGAIN
      </button>
    </div>
  );
}
