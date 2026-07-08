export interface Service {
  id: string;
  title: string;
  description: string;
  subservices: string[];
  icon: string; // Lucide icon name or slug
  gradient: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  coverImage: string;
  technologies: string[];
  link?: string;
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'AI' | 'Cloud' | 'Design';
  icon: string; // Logo or generic indicator name
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
