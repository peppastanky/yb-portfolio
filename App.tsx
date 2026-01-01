import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LenisContext } from './components/LenisContext';
import ProjectDetail from './components/ProjectDetail';

// Home component for the main page layout
const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <motion.div
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <About />
    <Experience />
    <Projects onNavigate={onNavigate} />
    <Skills />
    <Footer />
  </motion.div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  // Routing effect
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/project/')) {
        const projectId = path.split('/')[2];
        setCurrentPage(`project:${projectId}`);
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange(); // Initial check
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Scroll to top when navigating to project, restore position when going back
  useEffect(() => {
    if (currentPage.startsWith('project:')) {
      // Going to project detail - scroll to top
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } else if (currentPage === 'home' && savedScrollPosition > 0) {
      // Returning to home - restore saved position
      if (lenis) {
        lenis.scrollTo(savedScrollPosition, { immediate: true });
      } else {
        window.scrollTo(0, savedScrollPosition);
      }
    }
  }, [currentPage, lenis, savedScrollPosition]);

  // Scrolls to top and changes the "page"
  const handleNavigate = (page: string) => {
    // Save current scroll position before navigating
    const currentScroll = lenis?.scroll || window.scrollY;
    setSavedScrollPosition(currentScroll);
    
    const projectId = page.split(':')[1];
    window.history.pushState(null, '', `/project/${projectId}`);
    setCurrentPage(page);
  };
  
  const handleNavigateBack = () => {
    window.history.pushState(null, '', '/');
    setCurrentPage('home');
  }

  // Extracts project ID from the page state
  const projectId = currentPage.startsWith('project:') ? currentPage.split(':')[1] : null;

  return (
    <LenisContext.Provider value={lenis}>
      <Layout>
        <AnimatePresence mode="wait">
          {projectId ? (
            <ProjectDetail 
              key="project"
              projectId={projectId} 
              onNavigateBack={handleNavigateBack} 
            />
          ) : (
            <Home onNavigate={handleNavigate} />
          )}
        </AnimatePresence>
      </Layout>
    </LenisContext.Provider>
  );
};

export default App;