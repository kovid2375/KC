"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  // Step sequence: "hi" -> "welcome" -> "text-stroke" -> "text-fill" -> "fade-out" -> "complete"
  const [step, setStep] = useState<
    "hi" | "welcome" | "text-stroke" | "text-fill" | "fade-out" | "complete"
  >("hi");

  useEffect(() => {
    // Lock scroll during loader
    document.body.style.overflow = "hidden";

    // Sequence timers
    const timer1 = setTimeout(() => {
      setStep("welcome");
    }, 1100);

    const timer2 = setTimeout(() => {
      setStep("text-stroke");
    }, 2400);

    const timer3 = setTimeout(() => {
      setStep("text-fill");
    }, 3800);

    const timer4 = setTimeout(() => {
      setStep("fade-out");
    }, 5200);

    const timer5 = setTimeout(() => {
      setStep("complete");
      document.body.style.overflow = "";
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      document.body.style.overflow = "";
    };
  }, []);

  if (step === "complete") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: step === "fade-out" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d] text-white overflow-hidden select-none px-4"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-[#E52323] opacity-10 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            {/* STEP 1: HI */}
            {step === "hi" && (
              <motion.div
                key="hi-text"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl sm:text-9xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-chillax), sans-serif" }}
              >
                HI<span className="text-[#E52323]">.</span>
              </motion.div>
            )}

            {/* STEP 2: WELCOME */}
            {step === "welcome" && (
              <motion.div
                key="welcome-text"
                initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className="text-4xl sm:text-7xl font-bold tracking-[0.2em] uppercase text-zinc-100"
                  style={{ fontFamily: "var(--font-chillax), sans-serif" }}
                >
                  Welcome
                </span>
                <span className="text-xs sm:text-sm tracking-[0.4em] uppercase text-zinc-400 font-mono">
                  to my digital space
                </span>
              </motion.div>
            )}

            {/* STEP 3 & 4: PROFESSIONAL PORTFOLIO TEXT (OUTLINE BORDER -> SOLID FILL -> FADE OUT) */}
            {(step === "text-stroke" || step === "text-fill" || step === "fade-out") && (
              <motion.div
                key="portfolio-text"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: step === "fade-out" ? 0 : 1, y: 0 }}
                exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3 sm:gap-4"
              >
                {/* NAME: BORDER OUTLINE TO FILLED COLOR */}
                <h1
                  className={`text-3xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider transition-all duration-700 ${
                    step === "text-fill"
                      ? "text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                      : "text-transparent"
                  }`}
                  style={{
                    fontFamily: "var(--font-chillax), sans-serif",
                    WebkitTextStroke:
                      step === "text-fill"
                        ? "1.5px #ffffff"
                        : "1.5px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  KOVID <span className="text-[#E52323]" style={{ WebkitTextStroke: "0px" }}>CHOUHAN</span>
                </h1>

                {/* ROLE SUBTITLE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: step === "text-fill" ? 1 : 0.4,
                    y: 0,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-3 text-xs sm:text-base font-mono tracking-[0.3em] uppercase text-zinc-300"
                >
                  <span>Full-Stack Developer</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                  <span>Portfolio &apos;26</span>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
    </AnimatePresence>
  );
}
