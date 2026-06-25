import { Service, Project, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Bespoke, blazing-fast marketing and corporate websites tailored for maximum conversions and high-end visual design.',
    category: 'development',
    icon: 'Globe',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    features: ['Responsive layout', 'SEO structure', 'CMS integration', 'Analytics dashboard']
  },
  {
    id: 'web-app',
    title: 'Web App Development',
    description: 'Scalable, complex web applications powered by robust cloud backends, real-time sync, and fluid client-side interfaces.',
    category: 'development',
    icon: 'Code2',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express'],
    features: ['Role-based access', 'Interactive dashboards', 'REST & GraphQL APIs', 'Third-party integrations']
  },
  {
    id: 'pwa',
    title: 'Progressive Web Apps (PWA)',
    description: 'Combining the best of web and mobile. Fast, offline-capable apps with push notifications and native-like experiences.',
    category: 'development',
    icon: 'Zap',
    technologies: ['Workbox', 'Vite', 'Service Workers', 'Web App Manifest'],
    features: ['Offline capability', 'Add-to-home-screen', 'Background sync', 'Optimized loading']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Websites & Apps',
    description: 'Immersive online storefronts optimized for checkout fluidity, secure payments, inventory tracking, and sales growth.',
    category: 'development',
    icon: 'ShoppingBag',
    technologies: ['Stripe', 'GraphQL', 'Shopify Custom', 'Node.js'],
    features: ['Multi-currency checkout', 'Instant search', 'Real-time stock sync', 'Automated tax & shipping']
  },
  {
    id: 'mobile-app',
    title: 'Android & iOS App Development',
    description: 'Native and cross-platform mobile apps built to feel fluid, run smoothly, and leverage full hardware capability.',
    category: 'development',
    icon: 'Smartphone',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    features: ['Biometric auth', 'Push alerts', 'Offline database', 'App Store / Play Store prep']
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'End-to-end bespoke software engines, internal tools, and operational hubs that streamline core business processes.',
    category: 'development',
    icon: 'Cpu',
    technologies: ['Node.js', 'Go', 'Python', 'PostgreSQL'],
    features: ['Automated audits', 'Legacy migrations', 'Custom dashboard hubs', 'API-first architecture']
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Data-driven search engine optimization, technical auditing, core web vitals optimization, and authority-building campaigns.',
    category: 'marketing',
    icon: 'Search',
    technologies: ['Lighthouse', 'Google Search Console', 'Ahrefs', 'Screaming Frog'],
    features: ['Semantic markup audits', 'Speed optimization', 'Keyword targeting plans', 'Backlink profiling']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Minimal, luxury digital design emphasizing emotional usability, clear typography, dynamic animations, and micro-interactions.',
    category: 'design',
    icon: 'Layers',
    technologies: ['Figma', 'Spline 3D', 'Adobe Suite', 'Prototyping'],
    features: ['Interactive prototypes', 'Comprehensive design systems', 'A/B visual testing', 'User journey research']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Inject smart, automated workflows into your operations. Automate tedious document parsing, email processing, and business tasks.',
    category: 'ai',
    icon: 'Workflow',
    technologies: ['Python', 'LangChain', 'Gemini API', 'Make / Zapier'],
    features: ['Intelligent parsing', 'Action-trigger chains', 'Structured data extraction', 'Auto-scheduling']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous AI agents capable of reasoning, calling APIs, executing custom scripts, and completing full digital objectives.',
    category: 'ai',
    icon: 'BrainCircuit',
    technologies: ['Gemini 2.5', 'Function Calling', 'LangGraph', 'Python'],
    features: ['Dynamic goal reasoning', 'Secure tool execution', 'Self-correcting flows', 'Continuous monitoring logs']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'novus-ai',
    title: 'Novus AI Enterprise Hub',
    description: 'A luxurious dashboard and workflow hub coordinating autonomous AI agents for corporate operations and financial auditing.',
    category: 'ai',
    image: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
    tags: ['Gemini API', 'React', 'Node.js', 'Tailwind v4'],
    liveUrl: '#',
    metrics: { label: 'Efficiency Gain', value: '+340%' },
    highlights: ['Autonomous action-chain execution', 'Secure local data containerization', 'Real-time multi-agent activity log']
  },
  {
    id: 'aether-commerce',
    title: 'Aether Luxury Atelier',
    description: 'An elegant, highly immersive e-commerce boutique utilizing a Liquid Glass UI, instant checkout, and personalized AI styling.',
    category: 'web',
    image: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
    tags: ['Next.js', 'TailwindCSS', 'Stripe', 'Framer Motion'],
    liveUrl: '#',
    metrics: { label: 'Conversion Lift', value: '+42%' },
    highlights: ['Bespoke headless visual canvas', '0.4s Average load times', 'Custom interactive styling mirror']
  },
  {
    id: 'prism-fitness',
    title: 'Prism Mobile Coaching',
    description: 'A premium cross-platform mobile suite providing adaptive, motion-tracked workouts and real-time biometric feedback.',
    category: 'mobile',
    image: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
    tags: ['React Native', 'TypeScript', 'Node.js', 'HealthKit'],
    liveUrl: '#',
    metrics: { label: 'Active Users', value: '180K+' },
    highlights: ['On-device real-time motion modeling', 'Secure biometric profile sync', 'Ambient dark mode HUD']
  },
  {
    id: 'synapse-flow',
    title: 'Synapse Flow Automation',
    description: 'A zero-code pipeline automation visualizer orchestrating enterprise integrations and AI categorization.',
    category: 'ai',
    image: 'linear-gradient(135deg, #451a03 0%, #7c2d12 100%)',
    tags: ['React Flow', 'Python', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#',
    metrics: { label: 'Manual Hours Saved', value: '12K/yr' },
    highlights: ['Drag-and-drop logic editor', 'Instant API payload mockups', 'Smart error-recovery alerts']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Helena Vance',
    role: 'Chief Technology Officer',
    company: 'Aetheris Global',
    avatar: 'HV',
    rating: 5,
    content: 'Xentriq Studio completely transformed our operations. Their implementation of autonomous AI Agents streamlined our inventory workflow in weeks, saving hundreds of hours. A masterclass in luxury design and modern engineering.'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Founder & Creative Director',
    company: 'Vanguard Atelier',
    avatar: 'MT',
    rating: 5,
    content: 'The liquid glassmorphism design Xentriq delivered for our online storefront is breathtaking. Our checkout conversion increased by 42% in the first month. They are more than developers—they are visual artisans.'
  },
  {
    id: 't3',
    name: 'Dr. Sarah Jenkins',
    role: 'Head of Product Innovation',
    company: 'BioCompute Technologies',
    avatar: 'SJ',
    rating: 5,
    content: 'Working with Xentriq on our custom Progressive Web App was frictionless. They paired complex architectural requirements with an incredibly intuitive, sleek user interface. Their team moves with extreme speed and precision.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Xentriq Studio’s core development methodology?',
    answer: 'We operate on a hyper-collaborative, agile model. We pair elite visual craftsmanship (liquid glassmorphism, clean layouts) with rapid, modular code sprints. All of our work is built server-side securely and styled natively with modern Tailwind CSS.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How do you integrate AI into standard software products?',
    answer: 'We analyze your workflows to identify high-leverage bottlenecks. We then inject smart automation, context-aware AI Chatbots, or autonomous AI Agents powered by state-of-the-art models like Gemini 2.5, using secure API integrations that never leak your private data.',
    category: 'AI Services'
  },
  {
    id: 'faq-3',
    question: 'How long does a typical software project take with you?',
    answer: 'A premium marketing website or custom dashboard typically takes 4 to 6 weeks. More extensive, full-scale corporate applications, custom platforms, or custom iOS/Android apps can span 8 to 12 weeks from initial design systems to final production deployment.',
    category: 'Timeline'
  },
  {
    id: 'faq-4',
    question: 'Do you offer ongoing maintenance, optimization, and SEO support?',
    answer: 'Absolutely. We provide dedicated premium maintenance tiers that include performance auditing, core web vitals speed optimization, recurring security patches, and advanced SEO strategy adjustments to ensure your digital experience remains elite.',
    category: 'Support'
  },
  {
    id: 'faq-5',
    question: 'How can we contact you and kick off our project?',
    answer: 'Simply click the "WhatsApp Chat" button, send a message to +91 78249 18457, or fill in your project details in the Contact Form below. Our partner director will get back to you with a full visual blueprint and structural plan for your project within 48 hours.',
    category: 'General'
  }
];
