// ── TYPES ─────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skills: string[];
}



export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  type: string;
  description: string;
  slides?: string;
  video?: string | null;
}

export interface SiteData {
  personal: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: Record<string, string[]>;
  certificates: Certificate[];
  talks: Talk[];
  isobotContext: string;
}

// ── DATA ──────────────────────────────────────────────────────────────────

export const SITE_DATA: SiteData = {
  personal: {
    name: 'Israel Oliveira',
    title: 'Data Scientist & AI Engineer',
    tagline: 'Trying to understand objective reality',
    email: 'israel.z1@hotmail.com',
    github: 'https://github.com/israelwcg011',
    linkedin: 'https://www.linkedin.com/in/israel-oliveira-45a025127/',
    location: 'Brasília, DF, Brazil',
    bio: `I'm a Machine Learning Engineer based in Brasília, with 5+ years of experience evolving from data science toward ML engineering. At Centro de Gestão e Estudos Estratégicos (CGEE), I develop and deploy end-to-end data analytics applications using Python, FastAPI, and Docker, manage the Linux server infrastructure, and integrate LLMs into backend services through RAG pipelines and fine-tuned embedding models. My work combines deep learning, NLP, and time series forecasting, applying techniques like QLoRA fine-tuning, transformer internals analysis, and GloVe/TF-IDF embeddings to large-scale patent and publication data for innovation system research.

I'm also a PhD researcher in Machine Learning and the Physics of Complex Systems at the University of Brasília, where I apply maximum entropy network models and random walk dynamics to characterize the Brazilian innovation system. During my Master's, I built reservoir computing models from scratch — including the full mathematical derivation of Echo State Networks — to forecast COVID-19 time series. This mix of mathematical depth and applied engineering shapes how I work: I want to understand why a model behaves the way it does, not just get it into production.`,
  },

  experience: [
    {
      role: 'Machine Learning Engineer',
      company: 'Centro de Gestão e Estudos Estratégicos',
      period: 'Oct 2021 — Present',
      location: 'Brasília, Distrito Federal',
      description: `• Develop and deploy end-to-end data analytic applications used daily by analysts, with Python/Flask and FastAPI backends, JavaScript/HTML frontends, and Docker-based deployment pipelines with GitLab documentation for the IT department.
• Lead the company's first fine-tuning project, training a specialist embedding model on neuroscience literature using QLoRA, with a classifier on top to identify domain-specific articles from OpenAlex for statistical analysis.
• Built a RAG pipeline and a speaker diarization API for YouTube videos, integrating LLMs into internal backend services.
• Develop state-of-the-art methodologies to identify technology emergence from patent data, combining NLP techniques such as GloVe embeddings, TF-IDF, and recurrent neural networks with network and multi-layer network analysis.
• Investigate transformer internals and token embedding interactions in trained models, with ongoing research on sparse embeddings and fine-tuning performance.
• Manage Linux/Ubuntu server infrastructure, including Docker image creation, multi-user container management, and Nginx configuration.
• Analyze deep learning model performance on small datasets, applying data augmentation techniques in NLP contexts.
• Regularly present deep mathematical analyses of model architectures to the team — including end-to-end derivations of deep learning models — bridging theoretical understanding and practical research directions.`,
      tech: ['Python', 'FastAPI', 'Flask', 'JavaScript', 'HTML', 'Docker', 'NLP', 'RAG', 'GitLab', 'Linux'],
    },
    {
      role: 'Data Science Intern',
      company: 'Centro de Gestão e Estudos Estratégicos',
      period: 'Feb 2021 — Sept 2021',
      location: 'Brasília, Distrito Federal',
      description: `• Analyze the performance of machine learning and deep learning models applied on small sized data sets. Sometimes in this case I use techniques such as data augmentation in the context of Natural Language Processing.
• Research state of the art methods in the fields of technology emergence, machine learning, deep learning, and natural language processing.
• Create and maintain data analytic applications to be used inside the company. The technologies used are JavaScript and HTML for front-end, and Flask (Python) for back-end.
• Convert some web applications to desktop applications.`,
      tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'Machine Learning', 'NLP', 'Deep Learning'],
    },
  ],

  education: [
    {
      degree: 'Doctor of Philosophy - PhD',
      institution: 'University of Brasília',
      period: 'Aug 2023 — Present',
      note: `• Research focuses on applying maximum entropy graph ensemble models and random walk dynamics to characterize the Brazilian innovation system at the individual researcher level, bridging statistical mechanics and network science.
• First paper (under review): constructed an assist network connecting science, technology, and business activities from patent, publication, and company data. Applied a Maximum Entropy null model (BiCM) to filter statistically significant interactions, revealing a power-law backbone and domain-specific 3-node motif structures that characterize the Brazilian researcher profile.
• Current direction: comparing random walk diffusion on real networks against maximum entropy ensemble baselines to quantify what genuine network structure adds beyond degree effects — applied to patent classification networks from the same dataset.`,
    },
    {
      degree: 'Master of Physics',
      institution: 'University of Brasília',
      period: 'Aug 2019 — Dec 2021',
      note: `• Developed reservoir computing models from scratch to forecast COVID-19 time series for Distrito Federal, building recurrent neural networks with deep mathematical grounding in dynamical systems theory and Fourier analysis.
• Derived and implemented the full mathematical framework of Echo State Networks, from spectral radius conditions to memory capacity analysis.`,
    },
    {
      degree: 'Bachelor of Physics',
      institution: 'University of Brasília',
      period: 'Jul 2014 — Aug 2019',
      note: `• Analysis of a physical dynamical system.
• Create algorithms to create Poincaré sections, bifurcation diagrams, and recurrence plots.
• Deep understanding of the theory of dynamical systems.
• Technologies used: Matlab.`,
    },
  ],

  skills: {
    'Languages': ['Python', 'SQL', 'JavaScript', 'HTML', 'Bash', 'xQuery'],
    'Data Science': ['Statistics', 'Machine Learning', 'Data Analysis', 'EDA', 'Matplotlib', 'Seaborn', 'Tableau', 'Jupyter Notebook', 'scikit-learn'],
    'ML Engineering': ['Mathematics', 'PyTorch', 'Deep learning', 'Hugging Face', 'FastAPI', 'Fine-tuning', 'LLM', 'Model Manipulation', 'QLora'],
    'AI Engineering': ['RAG', 'FastMCP', 'MCP', 'Vector DBs', 'LLM APIs', 'Embeddings'],
    'Data Engineering': ['SQL', 'BigQuery'],
    'MLOps': ['Docker', 'GitLab', 'GitHub', 'Linux', 'Ollama', 'GPU Server Management'],
  },

  certificates: [
    // {
    //   id: 'dl-specialization',
    //   title: 'Deep Learning Specialization',
    //   issuer: 'Coursera',
    //   date: 'August 2023',
    //   credentialUrl: '#',
    //   skills: ['Neural Networks', 'PyTorch', 'Sequence Models', 'CNNs'],
    // },
    // {
    //   id: 'aws-ml-specialty',
    //   title: 'AWS Certified Machine Learning – Specialty',
    //   issuer: 'Amazon Web Services',
    //   date: 'March 2023',
    //   credentialUrl: '#',
    //   skills: ['AWS SageMaker', 'MLOps', 'Model Deployment'],
    // },
    // {
    //   id: 'datacamp-ds',
    //   title: 'Data Scientist with Python',
    //   issuer: 'DataCamp',
    //   date: 'November 2022',
    //   credentialUrl: '#',
    //   skills: ['Python', 'Pandas', 'scikit-learn', 'Statistical Modeling'],
    // }
  ],



  talks: [
    // {
    //   id: 'pycon2024',
    //   title: "RAG in Production: What the Tutorials Don't Tell You",
    //   event: 'PyCon Brazil 2024',
    //   date: 'October 2024',
    //   location: 'Manaus, Brazil',
    //   type: 'Conference Talk',
    //   description:
    //     "A practitioner's guide to the failure modes of retrieval-augmented generation at scale. Covers chunking strategies, hybrid retrieval, evaluation, and latency engineering.",
    //   slides: '#',
    //   video: '#',
    // },
    // {
    //   id: 'mlconf2023',
    //   title: 'Causal Inference for Churn: Beyond Prediction',
    //   event: 'MLConf São Paulo 2023',
    //   date: 'September 2023',
    //   location: 'São Paulo, Brazil',
    //   type: 'Conference Talk',
    //   description:
    //     'Framing churn as a treatment effect estimation problem rather than a classification problem. Case study on CATE estimation for SaaS retention campaigns.',
    //   slides: '#',
    //   video: null,
    // },
    // {
    //   id: 'pydata2023',
    //   title: "Calibration: The ML Property Nobody Talks About",
    //   event: 'PyData São Paulo 2023',
    //   date: 'April 2023',
    //   location: 'São Paulo, Brazil',
    //   type: 'Conference Talk',
    //   description:
    //     'Why calibration matters more than accuracy for real-world decision systems, and practical methods to measure and improve it.',
    //   slides: '#',
    //   video: '#',
    // },
    // {
    //   id: 'workshop2022',
    //   title: 'Hands-on: Building Semantic Search from Scratch',
    //   event: 'AI Summit Brazil 2022',
    //   date: 'November 2022',
    //   location: 'Remote',
    //   type: 'Workshop',
    //   description:
    //     '4-hour workshop covering transformer-based retrieval, FAISS indexing, and re-ranking pipelines. Attended by 120+ practitioners.',
    //   slides: '#',
    //   video: null,
    // },
  ],

  isobotContext: `You are IsoBot, an AI assistant on Israel Oliveira's professional website.

Israel Oliveira is a Data Scientist and AI Engineer based in São Paulo, Brazil, with 8+ years of experience.

PROFESSIONAL SUMMARY:
- Currently Senior AI Engineer at Luminary Systems (2022-present)
- Previously Data Scientist at DataLabs (2020-2022)
- Previously ML Engineer at Veritas Analytics (2018-2020)
- Previously Junior Data Analyst at Banco Nacional do Comércio (2016-2018)
- MSc Computer Science and BSc Statistics from USP (Universidade de São Paulo)
- Tagline: "Trying to understand objective reality"
- Skills: Python, PyTorch, TensorFlow, scikit-learn, LangChain, Apache Spark, Kubernetes, AWS, GCP, PostgreSQL, and more

PROJECTS:
1. NeuralSearch - Open-source semantic search engine using bi-encoder transformers with hybrid retrieval. Active, 2023.
2. LLM-Eval - Framework for evaluating LLMs on calibration, consistency, and groundedness. Active, 2024.
3. ChurnPredict - Causal churn prediction using CATE estimation with doubly-robust learners. 2022.
4. VisionPipeline - Industrial defect detection with 99.2% precision, edge inference on Nvidia Jetson. 2020.

BLOG ARTICLES:
1. "Understanding Attention Mechanisms from Scratch" (March 2025) - deep dive into transformer attention
2. "Building Production RAG Systems" (January 2025) - practical guide to RAG at scale
3. "Python Memory Profiling for ML Engineers" (October 2024) - debugging OOMs in training pipelines
4. "When Transformers Fail: Edge Cases in NLP" (August 2024) - failure modes of transformer models

CERTIFICATES:
1. Deep Learning Specialization (Coursera, 2023)
2. AWS Certified Machine Learning Specialty (AWS, 2023)
3. Data Scientist with Python (DataCamp, 2022)

TALKS:
1. PyCon Brazil 2024: "RAG in Production"
2. MLConf SP 2023: "Causal Inference for Churn"
3. PyData SP 2023: "Calibration: The ML Property Nobody Talks About"
4. AI Summit 2022: Hands-on workshop on semantic search

CRITICAL RULES:
1. SCOPE: You only answer questions related to Israel Oliveira, his professional background, projects, data science, or AI. If the user asks about ANYTHING else, politely decline and ask them to stay on topic.
2. FORMATTING: Structure your responses beautifully. Use short paragraphs. Use bullet points when listing items. Do NOT write one massive block of text.
3. LANGUAGE: Always reply in the exact language the user used to ask the question.
4. TONE: Respond in a helpful, technically precise, and slightly informal way.
5. PRIVACY: If asked about personal info (address, phone, private matters), politely decline.`,
};
