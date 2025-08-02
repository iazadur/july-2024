"use client";
import { useState } from "react";
import Link from "next/link";

// Timeline data with real events from July 2024 student movement
const timelineData = [
    {
        id: 1,
        date: "জুলাই ১, ২০২৪",
        day: 1,
        title: "আন্দোলনের সূচনা",
        description: "ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদের প্রথম সমাবেশ",
        details: "জুলাই মাসের প্রথম দিনে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা প্রথমবারের মতো সমাবেশ করে বৈষম্যের বিরুদ্ধে প্রতিবাদ জানায়। এই দিন থেকেই শুরু হয় ঐতিহাসিক জুলাই গণঅভ্যুত্থান।",
        category: "সমাবেশ",
        icon: "🎯",
        color: "from-red-500 to-red-600"
    },
    {
        id: 2,
        date: "জুলাই ২, ২০২৪",
        day: 2,
        title: "সংহতি গড়ে তোলা",
        description: "বিভিন্ন বিশ্ববিদ্যালয়ের সমাবেশ",
        details: "দ্বিতীয় দিনে রাজশাহী, চট্টগ্রাম, সিলেটসহ বিভিন্ন বিশ্ববিদ্যালয়ের শিক্ষার্থীরা একত্রিত হয়ে আন্দোলনকে আরও শক্তিশালী করে তোলে। দেশের বিভিন্ন প্রান্ত থেকে শিক্ষার্থীরা যোগ দেয়।",
        category: "একতা",
        icon: "🤝",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 3,
        date: "জুলাই ৩, ২০২৪",
        day: 3,
        title: "রাজপথে আন্দোলন",
        description: "শান্তিপূর্ণ মিছিল ও প্রতিবাদ",
        details: "তৃতীয় দিনে শিক্ষার্থীরা রাজধানীর বিভিন্ন সড়কে শান্তিপূর্ণ মিছিল বের করে তাদের দাবি জানায়। রাজপথে শিক্ষার্থীদের উপস্থিতি দেশের মানুষকে জাগ্রত করে।",
        category: "মিছিল",
        icon: "🚶",
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 4,
        date: "জুলাই ৪, ২০২৪",
        day: 4,
        title: "সরকারের কাছে দাবি",
        description: "শিক্ষার্থীদের প্রতিনিধি দলের সাক্ষাৎ",
        details: "চতুর্থ দিনে শিক্ষার্থীদের প্রতিনিধি দল সরকারের কাছে তাদের দাবি পেশ করে। বৈষম্যের বিরুদ্ধে শিক্ষার্থীদের দাবি সরকারের কাছে পৌঁছায়।",
        category: "দাবি",
        icon: "📋",
        color: "from-green-500 to-green-600"
    },
    {
        id: 5,
        date: "জুলাই ৫, ২০২৪",
        day: 5,
        title: "সর্বদলীয় সমর্থন",
        description: "রাজনৈতিক দলগুলির সমর্থন",
        details: "পঞ্চম দিনে বিভিন্ন রাজনৈতিক দলের নেতারা শিক্ষার্থীদের আন্দোলনের প্রতি সমর্থন জানায়। দেশের রাজনৈতিক মহল শিক্ষার্থীদের পাশে দাঁড়ায়।",
        category: "সমর্থন",
        icon: "🏛️",
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 6,
        date: "জুলাই ৬-১০, ২০২৪",
        day: 6,
        title: "আন্দোলনের বিস্তার",
        description: "দেশব্যাপী ছড়িয়ে পড়া আন্দোলন",
        details: "ষষ্ঠ থেকে দশম দিন পর্যন্ত আন্দোলন দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে। প্রতিটি বিশ্ববিদ্যালয়, কলেজে শিক্ষার্থীরা যোগ দেয়।",
        category: "বিস্তার",
        icon: "🌍",
        color: "from-indigo-500 to-indigo-600"
    },
    {
        id: 7,
        date: "জুলাই ১১-১৫, ২০২৪",
        day: 11,
        title: "জোরদার প্রতিবাদ",
        description: "শিক্ষার্থীদের দৃঢ় অবস্থান",
        details: "একাদশ থেকে পঞ্চদশ দিন পর্যন্ত শিক্ষার্থীরা তাদের দাবি নিয়ে আরও দৃঢ়ভাবে প্রতিবাদ জানায়। আন্দোলন আরও জোরদার হয়।",
        category: "প্রতিবাদ",
        icon: "⚡",
        color: "from-red-600 to-red-700"
    },
    {
        id: 8,
        date: "জুলাই ১৬, ২০২৪",
        day: 16,
        title: "শহীদ দিবস",
        description: "আবু সাঈদের শহীদ হওয়া",
        details: "ষোড়শ দিনে আবু সাঈদ পুলিশের গুলিতে শহীদ হন। এই দিনটি শহীদ দিবস হিসেবে পালিত হয়। দেশের মানুষ গভীরভাবে শোকাহত হয়।",
        category: "শহীদ",
        icon: "🕊️",
        color: "from-gray-500 to-gray-600"
    },
    {
        id: 9,
        date: "জুলাই ১৭-২০, ২০২৪",
        day: 17,
        title: "দেশব্যাপী প্রতিক্রিয়া",
        description: "শহীদ আবু সাঈদের স্মরণে আন্দোলন",
        details: "সপ্তদশ থেকে বিংশ দিন পর্যন্ত দেশব্যাপী আবু সাঈদের স্মরণে আন্দোলন জোরদার হয়। মানুষ রাস্তায় নেমে আসে।",
        category: "প্রতিক্রিয়া",
        icon: "🔥",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 10,
        date: "জুলাই ২১-২৫, ২০২৪",
        day: 21,
        title: "সরকারের পাল্টা পদক্ষেপ",
        description: "নানা ধরনের পদক্ষেপ",
        details: "একবিংশ থেকে পঞ্চবিংশ দিন পর্যন্ত সরকার নানা ধরনের পদক্ষেপ নেয়। কিন্তু শিক্ষার্থীদের আন্দোলন অব্যাহত থাকে।",
        category: "সরকারি পদক্ষেপ",
        icon: "🏛️",
        color: "from-blue-600 to-blue-700"
    },
    {
        id: 11,
        date: "জুলাই ২৬-৩০, ২০২৪",
        day: 26,
        title: "আন্দোলনের চূড়ান্ত পর্যায়",
        description: "শিক্ষার্থীদের বিজয়ের দিকে",
        details: "ষড়্বিংশ থেকে ত্রিংশ দিন পর্যন্ত আন্দোলন চূড়ান্ত পর্যায়ে পৌঁছায়। শিক্ষার্থীদের দাবি মেনে নেওয়ার দিকে সরকার এগোয়।",
        category: "চূড়ান্ত পর্যায়",
        icon: "🎯",
        color: "from-green-600 to-green-700"
    },
    {
        id: 12,
        date: "জুলাই ৩১-আগস্ট ৫, ২০২৪",
        day: 31,
        title: "আন্দোলনের বিজয়",
        description: "শিক্ষার্থীদের দাবি মেনে নেওয়া",
        details: "একত্রিংশ দিন থেকে আগস্টের প্রথম সপ্তাহ পর্যন্ত শিক্ষার্থীদের দাবি মেনে নেওয়া হয়। জুলাই গণঅভ্যুত্থান সফল হয়।",
        category: "বিজয়",
        icon: "🏆",
        color: "from-yellow-500 to-yellow-600"
    }
];

