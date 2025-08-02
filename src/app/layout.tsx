import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "জুলাই গণঅভ্যুত্থান - July Uprising Calendar",
  description: "জুলাই ২০২৪-এর ঐতিহাসিক ছাত্র আন্দোলনের ৩৬ দিনের ক্যালেন্ডার - Historical student movement calendar from July 2024",
  keywords: ["জুলাই গণঅভ্যুত্থান", "ছাত্র আন্দোলন", "বৈষম্য বিরোধী", "বাংলাদেশ", "July Uprising", "Student Movement"],
  authors: [{ name: "Bangladesh Government" }],
  openGraph: {
    title: "জুলাই গণঅভ্যুত্থান - July Uprising Calendar",
    description: "জুলাই ২০২৪-এর ঐতিহাসিক ছাত্র আন্দোলনের ৩৬ দিনের ক্যালেন্ডার",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
