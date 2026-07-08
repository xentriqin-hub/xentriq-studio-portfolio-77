import { Service, Project, Technology, ProcessStep, WhyUsCard, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Engineering resilient custom programs built with absolute precision to streamline heavy operational workflows.',
    subservices: ['Custom Software', 'SaaS Platforms', 'Enterprise Software'],
    icon: 'Terminal',
    gradient: 'from-[#A855F7] to-[#8B5CF6]',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'World-class online hubs combining hyper-speed performance with gorgeous animations to command user attention.',
    subservices: ['Business Websites', 'Portfolio Websites', 'Landing Pages', 'Web Applications', 'Dashboards'],
    icon: 'Globe',
    gradient: 'from-[#8B5CF6] to-[#6366F1]',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Immersive iOS & Android experiences designed with intuitive mobile interfaces and seamless system integration.',
    subservices: ['Android Apps', 'iOS Apps', 'Cross-platform Apps'],
    icon: 'Smartphone',
    gradient: 'from-[#EC4899] to-[#D946EF]',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'High-conversion sales ecosystems integrating instant checkouts, smart inventory, and custom checkout flows.',
    subservices: ['Online Stores', 'Payment Integration', 'Inventory Systems', 'Custom Shopping Platforms'],
    icon: 'ShoppingBag',
    gradient: 'from-[#F43F5E] to-[#E11D48]',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Harnessing autonomous intelligence and workflow automations to replace repetitive manual overhead with AI systems.',
    subservices: ['AI Agents', 'AI Chatbots', 'AI Integration', 'Workflow Automation', 'Generative AI Applications'],
    icon: 'Cpu',
    gradient: 'from-[#10B981] to-[#3B82F6]',
  },
  {
    id: 'uiux-design',
    title: 'UI / UX Design',
    description: 'Minimalist interfaces designed with scientific UX heuristics to ensure maximum conversion and high customer satisfaction.',
    subservices: ['Wireframes', 'Mobile UI', 'Dashboard UI', 'Product Design', 'Prototyping'],
    icon: 'Palette',
    gradient: 'from-[#F59E0B] to-[#EF4444]',
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Premium video editing, social media reels, and promotional videos optimized for viral retention.',
    subservices: ['Professional Video Editing', 'Reels Editing', 'YouTube Editing', 'Promotional Videos', 'Advertisement Videos'],
    icon: 'Video',
    gradient: 'from-[#3B82F6] to-[#06B6D4]',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Dynamic explainer reels, vector graphic sequences, and logo animations that capture brand identities.',
    subservices: ['Logo Animation', 'Explainer Videos', 'Animated Graphics', 'Social Media Motion Design'],
    icon: 'Activity',
    gradient: 'from-[#D946EF] to-[#8B5CF6]',
  },
  {
    id: 'design-3d',
    title: '3D Design',
    description: 'Photorealistic product mockups, 3D environments, and animations engineered to elevate technical landing pages.',
    subservices: ['3D Modeling', 'Product Visualization', '3D Animation', 'Rendering'],
    icon: 'Layers',
    gradient: 'from-[#14B8A6] to-[#10B981]',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Signature brand styleguides, high-impact collateral, and visual media that establish authority.',
    subservices: ['Posters', 'Social Media Creatives', 'Brand Identity', 'Logo Design', 'Marketing Materials'],
    icon: 'PenTool',
    gradient: 'from-[#F97316] to-[#EF4444]',
  },
  {
    id: 'seo-growth',
    title: 'SEO & Digital Growth',
    description: 'Maximizing organic discoverability through high-performance site structures, schema layouts, and lightning-fast speeds.',
    subservices: ['Technical SEO', 'Performance Optimization', 'Analytics Setup', 'Website Speed Optimization'],
    icon: 'TrendingUp',
    gradient: 'from-[#06B6D4] to-[#3B82F6]',
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    description: 'Highly secure APIs, relational database integrations, and automated cloud deployments that scale to millions.',
    subservices: ['APIs', 'Authentication', 'Databases', 'Cloud Deployment', 'Server Architecture'],
    icon: 'Server',
    gradient: 'from-[#6366F1] to-[#A855F7]',
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    description: 'Responsive, single-page client engines crafted in React/Vite with premium component micro-interactions.',
    subservices: ['React', 'Next.js', 'Vue', 'Responsive Design', 'Interactive UI'],
    icon: 'Code',
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aether',
    name: 'Aether Predictive SaaS Platform',
    category: 'Web Dev & AI',
    description: 'A premium corporate intelligence dashboard equipped with autonomous reporting, auto-generated insights, and real-time live charting.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Next.js', 'TypeScript', 'OpenAI', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'kinetix',
    name: 'Kinetix Interactive Branding',
    category: '3D & Motion Design',
    description: 'Photorealistic 3D product rendering, brand guides, and custom logo motion sequences designed for an enterprise hardware provider.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    technologies: ['Figma', 'Blender', 'After Effects', 'Photoshop'],
  },
  {
    id: 'nova',
    name: 'Nova Biometric Wellness App',
    category: 'Mobile Dev',
    description: 'A native iOS & Android health app leveraging biometric patterns and Google Gemini to render highly hyper-personalized sleep coaching.',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    technologies: ['Flutter', 'Firebase', 'Google Gemini', 'Node.js'],
  },
  {
    id: 'zeta',
    name: 'Zeta Headless Commerce',
    category: 'E-commerce Solutions',
    description: 'A lightning-fast commerce layout boasting fully customizable cart workflows, instant search indexing, and automated multi-currency checkout.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'Express', 'PostgreSQL', 'Docker', 'Stripe'],
  },
];

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', icon: '▲' },
  { name: 'TypeScript', category: 'Frontend', icon: 'TS' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
  // Backend
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: 'Supabase', category: 'Backend', icon: '⚡' },
  { name: 'Firebase', category: 'Backend', icon: '🔥' },
  { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
  // Mobile
  { name: 'Flutter', category: 'Mobile', icon: '🦋' },
  { name: 'React Native', category: 'Mobile', icon: '📱' },
  { name: 'Kotlin', category: 'Mobile', icon: '🚀' },
  { name: 'Swift', category: 'Mobile', icon: '🍎' },
  // AI
  { name: 'Google Gemini', category: 'AI', icon: '♊' },
  { name: 'OpenAI', category: 'AI', icon: '🤖' },
  { name: 'Claude', category: 'AI', icon: '🧠' },
  { name: 'LangChain', category: 'AI', icon: '🦜' },
  { name: 'MCP', category: 'AI', icon: '🔌' },
  { name: 'AI Agents', category: 'AI', icon: '🦾' },
  // Cloud
  { name: 'Vercel', category: 'Cloud', icon: '▲' },
  { name: 'Cloudflare', category: 'Cloud', icon: '☁️' },
  { name: 'Docker', category: 'Cloud', icon: '🐋' },
  { name: 'GitHub', category: 'Cloud', icon: '🐙' },
  // Design
  { name: 'Figma', category: 'Design', icon: '❖' },
  { name: 'Blender', category: 'Design', icon: '🧡' },
  { name: 'Premiere Pro', category: 'Design', icon: 'Pr' },
  { name: 'After Effects', category: 'Design', icon: 'Ae' },
  { name: 'Photoshop', category: 'Design', icon: 'Ps' },
  { name: 'Illustrator', category: 'Design', icon: 'Ai' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We run structured workshops to understand your exact targets, market positioning, and structural engineering hurdles.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Architecting crystal-clear user journey flows, tech stack parameters, database relationship models, and delivery timelines.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Drafting pixel-perfect design languages, dynamic design assets, and immersive high-fidelity web prototypes.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Writing high-efficiency, standards-compliant modular software utilizing modern platforms like React and Next.js.',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Exhaustive verification of visual rendering, cross-browser support, automated integration runs, and performance benchmarking.',
  },
  {
    number: '06',
    title: 'Deployment',
    description: 'Seamlessly provisioning cloud services with continuous delivery pipelines, caching controls, and high-security headers.',
  },
  {
    number: '07',
    title: 'Support',
    description: 'Ongoing cloud performance monitoring, technical systems updates, AI dataset alignment, and direct feature additions.',
  },
];

