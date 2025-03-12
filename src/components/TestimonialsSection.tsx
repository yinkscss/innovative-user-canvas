
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      company: "Move.it",
      content: "Working with this developer transformed our online presence. The website they built for our moving company is not only beautiful but intuitive for our customers to use. The attention to detail and understanding of our business needs exceeded our expectations.",
      avatar: "/lovable-uploads/6c448b98-3572-40b1-ac1d-6f46f6e3fc20.png"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Founder",
      company: "GC Mentorship",
      content: "The platform created for our mentorship program has been game-changing. The interactive features and real-time updates have significantly improved how our mentors and mentees connect. Technical excellence combined with creative solutions!",
      avatar: "/lovable-uploads/43e5ea31-ff28-457c-8c1a-d7a5b19c0f6a.png"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      company: "Tech Innovations",
      content: "As a fellow developer, I've been thoroughly impressed with the quality of code and documentation. Their approach to problem-solving is both creative and pragmatic, making collaboration a smooth and efficient process.",
      avatar: "/lovable-uploads/342ecac4-ed1c-4486-bd97-d2a41c350256.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-b from-portfolio-dark to-portfolio-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
            Don't just take my word for it - hear what my clients have to say about working with me and the results I've delivered.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl glass-card rounded-2xl p-10 opacity-0 animate-fade-in delay-200">
          <div className="absolute -top-5 -left-5 text-4xl text-portfolio-accent opacity-40">
            <Quote size={50} />
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-portfolio-light/90 italic relative z-10">
              "{testimonials[activeIndex].content}"
            </p>
          </div>
          
          <div className="flex items-center mt-8">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-portfolio-accent">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
              <p className="text-sm text-portfolio-light/70">
                {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-portfolio-dark/30 hover:bg-portfolio-accent/30 text-portfolio-light/70 hover:text-portfolio-light transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-portfolio-dark/30 hover:bg-portfolio-accent/30 text-portfolio-light/70 hover:text-portfolio-light transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-portfolio-accent w-8' 
                    : 'bg-portfolio-light/30 hover:bg-portfolio-light/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
