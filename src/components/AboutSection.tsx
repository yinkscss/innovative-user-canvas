import React, { useRef, useEffect } from 'react';
import { CheckCircle2, Code2, PenTool, Laptop, Users } from 'lucide-react';
import CurvedDivider from './CurvedDivider';
import { cn } from '@/lib/utils';
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.style.animationDelay = `${delay}s`;
      }
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  return <div ref={cardRef} className="glass-card p-6 rounded-xl opacity-0 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/20">
      <div className="mb-4 text-portfolio-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-portfolio-light/70">{description}</p>
    </div>;
};
const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  const skills = [{
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
    delay: 0.1
  }, {
    icon: <Laptop className="w-6 h-6" />,
    title: "Backend Engineering",
    description: "Building robust server-side applications, APIs, and database structures.",
    delay: 0.2
  }, {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences with attention to aesthetics and usability.",
    delay: 0.3
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "Working effectively in teams using modern development workflows and tools.",
    delay: 0.4
  }];
  return <section id="about" ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-radial from-portfolio-card to-portfolio-dark">
      <CurvedDivider position="top" className="absolute top-0 left-0 w-full h-16" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
            I'm a passionate web developer with extensive experience in creating beautiful, functional websites and applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} delay={skill.delay} />)}
        </div>
        
        <div className="mt-16 glass-card rounded-2xl p-6 md:p-8 opacity-0 animate-fade-in delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-portfolio-light/80 mb-4">With over 2 years of experience in web development, I've worked on a wide range of projects from small business websites to large-scale enterprise applications.</p>
              <p className="text-portfolio-light/80 mb-4">
                My passion lies in creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-portfolio-accent mt-0.5" />
                  <span>Extensive experience with modern JavaScript frameworks</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-portfolio-accent mt-0.5" />
                  <span>Strong foundation in responsive and accessible design</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-portfolio-accent mt-0.5" />
                  <span>Expertise in optimizing website performance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-portfolio-accent mt-0.5" />
                  <span>Committed to writing clean, maintainable code</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-portfolio-accent/40 to-portfolio-dark/40 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <img alt="Developer" className="rounded-2xl relative z-10 max-w-full h-auto" src="/lovable-uploads/36fd73ad-2ea9-4f75-ac4f-4af23728766c.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;