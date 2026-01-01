
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
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

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
        <div className="mb-40">
           <div className="overflow-hidden mb-4">
              <motion.h2 variants={revealVars} className="text-[10px] font-bold uppercase tracking-[1em] text-primary/60">
                01 — ABOUT
              </motion.h2>
           </div>
           <div className="flex flex-col md:flex-row items-baseline gap-x-8">
              <div className="overflow-hidden">
                <motion.h1 variants={revealVars} className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white">
                  BUILD<span className="text-primary">.</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={revealVars} className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-muted/10 italic font-serif">
                  Iterate
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
                <p className="text-4xl md:text-6xl tracking-tighter text-white/95 leading-none font-light">
                  Hi, I’m <span className="font-serif italic font-normal">Yu Bing</span>.
                </p>
                <p className="mt-4 text-base text-primary tracking-widest uppercase">
                  Information Systems Student
                </p>
              </motion.div>
              <motion.div variants={revealVars} className="h-px w-20 bg-primary/40"></motion.div>
              <motion.p variants={revealVars} className="text-xl text-muted leading-relaxed max-w-xl">
                These days, I’m usually building things with React and TypeScript. I enjoy the back-and-forth of building, breaking, fixing, and refining until things start to feel right.
              </motion.p>
           </div>
        </div>

        <div>
          <div className="overflow-hidden mb-12">
            <motion.h2 
              variants={revealVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
              className="text-[10px] font-bold uppercase tracking-[1em] text-primary/60"
            >
              My Defaults
            </motion.h2>
          </div>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              data-lenis-prevent
              className="h-[400px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              }}
            >
              <div className="h-[140px]"></div>
              {MY_DEFAULTS.map((item, idx) => (
                <div
                  key={idx}
                  className="default-item h-[120px] snap-center flex flex-col items-center justify-center text-center"
                >
                  <motion.h3 
                    variants={textVariants}
                    animate={activeIndex === idx ? 'active' : 'inactive'}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                  >
                    {item.label}
                  </motion.h3>
                  <motion.p 
                    variants={subtitleVariants}
                    animate={activeIndex === idx ? 'active' : 'inactive'}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="mt-1 text-lg italic font-serif text-primary"
                  >
                    {item.value}
                  </motion.p>
                </div>
              ))}
              <div className="h-[140px]"></div>
            </div>
            <div className="absolute inset-y-1/2 left-0 w-full h-[120px] -translate-y-1/2 pointer-events-none">
              <div className="w-full h-full border-y border-white/10"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
