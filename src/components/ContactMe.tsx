"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandingCircleButton } from "./CustomButtons";
import BlurReveal from "./BlurReveal";

interface Toast {
  type: "success" | "error";
  title: string;
  description: string;
}

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setToast({
          type: "success",
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
      } else {
        setStatus("idle");
        setToast({
          type: "error",
          title: "Failed to Send Message",
          description: data.message || "An error occurred while sending your message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setToast({
        type: "error",
        title: "Network / Server Error",
        description: "Something went wrong. Please check your connection or try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#f5f5f3] text-[#111111] font-sans overflow-hidden py-24 px-6 md:px-16 selection:bg-red-500 selection:text-white"
    >
      {/* Background grid pattern */}
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

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Main Header & Container */}
        <BlurReveal delay={0.1}>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Left Column: Heading & Info */}
            <div className="lg:w-5/12 space-y-8 relative z-10">
              {/* Index Subhead */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-500 tracking-wider font-semibold">
                  / 05
                </span>
                
                {/* Main Heading */}
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight font-chillax text-black leading-[0.95]">
                  Let's Build <br />
                  Something <br />
                  <span className="text-red-600 font-extrabold">Great.</span>
                </h2>
              </div>

              {/* Subtitle Description */}
              <p className="text-md font-sans text-zinc-600 leading-relaxed max-w-md">
                I'm always open to discussing new opportunities, interesting projects, or just a good conversation about technology and ideas.
              </p>

              {/* Middle Information Section */}
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-3 h-[1px] bg-zinc-400" />
                    <span>AVAILABLE FOR OPPORTUNITIES</span>
                  </div>
                  <div className="space-y-1 pl-5 text-sm font-mono">
                    <div className="flex items-center gap-2 text-zinc-800">
                      <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                      <span>Based in India</span>
                    </div>
                    <div className="text-zinc-500">Open to Remote</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-2 pt-4">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    FIND ME ON
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-zinc-800">
                    <a
                      href="https://github.com/kovid2375"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 underline underline-offset-4 decoration-zinc-400 hover:decoration-red-600 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kovid-chouhan-cr7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 underline underline-offset-4 decoration-zinc-400 hover:decoration-red-600 transition-all"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/Spidycr7235"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 underline underline-offset-4 decoration-zinc-400 hover:decoration-red-600 transition-all"
                    >
                      X.com
                    </a>
                    <a
                      href="mailto:kovidchouhan2019@gmail.com"
                      className="hover:text-red-600 underline underline-offset-4 decoration-zinc-400 hover:decoration-red-600 transition-all"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Box */}
            <div className="lg:w-6/12 w-full space-y-12 relative z-10">
              {/* Form Container Card */}
              <div className="rounded-[24px]  p-8 sm:p-10 space-y-6   relative">
                {/* Form Header Status */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <span className="uppercase tracking-[0.18em] text-zinc-900 font-bold">
                      SEND A MESSAGE
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[11px] font-mono tracking-wider hidden sm:block">
                    Let's turn ideas into reality.
                  </span>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-[6px] border-2 border-zinc-200/90 bg-white/90 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white text-lg font-sans transition-all "
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-[6px] border-2   border-zinc-200/90 bg-white/90 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white text-lg font-sans transition-all "
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-4 rounded-[6px] border-2 border-zinc-200/90 bg-white/90 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white text-sm font-sans transition-all "
                    />
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-[6px] border-2 border-zinc-200/90 bg-white/90 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white text-lg font-sans transition-all "
                    />
                  </div>

                  {/* Submit Button Row */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <ExpandingCircleButton
                      type="submit"
                      disabled={status === "loading"}
                      text={status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                    />

                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>TYPICALLY REPLIES WITHIN 24 HOURS</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Quote & Footer Right Notes */}
              <div className="flex items-end justify-between pt-6">
                <div className="space-y-2 max-w-xs">
                  <div className="text-3xl font-serif text-zinc-400 font-bold leading-none">“</div>
                  <div className="w-16 h-[1px] bg-zinc-400" />
                  <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] leading-relaxed pt-1">
                    GOOD THINGS HAPPEN <br />
                    WHEN GREAT PEOPLE CONNECT.
                  </div>
                </div>

                <div className="text-right text-[10px] font-mono text-zinc-500 uppercase tracking-widest space-y-1">
                  <div>LET'S CREATE A</div>
                  <div>BRIGHTER TOMORROW</div>
                </div>
              </div>
            </div>

            {/* Top Right Tagline */}
            <div className="hidden xl:block absolute -right-10 top-0 text-right">
              <div className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] uppercase font-bold flex flex-col items-end gap-1">
                <span>SAME</span>
                <span>CURIOUS</span>
                <span>MIND</span>
                <span>BIGGER</span>
                <span>GOALS</span>
                <div className="w-4 h-[1px] bg-zinc-400 mt-2" />
              </div>
            </div>

          </div>
        </BlurReveal>

        {/* Planet / Orbit Artwork Overlay on Left Side */}
        {/* <div className="absolute left-1/3 bottom-0 w-[480px] h-[480px] pointer-events-none overflow-hidden hidden xl:block mix-blend-multiply opacity-40 -z-0">
          <img
            src="/planet_artwork.png"
            alt="Planet Artwork"
            className="w-full h-full object-cover rounded-full"
          />
        </div> */}

        {/* Bottom Bar: Copyright */}
        

      </div>

      {/* Floating Animated Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-8 right-6 md:right-10 z-50 max-w-md w-[calc(100vw-3rem)] pointer-events-auto"
          >
            <div
              className={`p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md border flex items-start gap-4 ${
                toast.type === "success"
                  ? "bg-white/95 border-emerald-500/30 text-zinc-900 shadow-emerald-500/10"
                  : "bg-white/95 border-red-500/30 text-zinc-900 shadow-red-500/10"
              }`}
            >
              <div
                className={`p-2 rounded-xl flex-shrink-0 ${
                  toast.type === "success"
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <h4 className="text-sm font-bold font-sans tracking-tight text-zinc-900">
                  {toast.title}
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed font-sans">
                  {toast.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setToast(null)}
                className="text-zinc-400 hover:text-zinc-700 transition-colors p-1 -mr-1 -mt-1 rounded-lg hover:bg-zinc-100"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}