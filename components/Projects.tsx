import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  // Track screen size for responsive tag display
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // We are only featuring one project.
  const featuredProject = PROJECTS[0];
  const maxTags = isMobile ? 5 : 8;

  if (!featuredProject) {
    return null; // Don't render if no project is defined.
  }

  return (
    <section id="projects" className="py-60 border-t border-white/5 scroll-mt-32">
      {/* Section Header */}
      <div className="mb-20 sm:mb-28 md:mb-40 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary mb-8">03 — FEATURED PROJECTS</h2>
          <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-none mb-4">
            Featured<br/><span className="italic font-serif font-medium text-muted/20">Build.</span>
          </h3>
        </motion.div>
      </div>

      {/* New Visual-First Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] bg-white/[0.02] rounded-2xl sm:rounded-[2rem] border border-white/10 transition-all duration-700 hover:border-primary/30 hover:bg-white/[0.04] group overflow-hidden"
        >
            {/* Project Image Background */}
            {featuredProject.image && (
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
              />
            )}
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-primary/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-1000"></div>

            {/* Overlaid Content */}
            <div className="absolute inset-0 p-8 sm:p-10 md:p-14 lg:p-20 xl:p-24 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              {/* Top: Title & Description */}
              <div className="flex-shrink-0">
                <h4 className="text-5xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-500 leading-tight">
                  {featuredProject.title}
                </h4>
                <p className=" mt-4 sm:mt-5 md:mt-6 text-base sm:text-md md:text-md text-muted/90 max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                  {featuredProject.description}
                </p>
              </div>

              {/* Bottom: Tags and Link */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 flex-shrink-0">
                {/* Tags Row - Show fewer on mobile */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featuredProject.tags.slice(0, maxTags).map(tag => (
                    <span key={tag} className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-medium bg-white/5 text-white/70 group-hover:text-white/90 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full transition-colors whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                  {featuredProject.tags.length > maxTags && (
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-medium bg-white/5 text-white/70 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                      +{featuredProject.tags.length - maxTags}
                    </span>
                  )}
                </div>
                
                {/* Button Row */}
                <div className="flex justify-start">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(`project:${featuredProject.id}`);
                    }}
                    className="group/btn inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-primary hover:bg-primary/90 border border-primary hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                  >
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] text-black whitespace-nowrap">
                      View Project
                    </span>
                    <svg 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </motion.div>

      {/* Soft Hint for Future Work */}
      <motion.div 
        className="mt-40 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm text-muted/40">More experiments are always in progress.</p>
      </motion.div>

    </section>
  );
};

export default Projects;