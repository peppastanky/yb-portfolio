
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ project: any; idx: number }> = ({ project, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative glass rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all duration-1000 flex flex-col ${idx % 2 === 0 ? 'md:mt-20' : ''}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="aspect-[4/5] bg-white/[0.02] relative overflow-hidden"
      >
         <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
            <div className="text-9xl font-bold tracking-tighter text-white/[0.03] select-none italic font-serif">
              {project.title.slice(0, 2)}
            </div>
         </div>
         
         <div className="absolute inset-x-8 bottom-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[8px] uppercase tracking-[0.3em] font-bold bg-primary text-black px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
         </div>
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-10 md:p-14 space-y-6 flex flex-grow flex-col justify-between border-t border-white/5"
      >
        <div>
          <h4 className="text-4xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-700">
            {project.title}
          </h4>
          <p className="mt-6 text-lg text-muted/70 leading-relaxed font-light line-clamp-3 group-hover:text-white/80 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex items-center space-x-4 pt-6 group/btn cursor-pointer">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover/btn:text-primary transition-colors">View Project</span>
          <div className="w-8 h-px bg-white/10 group-hover/btn:w-16 group-hover/btn:bg-primary transition-all duration-700"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-60 border-t border-white/5 scroll-mt-32">
      <div className="mb-40 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary mb-8">03 — BUILDS</h2>
          <h3 className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-none mb-4">SELECTED<br/><span className="italic font-serif font-medium text-muted/10">Works</span></h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 perspective-[1500px]">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
