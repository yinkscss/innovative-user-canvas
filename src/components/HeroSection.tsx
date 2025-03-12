
import React, { useRef, useEffect } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-card/50 to-portfolio-dark z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <AnimatedText 
              text="Hello, I'm a" 
              className="text-lg md:text-xl text-portfolio-light/80"
              delay={0}
            />
            <AnimatedText 
              text="Web Developer" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
              delay={0.1}
            />
            <AnimatedText 
              text="Crafting digital experiences with code" 
              className="text-xl md:text-2xl text-portfolio-light/80"
              delay={0.2}
            />
          </div>
          
          <p className="text-portfolio-light/70 max-w-xl text-balance opacity-0 animate-fade-in delay-300">
            I'm a passionate and skilled web professional, bringing a blend of creativity and technical expertise to the digital realm. From captivating web designs to seamless backend development, my skills span the spectrum of web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in delay-400">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-portfolio-accent hover:bg-portfolio-accent/90 text-white rounded-full transition-colors duration-300 text-center hover-glow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-portfolio-accent/50 hover:border-portfolio-accent text-portfolio-light rounded-full transition-colors duration-300 text-center hover-glow"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-portfolio-accent/40 to-portfolio-dark/40 rounded-full blur-3xl opacity-30"></div>
            <img 
              ref={imageRef}
              src="/lovable-uploads/6d6d0689-bd5d-4ee3-bb7e-76c793091b7f.png" 
              alt="Developer" 
              className="relative z-10 opacity-0 max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
