
import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import CurvedDivider from './CurvedDivider';
import { Project } from '@/types';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Screen Time Converter",
      description: "Count the time your children spend on activities like homework, chores and exercise and convert it into screen time. Created with Vue.js and the Howlr library.",
      tags: ["Vue.js", "Progressive Web App", "Interactive"],
      links: {
        website: "#",
        github: "#",
      }
    },
    {
      id: 2,
      title: "SVG Inline Renderer",
      description: "An NPM package that takes an SVG file and renders it as an inline SVG to the DOM and can also render HTML files. Supports data passing to dynamic SVGs.",
      tags: ["NPM Package", "SVG", "JavaScript"],
      links: {
        website: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "PCDJ DJ Software UI",
      description: "Contributed to the design and skinning for various products including DEX-3, DEX-3 RE DJ software, LYRX karaoke software, and RED Mobile 3 DJ software.",
      tags: ["UI Design", "Software", "Brand Identity"],
      links: {
        website: "#",
      }
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts, hourly updates, and 7-day predictions based on location.",
      tags: ["React", "REST API", "Geolocation", "Charts"],
      links: {
        website: "#",
        github: "#",
      }
    },
    {
      id: 6,
      title: "Task Management Dashboard",
      description: "A comprehensive task management system with drag-and-drop functionality, priority levels, and team collaboration features.",
      tags: ["TypeScript", "Redux", "Firebase", "Material UI"],
      links: {
        website: "#",
        github: "#",
        demo: "#"
      }
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <CurvedDivider position="bottom" className="absolute bottom-0 left-0 w-full h-16" />
    </section>
  );
};

export default ProjectsSection;
