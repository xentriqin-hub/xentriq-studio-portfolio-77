import { Service, Project, Technology, ProcessStage, Statistic, Testimonial, ComparisonMetric } from './types';

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'Globe',
    description: 'Immersive, blazing fast, and pixel-perfect bespoke web experiences tailored to represent your brand with digital supremacy.',
    benefits: ['Sub-second load times', 'Sensational responsive layouts', 'SEO-architected structures', 'Awwwards-level visual styling'],
    technologies: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'GSAP', 'Framer Motion'],
    process: ['Discovery & Identity Crafting', 'Interactive UI prototyping', 'Engineering & animation pass', 'Deployment & optimization audit'],
    timeline: '3 - 6 Weeks'
  },
  {
    id: 'app-development',
    title: 'App Development',
    icon: 'Smartphone',
    description: 'High-performance native and cross-platform mobile apps built to engage audiences seamlessly across iOS and Android ecosystem.',
    benefits: ['Buttery smooth animations', 'Offline cache enablement', 'Push notifications integration', 'Full native gesture controls'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase Auth'],
    process: ['Architecture & wireframing', 'Custom design system preparation', 'Core feature coding', 'App Store and Google Play launch'],
    timeline: '6 - 12 Weeks'
  },
  {
    id: 'web-app-development',
    title: 'Web App Development',
    icon: 'Layers',
    description: 'Complex, database-driven, cloud-native web applications engineered to solve specific operational bottlenecks with luxury aesthetics.',
    benefits: ['Enterprise-tier scalability', 'Real-time multi-user synchronization', 'Modular, extendable architecture', 'Comprehensive security protocols'],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    process: ['Data modeling & API planning', 'Core microservice engineering', 'State management design', 'Stress testing & Cloud launch'],
    timeline: '8 - 14 Weeks'
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Applications',
    icon: 'ShoppingBag',
    description: 'Ultra-custom, conversion-oriented electronic commerce platforms spanning custom web stores and mobile apps.',
    benefits: ['Intuitive, high-speed multi-step checkout', 'Automated inventory synchronization', 'Global payment gateway support', 'Bespoke admin control dashboards'],
    technologies: ['Next.js', 'Stripe API', 'Shopify Headless', 'Node.js', 'PostgreSQL'],
    process: ['User flow optimization analytics', 'Product database architecture', 'Payment pipeline integration', 'Beta test purchase runs'],
    timeline: '5 - 10 Weeks'
  },
  {
    id: 'ui-ux-designing',
    title: 'UI/UX Designing',
    icon: 'Figma',
    description: 'Artfully crafted interfaces backed by behavioral psychology to offer flawless intuition and luxury digital navigation.',
    benefits: ['Detailed interactive Figma design systems', 'Rigorous user persona research', 'Fluid micro-interaction designs', 'Flawless visual hierarchy'],
    technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'Spline 3D'],
    process: ['UX research & user mapping', 'Interactive high-fidelity wireframes', 'Visual user interface creation', 'Animation blueprints handover'],
    timeline: '2 - 4 Weeks'
  },
  {
    id: 'ai-automation-agents',
    title: 'AI Agents & Automation',
    icon: 'Cpu',
    description: 'Intelligent AI agents and workflow automations running top-tier Large Language Models to fully automate custom business cycles.',
    benefits: ['Over 90% reduction in operational manual labor', 'Autonomous problem-solving logic', 'Seamless integration into CRM/Slack', 'Continuous system learning capabilities'],
    technologies: ['Google Gemini API', 'OpenAI API', 'LangChain', 'Python', 'Node.js'],
    process: ['Current routine audit & goal mapping', 'AI Model prompt engineering & fine-tuning', 'Agent pipeline assembly', 'Shadow run validation & live launch'],
    timeline: '4 - 8 Weeks'
  },
  {
    id: 'fullstack-development',
    title: 'Full-Stack Development',
    icon: 'Terminal',
    description: 'End-to-end frontend and backend system engineering, consolidating pixel-perfect client portals with industrial database systems.',
    benefits: ['Uniform TypeScript/Javascript codebase stability', 'Advanced API gateway routing rules', 'Robust persistent database query design', 'Highly secure user state management'],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    process: ['System entity-relationship layout', 'API contract definitions', 'Parallel tier engineering', 'Full stack container integration'],
    timeline: '8 - 16 Weeks'
  },
  {
    id: 'firebase-solutions',
    title: 'Firebase Solutions',
    icon: 'Flame',
    description: 'Serverless architecture development leveraging Google Cloud Firebase stack for instant scaling, real-time database, and secure user auth.',
    benefits: ['Zero-servers management required', 'Sub-millisecond persistent document listeners', 'Secure custom rules mapping', 'Google Analytics setup built-in'],
    technologies: ['Firestore', 'Firebase Auth', 'Firebase Functions', 'Cloud Storage'],
    process: ['Firestore denormalization database plan', 'Security rules formulation & unit assertions', 'Cloud function triggers development', 'Performance scaling limits verification'],
    timeline: '3 - 6 Weeks'
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    icon: 'LayoutGrid',
    description: 'Sophisticated data visualizers and administrative consoles designed to display critical enterprise metrics beautifully and clearly.',
    benefits: ['At-a-glance high density data layouts', 'Custom charts & real-time telemetry tables', 'Detailed multi-tenant user access systems', 'Instant CSV and PDF report outputs'],
    technologies: ['React', 'D3.js', 'Recharts', 'TailwindCSS', 'TypeScript'],
    process: ['Metric priority hierarchy layout', 'Friction-free UX filter planning', 'Chart and table component build-out', 'API websocket telemetry bind'],
    timeline: '4 - 8 Weeks'
  },
  {
    id: 'portfolio-business-websites',
    title: 'Portfolio & Business Websites',
    icon: 'Award',
    description: 'High-end immersive corporate and specialist showcases crafted to leave a memorable statement of quality for your prospective clients.',
    benefits: ['Outstanding interactive narrative', 'Tailormade 3D accent visuals', 'Ultra lightweight loading footprints', 'Instant visual prestige and authority'],
    technologies: ['Vite', 'Three.js', 'Framer Motion', 'TailwindCSS', 'Lenis Scroll'],
    process: ['Brand discovery session', 'Drafting interactive storyboard', 'Custom 3D development pass', 'Deploy on specialized global edge network'],
    timeline: '3 - 5 Weeks'
  },
  {
    id: 'custom-software-cms',
    title: 'Custom Software & CMS',
    icon: 'CodeXml',
    description: 'Tailormade software and Content Management Systems designed to empower editors without sacrificing performance or design layout.',
    benefits: ['No-code editing capabilities', 'Zero template restrictions', 'Ultra fast page re-building pipelines', 'Robust custom relational datatypes support'],
    technologies: ['Node.js', 'Strapi', 'Next.js', 'Cloudflare', 'PostgreSQL'],
    process: ['Content modeling wireframe', 'Schema deployment', 'Intuitive admin UI customization', 'Editor orientation & site handoff'],
    timeline: '4 - 8 Weeks'
  },
  {
    id: 'optimization-seo',
    title: 'Performance & SEO Optimization',
    icon: 'Zap',
    description: 'In-depth speed refactoring, core web vitals hardening, and rigorous schema structured data auditing to secure organic search rankings.',
    benefits: ['Perfect 100/100 Google PageSpeed scores', 'Substantial bounce-rate reductions', 'Rich snippet schema integrations', 'Dynamic edge rendering speeds'],
    technologies: ['Vercel CDN', 'Lighthouse Engine', 'React Server Components', 'PostCSS'],
    process: ['Auditing code bottlenecks & image weights', 'Critical render path stream planning', 'Technical meta-data indexing pass', 'Post-optimization ranking validation'],
    timeline: '2 - 3 Weeks'
  }
];

