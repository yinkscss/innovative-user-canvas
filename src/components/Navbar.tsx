
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'testimonials', 'about', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
        scrolled 
          ? "bg-portfolio-dark/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold text-white group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-portfolio-light transition-all duration-300 group-hover:from-portfolio-accent group-hover:to-portfolio-highlight">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                "transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-portfolio-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                activeSection === link.href.substring(1)
                  ? "text-portfolio-accent after:scale-x-100"
                  : "text-portfolio-light/80 hover:text-portfolio-accent"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-light/80 hover:text-portfolio-accent transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute left-0 w-full px-6 py-4 bg-portfolio-card/90 backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                "py-2 transition-colors duration-300",
                activeSection === link.href.substring(1)
                  ? "text-portfolio-accent"
                  : "text-portfolio-light/80 hover:text-portfolio-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