export const WHY_US_CARDS: WhyUsCard[] = [
  {
    title: 'Modern Technology Stack',
    description: 'Constructing application architectures on bleeding-edge libraries like Vite, React, and server-side runtimes to yield absolute responsiveness.',
    icon: 'Layers',
  },
  {
    title: 'AI-First Approach',
    description: 'Integrating customized autonomous agents, NLP pipelines, and deep learning modules directly into normal business infrastructure.',
    icon: 'Cpu',
  },
  {
    title: 'Fast Delivery',
    description: 'Utilizing robust Scrum frameworks and continuous deployment models to deliver high-quality releases at accelerated speeds.',
    icon: 'Zap',
  },
  {
    title: 'Scalable Architecture',
    description: 'Deploying robust cloud schemas designed to maintain structural integrity under sudden, massive traffic spikes.',
    icon: 'TrendingUp',
  },
  {
    title: 'Beautiful UI/UX',
    description: 'Stretching boundaries with flawless digital art direction, custom micro-interactions, and visual transitions modeled after Apple.',
    icon: 'Sparkles',
  },
  {
    title: 'Secure Development',
    description: 'Adhering to strict cryptographic structures, role-based auth, input validation, and OWASP safety paradigms.',
    icon: 'ShieldCheck',
  },
  {
    title: 'High Performance',
    description: 'Tuning resource bundles, styling, and server caching layers to score a perfect 100 on Google Lighthouse.',
    icon: 'Gauge',
  },
  {
    title: 'Long-Term Support',
    description: 'Accompanying your team as deep-thinking technology partners rather than brief external contractors.',
    icon: 'HeartHandshake',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Chief Product Officer',
    company: 'Aetheria Labs',
    content: 'Xentriq Studio redesigned our entire SaaS platform from the ground up. Their engineering speed and attention to visual detail are absolutely world-class. It felt like working with an elite team from Vercel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Kinetix Dynamics',
    content: 'They delivered our web platform and automated our operations with custom AI bots. Not only did we save thousands of hours, but the modern dark design has completely redefined our industry presence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 't3',
    name: 'Aiko Tanaka',
    role: 'VP of Technology',
    company: 'Zenith Logistics',
    content: 'The 3D animations and technical SEO work Xentriq performed boosted our landing page conversion rates by 85%. Truly premium work from a highly responsive and talented group of designers.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
  },
];
