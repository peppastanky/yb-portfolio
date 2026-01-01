
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-60 border-t border-white/5 scroll-mt-32">
      <div className="mb-32">
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
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary">04 — TOOLKIT</h2>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-none"
        >
          Fluent in<br/>
          <span className="italic font-serif font-medium text-muted/20">The Stack.</span>
        </motion.h3>
      </div>

      <div className="space-y-20">
        {SKILLS.map((group, gIdx) => (
          <div key={group.category} className="space-y-8">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted/30 ml-2"
            >
              {group.category}
            </motion.h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {group.items.map((skill, sIdx) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                      duration: 0.5, 
                                      delay: sIdx * 0.05,
                                      ease: [0.16, 1, 0.3, 1] 
                                    }}
                                    whileHover={{ 
                                      scale: 1.05,
                                      y: -4,
                                      borderColor: 'rgba(202, 121, 252, 0.3)',
                                      transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 rounded-full border border-white/5 glass text-sm font-medium tracking-tight text-white/60 hover:text-primary transition-colors duration-300 cursor-pointer select-none"
                                  >
                                    {skill}
                                  </motion.div>              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
