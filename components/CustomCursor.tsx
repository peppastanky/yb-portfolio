import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Raw mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics configuration for smooth, elastic motion
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });

      const target = e.target as HTMLElement;
      
      // Smart hover detection using event delegation
      const clickableElement = target.closest('button') || 
                               target.closest('a') || 
                               target.closest('[data-cursor="pointer"]') ||
                               target.closest('[data-cursor-text]');
      
      setIsHovering(!!clickableElement);
      
      // Check for custom cursor text attribute
      const cursorTextElement = target.closest('[data-cursor-text]') as HTMLElement;
      if (cursorTextElement) {
        setCursorText(cursorTextElement.getAttribute('data-cursor-text') || '');
      } else {
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
    >
      {/* Main cursor circle - outline only, scales on hover */}
      <motion.div
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-primary/60 rounded-full flex items-center justify-center"
        style={{ mixBlendMode: 'difference' }}
      >
        <motion.span
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-primary text-[5px] font-light uppercase tracking-[0.2em]"
          style={{ mixBlendMode: 'difference' }}
        >
          {cursorText || 'VIEW'}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
