
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-black bg-background text-white overflow-x-hidden relative">
      <CursorGlow />
      
      <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <motion.nav
          ref={navRef}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-fit"
        >
          <div className={`flex items-center justify-between gap-1 px-4 sm:px-6 py-3 rounded-full border transition-all duration-500 ${
            scrolled 
            ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20' 
            : 'bg-white/5 backdrop-blur-md border-white/10'
          }`}>
          {/* Logo */}
          <div className="text-sm font-bold tracking-tighter">
            <Magnetic strength={0.3}>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('top'); }} className="hover:text-primary transition-colors block px-3 py-1.5">YB</a>
            </Magnetic>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Nav Divider */}
            <div className="w-px h-4 bg-white/10 mx-1"></div>
            
            <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.3em] text-white/50">
              <Magnetic strength={0.2}>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-primary transition-all duration-300 rounded-full px-3 py-1.5 relative group">
                  About
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="hover:text-primary transition-all duration-300 rounded-full px-3 py-1.5 relative group">
                  Experience
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="hover:text-primary transition-all duration-300 rounded-full px-3 py-1.5 relative group">
                  Projects
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="hover:text-primary transition-all duration-300 rounded-full px-3 py-1.5 relative group">
                  Skills
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              </Magnetic>
              
              {/* Contact Button */}
              <div className="w-px h-4 bg-white/10 mx-1"></div>
              <Magnetic strength={0.2}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-primary/90 hover:bg-primary text-black hover:scale-105 transition-all duration-300 rounded-full px-4 py-1.5 ml-1">Contact</a>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col p-2">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3">About Me</a>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3">Work Experience</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3">Featured Projects</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-primary hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3">Skills</a>
                <div className="h-px bg-white/10 my-2"></div>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-sm font-bold uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 text-black transition-all duration-300 rounded-xl px-4 py-3 text-center">Contact</a>
              </div>
            </motion.div>
          )}
        </motion.nav>
      </div>
      
      <main className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
