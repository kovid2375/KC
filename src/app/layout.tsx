import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import GlowCursor from "../components/GlowCursor";
import InitialLoader from "../components/InitialLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chillax = localFont({
  src: "../fonts/Chillax-Regular.otf",
  variable: "--font-chillax",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kovid Chouhan | Full-Stack Developer",
  description: "Portfolio of Kovid Chouhan - Full-Stack Developer & Problem Solver",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${chillax.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f5f5f3] relative">
        <InitialLoader />
        {/* Global Glow Cursor Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <GlowCursor
            color="#E52323"
            secondaryColor="#FF6B6B"
            trailLength={35}
            trailWidth={7}
            trailTaper={0.8}
            followSpeed={0.18}
            glowIntensity={1.8}
            glowSpread={1.2}
            hotspot={0.6}
            brightness={1.2}
            opacity={0.9}
            pulseSpeed={1.0}
            blendMode="screen"
            idleFade
            idleTimeout={600}
            fadeDuration={800}
          />
        </div>

        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
