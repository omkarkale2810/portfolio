// Centralized portfolio data — update here to change the site.
// All content is sourced strictly from the resume.

export type Social = {
  github: string
  linkedin: string
  email: string
  resumeUrl: string // Replace with hosted PDF URL or repo path
}

export type NavItem = { id: string; label: string }

export type Experience = {
  id: string
  company: string
  role: string
  start: string
  end: string
  current?: boolean
  location?: string
  description: string
  bullets: string[]
  technologies: string[]
  impact?: string
  logo?: string // optional single-letter/initials placeholder
}

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  accent?: 'violet' | 'cyan' | 'emerald'
}

export type SkillGroup = {
  id: string
  label: string
  highlight?: boolean
  items: string[]
}

export type Achievement = {
  id: string
  value: string
  suffix?: string
  label: string
  sub?: string
}

export type Leadership = {
  id: string
  role: string
  org: string
  bullets: string[]
}

export const SOCIAL: Social = {
  github: 'https://github.com/omkarkale2810',
  linkedin: 'https://www.linkedin.com/in/omkar-kale-498225258',
  email: 'omkarkale7888@gmail.com',
  // Replace this with the public URL of your hosted resume PDF.
  resumeUrl: 'PLACEHOLDER_RESUME_URL',
}

export const NAV: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

