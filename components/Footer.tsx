
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5 scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Let's build something<br />
            <span className="text-primary italic font-medium">meaningful</span> together.
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-20"
        >
          <div className="relative p-8 sm:p-10 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Email */}
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold mb-3">Email</p>
                <motion.a
                  href={`mailto:${CONTACT.primaryEmail}`}
                  whileHover={{ x: 5 }}
                  className="text-lg sm:text-xl font-medium text-white/90 hover:text-primary transition-colors duration-300 block"
                >
                  {CONTACT.primaryEmail}
                </motion.a>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-white/10"></div>

              {/* Social Links */}
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold mb-4">Connect</p>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', url: CONTACT.linkedin },
                    { name: 'GitHub', url: CONTACT.github }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-primary/5 text-white/70 hover:text-primary transition-all duration-300"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30"
        >
          <p>© 2025 Yu Bing</p>
          <p className="text-white/20">Information Systems Student</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