export const projects: Project[] = [
  {
    id: 'zep-ai-agent',
    title: 'ZEPHYR AI ENGINE',
    category: 'AI Agents & Automation',
    description: 'An autonomous multi-agent fleet coordinating enterprise logistics, lowering fuel waste by 24% using deep predictive modeling.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    technologies: ['Google Gemini API', 'Node.js', 'Docker', 'PostgreSQL', 'Framer Motion'],
    link: '#',
    details: {
      client: 'Zephyr Logistics Global',
      role: 'Lead AI & Fullstack Developers',
      duration: '4 Months',
      challenge: 'Managing over 10,000 global daily dispatch sheets with multiple real-time routing delays, fuel price spikes, and driver schedule limits without unified visibility.',
      solution: 'We engineered a centralized swarm of Google Gemini-powered agents tracking visual traffic maps, telematics databases, and instantly dispatching optimal directions.',
      results: [
        'Reduced scheduling errors by 94%',
        'Shaved off 24% fuel waste companywide',
        'Saved over 4,500 monthly desk operation hours'
      ]
    }
  },
  {
    id: 'lux-living-3d',
    title: 'AURA LIVING REALTY',
    category: 'Website Development',
    description: 'An interactive 3D immersive architectural property visualizer featuring glassmorphism layout, fluid hover tilts, and cinematic guides.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    technologies: ['React Three Fiber', 'Three.js', 'Drei', 'GSAP', 'Next.js'],
    link: '#',
    details: {
      client: 'Aura Living Inc',
      role: 'Immersive Experience Designers',
      duration: '3 Months',
      challenge: 'Conveying the sheer luxury of ultra-premium, unbuilt penthouses to high-net-worth international investors using standard 2D image galleries.',
      solution: 'Built a virtual real-estate simulator. Features photorealistic lighting controls, dynamic ray-traced material finishes, and customizable room configuration.',
      results: [
        'Achieved full pre-sale booking within 18 days',
        'Sustained over 8 minutes of average user session time',
        'Honored with Awwwards Developer Site of the Day award'
      ]
    }
  },
  {
    id: 'aurora-wallet',
    title: 'NEXUS COGNITIVE PORTAL',
    category: 'Full-Stack Development',
    description: 'An enterprise workspace dashboard featuring visual D3 graph telemetry, real-time secure ledger views, and fully-custom Firebase auth.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'D3.js', 'TailwindCSS'],
    link: '#',
    details: {
      client: 'Nexus Finance Group',
      role: 'Core Systems Engineers',
      duration: '5 Months',
      challenge: 'Migrating legacy financial reporting systems into a uniform dashboard without exposing customer account history.',
      solution: 'Constructed an encryption-first React portal. Implemented multi-factor Firebase Authentication paired with a highly denormalized sub-second Firestore collection structure.',
      results: [
        'Secure multi-device sync within 150ms',
        'Faultless security audit confirmation with Zero vulnerabilities',
        '99.99% uptime during prime trading volumes'
      ]
    }
  }
];

