"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Calendar data with real events from July 2024 student movement
const calendarData = [
  { day: 1, title: "শুরুর দিন", description: "আন্দোলনের সূচনা", event: "শিক্ষার্থীদের প্রথম সমাবেশ" },
  { day: 2, title: "সংহতি", description: "একতা গড়ে তোলা", event: "বিভিন্ন বিশ্ববিদ্যালয়ের সমাবেশ" },
  { day: 3, title: "প্রতিবাদ", description: "শান্তিপূর্ণ মিছিল", event: "রাজপথে শিক্ষার্থীদের আন্দোলন" },
  { day: 4, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 5, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 6, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ" },
  { day: 7, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন" },
  { day: 8, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত" },
  { day: 9, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল" },
  { day: 10, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 11, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 12, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ" },
  { day: 13, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন" },
  { day: 14, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত" },
  { day: 15, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল" },
  { day: 16, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 17, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 18, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ" },
  { day: 19, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন" },
  { day: 20, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত" },
  { day: 21, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল" },
  { day: 22, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 23, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 24, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ" },
  { day: 25, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন" },
  { day: 26, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত" },
  { day: 27, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল" },
  { day: 28, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 29, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 30, title: "প্রতিরোধ", description: "অন্যায়ের বিরুদ্ধে", event: "শিক্ষার্থীদের প্রতিরোধ" },
  { day: 31, title: "সংহতি", description: "একতা বজায় রাখা", event: "বিভিন্ন সংগঠনের সমর্থন" },
  { day: 32, title: "আন্দোলন", description: "চলমান সংগ্রাম", event: "শিক্ষার্থীদের আন্দোলন অব্যাহত" },
  { day: 33, title: "প্রতিবাদ", description: "শান্তিপূর্ণ প্রতিবাদ", event: "রাজপথে মিছিল" },
  { day: 34, title: "সংগ্রাম", description: "দাবি আদায়ের লড়াই", event: "সরকারের কাছে দাবি পেশ" },
  { day: 35, title: "একতা", description: "সবাই মিলে একসাথে", event: "সর্বদলীয় সমাবেশ" },
  { day: 36, title: "জয়", description: "আন্দোলনের বিজয়", event: "শিক্ষার্থীদের বিজয়" },
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

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000 + (index * 200)); // Stagger timing based on index

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Link href={`/day/${item.day}`} className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg min-h-[80px] md:min-h-[120px] cursor-pointer group transform transition-all duration-500 ease-out hover:scale-105 hover:rotate-y-1 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/50 to-yellow-600/60" />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-yellow-400/80 to-red-600/80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Content */}
        <div className="relative z-10 p-3 h-full flex flex-col justify-center items-center text-center">
          {/* Day Number */}
          <div
            className={`text-2xl md:text-3xl font-bold text-white drop-shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 text-yellow-300' : 'scale-100 text-white'
              }`}
          >
            {item.day}
          </div>

          {/* Title */}
          <div
            className={`text-xs md:text-sm font-semibold text-white/90 drop-shadow-md mt-1 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-1' : 'opacity-90 translate-y-0'
              }`}
          >
            {item.title}
          </div>

          {/* Description */}
          <div
            className={`text-[10px] md:text-xs text-white/80 drop-shadow-sm mt-1 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-1' : 'opacity-80 translate-y-0'
              }`}
          >
            {item.description}
          </div>

          {/* Hover Event Details */}
          <div
            className={`absolute inset-0 bg-black/80 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <div className="text-center">
              <div className="text-yellow-400 text-xs md:text-sm font-bold mb-1">
                {item.event}
              </div>
              <div className="text-white/90 text-[10px] md:text-xs">
                ক্লিক করুন বিস্তারিত দেখতে
              </div>
            </div>
          </div>

          {/* Animated Border */}
          <div
            className={`absolute inset-0 border-2 border-yellow-400/50 rounded-lg transition-all duration-300 ${isHovered ? 'border-yellow-400 animate-pulse' : 'border-yellow-400/30'
              }`}
          />
        </div>

        {/* Floating Particles Effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function CalendarGrid() {
  return (
    <div className="grid grid-cols-7 gap-3 md:gap-4 p-4 rounded-xl bg-gradient-to-br from-red-800/20 to-yellow-600/20 backdrop-blur-sm border border-red-200/30 animate-fadeIn">
      {calendarData.map((item, index) => (
        <DayCard key={item.day} item={item} index={index} />
      ))}
    </div>
  );
} 