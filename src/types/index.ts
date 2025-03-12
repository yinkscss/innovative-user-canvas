
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
};

export type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};