export const PROFILE = {
  name: 'Omkar Suhas Kale',
  shortName: 'Omkar Kale',
  initials: 'OK',
  role: 'Associate Software Engineer',
  brand: 'AI Engineer • Software Engineer • AI Automation',
  headline:
    'Building intelligent systems that turn complex engineering workflows into automated solutions.',
  intro:
    "I'm an Associate Software Engineer at Panasonic Avionics, where I design AI agents and Model Context Protocol (MCP) servers in Python, build LLM-powered workflows for code generation and review, and ship automation that saves engineering teams hours every week. Before this I built a RAG-powered engineering assistant as a Software Engineering Intern, and at NPCI I automated data preprocessing pipelines with LLMs.",
  currentCompany: 'Panasonic Avionics Corporation',
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'pac-ase',
    company: 'Panasonic Avionics Corporation',
    role: 'Associate Software Engineer',
    start: 'July 2026',
    end: 'Present',
    current: true,
    location: 'On-site',
    description:
      'Designing and building AI agents, MCP servers, and LLM-powered workflows for engineering automation.',
    bullets: [
      'Developing AI Agents and Model Context Protocol (MCP) servers in Python.',
      'Building MCP tools and server-side components connecting agents to engineering and automation frameworks.',
      'Building LLM-powered workflows for code generation, analysis, and validation.',
      'Developing multi-stage review pipelines for generated code.',
      'Building software automation solutions in Python and C++.',
    ],
    technologies: ['Python', 'C++', 'AI Agents', 'MCP', 'LLMs', 'Automation'],
    impact: 'Current role',
  },
  {
    id: 'pac-intern',
    company: 'Panasonic Avionics Corporation',
    role: 'Software Engineering Intern',
    start: 'January 2026',
    end: 'June 2026',
    location: 'On-site',
    description:
      'Built the PAC OS Tools Portal and a RAG-based AI assistant for deployment validation.',
    bullets: [
      'Developed the PAC OS Tools Portal using Flask.',
      'Built automation tools for deployment validation, configuration verification, and screen-information comparison.',
      'Integrated a RAG-based AI assistant using LLMs.',
      'Automated validation and report-generation workflows.',
      'Improved engineering productivity.',
    ],
    technologies: ['Python', 'Flask', 'RAG', 'LLMs', 'Automation'],
    impact: 'Improved engineering productivity',
  },
  {
    id: 'npci',
    company: 'National Payments Corporation of India (NPCI)',
    role: 'Data Science Intern',
    start: 'May 2025',
    end: 'July 2025',
    location: 'India',
    description:
      'Automated data preprocessing pipelines with LLM-assisted modules.',
    bullets: [
      'Developed Python modules for automated data preprocessing.',
      'Increased team productivity by 20%.',
      'Integrated LLM-based automation into preprocessing workflows.',
      'Reduced manual effort by 30%.',
    ],
    technologies: ['Python', 'LLMs', 'Data Preprocessing', 'Pandas'],
    impact: '+20% productivity • −30% manual effort',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'llm-preprocess',
    title: 'LLM-Powered Data Preprocessing Assistant',
    tagline: 'Natural-language → clean data',
    description:
      'A Streamlit app that turns plain-English instructions into executable Python preprocessing code, with sandboxed execution and visualization.',
    features: [
      'Natural-language-driven data preprocessing',
      'Python code generation',
      'Automatic / manual execution modes',
      'Sandboxed code execution',
      'Data visualization',
      'Exportable Python scripts',
    ],
    technologies: ['Streamlit', 'LLaMA3-70B', 'LangChain', 'Hugging Face', 'Python'],
    githubUrl: 'PLACEHOLDER_GITHUB_URL',
    featured: true,
    accent: 'violet',
  },
  {
    id: 'gpt2-finetune',
    title: 'Fine-Tuning GPT-2 on Instruction Data',
    tagline: 'Custom transformer training pipeline',
    description:
      'A custom training pipeline that fine-tunes GPT-2 on instruction-based datasets, with measurable gains in response quality.',
    features: [
      'Fine-tuned GPT-2 on instruction-based datasets',
      'Custom transformer training pipeline',
      'Improved response quality by 15%',
    ],
    technologies: ['PyTorch', 'GPT-2', 'Transformers', 'Python'],
    githubUrl: 'PLACEHOLDER_GITHUB_URL',
    accent: 'cyan',
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Application',
    tagline: 'Full-stack messaging with authentication',
    description:
      'A real-time chat platform with authentication, dynamic rendering, and a Node.js + MongoDB backend.',
    features: [
      'Real-time messaging',
      'Authentication',
      'Dynamic chat rendering',
      'Full-stack architecture',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JavaScript'],
    githubUrl: 'PLACEHOLDER_GITHUB_URL',
    accent: 'emerald',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'C++', 'C', 'SQL', 'JavaScript'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML / Generative AI',
    highlight: true,
    items: [
      'AI Agents',
      'Agentic AI',
      'LLMs',
      'RAG',
      'LangChain',
      'MCP (Servers & Tools)',
      'Prompt Engineering',
      'PyTorch',
      'Hugging Face',
      'Ollama',
      'Scikit-learn',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Web',
    items: ['Flask', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Linux', 'Shell Scripting', 'NumPy', 'Pandas', 'Matplotlib'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'lc', value: '1735', label: 'LeetCode Rating', sub: 'Competitive programming' },
  { id: 'ggg', value: '1627', label: 'GeeksforGeeks Rating', sub: 'Problem solving' },
  { id: 'hr', value: '5', suffix: '★', label: 'HackerRank', sub: 'Verified skill badges' },
  { id: 'dsa', value: '1000', suffix: '+', label: 'DSA Problems Solved', sub: 'Across platforms' },
  { id: 'coep', value: 'Finalist', label: "COEP's Elite Coding Competition", sub: 'COEP Technological University' },
]

export const LEADERSHIP: Leadership[] = [
  {
    id: 'regatta',
    role: 'Web Head',
    org: "97th COEP Regatta",
    bullets: [
      'Built the official event website.',
      'Led a team of 5 engineers and designers.',
    ],
  },
  {
    id: 'zest',
    role: 'Web Coordinator',
    org: 'COEP Zest',
    bullets: [
      "Managed digital presence for 20+ events.",
      'Reached 5,000+ participants through web platforms.',
    ],
  },
]

export const EDUCATION = {
  school: 'COEP Technological University, Pune',
  degree: 'Bachelor of Technology in Computer Engineering',
  start: '2022',
  end: '2026',
  cgpa: '7.08',
}
