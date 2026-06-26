/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    // Handles resizing using ResizeObserver for ultimate responsiveness
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
      }
    });

    resizeObserver.observe(container);

    const createParticle = () => {
      const size = Math.random() * 2.5 + 0.5;
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20,
        size,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        fadeSpeed: Math.random() * 0.003 + 0.001,
      };
    };

    // Initialize particles
    const initParticlesCount = 60;
    for (let i = 0; i < initParticlesCount; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height; // Spread initially
      particles.push(p);
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity -= p.fadeSpeed;

        // Draw particle with gorgeous warm gold radial glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 152, 53, ${p.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#d49835';
        ctx.fill();

        // Recycle faded/offscreen particles
        if (p.opacity <= 0 || p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[i] = createParticle();
        }
      }
      // Reset shadows to not affect other drawings if any
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-50" />
    </div>
  );
}