export const technologies: Technology[] = [
  { name: 'HTML5', category: 'frontend', icon: 'Html5' },
  { name: 'CSS3', category: 'frontend', icon: 'Css3' },
  { name: 'JavaScript', category: 'frontend', icon: 'Javascript' },
  { name: 'TypeScript', category: 'frontend', icon: 'Typescript' },
  { name: 'React', category: 'frontend', icon: 'React' },
  { name: 'Next.js', category: 'frontend', icon: 'Nextjs' },
  { name: 'Node.js', category: 'backend', icon: 'Nodejs' },
  { name: 'Express', category: 'backend', icon: 'Express' },
  { name: 'Firebase', category: 'database', icon: 'Firebase' },
  { name: 'MongoDB', category: 'database', icon: 'Mongodb' },
  { name: 'PostgreSQL', category: 'database', icon: 'Postgresql' },
  { name: 'Flutter', category: 'frontend', icon: 'Flutter' },
  { name: 'React Native', category: 'frontend', icon: 'ReactNative' },
  { name: 'Android', category: 'frontend', icon: 'Android' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'Tailwind' },
  { name: 'Three.js', category: 'frontend', icon: 'Threejs' },
  { name: 'GSAP', category: 'frontend', icon: 'Gsap' },
  { name: 'Framer Motion', category: 'frontend', icon: 'FramerMotion' },
  { name: 'Python', category: 'backend', icon: 'Python' },
  { name: 'OpenAI API', category: 'ai', icon: 'Openai' },
  { name: 'Google Gemini', category: 'ai', icon: 'Gemini' },
  { name: 'Docker', category: 'cloud_devops', icon: 'Docker' },
  { name: 'GitHub', category: 'cloud_devops', icon: 'Github' },
  { name: 'Vercel', category: 'cloud_devops', icon: 'Vercel' },
  { name: 'Render', category: 'cloud_devops', icon: 'Render' },
  { name: 'Cloudflare', category: 'cloud_devops', icon: 'Cloudflare' }
];

