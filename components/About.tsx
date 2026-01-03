
import React, { useState, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { MY_DEFAULTS } from '../constants';

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const items = container.querySelectorAll('.default-item');
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      items.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });
      
      setActiveIndex(prevIndex => {
        if (prevIndex !== closestIndex) {
          return closestIndex;
        }
        return prevIndex;
      });
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the title and subtitle text.
  // Framer Motion will animate between these states.
  const textVariants: Variants = {
    active: {
      scale: 1,
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    inactive: {
      scale: 0.85,
      opacity: 0.3,
      y: -10,
      filter: 'blur(2px)',
    }
  };

  const subtitleVariants: Variants = {
    active: { opacity: 1, color: '#CA79FC' },
    inactive: { opacity: 0.5, color: '#6B7280' }
  };

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const revealVars: Variants = {
    hidden: { y: "60%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
  };

  return (
    <section id="about" className="pb-32 pt-20 border-t border-white/5 scroll-mt-32">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="relative"
      >
        <div className="mb-20 sm:mb-28 md:mb-40">
           <div className="overflow-hidden mb-4">
              <motion.h2 variants={revealVars} className="text-[10px] font-bold uppercase tracking-[1em] text-primary/60">
                01 — ABOUT ME
              </motion.h2>
           </div>
           <div className="flex flex-col md:flex-row items-baseline gap-x-8">
              <div className="overflow-hidden">
                <motion.h1 variants={revealVars} className="text-7xl sm:text-8xl md:text-9xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.85] text-white">
                  ABOUT<span className="text-primary">.</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={revealVars} className="text-7xl sm:text-8xl md:text-9xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.85] text-muted/50 italic font-serif">
                  Me
                </motion.h1>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-60">
           <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass group"
              >
                <img 
                  src="/profilepic.jpg" 
                  alt="A profile picture of Yu Bing"
                  className="w-full h-full object-cover contrast-110 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
              </motion.div>
           </div>
           <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <motion.div variants={revealVars}>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white/95 leading-none font-light">
                  Hi, I'm <span className="font-serif italic font-normal">Yu Bing</span>.
                </p>
                <p className="mt-4 text-base text-primary tracking-widest uppercase">
                  Information Systems Student @ SMU
                </p>
              </motion.div>
              <motion.div variants={revealVars} className="h-px w-20 bg-primary/40"></motion.div>
              <motion.p variants={revealVars} className="text-xl text-muted leading-relaxed max-w-xl">
                These days, I'm usually building things with React and TypeScript. I enjoy the back-and-forth of building, breaking, fixing, and refining until things start to feel right.
              </motion.p>
              <motion.div 
                variants={revealVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="pt-4"
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-medium text-primary/90 hover:text-primary group"
                >
                  <span>View Resume</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
           </div>
        </div>

        <div className="relative">
          <div className="relative z-10 overflow-hidden mb-12">
            <motion.h2 
              variants={revealVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-[24px] font-bold uppercase tracking-[1em] text-primary/60 text-center"
            >
              More about me
            </motion.h2>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-1/4 -left-20 w-48 h-48 bg-primary/3 rounded-full blur-3xl"
            ></motion.div>
          </div>
          
          <div className="relative backdrop-blur-sm bg-white/[0.01] rounded-3xl border border-white/5 p-8 md:p-12">
            <div 
              ref={scrollContainerRef}
              data-lenis-prevent
              className="h-[400px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              }}
            >
              <div className="h-[100px]"></div>
              {MY_DEFAULTS.map((item, idx) => (
                <div
                  key={idx}
                  className="default-item relative h-[200px] snap-center flex flex-col items-center justify-center text-center px-8"
                >
                  <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-0 transition-opacity duration-500"
                       style={{ opacity: activeIndex === idx ? 0.2 : 0 }}
                  ></div>
                  <motion.h3 
                    variants={textVariants}
                    animate={activeIndex === idx ? 'active' : 'inactive'}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                    style={{
                      filter: activeIndex === idx ? 'blur(0px)' : 'blur(3px)',
                      opacity: activeIndex === idx ? 1 : 0.3
                    }}
                  >
                    {item.label}
                  </motion.h3>
                  <motion.p 
                    variants={subtitleVariants}
                    animate={activeIndex === idx ? 'active' : 'inactive'}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="mt-1 text-lg italic font-serif text-primary max-w-2xl"
                    style={{
                      filter: activeIndex === idx ? 'blur(0px)' : 'blur(2px)',
                      opacity: activeIndex === idx ? 1 : 0.2
                    }}
                  >
                    {item.value}
                  </motion.p>
                </div>
              ))}
              <div className="h-[100px]"></div>
            </div>
            
            {/* Enhanced focus indicator */}
            <div className="absolute inset-y-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none">
              <div className="w-full h-full border-y border-primary/30 bg-gradient-to-r from-transparent via-primary/10 to-transparent shadow-[0_0_40px_rgba(202,121,252,0.15)]"></div>
            </div>
            
            {/* Scroll hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
              <p className="text-xs uppercase tracking-wider text-white/40">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
