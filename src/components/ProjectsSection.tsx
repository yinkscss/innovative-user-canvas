
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
      title: "Move.it - Moving Company",
      description: "A dynamic and user-friendly website for a moving company. Features an intuitive interface that allows users to easily navigate through services, schedule moves, and access resources related to relocating.",
      tags: ["React", "Responsive Design", "Interactive UI"],
      links: {
        website: "#",
        github: "#",
      }
    },
    {
      id: 2,
      title: "GC Mentorship Platform",
      description: "An interactive platform for a cryptocurrency mentoring service. Utilized React for front-end development and Node.js for back-end, allowing for seamless user interactions and real-time updates.",
      tags: ["React", "Node.js", "API Integration"],
      links: {
        website: "#",
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Seventh Veile Escort Service",
      description: "A full-stack web application with a visually appealing design created with React for the front-end, while implementing Supabase for robust back-end infrastructure to manage user data and ensure security.",
      tags: ["React", "Supabase", "Full-Stack"],
      links: {
        website: "https://seventhveile.com",
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
            In my professional journey, I have developed several noteworthy web projects that highlight my skills in modern web development.
            Each of these projects has allowed me to enhance my technical expertise and deliver high-quality web solutions that cater to different industries.
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
