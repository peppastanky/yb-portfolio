import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { ExperienceItem } from '../types';

// Component for a single WORK experience item with parallax scroll animations.
const WorkExperienceItem = ({ item }: { item: ExperienceItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const contentX = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);
  const yearY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity: contentOpacity, scale: contentScale, x: contentX }}
      className="relative pl-0 md:pl-20"
    >
      <div className="absolute -left-10 top-0 text-[10rem] md:text-[14rem] font-bold text-white/[0.03] select-none pointer-events-none -z-10 leading-none">
        <motion.div style={{ y: yearY }}>
          {item.period.split('-')[0].trim().slice(-2)}
        </motion.div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 ml-2 sm:ml-4">{item.period}</span>
          <motion.div 
            style={{ scaleX: lineScaleX, originX: 0 }}
            className="h-px flex-grow bg-white/5"
          ></motion.div>
        </div>
        <h4 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white">{item.institution}</h4>
        <p className="text-xl md:text-2xl italic font-serif text-muted/60">{item.degree}</p>
        {item.description && (
          <ul className="mt-8 space-y-4 max-w-2xl border-l border-white/5 pl-8">
            {item.description.map((point, pIdx) => (
              <li key={pIdx} className="text-muted/60 text-[15px] leading-relaxed">{point}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

// CORRECTED component for a single EDUCATION item with expandable details.
const EducationItem = ({ item, idx }: { item: ExperienceItem, idx: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: idx * 0.2,
      } 
    }
  };

  const textVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      className="group relative cursor-pointer"
      onClick={() => item.details && setIsExpanded(!isExpanded)}
    >
      <motion.div
        animate={{ 
          height: isExpanded ? 'auto' : '450px',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-12 glass rounded-[3.5rem] border border-white/5 hover:border-primary/40 transition-colors duration-1000 overflow-hidden flex flex-col"
      >
        {/* Background watermark */}
        <div className="absolute -right-8 -bottom-4 text-7xl font-bold text-white/[0.01] group-hover:text-primary/[0.03] transition-all duration-1000 rotate-90 origin-bottom-right whitespace-nowrap select-none font-serif italic">
          {item.institution.split(' ')[0]}
        </div>
        
        {/* Main content - always visible */}
        <div className="relative z-10 flex-grow">
          <motion.div variants={textVariants} className="flex items-center space-x-4 mb-12 pl-2 sm:pl-4">
            <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-700 shadow-[0_0_10px_rgba(202,121,252,0.5)]"></div>
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/40 group-hover:text-primary transition-colors duration-700">{item.period}</p>
          </motion.div>
          <motion.h5 variants={textVariants} className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white/90 group-hover:text-white transition-all duration-700 leading-[1.1] mb-8">
            {item.institution}
          </motion.h5>
        </div>
        
        <motion.div variants={textVariants} className="relative z-10 space-y-6">
          <div className="h-px w-0 bg-primary/40 group-hover:w-full transition-all duration-1000"></div>
          <p className="text-xl text-muted/40 italic font-serif group-hover:text-primary/60 transition-all duration-700">{item.degree}</p>
        </motion.div>

        {/* Expanded details */}
        {item.details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? 'auto' : 0,
              marginTop: isExpanded ? 32 : 0
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 overflow-hidden"
          >
            <div className="space-y-6 pt-6 border-t border-white/10">
              {/* Score */}
              {item.details.score && (
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/80">Score:</span>
                  <span className="text-lg font-mono text-white/80">{item.details.score}</span>
                </div>
              )}

              {/* Leadership */}
              {item.details.leadership && item.details.leadership.length > 0 && (
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60"></span>
                    Leadership & Involvement
                  </h6>
                  <div className="grid gap-2">
                    {item.details.leadership.map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-white/70 pl-4 py-1.5 border-l-2 border-primary/20 hover:border-primary/60 transition-colors"
                      >
                        {role}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coursework */}
              {item.details.coursework && (
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60"></span>
                    Coursework
                  </h6>
                  
                  {item.details.coursework.exemplary && (
                    <div className="mb-4">
                      <p className="text-xs text-white/50 mb-2.5 ml-4">Exemplary Performance:</p>
                      <div className="grid gap-2">
                        {item.details.coursework.exemplary.map((course, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="text-sm text-white/80 pl-4 py-1.5 border-l-2 border-primary/40 bg-primary/5 rounded-r"
                          >
                            {course}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.details.coursework.relevant && (
                    <div>
                      <p className="text-xs text-white/50 mb-2.5 ml-4">Relevant Courses:</p>
                      <div className="flex flex-wrap gap-2 ml-4">
                        {item.details.coursework.relevant.map((course, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.03 }}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-primary/40 hover:text-primary/80 transition-all"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Achievements */}
              {item.details.achievements && item.details.achievements.length > 0 && (
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60"></span>
                    Achievements
                  </h6>
                  <div className="grid gap-2">
                    {item.details.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-white/70 pl-4 py-1.5 border-l-2 border-primary/20 hover:border-primary/60 transition-colors"
                      >
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Community Service */}
              {item.details.communityService && item.details.communityService.length > 0 && (
                <div>
                  <h6 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60"></span>
                    Community Service
                  </h6>
                  <div className="grid gap-2">
                    {item.details.communityService.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-white/70 pl-4 py-1.5 border-l-2 border-primary/20 hover:border-primary/60 transition-colors"
                      >
                        {service}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* View Details button at the bottom */}
        {item.details && (
          <div className="relative z-10 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all text-xs font-medium text-primary/80 hover:text-primary w-full justify-center"
            >
              <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

const Experience: React.FC = () => {
  const workExp = EXPERIENCE.filter(e => e.type === 'work');
  const eduExp = EXPERIENCE.filter(e => e.type === 'education');

  return (
    <section id="experience" className="py-32 border-t border-white/5 scroll-mt-32">
      {/* WORK EXPERIENCE SECTION */}
      <div className="max-w-4xl mx-auto mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary mb-8">02 — WORK EXPERIENCE</h2>
          <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter text-white">Experience<span className="text-primary">.</span></h3>
        </motion.div>
        <div className="space-y-40">
          {workExp.map((item, idx) => (
            <WorkExperienceItem key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="mt-0 pt-20 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 sm:mb-24 md:mb-32 flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-px bg-gradient-to-b from-primary/40 to-transparent mb-12"
          ></motion.div>
          <h2 className="text-[10px] font-bold uppercase tracking-[1.5em] text-white/20 mb-10">YU BING's</h2>
          <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter text-white mb-6">Academic Background<span className="text-primary">.</span></h3>
          <p className="text-muted/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A simple overview of my academic experience.
          </p>
        </motion.div>
        
        {/* This grid now uses the new animated text items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eduExp.map((item, idx) => (
            <EducationItem key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;