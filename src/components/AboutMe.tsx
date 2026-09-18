"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BlurReveal from "./BlurReveal";
import BlurText from "./BlurText";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#080808] text-white font-sans overflow-hidden py-24 px-4 md:px-12 selection:bg-red-500 selection:text-white"
    >
      {/* ---------------- MAIN CONTAINER ---------------- */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* ---------------- LEFT COLUMN (Content) ---------------- */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 z-20">

          {/* Top Section Header */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 tracking-wider font-semibold ">
              / 02
            </span>
            <BlurReveal delay={0.1}>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight font-chillax text-white leading-none mt-25">
                About Me
              </h2>
            </BlurReveal>
          </div>

          {/* Subtitle Header & Paragraphs */}
          <div className="space-y-6 pt-4">
            <BlurReveal delay={0.25}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                  BEHIND THE CODE
                </span>
                <div className="w-16 h-[1px] bg-zinc-700" />
              </div>
            </BlurReveal>

            <div>
              <BlurText
                text="Hi, I'm Kovid Chouhan"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-100 font-chillax"
              />
            </div>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-lg font-light leading-relaxed max-w-xl">
              <BlurText
                text="I’m a final year computer science and Engineering student undergrad at LCIT GROUP OF INSTITUTIONS, India – a student, developer and creative problem solver."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-zinc-400 text-sm sm:text-lg font-light leading-relaxed"
              />
              <BlurText
                text="Passionate about Web development, design and critical thinking, I enjoy crafting elegant solutions with clean code. I have hands-on experience in Full-stack development using MERN stack, and Python, along with a solid foundation in data structures and algorithms."
                delay={35}
                animateBy="words"
                direction="top"
                className="text-zinc-400 text-sm sm:text-lg font-light leading-relaxed"
              />
            </div>
          </div>

          {/* Action CTA & Status */}
          <BlurReveal delay={0.6}>
            <div className="space-y-8 pt-4">
              {/* Circular Arrow Button & Text */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <a
                  href="#contact"
                  className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-semibold tracking-widest text-white uppercase group-hover:text-red-400 transition-colors">
                    MORE ABOUT ME
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                    STORY / SKILLS / JOURNEY
                  </span>
                </div>
              </div>

              {/* Bottom Left Status */}
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest space-y-1 pt-4 border-t border-zinc-900">
                <p className="text-zinc-400 font-semibold">BASED IN INDIA</p>
                <p className="text-zinc-600">OPEN FOR OPPORTUNITIES</p>
              </div>
            </div>
          </BlurReveal>

        </div>

        {/* ---------------- RIGHT COLUMN (Giant Portrait Image & Graphics) ---------------- */}
        <div className="lg:col-span-7 relative flex flex-col justify-between items-center lg:items-end min-h-[680px] mt-8 lg:mt-0">

          {/* Top Right Values */}
          <div className="hidden lg:block text-[11px] font-mono text-zinc-500 tracking-[0.25em] text-right space-y-1 font-semibold z-20">
            <p>CODE</p>
            <p>DESIGN</p>
            <p>BUILD</p>
            <p>LEARN</p>
            <p>REPEAT</p>
          </div>

          {/* Center Giant Portrait Wrapper */}
          <div className="relative my-auto w-full flex items-center justify-center lg:justify-end">

            {/* Background Dark Textured Circle */}
            <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#111111] border border-zinc-800/80 -z-10 shadow-2xl" />

            {/* Orbital Line Graphic with Red Dot */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
              viewBox="0 0 600 600"
              fill="none"
            >
              <ellipse
                cx="300"
                cy="300"
                rx="260"
                ry="140"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.5"
                transform="rotate(-30 300 300)"
              />
              <circle cx="490" cy="145" r="7" fill="#e52323" />
            </svg>

            {/* Main Giant Portrait Image */}
            <BlurReveal delay={0.3} blur="20px" yOffset={35}>
              <div className="relative z-10 w-full max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] overflow-hidden">
                <Image
                  src="/about_portrait.jpg"
                  alt="Kovid Chouhan Portrait"
                  width={700}
                  height={800}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </BlurReveal>
          </div>

          {/* Bottom Right Details & Giant 02 Index */}
          <div className="w-full flex items-end justify-between pt-6 border-t border-zinc-900 lg:border-t-0 z-20">

            {/* Currently Exploring Stack */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-[1px] bg-zinc-600" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                  CURRENTLY EXPLORING
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-300 font-semibold space-y-0.5 tracking-wider uppercase">
                <p>WEB TECHNOLOGIES</p>
                <p>SYSTEM DESIGN</p>
                <p>REAL WORLD PROBLEMS</p>
              </div>
            </div>

            {/* Giant Outlined 02 Index */}
            <div
              className="text-8xl sm:text-9xl font-extrabold font-mono text-transparent select-none opacity-40 leading-none"
              style={{ WebkitTextStroke: "1px #ffffff" }}
            >
              02
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}