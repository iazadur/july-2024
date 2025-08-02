"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
    {
        name: "ক্যালেন্ডার",
        href: "/",
        description: "৩৬ দিনের ক্যালেন্ডার দেখুন",
        icon: "📅"
    },
    {
        name: "গ্যালারি",
        href: "/gallery",
        description: "ছবি ও ভিডিও দেখুন",
        icon: "🖼️"
    },
    {
        name: "টাইমলাইন",
        href: "/timeline",
        description: "ঘটনাবলীর সময়রেখা",
        icon: "⏰"
    },
    {
        name: "সম্পর্কে",
        href: "/about",
        description: "প্রকল্প সম্পর্কে জানুন",
        icon: "ℹ️"
    }
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 lg:hidden bg-gradient-to-r from-red-600 to-yellow-500 text-white p-3 rounded-lg shadow-lg hover:from-red-700 hover:to-yellow-600 transition-all duration-300"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)}>
                    <div className="absolute top-20 right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 min-w-[200px] animate-slideIn">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 ${pathname === item.href ? 'bg-gradient-to-r from-red-100 to-yellow-100 text-red-700 font-semibold' : 'text-gray-700 hover:text-red-600'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-gray-500">{item.description}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-red-900/90 to-yellow-800/90 backdrop-blur-md border-b border-red-200/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300">
                            <span className="text-2xl">🇧🇩</span>
                            <span className="font-bold text-lg">জুলাই গণঅভ্যুত্থান</span>
                        </Link>

                        {/* Navigation Items */}
                        <div className="flex space-x-1">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${pathname === item.href
                                            ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        {item.description}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                                    </div>

                                    {/* Active Indicator */}
                                    {pathname === item.href && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for desktop navigation */}
            <div className="hidden lg:block h-16"></div>
        </>
    );
} 