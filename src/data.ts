export type ProjectType = 'unity-game' | 'software-project' | 'planned-project';
export type ProjectStatus = 'current-build' | 'team-project' | 'planned';

export interface ProjectRecord {
  id: string;
  title: string;
  subtitle: string;
  type: ProjectType;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  teamProject: boolean;
  planned: boolean;
  summary: string;
  verifiedFacts: string[];
  technologies: string[];
  repositoryUrl?: string;
  image?: string;
  mediaAlt?: string;
  mediaLabel?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    introduction: string;
    about: string;
    portrait: string;
    github: string;
    email: string;
    linkedin: string;
  };
  projects: ProjectRecord[];
  plannedProjects: ProjectRecord[];
  skills: Array<{ name: string; detail: string; category: string }>;
}

const asset = (filename: string) => `${import.meta.env.BASE_URL}portfolio-assets/${filename}`;

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Rith Sereyrathanak',
    title: 'Unity Game Developer · Software Engineering Student',
    introduction: 'I build playable systems in Unity and bring a software-engineering mindset to every interaction, level, and team product.',
    about: 'I am a software engineering student focused on becoming a game developer. My current work pairs hands-on Unity practice with team software projects, strengthening how I think about gameplay logic, product structure, and clear user experiences. I am looking for an internship where I can keep learning, contribute carefully, and turn technical ideas into experiences people can play.',
    portrait: asset('portrait.png'),
    github: 'https://github.com/Sereyrathanak',
    email: 'rithsereyrathanak6@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rith-sereyrathanak',
  },
  projects: [
    {
      id: 'first-game',
      title: 'FirstGame',
      subtitle: 'Unity 6 · 3D forest platformer',
      type: 'unity-game',
      status: 'current-build',
      statusLabel: 'Current Unity build',
      featured: true,
      teamProject: false,
      planned: false,
      summary: 'A keyboard-controlled 3D platformer through a forest obstacle course, built across two playable levels with coins, enemies, moving platforms, and scene progression.',
      verifiedFacts: [
        'Two playable platforming levels plus a start scene',
        'Coin collection, enemy encounters, moving platforms, and finish triggers',
        'Arrow-key movement and Space to jump',
        'Repository documents an in-progress prototype',
      ],
      technologies: ['Unity 6', 'C#', 'URP 17.3', 'Input System', 'TextMesh Pro'],
      repositoryUrl: 'https://github.com/Sereyrathanak/FirstGame',
      image: asset('firstgame-gameplay.png'),
      mediaAlt: 'FirstGame gameplay showing a capsule character on a bright green platform facing floating platforms, obstacles, and collectible coins',
      mediaLabel: 'FirstGame · Unity gameplay capture',
    },
    {
      id: 'life-goods',
      title: 'Life Goods',
      subtitle: 'Khmer-first product information',
      type: 'software-project',
      status: 'team-project',
      statusLabel: 'Supporting team project',
      featured: false,
      teamProject: true,
      planned: false,
      summary: 'A Khmer-first experience that helps shoppers in Cambodia understand packaged-food product information from Open Food Facts.',
      verifiedFacts: [
        'Barcode and text search with visible source attribution',
        'On-demand Khmer translation while preserving original text',
        'Nutrition comparison without declaring a product winner',
      ],
      technologies: ['React 19', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Redis'],
      repositoryUrl: 'https://github.com/internetOnion/life-goods',
      image: asset('lifegoods-logo.png'),
      mediaAlt: 'LifeGoods logo with an orange bowl-and-leaf emblem beside the LifeGoods wordmark',
      mediaLabel: 'LifeGoods · Team WoW',
    },
    {
      id: 'internship-finder',
      title: 'Internship Finder',
      subtitle: 'Student and company platform',
      type: 'software-project',
      status: 'team-project',
      statusLabel: 'Supporting team project',
      featured: false,
      teamProject: true,
      planned: false,
      summary: 'A CADT team final project connecting students with companies through internship listings, CV workflows, applications, and role-based experiences.',
      verifiedFacts: [
        'Student, company, and reserved admin roles',
        'Internship browsing, posting, saving, and application tracking',
        'CV building, PDF parsing, and AI-assisted scoring workflows',
      ],
      technologies: ['React 18', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'JWT'],
      repositoryUrl: 'https://github.com/BolBol-short/CS-Y2-T3-Project',
      image: asset('internship-finder-signup.png'),
      mediaAlt: 'Internship Finder student account creation page with fields for full name, email address, password, and confirmation',
      mediaLabel: 'Internship Finder · Student signup interface · Team project',
    },
  ],
  plannedProjects: [
    {
      id: 'game-development-next',
      title: 'Game Development',
      subtitle: 'Next playable study',
      type: 'planned-project',
      status: 'planned',
      statusLabel: 'Coming soon · Not started',
      featured: false,
      teamProject: false,
      planned: true,
      summary: 'A future game-development project reserved for a new mechanic, stronger level design, and a documented build process.',
      verifiedFacts: ['Direction only', 'Scope to be defined', 'No repository yet'],
      technologies: ['Planned'],
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      subtitle: 'Future mobile product',
      type: 'planned-project',
      status: 'planned',
      statusLabel: 'Coming soon · Not started',
      featured: false,
      teamProject: false,
      planned: true,
      summary: 'A future mobile-development project focused on a useful, touch-first experience. Platform and stack will be documented when selected.',
      verifiedFacts: ['Direction only', 'Platform to be selected', 'No repository yet'],
      technologies: ['Planned'],
    },
    {
      id: 'vr-capstone',
      title: 'VR Game Capstone',
      subtitle: 'Unity virtual-reality project',
      type: 'planned-project',
      status: 'planned',
      statusLabel: 'Capstone roadmap · Not started',
      featured: true,
      teamProject: false,
      planned: true,
      summary: 'The planned capstone direction: a Unity game-development project for VR. Interaction model, platform, and scope remain intentionally open.',
      verifiedFacts: ['Planned capstone direction', 'Unity + VR intent', 'Development has not begun'],
      technologies: ['Unity', 'VR', 'Planned'],
    },
  ],
  skills: [
    { name: 'Unity 6', detail: 'Scenes, physics, prefabs, UI', category: 'Engine' },
    { name: 'C#', detail: 'Gameplay scripts and systems', category: 'Programming' },
    { name: 'URP', detail: 'Current FirstGame render pipeline', category: 'Rendering' },
    { name: 'Git + GitHub', detail: 'Version control and team workflow', category: 'Workflow' },
    { name: 'React', detail: 'Component-based product interfaces', category: 'Web' },
    { name: 'Software Engineering', detail: 'Structured, maintainable project work', category: 'Practice' },
  ],
};
