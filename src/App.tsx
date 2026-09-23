import { useState } from 'react';
import type { FormEvent, ComponentType } from 'react';

import {
  BrainCircuit,
  Cloud,
  Network,
  Rocket,
  Database,
  Sun,
  Moon,
  X,
  Menu,
  ArrowUpRight,
  Mail,
  Check,
  ChevronDown,
  ExternalLink,
  Send,
  Zap,
  Download,
  Sparkles,
  WandSparkles,
  Server,
  ShieldCheck,
  Cpu,
  Brain,
  Eye,
  Workflow,
  MessageSquare,
  Box,
  Trophy,
} from 'lucide-react';

import {
  SiGoogle,
  SiLangchain,
  SiLanggraph,
  SiCrewai,
  SiGooglegemini,
  SiHuggingface,
  SiGooglecloud,
  SiPython,
  SiMongodb,
  SiReact,
  SiFlask,
  SiPytorch,
  SiGit,
} from '@icons-pack/react-simple-icons';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

type IconComponent = ComponentType<{
  size?: number | string;
  className?: string;
}>;

type Project = {
  category: string;
  title: string;
  role: string;
  summary: string;
  tags: string[];
  details: string[];
  accent: string;
  icon: IconComponent;
  metrics?: string[];
};

type Certification = {
  title: string;
  issuer: string;
  description: string;
  url?: string;
  icon: IconComponent;
};

type Achievement = {
  title: string;
  issuer: string;
  description: string;
  icon: IconComponent;
};

/* =========================================================
   PROJECTS
   ========================================================= */

