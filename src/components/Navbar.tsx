"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";

const navItems = [
  { id: "01", label: "ABOUT", href: "#about", display: "About" },
  { id: "02", label: "PROJECTS", href: "#projects", display: "Projects" },
  { id: "03", label: "EXPERIENCE", href: "#experience", display: "Experience" },
  {id:"04", label:"CODE IN MOTION", href:"#codeinmotion", display:"CODE IN MOTION"},
  { id: "05", label: "CONTACT", href: "#contact", display: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("01");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy to automatically highlight active navbar tab based on viewport
  useEffect(() => {
    const handleTopCheck = () => {
      if (window.scrollY < 150) {
        setActiveTab("01");
      }
    };

    window.addEventListener("scroll", handleTopCheck, { passive: true });

    const sectionMap: Record<string, string> = {
      about: "01",
      projects: "02",
      experience: "03",
      codeinmotion: "04",
      contact: "05",
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (window.scrollY < 150) {
        setActiveTab("01");
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting && sectionMap[entry.target.id]) {
          setActiveTab(sectionMap[entry.target.id]);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: [0, 0.1],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleTopCheck);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);

    if (href === "#hero" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* FLOATING GLASS DYNAMIC NAVBAR CONTAINER                      */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={false}
          animate={{
            width: isScrolled ? "154px" : "100%",
            maxWidth: isScrolled ? "154px" : "960px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            boxShadow: isScrolled
              ? "0 20px 30px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)"
              : "0 16px 36px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.07)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`pointer-events-auto backdrop-blur-xl relative overflow-hidden h-[54px] flex items-center justify-center font-sans border border-white/60 transition-colors ${
            isScrolled ? "hover:bg-white cursor-pointer active:scale-95" : ""
          }`}
          onClick={() => {
            if (isScrolled) {
              setIsMenuOpen(true);
            }
          }}
        >
          {/* STATE 1: Full Navbar Header Content */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              scale: isScrolled ? 0.92 : 1,
              pointerEvents: isScrolled ? "none" : "auto",
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-between px-3 md:px-3.5 whitespace-nowrap"
          >
            {/* Left Brand & Availability Pulse */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group shrink-0 pl-1"
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick("01", "#hero");
              }}
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#111111] text-white font-extrabold text-[11px] flex items-center justify-center tracking-tight shrink-0 shadow-sm group-hover:bg-[#e52323] transition-colors duration-300">
                  KC
                </div>
                {/* Active Availability Pulse Dot */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white"></span>
                </span>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-zinc-900 font-bold text-[13px] leading-tight tracking-tight group-hover:text-[#e52323] transition-colors font-chillax">
                    Kovid Chouhan
                  </span>
                </div>
                <span className="text-[9px] tracking-wider text-zinc-500 font-mono uppercase leading-tight font-semibold">
                  Full-Stack Dev
                </span>
              </div>
            </div>

            {/* Center Floating Pill Navigation Links */}
            <div className="hidden md:flex items-center gap-0.5 bg-zinc-100/90 border border-zinc-200/80 rounded-full p-1 shrink-0 shadow-inner">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick(item.id, item.href);
                    }}
                    className={`relative px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold tracking-normal transition-all duration-300 cursor-pointer focus:outline-none ${
                      isActive ? "text-white" : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-[#111111] rounded-full shadow-md"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-[9px] font-mono transition-colors ${
                        isActive ? "text-[#e52323] font-bold" : "text-zinc-400"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="relative z-10">{item.display}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Call To Action & Menu trigger */}
            <div className="flex items-center gap-2 shrink-0 pr-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNavClick("04", "#contact");
                }}
                className="group relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#e52323] rounded-full overflow-hidden shadow-sm transition-all duration-300 active:scale-95 cursor-pointer font-chillax"
              >
                <span className="flex items-center gap-1.5 relative z-10">
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(true);
                }}
                className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-black transition-all duration-300 active:scale-95 cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* STATE 2: Shrunk Floating MENU Pill Content */}
          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.85,
              pointerEvents: isScrolled ? "auto" : "none",
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap px-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#e52323]" />
            <span className="text-black font-semibold tracking-wider text-xs select-none font-mono">
              MENU
            </span>
            <Menu className="w-4 h-4 text-zinc-800" />
          </motion.div>
        </motion.nav>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STATE 3: FULL EXPANDED MENU OVERLAY / MODAL                   */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#0c0c0c] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden my-auto font-chillax"
            >
              {/* Overlay Top Bar Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-black font-extrabold text-sm flex items-center justify-center tracking-tight shrink-0 shadow">
                    KC
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-tight tracking-wide">
                      Kovid Chouhan
                    </span>
                    <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase leading-tight font-medium">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-[#e52323] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overlay Main Content Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
                {/* Left Column Navigation */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-8">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id, item.href)}
                        className="group flex items-baseline gap-4 text-left w-fit focus:outline-none cursor-pointer"
                      >
                        <span className="text-xs font-mono text-[#e52323] group-hover:text-white transition-colors font-bold">
                          {item.id}
                        </span>
                        <span className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
                          {item.display}
                        </span>
                      </button>
                    ))}
                  </nav>

                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-900 md:border-t-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs text-zinc-400 font-mono">
                      Available for new opportunities
                    </span>
                  </div>
                </div>

                {/* Right Column Links & Contact */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-t md:border-t-0 md:border-l border-zinc-800/80 pt-6 md:pt-0 md:pl-8">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono space-y-1 font-bold">
                      <p>CODE</p>
                      <p>DESIGN</p>
                      <p>BUILD</p>
                      <p className="text-[#e52323]">REPEAT</p>
                    </div>

                    <div className="w-10 h-[1px] bg-zinc-700 my-4" />

                    <div className="space-y-3">
                      <span className="text-[11px] tracking-widest text-zinc-400 font-mono uppercase block font-semibold">
                        LET'S CONNECT
                      </span>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                        <li>
                          <a
                            href="mailto:kovidchouhan2019@gmail.com"
                            className="flex items-center gap-2.5 hover:text-[#e52323] transition-colors"
                          >
                            <Mail className="w-4 h-4 text-zinc-400" />
                            <span>kovidchouhan2019@gmail.com</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/kovid-chouhan-cr7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 hover:text-[#e52323] transition-colors"
                          >
                            <svg className="w-4 h-4 fill-zinc-400" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                            </svg>
                            <span>LinkedIn</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/kovid2375"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 hover:text-[#e52323] transition-colors"
                          >
                            <svg className="w-4 h-4 fill-zinc-400" viewBox="0 0 24 24">
                              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                            </svg>
                            <span>GitHub</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-[11px] text-zinc-500 font-mono pt-3 border-t border-zinc-900">
                    © 2026 Kovid Chouhan.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}