import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowDownCircle } from 'lucide-react';
const HeroSection: React.FC = () => {
  const laptopRef = useRef<HTMLImageElement>(null);
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
    if (laptopRef.current) {
      observer.observe(laptopRef.current);
    }
    return () => {
      if (laptopRef.current) {
        observer.unobserve(laptopRef.current);
      }
    };
  }, []);
  return <section id="home" className="min-h-screen relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[90vh] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 space-y-6 z-10">
          <div>
            <AnimatedText text="Welcome." className="text-5xl md:text-7xl font-bold tracking-tight" delay={0.1} />
          </div>
          
          <div className="max-w-xl space-y-6 mt-8">
            <AnimatedText text="I'm a passionate web developer with a love for crafting beautiful, functional websites and applications." className="text-xl text-portfolio-light/80 leading-relaxed" delay={0.4} />
            
            <div className="pt-4 opacity-0 animate-fade-in delay-700">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-portfolio-accent to-portfolio-highlight text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-portfolio-accent/30 transition-all duration-300 group">
                View my work
                <ArrowDownCircle className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img ref={laptopRef} alt="Developer Laptop" className="w-full max-w-md opacity-0" src="/lovable-uploads/43e5ea31-ff28-457c-8c1a-d7a5b19c0f6a.png" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <div className="animate-bounce flex justify-center pb-8">
          <a href="#projects" className="text-portfolio-light/50 hover:text-portfolio-accent transition-colors duration-300">
            <ArrowDownCircle className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;