import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-red-800/90 to-yellow-600/90 backdrop-blur-sm py-6 sm:py-8 md:py-12 rounded-xl sm:rounded-2xl border border-red-200/30 shadow-2xl animate-fadeIn">
      <div className="relative w-full max-w-4xl h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-500">
        <img
          src="/WhatsApp Image 2025-07-10 at 17.47.56.jpeg"
          alt="জুলাই গণঅভ্যুত্থান"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Animated overlay elements */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-red-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-1/4 sm:bottom-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center space-y-2 sm:space-y-4 px-3 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-2xl leading-tight">
          জুলাই গণঅভ্যুত্থান সাতক্ষীরা
        </h2>
        <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          বাংলাদেশের ইতিহাসে জুলাই মাসের গণঅভ্যুত্থান ও ছাত্র আন্দোলনের স্মরণে।
          শিক্ষার্থীদের বিরুদ্ধে বৈষম্যের প্রতিবাদে গড়ে ওঠা ঐতিহাসিক আন্দোলনের সাক্ষী।
        </p>

        {/* Additional info cards */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 min-w-[80px] sm:min-w-[100px]">
            <div className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">৩৬ দিন</div>
            <div className="text-white/80 text-xs sm:text-sm">আন্দোলনের সময়কাল</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 min-w-[80px] sm:min-w-[100px]">
            <div className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">শিক্ষার্থী</div>
            <div className="text-white/80 text-xs sm:text-sm">আন্দোলনের মূল চালিকাশক্তি</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 min-w-[80px] sm:min-w-[100px]">
            <div className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">সফলতা</div>
            <div className="text-white/80 text-xs sm:text-sm">দাবি আদায়ে সফলতা</div>
          </div>
        </div>
      </div>
    </div>
  );
} 