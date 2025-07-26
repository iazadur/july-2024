import Logo from "@/components/ui/logo";
import CalendarGrid from "@/components/ui/calendar-grid";
import Banner from "@/components/ui/banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-red-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Additional floating elements for larger screens */}
        <div className="hidden md:block absolute top-1/3 left-1/6 w-8 h-8 bg-yellow-400/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden md:block absolute top-2/3 right-1/6 w-6 h-6 bg-red-400/5 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8">
        {/* Header Section */}
        <div className="text-center space-y-2 sm:space-y-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <Logo />

          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight px-2">
              জুলাই গণঅভ্যুত্থান
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-lg">
              ৩৬ দিনের ক্যালেন্ডার
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              শিক্ষার্থীদের বিরুদ্ধে বৈষম্যের প্রতিবাদে জুলাই ২০২৪-এর ঐতিহাসিক আন্দোলনের দিনগুলি
            </p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="w-full space-y-4 sm:space-y-6">
          <div className="text-center space-y-1 sm:space-y-2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              প্রতিদিনের ঘটনাবলী
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base px-4">
              প্রতিটি দিনে ক্লিক করে বিস্তারিত জানুন
            </p>
          </div>

          <div className="w-full p-2 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-800/30 to-yellow-600/30 backdrop-blur-md border border-red-200/20 shadow-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <CalendarGrid />
          </div>
        </div>

        {/* Banner Section */}
        <div className="w-full animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <Banner />
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-3 sm:space-y-4 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-white/80 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>শিক্ষার্থীদের আন্দোলন</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>বৈষম্যের বিরুদ্ধে প্রতিবাদ</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>একতা ও সংহতি</span>
            </div>
          </div>

          <p className="text-white/60 text-xs sm:text-sm px-4">
            © ২০২৪ বাংলাদেশ সরকার - শিক্ষার্থীদের আন্দোলন আর্কাইভ
          </p>
        </div>
      </div>
    </main>
  );
}
