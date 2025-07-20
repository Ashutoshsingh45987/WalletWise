"use client";

import { useEffect, useState } from "react";

export default function ScrollSparkles() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      // Create sparkles on scroll
      if (Math.random() > 0.85) { // 15% chance on scroll
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: window.scrollY + Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 4 + 2, // Increased from 2+1 to 4+2
        };

        setSparkles(prev => [...prev.slice(-20), newSparkle]); // Keep only last 20 sparkles

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, newSparkle.duration * 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-ping"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-pink-400 dark:from-yellow-300 dark:to-pink-300 rounded-full opacity-80 dark:opacity-60 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
