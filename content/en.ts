/**
 * English version of the site. Same structure as `content/fr.ts`: every key
 * there must exist here (TypeScript checks it in `content/index.ts`).
 *
 * Typography rule: no long dashes in visible text.
 * Use the simple hyphen "-", commas, colons or full stops.
 */

import type { Experience, Project } from "./fr";

export const site = {
  url: "https://portfolio-jeremy-morgan-patole.vercel.app",
  name: "Jérémy-Morgan Patole",
  title: "Technical Project Manager & Data Analyst",
  location: "Paris",
  /** Header logo: name, then job titles in smaller type */
  brand: { name: "Jérémy-Morgan PATOLE", subtitle: "Technical Project Manager & Data Analyst" },
  /** Share image texts (LinkedIn, Slack…) */
  og: { header: "Paris · portfolio", footer: "Case study: TMRC FX" },
  seo: {
    title: "Jérémy-Morgan Patole | Technical Project Manager & Data Analyst",
    description:
      "Technical Project Manager and Data Analyst based in Paris. Client project delivery, Python data pipelines and AI. Case study: TMRC FX.",
  },
};

/** Language of this version of the site and header switch button. */
export const i18n = {
  lang: "en",
  ogLocale: "en_GB",
  /** URL prefix for this language. */
  base: "/en",
  /** Home page of this language, used to build anchors ("/en#contact"). */
  home: "/en",
  switchTo: { label: "FR", ariaLabel: "Lire cette page en français", hrefLang: "fr" },
};

/** Interface texts outside the sections (accessibility, short labels). */
export const ui = {
  skipLink: "Skip to content",
  mainNav: "Main navigation",
  mobileNav: "Mobile navigation",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  newTab: "opens in a new tab",
  themeToggle: "Switch between light and dark theme",
  workTabs: "Case study reading",
  pipelineSteps: "Pipeline steps",
  projectThemes: "Project themes",
  technologies: "Technologies",
  tools: "Tools",
  skills: "Skills",
  colon: ": ",
};

export const contact = {
  email: "jerempatole@live.fr",
  phone: "+33 7 69 28 00 57",
  phoneHref: "tel:+33769280057",
  linkedin: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/",
  linkedinLabel: "linkedin.com/in/jérémy-patole-674794161",
  github: "https://github.com/jmpbusiness2023-commits",
  ctaLabel: "Contact me",
};

/**
 * The two CVs. Until the English CVs are added to `public/`, these links point
 * to the French versions: only change `href` (and the labels) to switch.
 */
export const cvs = {
  projet: {
    label: "Download the Project CV (French)",
    href: "/cv-jeremy-morgan-patole-projet.pdf",
  },
  data: {
    label: "Download the Data CV (French)",
    href: "/cv-jeremy-morgan-patole-data.pdf",
  },
};

export const nav = [
  { label: "Profile", href: "/en#profil" },
  { label: "Expertise", href: "/en#expertise" },
  { label: "Experience", href: "/en#experiences" },
  { label: "Projects", href: "/en#projects" },
  { label: "Environments", href: "/en#clients" },
  { label: "Use cases", href: "/en#use-cases" },
  { label: "Stack", href: "/en#stack" },
  { label: "Contact", href: "/en#contact" },
];

export const hero = {
  pitch: "I run software projects end to end and build the data pipelines that power them.",
  primaryCta: { label: "See the flagship project", href: "/en#tmrc-fx" },
  /** Scrolls to "Two ways to work with me", the only place where the CVs can be downloaded. */
  cvCta: { label: "See the CVs", href: "/en#approche" },
  photoAlt: "Jérémy-Morgan Patole, arms crossed, in a bright workspace",
  availability: "Based in Paris · hybrid",
};

export const profile = {
  heading: "An engineer by training, a project manager and data analyst by practice.",
  text: "Master's-level engineer in structural mechanics, with experience at Dassault Aviation (through ALTEN) and Stellantis, then trained in data and AI at Ironhack. Today I collaborate with VekTrel on client projects run end to end: scoping, traceable decisions, acceptance testing and delivery, with a strong technical footing (Python, real-time data, AI agents).",
};

