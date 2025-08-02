"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Gallery data (same as in gallery page)
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

export default function GalleryDetailPage() {
    const params = useParams();
    const [item, setItem] = useState<typeof galleryData[0] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = parseInt(params.id as string);
        const foundItem = galleryData.find(item => item.id === id);
        setItem(foundItem || null);
        setLoading(false);
    }, [params.id]);

    if (loading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 flex items-center justify-center">
                <div className="text-white text-xl">লোড হচ্ছে...</div>
            </main>
        );
    }

    if (!item) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">কন্টেন্ট খুঁজে পাওয়া যায়নি</h1>
                    <Link href="/gallery" className="bg-white/20 px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
                        গ্যালারিতে ফিরে যান
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 right-1/3 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-red-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative z-10 min-h-screen p-4 sm:p-6 md:p-8">
                {/* Navigation */}
                <div className="mb-6 sm:mb-8">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 text-sm sm:text-base"
                    >
                        ← গ্যালারিতে ফিরে যান
                    </Link>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Hero Image Section */}
                    <div className="relative mb-8 sm:mb-12 animate-fadeIn">
                        <div className="relative h-64 sm:h-96 md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                            {/* Calligraphy-style title overlay */}
                            <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-6 sm:left-8 md:left-12 right-6 sm:right-8 md:right-12">
                                <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight" style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                        {item.title}
                                    </h1>
                                    <div className="flex items-center space-x-4 text-white/90">
                                        <span className="bg-red-600/80 px-3 py-1 rounded-full text-sm font-medium">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                            {/* Description Card */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                                <div className="border-l-4 border-red-600 pl-4 sm:pl-6 mb-6">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'serif' }}>
                                        সংক্ষিপ্ত বিবরণ
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'serif', lineHeight: '1.8' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-red-200/50 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                                <div className="border-l-4 border-yellow-600 pl-4 sm:pl-6">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                        বিস্তারিত বিবরণ
                                    </h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'serif', lineHeight: '1.8' }}>
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Links Section */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6" style={{ fontFamily: 'serif' }}>
                                    সম্পর্কিত লিংকসমূহ
                                </h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {item.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 text-center transform hover:scale-105 shadow-lg text-sm sm:text-base"
                                            style={{ fontFamily: 'serif' }}
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Date Info */}
                            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 border border-yellow-200/50 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'serif' }}>
                                    তারিখ ও সময়
                                </h3>
                                <div className="bg-white/80 rounded-lg px-4 py-3 text-center">
                                    <p className="text-base sm:text-lg font-bold text-red-800" style={{ fontFamily: 'serif' }}>
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
