import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-6 py-8 animate-fadeIn">
      <div className="relative w-[120px] h-[120px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-110 transition-transform duration-500">
        <img
          src="/sadalogo.png"
          alt="SADA Logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20"></div>

        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-xl animate-pulse"></div>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-2xl leading-tight">
          STUDENT AGAINST DISCRIMINATION ARCHIVE
        </h1>
        <div className="text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-lg">
          (SADA)
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full"></div>
      </div>
    </div>
  );
} 