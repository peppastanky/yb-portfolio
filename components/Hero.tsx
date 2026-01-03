
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import ScrambleText from './ScrambleText';
import Magnetic from './Magnetic';
import { CONTACT } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yuX = useTransform(scrollYProgress, [0, 0.8], ["0vw", "-100vw"]);
  const bingX = useTransform(scrollYProgress, [0, 0.8], ["0vw", "100vw"]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(15px)"]);
  
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const letterVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const nameYu = "YU".split("");
  const nameBing = "BING".split("");

  const socialLinks = [
    { 
      id: 'mail', 
      href: `mailto:${CONTACT.primaryEmail}`, 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      )
    },
    { 
      id: 'linkedin', 
      href: CONTACT.linkedin, 
      isExternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      id: 'github', 
      href: CONTACT.github, 
      isExternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="h-[110vh] relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 overflow-hidden">
      <motion.section 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, filter: blur }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 w-full flex flex-col items-center px-4 overflow-hidden">
          <div className="flex flex-row items-center justify-center font-bold leading-none tracking-[-0.08em] select-none text-white whitespace-nowrap w-full overflow-hidden">
            <motion.div style={{ x: yuX }} className="flex">
              {nameYu.map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVars}
                  whileHover={{ 
                    color: '#CA79FC', 
                    scale: 1.05,
                    y: -10,
                    textShadow: "0 0 30px rgba(202, 121, 252, 0.6)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="text-[19vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] block will-change-transform cursor-default transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div style={{ x: bingX }} className="flex">
              <span className="text-[18vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] block">&nbsp;</span>
              {nameBing.map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVars}
                  whileHover={{ 
                    color: '#CA79FC', 
                    scale: 1.05,
                    y: -10,
                    textShadow: "0 0 30px rgba(202, 121, 252, 0.6)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="text-[19vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] block will-change-transform cursor-default transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span variants={letterVars} className="text-[18vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] text-primary block">.</motion.span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 flex flex-col items-center"
          >
            <ScrambleText 
              text="Information Systems • Builder"
              className="text-[10px] md:text-[12px] font-bold text-white uppercase tracking-[1em] mb-12 opacity-80 text-center "
            />

            <div className="flex items-center space-x-8">
              {socialLinks.map((link, idx) => (
                <Magnetic key={link.id} strength={0.4}>
                  <motion.a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: 'rgba(202, 121, 252, 0.15)',
                      borderColor: 'rgba(202, 121, 252, 0.6)',
                      color: '#CA79FC',
                      boxShadow: '0 0 25px rgba(202, 121, 252, 0.3)'
                    }}
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white/70 shadow-[0_0_15px_-5px_rgba(202,121,252,0.2)] transition-all duration-500"
                    aria-label={link.id}
                  >
                    {link.icon}
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 w-px h-8 bg-gradient-to-b from-primary/20 to-transparent"
        />
      </motion.section>
    </div>
  );
};

export default Hero;
