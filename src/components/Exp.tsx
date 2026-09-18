"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlurReveal from "./BlurReveal";

const experiences = [
  {
    id: "01",
    period: "April 2026 - Present",
    role: "Software Developer",
    company: "EZ GLOBAL TECHNOLOGIES PVT LTD",
    description:
      "Building and shipping full-stack web applications, exploring new technologies, and working on real-world ideas like Snitch.",
    pills: ["React", "NestJS", "PostgreSQL", "Docker"],
    whatIDid:
      "Developed and deployed full-stack applications with a focus on clean architecture, performance and great user experience. Currently working on personal projects and open-source contributions.",
    highlights: [
      "Built Snitch — a full-stack e-commerce platform",
      "Worked with modern tech stack (MERN, NestJS)",
      "Deployed applications on cloud (Vercel, Render)",
      "Continuously learning and exploring new tools",
    ],
    stats: [
      { number: "5+", label: "PROJECTS BUILT" },
      { number: "1.5+", label: "YEARS OF EXPERIENCE" },
      { number: "∞", label: "THINGS TO LEARN" },
    ],
  },
  {
    id: "02",
    period: "May 2025 - Aug 2025",
    role: "Frontend Development Intern",
    company: "Glistra Software Solution",
    description:
      "Assisted in developing frontend user interfaces and integrating RESTful API endpoints for client projects.",
    pills: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    whatIDid:
      "Collaborated with senior engineers to implement responsive layouts, refactor codebase components, and optimize web app loading times.",
    highlights: [
      "Implemented responsive web features across 5+ core products",
      "Integrated secure authentication flows",
      "Reduced bundle size and optimized UI rendering pipelines",
      "Participated in weekly code reviews and sprint planning",
    ],
    stats: [
      { number: "3+", label: "PRODUCTS CONTRIBUTED" },
      { number: "90%+", label: "TEST COVERAGE" },
      { number: "24/7", label: "PROBLEM SOLVING" },
    ],
  },
  {
    id: "03",
    period: "2022 - 2026",
    role: "B.Tech in Computer Science and Engineering",
    company: "LCIT GROUP OF INSTITUTIONS",
    description:
      "Specialized in core Computer Science fundamentals, Object-Oriented Programming, Data Structures, and Algorithms.",
    pills: ["C++", "Java", "DSA", "DBMS", "Operating Systems"],
    whatIDid:
      "Built strong foundation in algorithmic problem solving, software engineering principles, database design, and web technology basics.",
    highlights: [
      "Learned in Core Data Structures & Algorithms",
      "Led technical project teams during semesters",
      "Built academic web applications using HTML/CSS/JavaScript",
      "Published mini-projects on GitHub repository",
    ],
    stats: [
      { number: "7.4", label: "CGPA RATIO" },
      { number: "", label: "" },
      { number: "", label: "" },
    ],
  },
  {
    id: "04",
    period: "2020 - 2022",
    role: "Higher Secondary Education",
    company: "D.A.V Public School, Bilaspur(C.G.)",
    description:
      "Completed Higher Secondary Education with focus on Mathematics and Computer Science.",
    pills: ["Mathematics", "Physics", "Computer Science"],
    whatIDid:
      "Discovered passion for computer programming and technology during high school coursework.",
    highlights: [
      "Achieved Distinction in Mathematics & Computer Science",
      "Participated in  science exhibitions",
      "Self-taught basics of web design and programming",
    ],
    stats: [
      { number: "100%", label: "DEDICATION" },
      { number: "1st", label: "STEP IN TECH" },
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExp = experiences[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#070707] text-white font-sans overflow-hidden py-24 px-6 md:px-16 selection:bg-red-500 selection:text-white"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #222 1px, transparent 1px),
            linear-gradient(to bottom, #222 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <BlurReveal delay={0.1}>
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-500 tracking-wider font-semibold">
                / 03
              </span>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight font-chillax text-white leading-none">
                Experience
              </h2>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest pt-2">
                HERE'S A TIMELINE OF MY JOURNEY.
              </p>
            </div>

            {/* Top Right Tagline */}
            <div className="flex flex-col items-start lg:items-end space-y-1 text-right">
              <div className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] uppercase font-bold flex flex-col items-start lg:items-end gap-1">
                <span>LEARNING</span>
                <span>BUILDING</span>
                <span>GROWING</span>
                <span>REPEATING</span>
                <div className="w-6 h-[1px] bg-zinc-600 mt-1" />
              </div>
            </div>
          </div>
        </BlurReveal>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4 items-stretch">
          {/* Left Column - Timeline List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-4">
            <div className="relative border-l border-zinc-800/80 ml-2 pl-6 space-y-10">
              {experiences.map((exp, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={exp.id}
                    onClick={() => setActiveIndex(idx)}
                    className="group cursor-pointer relative"
                  >
                    {/* Glowing Bullet Node */}
                    <div
                      className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)] scale-125"
                          : "bg-white/80 group-hover:bg-red-400"
                      }`}
                    />

                    {/* Timeline Card Header */}
                    <div className="flex items-center gap-4 text-xs font-mono mb-2">
                      <span
                        className={`font-semibold tracking-wider transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        {exp.period}
                      </span>
                      <div
                        className={`h-[1px] transition-all ${
                          isActive ? "w-6 bg-red-500" : "w-4 bg-zinc-700"
                        }`}
                      />
                    </div>

                    {/* Role & Company */}
                    <div className="space-y-1">
                      <h3
                        className={`text-xl sm:text-2xl font-bold font-chillax transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                        {exp.company}
                      </div>
                    </div>

                    {/* Expanded details if active */}
                    {isActive && (
                      <div className="mt-4 space-y-4 text-md font-sans text-zinc-300 transition-all duration-300">
                        <p className="leading-relaxed text-zinc-400">{exp.description}</p>
                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {exp.pills.map((pill) => (
                            <span
                              key={pill}
                              className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/80 text-[11px] font-mono text-zinc-300"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Left Footer Tagline */}
            <div className="pt-8 border-t border-zinc-900/80 text-[10px] font-mono text-zinc-500 uppercase tracking-widest space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-[1px] bg-zinc-700" />
                <span>BASED IN INDIA</span>
              </div>
              <p className="text-zinc-600 pl-6">OPEN TO NEW OPPORTUNITIES</p>
            </div>
          </div>

          {/* Right Column - Detail Card & Planet Illustration (7 Cols) */}
          <div className="lg:col-span-7 relative flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800/80 pt-8 lg:pt-0 lg:pl-12">
            <div className="space-y-8 relative z-10 max-w-xl">
              {/* Card Nav Header */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono text-red-500 font-bold tracking-widest">
                  {activeExp.id} / 0{experiences.length}
                </span>

                {/* Arrow Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Experience"
                    className="w-10 h-10 rounded-full border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-500 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Experience"
                    className="w-10 h-10 rounded-full border border-zinc-700/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-500 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Animated Detail Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(12px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-8"
                >
                  {/* WHAT I DID Section */}
                  <div className="space-y-3 border-t border-zinc-900 pt-6">
                    <div className="text-[15px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold">
                      WHAT I DID
                    </div>
                    <p className="text-lg font-sans text-zinc-300 leading-relaxed">
                      {activeExp.whatIDid}
                    </p>
                  </div>

                  {/* KEY HIGHLIGHTS Section */}
                  <div className="space-y-3 border-t border-zinc-900 pt-6">
                    <div className="text-[16px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold">
                      KEY HIGHLIGHTS
                    </div>
                    <ul className="space-y-2 text-lg font-sans text-zinc-300">
                      {activeExp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span className="leading-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* STATS ROW */}
                  <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-8">
                    {activeExp.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-4xl font-bold font-chillax text-white tracking-tight">
                          {stat.number}
                        </div>
                        <div className="text-[18px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Right Footer Tagline */}
            <div className="pt-12 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              <span>SAME CURIOUS MIND, BIGGER GOALS.</span>
              <div className="w-6 h-[1px] bg-zinc-700" />
            </div>

            {/* Planet / Orbit Visual Artwork Background on Right */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] pointer-events-none overflow-hidden hidden xl:block mix-blend-screen opacity-90">
              <img
                src="/planet_artwork.png"
                alt="Planet Artwork"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}