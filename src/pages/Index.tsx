
import React, { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ThemeToggle from '@/components/ThemeToggle';

const Index: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Apply theme to the document
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    
    // Intersection Observer for animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with slide-in-section class
    document.querySelectorAll('.slide-in-section').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.slide-in-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [theme]);

  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Theme toggle moved to bottom-right corner for better accessibility */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Index;
