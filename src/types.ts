export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'design' | 'marketing' | 'ai';
  icon: string; // lucide icon name
  technologies: string[];
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
  image: string; // abstract gradient or descriptive SVG index
  tags: string[];
  liveUrl?: string;
  metrics: { label: string; value: string };
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string; // descriptive initials or custom generated layout
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  date: string;
  status: 'pending' | 'scheduled';
}
