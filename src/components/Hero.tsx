"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlurReveal from "./BlurReveal";
import ParticleText from "./ParticleText";
import { ExpandingCircleButton } from "./CustomButtons";

const techStackItems = [
  {
    name: "React",
    icon: (
      <svg className="w-4 h-4 text-[#00d8ff]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2" />
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.584-1.574 6.801-4.077 9.001l-8.673-12.004H9.5v10h1.75v-6.953l7.415 9.934zM16.25 7.5h1.75v7.25h-1.75V7.5z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-4 h-4 text-[#5fa04e]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5a1 1 0 0 0-.5.134l-8 4.619a1 1 0 0 0-.5.866v9.238a1 1 0 0 0 .5.866l8 4.619a1 1 0 0 0 1 0l8-4.619a1 1 0 0 0 .5-.866V8.119a1 1 0 0 0-.5-.866l-8-4.619A1 1 0 0 0 12 2.5zm0 2.309l6.5 3.753v7.506L12 19.821l-6.5-3.753V8.562L12 4.809z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-4 h-4 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg className="w-4 h-4 text-[#dc382d]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.5 3.25L12 11.3 5.5 8.05 12 4.8zM4 9.42l7 3.5v7.26l-7-3.5V9.42zm16 7.26l-7 3.5v-7.26l7-3.5v7.26z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-4 h-4 text-[#3178c6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h21v21h-21zM13.71 19.125h2.15v-6.91h2.24v-1.74h-6.63v1.74h2.24v6.91zm-7.05-1.92c.63.48 1.48.83 2.45.83 1.34 0 2.05-.62 2.05-1.46 0-.87-.64-1.34-1.95-1.85-1.63-.61-2.61-1.37-2.61-2.88 0-1.78 1.43-2.97 3.63-2.97 1.15 0 2.03.3 2.68.75l-.75 1.56c-.52-.36-1.21-.61-1.94-.61-1.07 0-1.77.56-1.77 1.32 0 .77.58 1.19 1.95 1.7 1.72.63 2.62 1.48 2.62 2.97 0 1.9-1.48 3.12-3.95 3.12-1.25 0-2.34-.37-3.03-.89l.82-1.58z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-4 h-4 text-[#f7df1e]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h21v21h-21zM13.9 18.5c.8 0 1.4-.4 1.7-1l1.5.9c-.7 1.3-2 2-3.7 2-2.7 0-4.3-1.6-4.3-4.1 0-2.6 1.7-4.1 4.1-4.1 1.7 0 2.9.7 3.5 1.8l-1.5 1c-.4-.7-1.1-1.1-2-1.1-1.3 0-2.2.9-2.2 2.4s.9 2.4 2.2 2.4zm5.8-.3c.4.3.9.5 1.5.5.8 0 1.2-.4 1.2-1 0-.6-.4-.9-1.3-1.3l-.6-.3c-1.3-.6-2.1-1.4-2.1-2.7 0-1.7 1.4-2.8 3.4-2.8 1.2 0 2.1.3 2.8.9l-1 1.3c-.5-.4-1.1-.6-1.7-.6-.7 0-1.1.3-1.1.8 0 .5.4.8 1.1 1.1l.6.3c1.6.7 2.4 1.4 2.4 2.9 0 1.8-1.4 2.9-3.6 2.9-1.4 0-2.5-.4-3.2-1.1l1-1.2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-4 h-4 text-[#47a248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75 0 4.1 2.53 7.6 6.1 9.07v-3.72a2.83 2.83 0 0 1-1.6-2.58c0-1.56 1.27-2.83 2.83-2.83 1.56 0 2.83 1.27 2.83 2.83 0 1.08-.61 2.02-1.6 2.58v3.72c3.57-1.47 6.1-4.97 6.1-9.07 0-5.38-4.37-9.75-9.75-9.75z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen bg-[#f6f6f4] text-[#111111] font-sans overflow-hidden pt-12 pb-16 px-4 md:px-8 lg:px-12 selection:bg-[#e52323] selection:text-white border-b border-zinc-200">

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e2dc 1px, transparent 1px),
            linear-gradient(to bottom, #e2e2dc 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red ambient background glow in bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-500/10 via-red-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Vertical Side Text Label on far left border line */}
      <div className="hidden xl:flex absolute left-4 top-40 bottom-20 flex-col items-center justify-between pointer-events-none select-none z-10">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-400 rotate-180 [writing-mode:vertical-lr]">
          FULL-STACK DEVELOPER
        </span>
        <div className="w-[1px] h-32 bg-zinc-300 my-4" />
      </div>

      <div className="relative max-w-7xl mx-auto pt-6">

        {/* TOP BAR HEADER ROW */}

        {/* Left Header Greeting */}
        {/* <div className="flex items-center gap-6">
            <span className="text-xs font-mono font-bold text-zinc-800">01</span>
            <div className="h-4 w-[1px] bg-zinc-400" />
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-700 uppercase font-semibold flex items-center gap-1.5">
              H E L L O &nbsp; T H E R E ! <span className="text-[#e52323] font-bold text-sm">●</span>
            </span>
          </div> */}

        {/* Right Header Status / Year */}
        {/* <div className="flex items-center gap-4 text-xs font-mono text-zinc-600">
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-zinc-400" />
              <span className="text-[#e52323] font-bold">●</span>
              <span className="font-semibold text-zinc-800">/ 2025</span>
            </div>
            <div className="hidden md:block text-[10px] tracking-wider uppercase text-zinc-500 font-semibold leading-tight border-l border-zinc-300 pl-4">
              BUILDING<br />A BETTER<br />TOMORROW.
            </div> */}



        {/* MAIN HERO GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-[70vh]">

          {/* LEFT COLUMN: Main Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 pl-0 md:pl-4">

            {/* Main Headline Block */}
            <div className="space-y-2">
              <BlurReveal delay={0.1}>
                <div className="flex items-baseline justify-start gap-x-8">
                  <div>
                    <h1 className="text-7xl sm:text-9xl lg:text-[6rem] font-extrabold tracking-tighter leading-[0.82] text-zinc-950 font-sans mt-10">
                      HEY!! I'M
                    </h1>
                  </div>

                  {/* Sub-label beside HEY I'M */}
                  <div className="text-[11px] sm:text-xs font-mono text-zinc-500 tracking-wider uppercase font-semibold space-y-1 self-center border-l-2 border-zinc-400 pl-4 py-1">
                    <p>FULL-STACK</p>
                    <p>DEVELOPER</p>
                    <p>& PROBLEM SOLVER</p>
                    <div className="w-8 h-[1.5px] bg-zinc-400 mt-2" />
                  </div>
                </div>
              </BlurReveal>

              {/* Red Name Headline */}
              <BlurReveal delay={0.25}>
                <h1 className="text-7xl sm:text-9xl lg:text-[10rem] font-extrabold tracking-tighter leading-[0.82] text-[#e52323] font-sans">
                  KOVID.
                </h1>
              </BlurReveal>
            </div>

            {/* Description Paragraph */}
            <BlurReveal delay={0.4}>
              <p className="max-w-xl text-zinc-800 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                I build thoughtful end-to-end digital products with clean code and clear intent, made to be scalable, user-first and{" "}
                <span className="text-[#e52323] font-bold">impactful.</span>
              </p>
            </BlurReveal>

            {/* Action Buttons */}
            <BlurReveal delay={0.55}>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                {/* Red Solid Pill Button */}
                <a
                  href="https://drive.google.com/file/d/1kquEibelbsJZW0xQMtaWTptUkCjrQ0OZ/view?usp=sharing"
                  className="group bg-[#dc1111] hover:bg-[#000000] text-white font-mono text-xs uppercase tracking-wider px-7 py-3.5 rounded-full flex items-center gap-3 transition-all shadow-md active:scale-95 cursor-pointer font-bold"
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>VIEW RESUME</span>
                </a>

                {/* Outline Circular Button */}
                <a
                  href="#contact"

                >
                  {/* <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div> */}

                  <ExpandingCircleButton text="Let's Connect" onClick={() => { console.log('clcik') }} />
                </a>

              </div>
            </BlurReveal>

            {/* Status & Tech Stack Row */}
            <BlurReveal delay={0.7}>
              <div className="pt-8 space-y-6 border-t border-zinc-300/70">
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-600 uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#e52323] animate-pulse" />
                  <span>BASED IN INDIA</span>
                  <span className="text-zinc-400">•</span>
                  <span>AVAILABLE FOR SELECT PROJECTS</span>
                </div>

                {/* Tech Stack Row with Official SVG Logos */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-mono text-zinc-800">
                  <span className="text-zinc-500 font-semibold tracking-wider uppercase mr-1">TECH STACK —</span>
                  {techStackItems.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 group cursor-pointer hover:text-black transition-colors bg-white/80 border border-zinc-200/80 px-2.5 py-1 rounded-md shadow-xs"
                    >
                      <span className="transition-transform group-hover:scale-110">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurReveal>

          </div>

          {/* RIGHT COLUMN: Stacked Typographic Watermark & Visual Accents */}
          <div className="lg:col-span-5 relative flex flex-col justify-between items-center lg:items-end min-h-[500px]">

            {/* Top Right Handwritten Arrow Note & Lightbulb Doodle */}
            <div className="w-full flex items-start justify-between sm:justify-center gap-4 pt-1 pl-2 select-none">

              {/* Lightbulb Idea Doodle */}
              <div className="hidden sm:flex flex-col items-center -rotate-12 transform mt-15 ml-100 absolute">
                <svg className="w-10 h-10 text-amber-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Idea rays */}
                  <path d="M 24 4 L 24 8" stroke="#e52323" />
                  <path d="M 10 10 L 14 13" stroke="#e52323" />
                  <path d="M 38 10 L 34 13" stroke="#e52323" />
                  {/* Bulb outline */}
                  <path d="M 16 19 C 16 14 20 10 24 10 C 28 10 32 14 32 19 C 32 23 29 26 28 29 L 20 29 C 19 26 16 23 16 19 Z" />
                  {/* Filament */}
                  <path d="M 21 21 L 24 17 L 27 21" stroke="#e52323" />
                  {/* Base */}
                  <path d="M 20 33 L 28 33" />
                  <path d="M 22 37 L 26 37" />
                </svg>
                <span className="font-comic text-xs text-zinc-500 font-bold -mt-1">idea!</span>
              </div>

              {/* Main Handwritten Note & Curved Arrow */}
              <div className="absolute">
                <span className="font-comic font-bold text-zinc-700 text-2xl sm:text-3xl block -rotate-3 transform tracking-wide mt-10">
                  Turning ideas into real products
                </span>
                <div className="flex items-center justify-start mt-3">
                  <svg
                    className="w-20 h-14 text-zinc-700 ml-12 -mt-1"
                    viewBox="0 0 70 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 10 6 Q 50 6 56 36" />
                    <path d="M 46 28 L 56 36 L 62 26" />
                  </svg>
                </div>
              </div>

              {/* Sparkle Doodle */}
              <div className="text-[#e52323] text-2xl rotate-12 animate-pulse select-none">
                ✦
              </div>

            </div>

            {/* Middle Interactive Particle Text BUILD LEARN CREATE with Floating Doodles */}
            <div className="relative w-full flex flex-col items-center justify-center py-1 select-none">

              {/* Floating Doodle: Code Tag </> */}
              <div className="hidden md:flex absolute top-15 -left-10 items-center gap-1 bg-white/90 border-2 border-zinc-700/80 px-2.5 py-1 rounded-lg shadow-sm -rotate-6 transform z-10">
                <svg className="w-6 h-6 text-[#e52323]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span className="font-comic text-sm font-bold text-zinc-800">clean code</span>
              </div>

              {/* Floating Doodle: Coffee fuel ☕ */}
              <div className="hidden lg:flex absolute top-1/2 -right-6 flex-col items-center rotate-12 transform z-10">
                <svg className="w-12 h-12 text-zinc-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Steam */}
                  <path d="M 11 6 Q 13 9 11 12" stroke="#e52323" />
                  <path d="M 16 5 Q 18 8 16 11" stroke="#e52323" />
                  {/* Cup */}
                  <path d="M 7 14 L 21 14 C 21 21 18 25 14 25 C 10 25 7 21 7 14 Z" />
                  {/* Handle */}
                  <path d="M 21 16 Q 26 16 26 19 Q 26 22 21 22" />
                  {/* Base line */}
                  <path d="M 5 28 L 23 28" />
                </svg>
                <span className="font-comic text-xs font-bold text-zinc-600 -mt-1">coffee fuel</span>
              </div>

              {/* Particle Canvas */}
              <ParticleText words={["BUILD", "LEARN", "CREATE"]} className="w-full" />

              {/* Dynamic Double Red Underline */}
              <div className="w-full max-w-xs sm:max-w-sm -mt-6 sm:-mt-8 pointer-events-none z-10">
                <svg viewBox="0 0 300 30" fill="none" className="w-full h-8 text-[#e52323]">
                  <path
                    d="M 10 10 C 100 22, 220 8, 290 14"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 25 22 C 110 30, 230 18, 280 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Lower Right Interactive Badge & Motto */}
            <div className="w-full flex items-center justify-between pt-6 border-t border-zinc-300/70">

              {/* Hand-drawn Bug Free / High Quality Badge */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full border-2 border-dashed border-[#e52323] flex items-center justify-center -rotate-12">
                  <span className="text-[#e52323] font-bold text-xs">✓</span>
                </div>
                <span className="font-comic text-sm sm:text-base font-bold text-zinc-700">
                  pixel perfect & scalable
                </span>
              </div>

              {/* Bottom Right Small Text */}
              <div className="text-right text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold space-y-0.5">
                <p>BUILDING <span className="text-[#e52323] font-bold">IMPACTFUL</span> EXPERIENCES</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}