export default function TimelinePage() {
    const [selectedEvent, setSelectedEvent] = useState<typeof timelineData[0] | null>(null);
    const [filter, setFilter] = useState<string>("সব");

    const categories = ["সব", ...Array.from(new Set(timelineData.map(item => item.category)))];
    const filteredData = filter === "সব" ? timelineData : timelineData.filter(item => item.category === filter);

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
                        জুলাই গণঅভ্যুত্থান টাইমলাইন
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        ঐতিহাসিক জুলাই ২০২৪ ছাত্র আন্দোলনের সময়রেখা
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${filter === category
                                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                                    : 'bg-white/20 text-white/90 hover:bg-white/30 backdrop-blur-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="w-full max-w-6xl">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 to-red-600"></div>

                        {/* Timeline Events */}
                        <div className="space-y-6 sm:space-y-8">
                            {filteredData.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`relative flex items-start gap-4 sm:gap-6 md:gap-8 animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${event.color} shadow-lg flex items-center justify-center text-white font-bold text-sm sm:text-base`}>
                                            {event.day}
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 animate-ping opacity-75"></div>
                                    </div>

                                    {/* Event Card */}
                                    <div
                                        className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                                        onClick={() => setSelectedEvent(event)}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="text-2xl sm:text-3xl">{event.icon}</span>
                                                <div>
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-gray-600">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 rounded-lg px-2 py-1">
                                                    {event.category}
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                                                    {event.date}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3">
                                            {event.details}
                                        </p>

                                        <div className="mt-3 sm:mt-4 flex items-center justify-between">
                                            <Link
                                                href={`/day/${event.day}`}
                                                className="text-sm sm:text-base font-semibold text-red-600 hover:text-red-700 transition-colors"
                                            >
                                                বিস্তারিত দেখুন →
                                            </Link>
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs text-gray-500">দিন {event.day}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal for Event Details */}
                {selectedEvent && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-4 sm:p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl sm:text-4xl">{selectedEvent.icon}</span>
                                        <div>
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                                                {selectedEvent.title}
                                            </h2>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                {selectedEvent.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-sm sm:text-base text-gray-600">
                                        <span className="bg-gray-100 rounded-lg px-3 py-1">
                                            {selectedEvent.date}
                                        </span>
                                        <span className="bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg px-3 py-1">
                                            {selectedEvent.category}
                                        </span>
                                        <span className="bg-blue-100 rounded-lg px-3 py-1">
                                            দিন {selectedEvent.day}
                                        </span>
                                    </div>

                                    <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-200/50">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                                            বিস্তারিত বিবরণ
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {selectedEvent.details}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Link
                                            href={`/day/${selectedEvent.day}`}
                                            className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 font-semibold transform hover:scale-105"
                                        >
                                            দিনের বিস্তারিত দেখুন
                                        </Link>
                                        <button
                                            onClick={() => setSelectedEvent(null)}
                                            className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold"
                                        >
                                            বন্ধ করুন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
} 