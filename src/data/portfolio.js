// All portfolio content lives here. Edit this file to update the site.
// Fields marked TODO still need real details.

export const profile = {
  name: 'Gopika Rajan',
  role: 'Full Stack Developer',
  stackTag: 'MERN · AI-assisted development',
  location: 'Technopark, Thiruvananthapuram, Kerala',
  email: 'gopika02062000@gmail.com',
  phone: '+91 98765 43210', // TODO: real phone (or remove)
  github: 'https://github.com/codebygopika-2000',
  linkedin: '', // TODO: LinkedIn URL
  resumeUrl: '', // TODO: put resume.pdf in /public and set to 'resume.pdf'
  headline:
    'I build responsive, scalable web applications across frontend, backend, and cloud-hosted data systems.',
  about: [
    'Full Stack Developer with almost 4 years of experience building production-grade web applications with the MERN stack. I currently work at wiiz Business Solutions, Technopark, Trivandrum, shipping features across frontend, backend, and cloud-hosted databases.',
    'I work mostly in JavaScript, React.js, Node.js and Express.js, with hands-on experience in NoSQL and cloud-native databases (MongoDB, DynamoDB), AWS and Docker. I use AI-assisted tools (Cursor, Claude, Antigravity) and MCP servers to move faster without lowering code quality.',
  ],
  stats: [
    { value: '4', label: 'Years experience' },
    { value: '5', label: 'Projects in production' },
    { value: 'MERN', label: 'Core stack' },
  ],
}

export const skills = [
  { group: 'Languages', items: ['JavaScript'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'Databases', items: ['MongoDB', 'DynamoDB', 'NoSQL'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'Postman', 'Render', 'Framer', 'VS Code'] },
  { group: 'AI-Assisted Dev', items: ['Cursor', 'Claude Code', 'Antigravity', 'Wix MCP', 'GitHub MCP'] },
  { group: 'Practices', items: ['OOP', 'Problem Solving', 'REST API Design', 'Manual Testing', 'Debugging'] },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'wiiz Business Solutions',
    location: 'Technopark, Trivandrum',
    period: 'June 2023 – Present',
    points: [
      'Build frontend and backend modules for a project and resource management platform using React.js and Node.js/Express.js.',
      'Design data models in MongoDB and DynamoDB for scalable, cloud-hosted application data.',
      'Build responsive, accessible UI components with React.js, HTML, CSS and Tailwind CSS.',
      'Build and integrate RESTful APIs between frontend and backend.',
      'Use Cursor, Claude and Antigravity to speed up prototyping, development and code review.',
      'Maintain integrations using the Wix MCP and GitHub MCP servers for deployment and version-control workflows.',
    ],
  },
  {
    role: 'MERN Stack Developer (Intern)',
    company: 'TODO: company name',
    location: '',
    period: 'TODO: dates',
    points: ['TODO: what you worked on during the internship.'],
  },
]

// `featured: true` shows a larger card. `links` entries without a url are hidden.
export const projects = [
  {
    name: 'Chordian',
    tagline: 'Enterprise AI data-intelligence platform',
    featured: true,
    description:
      'A multi-tenant platform that turns a company’s scattered knowledge into one searchable memory. It combines semantic vector search with a knowledge graph, syncs data from Notion, Confluence, Gmail, Google Drive and HubSpot, and supports PDF uploads, with every tenant’s data kept separate.',
    highlights: [
      'Customer portal in Next.js with a live, animated knowledge-graph view',
      'Native connectors for Notion, Confluence, Gmail, Google Drive and HubSpot',
      'Multi-factor authentication with Keycloak TOTP and a custom QR enrolment flow',
      'Read-only public memory built from open government datasets',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Redis', 'Qdrant', 'Neo4j', 'Keycloak', 'Docker', 'Kubernetes'],
    links: [{ label: 'Live', url: '' }],
  },
  {
    name: 'Envision',
    tagline: 'TODO: one-line summary',
    featured: true,
    description: 'TODO: what Envision does and who it is for.',
    highlights: ['TODO: key feature you built', 'TODO: key feature you built'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: [{ label: 'Live', url: '' }],
  },
  {
    name: 'Technofin',
    tagline: 'TODO: one-line summary',
    description: 'TODO: what Technofin does and who it is for.',
    highlights: ['TODO: key feature you built'],
    tech: ['React.js', 'Node.js', 'MongoDB'],
    links: [{ label: 'Live', url: '' }],
  },
  {
    name: 'Speech4all',
    tagline: 'TODO: one-line summary',
    description: 'TODO: what Speech4all does and who it is for.',
    highlights: ['TODO: key feature you built'],
    tech: ['React.js', 'Node.js'],
    links: [{ label: 'Live', url: '' }],
  },
  {
    name: 'Milta',
    tagline: 'TODO: one-line summary',
    description: 'TODO: what Milta does and who it is for.',
    highlights: ['TODO: key feature you built'],
    tech: ['React.js', 'Node.js'],
    links: [{ label: 'Live', url: '' }],
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
    school: 'Amritha Sanskrit Higher Secondary School, Parippally, Kollam',
    period: '2017 – 2018',
    score: '85%',
  },
  {
    degree: 'Secondary School (SSLC)',
    school: 'Amritha Sanskrit Higher Secondary School, Parippally, Kollam',
    period: '2015 – 2016',
    score: '99%',
  },
]
