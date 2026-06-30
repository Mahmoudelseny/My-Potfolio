import { motion } from 'motion/react';

export default function FloatingParticles() {
  // Generate a fixed set of random parameters to avoid hydration mismatch
  const particles = [
    { size: 4, left: 12, top: 18, duration: 25, delay: 0 },
    { size: 6, left: 24, top: 45, duration: 35, delay: 2 },
    { size: 3, left: 45, top: 82, duration: 20, delay: 4 },
    { size: 5, left: 68, top: 22, duration: 40, delay: 1 },
    { size: 7, left: 88, top: 60, duration: 30, delay: 3 },
    { size: 3, left: 5,  top: 75, duration: 28, delay: 5 },
    { size: 5, left: 95, top: 15, duration: 32, delay: 2 },
    { size: 4, left: 35, top: 30, duration: 24, delay: 6 },
    { size: 6, left: 78, top: 85, duration: 38, delay: 1 },
    { size: 4, left: 55, top: 10, duration: 27, delay: 3 },
    { size: 5, left: 15, top: 90, duration: 31, delay: 4 },
    { size: 3, left: 82, top: 40, duration: 22, delay: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400/20 blur-[1.5px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 35, 0],
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
