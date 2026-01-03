
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-60 border-t border-white/5 scroll-mt-32 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-6 mb-8"
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: false }}
            className="h-px bg-primary/40"
          ></motion.div>
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary">04 — SKILLS</h2>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold tracking-tighter leading-none"
        >
          Fluent in<br/>
          <span className="italic font-serif font-medium text-muted/20">The Stack.</span>
        </motion.h3>
      </div>

      {/* Stacked cards layout */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="space-y-8">
          {SKILLS.map((group, gIdx) => {
            
            return (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: gIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group cursor-pointer relative"
                style={{
                  zIndex: SKILLS.length - gIdx,
                }}
              >
                {/* Layered shadow effect for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" 
                     style={{ transform: 'translateY(12px)' }} />
                
                <motion.div 
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { 
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  className="relative p-10 rounded-3xl border border-white/10 bg-background/98 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 shadow-2xl"
                >
                  {/* Category header with animated underline */}
                  <div className="mb-8 relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h4 
                        className="text-sm font-bold uppercase tracking-[0.3em] text-primary/90"
                      >
                        {group.category}
                      </motion.h4>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gIdx * 0.1 + 0.3 }}
                        className="text-xs text-muted/40 font-mono"
                      >
                        {String(gIdx + 1).padStart(2, '0')}
                      </motion.span>
                    </div>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: gIdx * 0.1 + 0.2 }}
                      className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent"
                    />
                  </div>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, sIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: sIdx * 0.04,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -4,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        className="relative px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-sm font-medium tracking-tight text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 select-none overflow-hidden group/pill"
                      >
                        {/* Shimmer effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/pill:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