const projects: Project[] = [
  {
    category: 'Enterprise Agentic AI — Virtusa',
    title: 'SLA Breach Alerting System',
    role: 'Associate Engineer — AI/ML',
    summary:
      'Enterprise-scale Agentic AI platform that proactively identifies SLA breach risks across Google Cloud support cases and generates actionable risk alerts and recommendations.',
    tags: [
      'Python',
      'Google ADK',
      'Vertex AI',
      'Vertex AI Agent Engine',
      'RAG',
      'Vertex AI Vector Search',
      'Cloud DLP',
      'Gmail',
      'Google Chat',
      'LLM',
      'Agentic AI',
    ],
    details: [
      'Architected and deployed an enterprise-scale Agentic AI platform using Google ADK and Vertex AI Agent Engine to proactively flag at-risk Google Cloud support cases before SLA breach.',
      'Implemented a knowledge-grounded RAG pipeline using enterprise knowledge and contextual case information to generate actionable hard-risk and soft-risk recommendations.',
      'Integrated Vertex AI Vector Search and retrieval evaluation to improve knowledge-grounded responses and reduce average issue-resolution time.',
      'Implemented Cloud DLP, encryption/decryption tool callbacks, and Responsible AI guardrails to prevent PII exposure and block prompt-injection and jailbreak attempts.',
      'Automated real-time Gmail and Google Chat notifications to surface critical risks, escalation signals, and next-best actions to case owners.',
      'Productionized the platform using CI/CD pipelines, fault-tolerant retry mechanisms, and cloud-native deployment practices.',
    ],
    metrics: [
      '70–80% reduction in SLA breach-driven escalations',
      'Zero PII-exposure incidents',
    ],
    accent: 'mint',
    icon: Cloud,
  },

  {
    category: 'Agentic AI — Virtusa',
    title: 'Agentic AI Platform for Accounts Payable',
    role: 'Associate Engineer — AI/ML',
    summary:
      'Stateful multi-agent platform designed to automate complex invoice processing workflows including document analysis, validation, risk assessment, and payment decisions.',
    tags: [
      'Python',
      'LangGraph',
      'Multi-Agent AI',
      'LLM',
      'PyMuPDF',
      'pdfplumber',
      'Risk Scoring',
      'HITL',
      'Dynamic Routing',
      'Checkpointing',
    ],
    details: [
      'Designed stateful multi-agent workflows in LangGraph with dynamic routing, checkpointing, and conditional execution.',
      'Created specialized workflows for document analysis, invoice validation, risk assessment, and payment decisions.',
      'Built a hybrid document-extraction pipeline using PyMuPDF, pdfplumber, and LLM-based fallback parsing.',
      'Achieved approximately 95% structured-data extraction accuracy across diverse invoice formats.',
      'Implemented vendor-history-driven risk scoring to identify potential fraud and anomalies before payment routing.',
      'Architected configurable business rules and Human-in-the-Loop approval workflows for high-risk transactions.',
      'Worked with finance stakeholders to balance automation with manual review and improve auditability and compliance.',
    ],
    metrics: [
      '~40% reduction in manual processing time',
      '~95% structured-data extraction accuracy',
    ],
    accent: 'cyan',
    icon: Network,
  },

  {
    category: 'Multi-Agent Project - Hackathon',
    title: 'AI-Powered Startup Evaluation Platform',
    role: 'AI Engineer',
    summary:
      'Built an AI-powered startup evaluation platform using a multi-agent architecture to automate pitch deck analysis and generate investor-ready due diligence reports through LLM orchestration and scalable AI pipelines.',
    tags: [
      'Google ADK',
      'Multi-Agent Architecture',
      'LLM Orchestration',
      'Vertex AI',
      'RAG',
      'OCR',
      'Speech-to-Text',
      'FastAPI',
      'React.js',
      'MongoDB',
      'Google Cloud',
    ],
    details: [
      'Built an AI-powered startup evaluation platform using a multi-agent architecture, automating pitch deck analysis and generating investor-ready evaluation reports through LLM orchestration and scalable AI pipelines.',
      'Architected multi-agent workflows using Google ADK, enabling specialized agents for pitch deck ingestion, market analysis, financial modeling, team risk assessment, and startup scoring.',
      'Implemented a real-time AI voice assistant using Speech-to-Text API to interview founders after pitch deck submission and capture additional insights not covered in uploaded materials.',
      'Combined document and voice intelligence to improve the completeness of startup evaluation.',
      'Generated AI-powered startup due diligence reports in approximately 4–5 minutes.',
      'Reports provide team scores, market scores, financial scores, risk insights, and final investment recommendations.',
      'The platform significantly reduced the time required for manual startup research and accelerated investor decision-making.',
      'Built the application using FastAPI, React.js, and MongoDB for document management, AI workflow orchestration, and report generation.',
    ],
    metrics: ['4–5 minute evaluation reports'],
    accent: 'blue',
    icon: BrainCircuit,
  },

  {
    category: 'Machine Learning & AWS',
    title: 'Ticket Classification and AWS Deployment',
    role: 'ML Engineer',
    summary:
      'End-to-end NLP ticket-classification system comparing traditional machine-learning baselines with fine-tuned BERT and productionizing the inference service on AWS SageMaker.',
    tags: [
      'Python',
      'NLP',
      'BERT',
      'Hugging Face',
      'TF-IDF',
      'XGBoost',
      'Docker',
      'FastAPI',
      'Amazon SageMaker',
      'Amazon S3',
      'Amazon ECR',
      'AWS',
    ],
    details: [
      'Built an end-to-end NLP system comparing TF-IDF and traditional machine-learning baselines against a fine-tuned BERT model.',
      'Used feature engineering and XGBoost optimization for model selection.',
      'Improved ticket-classification accuracy to approximately 92%.',
      'Containerized the inference service using Docker and FastAPI.',
      'Stored model artifacts in Amazon S3 and pushed Docker images to Amazon ECR.',
      'Deployed the real-time inference service using Amazon SageMaker.',
      'Delivered a low-latency production inference endpoint.',
    ],
    metrics: ['~92% ticket-classification accuracy'],
    accent: 'orange',
    icon: Rocket,
  },
];

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

