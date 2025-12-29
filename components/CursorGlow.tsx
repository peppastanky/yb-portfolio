
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 40, stiffness: 80, mass: 1 };
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
      }}
      className="fixed pointer-events-none z-[60] w-[1000px] h-[1000px] rounded-full opacity-70 mix-blend-screen"
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(202, 121, 252, 0.3) 0%, rgba(202, 121, 252, 0.1) 25%, transparent 65%)',
          filter: 'blur(35px)',
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
