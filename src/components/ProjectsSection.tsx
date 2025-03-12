
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
      },
      caseStudy: {
        overview: "Move.it needed a website that would simplify the moving process for customers while showcasing their services and expertise in the industry.",
        challenges: [
          "Creating an intuitive booking system that captures all necessary information",
          "Designing a responsive interface that works across all devices",
          "Implementing a real-time quote calculator with accurate pricing"
        ],
        solutions: [
          "Developed a step-by-step booking wizard with progress indicators",
          "Created a mobile-first design approach with tailored experiences per device",
          "Built an integrated quote calculator with address validation and distance estimation"
        ],
        results: "The new website led to a 45% increase in online bookings and a 30% reduction in customer service calls as users could easily find information and schedule services online.",
        technologies: ["React", "Node.js", "Google Maps API", "Tailwind CSS"]
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
      },
      caseStudy: {
        overview: "GC Mentorship required a platform that would connect cryptocurrency mentors with mentees, featuring real-time communication and resource sharing functionality.",
        challenges: [
          "Building a secure user authentication system for mentors and mentees",
          "Implementing real-time messaging and notifications",
          "Creating an intuitive dashboard for tracking progress and resources"
        ],
        solutions: [
          "Developed JWT-based authentication with role-based access control",
          "Integrated Socket.io for real-time chat and notifications",
          "Created customizable dashboards with drag-and-drop widgets"
        ],
        results: "The platform successfully facilitated over 500 mentor-mentee relationships within the first three months, with 92% of users rating their experience as 'excellent'.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"]
      }
    },
    {
      id: 3,
      title: "Seventh Veile Escort Service",
      description: "A full-stack web application with a visually appealing design created with React for the front-end, while implementing Supabase for robust back-end infrastructure to manage user data and ensure security.",
      tags: ["React", "Supabase", "Full-Stack"],
      links: {
        website: "https://seventhveile.com",
      },
      caseStudy: {
        overview: "Seventh Veile needed a secure, elegant platform to showcase their services while maintaining user privacy and facilitating bookings.",
        challenges: [
          "Ensuring user data security and privacy compliance",
          "Creating an elegant, responsive design that maintains brand sophistication",
          "Implementing a secure booking system with verification steps"
        ],
        solutions: [
          "Utilized Supabase for row-level security and data encryption",
          "Designed a custom UI with subtle animations and sophisticated color scheme",
          "Developed a multi-step verification process with temporary credentials"
        ],
        results: "The platform has maintained 99.9% uptime while successfully processing hundreds of bookings with zero security incidents. Client satisfaction increased by 35% due to the streamlined booking process.",
        technologies: ["React", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS"]
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
      },
      caseStudy: {
        overview: "Created a comprehensive e-commerce solution for a boutique retailer looking to expand their online presence with a unique shopping experience.",
        challenges: [
          "Implementing a scalable product catalog with complex filtering options",
          "Creating a seamless checkout process with multiple payment options",
          "Building a secure user authentication and order history system"
        ],
        solutions: [
          "Developed a database architecture optimized for filtering and search",
          "Integrated Stripe for payments with custom checkout UI",
          "Implemented JWT authentication with secure password storage"
        ],
        results: "The platform saw a 60% conversion rate increase compared to the client's previous solution, with a 25% reduction in cart abandonment rates.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"]
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
      },
      caseStudy: {
        overview: "Developed a weather application that delivers accurate forecasts in an intuitive, visually appealing interface.",
        challenges: [
          "Integrating multiple weather data sources for accuracy",
          "Optimizing for performance with large datasets",
          "Creating intuitive data visualizations for weather trends"
        ],
        solutions: [
          "Implemented API aggregation for cross-referenced weather data",
          "Applied data caching and lazy loading techniques",
          "Used Recharts for custom, responsive weather visualizations"
        ],
        results: "The app achieved a 4.8/5 user satisfaction rating with 10,000+ active users, praised particularly for its accuracy and ease of use.",
        technologies: ["React", "Weather API", "Geolocation API", "Recharts", "PWA"]
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
      },
      caseStudy: {
        overview: "Built a task management solution for teams needing real-time collaboration and progress tracking capabilities.",
        challenges: [
          "Creating a real-time collaborative environment",
          "Designing an intuitive drag-and-drop interface",
          "Implementing role-based permissions for tasks"
        ],
        solutions: [
          "Used Firebase Realtime Database for instant updates across clients",
          "Implemented React DnD for smooth drag-and-drop functionality",
          "Developed a custom permissions system with granular controls"
        ],
        results: "Teams reported a 40% increase in productivity after adoption, with particularly positive feedback on the real-time collaboration features.",
        technologies: ["TypeScript", "React", "Redux", "Firebase", "React DnD"]
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
