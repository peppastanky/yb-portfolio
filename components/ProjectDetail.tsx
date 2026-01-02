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
      className="py-40 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.button 
            onClick={onNavigateBack} 
            className="text-sm text-primary/70 hover:text-primary transition-colors inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            &larr; Back to Home
          </motion.button>

          {project.githubRepo && (
            <motion.a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">View on GitHub</span>
            </motion.a>
          )}
        </div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.title}
        </motion.h1>
        
        {project.subheadline && (
          <motion.p 
            className="text-2xl italic text-muted/70 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.subheadline}
          </motion.p>
        )}
        
        <motion.div 
          className="aspect-video bg-white/5 rounded-2xl my-16 overflow-hidden border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="prose prose-invert prose-lg max-w-none text-muted/80 leading-relaxed">
            <p>{project.description}</p>
          </div>

          {project.techStack && (
            <div className="mt-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">Tech Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.techStack.frontend && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.backend && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.backend.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.database && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.database.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.apis && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.apis.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.deployment && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">Deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.deployment.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.additional && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">Additional</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.additional.map(tech => (
                        <span key={tech} className="text-xs bg-white/5 text-white/80 px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {project.contributions && (
            <div className="mt-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">My Role & Contributions</h3>
              <ul className="space-y-4">
                {project.contributions.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-primary/70 mt-1.5">&#x2713;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-16">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs uppercase tracking-widest font-medium bg-white/10 text-white/70 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;