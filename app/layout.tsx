import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/app/_components/Navbar';
import { NextUIProvider } from "@nextui-org/react";
import Footer from '@/app/_components/Footer';
import GoogleAnalytics from '@/app/_components/GoogleAnalytics';
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trading Levels Algo",
  description: "Advanced trading algorithm designed for futures trading on Ninjatrader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <NextUIProvider>
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
