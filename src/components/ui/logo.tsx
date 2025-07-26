import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 py-4 sm:py-6 md:py-8 animate-fadeIn">
      <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl transform hover:scale-110 transition-transform duration-500">
        <img
          src="/sadalogo.png"
          alt="SADA Logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20"></div>

        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-lg sm:rounded-xl animate-pulse"></div>
      </div>

      <div className="space-y-1 sm:space-y-2 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white drop-shadow-2xl leading-tight">
          STUDENT AGAINST DISCRIMINATION ARCHIVE
        </h1>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 drop-shadow-lg">
          (SADA)
        </div>
        <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mx-auto sm:mx-0"></div>
      </div>
    </div>
  );
} 