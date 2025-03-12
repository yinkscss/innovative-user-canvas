
import React, { useRef, useEffect } from 'react';
import { Project } from '@/types';
import { Globe, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          if (cardRef.current) {
            cardRef.current.style.animationDelay = `${0.1 * index}s`;
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="project-card glass-card rounded-2xl overflow-hidden opacity-0 h-full"
    >
      <div className="p-6 md:p-8 h-full flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
        
        <p className="text-portfolio-light/70 mb-6 flex-grow">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-light/90 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {project.links.website && (
              <a 
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300"
                aria-label="Visit website"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300"
                aria-label="GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            
            {project.links.demo && (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300"
                aria-label="Live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
