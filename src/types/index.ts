
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: {
    website?: string;
    github?: string;
    demo?: string;
  };
  caseStudy?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    results: string;
    technologies?: string[];
  };
};

export type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
