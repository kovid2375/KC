"use client";

import React, { useEffect, useRef } from "react";

interface ParticleTextProps {
  words?: string[];
  className?: string;
}

export default function ParticleText({
  words = ["BUILD", "LEARN", "CREATE"],
  className = "",
}: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 42,
    };

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number = 0;
      vy: number = 0;
      size: number;
      baseColor: string;
      activeColor: string;
      friction: number;
      ease: number;

      constructor(x: number, y: number, size: number) {
        this.originX = x;
        this.originY = y;
        // Small initial scatter that quickly snaps into place
        this.x = x + (Math.random() - 0.5) * 6;
        this.y = y + (Math.random() - 0.5) * 6;
        this.size = size;
        this.baseColor = "#a1a1aa"; // Clearly visible zinc gray
        this.activeColor = "#e52323"; // Crimson red on scatter
        this.friction = 0.84;
        this.ease = 0.08;
      }

      draw(context: CanvasRenderingContext2D) {
        const dx = this.x - this.originX;
        const dy = this.y - this.originY;
        const distFromOrigin = Math.sqrt(dx * dx + dy * dy);

        if (distFromOrigin > 3.5) {
          context.fillStyle = this.activeColor;
        } else {
          context.fillStyle = this.baseColor;
        }

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }

      update() {
        // Distance to cursor
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Scatter repulsion force
          const push = force * 22;
          this.vx -= Math.cos(angle) * push;
          this.vy -= Math.sin(angle) * push;
        }

        // Spring return to original position
        const springX = this.originX - this.x;
        const springY = this.originY - this.y;
        this.vx += springX * this.ease;
        this.vy += springY * this.ease;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width) || 480;
      height = Math.floor(rect.height) || 420;

      if (width <= 0 || height <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Offscreen canvas for font rasterization
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      // Calculate responsive font size (strict valid CSS font string)
      const fontSize = Math.floor(Math.min(width / 3.4, height / 3.2));
      const lineHeight = fontSize * 0.95;

      offCtx.fillStyle = "#000000";
      offCtx.font = `900 ${fontSize}px "Impact", "Arial Black", "Inter", -apple-system, sans-serif`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";

      const totalHeight = words.length * lineHeight;
      const startY = (height - totalHeight) / 2 + lineHeight / 2;

      words.forEach((word, index) => {
        const y = startY + index * lineHeight;
        offCtx.fillText(word, width / 2, y);
      });

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      particles = [];
      const density = 4; // Dense particle grid
      const particleRadius = 1.8;

      for (let y = 0; y < height; y += density) {
        for (let x = 0; x < width; x += density) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 50) {
            particles.push(new Particle(x, y, particleRadius));
          }
        }
      }
    };

    init();

    // Mouse & Touch listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    const resizeObserver = new ResizeObserver(() => {
      init();
    });
    resizeObserver.observe(container);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      resizeObserver.disconnect();
    };
  }, [words]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[580px] flex items-center justify-center cursor-crosshair select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-auto"
      />
    </div>
  );
}
