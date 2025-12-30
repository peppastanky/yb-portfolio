
import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const startScramble = (duration: number) => {
    let frame = 0;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const scramble = () => {
      const newText = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          const progress = frame / totalFrames;
          if (i < progress * text.length) {
            return text[i];
          }

          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          return randomChar;
        })
        .join('');

      setDisplayedText(newText);
      frame++;

      if (frame >= totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayedText(text);
      }
    };

    intervalRef.current = setInterval(scramble, frameRate);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayedText(text);
  };

  useEffect(() => {
    startScramble(3000); // 3-second duration on initial load
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text]);

  return (
    <span 
      className={className}
      onMouseEnter={() => startScramble(1333)} // Shorter duration on hover
      onMouseLeave={handleMouseLeave}
    >
      {displayedText}
    </span>
  );
};

export default ScrambleText;
