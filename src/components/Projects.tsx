"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";
import BlurReveal from "./BlurReveal";
import MorphSlider, { MorphItem } from "./MorphSlider";

const projectsData = [
  {
    id: "01",
    title: "AI Battle Arena",
    tagline: "AN AI-POWERED LLM EVALUATION PLATFORM.",
    description:
      "Architected an AI-powered LLM evaluation platform that executes multiple Large Language Models concurrently and compares responses in real time.",
    techStack: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Express.js", color: "#ffffff" },
      { name: "MongoDB", color: "#47A248" },
    ],
    image: "/project_ai_arena.png",
    dark: true,
    link: "https://github.com/kovid2375/Ai-Battle-Arena-Project",
  },
  {
    id: "02",
    title: "Snitch",
    tagline: "A FULL-STACK E-COMMERCE PLATFORM.",
    description:
      "Built a complete full-stack e-commerce platform with role-based access for buyers and sellers, real-time product inventory, secure checkout, and intuitive order tracking.",
    techStack: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Express.js", color: "#000000" },
      { name: "MongoDB", color: "#47A248" },
    ],
    image: "/project_snitch.png",
    dark: false,
    link: "https://github.com/kovid2375/backend/tree/main/Snitch",
  },
  {
    id: "03",
    title: "Modify",
    tagline: "AI MUSIC RECOMMENDATION PLATFORM.",
    description:
      "Built an AI-powered music recommendation app with real-time facial expression detection using Google MediaPipe for mood-based personalization.",
    techStack: [
      { name: "React.js", color: "#61DAFB" },
      { name: "MediaPipe", color: "#FF6F00" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Express.js", color: "#ffffff" },
      { name: "MongoDB", color: "#47A248" },
    ],
    image: "/project_modify.png",
    dark: true,
    link: "https://github.com/kovid2375/backend/tree/main/Modify-Project",
  },
  {
    id: "04",
    title: "Appointment System",
    tagline: "PRODUCTION-GRADE HEALTHCARE PLATFORM.",
    description:
      "Delivered a production-grade Hospital Appointment System with end-to-end ownership, enabling secure management of doctors, patients, and appointments.",
    techStack: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Express.js", color: "#000000" },
      { name: "MongoDB", color: "#47A248" },
    ],
    image: "/project_hospital.png",
    dark: false,
    link: "https://github.com/kovid2375/Appointment-System",
  },
];

const morphItems: MorphItem[] = projectsData.map((project) => ({
  image: project.image,
  caption: `${project.id} / ${project.title}`,
}));

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projectsData[activeIndex] || projectsData[0];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#f5f5f3] text-[#111111] font-sans overflow-hidden py-24 px-4 md:px-12 selection:bg-red-500 selection:text-white"
    >
      {/* ---------------- GRID BACKGROUND PATTERN ---------------- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e1e1dc 1px, transparent 1px),
            linear-gradient(to bottom, #e1e1dc 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ---------------- MAIN CONTAINER ---------------- */}
      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* ---------------- SECTION HEADER ---------------- */}
        <BlurReveal delay={0.1}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-zinc-500 tracking-wider font-semibold">
                / 03
              </span>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight font-chillax text-black leading-none">
                Projects
              </h2>
              <div className="flex items-center gap-4 pt-2">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                  A COLLECTION OF THINGS I'VE BUILT, EXPLORED AND SHIPPED. EACH PROJECT IS A STEP FORWARD.
                </p>
                <div className="w-16 h-[1px] bg-zinc-400 shrink-0 hidden sm:block" />
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end space-y-2">
              <div className="text-[11px] font-mono text-zinc-400 tracking-[0.2em] text-left lg:text-right uppercase font-semibold">
                GPU MORPH SLIDER & INTERACTIVE SHOWCASE
              </div>
              <div className="text-xs font-mono text-zinc-600 font-bold">
                0{activeIndex + 1} / 0{projectsData.length}
              </div>
            </div>
          </div>
        </BlurReveal>

        {/* ---------------- FULLSCREEN MORPH SLIDER HERO CARD ---------------- */}
        <BlurReveal delay={0.2} blur="16px" yOffset={25}>
          <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden border border-zinc-300 shadow-2xl bg-[#0c0c0e]">
            {/* Top Interactive Pill Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
              
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-200 font-bold">
              CLICK CONTROLS TO MORPH
              </span>
            </div>

            {/* Slider Height: Full-Scale Display */}
            <div className="w-full h-[65vh] sm:h-[72vh] lg:h-[78vh] min-h-[480px]">
              <MorphSlider
                items={morphItems}
                transition="melt"
                intensity={0.55}
                aberration={0.35}
                drift={0.4}
                autoplay={true}
                autoplayDelay={4}
                radius={32}
                overlayColor="#000000"
                showCaptions={true}
                showControls={true}
                showIndicators={true}
                onIndexChange={setActiveIndex}
              />
            </div>

            {/* Bottom Floating Dynamic Glass Info Bar */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-8 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-[2px] pointer-events-none">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
                
                {/* Active Project Title & Description */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-2 max-w-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#e52323] tracking-widest">
                        {currentProject.id}
                      </span>
                      <div className="w-6 h-[1px] bg-zinc-600" />
                      <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                        {currentProject.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-chillax leading-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {currentProject.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border bg-zinc-900/90 border-zinc-700 text-zinc-200"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* View Project Button */}
                <div className="pointer-events-auto shrink-0 pb-1">
                  <a
                    href={currentProject.link}
                    className="group inline-flex items-center gap-3 bg-[#e52323] hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl font-bold cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
