
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MY_DEFAULTS } from '../constants';

const About: React.FC = () => {
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
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="pb-60 pt-20 border-t border-white/5 scroll-mt-32">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="relative"
      >
        <div className="mb-40">
           <div className="overflow-hidden mb-4">
              <motion.h2 variants={revealVars} className="text-[10px] font-bold uppercase tracking-[1em] text-primary/60">
                01 — IDENTITY
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
                initial={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "grayscale(100%)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Builder Identity"
                  className="w-full h-full object-cover contrast-110 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
              </motion.div>
           </div>

           <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <motion.p 
                variants={revealVars}
                className="text-3xl md:text-5xl font-light tracking-tight text-white/90 leading-tight"
              >
                Information Systems at SMU. <br/>
                <span className="text-muted/40 italic font-serif">I value clarity over hype,</span> 
                thoughtful details over flashy trends.
              </motion.p>
              
              <motion.div variants={revealVars} className="h-px w-20 bg-primary/40"></motion.div>
              
              <motion.p variants={revealVars} className="text-xl text-muted leading-relaxed max-w-xl">
                My work is driven by a simple default: build first to understand the problem, 
                then iterate relentlessly until the details feel intentional and the UX feels invisible.
              </motion.p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {MY_DEFAULTS.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
               className="group relative h-64 p-8 glass rounded-[2.5rem] border border-white/5 flex flex-col justify-between overflow-hidden hover:border-primary/30 transition-all duration-700"
             >
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] group-hover:text-primary/[0.03] transition-colors font-serif">
                   {idx + 1}
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/40 group-hover:text-primary transition-colors">
                  {item.label}
                </h4>
                <p className="text-xl font-medium tracking-tight text-white/70 group-hover:text-white transition-colors">
                  {item.value}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-700 group-hover:w-full"></div>
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
