import Logo from "@/components/ui/logo";
import CalendarGrid from "@/components/ui/calendar-grid";
import Banner from "@/components/ui/banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-red-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 py-8">
        {/* Header Section */}
        <div className="text-center space-y-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <Logo />

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
              জুলাই গণঅভ্যুত্থান
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow-lg">
              ৩৬ দিনের ক্যালেন্ডার
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              শিক্ষার্থীদের বিরুদ্ধে বৈষম্যের প্রতিবাদে জুলাই ২০২৪-এর ঐতিহাসিক আন্দোলনের দিনগুলি
            </p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="w-full space-y-6">
          <div className="text-center space-y-2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              প্রতিদিনের ঘটনাবলী
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              প্রতিটি দিনে ক্লিক করে বিস্তারিত জানুন
            </p>
          </div>

          <div className="w-full p-6 rounded-2xl bg-gradient-to-br from-red-800/30 to-yellow-600/30 backdrop-blur-md border border-red-200/20 shadow-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <CalendarGrid />
          </div>
        </div>

        {/* Banner Section */}
        <div className="w-full animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <Banner />
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-4 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>শিক্ষার্থীদের আন্দোলন</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>বৈষম্যের বিরুদ্ধে প্রতিবাদ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>একতা ও সংহতি</span>
            </div>
          </div>

          <p className="text-white/60 text-xs">
            © ২০২৪ বাংলাদেশ সরকার - শিক্ষার্থীদের আন্দোলন আর্কাইভ
          </p>
        </div>
      </div>
    </main>
  );
}
