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
  Bot,
  MessageSquare,
  Box,
  Trophy,
  Award,
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
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiStreamlit,
  SiFlask,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiKubernetes,
  SiJira,
  SiConfluence,
} from '@icons-pack/react-simple-icons';

import { SiGithub, SiLinkerd } from '@icons-pack/react-simple-icons';

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
  url: string;
  icon: IconComponent;
};

const projects: Project[] = [
  {
    category: 'Google Cloud Project — Virtusa',
    title: 'SLA Breach Alerting System',
    role: 'Associate Engineer — AI/ML',
    summary:
      'Build an enterprise-scale Agentic AI platform that proactively identifies SLA breach risks across Google Cloud cases and automatically generates intelligent risk alerts and recommendations.',
    tags: [
      'Python',
      'Google ADK',
      'Vertex AI',
      'Vertex AI Agent Engine',
      'RAG',
      'Google Cloud',
      'Gmail',
      'Google Chat',
      'LLM',
      'Agentic AI',
    ],
    details: [
      'Architected and deployed an enterprise-scale Agentic AI platform using Google ADK, Vertex AI Agent Engine, and Google Cloud to proactively identify SLA breach risks across Google Cloud cases.',
      'Implemented a knowledge-grounded RAG pipeline combining enterprise knowledge-base articles with contextual case data to generate root-cause analysis and next-best-action recommendations.',
      'Integrated Gmail and Google Chat notifications for real-time risk escalation alerts, significantly reducing manual monitoring effort and improving turnaround time.',
      'The solution reduced escalations by approximately 70–80% and improved customer satisfaction.',
    ],
    metrics: ['70–80% reduction in escalations'],
    accent: 'mint',
    icon: Cloud,
  },

  {
    category: 'Agentic AI Project — Virtusa',
    title: 'Agentic SDLC Automation Platform',
    role: 'Associate Engineer — AI/ML',
    summary:
      'Built a multi-agent SDLC automation platform that transforms natural-language user stories into production-ready microservices and automatically generates test cases.',
    tags: [
      'Python',
      'LangGraph',
      'Multi-Agent AI',
      'LLM',
      'Agentic AI',
      'Microservices',
      'Automated Test Generation',
      'SDLC Automation',
    ],
    details: [
      'Developed a multi-agent SDLC automation platform using LangGraph.',
      'Designed the workflow to convert natural-language user stories into production-ready microservices.',
      'Supported generation across multiple programming languages.',
      'Implemented automated test-case generation from requirements, improving test coverage and accelerating software delivery.',
      'Focused on automating multiple stages of the software development lifecycle using agentic workflows.',
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
    category: 'Machine Learning Project',
    title: 'BERT-Based Sentiment Analysis & AWS Deployment',
    role: 'ML Engineer',
    summary:
      'Built and deployed an end-to-end NLP sentiment analysis system comparing a TF-IDF + Linear SVM baseline with a fine-tuned BERT model and productionized the inference service on AWS SageMaker.',
    tags: [
      'Python',
      'NLP',
      'BERT',
      'Hugging Face',
      'TF-IDF',
      'Linear SVM',
      'Docker',
      'FastAPI',
      'Amazon SageMaker',
      'Amazon S3',
      'Amazon ECR',
      'AWS',
    ],
    details: [
      'Built an end-to-end NLP sentiment analysis system comparing a traditional TF-IDF + Linear SVM baseline with a fine-tuned BERT model.',
      'Fine-tuned BERT for sentiment classification and achieved approximately 95% F1-score.',
      'The TF-IDF + Linear SVM baseline achieved approximately 90% accuracy.',
      'Containerized the inference service using Docker and FastAPI.',
      'Stored model artifacts in Amazon S3.',
      'Built and pushed the Docker image to Amazon ECR.',
      'Deployed the real-time inference service as an Amazon SageMaker endpoint for low-latency sentiment prediction.',
      'Complete ML lifecycle: model development, fine-tuning, containerization, artifact storage, container registry, cloud deployment, and real-time inference.',
    ],
    metrics: ['95% BERT F1-score', '90% SVM accuracy'],
    accent: 'orange',
    icon: Rocket,
  },
];

type Achievement = {
  title: string;
  issuer: string;
  description: string;
  icon: IconComponent;
};

const achievements: Achievement[] = [
  {
    title: 'Winner — Agentic AI Engineer Hackathon',
    issuer: 'Virtusa',
    description:
      'Won the Agentic AI Engineer Hackathon by building AI-Startup Evaluation Project',
    icon: Trophy,
  },
  {
    title: 'Outstanding Performer of the Batch',
    issuer: 'Virtusa',
    description:
      'Recognized as an Outstanding Performer of the Batch for demonstrating strong technical performance and delivering impactful AI engineering solutions.',
    icon: Award,
  },
];

const certifications: Certification[] = [
  {
    title: 'Generative AI Leader Certification',
    issuer: 'Google Cloud',
    description:
      'Credential recognizing practical understanding of Generative AI capabilities and applications.',
    url: 'https://www.credly.com/badges/1392733b-aee3-4d4b-abfe-88693d4981c1/linked_in_profile',
    icon: BrainCircuit,
  },

  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'AWS',
    description:
      'Certification validating foundational knowledge of AI and machine learning on AWS.',
    url: 'https://www.credly.com/badges/b27cfdee-6e8b-41d3-a97f-3a1088b8ba7d/linked_in_profile',
    icon: Cloud,
  },

  {
    title: 'Associate Cloud Engineer Certification',
    issuer: 'Google Cloud',
    description:
      'Credential demonstrating cloud deployment and operations fundamentals.',
    url: 'https://www.credly.com/badges/a38d01b3-b672-436d-b444-5c4ecb2c1dd4/linked_in_profile',
    icon: Cloud,
  },
    {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft Azure',
    description:
      'Foundational certification for artificial intelligence concepts and Azure AI services.',
    url: 'https://learn.microsoft.com/api/credentials/share/en-in/PulletiSaiSirisha-3223/11CC541524E14836?sharingId=EAFFBE2C474AFD6C',
    icon: Cloud,
  },

  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft Azure',
    description:
      'Foundational knowledge of cloud concepts, Azure services, security, and governance.',
    url: 'https://learn.microsoft.com/api/credentials/share/en-in/PulletiSaiSirisha-3223/7378CEF86578CC72?sharingId=EAFFBE2C474AFD6C',
    icon: Cloud,
  }
];

