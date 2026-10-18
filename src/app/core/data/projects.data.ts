export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  status: 'In progress' | 'Personal project';
  filterTags: string[];
  description: string;
  whatIBuilt: string[];
  stack: { name: string; iconClass?: string }[];
  diagramSvg: string;
  learned: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export const PROJECTS_LIST: Project[] = [
  {
    id: 'schemashift',
    number: '01',
    name: 'SchemaShift',
    tagline: 'Database migration engine with ML & AI assistance',
    category: 'AI + Data',
    status: 'In progress',
    filterTags: ['All', '.NET', 'AI'],
    description: 'A web tool that compares tables and columns in different databases and suggests SQL scripts to help migrate between them.',
    whatIBuilt: [
      'Matching of similar tables and columns with machine learning',
      'Python FastAPI service for embedding generation and schema diffing',
      'SQL migration script generation using AI assistance',
      'Clean Angular 19 interface to review and edit changes before running'
    ],
    stack: [
      { name: '.NET 8', iconClass: 'devicon-dotnetcore-plain colored' },
      { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
      { name: 'Python', iconClass: 'devicon-python-plain colored' },
      { name: 'FastAPI', iconClass: 'devicon-fastapi-plain colored' },
      { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="15" y="60" width="145" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="87" y="95" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">SQL Server</text>
        <text x="87" y="115" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="10">Source Schema</text>

        <path d="M160 100 H220" stroke="#5b7cff" stroke-width="2" stroke-dasharray="4 4"/>
        <polygon points="220,100 212,95 212,105" fill="#5b7cff"/>

        <rect x="225" y="45" width="200" height="110" rx="14" fill="rgba(91,124,255,0.08)" stroke="#5b7cff" stroke-width="1.5"/>
        <text x="325" y="80" text-anchor="middle" fill="#5b7cff" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">FastAPI ML Service</text>
        <text x="325" y="105" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="11">Column Matching</text>
        <text x="325" y="125" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="10">Embeddings &amp; Cosine Sim</text>

        <path d="M425 100 H485" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="485,100 477,95 477,105" fill="#9b6bff"/>

        <rect x="490" y="45" width="140" height="110" rx="14" fill="rgba(155,107,255,0.08)" stroke="#9b6bff" stroke-width="1.5"/>
        <text x="560" y="80" text-anchor="middle" fill="#9b6bff" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700">AI Generator</text>
        <text x="560" y="105" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="11">SQL Script</text>
        <text x="560" y="125" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="10">Validated DDL</text>

        <path d="M630 100 H670" stroke="#22d3ee" stroke-width="2"/>
        <polygon points="670,100 662,95 662,105" fill="#22d3ee"/>

        <rect x="675" y="60" width="75" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="712" y="95" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">PostgreSQL</text>
        <text x="712" y="115" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Target DB</text>
      </svg>
    `,
    learned: 'How to connect a .NET app with a Python ML service and compare different database engines safely.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'ai-software-factory',
    number: '02',
    name: 'AI Software Factory',
    tagline: 'Multi-agent system turning app ideas into full-stack code',
    category: 'AI agents, Full-stack',
    status: 'Personal project',
    filterTags: ['All', '.NET', 'AI', 'DevOps'],
    description: 'You describe an app idea and several AI agents build it step by step. You approve each step before the next one starts.',
    whatIBuilt: [
      'Agents for user stories, architecture and database design, .NET 8 backend, Angular 19 frontend, and Docker + GitHub Actions',
      'Human approval gate enforced between each generation step',
      'Structured JSON schema checks and validation of all AI outputs'
    ],
    stack: [
      { name: '.NET 8', iconClass: 'devicon-dotnetcore-plain colored' },
      { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
      { name: 'Azure OpenAI', iconClass: 'devicon-azure-plain colored' },
      { name: 'Semantic Kernel' },
      { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
      { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="10" y="65" width="110" height="65" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="65" y="97" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">User Idea</text>
        <text x="65" y="115" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Prompt Spec</text>

        <path d="M120 97 H155" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="155,97 147,92 147,102" fill="#9b6bff"/>

        <rect x="160" y="45" width="440" height="105" rx="14" fill="rgba(155,107,255,0.06)" stroke="#9b6bff" stroke-width="1.5"/>
        <text x="380" y="70" text-anchor="middle" fill="#9b6bff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Semantic Kernel Multi-Agent Pipeline</text>
        <text x="380" y="93" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="11">Analyst → Architect → .NET Backend → Angular UI → DevOps</text>
        
        <rect x="260" y="108" width="240" height="26" rx="13" fill="rgba(52,232,176,0.15)" stroke="#34e8b0" stroke-width="1"/>
        <text x="380" y="125" text-anchor="middle" fill="#34e8b0" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">★ Human Approval Gate at each step</text>

        <path d="M600 97 H635" stroke="#34e8b0" stroke-width="2"/>
        <polygon points="635,97 627,92 627,102" fill="#34e8b0"/>

        <rect x="640" y="65" width="110" height="65" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="695" y="97" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Full App</text>
        <text x="695" y="115" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">.NET + Angular</text>
      </svg>
    `,
    learned: 'How to coordinate several AI agents and keep a human in control of AI-generated code.',
    githubUrl: 'https://github.com/Arijhajjaji22/AI-Assistant-Pro'
  },
  {
    id: 'aura',
    number: '03',
    name: 'Aura',
    tagline: 'Document search & multi-modal AI assistant with microservices',
    category: 'AI, Microservices',
    status: 'Personal project',
    filterTags: ['All', 'Spring Boot', 'AI'],
    description: 'A chat assistant that answers questions from your PDFs, looks at images, and searches websites for live information.',
    whatIBuilt: [
      'Microservices architecture with API Gateway and Eureka service discovery',
      'PDF question-answering pipeline (RAG) using Spring AI and PostgreSQL vector search',
      'Secure authentication with RSA-signed JWT tokens and Redis caching'
    ],
    stack: [
      { name: 'Spring Boot 3', iconClass: 'devicon-spring-plain colored' },
      { name: 'Spring AI', iconClass: 'devicon-spring-plain colored' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
      { name: 'Redis', iconClass: 'devicon-redis-plain colored' },
      { name: 'Nginx', iconClass: 'devicon-nginx-original colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="15" y="55" width="100" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="65" y="88" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Angular 19</text>
        <text x="65" y="106" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Chat UI</text>

        <path d="M115 90 H155" stroke="#22d3ee" stroke-width="2"/>
        <polygon points="155,90 147,85 147,95" fill="#22d3ee"/>

        <rect x="160" y="55" width="120" height="70" rx="12" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.5"/>
        <text x="220" y="88" text-anchor="middle" fill="#22d3ee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Gateway + Nginx</text>
        <text x="220" y="106" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">JWT RSA Check</text>

        <path d="M280 90 H320" stroke="#5b7cff" stroke-width="2"/>
        <polygon points="320,90 312,85 312,95" fill="#5b7cff"/>

        <rect x="325" y="40" width="250" height="100" rx="14" fill="rgba(91,124,255,0.08)" stroke="#5b7cff" stroke-width="1.5"/>
        <text x="450" y="68" text-anchor="middle" fill="#5b7cff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Aura AI Core Services</text>
        <text x="450" y="93" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">PDF RAG · Web Search · Image Vision</text>
        <text x="450" y="115" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Spring Boot 3 + Spring AI</text>

        <path d="M575 90 H615" stroke="#34e8b0" stroke-width="2"/>
        <polygon points="615,90 607,85 607,95" fill="#34e8b0"/>

        <rect x="620" y="55" width="125" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="682" y="88" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">PostgreSQL + Redis</text>
        <text x="682" y="106" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Vectors &amp; Caching</text>
      </svg>
    `,
    learned: 'How microservices talk to each other, how JWT with RSA keys works, and how RAG works in production.',
    githubUrl: 'https://github.com/Arijhajjaji22/aura-chatbot'
  },
  {
    id: 'taskflow',
    number: '04',
    name: 'TaskFlow',
    tagline: 'Real-time collaborative Kanban board with event-driven architecture',
    category: 'Real time, Event-driven',
    status: 'Personal project',
    filterTags: ['All', 'Spring Boot'],
    description: 'A Kanban board for teams. When one person moves a task, everyone sees it right away without refreshing.',
    whatIBuilt: [
      'Event streaming with Apache Kafka topics for task actions',
      'Live updates broadcast with WebSocket (STOMP) protocol',
      'GraphQL API and Keycloak OAuth2 security integration',
      'Interactive drag-and-drop board tested with JUnit 5 and Vitest'
    ],
    stack: [
      { name: 'Spring Boot 3', iconClass: 'devicon-spring-plain colored' },
      { name: 'GraphQL', iconClass: 'devicon-graphql-plain colored' },
      { name: 'WebSocket' },
      { name: 'Kafka', iconClass: 'devicon-apachekafka-original colored' },
      { name: 'Keycloak' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 170" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="15" y="50" width="130" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="80" y="82" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Angular Board</text>
        <text x="80" y="100" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Drag &amp; Drop</text>

        <path d="M145 85 H195" stroke="#34e8b0" stroke-width="2"/>
        <polygon points="195,85 187,80 187,90" fill="#34e8b0"/>

        <rect x="200" y="40" width="220" height="90" rx="14" fill="rgba(52,232,176,0.08)" stroke="#34e8b0" stroke-width="1.5"/>
        <text x="310" y="70" text-anchor="middle" fill="#34e8b0" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Spring Boot 3 API</text>
        <text x="310" y="92" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">GraphQL + WebSocket STOMP</text>
        <text x="310" y="112" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Keycloak OAuth2 Auth</text>

        <path d="M420 85 H470" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="470,85 462,80 462,90" fill="#9b6bff"/>

        <rect x="475" y="45" width="120" height="80" rx="12" fill="rgba(155,107,255,0.08)" stroke="#9b6bff" stroke-width="1.5"/>
        <text x="535" y="80" text-anchor="middle" fill="#9b6bff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Kafka</text>
        <text x="535" y="102" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Events Broker</text>

        <path d="M595 85 H635" stroke="#5b7cff" stroke-width="2"/>
        <polygon points="635,85 627,80 627,90" fill="#5b7cff"/>

        <rect x="640" y="50" width="105" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="692" y="82" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">n8n Auto</text>
        <text x="692" y="100" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Notifications</text>
      </svg>
    `,
    learned: 'How Kafka producers and consumers work, and how to secure an API with Keycloak.',
    githubUrl: 'https://github.com/Arijhajjaji22/Taskflow-n8n'
  },
  {
    id: 'ai-code-assistant-pro',
    number: '05',
    name: 'AI Code Assistant Pro',
    tagline: 'VS Code extension for real-time security scanning and AI code repairs',
    category: 'Developer tool, AI',
    status: 'Personal project',
    filterTags: ['All', 'AI'],
    description: 'A VS Code extension that finds bugs and security problems while you type and suggests a fix you can apply in one click.',
    whatIBuilt: [
      'AST parsing using Tree-sitter for fast syntax inspection',
      'Security checks against OWASP Top 10 vulnerabilities via Snyk API',
      'Fix suggestions powered by Google Gemini with side-by-side diff in WebView'
    ],
    stack: [
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
      { name: 'VS Code API' },
      { name: 'Google Gemini' },
      { name: 'Tree-sitter' },
      { name: 'Snyk API' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="15" y="45" width="110" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="70" y="78" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Active Editor</text>
        <text x="70" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Code buffer</text>

        <path d="M125 80 H170" stroke="#5b7cff" stroke-width="2"/>
        <polygon points="170,80 162,75 162,85" fill="#5b7cff"/>

        <rect x="175" y="35" width="180" height="90" rx="14" fill="rgba(91,124,255,0.08)" stroke="#5b7cff" stroke-width="1.5"/>
        <text x="265" y="65" text-anchor="middle" fill="#5b7cff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Tree-sitter AST</text>
        <text x="265" y="87" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">Syntax &amp; Snyk Check</text>
        <text x="265" y="107" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">OWASP Top 10 rules</text>

        <path d="M355 80 H400" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="400,80 392,75 392,85" fill="#9b6bff"/>

        <rect x="405" y="35" width="160" height="90" rx="14" fill="rgba(155,107,255,0.08)" stroke="#9b6bff" stroke-width="1.5"/>
        <text x="485" y="65" text-anchor="middle" fill="#9b6bff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Gemini AI</text>
        <text x="485" y="87" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">Fix Generation</text>
        <text x="485" y="107" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Unified patch output</text>

        <path d="M565 80 H610" stroke="#22d3ee" stroke-width="2"/>
        <polygon points="610,80 602,75 602,85" fill="#22d3ee"/>

        <rect x="615" y="45" width="130" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="680" y="78" text-anchor="middle" fill="#22d3ee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Diff &amp; 1-Click Fix</text>
        <text x="680" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Applied in file</text>
      </svg>
    `,
    learned: 'How code is represented as a syntax tree (AST) and how a VS Code extension talks to its WebView.',
    githubUrl: 'https://github.com/Arijhajjaji22/AI-Assistant-Pro'
  },
  {
    id: 'trustcrm',
    number: '06',
    name: 'TrustCRM',
    tagline: 'CRM platform securing business deals with Ethereum smart contract escrow',
    category: 'Blockchain, Full-stack',
    status: 'Personal project',
    filterTags: ['All', 'Blockchain'],
    description: 'A CRM web app that protects client payments with an escrow smart contract on Ethereum Sepolia. The money is released only when both sides agree.',
    whatIBuilt: [
      'Solidity smart contract for secure milestone payments on Sepolia testnet',
      'Contract unit tests and automated deployment scripts using Hardhat',
      'React 18 interface connected with MetaMask and Ethers.js for wallet signing'
    ],
    stack: [
      { name: 'Solidity 0.8.28', iconClass: 'devicon-solidity-plain colored' },
      { name: 'Hardhat' },
      { name: 'Ethers.js' },
      { name: 'React 18', iconClass: 'devicon-react-original colored' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="45" width="150" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="95" y="78" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">React + MetaMask</text>
        <text x="95" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Ethers.js Provider</text>

        <path d="M170 80 H240" stroke="#22d3ee" stroke-width="2"/>
        <polygon points="240,80 232,75 232,85" fill="#22d3ee"/>

        <rect x="245" y="35" width="220" height="90" rx="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.5"/>
        <text x="355" y="65" text-anchor="middle" fill="#22d3ee" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Node.js CRM API</text>
        <text x="355" y="87" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">Deals · Invoices · Chat</text>
        <text x="355" y="107" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">MongoDB persistence</text>

        <path d="M465 80 H530" stroke="#34e8b0" stroke-width="2"/>
        <polygon points="530,80 522,75 522,85" fill="#34e8b0"/>

        <rect x="535" y="40" width="205" height="80" rx="14" fill="rgba(52,232,176,0.08)" stroke="#34e8b0" stroke-width="1.5"/>
        <text x="637" y="72" text-anchor="middle" fill="#34e8b0" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">Solidity Escrow Contract</text>
        <text x="637" y="95" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">Ethereum Sepolia</text>
      </svg>
    `,
    learned: 'How smart contracts work and how a web app connects to a blockchain.',
    githubUrl: 'https://github.com/Arijhajjaji22/CRM-',
    liveDemoUrl: 'https://sepolia.etherscan.io/address/0x3e16CF721c141BC49065A496eBA83A928e37C9b8'
  },
  {
    id: 'school-management-system',
    number: '07',
    name: 'School Management System',
    tagline: 'Role-based operational platform for educational institutions',
    category: 'Web app',
    status: 'Personal project',
    filterTags: ['All', '.NET'],
    description: 'A web app with a dashboard for each role: students, teachers, administrators, and directors.',
    whatIBuilt: [
      'Role-based access control with granular permission checks',
      'Dedicated dashboards per role (student, teacher, admin, director)',
      'Relational database architecture for daily school operations'
    ],
    stack: [
      { name: '.NET 8', iconClass: 'devicon-dotnetcore-plain colored' },
      { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
      { name: 'Razor' },
      { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
      { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="45" width="160" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="100" y="78" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Roles</text>
        <text x="100" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Student · Teacher · Admin</text>

        <path d="M180 80 H260" stroke="#5b7cff" stroke-width="2"/>
        <polygon points="260,80 252,75 252,85" fill="#5b7cff"/>

        <rect x="265" y="35" width="240" height="90" rx="14" fill="rgba(91,124,255,0.08)" stroke="#5b7cff" stroke-width="1.5"/>
        <text x="385" y="65" text-anchor="middle" fill="#5b7cff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">.NET 8 Razor App</text>
        <text x="385" y="87" text-anchor="middle" fill="#eae8f0" font-family="'Inter', sans-serif" font-size="10">C# Controllers · RBAC Engine</text>
        <text x="385" y="107" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Docker containerized</text>

        <path d="M505 80 H575" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="575,80 567,75 567,85" fill="#9b6bff"/>

        <rect x="580" y="45" width="160" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="660" y="78" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">SQL Server</text>
        <text x="660" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Academic data schema</text>
      </svg>
    `,
    learned: 'How to build role-based access in an ASP.NET app.',
    githubUrl: 'https://github.com/Arijhajjaji22/SchoolManagementSystem'
  },
  {
    id: 'cicd-automated-deployment',
    number: '08',
    name: 'CI/CD Automated Deployment',
    tagline: 'End-to-end automated deployment pipeline with quality gates & telemetry',
    category: 'DevOps',
    status: 'Personal project',
    filterTags: ['All', 'DevOps'],
    description: 'A Jenkins pipeline that runs tests, checks code quality with SonarQube, and deploys Docker containers.',
    whatIBuilt: [
      'Full pipeline from git code push to automated deployment',
      'Automated quality checks and vulnerability scanning with SonarQube',
      'Health and container metrics monitoring with Prometheus and Grafana'
    ],
    stack: [
      { name: 'Jenkins', iconClass: 'devicon-jenkins-plain colored' },
      { name: 'SonarQube', iconClass: 'devicon-sonarqube-plain colored' },
      { name: 'Nexus' },
      { name: 'Prometheus', iconClass: 'devicon-prometheus-original colored' },
      { name: 'Grafana', iconClass: 'devicon-grafana-plain colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
      { name: 'Docker Compose' }
    ],
    diagramSvg: `
      <svg viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="15" y="45" width="90" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
        <text x="60" y="78" text-anchor="middle" fill="#eae8f0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">Git Push</text>
        <text x="60" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Webhook</text>

        <path d="M105 80 H140" stroke="#34e8b0" stroke-width="2"/>
        <polygon points="140,80 132,75 132,85" fill="#34e8b0"/>

        <rect x="145" y="45" width="105" height="70" rx="12" fill="rgba(52,232,176,0.08)" stroke="#34e8b0" stroke-width="1.5"/>
        <text x="197" y="78" text-anchor="middle" fill="#34e8b0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Jenkins CI</text>
        <text x="197" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Build &amp; Tests</text>

        <path d="M250 80 H285" stroke="#5b7cff" stroke-width="2"/>
        <polygon points="285,80 277,75 277,85" fill="#5b7cff"/>

        <rect x="290" y="45" width="120" height="70" rx="12" fill="rgba(91,124,255,0.08)" stroke="#5b7cff" stroke-width="1.5"/>
        <text x="350" y="78" text-anchor="middle" fill="#5b7cff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">SonarQube</text>
        <text x="350" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Quality Gate</text>

        <path d="M410 80 H445" stroke="#9b6bff" stroke-width="2"/>
        <polygon points="445,80 437,75 437,85" fill="#9b6bff"/>

        <rect x="450" y="45" width="125" height="70" rx="12" fill="rgba(155,107,255,0.08)" stroke="#9b6bff" stroke-width="1.5"/>
        <text x="512" y="78" text-anchor="middle" fill="#9b6bff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Docker Deploy</text>
        <text x="512" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">Docker Compose</text>

        <path d="M575 80 H610" stroke="#22d3ee" stroke-width="2"/>
        <polygon points="610,80 602,75 602,85" fill="#22d3ee"/>

        <rect x="615" y="45" width="130" height="70" rx="12" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.5"/>
        <text x="680" y="78" text-anchor="middle" fill="#22d3ee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">Prometheus</text>
        <text x="680" y="96" text-anchor="middle" fill="#7d8699" font-family="'Inter', sans-serif" font-size="9">&amp; Grafana Health</text>
      </svg>
    `,
    learned: 'How to automate the path from code to deployment with continuous quality gates.',
    githubUrl: 'https://github.com/Arijhajjaji22/Devops_Arij'
  }
];
