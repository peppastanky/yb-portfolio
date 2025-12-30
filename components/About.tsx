
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { MY_DEFAULTS } from '../constants';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  const [scrollIdx, setScrollIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const activeIdx = hoverIdx ?? scrollIdx;

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
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const listContainerVars: Variants = {
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  };
  
  const listItemVars: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="pb-60 pt-20 border-t border-white/5 scroll-mt-32">
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
            <motion.h2 variants={revealVars} className="text-[10px] font-bold uppercase tracking-[1em] text-primary/60">
              My Defaults
            </motion.h2>
          </div>
          <motion.div 
            variants={listContainerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative flex flex-col"
            onMouseLeave={() => setHoverIdx(null)}
            onViewportLeave={() => setScrollIdx(null)}
          >
            {MY_DEFAULTS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={listItemVars}
                onMouseEnter={() => setHoverIdx(idx)}
                onViewportEnter={() => setScrollIdx(idx)}
                viewport={{ amount: 0.5 }}
                className="group relative border-t border-white/5"
              >
                <div
                  className="grid grid-cols-12 items-baseline py-8 px-4 md:px-12"
                >
                  <div className="col-span-1">
                    <motion.span 
                      className="text-xs text-white/20 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      (0{idx + 1})
                    </motion.span>
                  </div>
                  <div className="col-span-11">
                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-700 ${
                      activeIdx === null || activeIdx === idx ? 'text-white' : 'text-white/10 blur-[1px]'
                    }`}>
                      {item.label}
                    </h3>
                    <p className={`text-xl md:text-2xl italic font-serif font-light pt-2 transition-all duration-700 ${
                      activeIdx === null ? 'text-white/50' :
                      activeIdx === idx ? 'text-primary' :
                      'text-white/10 blur-[1px]'
                    }`}>
                      {item.value}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {activeIdx === idx && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        className="pointer-events-none absolute inset-0 -z-10"
                        aria-hidden
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-50 blur-3xl"></div>
                        <div className="absolute inset-y-0 left-1/2 w-[200%] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(138,92,245,0.08)_0%,rgba(138,92,245,0)_100%)]"></div>
                     </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
             <div className="border-b border-white/5"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
