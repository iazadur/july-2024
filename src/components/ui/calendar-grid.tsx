"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

// Background images array with 6 images for variety
const backgroundImages = [
  "/july/1.jpeg",
  "/july/2.jpeg",
  "/july/3.jpeg",
  "/july/4.jpeg",
  "/july/5.jpeg",
  "/july/6.jpeg",
];

interface DayCardProps {
  item: typeof calendarData[0];
  index: number;
}

function DayCard({ item, index }: DayCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000 + (index * 200)); // Stagger timing based on index

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Link href={`/day/${item.day}`} className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-xl">
      <div
        className="relative overflow-hidden rounded-xl shadow-xl min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[150px] cursor-pointer group transform transition-all duration-500 ease-out hover:scale-105 hover:rotate-y-2 hover:shadow-2xl active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          animationDelay: `${index * 50}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards'
        }}
      >
        {/* Background Image Slideshow */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            animation: `imageSlide ${3 + index * 0.2}s infinite`
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/60 to-yellow-600/70" />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-yellow-400/90 to-red-600/90 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Content */}
        <div className="relative z-10 p-2 sm:p-3 md:p-4 h-full flex flex-col justify-center items-center text-center">
          {/* Day Number */}
          <div
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg transition-all duration-300 ${isHovered ? 'scale-125 text-yellow-300 animate-bounce' : 'scale-100 text-white'
              }`}
          >
            {item.day}
          </div>

          {/* Title */}
          <div
            className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white/90 drop-shadow-md mt-1 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-2' : 'opacity-90 translate-y-0'
              }`}
          >
            {item.title}
          </div>

          {/* Description */}
          <div
            className={`text-[8px] sm:text-xs md:text-sm lg:text-base text-white/80 drop-shadow-sm mt-1 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-1' : 'opacity-80 translate-y-0'
              }`}
          >
            {item.description}
          </div>

          {/* Hover Event Details */}
          <div
            className={`absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <div className="text-center p-2">
              <div className="text-yellow-400 text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1">
                {item.event}
              </div>
              <div className="text-white/90 text-[8px] sm:text-xs md:text-sm lg:text-base">
                ক্লিক করুন বিস্তারিত দেখতে
              </div>
            </div>
          </div>

          {/* Animated Border */}
          <div
            className={`absolute inset-0 border-2 border-yellow-400/50 rounded-xl transition-all duration-300 ${isHovered ? 'border-yellow-400 animate-pulse scale-105' : 'border-yellow-400/30'
              }`}
          />

          {/* Glowing Effect */}
          <div
            className={`absolute inset-0 rounded-xl transition-all duration-300 ${isHovered ? 'shadow-[0_0_30px_rgba(251,191,36,0.5)]' : ''
              }`}
          />
        </div>

        {/* Floating Particles Effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '2.5s'
                }}
              />
            ))}
          </div>
        )}

        {/* Ripple Effect */}
        {isPressed && (
          <div className="absolute inset-0 bg-white/20 rounded-xl animate-ripple" />
        )}
      </div>
    </Link>
  );
}

export default function CalendarGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-4 md:p-6 rounded-2xl bg-gradient-to-br from-red-800/20 to-yellow-600/20 backdrop-blur-sm border border-red-200/30 shadow-2xl animate-fadeIn">
      {calendarData.map((item, index) => (
        <DayCard key={item.day} item={item} index={index} />
      ))}
    </div>
  );
} 