export const twoWays = {
  anchor: "approche",
  heading: "Two ways to work with me",
  intro: "One background, two readings. Depending on your needs, here is what I take on and what proves it.",
  tracks: [
    {
      id: "projet",
      title: "Technical project management",
      lead: "For technical project manager, deployment, integration and professional services roles.",
      proofs: [
        "Client scoping: spotting blocking points from the brief and getting documented trade-offs approved before any development",
        "Acceptance testing in the client's environment, installation guides, defect tracking",
        "Over 3 years of consulting for a major defence company, under strict standards and security requirements",
      ],
      cv: cvs.projet,
    },
    {
      id: "data",
      title: "Data & AI",
      lead: "For data analyst, data scientist and data & AI roles.",
      proofs: [
        "Real-time Python pipeline: ingestion, validation, outlier detection, deterministic replay",
        "Sensitivity analysis on real historical data to settle business parameters",
        "Dashboards (Tableau, Power BI), A/B testing, building and steering AI agents",
      ],
      cv: cvs.data,
    },
  ],
};

/** The only figures allowed for TMRC FX. Do not add any. */
export const tmrcStats = [
  { value: "33", label: "releases delivered" },
  { value: "~740", label: "automated tests" },
  { value: "2", label: "platforms: macOS and Windows" },
  { value: "3", label: "people + AI agents" },
];

/** TMRC FX description: Flagship project block, Use cases card and case study introduction. */
const tmrcSummary =
  "Building a technical analysis assistant that spots Forex market setups based on the strategy provided by the client. Co-led the project for VekTrel, from scoping to the delivery of a macOS desktop application connected to MetaTrader 5.";

export const tmrcFeature = {
  eyebrow: "Flagship project",
  heading: "TMRC FX: from client brief to delivered application",
  context: tmrcSummary,
  cta: { label: "Read the case study", href: "/en/use-cases/tmrc-fx" },
  tags: ["Scoping", "Acceptance testing", "Python", "Real time", "Tauri"],
};

/** Expertise section: the building blocks of the profile, in three families. */
export const expertise = {
  heading: "Expertise",
  intro: "The building blocks of the profile, in three families: lead, analyse, design.",
  families: [
    {
      name: "Project management",
      items: [
        "Scoping and requirements gathering",
        "Milestone planning",
        "Risk management",
        "Acceptance testing and delivery",
        "Multi-stakeholder coordination",
        "Client relationship",
      ],
    },
    {
      name: "Data & AI",
      items: [
        "Data analysis",
        "Python",
        "SQL / MySQL",
        "Data engineering",
        "Tableau",
        "Power BI",
        "Data visualisation",
        "Building AI agents",
      ],
    },
    {
      name: "Engineering & industry",
      items: [
        "Mechanical studies",
        "CAD / CATIA V5 / VPM",
        "Document management / PLM",
        "Compliance with norms and standards",
        "Reading technical environments",
        "Problem solving",
      ],
    },
  ],
};

export const experiencesSection = {
  heading: "Experience",
  intro: "From the aeronautical design office to leading client projects.",
  educationHeading: "Education",
};

export const experiences: Experience[] = [
  {
    title: "Technical Project Manager & Data Developer",
    org: "In collaboration with VekTrel, TMRC FX client project",
    period: "Sept. 2026 - present",
    place: "Paris (hybrid)",
    summary:
      "Co-leading a client project end to end: a EUR/USD market analysis assistant connected to MetaTrader 5, delivered as a desktop application for macOS and Windows.",
    bullets: [],
    link: { label: "Read the case study", href: "/en/use-cases/tmrc-fx" },
  },
  {
    title: "Design Engineer (consulting), RAFALE electrical installation",
    org: "ALTEN SA, on assignment at Dassault Aviation",
    period: "Oct. 2022 - Mar. 2025",
    place: "Saint-Cloud",
    bullets: [
      "CAD integration (CATIA V5) of wiring harnesses and equipment on three RAFALE versions (Navy, Single-seat, Two-seat), following Dassault Aviation standards and military norms",
      "Aircraft configuration and documentation management in PLM software",
    ],
  },
  {
    title: "Design Engineer Intern",
    org: "Stellantis, Technical Centre",
    period: "Feb. - Aug. 2022",
    place: "Vélizy-Villacoublay",
    bullets: [
      "Analysis of mechanical and statistical calculations to optimise the sizing of steering systems and the robustness of the model",
    ],
  },
];

