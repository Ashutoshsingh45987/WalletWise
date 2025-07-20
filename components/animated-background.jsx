"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles (stars and sprinkles)
    const generateParticles = () => {
      const newParticles = [];
      
      // Stars
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: `star-${i}`,
          type: 'star',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 6 + 4, // Increased from 3+2 to 6+4
          delay: Math.random() * 4, // Increased from 2 to 4
        });
      }
      
      // Sprinkles
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: `sprinkle-${i}`,
          type: 'sprinkle',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 8 + 6, // Increased from 4+3 to 8+6
          delay: Math.random() * 5, // Increased from 3 to 5
          rotation: Math.random() * 360,
        });
      }
      
      // Circles
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: `circle-${i}`,
          type: 'circle',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 3,
          duration: Math.random() * 10 + 8, // Increased from 5+4 to 10+8
          delay: Math.random() * 4, // Increased from 2.5 to 4
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute animate-float-${particle.type}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            transform: particle.type === 'sprinkle' ? `rotate(${particle.rotation}deg)` : 'none',
          }}
        >
          {particle.type === 'star' && (
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-200 dark:from-yellow-300 dark:to-yellow-100 rounded-full animate-twinkle shadow-lg opacity-80 dark:opacity-60 transition-colors duration-300" />
          )}
          {particle.type === 'sprinkle' && (
            <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 dark:from-pink-300 dark:to-purple-300 rounded-full animate-spin-slow opacity-70 dark:opacity-50 transition-colors duration-300" />
          )}
          {particle.type === 'circle' && (
            <div className="w-full h-full border-2 border-blue-300 dark:border-blue-400 rounded-full animate-pulse opacity-40 dark:opacity-30 transition-colors duration-300" />
          )}
        </div>
      ))}

      {/* Floating money symbols */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce text-green-400 dark:text-green-300 opacity-20 dark:opacity-15 transition-colors duration-300" style={{ animationDuration: '3s' }}>💰</div>
      <div className="absolute top-40 right-20 text-4xl animate-pulse text-blue-400 dark:text-blue-300 opacity-25 dark:opacity-20 transition-colors duration-300" style={{ animationDuration: '4s' }}>💎</div>
      <div className="absolute bottom-32 left-1/4 text-5xl animate-float text-yellow-400 dark:text-yellow-300 opacity-20 dark:opacity-15 transition-colors duration-300" style={{ animationDuration: '8s' }}>⭐</div>
      <div className="absolute top-60 right-1/3 text-3xl animate-bounce text-purple-400 dark:text-purple-300 opacity-25 dark:opacity-20 animation-delay-1000 transition-colors duration-300" style={{ animationDuration: '3.5s' }}>✨</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-pulse text-emerald-400 dark:text-emerald-300 opacity-20 dark:opacity-15 animation-delay-2000 transition-colors duration-300" style={{ animationDuration: '5s' }}>💵</div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-gray-900/30 dark:via-transparent dark:to-purple-900/20 pointer-events-none transition-colors duration-300" />
    </div>
  );
}
