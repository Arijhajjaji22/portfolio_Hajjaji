import { ProjectCaseStudy, ExperienceItem, SkillCategory, EducationItem, CertificationItem } from '../models/portfolio.models';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'schemashift',
    number: '01',
    title: 'SchemaShift',
    subtitle: 'A smart tool to compare and migrate database schemas',
    tagline: 'Compares database tables and columns using Machine Learning and suggests SQL scripts with AI.',
    category: 'AI & Systems',
    year: '2026',
    status: 'In Progress',
    featured: true,
    bentoSpan: 'col-span-2',
    summary: 'A web tool that compares different database engines like SQL Server and PostgreSQL to make migration simpler.',
    problem: 'Moving a database to another system often causes errors with column types and foreign keys. Developers have to compare tables by hand, which takes a lot of time.',
    approach: 'I built a backend with .NET 8 and Python to read database schemas. I used simple machine learning models to match table and column names that have changed. Then, I added an AI model to explain differences and create SQL migration scripts.',
    keyFeatures: [
      'Reads table and column definitions from SQL Server and PostgreSQL',
      'Matches similar column names using word embeddings',
      'Uses AI to explain differences between two schemas',
      'Generates SQL scripts to help update the target database',
      'Provides a clean Angular interface to review changes before running them'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="70" width="160" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="100" y="105" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="12" font-weight="600">Source DB (SQL Server)</text>
        <text x="100" y="125" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Tables &amp; Types</text>
        
        <path d="M180 115 H250" stroke="var(--accent-signal)" stroke-width="2" stroke-dasharray="4 4"/>
        <polygon points="250,115 242,110 242,120" fill="var(--accent-signal)"/>

        <rect x="260" y="50" width="220" height="130" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="370" y="85" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="13" font-weight="700">SchemaShift Engine</text>
        <text x="370" y="110" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">.NET 8 API + Python Service</text>
        <text x="370" y="130" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Column Matching &amp; SQL Generation</text>
        <text x="370" y="150" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Angular Frontend View</text>

        <path d="M480 115 H560" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="560,115 552,110 552,120" fill="var(--accent-signal)"/>

        <rect x="570" y="70" width="170" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="655" y="105" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="12" font-weight="600">Target DB (PostgreSQL)</text>
        <text x="655" y="125" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Generated SQL Migration</text>
      </svg>
    `,
    stack: ['.NET 8', 'C#', 'Angular', 'Python', 'FastAPI', 'Scikit-learn', 'LLM', 'SQL Server', 'PostgreSQL', 'Docker'],
    learned: 'I learned how to read metadata from different databases and how to combine simple machine learning with language models to write safer SQL scripts.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'ai-software-factory',
    number: '02',
    title: 'AI Software Factory',
    subtitle: 'An AI tool that turns a project idea into a full-stack app',
    tagline: 'Uses several AI agents to generate user stories, database models, backend APIs, and frontend pages with human review.',
    category: 'AI & Agents',
    year: '2026',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A helper tool where AI agents create the starting files of a full-stack app step by step.',
    problem: 'Starting a new app takes a lot of repetitive work: user stories, database design, API, frontend, and CI/CD. This takes days before the real work begins.',
    approach: 'I built a system with several AI agents using Semantic Kernel and Azure OpenAI. Each agent has one job: planning stories, designing the database, writing .NET controllers, or creating Angular components. The user must approve each step before the next one starts.',
    keyFeatures: [
      'AI agents that simulate a full development cycle step by step',
      'Generates user stories with clear acceptance criteria',
      'Designs database tables and backend REST endpoints in .NET 8',
      'Creates Angular components with clean signals and templates',
      'Human check at every step to review and edit the generated code',
      'Sets up a Dockerfile and basic GitHub Actions workflow'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="30" y="80" width="140" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="100" y="112" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">User Idea</text>
        <text x="100" y="130" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Text Description</text>

        <path d="M170 115 H220" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="220" y="45" width="340" height="140" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="390" y="75" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">Semantic Kernel Coordinator</text>
        <text x="390" y="100" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Agent 1: Stories · Agent 2: Database</text>
        <text x="390" y="122" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Agent 3: .NET API · Agent 4: Angular 19</text>
        <text x="390" y="150" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">User Review &amp; Approval at each step</text>

        <path d="M560 115 H620" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="620" y="80" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="695" y="112" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">Generated Project</text>
        <text x="695" y="130" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">.NET + Angular + Docker</text>
      </svg>
    `,
    stack: ['.NET 8', 'Angular 19', 'C#', 'Azure OpenAI', 'Semantic Kernel', 'Azure', 'SQL Server', 'Docker', 'GitHub Actions'],
    learned: 'I learned how to coordinate several AI agents, how to check AI answers with a JSON format, and how to keep a human in control.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'aura-ai-assistant',
    number: '03',
    title: 'Aura',
    subtitle: 'An AI assistant that searches documents and websites',
    tagline: 'Microservices app that answers questions using uploaded PDFs, image analysis, and real-time web searches.',
    category: 'AI & Microservices',
    year: '2026',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A full-stack AI assistant built with Spring Boot 3, Angular 19, and Spring AI for document search.',
    problem: 'Finding accurate answers inside company PDF files takes time. Standard chat tools do not know your private documents and cannot verify external web information.',
    approach: 'I built this app with Spring Boot 3 microservices and an Angular 19 frontend. I added a RAG pipeline that reads PDF files and stores their text in PostgreSQL. I also used Redis for fast caching and secured user logins with RSA JWT tokens.',
    keyFeatures: [
      'Microservices setup using Spring Cloud Gateway and Netflix Eureka',
      'PDF search that finds relevant answers from uploaded files',
      'Image analysis and live web scraping to find fresh information',
      'User authentication with RSA JWT tokens and Spring Security',
      'Redis cache to speed up repeated questions',
      'Clean Angular 19 chat interface with markdown formatting'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 820 250" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="85" width="130" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="85" y="118" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="12" font-weight="600">Angular 19</text>
        <text x="85" y="138" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Chat Interface</text>
        
        <path d="M150 125 H200" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="200,125 192,120 192,130" fill="var(--accent-signal)"/>

        <rect x="200" y="85" width="120" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="260" y="118" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Nginx &amp; Gateway</text>
        <text x="260" y="138" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Routing &amp; Security</text>

        <path d="M320 125 H370" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="370,125 362,120 362,130" fill="var(--accent-signal)"/>

        <rect x="370" y="45" width="260" height="160" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="500" y="78" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="13" font-weight="700">Aura AI Service</text>
        <text x="500" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Spring Boot 3 + Spring AI</text>
        <text x="500" y="125" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">PDF RAG &amp; Web Scraping</text>
        <text x="500" y="150" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Redis Cache &amp; JWT RSA</text>
        <text x="500" y="170" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Eureka Service Discovery</text>

        <path d="M630 125 H680" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="680,125 672,120 672,130" fill="var(--accent-signal)"/>

        <rect x="680" y="85" width="120" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="740" y="118" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">PostgreSQL</text>
        <text x="740" y="138" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Document Vectors</text>
      </svg>
    `,
    stack: ['Spring Boot 3', 'Spring AI', 'Spring Security', 'Spring Cloud Gateway', 'Netflix Eureka', 'Angular 19', 'PostgreSQL', 'Redis', 'Nginx', 'Docker', 'GitHub Actions'],
    learned: 'I learned how to set up Spring Cloud microservices, how to build a RAG pipeline for PDFs, and how to cache responses with Redis.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'taskflow-kanban',
    number: '04',
    title: 'TaskFlow',
    subtitle: 'A real-time collaborative Kanban board for teams',
    tagline: 'Task board with live WebSocket updates, Kafka event messages, Keycloak login, and n8n automations.',
    category: 'Full-Stack & Event-Driven',
    year: '2026',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A drag-and-drop task board where team members see updates instantly without refreshing the page.',
    problem: 'When several team members work on the same board, updates are often delayed. Users must refresh their page to see when someone moves a card.',
    approach: 'I used Spring Boot 3 on the backend and Angular 19 on the frontend. I set up WebSockets with STOMP to send live card updates to all connected users. I added Apache Kafka to handle board events and used Keycloak for user login.',
    keyFeatures: [
      'Interactive drag-and-drop Kanban board built in Angular 19',
      'Live updates with WebSockets so card moves show right away',
      'Event messages sent through Apache Kafka topics',
      'GraphQL API to fetch only the task data needed by the page',
      'User login and roles managed with Keycloak and OAuth2',
      'Unit and integration tests written with JUnit 5 and Vitest'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 800 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="30" y="75" width="150" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="105" y="108" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Angular 19 Kanban</text>
        <text x="105" y="128" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Drag &amp; Drop Board</text>

        <path d="M180 115 H240" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="240" y="45" width="310" height="145" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="395" y="75" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">Spring Boot 3 Backend</text>
        <text x="395" y="100" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">GraphQL API + WebSocket STOMP</text>
        <text x="395" y="122" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Keycloak OAuth2 Security</text>
        <text x="395" y="148" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Tests with JUnit 5 &amp; Vitest</text>

        <path d="M550 95 H630" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <path d="M550 145 H630" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="630" y="60" width="140" height="55" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="700" y="87" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">Apache Kafka</text>
        <text x="700" y="103" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Event Messages</text>

        <rect x="630" y="130" width="140" height="55" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="700" y="157" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">n8n Workflows</text>
        <text x="700" y="173" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Notifications</text>
      </svg>
    `,
    stack: ['Spring Boot 3', 'GraphQL', 'WebSocket', 'n8n', 'Kafka', 'Keycloak', 'Angular 19', 'PostgreSQL', 'Docker', 'JUnit 5', 'Vitest'],
    learned: 'I learned how to set up real-time messages with WebSockets, how to publish events to Kafka, and how to write tests with JUnit and Vitest.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'ai-code-assistant-pro',
    number: '05',
    title: 'AI Code Assistant Pro',
    subtitle: 'A VS Code extension that finds bugs and security risks',
    tagline: 'Uses Tree-sitter for code parsing, Snyk for security checks, and Google Gemini API for suggested fixes.',
    category: 'Developer Tools & AI',
    year: '2026',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A VS Code extension that scans code as you write and shows suggested fixes in a side panel.',
    problem: 'Finding security bugs and bad code practices usually happens too late during code review. Developers want simple suggestions directly inside their code editor.',
    approach: 'I built an extension for VS Code using Node.js. I used Tree-sitter to parse the code into a syntax tree. Then, I used the Snyk API to check for common OWASP security issues and used Google Gemini to show code fixes in an interactive side view.',
    keyFeatures: [
      'Parses code files using Tree-sitter syntax trees',
      'Checks for common OWASP security vulnerabilities using Snyk',
      'Suggests fixes and code improvements with Google Gemini API',
      'Displays a side-by-side code diff inside a VS Code webview panel',
      'Applies suggested changes to your file with one click'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="40" y="70" width="150" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="115" y="105" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">Open File in Editor</text>
        <text x="115" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">C#, TS, Java, Python</text>

        <path d="M190 105 H260" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="260" y="50" width="260" height="110" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="390" y="80" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">Extension Engine</text>
        <text x="390" y="105" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Tree-sitter Parser + Snyk Check</text>
        <text x="390" y="125" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="10">Google Gemini API Fixes</text>

        <path d="M520 105 H590" stroke="var(--accent-signal)" stroke-width="1.5"/>

        <rect x="590" y="70" width="170" height="70" rx="6" fill="var(--bg-surface)" stroke="var(--border-strong)"/>
        <text x="675" y="105" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11">VS Code Webview</text>
        <text x="675" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">One-Click Fix Button</text>
      </svg>
    `,
    stack: ['Node.js', 'VS Code Extension API', 'Google Gemini API', 'Tree-sitter AST', 'Snyk API', 'OWASP Top 10', 'WebView HTML/CSS/JS'],
    learned: 'I learned how to build a VS Code extension, how to parse code syntax with Tree-sitter, and how to format prompts for clear AI answers.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  },
  {
    id: 'school-management-system',
    number: '06',
    title: 'School Management System',
    subtitle: 'A web app to manage school operations and staff',
    tagline: 'Provides role-based dashboards for students, teachers, administrators, and directors.',
    category: 'Full-Stack',
    year: '2025',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A web app built with .NET 8 and Razor to manage daily school activities and records.',
    problem: 'Schools often track students and teachers using manual sheets or separate files. This creates errors and makes sharing data between staff difficult.',
    approach: 'I built a web application using .NET 8 and C# with Razor pages. I set up role-based access for students, teachers, admins, and directors. I stored all records in SQL Server and containerized the app with Docker.',
    keyFeatures: [
      'Student profiles with registration and attendance tracking',
      'Teacher dashboard to view classes and assignments',
      'Admin and Director overview for school reports and users',
      'Role-based access control with secure login permissions',
      'SQL Server database schema for student and employee records',
      'Docker container setup for consistent deployment'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 800 210" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="30" y="70" width="160" height="75" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="110" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Razor Frontend</text>
        <text x="110" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">HTML5 · CSS3 · JavaScript</text>

        <path d="M190 107 H260" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="260,107 252,102 252,112" fill="var(--accent-signal)"/>

        <rect x="260" y="45" width="280" height="125" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="400" y="75" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">.NET 8 Backend Engine</text>
        <text x="400" y="100" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">C# Controllers &amp; Business Services</text>
        <text x="400" y="122" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Role-Based Access Control</text>
        <text x="400" y="145" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Docker &amp; Jenkins Pipeline</text>

        <path d="M540 107 H610" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="610,107 602,102 602,112" fill="var(--accent-signal)"/>

        <rect x="610" y="70" width="160" height="75" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="690" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">SQL Server / MySQL</text>
        <text x="690" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Relational School Data</text>
      </svg>
    `,
    stack: ['.NET 8', 'C#', 'Razor', 'HTML5', 'CSS3', 'JavaScript', 'SQL Server', 'MySQL', 'Docker', 'Jenkins', 'Git'],
    learned: 'I learned how to set up role-based permissions in ASP.NET Core and how to structure database tables for school workflows.',
    githubUrl: 'https://github.com/Arijhajjaji22/SchoolManagementSystem.git'
  },
  {
    id: 'trustcrm',
    number: '07',
    title: 'TrustCRM',
    subtitle: 'A CRM that secures commercial contracts using Ethereum Smart Contracts',
    tagline: 'Protects client payments with an on-chain escrow system on Ethereum Sepolia.',
    category: 'Blockchain & Web3',
    year: '2026',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A CRM web app that connects React with Ethereum Smart Contracts to handle safe escrow payments.',
    problem: 'Business contracts can suffer from changed terms, payment disputes, and expensive bank middle-men. Companies and clients need a clear way to lock and release payments.',
    approach: 'I wrote a Solidity smart contract for contract escrow on Ethereum Sepolia. I built a Node.js REST API to handle user accounts and CRM data in MongoDB. Then, I connected a React frontend with MetaMask to let users approve payments with one click.',
    keyFeatures: [
      'Smart contract escrow that locks funds until milestones are approved',
      'Direct wallet connection and payment signing with MetaMask',
      'Customer management with a Kanban sales pipeline',
      'Real-time chat and notifications between company and client',
      'Public transaction verification via Etherscan on Sepolia',
      'JWT authentication with Node.js and Express'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 820 220" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="70" width="160" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="100" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">React 18 &amp; Vite</text>
        <text x="100" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">MetaMask + Ethers.js</text>

        <path d="M180 110 H240" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="240,110 232,105 232,115" fill="var(--accent-signal)"/>

        <rect x="240" y="45" width="260" height="130" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="370" y="75" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">Node.js &amp; Express API</text>
        <text x="370" y="100" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">CRM Pipeline &amp; Chat</text>
        <text x="370" y="122" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">JWT Auth &amp; Controllers</text>
        <text x="370" y="145" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">MongoDB &amp; Mongoose</text>

        <path d="M500 110 H570" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="570,110 562,105 562,115" fill="var(--accent-signal)"/>

        <rect x="570" y="70" width="220" height="80" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="680" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Ethereum Sepolia</text>
        <text x="680" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Solidity Smart Contract Escrow</text>
      </svg>
    `,
    stack: ['Solidity 0.8.28', 'Hardhat', 'Ethers.js', 'React 18', 'Tailwind CSS', 'Vite', 'Node.js', 'Express.js', 'JWT', 'MongoDB', 'Mongoose', 'MetaMask', 'Ethereum Sepolia'],
    learned: 'I learned how to test Solidity smart contracts with Hardhat and connect MetaMask using Ethers.js.',
    githubUrl: 'https://github.com/Arijhajjaji22/trustcrm.git',
    liveDemoUrl: 'https://sepolia.etherscan.io/address/0x3e16CF721c141BC49065A496eBA83A928e37C9b8'
  },
  {
    id: 'cicd-automated-deployment',
    number: '08',
    title: 'CI/CD Automated Deployment',
    subtitle: 'An automated pipeline for testing and deploying containerized apps',
    tagline: 'Automates code testing, quality checks with SonarQube, and Docker deployments.',
    category: 'DevOps & Cloud',
    year: '2025',
    status: 'Personal Project',
    featured: true,
    bentoSpan: 'col-span-1',
    summary: 'A complete Jenkins pipeline that tests code, scans quality with SonarQube, and deploys containers.',
    problem: 'Testing and deploying apps by hand takes time and often leads to missing bugs. Teams need an automated process to check code quality before releasing updates.',
    approach: 'I set up an automated Jenkins pipeline that triggers on Git code pushes. I added SonarQube to check code quality and rules. Then, I used Docker and Docker Compose to package and run the application services.',
    keyFeatures: [
      'Automated Jenkins build triggered on git push',
      'Code quality analysis and vulnerability scanning with SonarQube',
      'Artifact storage management using Sonatype Nexus',
      'Containerized deployment with Docker and Docker Compose',
      'Application health and metrics monitoring with Prometheus and Grafana'
    ],
    architectureDiagramSvg: `
      <svg viewBox="0 0 820 220" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="70" width="130" height="75" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="85" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Git Push</text>
        <text x="85" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Code Repository</text>

        <path d="M150 107 H200" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="200,107 192,102 192,112" fill="var(--accent-signal)"/>

        <rect x="200" y="45" width="240" height="125" rx="8" fill="var(--bg-surface)" stroke="var(--accent-signal)" stroke-width="1.5"/>
        <text x="320" y="75" text-anchor="middle" fill="var(--accent-signal)" font-family="var(--font-mono)" font-size="12" font-weight="700">Jenkins CI Pipeline</text>
        <text x="320" y="100" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">Automated Build &amp; Tests</text>
        <text x="320" y="122" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-body)" font-size="11">SonarQube &amp; Nexus Artifacts</text>
        <text x="320" y="145" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Quality Gate Verification</text>

        <path d="M440 107 H490" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="490,107 482,102 482,112" fill="var(--accent-signal)"/>

        <rect x="490" y="55" width="150" height="105" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="565" y="90" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Docker Deploy</text>
        <text x="565" y="110" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Docker Compose</text>
        <text x="565" y="130" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Container Services</text>

        <path d="M640 107 H680" stroke="var(--accent-signal)" stroke-width="2"/>
        <polygon points="680,107 672,102 672,112" fill="var(--accent-signal)"/>

        <rect x="680" y="70" width="130" height="75" rx="8" fill="var(--bg-surface)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="745" y="103" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="11" font-weight="600">Monitoring</text>
        <text x="745" y="123" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="9">Prometheus &amp; Grafana</text>
      </svg>
    `,
    stack: ['Jenkins', 'SonarQube', 'Nexus', 'Prometheus', 'Grafana', 'Docker', 'Docker Compose', 'Git'],
    learned: 'I learned how to configure automated Jenkins stages and how to monitor container health using Prometheus and Grafana.',
    githubUrl: 'https://github.com/Arijhajjaji22'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'hosinox',
    role: 'Full Stack Engineer (.NET & Angular)',
    company: 'Hosinox Company',
    period: 'Jan 2026 – Jun 2026',
    location: 'Tunis, Tunisia',
    focus: 'Enterprise ERP Architecture & High-Performance Web Services',
    description: [
      'Spearheaded the development and architectural evolution of an enterprise internal ERP dedicated to operational management and logistics tracking.',
      'Designed and delivered modular RESTful backend services using .NET 8, C#, and Entity Framework Core with strict Clean Architecture separation of concerns.',
      'Constructed dynamic, highly-responsive frontend workflows using Angular 16, optimizing state propagation and caching with Redis and SignalR live feeds.',
      'Implemented automated CI/CD pipelines via GitHub Actions and Docker containerization targeting Microsoft Azure environments, backed by comprehensive unit and integration tests.'
    ],
    technologies: ['.NET 8', 'C#', 'Angular 16', 'EF Core', 'SQL Server', 'SignalR', 'Redis', 'Docker', 'Git', 'GitHub Actions', 'Microsoft Azure']
  },
  {
    id: 'innov-alliance',
    role: 'Final-Year Intern (.NET Developer)',
    company: 'Innov-Alliance-Tech',
    period: 'Feb 2024 – Sep 2024',
    location: 'Tunis, Tunisia',
    focus: 'Real-Time Recruitment Platform & DevOps Environment',
    description: [
      'Conceived and engineered an end-to-end web recruitment platform orchestrating candidate pipelines and interactive selection workflows.',
      'Implemented real-time status notifications and candidate progression utilizing Blazor Server, C#, and SignalR hubs.',
      'Integrated ASP.NET Identity with fine-grained role-based security and token policies.',
      'Established the organization DevOps and monitoring baseline, configuring Jenkins CI pipelines, Docker containerized deployments, xUnit testing suites, and Grafana / Prometheus health metrics.'
    ],
    technologies: ['.NET 8', 'Blazor Server', 'C#', 'EF Core', 'ASP.NET Identity', 'SignalR', 'MySQL', 'xUnit', 'Jenkins', 'Docker', 'Nexus', 'Grafana', 'Prometheus', 'IIS']
  }
];

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    name: 'Frameworks & Technologies',
    skills: [
      { name: '.NET (ASP.NET Core)', projectIds: ['schemashift', 'ai-software-factory', 'school-management-system'] },
      { name: 'Spring Boot', projectIds: ['aura-ai-assistant', 'taskflow-kanban'] },
      { name: 'Spring AI', projectIds: ['aura-ai-assistant'] },
      { name: 'Angular', projectIds: ['schemashift', 'ai-software-factory', 'aura-ai-assistant', 'taskflow-kanban'] },
      { name: 'Blazor', projectIds: [] },
      { name: 'React', projectIds: ['trustcrm'] },
      { name: 'Node.js', projectIds: ['ai-code-assistant-pro', 'trustcrm'] }
    ]
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'C#', projectIds: ['schemashift', 'ai-software-factory', 'school-management-system'] },
      { name: 'Java', projectIds: ['aura-ai-assistant', 'taskflow-kanban'] },
      { name: 'TypeScript', projectIds: ['schemashift', 'ai-software-factory', 'aura-ai-assistant', 'taskflow-kanban', 'ai-code-assistant-pro'] },
      { name: 'JavaScript', projectIds: ['ai-code-assistant-pro', 'school-management-system', 'trustcrm'] },
      { name: 'Python', projectIds: ['schemashift'] }
    ]
  },
  {
    name: 'Databases & Storage',
    skills: [
      { name: 'SQL Server', projectIds: ['schemashift', 'ai-software-factory', 'school-management-system'] },
      { name: 'PostgreSQL', projectIds: ['schemashift', 'aura-ai-assistant', 'taskflow-kanban'] },
      { name: 'MySQL', projectIds: ['school-management-system'] },
      { name: 'MongoDB', projectIds: ['trustcrm'] }
    ]
  },
  {
    name: 'DevOps, CI/CD & Cloud',
    skills: [
      { name: 'Docker', projectIds: ['schemashift', 'ai-software-factory', 'aura-ai-assistant', 'taskflow-kanban', 'school-management-system', 'cicd-automated-deployment'] },
      { name: 'Docker Compose', projectIds: ['aura-ai-assistant', 'taskflow-kanban', 'cicd-automated-deployment'] },
      { name: 'GitHub Actions', projectIds: ['ai-software-factory', 'aura-ai-assistant'] },
      { name: 'Jenkins', projectIds: ['school-management-system', 'cicd-automated-deployment'] },
      { name: 'Azure', projectIds: ['ai-software-factory'] },
      { name: 'SonarQube', projectIds: ['ai-code-assistant-pro', 'cicd-automated-deployment'] }
    ]
  },
  {
    name: 'Testing & Quality',
    skills: [
      { name: 'xUnit', projectIds: ['schemashift'] },
      { name: 'NUnit', projectIds: [] },
      { name: 'JUnit', projectIds: ['taskflow-kanban'] },
      { name: 'Mockito', projectIds: ['aura-ai-assistant'] },
      { name: 'Vitest', projectIds: ['taskflow-kanban'] }
    ]
  },
  {
    name: 'Tools & Collaboration',
    skills: [
      { name: 'Git', projectIds: ['schemashift', 'ai-software-factory', 'aura-ai-assistant', 'taskflow-kanban', 'school-management-system', 'trustcrm', 'cicd-automated-deployment'] },
      { name: 'GitHub', projectIds: ['schemashift', 'ai-software-factory', 'aura-ai-assistant', 'taskflow-kanban', 'ai-code-assistant-pro', 'school-management-system', 'trustcrm', 'cicd-automated-deployment'] },
      { name: 'Swagger', projectIds: ['schemashift', 'aura-ai-assistant'] },
      { name: 'Postman', projectIds: ['aura-ai-assistant', 'taskflow-kanban'] },
      { name: 'APIDog', projectIds: [] },
      { name: 'Jira', projectIds: [] }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master's Degree by Research in Signals, Systems & Data (SSD)",
    institution: "École Nationale d'Ingénieurs de Tunis (ENIT)",
    location: "Tunis, Tunisia",
    period: "2026 – Present",
    note: "Advanced research specialization focusing on data systems, signal processing, and intelligent computational models."
  },
  {
    degree: "Engineering Degree in Computer Science (Cycle Ingénieur)",
    institution: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
    location: "Tunis, Tunisia",
    period: "2021 – 2024",
    note: "Full-stack software engineering specialization, cloud architecture, and modern distributed systems."
  },
  {
    degree: "Preparatory Cycle MPSI (Maths, Physics & Engineering Sciences)",
    institution: "Université Libre de Tunis (ULT)",
    location: "Tunis, Tunisia",
    period: "2020",
    note: "Intensive mathematical foundations and analytical problem solving."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Full-Stack Spring & Angular Certification",
    issuer: "CrocoCoder",
    year: "2024"
  },
  {
    title: "DevOps Engineer Professional Training",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "AI Applications for Predictive Maintenance",
    issuer: "ESPRIT",
    year: "2024"
  },
  {
    title: "AI Applications for Anomaly Detection",
    issuer: "ESPRIT",
    year: "2024"
  }
];
