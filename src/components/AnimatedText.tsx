import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedTextProps } from '@/types';
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (textRef.current) {
          textRef.current.style.animationDelay = `${delay}s`;
          textRef.current.classList.add('animate-text-reveal');
        }
      }
    }, {
      threshold: 0.1
    });
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);
  return;
};
export default AnimatedText;