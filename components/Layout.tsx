
import React, { useState, useEffect, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { LenisContext } from './LenisContext';
import CursorGlow from './CursorGlow';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useContext(LenisContext);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 50);
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      lenis?.scrollTo(0);
    } else {
      const element = document.getElementById(id);
      const navHeight = navRef.current?.getBoundingClientRect().height || 0;
      if (element) {
        lenis?.scrollTo(element, { offset: -navHeight - 16 });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-black bg-background text-white overflow-x-hidden relative">
      <CursorGlow />
      
      <motion.nav
        ref={navRef}
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
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('top'); }} className="hover:text-primary transition-colors block px-4 py-2">YB</a>
          </Magnetic>
        </div>
        <div className="flex space-x-1 md:space-x-2 text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 items-center">
          <Magnetic strength={0.2}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-primary transition-colors duration-500 block px-4 py-2">01 Identity</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="hover:text-primary transition-colors duration-500 block px-4 py-2">02 Journey</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="hover:text-primary transition-colors duration-500 block px-4 py-2">03 Builds</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="hover:text-primary transition-colors duration-500 block px-4 py-2">04 Toolkit</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-primary transition-colors duration-500 block px-4 py-2 ml-4">Contact</a>
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
