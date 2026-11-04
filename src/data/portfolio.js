// All portfolio content lives here. Edit this file to update the site.

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'
const dv = (n, variant = 'original') => `${DEVICON}/${n}/${n}-${variant}.svg`
const si = (slug) => `https://cdn.simpleicons.org/${slug}`
// Monochrome simple-icons (black SVGs) — rendered inverted to white.
const siMono = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${slug}.svg`

export const profile = {
  name: 'Gopika Rajan',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'MERN & Next.js Engineer', 'Cloud-native Builder', 'AI-assisted Developer'],
  location: 'Technopark, Thiruvananthapuram, Kerala',
  email: 'gopika02062000@gmail.com',
  phone: '', // optional, e.g. '+91 98765 43210'
  github: 'https://github.com/codebygopika-2000',
  linkedin: '', // TODO: LinkedIn URL
  resumeUrl: '', // put resume.pdf in /public and set to 'resume.pdf'
  headline:
    'I build multi-tenant SaaS platforms end to end, from pixel-perfect React and Next.js frontends to event-driven Node.js backends on AWS and Kubernetes.',
  about: [
    'I’m a Full Stack Developer at wiiz Business Solutions, Technopark, where I’ve spent the last few years shipping production platforms for clients in consulting, telecom, fintech and AI.',
    'My day-to-day spans Next.js and React on the frontend, Node.js, NestJS and Express on the backend, and MongoDB, DynamoDB, Redis and queues underneath, deployed on AWS and Kubernetes. I care about clean data models, fast UIs and integrations that just work: Stripe, Zoho, SendGrid, Azure AI and OAuth connectors.',
    'I use AI-assisted tooling (Claude Code, Cursor, Antigravity, MCP servers) to move faster without cutting corners on code quality.',
  ],
  stats: [
    { value: 4, suffix: '', label: 'Years of experience' },
    { value: 5, suffix: '', label: 'Production platforms' },
    { value: 30, suffix: '+', label: 'Technologies used' },
  ],
}

export const skills = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: dv('react') },
      { name: 'Next.js', icon: dv('nextjs'), invert: true },
      { name: 'TypeScript', icon: dv('typescript') },
      { name: 'JavaScript', icon: dv('javascript') },
      { name: 'React Native', icon: dv('react') },
      { name: 'Tailwind CSS', icon: dv('tailwindcss') },
      { name: 'HTML', icon: dv('html5') },
      { name: 'CSS', icon: dv('css3') },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: dv('nodejs') },
      { name: 'NestJS', icon: dv('nestjs') },
      { name: 'Express', icon: dv('express'), invert: true },
      { name: 'REST APIs', icon: '' },
      { name: 'Redis', icon: dv('redis') },
      { name: 'BullMQ', icon: '' },
      { name: 'RabbitMQ', icon: dv('rabbitmq') },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: dv('amazonwebservices', 'plain-wordmark'), invert: true },
      { name: 'Lambda', icon: siMono('awslambda'), invert: true },
      { name: 'Cognito', icon: siMono('amazoncognito'), invert: true },
      { name: 'S3', icon: siMono('amazons3'), invert: true },
      { name: 'ECS', icon: siMono('amazonecs'), invert: true },
      { name: 'Kubernetes', icon: dv('kubernetes', 'plain') },
      { name: 'Docker', icon: dv('docker') },
      { name: 'Traefik', icon: dv('traefikproxy') },
      { name: 'GitHub Actions', icon: dv('githubactions') },
      { name: 'Git', icon: dv('git') },
    ],
  },
  {
    group: 'Data & Integrations',
    items: [
      { name: 'MongoDB', icon: dv('mongodb') },
      { name: 'DynamoDB', icon: dv('dynamodb') },
      { name: 'Stripe', icon: si('stripe') },
      { name: 'Zoho', icon: si('zoho') },
      { name: 'SendGrid', icon: siMono('sendgrid'), invert: true },
      { name: 'Azure AI', icon: dv('azure') },
      { name: 'Keycloak', icon: si('keycloak') },
      { name: 'n8n', icon: si('n8n') },
    ],
  },
  {
    group: 'AI Tooling',
    items: [
      { name: 'Claude Code', icon: si('claude') },
      { name: 'Cursor', icon: si('cursor'), invert: true },
      { name: 'Antigravity', icon: '' },
      { name: 'MCP Servers', icon: '' },
      { name: 'Postman', icon: si('postman') },
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'wiiz Business Solutions',
    location: 'Technopark, Trivandrum',
    period: 'June 2023 – Present',
    summary:
      'Building multi-tenant SaaS products for clients across consulting, telecom, fintech and AI, owning features from data model to UI.',
    points: [
      'Built Envision’s spreadsheet-style pricing grid with automatic rate-card lookup, versioning and approval workflows on Next.js, NestJS, AWS Lambda and DynamoDB, with Stripe usage-based credits.',
      'Delivered Milta’s B2B web store and admin dashboard on an event-driven backend (RabbitMQ, AWS ECS): quantity-slab pricing with VAT, passwordless SMS sign-in and Bancontact payments confirmed by webhook.',
      'Developed ChordianAI’s client and admin portals and Express API, with subscriptions, per-service credit limits, real-time support chat and BullMQ-scheduled SendGrid emails.',
      'Worked on Technofin’s Node.js microservices on Kubernetes: AI document processing with Azure Form Recognizer and automated invoicing with Zoho and Stripe.',
      'On Chordian Memory, an enterprise AI knowledge platform, added OAuth connectors through Airbyte (Jira, GitHub, Confluence, Salesforce, HubSpot, Slack), global search, an onboarding flow and Open Data subscriptions with access control.',
      'Use Claude Code, Cursor and MCP servers (GitHub, Wix) daily to speed up prototyping, reviews and delivery.',
    ],
    tags: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'DynamoDB', 'AWS', 'Kubernetes', 'Stripe'],
  },
]

// `accent` drives each project's colour; `visual` picks the animated mockup.
export const projects = [
  {
    name: 'Envision',
    category: 'Enterprise SaaS',
    accent: '#f472b6',
    visual: 'pricing',
    description:
      'A multi-tenant pricing platform that replaces spreadsheet-based deal pricing for consulting and project-delivery firms.',
    impact:
      'Teams price deals faster and more consistently: rates fill in automatically, every version is tracked, and approvals happen in one place instead of across spreadsheets and email.',
    features: [
      'Spreadsheet-style pricing grid with automatic rate-card lookup',
      'AI that drafts and reviews pricing models from plain English',
      'Sharing, versioning and approval workflows',
      'Stripe subscriptions with usage-based credits',
    ],
    tech: ['Next.js', 'NestJS', 'AWS Lambda', 'DynamoDB', 'Stripe'],
    links: [],
  },
  {
    name: 'Milta B2B',
    category: 'B2B Commerce · Telecom',
    accent: '#38bdf8',
    visual: 'order',
    description:
      'A B2B ordering platform for telecom retailers in Belgium: web store, mobile app and admin dashboard on one event-driven backend.',
    impact:
      'Shop owners restock prepaid SIM cards and recharge vouchers in bulk at better prices, pay online, and request carrier services like terminal top-ups and SIM swaps, all from one place.',
    features: [
      'Bulk ordering with quantity-based price slabs and VAT',
      'Passwordless SMS sign-in with Belgian VAT number checks',
      'Card and Bancontact payments confirmed by webhook',
      'Service requests for E-Till top-ups, POS terminals and SIM swaps',
    ],
    tech: ['Next.js', 'React Native', 'MongoDB', 'RabbitMQ', 'AWS ECS'],
    links: [],
  },
  {
    name: 'ChordianAI',
    category: 'AI Platform',
    accent: '#f59e0b',
    visual: 'architecture',
    description: 'A multi-tenant AI orchestration platform with client and admin portals, built end to end.',
    impact:
      'Businesses get metered access to AI services with clear usage tracking: credits are deducted automatically, and help is always a live chat away.',
    features: [
      'Subscriptions and credits with per-service limits',
      'Real-time support chat',
      'Transactional and scheduled email notifications',
    ],
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'SendGrid'],
    links: [],
  },
  {
    name: 'Technofin',
    category: 'Service Management',
    accent: '#34d399',
    visual: 'cluster',
    description:
      'A multi-tenant service-management platform with client, admin and employee portals on a microservices backend.',
    impact:
      'Clients, staff and admins each get a portal tailored to them, while invoicing, payments and document processing run automatically in the background.',
    features: [
      'Dedicated client, admin and employee portals',
      'AI document processing with Azure Form Recognizer',
      'Automated invoicing and reconciliation via Zoho and Stripe',
    ],
    tech: ['Node.js', 'MongoDB', 'Kubernetes', 'Azure AI', 'Stripe'],
    links: [],
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'University College of Engineering, Kariavattom',
    period: '2019 – 2022',
    score: '70%',
  },
  {
    degree: 'Higher Secondary (Plus Two)',
    school: 'Amritha Sanskrit HSS, Parippally, Kollam',
    period: '2017 – 2018',
    score: '85%',
  },
  {
    degree: 'Secondary School (SSLC)',
    school: 'Amritha Sanskrit HSS, Parippally, Kollam',
    period: '2015 – 2016',
    score: '99%',
  },
]