export const processStages: ProcessStage[] = [
  { id: 1, title: 'Discovery & Strategic Auditing', description: 'Immersive exploration of your target market, identifying deep competitive loopholes, functional scope parameters, and styling direction.', duration: 'Days 1 - 2' },
  { id: 2, title: 'Bespoke Architectural Planning', description: 'Specifying technical data dependencies, scalable cloud components, structural database models, and microservice APIs maps.', duration: 'Day 3' },
  { id: 3, title: 'Luxury UI/UX Prototyping', description: 'Drafting high-fidelity interactive wireframes and premium motion blueprints to achieve flawless UX flow.', duration: 'Days 4 - 5' },
  { id: 4, title: 'Cinematic Front & Back Development', description: 'Synthesizing rapid React pipelines, smooth 3D renders, custom shaders, and robust backend endpoints with spotless documentation.', duration: 'Days 6 - 10' },
  { id: 5, title: 'Comprehensive Security and Stress Testing', description: 'Subjecting all application pipelines to exhaustive load assertions, cross-device compatibility validations, and visual audits.', duration: 'Days 11 - 12' },
  { id: 6, title: 'Global Cloud Deployments', description: 'Executing zero-downtime, lightning-fast edge network launches with perfect DNS mappings and automated log tracking systems.', duration: 'Days 13 - 14' },
  { id: 7, title: 'Continuous Proactive Support', description: 'Round-the-clock server health monitoring, security patch applications, and agile updates to ensure permanent digital dominance.', duration: 'Ongoing' }
];

export const statistics: Statistic[] = [
  { label: 'Projects Delivered', value: 48, suffix: '+' },
  { label: 'Clients Satisfied', value: 35, suffix: '+' },
  { label: 'Countries Served', value: 12, suffix: '' },
  { label: 'Lines of Code Written', value: 450, suffix: 'K+' },
  { label: 'AI Automations Deployed', value: 24, suffix: '+' },
  { label: 'Years Experience', value: 6, suffix: '+' }
];

export const comparisonMetrics: ComparisonMetric[] = [
  { title: 'Sub-second Speeds', description: 'We optimize every vector, bundle size, and shader to secure perfect 100/100 Lighthouse scores, retaining users.', icon: 'Zap' },
  { title: 'Luxury Visual Design', description: 'Bespoke modern layouts, unique dark theme textures, and fluid motion pairings that compete directly on Awwwards.', icon: 'Award' },
  { title: 'AI-Powered Orchestration', description: 'Integrating state-of-the-art LLMs (Gemini, OpenAI) directly into business databases to automate workflows.', icon: 'Cpu' },
  { title: 'Durable Scalability', description: 'Constructing robust cloud structures, secure Firestore security layers, or advanced PostgreSQL systems.', icon: 'Layers' },
  { title: 'Highly Clean Codebases', description: 'Strict TypeScript guidelines, modular folder separation, and exhaustive documentation, avoiding legaciness.', icon: 'CodeXml' },
  { title: 'Absolute Data Security', description: 'Rigorous token encryption rules, robust authentication checks, and zero-compromise firewall rules.', icon: 'ShieldCheck' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Sterling',
    role: 'Vice President of Engineering',
    company: 'Sterling & Co. Logistics',
    content: 'The custom LLM system developed by Xentriq Studio automated over 90% of our daily cargo routing sheets in just 10 weeks. This was not a generic integration — it was a masterclass in custom AI agency design. Outstanding performance!'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Founder & Managing Director',
    company: 'Aura Living Inc',
    content: 'Our high-end international buyers were absolutely spellbound by the bespoke 3D property visualizer. Xentriq combined artistic luxury style with super responsive WebGL execution. Reached 100% pre-sales booking ahead of schedule.'
  },
  {
    id: 't3',
    name: 'Kenji Takahashi',
    role: 'Chief Product Officer',
    company: 'Nexus FinTech Group',
    content: 'Our transition to the modern React and Firebase portal went perfectly. Zero downtime, robust multi-tenant authorization rules, and gorgeous custom graphics. They are the paramount developers for luxury digital platforms.'
  }
];
