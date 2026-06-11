// Site data for Israel Oliveira's professional website
window.SITE_DATA = {
  personal: {
    name: "Israel Oliveira",
    title: "Data Scientist & AI Engineer",
    tagline: "Trying to understand objective reality.",
    email: "israel.oliveira@example.com",
    github: "github.com/israeloliveira",
    linkedin: "linkedin.com/in/israeloliveira",
    location: "São Paulo, Brazil",
    bio: `I'm a data scientist and AI engineer with 8+ years of experience turning messy data into decisions that matter. My work lives at the intersection of rigorous statistics and modern deep learning — I care less about hype and more about whether something actually works in production.

Before going deep into ML, I studied statistics, which gave me an unhealthy skepticism toward models that look good on paper but fall apart in the wild. I spend most of my time building systems that are robust, interpretable, and honest about what they don't know.

When I'm not training models, I'm usually reading philosophy of science or arguing about epistemology. The tagline isn't a joke.`,
  },

  experience: [
    {
      role: "Senior AI Engineer",
      company: "Luminary Systems",
      period: "2022 — Present",
      location: "São Paulo, Brazil",
      description: "Lead AI infrastructure for a B2B analytics platform serving 200+ enterprise clients. Architected a real-time ML inference pipeline processing 40M events/day. Built and shipped a production RAG system that reduced support ticket volume by 34%.",
      tech: ["Python", "PyTorch", "Kubernetes", "LangChain", "Apache Kafka", "PostgreSQL"]
    },
    {
      role: "Data Scientist",
      company: "DataLabs",
      period: "2020 — 2022",
      location: "Remote",
      description: "Developed predictive models for retail and fintech clients. Owned full lifecycle from data exploration to deployment. Reduced churn prediction latency by 60% through model distillation. Mentored 3 junior data scientists.",
      tech: ["Python", "scikit-learn", "XGBoost", "dbt", "Airflow", "GCP"]
    },
    {
      role: "Machine Learning Engineer",
      company: "Veritas Analytics",
      period: "2018 — 2020",
      location: "São Paulo, Brazil",
      description: "Built computer vision pipelines for quality control in industrial manufacturing. Implemented a defect detection system achieving 99.2% precision on the production line, replacing a manual inspection process.",
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker", "AWS"]
    },
    {
      role: "Junior Data Analyst",
      company: "Banco Nacional do Comércio",
      period: "2016 — 2018",
      location: "São Paulo, Brazil",
      description: "Performed statistical analysis for credit risk modeling. Built dashboards for the risk committee and automated monthly reporting pipelines, saving ~20 analyst-hours per month.",
      tech: ["Python", "R", "SQL", "Tableau", "Excel"]
    }
  ],

  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "Universidade de São Paulo (USP)",
      period: "2016 — 2018",
      note: "Thesis: \"Calibration Methods for Neural Network Classifiers Under Distribution Shift\""
    },
    {
      degree: "B.Sc. Statistics",
      institution: "Universidade de São Paulo (USP)",
      period: "2012 — 2016",
      note: "Graduated with honors. Undergraduate research in Bayesian inference."
    }
  ],

  skills: {
    "Languages": ["Python", "R", "SQL", "Bash", "TypeScript"],
    "ML / AI": ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face", "LangChain", "LlamaIndex"],
    "Data Engineering": ["Apache Spark", "Airflow", "dbt", "Kafka", "Flink"],
    "Infrastructure": ["Kubernetes", "Docker", "Terraform", "AWS", "GCP"],
    "Databases": ["PostgreSQL", "Redis", "BigQuery", "Pinecone", "ChromaDB"]
  },

  projects: [
    {
      id: "neuralsearch",
      title: "NeuralSearch",
      subtitle: "Open-source semantic search engine",
      description: "A production-grade semantic search engine built on top of bi-encoder transformers. Supports hybrid retrieval (dense + sparse), re-ranking, and pluggable vector stores. Used by several open-source projects and startups.",
      longDescription: `NeuralSearch started as internal tooling at Luminary Systems and was later open-sourced. The core challenge was bridging the gap between research-quality retrieval and what you actually need in production: low latency, graceful degradation, and observable failure modes.

The system uses a bi-encoder architecture for candidate retrieval (fast approximate nearest neighbor search via FAISS or Pinecone) and a cross-encoder for re-ranking top candidates. The hybrid retrieval mode combines dense vector similarity with BM25 sparse matching — a significant improvement over pure semantic search on out-of-domain queries.

Key engineering decisions: asynchronous batch encoding for throughput, a caching layer for repeated queries, and a calibration step that turns raw similarity scores into calibrated probabilities useful for downstream decision logic.`,
      tech: ["Python", "PyTorch", "Hugging Face", "FAISS", "FastAPI", "Redis"],
      tags: ["NLP", "Search", "Open Source"],
      github: "github.com/israeloliveira/neuralsearch",
      year: "2023",
      status: "Active"
    },
    {
      id: "llmeval",
      title: "LLM-Eval",
      subtitle: "Framework for evaluating language models",
      description: "A rigorous, opinionated evaluation framework for LLMs. Moves beyond simple accuracy metrics toward calibration, consistency under paraphrase, and factual grounding. Includes a suite of adversarial probes.",
      longDescription: `LLM-Eval was born from frustration. Most LLM benchmarks measure the wrong things: they reward confident wrong answers, don't test consistency, and are saturated by frontier models while being useless for comparing smaller models on domain-specific tasks.

The framework evaluates models along four axes: accuracy (obviously), calibration (does the model's confidence match its correctness rate?), consistency (does it give the same answer to semantically equivalent questions?), and groundedness (do generated statements have textual support in provided context?).

The adversarial probe suite includes negation tests, counterfactual questions, and domain-shift scenarios. It's designed to surface failure modes before they reach production, not celebrate benchmark performance.`,
      tech: ["Python", "Hugging Face", "OpenAI API", "Anthropic API", "Pytest", "Weights & Biases"],
      tags: ["LLMs", "Evaluation", "Open Source"],
      github: "github.com/israeloliveira/llm-eval",
      year: "2024",
      status: "Active"
    },
    {
      id: "churnpredict",
      title: "ChurnPredict",
      subtitle: "Causal churn prediction for SaaS",
      description: "A churn prediction system that goes beyond correlation by estimating individual treatment effects. Uses doubly-robust estimation to identify customers where intervention is actually likely to change the outcome.",
      longDescription: `Most churn models answer the wrong question. Predicting who will churn is less useful than predicting who will churn if you don't intervene, and more specifically, who would *stay* if you did intervene. ChurnPredict tackles this by framing retention as a causal inference problem.

The system estimates Conditional Average Treatment Effects (CATE) using a doubly-robust learner (combining a propensity model and an outcome model). This lets us rank customers not by churn probability but by persuadability — the incremental lift from an intervention.

In retrospective validation against actual retention campaigns, targeting by CATE reduced cost-per-retained-customer by 41% compared to targeting by churn probability alone.`,
      tech: ["Python", "EconML", "XGBoost", "scikit-learn", "MLflow", "PostgreSQL"],
      tags: ["Causal ML", "SaaS", "Industry"],
      year: "2022",
      status: "Archived"
    },
    {
      id: "visionpipeline",
      title: "VisionPipeline",
      subtitle: "Industrial defect detection system",
      description: "End-to-end computer vision pipeline for surface defect detection in manufacturing. Achieved 99.2% precision on the production line with sub-50ms inference latency per frame.",
      longDescription: `The challenge in industrial vision systems isn't usually the model architecture — it's the data, the deployment environment, and the failure cost asymmetry. Misses (failing to detect a defect) and false alarms (flagging good product) have very different costs, and the optimal threshold changes based on production conditions.

VisionPipeline uses a fine-tuned EfficientNet backbone with a custom detection head trained on a synthetic augmentation pipeline that simulates lighting variation and camera noise. The model runs on Nvidia Jetson devices on the factory floor, with edge inference at 22 fps.

A key design choice: the system maintains a sliding-window confidence tracker and can dynamically adjust its alert threshold based on recent false positive rates, keeping operators calibrated and reducing alert fatigue.`,
      tech: ["Python", "TensorFlow", "OpenCV", "ONNX", "Nvidia Jetson", "MQTT"],
      tags: ["Computer Vision", "Edge ML", "Industry"],
      year: "2020",
      status: "Archived"
    }
  ],

  blog: [
    {
      id: "attention-from-scratch",
      title: "Understanding Attention Mechanisms from Scratch",
      subtitle: "No magic, just matrix multiplication",
      date: "March 12, 2025",
      readTime: "18 min read",
      tags: ["Deep Learning", "Transformers", "Python"],
      excerpt: "Attention is the most important idea in modern deep learning, and it's also one of the most poorly explained. Let's build it from first principles.",
      content: `Attention is just a weighted average. Everything else is implementation detail.

That's the core insight, and if you hold onto it while reading explanations of transformers, multi-head attention, and cross-attention, you'll find that most of the complexity dissolves.

## The problem attention solves

Before attention, sequence models had to compress an entire input sequence into a fixed-size vector — a bottleneck that made long-range dependencies hard to capture. Attention says: instead of compressing everything into one vector, let the model *look back* at all previous positions when generating each output.

## Queries, keys, and values

The query/key/value abstraction is borrowed from database retrieval, and the analogy is useful:

- A **query** is what you're looking for
- A **key** is what each position "advertises" about itself
- A **value** is what each position actually contains

The attention score between a query q and a key k is their dot product, scaled by √d_k to prevent gradient issues in high dimensions. Softmax over the scores gives weights that sum to 1. The output is a weighted sum of values.

\`\`\`python
import torch
import torch.nn.functional as F

def attention(Q, K, V, mask=None):
    d_k = Q.shape[-1]
    scores = Q @ K.transpose(-2, -1) / (d_k ** 0.5)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    weights = F.softmax(scores, dim=-1)
    return weights @ V, weights
\`\`\`

## Why multi-head?

A single attention head can only capture one type of relationship at a time. Multi-head attention runs h attention operations in parallel, each with different learned projections, then concatenates and projects the results. This lets the model jointly attend to information from different representation subspaces — positional patterns in one head, syntactic dependencies in another, semantic similarity in a third.

## What attention actually learns

The cleanest way to develop intuition is to visualize attention weights on real examples. In early layers of BERT, you typically see heads attending to neighboring tokens and punctuation. In later layers, heads develop more semantic patterns — co-reference resolution, subject-verb agreement, prepositional attachment.

This is also why "attention is not explanation" is a real concern. The weights tell you what the model looked at, not why it mattered.`
    },
    {
      id: "production-rag",
      title: "Building Production RAG Systems",
      subtitle: "The gap between a demo and something you'd run at 3am",
      date: "January 8, 2025",
      readTime: "22 min read",
      tags: ["RAG", "LLMs", "MLOps"],
      excerpt: "RAG demos are easy. Production RAG is an exercise in handling everything that goes wrong at scale, with real users, on real data.",
      content: `The RAG demo works beautifully. You feed it a PDF, ask a question, and it answers correctly. Then you ship it, and within a week you have: unanswered queries, hallucinated citations, painfully slow responses, and a user who swears the system gave conflicting answers to the same question.

This is the gap between RAG-as-prototype and RAG-as-product.

## What actually fails in production

**Retrieval quality** is the first thing that breaks. Your embedding model was trained on web text; your documents are technical manuals. The semantic similarity scores mean something different than you expect, and you're retrieving slightly-wrong chunks that confuse rather than help the generator.

**Chunking strategy** matters more than most tutorials suggest. Fixed-size chunking with arbitrary boundaries is fast to implement and consistently suboptimal. A chunk that splits mid-sentence, or mid-table, is a chunk that can't be retrieved correctly.

**Latency compounds**. Embedding the query, running ANN search, fetching chunks, building a prompt, calling the LLM, waiting for streaming output — each step has variance, and tail latency is what users notice.

## Hybrid retrieval is not optional

For production systems on specialized domains, pure dense retrieval will underperform hybrid retrieval (dense + sparse). BM25 handles exact matches, acronyms, and rare technical terms better than dense embeddings. A simple reciprocal rank fusion of both rankings consistently outperforms either alone.

## The evaluation problem

You can't improve what you don't measure, and measuring RAG quality is genuinely hard. LLM-as-judge approaches have real biases. Human evaluation is expensive and slow. My current stack: automated faithfulness scoring with a fine-tuned NLI model + human spot-checks on a stratified sample of query types.`
    },
    {
      id: "python-memory-ml",
      title: "Python Memory Profiling for ML Engineers",
      subtitle: "Your training job doesn't have to OOM every time",
      date: "October 30, 2024",
      readTime: "14 min read",
      tags: ["Python", "MLOps", "Performance"],
      excerpt: "Python's memory model will surprise you if you're not paying attention. Here's what I've learned from debugging OOMs in training pipelines.",
      content: `CUDA out of memory is the easy one. The traceback points right at it and the fix is usually obvious — reduce batch size, use gradient checkpointing, or get a bigger GPU.

The harder memory problems are in CPU RAM, and they're sneakier. You notice them as gradual slowdowns, unexpected swapping, or training runs that inexplicably die at hour 3.

## Reference counting and circular references

Python uses reference counting as its primary garbage collection mechanism. Objects are deallocated when their reference count hits zero. The implication for ML code: large tensors, DataLoader caches, or model weights held in unexpected places won't be freed when you think they will.

The gc module's \`gc.collect()\` helps with circular references, but it doesn't solve the underlying problem — you need to actually release references.

## DataLoader workers and forking

PyTorch DataLoader with num_workers > 0 forks worker processes. On Linux, this uses copy-on-write semantics, which sounds efficient but creates a trap: any reference count modification in the parent process causes a page copy. If your dataset holds large arrays, and Python's GC is touching reference counts, you can end up using much more memory than expected.

The fix: pin memory-intensive objects in workers, use numpy arrays instead of Python lists for large data, and consider setting \`persistent_workers=True\` to avoid repeated fork overhead.

## Memory profiling tools I actually use

\`memray\` is the best Python memory profiler right now. It has minimal overhead, supports native frames, and generates flame graphs that show you exactly what's holding memory. For tracking GPU memory, \`torch.cuda.memory_summary()\` is more useful than just checking allocated bytes.`
    },
    {
      id: "when-transformers-fail",
      title: "When Transformers Fail: Edge Cases in NLP",
      subtitle: "The failure modes they don't put in the paper",
      date: "August 5, 2024",
      readTime: "16 min read",
      tags: ["Deep Learning", "NLP", "Transformers"],
      excerpt: "Transformers are remarkably capable and remarkably fragile. Understanding how they fail is as important as understanding how they succeed.",
      content: `State-of-the-art benchmark performance is not the same thing as robustness. Transformers have known, reproducible failure modes that appear in production with surprising regularity.

## Negation

Language models are bad at negation in a systematic way. "The patient does not have a fever" and "The patient has a fever" can receive similar representations in sentence embedding models, because the surface-level lexical overlap is high. This is catastrophic for clinical NLP and legal document analysis.

It's not fully solved. Contrastive training helps. Instruction tuning helps more. But even frontier models will occasionally miss negation in complex multi-clause sentences.

## Compositional generalization

Transformers trained on natural language typically fail on systematically novel compositions of familiar concepts. If your training data contains "red cube" and "blue sphere" but not "red sphere," a transformer may fail to correctly process the novel combination even though the components are individually familiar.

This is the core SCAN/COGS finding, and it matters for domain-specific NLP: you can't assume that seeing all the components of a technical concept means the model will handle their novel composition.

## Context length and positional encoding

All transformers have a context length limit, but the performance degradation typically starts well before the hard limit. The "lost in the middle" phenomenon — where information in the middle of a long context is attended to less than information at the start and end — is well-documented and affects RAG systems in particular.

RoPE and ALiBi positional encodings are better than learned absolute positions, but they don't fully solve the problem. For long-context applications, consider chunked attention strategies.`
    }
  ],

  talks: [
    {
      id: "pycon2024",
      title: "RAG in Production: What the Tutorials Don't Tell You",
      event: "PyCon Brazil 2024",
      date: "October 2024",
      location: "Manaus, Brazil",
      type: "Conference Talk",
      description: "A practitioner's guide to the failure modes of retrieval-augmented generation at scale. Covers chunking strategies, hybrid retrieval, evaluation, and latency engineering.",
      slides: "#",
      video: "#"
    },
    {
      id: "mlconf2023",
      title: "Causal Inference for Churn: Beyond Prediction",
      event: "MLConf São Paulo 2023",
      date: "September 2023",
      location: "São Paulo, Brazil",
      type: "Conference Talk",
      description: "Framing churn as a treatment effect estimation problem rather than a classification problem. Case study on CATE estimation for SaaS retention campaigns.",
      slides: "#",
      video: null
    },
    {
      id: "pydata2023",
      title: "Calibration: The ML Property Nobody Talks About",
      event: "PyData São Paulo 2023",
      date: "April 2023",
      location: "São Paulo, Brazil",
      type: "Conference Talk",
      description: "Why calibration matters more than accuracy for real-world decision systems, and practical methods to measure and improve it.",
      slides: "#",
      video: "#"
    },
    {
      id: "workshop2022",
      title: "Hands-on: Building Semantic Search from Scratch",
      event: "AI Summit Brazil 2022",
      date: "November 2022",
      location: "Remote",
      type: "Workshop",
      description: "4-hour workshop covering transformer-based retrieval, FAISS indexing, and re-ranking pipelines. Attended by 120+ practitioners.",
      slides: "#",
      video: null
    }
  ],

  irisContext: `You are IRIS (Israel's Research & Information System), an AI assistant on Israel Oliveira's professional website.

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

TALKS:
1. PyCon Brazil 2024: "RAG in Production"
2. MLConf SP 2023: "Causal Inference for Churn"
3. PyData SP 2023: "Calibration: The ML Property Nobody Talks About"
4. AI Summit 2022: Hands-on workshop on semantic search

Respond in a helpful, technically precise, and slightly informal way — like Israel would if you asked him directly. Be specific when discussing his projects and experience. If asked about personal info (address, phone, private matters), politely decline. Keep answers concise unless the user asks for detail.`
};
