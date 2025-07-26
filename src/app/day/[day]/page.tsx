"use client";
import { useMemo, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

// Calendar data with real events from July 2024 student movement
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

// Background images for slideshow
const backgroundImages = [
  "/july/1.jpeg",
  "/july/2.jpeg",
  "/july/3.jpeg",
  "/july/4.jpeg",
  "/july/5.jpeg",
  "/july/6.jpeg",
];

export default function DayPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dayStr = params?.day ? String(params.day) : undefined;
  const dayNum = useMemo(() => {
    const n = dayStr ? parseInt(dayStr, 10) : NaN;
    return isNaN(n) ? null : n;
  }, [dayStr]);

  const dayData = useMemo(() => {
    return calendarData.find(item => item.day === dayNum);
  }, [dayNum]);

  // Auto-rotate background images
  useEffect(() => {
    if (!dayNum) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [dayNum]);

  if (!dayNum || dayNum < 1 || dayNum > 36) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 p-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center gap-6 animate-fadeIn">
          <Link
            href="/"
            className="self-start mb-2 px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
          >
            ← ফিরে যান
          </Link>
          <div className="text-3xl font-bold text-red-700">অবৈধ দিন</div>
          <div className="text-lg text-gray-700 text-center">
            দিনের সংখ্যা সঠিক নয়। অনুগ্রহ করে ক্যালেন্ডার থেকে একটি বৈধ দিন নির্বাচন করুন।
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl w-full flex flex-col items-center gap-8 animate-fadeIn">
          {/* Navigation */}
          <div className="w-full flex justify-between items-center">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              ← ফিরে যান
            </Link>

            <div className="flex gap-2">
              {dayNum > 1 && (
                <Link
                  href={`/day/${dayNum - 1}`}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold shadow"
                >
                  ← পূর্ববর্তী
                </Link>
              )}
              {dayNum < 36 && (
                <Link
                  href={`/day/${dayNum + 1}`}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold shadow"
                >
                  পরবর্তী →
                </Link>
              )}
            </div>
          </div>

          {/* Day Header */}
          <div className="text-center space-y-4">
            <div className="text-6xl md:text-8xl font-extrabold text-red-700 drop-shadow-lg">
              দিন {dayNum}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              {dayData?.title}
            </div>
            <div className="text-lg text-gray-600">
              {dayData?.description}
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Image Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="w-full space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {dayData?.event}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 border border-red-200/50">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {dayData?.details}
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>দিন {dayNum} / 36</span>
              <span>{Math.round((dayNum / 36) * 100)}% সম্পন্ন</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(dayNum / 36) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 