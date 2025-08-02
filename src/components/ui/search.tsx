"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Calendar data (same as in calendar-grid.tsx)
const calendarData = [
    { day: 1, title: "শুরুর দিন", description: "আন্দোলনের সূচনা", event: "শিক্ষার্থীদের প্রথম সমাবেশ", details: "জুলাই মাসের প্রথম দিনে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা প্রথমবারের মতো সমাবেশ করে বৈষম্যের বিরুদ্ধে প্রতিবাদ জানায়।" },
    { day: 2, title: "সংহতি", description: "একতা গড়ে তোলা", event: "বিভিন্ন বিশ্ববিদ্যালয়ের সমাবেশ", details: "দ্বিতীয় দিনে রাজশাহী, চট্টগ্রাম, সিলেটসহ বিভিন্ন বিশ্ববিদ্যালয়ের শিক্ষার্থীরা একত্রিত হয়ে আন্দোলনকে আরও শক্তিশালী করে তোলে।" },
    { day: 3, title: "প্রতিবাদ", description: "শান্তিপূর্ণ মিছিল", event: "রাজপথে শিক্ষার্থীদের আন্দোলন", details: "তৃতীয় দিনে শিক্ষার্থীরা রাজধানীর বিভিন্ন সড়কে শান্তিপূর্ণ মিছিল বের করে তাদের দাবি জানায়।" },
    { day: 4, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "চতুর্থ দিনে শিক্ষার্থীদের প্রতিনিধি দল সরকারের কাছে তাদের দাবি পেশ করে।" },
    { day: 5, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "পঞ্চম দিনে বিভিন্ন রাজনৈতিক দলের নেতারা শিক্ষার্থীদের আন্দোলনের প্রতি সমর্থন জানায়।" },
    { day: 6, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ", details: "ষষ্ঠ দিনে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে আরও দৃঢ় প্রতিরোধ গড়ে তোলে।" },
    { day: 7, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন", details: "সপ্তম দিনে বিভিন্ন ছাত্র সংগঠন একত্রিত হয়ে আন্দোলনকে আরও জোরদার করে।" },
    { day: 8, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত", details: "অষ্টম দিনে আন্দোলন আরও বিস্তৃত হয় এবং দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে।" },
    { day: 9, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল", details: "নবম দিনে শিক্ষার্থীরা রাজপথে বের হয়ে শান্তিপূর্ণ প্রতিবাদ জানায়।" },
    { day: 10, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "দশম দিনে শিক্ষার্থীদের দাবি আরও জোরদার হয় এবং সরকারের কাছে পেশ করা হয়।" },
    { day: 11, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "একাদশ দিনে বিভিন্ন রাজনৈতিক দল একত্রিত হয়ে শিক্ষার্থীদের পাশে দাঁড়ায়।" },
    { day: 12, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ", details: "দ্বাদশ দিনে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে আরও শক্তিশালী প্রতিরোধ গড়ে তোলে।" },
    { day: 13, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন", details: "ত্রয়োদশ দিনে বিভিন্ন ছাত্র সংগঠন একত্রিত হয়ে আন্দোলনকে আরও জোরদার করে।" },
    { day: 14, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত", details: "চতুর্দশ দিনে আন্দোলন আরও বিস্তৃত হয় এবং দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে।" },
    { day: 15, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল", details: "পঞ্চদশ দিনে শিক্ষার্থীরা রাজপথে বের হয়ে শান্তিপূর্ণ প্রতিবাদ জানায়।" },
    { day: 16, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "ষোড়শ দিনে শিক্ষার্থীদের দাবি আরও জোরদার হয় এবং সরকারের কাছে পেশ করা হয়।" },
    { day: 17, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "সপ্তদশ দিনে বিভিন্ন রাজনৈতিক দল একত্রিত হয়ে শিক্ষার্থীদের পাশে দাঁড়ায়।" },
    { day: 18, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ", details: "অষ্টাদশ দিনে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে আরও শক্তিশালী প্রতিরোধ গড়ে তোলে।" },
    { day: 19, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন", details: "ঊনবিংশ দিনে বিভিন্ন ছাত্র সংগঠন একত্রিত হয়ে আন্দোলনকে আরও জোরদার করে।" },
    { day: 20, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত", details: "বিংশ দিনে আন্দোলন আরও বিস্তৃত হয় এবং দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে।" },
    { day: 21, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল", details: "একবিংশ দিনে শিক্ষার্থীরা রাজপথে বের হয়ে শান্তিপূর্ণ প্রতিবাদ জানায়।" },
    { day: 22, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "দ্বাবিংশ দিনে শিক্ষার্থীদের দাবি আরও জোরদার হয় এবং সরকারের কাছে পেশ করা হয়।" },
    { day: 23, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "ত্রয়োবিংশ দিনে বিভিন্ন রাজনৈতিক দল একত্রিত হয়ে শিক্ষার্থীদের পাশে দাঁড়ায়।" },
    { day: 24, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ", details: "চতুর্দশ দিনে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে আরও শক্তিশালী প্রতিরোধ গড়ে তোলে।" },
    { day: 25, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন", details: "পঞ্চবিংশ দিনে বিভিন্ন ছাত্র সংগঠন একত্রিত হয়ে আন্দোলনকে আরও জোরদার করে।" },
    { day: 26, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত", details: "ষড়্বিংশ দিনে আন্দোলন আরও বিস্তৃত হয় এবং দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে।" },
    { day: 27, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল", details: "সপ্তবিংশ দিনে শিক্ষার্থীরা রাজপথে বের হয়ে শান্তিপূর্ণ প্রতিবাদ জানায়।" },
    { day: 28, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "অষ্টাবিংশ দিনে শিক্ষার্থীদের দাবি আরও জোরদার হয় এবং সরকারের কাছে পেশ করা হয়।" },
    { day: 29, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "ঊনত্রিংশ দিনে বিভিন্ন রাজনৈতিক দল একত্রিত হয়ে শিক্ষার্থীদের পাশে দাঁড়ায়।" },
    { day: 30, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ", details: "ত্রিংশ দিনে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে আরও শক্তিশালী প্রতিরোধ গড়ে তোলে।" },
    { day: 31, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন", details: "একত্রিংশ দিনে বিভিন্ন ছাত্র সংগঠন একত্রিত হয়ে আন্দোলনকে আরও জোরদার করে।" },
    { day: 32, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত", details: "দ্বাত্রিংশ দিনে আন্দোলন আরও বিস্তৃত হয় এবং দেশের বিভিন্ন প্রান্তে ছড়িয়ে পড়ে।" },
    { day: 33, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল", details: "ত্রয়োত্রিংশ দিনে শিক্ষার্থীরা রাজপথে বের হয়ে শান্তিপূর্ণ প্রতিবাদ জানায়।" },
    { day: 34, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ", details: "চতুস্ত্রিংশ দিনে শিক্ষার্থীদের দাবি আরও জোরদার হয় এবং সরকারের কাছে পেশ করা হয়।" },
    { day: 35, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ", details: "পঞ্চত্রিংশ দিনে বিভিন্ন রাজনৈতিক দল একত্রিত হয়ে শিক্ষার্থীদের পাশে দাঁড়ায়।" },
    { day: 36, title: "জয়", description: "আন্দোলনের বিজয়", event: "শিক্ষার্থীদের বিজয়", details: "ষট্ত্রিংশ দিনে শিক্ষার্থীদের আন্দোলন সফল হয় এবং তাদের দাবি মেনে নেওয়া হয়।" },
];

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [filteredResults, setFilteredResults] = useState<typeof calendarData>([]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredResults([]);
            return;
        }

        const results = calendarData.filter(item =>
            item.day.toString().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.event.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredResults(results);
    }, [searchTerm]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (filteredResults.length > 0) {
            // Navigate to first result
            window.location.href = `/day/${filteredResults[0].day}`;
        }
    };

    return (
        <div className="relative">
            {/* Search Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-20 right-4 z-40 bg-gradient-to-r from-red-600 to-yellow-500 text-white p-3 rounded-lg shadow-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {/* Search Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-20">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl animate-slideIn">
                        <div className="p-4 sm:p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                    দিন অনুসন্ধান করুন
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Search Form */}
                            <form onSubmit={handleSearch} className="mb-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="দিনের সংখ্যা, শিরোনাম বা বর্ণনা লিখুন..."
                                        className="w-full px-4 py-3 pl-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        autoFocus
                                    />
                                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </form>

                            {/* Search Results */}
                            <div className="max-h-96 overflow-y-auto">
                                {searchTerm.trim() === "" ? (
                                    <div className="text-center py-8">
                                        <div className="text-4xl mb-4">🔍</div>
                                        <p className="text-gray-600">দিনের সংখ্যা, শিরোনাম বা বর্ণনা লিখে অনুসন্ধান করুন</p>
                                    </div>
                                ) : filteredResults.length === 0 ? (
                                    <div className="text-center py-8">
                                        <div className="text-4xl mb-4">😕</div>
                                        <p className="text-gray-600">কোন ফলাফল পাওয়া যায়নি</p>
                                        <p className="text-sm text-gray-500 mt-2">অন্য শব্দ দিয়ে চেষ্টা করুন</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-600 mb-3">
                                            {filteredResults.length}টি ফলাফল পাওয়া গেছে
                                        </p>
                                        {filteredResults.map((item) => (
                                            <Link
                                                key={item.day}
                                                href={`/day/${item.day}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block p-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg hover:from-red-100 hover:to-yellow-100 transition-all duration-300 border border-red-200/50"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                            {item.day}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                            <p className="text-sm text-gray-600">{item.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Quick Links */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-3">দ্রুত লিংক</h4>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSearchTerm("শুরুর দিন")}
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                                    >
                                        দিন ১
                                    </button>
                                    <button
                                        onClick={() => setSearchTerm("শহীদ")}
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                                    >
                                        শহীদ দিবস
                                    </button>
                                    <button
                                        onClick={() => setSearchTerm("জয়")}
                                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm hover:bg-yellow-200 transition-colors"
                                    >
                                        বিজয়
                                    </button>
                                    <button
                                        onClick={() => setSearchTerm("মিছিল")}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                                    >
                                        মিছিল
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 