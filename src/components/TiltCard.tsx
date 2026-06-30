import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(139, 92, 246, 0.15)"
}

export default function TiltCard({ children, className = '', glowColor = 'rgba(139, 92, 246, 0.18)' }: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { damping: 25, stiffness: 150 });

  const glowX = useSpring(useTransform(x, [0, 1], ['0%', '100%']), { damping: 20, stiffness: 120 });
  const glowY = useSpring(useTransform(y, [0, 1], ['0%', '100%']), { damping: 20, stiffness: 120 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative group/tilt will-change-transform ${className}`}
    >
      {/* 3D Highlight Glow */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: `radial-gradient(350px circle at ${glowX} ${glowY}, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Actual Content Wrapper with deep 3D support */}
      <div style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