export const education = [
  {
    title: "Data & AI Bootcamp, RNCP37827 Block 1 certification (level 6)",
    org: "Ironhack Paris",
    period: "Oct. - Dec. 2025",
  },
  {
    title: "Project Management Certification",
    org: "ORSYS La Défense",
    period: "Apr. 2024",
  },
  {
    title: "Master's in Composite Structural Mechanics, Aeronautics",
    org: "UFR SITEC, Université Paris Nanterre",
    period: "2018 - 2020",
  },
  {
    title: "Bachelor's (3rd year) in Engineering Sciences, Mechanics",
    org: "Université Paris Nanterre",
    period: "2016 - 2017",
  },
];

export const projectsSection = {
  heading: "Data projects",
  intro: "Carried out during the Ironhack Data & AI bootcamp. The code is public on GitHub.",
  detailLabel: "See the details",
  githubLabel: "GitHub",
  othersLabel: "Also:",
};

export const projects: Project[] = [
  {
    slug: "final-project",
    title: "Video game market analysis",
    subtitle: "Ironhack final project",
    summary:
      "Data collection through APIs and web scraping, SQL modelling, Tableau dashboard and data storytelling on the video game industry.",
    period: "Dec. 2025",
    tags: ["Python", "SQL", "Tableau", "Web scraping"],
    tools: ["Python", "Pandas", "SQL", "Tableau", "Jupyter Notebook", "GitHub"],
    details: [
      "Data collection through APIs and web scraping, then cleaning and structuring.",
      "SQL modelling and choice of analysis angles on the sector's trends, volumes and dynamics.",
      "Findings presented in a Tableau dashboard, with a decision-oriented narrative.",
    ],
    skills: ["Market analysis", "Data storytelling", "SQL modelling", "Visualisation"],
    repos: [
      {
        label: "See the GitHub repository",
        href: "https://github.com/jmpbusiness2023-commits/Final-Project--Video-Game-Market-Analysis",
      },
    ],
    featured: true,
  },
  {
    slug: "vanguard-ab-test",
    title: "Vanguard A/B test",
    subtitle: "Experimentation and statistics",
    summary: "Comparison of two customer journeys, statistical testing and recommendation, Tableau visualisation.",
    period: "Nov. 2025",
    tags: ["A/B testing", "Statistics", "Tableau"],
    tools: ["Python", "Pandas", "SciPy", "Tableau", "GitHub"],
    details: [
      "Comparison of an existing customer journey with a new one.",
      "Hypothesis testing to judge whether the observed differences are significant.",
      "Reasoned recommendation and visualisation of the results in Tableau.",
    ],
    skills: ["A/B testing", "Statistical reasoning", "Decision support"],
    repos: [
      {
        label: "See the GitHub repository",
        href: "https://github.com/jmpbusiness2023-commits/Project-2--Week_5_6",
      },
    ],
    featured: true,
  },
  {
    slug: "movie-market-analysis",
    title: "Film market analysis",
    subtitle: "APIs, web scraping and trends",
    summary: "Data from APIs and web scraping, analysis of market trends with Python.",
    period: "Oct. 2025",
    tags: ["Python", "API", "Web scraping"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    details: [
      "Collection of film data through APIs and web scraping.",
      "Analysis of the factors that shape a film's commercial trajectory.",
      "Trends presented as actionable reading angles.",
    ],
    skills: ["Data collection", "Trend analysis", "Visualisation"],
    repos: [
      {
        label: "See the GitHub repository",
        href: "https://github.com/jmpbusiness2023-commits/Week-3-Project--1",
      },
      {
        label: "See the second repository",
        href: "https://github.com/jmpbusiness2023-commits/Week-4--Mini-Project",
      },
    ],
    featured: true,
  },
  {
    slug: "shark-attack-analysis",
    title: "Shark attack analysis",
    subtitle: "Data cleaning and exploration",
    summary: "Cleaning a heterogeneous dataset, then exploring the main trends.",
    period: "Oct. 2025",
    tags: ["Python", "Pandas", "Cleaning"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    details: [
      "Handling missing values and harmonising columns.",
      "Structured exploration of the variables to bring out the trends.",
      "Summary of the findings in an accessible format.",
    ],
    skills: ["Data cleaning", "Exploratory analysis", "Data quality"],
    repos: [
      {
        label: "See the GitHub repository",
        href: "https://github.com/jmpbusiness2023-commits/Week-2-Mini-Project---Shark-Attacks",
      },
    ],
    featured: false,
  },
  {
    slug: "escape-room",
    title: "Escape Room",
    subtitle: "Python mini-project",
    summary: "An escape game in Python: action sequences, access rules and player progression.",
    period: "Oct. 2025",
    tags: ["Python", "Algorithms"],
    tools: ["Python", "VS Code", "GitHub"],
    details: [
      "Design of an escape game experience with progression logic and access conditions.",
      "Code structured around the player's actions and simple rules.",
      "Work on the readability and sequencing of the program.",
    ],
    skills: ["Algorithmic logic", "Code structuring"],
    repos: [
      {
        label: "See the GitHub repository",
        href: "https://github.com/jmpbusiness2023-commits/Week-1-Mini-Project---Python-Quest",
      },
    ],
    featured: false,
  },
];

export const environments = {
  heading: "Demanding, structuring environments",
  text: "Defence aeronautics, automotive, client software projects: environments where rigour, standards and deliverable quality are not up for negotiation.",
  /** Organisations, all at the same level */
  major: [
    { name: "Dassault Aviation", line: "CAD integration on the RAFALE, on assignment through ALTEN" },
    { name: "Stellantis", line: "Mechanical and statistical studies, Vélizy technical centre" },
    { name: "ALTEN", line: "Engineering consulting" },
    { name: "VekTrel", line: "Co-leading client projects, from scoping to delivery" },
  ],
  educationHeading: "Education",
  education: [
    { name: "Ironhack", line: "Data & AI Bootcamp, RNCP level 6 certification" },
    { name: "UFR SITEC", line: "Master's in Composite Structural Mechanics, Aeronautics" },
  ],
};

export const useCases = {
  heading: "Use cases",
  intro: "Concrete cases, from client work to data projects, with the approach in detail.",
  tmrcLabel: "Client project · in collaboration with VekTrel · Sept. 2026 - present",
};

export const stack = {
  heading: "Stack",
  intro: "The tools I use, grouped by purpose.",
  families: [
    {
      name: "Data",
      items: ["Python", "Pandas", "SQL / MySQL", "Tableau", "Power BI", "DataMiner", "Qligent"],
    },
    {
      name: "Project",
      items: ["Notion", "Trello", "GitHub", "Microsoft Office"],
    },
    {
      name: "AI",
      items: ["Claude Code", "Codex"],
    },
    {
      name: "Engineering",
      items: ["CATIA V5", "VPM", "PLM"],
    },
  ],
};

export const contactSection = {
  heading: "Looking for a rigorous, adaptable technical project manager or data profile?",
  text: "Open to discussing opportunities in technical project management, data and AI, especially in demanding environments.",
  labels: {
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    linkedinShort: "jérémy-patole",
    github: "GitHub",
    githubShort: "jmpbusiness2023-commits",
  },
  footerLinks: { top: "Back to top" },
};

/** Labels for the /en/use-cases/... pages */
export const caseLabels = {
  back: "All use cases",
  footerHeading: "A project or an open role? Let's talk.",
  tmrc: {
    eyebrow: "Case study",
    context: "Context",
    role: "My role",
    challenge: "The main challenge",
    work: "What I did",
    results: "Results",
    stack: "Stack",
    lessons: "What I take away",
  },
  project: {
    frameLabel: "Setting",
    frameValue: "Data & AI Bootcamp, Ironhack",
    periodLabel: "Period",
    toolsLabel: "Tools",
    codeLabel: "Code",
    codeLink: "Public repository on GitHub",
    approach: "Approach",
    toolsAndSkills: "Tools and skills",
    others: "Other use cases",
    tmrcLink: "TMRC FX, client project",
  },
};

export const outsideWork = {
  label: "Outside work",
  items: ["DJing", "Piano and percussion", "Martial arts"],
};

/** Full case study: /en/use-cases/tmrc-fx */
export const tmrcCase = {
  slug: "tmrc-fx",
  title: "TMRC FX",
  heading: "TMRC FX: from client brief to delivered application",
  lead: tmrcSummary,
  seo: {
    title: "TMRC FX case study | Jérémy-Morgan Patole",
    description:
      "Scoping, acceptance testing and a real-time Python data pipeline: how discretionary market know-how became a delivered desktop application.",
  },
  meta: [
    { label: "Setting", value: "In collaboration with VekTrel, for a pilot client" },
    { label: "Period", value: "Sept. 2026 - present" },
    { label: "Role", value: "Project co-lead" },
    { label: "Deliverable", value: "Desktop application for macOS and Windows" },
  ],
  context:
    "A pilot client wanted an assistant to spot market setups on EUR/USD, based on rules they applied by hand. Their brief was rich but highly open to interpretation: depending on how it was read, the same rule could produce anywhere from 10 to more than 1,700 signals over the same period.",
  role: "Project co-lead alongside the head of VekTrel: scoping, review of contractual deliverables, acceptance testing, and development of several modules.",
  challenge:
    "Turning discretionary know-how into testable rules, and writing no code before the client had approved those rules.",
  work: {
    pilotage: {
      label: "Project management",
      lead: "What matters to a project recruiter: scoping, contract, milestones, acceptance testing, team.",
      items: [
        "20 blocking questions identified and submitted to the client, settled as traceable, versioned decisions",
        "Line-by-line review of the commercial proposal against the decision log, 4 reservations lifted before signature",
        "Management by milestones and acceptance criteria, platform amendment handled with the client",
        "Acceptance testing in the client's environment (macOS, MetaTrader 5), dated test sessions, installation guides",
        "Coordination of a team of 3 people and AI agents (handover documents, pull request reviews)",
      ],
    },
    data: {
      label: "Data",
      lead: "What matters to a data recruiter: pipeline, quality, replay, analysis, delivered modules.",
      items: [
        "Python pipeline: continuous ingestion of M1 candles, strict file validation, multi-timeframe aggregation (M5, H1), UTC timestamps",
        "Data quality: outlier filtering (spreads, pip value), history reconstruction",
        "Deterministic replay with no look-ahead leakage, to compare rule variants",
        "Sensitivity analysis of the rules on 6 months of real history",
        "Delivered modules: position size calculator and risk register, alert engine with a log, macOS application packaging",
      ],
    },
  },
  architecture: {
    heading: "Architecture",
    caption:
      "Market data flows from MetaTrader 5 to a local Python pipeline, which produces alerts. The decision to open a position remains human.",
    pipelineSteps: ["Aggregation", "Structure", "Rules", "Risk", "Economic news"],
    /** Diagram steps, in order. The `pipeline` node receives the `pipelineSteps`. */
    nodes: [
      { title: "MetaTrader 5", detail: "The client's trading platform" },
      { title: "Export indicator", detail: "MQL5, M1 candles" },
      { title: "Local file", detail: "Strictly validated on every read" },
      { title: "Python pipeline", detail: "Replayable, timestamped in UTC", pipeline: true },
      { title: "Alerts and application", detail: "Desktop application, alert log" },
      { title: "Human decision", detail: "No real order executed automatically", human: true },
    ] as { title: string; detail: string; pipeline?: boolean; human?: boolean }[],
  },
  stack: ["Python (standard library, pytest)", "TypeScript", "Tauri", "MQL5", "GitHub (PRs, issues, milestones)", "Claude Code", "Codex"],
  lessons: [
    "Scope before coding: an ambiguous rule costs more in development than in a workshop with the client.",
    "Trace every decision: a versioned log makes the scope verifiable, right down to the commercial proposal.",
    "Test in the client's real environment: that is where the gaps hidden by the development environment show up.",
  ],
  disclaimer:
    "Decision-support tool, with no automatic execution of real orders. The client's name and the source code are confidential.",
};
