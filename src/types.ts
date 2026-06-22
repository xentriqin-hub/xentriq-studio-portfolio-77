export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  technologies: string[];
  process: string[];
  timeline: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  details: {
    client: string;
    role: string;
    duration: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'cloud_devops';
  icon: string;
}

export interface ProcessStage {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ComparisonMetric {
  title: string;
  description: string;
  icon: string;
}
