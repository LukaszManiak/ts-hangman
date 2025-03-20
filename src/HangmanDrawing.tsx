export default function HangmanDrawing() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-[15px] w-[300px] bg-black"></div>
      <div className="absolute top-0 left-0 h-[300px] w-[15px] bg-black"></div>
      <div className="absolute top-0 left-50 h-[60px] w-[15px] bg-black"></div>
      <div className="absolute top-13 left-44 h-[60px] w-[60px] rounded-full border-8 border-black"></div>
      <div className="absolute top-26 left-50 h-[80px] w-[15px] bg-black"></div>

      {/* <div className="absolute bottom-0 left-0 h-[15px] w-[300px] bg-black"></div> */}
    </div>
  );
}