const achievements: Achievement[] = [
  {
    title: 'First Runner-Up — Agentic AI Hackathon',
    issuer: 'Virtusa',
    description:
      'Designed and shipped a full-stack AI application using FastAPI and React.js, integrating AI-powered document and voice intelligence through Vision API-based OCR and Speech-to-Text capabilities.',
    icon: Trophy,
  },
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

const certifications: Certification[] = [
  {
    title: 'Google Cloud Certified Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    description:
      'Professional certification covering machine learning solution design, development, deployment, and operationalization on Google Cloud.',
    url:'https://www.credly.com/badges/eaa53729-427c-4483-98f8-f24ceb8d5870/linked_in_profile',
    icon: BrainCircuit,
  },

  {
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    description:
      'Certification covering deployment, management, and operations of cloud solutions on Google Cloud.',
    url:'https://www.credly.com/badges/1a107573-cc72-4630-93f0-5defdd73a010/linked_in_profile',
    icon: Cloud,
  },

  {
    title: 'Google Generative AI Leader Certification',
    issuer: 'Google Cloud',
    description:
      'Certification focused on Generative AI concepts, capabilities, applications, and business use cases.',
    url:'https://www.credly.com/badges/3f75be29-9f44-4b95-80e9-2653844341b8/linked_in_profile',
    icon: Brain,
  },

  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    description:
      'Foundational certification covering Fundamental concepts and Azure services.',
    url:'https://www.credly.com/badges/3bd41d95-c099-471e-941b-f5cdb87c26c8/linked_in_profile',
    icon: Cpu,
  },

  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'AWS',
    description:
      'Certification covering foundational artificial intelligence and machine-learning concepts and AWS AI capabilities.',
    url:'https://www.credly.com/badges/8c214bc5-b48d-4202-990b-b065c52e62be/linked_in_profile',
    icon: Cloud,
  },
];

/* =========================================================
   SKILLS
   ========================================================= */

