
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 border-t border-white/5 scroll-mt-32">
      <div className="flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0.01, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-bold mb-16 tracking-tighter"
        >
          Let's build something <br />
          <span className="text-primary italic font-medium">meaningful</span> together.
        </motion.h2>
        
        <div className="flex flex-col items-center space-y-12 mb-20">
          <div className="flex flex-col items-center space-y-4">
             <motion.a 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
                href={`mailto:${CONTACT.primaryEmail}`} 
                className="text-2xl md:text-4xl font-medium text-white hover:text-primary transition-all duration-300 decoration-primary/30 underline underline-offset-[12px] decoration-[1px]"
              >
                {CONTACT.primaryEmail}
              </motion.a>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 pt-4">
                  <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    href={`tel:${CONTACT.phoneValue}`}
                    whileHover={{ color: '#CA79FC' }}
                    className="text-muted/60 hover:text-primary transition-colors text-lg tracking-tight"
                  >
                    {CONTACT.phone}
                  </motion.a>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/5"></div>
                  <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    href={`mailto:${CONTACT.secondaryEmail}`}
                    whileHover={{ color: '#CA79FC' }}
                    className="text-muted/60 hover:text-primary transition-colors text-lg tracking-tight"
                  >
                    {CONTACT.secondaryEmail}
                  </motion.a>
              </div>
          </div>

          <div className="flex space-x-10">
            {[
              { name: 'LinkedIn', url: CONTACT.linkedin },
              { name: 'GitHub', url: CONTACT.github }
            ].map((social, i) => (
              <motion.a 
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, color: '#CA79FC' }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted uppercase tracking-[0.3em] text-[10px] font-bold transition-all"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-muted space-y-6 md:space-y-0 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div>© 2024 Yu Bing • Information Systems Student</div>
          <div className="flex space-x-3 items-center">
            <span>Built with focus</span>
            <span className="text-primary">•</span>
            <span>Refined with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
