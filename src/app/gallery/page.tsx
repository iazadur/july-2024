"use client";
import { useState } from "react";
import Link from "next/link";

// Gallery data with real events from July 2024 student movement
const galleryData = [
    {
        id: 1,
        title: "দেশবাসীকে মুক্তি দিয়েছে বৈষম্যবিরোধী ছাত্র আন্দোলন",
        description: "জুলাই ২০২৪-এর ঐতিহাসিক ছাত্র আন্দোলন দেশের মানুষকে বৈষম্যের বিরুদ্ধে জাগ্রত করেছে",
        image: "/july/1.jpeg",
        date: "জুলাই ২০২৪",
        details: "জুলাই মাসে শুরু হওয়া ছাত্র আন্দোলন দেশের ইতিহাসে একটি গুরুত্বপূর্ণ মাইলফলক। এই আন্দোলনের মাধ্যমে শিক্ষার্থীরা বৈষম্যের বিরুদ্ধে রুখে দাঁড়িয়েছে এবং দেশের মানুষকে মুক্তির পথ দেখিয়েছে।",
        links: [
            { title: "বিস্তারিত পড়ুন", url: "https://share.google/OBNMEq0xbCYc2PNDT" },
            { title: "সম্পাদকীয়", url: "https://share.google/2RHuTpD1qHCKMGL0h" },
            { title: "ভিডিও দেখুন", url: "https://youtu.be/zGhUlyydo7E?si=jaICHLS3GXA4IZME" }
        ]
    },
    {
        id: 2,
        title: "আবু সাঈদ পুলিশের ইচ্ছাকৃত হত্যাকাণ্ডের শিকার",
        description: "শহীদ আবু সাঈদের স্মরণে জুলাই ১৬ তারিখ শহীদ দিবস হিসেবে ঘোষণা",
        image: "/july/3.jpeg",
        date: "জুলাই ১৬, ২০২৪",
        details: "আবু সাঈদ ছিলেন জুলাই আন্দোলনের একজন বীর শহীদ। পুলিশের গুলিতে তিনি শহীদ হন। তার স্মরণে জুলাই ১৬ তারিখ শহীদ দিবস হিসেবে ঘোষণা করা হয়েছে।",
        links: [
            { title: "বিস্তারিত পড়ুন", url: "https://share.google/8n9PYbwdYQF56Rfbf" },
            { title: "২৪ ঘণ্টা বাংলাদেশ", url: "https://share.google/VYRfY9zObQzjySUuv" },
            { title: "ভিডিও দেখুন", url: "https://youtu.be/FdwWlU4SSjs?si=gMNTQS5CN0pwctZQ" }
        ]
    },
    {
        id: 3,
        title: "পাদানিতে ঝুলতে থাকা গুলিবিদ্ধ নাফিজ",
        description: "রিকশার রড ধরে থাকা নাফিজের করুণ কাহিনী",
        image: "/july/riska.jpeg",
        date: "জুলাই ২০২৪",
        details: "নাফিজ ছিলেন আরেকজন বীর শহীদ। পুলিশের গুলিতে আহত হয়ে তিনি রিকশার রড ধরে ঝুলে থাকেন। এই ঘটনা দেশের মানুষকে গভীরভাবে নাড়া দেয়।",
        links: [
            { title: "বিস্তারিত পড়ুন", url: "https://share.google/H0OJVNyuxz5q8ENOb" },
            { title: "ভিডিও ১", url: "https://youtu.be/Rqjbp8cWbm4?si=tGXIhkbztaSykF0H" },
            { title: "ভিডিও ২", url: "https://youtu.be/xt7yChMHhiY?si=4i4UIpcd3CgPXO7f" },
            { title: "ভিডিও ৩", url: "https://youtu.be/-UdRPb8yKXI?si=5XGctD6N0arFgz13" }
        ]
    },
    {
        id: 4,
        title: "মীর মুগ্ধকে হত্যার ঘটনার ৪ মিনিটের ভিডিও",
        description: "মীর মুগ্ধ হত্যাকাণ্ডের ভয়াবহ মুহূর্ত",
        image: "/july/mugdho.jpeg",
        date: "জুলাই ২০২৪",
        details: "মীর মুগ্ধ হত্যাকাণ্ড জুলাই আন্দোলনের একটি অন্ধকার অধ্যায়। ৪ মিনিটের ভিডিওতে দেখা যায় কীভাবে একজন নিরপরাধ মানুষকে হত্যা করা হয়।",
        links: [
            { title: "বিস্তারিত পড়ুন", url: "https://share.google/98ue89z1ynkHDXmPv" }
        ]
    },
    {
        id: 5,
        title: "পুলিশের সাঁজোয়া যান থেকে মানুষ ফেলে দেওয়া",
        description: "মানবতা বিরোধী ঘটনার নৃশংস দৃশ্য",
        image: "/july/nafiz.jpeg",
        date: "জুলাই ২০২৪",
        details: "পুলিশের সাঁজোয়া যান থেকে একজন জীবন্ত মানুষকে ফেলে দেওয়ার ঘটনা দেশের মানুষকে স্তম্ভিত করে দেয়। এই ঘটনা মানবতা বিরোধী কর্মকাণ্ডের একটি জ্বলন্ত উদাহরণ।",
        links: [
            { title: "বিস্তারিত পড়ুন", url: "https://share.google/QRVS2Ieee5w4Had3a" },
            { title: "ভিডিও দেখুন", url: "https://youtu.be/r4ueavsPSm8?si=o6RAFsYXYlYQRJsG" }
        ]
    },
    {
        id: 6,
        title: "শেখ হাসিনার পালিয়ে যাওয়ার মুহূর্ত",
        description: "BBC News বাংলার বিশেষ প্রতিবেদন",
        image: "/july/hasina-apa.jpeg",
        date: "জুলাই ২০২৪",
        details: "BBC News বাংলার বিশেষ প্রতিবেদনে শেখ হাসিনার পালিয়ে যাওয়ার আগের কয়েক ঘণ্টার ঘটনা তুলে ধরা হয়েছে। এই প্রতিবেদন দেশের রাজনৈতিক পরিস্থিতি সম্পর্কে গুরুত্বপূর্ণ তথ্য প্রদান করে।",
        links: [
            { title: "BBC প্রতিবেদন", url: "https://share.google/qMUfm9ELrX6vudXXi" },
            { title: "অতিরিক্ত তথ্য", url: "https://share.google/bzs6p8YpfRIXRFZ7v" },
            { title: "ভিডিও ১", url: "https://youtu.be/MzYMh7exOsE?si=CRsjdWkZkcetQl29" },
            { title: "ভিডিও ২", url: "https://youtu.be/kMG0s49U6Rw?si=CIyGdN3kFdl0Bmmx" }
        ]
    }
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);

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
                        জুলাই গণঅভ্যুত্থান গ্যালারি
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        ঐতিহাসিক জুলাই ২০২৪ ছাত্র আন্দোলনের গুরুত্বপূর্ণ মুহূর্তগুলি
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 cursor-pointer animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-2 left-2 right-2">
                                    <div className="text-white text-xs sm:text-sm font-semibold bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                                        {item.date}
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 sm:p-4 md:p-6">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="mt-3 sm:mt-4">
                                    <button className="text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
                                        বিস্তারিত দেখুন →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Image Details */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="relative">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-xl sm:rounded-t-2xl"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 md:p-8">
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                            {selectedImage.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-600 mb-3">
                                            {selectedImage.description}
                                        </p>
                                        <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 rounded-lg px-3 py-2 inline-block">
                                            {selectedImage.date}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-red-200/50">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
                                            বিস্তারিত বিবরণ
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {selectedImage.details}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3">
                                            সম্পর্কিত লিংকসমূহ
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                            {selectedImage.links.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block px-3 sm:px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-xs sm:text-sm font-semibold rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-center transform hover:scale-105"
                                                >
                                                    {link.title}
                                                </a>
                                            ))}
                                        </div>
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