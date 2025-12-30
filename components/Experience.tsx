
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const workExp = EXPERIENCE.filter(e => e.type === 'work');
  const eduExp = EXPERIENCE.filter(e => e.type === 'education');

  return (
    <section id="experience" className="py-60 border-t border-white/5 scroll-mt-32">
      <div className="max-w-4xl mx-auto mb-80">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-32"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary mb-8">02 — JOURNEY</h2>
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Experience<span className="text-primary">.</span></h3>
        </motion.div>

        <div className="space-y-40">
          {workExp.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pl-0 md:pl-20"
            >
              <div className="absolute -left-10 top-0 text-[10rem] md:text-[14rem] font-bold text-white/[0.2] group-hover:text-primary/[0.25] transition-all duration-1000 select-none pointer-events-none -z-10 leading-none">
                {item.period.split('-')[0].trim().slice(-2)}
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">{item.period}</span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="h-px flex-grow bg-white/5 group-hover:bg-primary/20 origin-left transition-colors duration-700"
                  ></motion.div>
                </div>
                
                <h4 className="text-4xl md:text-6xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-700">
                  {item.institution}
                </h4>
                
                <p className="text-xl md:text-2xl italic font-serif text-muted/60 group-hover:text-primary/60 transition-colors">
                  {item.degree}
                </p>

                {item.description && (
                  <ul className="mt-8 space-y-4 max-w-2xl border-l border-white/5 pl-8">
                    {item.description.map((point, pIdx) => (
                      <li key={pIdx} className="text-muted/60 text-[15px] leading-relaxed group-hover:text-white/80 transition-colors">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-60 pt-40 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-px bg-gradient-to-b from-primary/40 to-transparent mb-12"
          ></motion.div>
          <h2 className="text-[10px] font-bold uppercase tracking-[1.5em] text-white/20 mb-10">ACADEMIC ARCHITECTURE</h2>
          <h3 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6">Learning<span className="text-primary">.</span></h3>
          <p className="text-muted/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A chronological timeline of academic rigor and foundational knowledge across three institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eduExp.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-12 glass rounded-[3.5rem] border border-white/5 hover:border-primary/40 transition-all duration-1000 flex flex-col justify-between min-h-[450px] overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-4 text-7xl font-bold text-white/[0.01] group-hover:text-primary/[0.03] transition-all duration-1000 rotate-90 origin-bottom-right whitespace-nowrap select-none font-serif italic">
                {item.institution.split(' ')[0]}
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-12">
                   <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-700 shadow-[0_0_10px_rgba(202,121,252,0.5)]"></div>
                   <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/40 group-hover:text-primary transition-colors duration-700">
                    {item.period}
                  </p>
                </div>
                
                <h5 className="text-3xl md:text-4xl font-bold tracking-tighter text-white/90 group-hover:text-white transition-all duration-700 leading-[1.1] mb-8">
                  {item.institution}
                </h5>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="h-px w-0 bg-primary/40 group-hover:w-full transition-all duration-1000"></div>
                <p className="text-xl text-muted/40 italic font-serif group-hover:text-primary/60 transition-all duration-700">
                  {item.degree}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
