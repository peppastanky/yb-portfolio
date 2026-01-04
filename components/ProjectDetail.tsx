import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  projectId: string;
  onNavigateBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onNavigateBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <button onClick={onNavigateBack} className="text-primary hover:underline">
          &larr; Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.section 
      className="py-20 sm:py-24 md:py-32 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sticky Back Button */}
      <div className="fixed top-24 sm:top-28 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-50">
        <motion.button 
          onClick={onNavigateBack}
          whileHover={{ x: -5, scale: 1.05 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="group flex items-center gap-2 px-4 py-2.5 text-sm text-white/60 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 hover:border-primary/40 rounded-full transition-all duration-300 shadow-lg shadow-black/20"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back to Projects</span>
          <span className="sm:hidden">Back</span>
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* GitHub Link */}
        <motion.div 
          className="flex justify-end mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.githubRepo && (
            <motion.a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>
          )}
        </motion.div>
        
        {/* Hero Title Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none">
              {project.title}
              <span className="text-primary">.</span>
            </h1>
          </motion.div>
          
          {project.subheadline && (
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {project.subheadline}
            </motion.p>
          )}
        </div>
        
        {/* Video/Image Section with Enhanced Frame */}
        <motion.div 
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-20 group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {project.video ? (
            project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
              <iframe 
                src={project.video}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            ) : (
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-2xl text-muted/40">Image or Video Placeholder</p>
            </div>
          )}
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>

        {/* Tech Stack Section with Interactive Cards */}
        {project.techStack && (
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
              Tech Stack<span className="text-primary">.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.techStack.frontend && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
              {project.techStack.backend && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
              {project.techStack.database && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
              {project.techStack.apis && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">APIs</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.apis.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
              {project.techStack.deployment && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">Deployment</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.deployment.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
              {project.techStack.additional && (
                <motion.div 
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors">Additional</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.additional.map(tech => (
                      <motion.span 
                        key={tech} 
                        className="text-sm bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Contributions Section with Timeline Design */}
        {project.contributions && (
          <motion.div 
            className="mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16">
              My Role & Contributions<span className="text-primary">.</span>
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line - Hidden on mobile, shown on tablet+ */}
              <motion.div 
                className="hidden sm:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
              
              <div className="space-y-8 sm:space-y-12 sm:ml-12">
                {project.contributions.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.15, duration: 0.6 }}
                    className="relative group"
                  >
                    {/* Connection Line - Hidden on mobile */}
                    <motion.div 
                      className="hidden sm:block absolute -left-12 top-3 w-12 h-[2px] bg-gradient-to-r from-primary/40 to-transparent group-hover:from-primary group-hover:to-primary/40 transition-all duration-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1 + idx * 0.15 + 0.2, duration: 0.4 }}
                      style={{ transformOrigin: 'left' }}
                    />
                    
                    {/* Timeline Dot - Hidden on mobile */}
                    <motion.div 
                      className="hidden sm:block absolute -left-[13px] top-2 w-3 h-3 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 border-2 border-background"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    />
                    
                    {/* Content Card with Alternating Design */}
                    <motion.div
                      className={`relative p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br transition-all duration-500 overflow-hidden ${
                        idx % 2 === 0 
                          ? 'from-white/[0.03] to-primary/[0.02] hover:border-primary/30' 
                          : 'from-white/[0.02] to-white/[0.03] hover:border-primary/20'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Background Number - Smaller on mobile */}
                      <div className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 text-5xl sm:text-7xl md:text-8xl font-bold text-white/[0.02] select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-sm sm:text-base text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">
                          {point}
                        </p>
                      </div>
                      
                      {/* Hover Accent Line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Fade Orb - Hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute -left-6 bottom-0 w-12 h-12 bg-primary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-3"
        >
          {project.tags.map((tag, idx) => (
            <motion.span 
              key={tag} 
              className="text-xs uppercase tracking-[0.2em] font-medium bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 px-4 py-2.5 rounded-full border border-white/10 hover:border-primary/30 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;