const skillGroups = [
  {
    title: 'Agentic AI Frameworks',
    skills: [
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLanggraph },
      { name: 'CrewAI', icon: SiCrewai },
      { name: 'Google ADK', icon: SiGoogle },
      { name: 'LlamaIndex', icon: Database },
      { name: 'MCP', icon: Network },
      { name: 'A2A Protocol', icon: Network },
    ],
  },

  {
    title: 'AI / ML & Generative AI',
    skills: [
      { name: 'Machine Learning', icon: Brain },
      { name: 'Deep Learning', icon: SiPytorch },
      { name: 'NLP', icon: MessageSquare },
      { name: 'Fine-Tuning', icon: Cpu },
      { name: 'Google Gemini', icon: SiGooglegemini },
      { name: 'GPT Models', icon: BrainCircuit },
      { name: 'RAG Pipelines', icon: Database },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Prompt Engineering', icon: WandSparkles },
      { name: 'LLM Evaluation', icon: Check },
    ],
  },

  {
    title: 'Vector Databases & Retrieval',
    skills: [
      { name: 'Pinecone', icon: Database },
      { name: 'FAISS', icon: Database },
      { name: 'Vertex AI Vector Search', icon: Database },
      { name: 'RAG', icon: Network },
    ],
  },

  {
    title: 'Cloud & AI Infrastructure',
    skills: [
      { name: 'Google Cloud Platform', icon: SiGooglecloud },
      { name: 'Vertex AI', icon: Cpu },
      { name: 'Gemini Enterprise', icon: SiGooglegemini },
      { name: 'Cloud Run', icon: Cloud },
      { name: 'Vertex AI Agent Engine', icon: Server },
      { name: 'Cloud DLP', icon: ShieldCheck },
      { name: 'AWS Bedrock', icon: Cloud },
      { name: 'AWS SageMaker', icon: Server },
      { name: 'Amazon S3', icon: Database },
      { name: 'Amazon ECR', icon: Box },
    ],
  },

  {
    title: 'Programming & Backend',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: Server },
      { name: 'Flask', icon: SiFlask },
      { name: 'API Integration', icon: Network },
      { name: 'Tool Integration', icon: Workflow },
      { name: 'React.js', icon: SiReact },
    ],
  },

  {
    title: 'Databases & Data',
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'BigQuery', icon: Database },
      { name: 'Spanner DB', icon: Database },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },

  {
    title: 'MLOps & DevOps',
    skills: [
      { name: 'CI/CD', icon: Workflow },
      { name: 'Model Monitoring', icon: Eye },
      { name: 'Tracing', icon: Network },
      { name: 'Fault-Tolerant Deployment', icon: ShieldCheck },
      { name: 'Docker', icon: Box },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
];

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  // const [sent, setSent] = useState(false);

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  // const submitContact = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   setSent(true);
  //   event.currentTarget.reset();
  // };
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const subject = `Portfolio Contact from ${name}`;

  const body = `Name: ${name}
  Email: ${email}

  Message:
  ${message}`;

    window.location.href =
      `mailto:kumargubbala94@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

    form.reset();
  };

  return (
    <div className={dark ? 'app dark' : 'app'}>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <div className="header-inner">
          <button
            className="brand"
            onClick={() => scrollTo('home')}
            aria-label="Back to home"
          >
            <span className="brand-mark">RK</span>
            <span className="brand-text">Gubbala Roop Kumar</span>
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {[
              'Home',
              'About',
              'Skills',
              'Projects',
              'Certifications',
              'Achievements',
              'Contact',
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-button"
              onClick={() => setDark((value) => !value)}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        {/* <section id="home" className="hero section-grid">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-content"> */}
        <section id="home" className="hero section-grid">
          <div className="hero-profile">
            <img
              src="/profilepic.jpeg"
              alt="Gubbala Roop Kumar"
            />
          </div>

          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" /> AI/ML Engineer
            </span>

            <p className="hero-kicker">Hello! I am</p>

            <h2 className="hero-name">Gubbala Roop Kumar</h2>

            <p className="hero-copy">
              AI/ML Engineer focused on building and productionizing
              <strong className="ml"> Machine Learning</strong>,
              <strong className="genai"> Generative AI</strong>,
              <strong className="agentic"> Agentic AI</strong>, and
              <strong className="rag"> RAG</strong> systems across
              <strong className="cloud"> cloud environments</strong>.
            </p>

            <div className="hero-stats">
              <div>
                <b>3+</b>
                <span>Years experience</span>
              </div>

              <div>
                <b>AI</b>
                <span>Production Systems</span>
              </div>

              <div>
                <b>GCP + AWS</b>
                <span>Cloud Platforms</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a
                href="/Roop_Kumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-button"
              >
                View Resume <ArrowUpRight size={17} />
              </a>

              <button
                className="primary-button"
                onClick={() => scrollTo('projects')}
              >
                View my work <ArrowUpRight size={17} />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo('contact')}
              >
                Let's connect <Mail size={17} />
              </button>
            </div>
          </div>

          <div className="social-rail">
            {/* Add your actual LinkedIn URL here */}
            <a
              href="https://www.linkedin.com/in/roopkumar-gubbala"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>

            {/* GitHub URL was not present in the resume */}
            <a
              href="#contact"
              aria-label="GitHub"
              onClick={() => scrollTo('contact')}
            >
              <SiGithub size={17} />
            </a>

            <a
              href="mailto:kumargubbala94@gmail.com"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <button
            className="scroll-cue"
            onClick={() => scrollTo('about')}
          >
            <span /> Scroll to explore
          </button>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="about section-grid section-padding"
        >
          <div className="section-heading">
            <span className="eyebrow">Who I am</span>

            <h2>
              Building production-ready AI,
              <br />
              <span>not just prototypes.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="portrait-card">
              <div className="portrait-backdrop" />

              <div className="portrait-image">
                <img
                  src="/roop_ai2.png"
                  alt="Gubbala Roop Kumar"
                />
              </div>
            </div>

            <div className="about-copy">
              <p>
                I am an{' '}
                <strong>AI/ML Engineer at Virtusa Consulting Services</strong>{' '}
                with hands-on experience building and shipping
                <strong> production-grade Agentic AI, RAG, and LLM applications</strong>.
                My work combines traditional Machine Learning with Generative AI
                across <strong>Google Cloud and AWS</strong>.
              </p>

              <p>
                I specialize in designing and integrating{' '}
                <strong>
                  LLM applications, RAG pipelines, vector-database retrieval,
                  multi-agent orchestration, and cloud AI services
                </strong>
                . I work primarily with Python and frameworks such as
                <strong> LangChain, LangGraph, CrewAI, and Google ADK</strong>.
              </p>

              <p>
                My experience also includes production AI engineering practices
                such as <strong>guardrails, evaluation loops, API and tool
                integrations, CI/CD, monitoring, tracing, and
                fault-tolerant deployment</strong>.
              </p>

              <p>
                I focus on taking AI systems from{' '}
                <strong>data pipeline design through secure and monitored
                production deployment</strong>, with an emphasis on reliable,
                scalable, and enterprise-ready solutions.
              </p>

              <div className="details">
                <div>
                  <small>Current role</small>
                  <b>Associate Engineer</b>
                  <span>Virtusa Consulting Services</span>
                </div>

                <div>
                  <small>Education</small>
                  <b>B.Tech — CSE</b>
                  <span>2019 — 2023</span>
                </div>

                <div>
                  <small>Based in</small>
                  <b>Hyderabad, India</b>
                  <span>kumargubbala94@gmail.com</span>
                </div>
              </div>

              <a
                className="text-link"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          id="skills"
          className="skills section-padding section-grid"
        >
          <div className="section-heading centered">
            <span className="eyebrow">Tech stack</span>

            <h2>
              Skills & <span>technologies</span>
            </h2>

            <p>
              My engineering toolkit across Agentic AI, Generative AI,
              machine learning, cloud infrastructure, and software engineering.
            </p>
          </div>

          <div
            className={`skills-grid ${
              showAllSkills ? 'show-all' : 'collapsed'
            }`}
          >
            {skillGroups.map(({ title, skills }) => (
              <article className="skill-card" key={title}>
                <h3>{title}</h3>

                <ul>
                  {skills.map(({ name, icon: SkillIcon }) => (
                    <li key={name}>
                      <SkillIcon size={16} />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="cards-toggle"
            onClick={() => setShowAllSkills((value) => !value)}
          >
            {showAllSkills ? 'Show Less' : 'Show More'}

            <ChevronDown
              size={17}
              className={
                showAllSkills
                  ? 'toggle-arrow rotated'
                  : 'toggle-arrow'
              }
            />
          </button>
        </section>

        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}

        <section
          id="achievements"
          className="achievements section-padding section-grid"
        >
          <div className="section-heading centered">
            <span className="eyebrow">Recognition</span>

            <h2>
              Honors & <span>achievements.</span>
            </h2>

            <p>
              Recognition for technical innovation and AI engineering.
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map(
              ({ title, issuer, description, icon: Icon }) => (
                <article className="achievement-card" key={title}>
                  <div className="achievement-icon">
                    <Icon size={25} />
                  </div>

                  <div className="achievement-content">
                    <h3>{title}</h3>

                    <span className="achievement-issuer">
                      {issuer}
                    </span>

                    <p>{description}</p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          id="projects"
          className="projects section-padding section-grid"
        >
          <div className="section-heading centered">
            <span className="eyebrow">Selected work</span>

            <h2>
              Projects that make an <span>impact.</span>
            </h2>

            <p>
              Production-focused AI and machine learning systems built
              for real-world business problems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const isExpanded = expandedProject === project.title;

              return (
                <article
                  className={`project-card project-detail-card ${
                    project.accent
                  } ${isExpanded ? 'expanded' : ''}`}
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <div className="project-icon">
                      <project.icon size={22} />
                    </div>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-role">
                    <strong>Role:</strong> {project.role}
                  </p>

                  <p className="project-summary">
                    {project.summary}
                  </p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-details">
                    <div className="project-details-inner">
                      {project.metrics && (
                        <div className="project-metrics">
                          {project.metrics.map((metric) => (
                            <strong key={metric}>
                              {metric}
                            </strong>
                          ))}
                        </div>
                      )}

                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>
                            <Check size={15} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="details-toggle"
                    onClick={() =>
                      setExpandedProject(
                        isExpanded ? null : project.title
                      )
                    }
                  >
                    {isExpanded
                      ? 'Hide Details'
                      : 'View Details & Impact'}

                    <ChevronDown
                      size={17}
                      className={isExpanded ? 'rotated' : ''}
                    />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <section
          id="certifications"
          className="credentials section-padding section-grid"
        >
          <div className="section-heading centered">
            <span className="eyebrow">Credentials</span>

            <h2>
              Certifications that <span>back my work.</span>
            </h2>

            <p>
              Professional credentials across cloud, artificial
              intelligence, and machine learning.
            </p>
          </div>

          <div
            className={`certifications-grid ${
              showAllCertifications ? 'show-all' : 'collapsed'
            }`}
          >
            {certifications.map(
              ({ title, issuer, url, icon: Icon }) => (
                <article
                  className="certification-card"
                  key={title}
                >
                  <div className="certification-card-top">
                    <div className="certification-icon">
                      <Icon size={21} />
                    </div>

                    <span>{issuer}</span>
                  </div>

                  <h3>{title}</h3>

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify Badge <ExternalLink size={14} />
                    </a>
                  )}

                  <div className="credential-status">
                    <span>Credential</span>

                    <strong>
                      <i /> Certified
                    </strong>
                  </div>
                </article>
              )
            )}
          </div>

          <button
            type="button"
            className="cards-toggle"
            onClick={() =>
              setShowAllCertifications(
                (value) => !value
              )
            }
          >
            {showAllCertifications
              ? 'Show Less'
              : 'Show More'}

            <ChevronDown
              size={17}
              className={
                showAllCertifications
                  ? 'toggle-arrow rotated'
                  : 'toggle-arrow'
              }
            />
          </button>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact section-padding section-grid"
        >
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">
                Have a project in mind?
              </span>

              <h2>
                Let's build something <span>remarkable.</span>
              </h2>

              <p>
                Whether you are exploring an AI idea or scaling
                an existing platform, I would love to hear about it.
              </p>

              <div className="contact-links">
                <a href="mailto:kumargubbala94@gmail.com">
                  <Mail size={17} />
                  kumargubbala94@gmail.com
                </a>

                {/* Add your actual LinkedIn URL when available */}
                <a
                  href="https://www.linkedin.com/in/roopkumar-gubbala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={17} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* <form onSubmit={submitContact}>
              <label>
                Name
                <input
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  placeholder="Tell me a little about your project..."
                  rows={4}
                />
              </label>

              <button
                className="primary-button"
                type="submit"
              >
                {sent
                  ? 'Message ready to send'
                  : 'Send message'}{' '}
                <Send size={16} />
              </button>

              {sent && (
                <small className="form-success">
                  Thanks — your message is ready. Please use
                  the email link to send it.
                </small>
              )}
            </form> */}
            <form onSubmit={submitContact}>
              <label>
                Name
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  name="message"
                  placeholder="Share the role, opportunity, or message you'd like to discuss..."
                  rows={4}
                />
              </label>

              <button
                className="primary-button"
                type="submit"
              >
                Send message <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <span>© 2026 Gubbala Roop Kumar</span>

        <span>
          Designed & built with intention <Zap size={14} />
        </span>

        <button onClick={() => scrollTo('home')}>
          <Download size={14} /> Back to top
        </button>
      </footer>

      {/* =====================================================
          PORTFOLIO ASSISTANT
      ===================================================== */}

      <button
        className={
          chatOpen
            ? 'chat-button active'
            : 'chat-button'
        }
        onClick={() =>
          setChatOpen((value) => !value)
        }
        aria-label="Open assistant"
      >
        <Sparkles size={21} />
      </button>

      {chatOpen && (
        <div className="chat-popover">
          <b>Hi, I'm your portfolio guide.</b>

          <p>
            Explore Roop Kumar's AI/ML projects,
            technical skills, certifications, and
            professional experience.
          </p>

          <button
            onClick={() => {
              setChatOpen(false);
              scrollTo('projects');
            }}
          >
            Explore my work <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;