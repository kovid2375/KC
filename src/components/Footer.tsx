"use client";

import React from "react";
import BlurReveal from "./BlurReveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#ffffff] text-[#111111] font-sans overflow-hidden pb-4 px-0 selection:bg-[#e52323] selection:text-white"
    >
      <div className="pt-8 border-t border-black/20 flex items-center justify-between text-xs font-mono text-zinc-500 mx-4 md:mx-12">
      </div>

      {/* ---------------- BACKGROUND AMBIENT GRADIENT ---------------- */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[70%] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #ff452b 0%, rgba(255, 82, 56, 0.75) 45%, rgba(255, 110, 80, 0.35) 75%, transparent 100%)",
        }}
      />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d6d4ce 1px, transparent 1px),
            linear-gradient(to bottom, #d6d4ce 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative w-full flex flex-col justify-between min-h-[75vh]">

        {/* ---------------- TOP NAVIGATION SECTION ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 items-start pt-6 px-4 md:px-12 lg:px-16">

          {/* MENU COLUMN (Span 4) */}
          <div className="lg:col-span-4 flex items-start gap-6 sm:gap-10">
            <span className="text-xs sm:text-sm font-mono text-zinc-600 font-medium">
              (MENU)
            </span>
            <nav className="flex flex-col space-y-2 text-base sm:text-lg font-medium text-zinc-900">
              <a href="#hero" className="hover:text-[#e52323] transition-colors w-fit">
                Home
              </a>
              <a href="#about" className="hover:text-[#e52323] transition-colors w-fit">
                About
              </a>
              <a href="#projects" className="hover:text-[#e52323] transition-colors w-fit">
                Works
              </a>
              <a href="#experience" className="hover:text-[#e52323] transition-colors w-fit">
                Experience
              </a>
              <a href="#contact" className="hover:text-[#e52323] transition-colors w-fit">
                Contact
              </a>
            </nav>
          </div>

          {/* SOCIALS COLUMN (Span 4) */}
          <div className="lg:col-span-4 flex items-start gap-6 sm:gap-10">
            <span className="text-xs sm:text-sm font-mono text-zinc-600 font-medium">
              (SOCIALS)
            </span>
            <div className="flex flex-col space-y-2 text-base sm:text-lg font-medium text-zinc-900">
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e52323] transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e52323] transition-colors w-fit"
              >
                GitHub
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e52323] transition-colors w-fit"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* SAY HELLO COLUMN (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right space-y-2">
            <span className="text-xs sm:text-sm font-mono text-zinc-600 font-medium">
              (SAY &ldquo;HELLO&rdquo;)
            </span>
            <a
              href="mailto:kovidchouhan2019@gmail.com"
              className="text-base sm:text-lg font-medium text-zinc-900 hover:text-[#e52323] transition-colors"
            >
              kovidchouhan2019@gmail.com
            </a>
          </div>

        </div>

        {/* ---------------- FULL-WIDTH GIANT BOTTOM TYPOGRAPHY & FOOTER BAR ---------------- */}
        <div className="pt-12 sm:pt-16 flex flex-col w-full">

          {/* GIANT NAME KOVID SPANNING ENTIRE PAGE WIDTH */}
          <BlurReveal delay={0.1}>
            <div className="w-full flex items-center justify-center select-none overflow-hidden leading-none px-2">
              <h1 className="w-full text-center font-black tracking-[15px] uppercase text-[#222] text-[7vw] sm:text-[24vw] md:text-[10vw]  transition-colors ">
                kovidchouhan
              </h1>
            </div>
          </BlurReveal>

          {/* BOTTOM COPYRIGHT & LEGAL LINKS */}
          <div className="flex flex-row items-center justify-between text-xs sm:text-sm text-zinc-900 font-medium pt-4 pb-2 px-4 md:px-12 lg:px-16 border-t border-black/10">
            <div>
              &copy;2026 Kovid Chouhan
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-black transition-colors">
                Terms
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
