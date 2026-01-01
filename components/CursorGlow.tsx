
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 50, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(173, 89, 235, 0.3) 0%, transparent 70%)',
      }}
      className="fixed pointer-events-none z-[60] w-[600px] h-[600px] rounded-full mix-blend-screen"
    />
  );
};

export default CursorGlow;

