
import React, { useRef, useEffect, useState } from 'react';
import { Project } from '@/types';
import { Globe, Github, ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
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
    <>
      <div 
        ref={cardRef}
        className="project-card glass-card rounded-2xl overflow-hidden opacity-0 h-full group"
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
            
            <div className="flex justify-between items-center">
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
              
              {project.caseStudy && (
                <button
                  onClick={() => setShowCaseStudy(true)}
                  className="px-4 py-2 bg-portfolio-accent/20 hover:bg-portfolio-accent/30 text-portfolio-light rounded-full text-sm transition-colors duration-300"
                >
                  Case Study
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {showCaseStudy && project.caseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="max-w-3xl w-full max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 md:p-8 animate-scale-in">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">{project.title} <span className="text-portfolio-accent">Case Study</span></h3>
              <button
                onClick={() => setShowCaseStudy(false)}
                className="p-2 hover:bg-portfolio-card/70 rounded-full transition-colors duration-300"
                aria-label="Close case study"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h4 className="text-lg font-semibold text-portfolio-accent mb-2">Overview</h4>
              <p className="mb-4">{project.caseStudy.overview}</p>
              
              <h4 className="text-lg font-semibold text-portfolio-accent mb-2">Challenges</h4>
              <ul className="space-y-2 mb-4">
                {project.caseStudy.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-portfolio-accent font-bold text-lg leading-none mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-portfolio-accent mb-2">Solutions</h4>
              <ul className="space-y-2 mb-4">
                {project.caseStudy.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-portfolio-accent font-bold text-lg leading-none mt-0.5">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-portfolio-accent mb-2">Results</h4>
              <p>{project.caseStudy.results}</p>
              
              {project.caseStudy.technologies && (
                <>
                  <h4 className="text-lg font-semibold text-portfolio-accent mb-2 mt-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-light/90 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowCaseStudy(false)}
                className="px-6 py-2 bg-portfolio-accent hover:bg-portfolio-accent/80 text-white rounded-full transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