const skillGroups = [
  {
    title: 'Gen AI & Agentic AI Frameworks',
    skills: [
      { name: 'Google ADK', icon: SiGoogle },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLanggraph },
      { name: 'CrewAI', icon: SiCrewai },

      // No reliable Simple Icon export in your installed package
      { name: 'LlamaIndex', icon: Database },
      { name: 'AutoGen', icon: Bot },
      { name: 'Multimodal RAG', icon: Eye },
      { name: 'Prompt Engineering', icon: WandSparkles },
    ],
  },

  {
    title: 'LLMs & Vector DBs',
    skills: [
      // SiOpenai is unavailable in your installed package
      { name: 'OpenAI', icon: BrainCircuit },

      { name: 'Google Gemini', icon: SiGooglegemini },
      { name: 'HuggingFace Embeddings', icon: SiHuggingface },

      { name: 'FAISS', icon: Database },

      // SiPinecone is unavailable in your installed package
      { name: 'Pinecone', icon: Database },

      { name: 'ChromaDB', icon: Database },
    ],
  },

  {
    title: 'Cloud & Deployments',
    skills: [
      { name: 'Google Cloud Platform (GCP)', icon: SiGooglecloud },

      // Use Lucide because Google Vertex AI export is unavailable
      { name: 'Vertex AI', icon: Cpu },

      { name: 'Cloud Run', icon: Cloud },

      { name: 'Model Armor & DLP', icon: ShieldCheck },

      { name: 'Gemini Enterprise', icon: SiGooglegemini },

      { name: 'AWS Bedrock', icon: Cloud },

      { name: 'AWS SageMaker', icon: Server },
    ],
  },

  {
    title: 'Programming & Databases',
    skills: [
      { name: 'Python', icon: SiPython },

      // You can keep Simple Icons here
      { name: 'C#', icon: SiTypescript },

      { name: 'MongoDB', icon: SiMongodb },

      { name: 'SQL', icon: Database },
    ],
  },

  {
    title: 'Frontend & UI Integration',
    skills: [
      { name: 'Node.js', icon: SiNextdotjs },
      { name: 'React.js', icon: SiReact },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: Server },
    ],
  },

  {
    title: 'Data Processing & ML',
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Machine Learning', icon: Brain },
      { name: 'Deep Learning', icon: SiPytorch },
      { name: 'Computer Vision', icon: Eye },
      { name: 'NLP', icon: MessageSquare },
      { name: 'Fine-Tuning', icon: Cpu },

      // If you want these in this group later:
      // { name: 'Pandas', icon: SiPandas },
      // { name: 'NumPy', icon: ... },
      // { name: 'Matplotlib', icon: ... },
      // { name: 'Seaborn', icon: ... },
    ],
  },

  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: Box },
      { name: 'CI/CD', icon: Workflow },
    ],
  },
];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <header className="site-header">
        <div className="header-inner">
          <button
            className="brand"
            onClick={() => scrollTo('home')}
            aria-label="Back to home"
          >
            <span className="brand-mark">PS</span>
            <span className="brand-text">Pulleti Sai Sirisha</span>
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
        <section id="home" className="hero section-grid">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" /> Available for AI ML opportunities
            </span>

            <p className="hero-kicker">Hello! I am</p>

            <h2 className="hero-name">Pulleti Sai Sirisha</h2>

            <p className="hero-copy">
              AI/ML Engineer focused on building and productionizing
              <strong className="ml"> Machine Learning</strong>,
              <strong className="genai"> Generative AI</strong>,
              <strong className="agentic"> Agentic AI</strong>, and
              <strong className="rag"> RAG</strong> solutions across
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
                href="/Pulleti_Sai_Sirisha_Resume_AIML.pdf"
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
            <a
              href="https://github.com/saisirisha1111/AgenticAI"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SiGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-sirisha-pulleti-08761b254"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkerd size={17} />
            </a>

            <a
              href="mailto:pulletisirisha2001@gmail.com"
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

        <section
          id="about"
          className="about section-grid section-padding"
        >
          <div className="section-heading">
            <span className="eyebrow">Who I am</span>

            <h2>
              Building useful AI,
              <br />
              <span>not just clever demos.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="portrait-card">
              <div className="portrait-backdrop" />

              <div className="portrait-image">
                <img
                  src="/profilepic.jpg"
                  alt="Pulleti Sai Sirisha"
                />
              </div>
            </div>

            <div className="about-copy">
              <p>
                Hello! I am an{' '}
                <strong>Associate Engineer in Emerging Technologies</strong>{' '}
                at <strong>Virtusa Corporation, Hyderabad</strong>, with{' '}
                <strong>3+ years of experience</strong> building
                production-ready AI solutions across
                <strong> Machine Learning, Generative AI, and Agentic AI</strong>
                . My experience spans{' '}
                <strong>
                  LLM applications, RAG pipelines, multi-agent architectures,
                  and cloud-based AI deployments
                </strong>
                , with a strong focus on turning AI capabilities into reliable
                enterprise solutions.
              </p>

              <p>
                I work across the AI engineering lifecycle—from designing
                intelligent workflows and integrating LLMs to deploying
                scalable applications on
                <strong> Google Cloud and AWS</strong>. I have built solutions
                using
                <strong>
                  {' '}
                  LangGraph, Google ADK, Vertex AI, FastAPI, Hugging Face,
                  Docker, and Amazon SageMaker
                </strong>
                , combining AI models with production engineering, automation,
                and cloud infrastructure.
              </p>

              <p>
                I also focus on building{' '}
                <strong>secure and responsible AI applications</strong>, with
                emphasis on protecting enterprise data, controlling access to
                AI workflows, and ensuring that sensitive information is
                handled appropriately throughout the AI pipeline.
              </p>

              <p>
                I am driven by solving{' '}
                <strong>complex, real-world engineering problems</strong>{' '}
                through intelligent automation. Whether building enterprise
                Agentic AI platforms, knowledge-grounded RAG systems,
                multi-agent SDLC automation, or ML applications, my focus is
                on creating{' '}
                <strong>
                  scalable, resilient, secure, and production-ready AI systems
                </strong>{' '}
                that deliver meaningful business impact.
              </p>

              <div className="details">
                <div>
                  <small>Current role</small>
                  <b>Associate Engineer</b>
                  <span>Virtusa Corporation</span>
                </div>

                <div>
                  <small>Education</small>
                  <b>B.Tech EEE</b>
                  <span>2019 — 2023</span>
                </div>

                <div>
                  <small>Based in</small>
                  <b>Hyderabad, India</b>
                  <span>pulletisirisha2001@gmail.com</span>
                </div>
              </div>

              <a
                className="text-link"
                href="mailto:pulletisirisha2001@gmail.com"
              >
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

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
              My engineering toolkit across Generative AI, machine learning,
              cloud operations, and software engineering.
            </p>
          </div>

          <div className={`skills-grid ${showAllSkills ? 'show-all' : 'collapsed'}`}>
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
              className={showAllSkills ? 'toggle-arrow rotated' : 'toggle-arrow'}
            />
          </button>
        </section>


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
              Recognition for technical excellence, innovation, and impactful
              AI engineering.
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
              Production-focused AI and machine learning systems built for
              measurable outcomes.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const isExpanded = expandedProject === project.title;

              return (
                <article
                  className={`project-card project-detail-card ${project.accent} ${isExpanded ? 'expanded' : ''
                    }`}
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

                  <p className="project-summary">{project.summary}</p>

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
                            <strong key={metric}>{metric}</strong>
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
              Professional credentials across cloud, artificial intelligence,
              and machine learning.
            </p>
          </div>

          <div
            className={`certifications-grid ${showAllCertifications ? 'show-all' : 'collapsed'
              }`}
          >
            {certifications.map(({ title, issuer, url, icon: Icon }) => (
              <article className="certification-card" key={title}>
                <div className="certification-card-top">
                  <div className="certification-icon">
                    <Icon size={21} />
                  </div>

                  <span>{issuer}</span>
                </div>

                <h3>{title}</h3>

                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Badge <ExternalLink size={14} />
                </a>

                <div className="credential-status">
                  <span>Credential status</span>

                  <strong>
                    <i /> Active
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="cards-toggle"
            onClick={() =>
              setShowAllCertifications((value) => !value)
            }
          >
            {showAllCertifications ? 'Show Less' : 'Show More'}

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
                Whether you are exploring an AI idea or scaling an existing
                platform, I would love to hear about it.
              </p>

              <div className="contact-links">
                <a href="mailto:pulletisirisha2001@gmail.com">
                  <Mail size={17} /> pulletisirisha2001@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/sai-sirisha-pulleti-08761b254"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkerd size={17} /> Connect on LinkedIn
                </a>
              </div>
            </div>

            <form onSubmit={submitContact}>
              <label>
                Name
                <input required placeholder="Your name" />
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
                {sent ? 'Message ready to send' : 'Send message'}{' '}
                <Send size={16} />
              </button>

              {sent && (
                <small className="form-success">
                  Thanks — your message is ready. Please use the email link
                  to send it.
                </small>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Pulleti Sai Sirisha</span>

        <span>
          Designed & built with intention <Zap size={14} />
        </span>

        <button onClick={() => scrollTo('home')}>
          <Download size={14} /> Back to top
        </button>
      </footer>

      <button
        className={chatOpen ? 'chat-button active' : 'chat-button'}
        onClick={() => setChatOpen((value) => !value)}
        aria-label="Open assistant"
      >
        <Sparkles size={21} />
      </button>

      {chatOpen && (
        <div className="chat-popover">
          <b>Hi, I'm your portfolio guide.</b>

          <p>
            Use the navigation to explore Sirisha's work and experience.
          </p>

          <button
            onClick={() => {
              setChatOpen(false);
              scrollTo('contact');
            }}
          >
            Start a conversation <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


