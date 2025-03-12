
import React, { useRef, useEffect } from 'react';
import { Code, Database, Layout, Server, Terminal, Globe } from 'lucide-react';
import CurvedDivider from './CurvedDivider';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
  icon: React.ReactNode;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay, icon }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (barRef.current) {
            (barRef.current as HTMLElement).style.width = `${percentage}%`;
            (barRef.current as HTMLElement).style.transitionDelay = `${delay}s`;
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-portfolio-accent">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-portfolio-light/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-portfolio-dark/50 rounded-full overflow-hidden">
        <div 
          ref={barRef}
          className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-highlight rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const frontendSkills = [
    { name: 'React/Next.js', percentage: 95, icon: <Code className="w-4 h-4" />, delay: 0.1 },
    { name: 'TypeScript', percentage: 90, icon: <Code className="w-4 h-4" />, delay: 0.2 },
    { name: 'CSS/Tailwind', percentage: 92, icon: <Layout className="w-4 h-4" />, delay: 0.3 },
    { name: 'HTML/Accessibility', percentage: 88, icon: <Globe className="w-4 h-4" />, delay: 0.4 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85, icon: <Server className="w-4 h-4" />, delay: 0.5 },
    { name: 'Supabase', percentage: 88, icon: <Database className="w-4 h-4" />, delay: 0.6 },
    { name: 'API Integration', percentage: 92, icon: <Terminal className="w-4 h-4" />, delay: 0.7 },
    { name: 'MongoDB', percentage: 80, icon: <Database className="w-4 h-4" />, delay: 0.8 }
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 bg-portfolio-dark overflow-hidden">
      <CurvedDivider position="top" className="absolute top-0 left-0 w-full h-16" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            <span className="text-gradient">My Skills</span>
          </h2>
          <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
            Through years of practice and project work, I've developed proficiency in various technologies and methodologies that allow me to create robust and scalable web solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6 md:p-8 rounded-xl opacity-0 animate-fade-in delay-200">
            <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                percentage={skill.percentage} 
                icon={skill.icon}
                delay={skill.delay}
              />
            ))}
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl opacity-0 animate-fade-in delay-300">
            <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                percentage={skill.percentage} 
                icon={skill.icon}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
      
      <CurvedDivider position="bottom" className="absolute bottom-0 left-0 w-full h-16" />
    </section>
  );
};

export default SkillsSection;
