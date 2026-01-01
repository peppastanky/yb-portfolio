import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  // We are only featuring one project.
  const featuredProject = PROJECTS[0];

  if (!featuredProject) {
    return null; // Don't render if no project is defined.
  }

  return (
    <section id="projects" className="py-60 border-t border-white/5 scroll-mt-32">
      {/* Section Header */}
      <div className="mb-40 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-primary mb-8">03 — FEATURED BUILD</h2>
          <h3 className="text-7xl md:text-[8rem] font-bold tracking-tighter leading-none mb-4">
            Featured<br/><span className="italic font-serif font-medium text-muted/10">Build.</span>
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
          onClick={() => onNavigate(`project:${featuredProject.id}`)}
          className="relative aspect-video bg-white/[0.02] rounded-[2rem] border border-white/10 transition-all duration-700 hover:border-primary/30 hover:bg-white/[0.04] group overflow-hidden cursor-pointer"
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
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-t from-black/60 via-black/40 to-transparent">
              {/* Top: Title & Description */}
              <div>
                <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-500">
                  {featuredProject.title}
                </h4>
                <p className="mt-4 text-base text-muted/80 max-w-xl leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Bottom: Tags and Link */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                <div className="flex flex-wrap gap-2 max-w-lg">
                  {featuredProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.3em] font-medium bg-white/5 text-white/60 group-hover:text-white/80 px-3 py-1.5 rounded-full transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => onNavigate(`project:${featuredProject.id}`)}
                  className="group/btn inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-primary/90 hover:bg-primary border border-primary hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-black">
                    View Project
                  </span>
                  <svg 
                    className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform duration-300" 
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