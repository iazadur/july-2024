import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-red-800/90 to-yellow-600/90 backdrop-blur-sm py-12 rounded-2xl border border-red-200/30 shadow-2xl animate-fadeIn">
      <div className="relative w-full max-w-4xl h-64 md:h-80 rounded-xl shadow-2xl overflow-hidden mb-6 transform hover:scale-105 transition-transform duration-500">
        <img
          src="/WhatsApp Image 2025-07-10 at 17.47.56.jpeg"
          alt="জুলাই গণঅভ্যুত্থান"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Animated overlay elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-red-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-8 left-1/4 w-8 h-8 bg-yellow-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center space-y-4 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-2xl leading-tight">
          জুলাই গণঅভ্যুত্থান সাতক্ষীরা
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
          বাংলাদেশের ইতিহাসে জুলাই মাসের গণঅভ্যুত্থান ও ছাত্র আন্দোলনের স্মরণে।
          শিক্ষার্থীদের বিরুদ্ধে বৈষম্যের প্রতিবাদে গড়ে ওঠা ঐতিহাসিক আন্দোলনের সাক্ষী।
        </p>

        {/* Additional info cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-yellow-300 font-bold text-lg">৩৬ দিন</div>
            <div className="text-white/80 text-sm">আন্দোলনের সময়কাল</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-yellow-300 font-bold text-lg">শিক্ষার্থী</div>
            <div className="text-white/80 text-sm">আন্দোলনের মূল চালিকাশক্তি</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-yellow-300 font-bold text-lg">সফলতা</div>
            <div className="text-white/80 text-sm">দাবি আদায়ে সফলতা</div>
          </div>
        </div>
      </div>
    </div>
  );
} 