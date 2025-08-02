"use client";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-red-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center p-2 sm:p-4 md:p-8">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 animate-fadeIn">
                    <Link
                        href="/"
                        className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 text-sm sm:text-base mb-4"
                    >
                        ← ফিরে যান
                    </Link>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-2xl leading-tight">
                        জুলাই গণঅভ্যুত্থান সম্পর্কে
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        ঐতিহাসিক জুলাই ২০২৪ ছাত্র আন্দোলনের ডিজিটাল আর্কাইভ
                    </p>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
                    {/* Project Overview */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="text-center mb-6">
                            <div className="text-4xl sm:text-5xl mb-4">🇧🇩</div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                প্রকল্পের উদ্দেশ্য
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                জুলাই গণঅভ্যুত্থান ক্যালেন্ডার হল একটি ডিজিটাল আর্কাইভ যা ২০২৪ সালের জুলাই মাসে সংঘটিত ঐতিহাসিক ছাত্র আন্দোলনের প্রতিটি দিনের ঘটনাবলী সংরক্ষণ করে। এই প্রকল্পের মূল উদ্দেশ্য হল:
                            </p>

                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>শিক্ষার্থীদের আন্দোলনের ঐতিহাসিক গুরুত্ব তুলে ধরা</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>বৈষম্যের বিরুদ্ধে সংগ্রামের স্মৃতি সংরক্ষণ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>ভবিষ্যৎ প্রজন্মের জন্য শিক্ষণীয় উপাদান তৈরি</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>ডিজিটাল মাধ্যমে ইতিহাস সংরক্ষণ</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Historical Context */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <div className="text-center mb-6">
                            <div className="text-4xl sm:text-5xl mb-4">📚</div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                ঐতিহাসিক প্রেক্ষাপট
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                ২০২৪ সালের জুলাই মাসে বাংলাদেশে একটি ঐতিহাসিক ছাত্র আন্দোলন সংঘটিত হয়। শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে রুখে দাঁড়ায় এবং তাদের অধিকারের জন্য সংগ্রাম করে। এই আন্দোলন দেশের ইতিহাসে একটি গুরুত্বপূর্ণ মাইলফলক হিসেবে বিবেচিত হয়।
                            </p>

                            <p>
                                আন্দোলনের সময় শিক্ষার্থীরা শান্তিপূর্ণভাবে তাদের দাবি জানায়। তারা রাজপথে নেমে আসে, সমাবেশ করে এবং সরকারের কাছে তাদের দাবি পেশ করে। এই আন্দোলনে অনেক শিক্ষার্থী শহীদ হন এবং আহত হন।
                            </p>

                            <p>
                                জুলাই গণঅভ্যুত্থান শুধুমাত্র একটি আন্দোলনই নয়, এটি ছিল দেশের মানুষের মুক্তির সংগ্রাম। এই আন্দোলনের মাধ্যমে শিক্ষার্থীরা দেশের মানুষকে জাগ্রত করে এবং বৈষম্যের বিরুদ্ধে রুখে দাঁড়াতে অনুপ্রাণিত করে।
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                        <div className="text-center mb-6">
                            <div className="text-4xl sm:text-5xl mb-4">✨</div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                প্রকল্পের বৈশিষ্ট্য
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">📅</div>
                                <h3 className="font-bold text-gray-800 mb-2">৩৬ দিনের ক্যালেন্ডার</h3>
                                <p className="text-sm text-gray-600">প্রতিটি দিনের বিস্তারিত ঘটনাবলী</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">🖼️</div>
                                <h3 className="font-bold text-gray-800 mb-2">ফটো গ্যালারি</h3>
                                <p className="text-sm text-gray-600">ঐতিহাসিক ছবি ও ভিডিও</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">⏰</div>
                                <h3 className="font-bold text-gray-800 mb-2">টাইমলাইন</h3>
                                <p className="text-sm text-gray-600">ঘটনাবলীর সময়রেখা</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">📱</div>
                                <h3 className="font-bold text-gray-800 mb-2">মোবাইল ফ্রেন্ডলি</h3>
                                <p className="text-sm text-gray-600">সব ডিভাইসে ব্যবহারযোগ্য</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">🎨</div>
                                <h3 className="font-bold text-gray-800 mb-2">ইন্টারেক্টিভ</h3>
                                <p className="text-sm text-gray-600">অ্যানিমেশন ও হোভার ইফেক্ট</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-4 border border-red-200/50">
                                <div className="text-2xl mb-2">🌐</div>
                                <h3 className="font-bold text-gray-800 mb-2">অনলাইন অ্যাক্সেস</h3>
                                <p className="text-sm text-gray-600">সবাই দেখতে পারবে</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                        <div className="text-center mb-6">
                            <div className="text-4xl sm:text-5xl mb-4">⚙️</div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                প্রযুক্তিগত বিবরণ
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-3">ব্যবহৃত প্রযুক্তি</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Next.js 15 (React Framework)</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• Framer Motion (Animation)</li>
                                    <li>• Responsive Design</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800 mb-3">বৈশিষ্ট্য</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Progressive Web App (PWA)</li>
                                    <li>• SEO Optimized</li>
                                    <li>• Fast Loading</li>
                                    <li>• Cross-browser Compatible</li>
                                    <li>• Accessibility Features</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Links */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
                        <div className="text-center mb-6">
                            <div className="text-4xl sm:text-5xl mb-4">📞</div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                যোগাযোগ ও লিংক
                            </h2>
                            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="text-center">
                                <h3 className="font-bold text-gray-800 mb-3">প্রকল্প সম্পর্কে</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    এই প্রকল্পটি বাংলাদেশ সরকারের উদ্যোগে তৈরি করা হয়েছে।
                                    শিক্ষার্থীদের আন্দোলনের স্মৃতি সংরক্ষণের জন্য এই ডিজিটাল আর্কাইভ তৈরি করা হয়েছে।
                                </p>
                                <div className="flex justify-center gap-2">
                                    <span className="text-2xl">🇧🇩</span>
                                    <span className="text-sm text-gray-600">বাংলাদেশ সরকার</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="font-bold text-gray-800 mb-3">গুরুত্বপূর্ণ লিংক</h3>
                                <div className="space-y-2">
                                    <Link
                                        href="/"
                                        className="block px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-sm font-semibold"
                                    >
                                        ক্যালেন্ডার দেখুন
                                    </Link>
                                    <Link
                                        href="/gallery"
                                        className="block px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-sm font-semibold"
                                    >
                                        গ্যালারি দেখুন
                                    </Link>
                                    <Link
                                        href="/timeline"
                                        className="block px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-sm font-semibold"
                                    >
                                        টাইমলাইন দেখুন
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center space-y-4 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                            <p className="text-white/90 text-sm sm:text-base">
                                © ২০২৪ বাংলাদেশ সরকার - জুলাই গণঅভ্যুত্থান আর্কাইভ
                            </p>
                            <p className="text-white/70 text-xs sm:text-sm mt-2">
                                এই প্রকল্পটি শিক্ষার্থীদের আন্দোলনের স্মৃতি সংরক্ষণের জন্য তৈরি করা হয়েছে
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 