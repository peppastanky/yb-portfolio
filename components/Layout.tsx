
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CursorGlow from './CursorGlow';
import Magnetic from './Magnetic';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-black bg-background text-white overflow-x-hidden relative">
      <CursorGlow />
      
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-8 md:px-16 py-6 md:py-8 flex items-center justify-between ${
          scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 md:py-6' 
          : 'bg-transparent'
        }`}
      >
        <div className="text-lg font-bold tracking-tighter">
          <Magnetic strength={0.3}>
            <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-primary transition-colors block px-4 py-2">YB</a>
          </Magnetic>
        </div>
        <div className="flex space-x-1 md:space-x-2 text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 items-center">
          <Magnetic strength={0.2}>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-colors duration-500 block px-4 py-2">01 Identity</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-primary transition-colors duration-500 block px-4 py-2">02 Journey</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-primary transition-colors duration-500 block px-4 py-2">03 Builds</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-primary transition-colors duration-500 block px-4 py-2">04 Toolkit</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-colors duration-500 block px-4 py-2 ml-4">Contact</a>
          </Magnetic>
        </div>
      </motion.nav>
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
