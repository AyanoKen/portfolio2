export const heroContent = {
  name: 'Kireet Gannavarapu',
  titles: ['Architect of Interactive Worlds'],
  summary: [
    'Game developer, designer, and narrative technologist blending systems thinking with story craft.',
    'From Unreal and Unity to AI-driven storytelling, I build experiences where design, code, and emotion meet.',
    'Ex-SDET who stress-tests mechanics as hard as code to keep every interaction resilient and intentional.',
  ],
  actions: [
    { label: 'Game Development', href: '#game-projects' },
    { label: 'AI & Web Projects', href: '#other-projects', variant: 'secondary' },
    { label: '3D Artwork', href: '#artworks', variant: 'secondary' },
    { label: 'Personal Novels', href: '/novels', variant: 'secondary' },
  ],
}

import shrineSilentHopeChapter1 from './novels/shrine-silent-hope-ch1.txt?raw'
import impostorsLoveChapter1 from './novels/impostors-love-chapter-1.txt?raw'
import impostorsLoveChapter2 from './novels/impostors-love-chapter-2.txt?raw'
import impostorsLoveChapter3 from './novels/impostors-love-chapter-3.txt?raw'
import impostorsLoveChapter4 from './novels/impostors-love-chapter-4.txt?raw'
import impostorsLoveChapter5 from './novels/impostors-love-chapter-5.txt?raw'
import impostorsLoveChapter6 from './novels/impostors-love-chapter-6.txt?raw'

export const heroStats = [
  {
    label: 'Commvault',
    value: 'Associate Engineer (SDET)',
    detail: 'Nov 2021 - Dec 2023',
  },
  {
    label: 'BML Munjal University, Gurgaon',
    value: 'Bachelor of Technology - Computer Science (8.49/10 GPA)',
    detail: 'Aug 2018 - Jun 2022',
  },
  {
    label: 'Purdue University, West Lafayette',
    value: "Master's in Computer Graphics Technology - Game Development (3.97/4.0 GPA)",
    detail: 'Spring 2024- Fall 25',
  },
]

export const workExperience = {
  organization: 'Commvault',
  role: 'Associate Engineer (SDET)',
  dates: 'Nov 2021 - Dec 2023',
  bullets: [
    'Designed and Developed Automation frameworks and testcases for Office365 and Compliance modules',
    'Led Test Automation for Case Manager module',
    'Led multiple projects and drafted knowledge transfer documents',
    'Tech Stack: Microsoft Azure, Solr Indexing, Web Applications, Databases',
  ],
}

export const educationList = [
  {
    school: 'BML Munjal University, Gurgaon',
    credential: 'Bachelor of Technology - Computer Science (8.49/10 GPA)',
    dates: 'Aug 2018 - Jun 2022',
  },
  {
    school: 'Purdue University, West Lafayette',
    credential: "Master's in Computer Graphics Technology - Game Development (3.97/4.0 GPA)",
    dates: 'Spring 2024- Fall 25',
  },
]

export const skillClusters = [
  {
    title: 'Game Development',
    description: 'Unity, Unreal Engine, VR (Oculus, SteamVR), Blender, Maya',
    tools: ['Unity', 'Unreal Engine', 'VR (Oculus, SteamVR)', 'Blender', 'Maya'],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Reinforcement Learning, Predictors, Recommender Systems, Digital Image Processing, Natural Language Processing',
    tools: [
      'Reinforcement Learning',
      'Predictors',
      'Recommender Systems',
      'Digital Image Processing',
      'Natural Language Processing',
    ],
  },
  {
    title: 'Web Development',
    description: 'Django, React, HTML, CSS, Javscript, jQuery, Node.js, Express.js, MySQL, MongoDB',
    tools: ['Django', 'React', 'HTML', 'CSS', 'Javscript', 'jQuery', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Programming',
    description: 'Python, C#, C++, UE5 Blueprints, Java',
    tools: ['Python', 'C#', 'C++', 'UE5 Blueprints', 'Java'],
  },
  {
    title: 'DevOps & Automation',
    description: 'Azure, Docker, Selenium, Scrapy, Command Line Automation',
    tools: ['Azure', 'Docker', 'Selenium', 'Scrapy', 'Command Line Automation'],
  },
  {
    title: 'Version Control',
    description: 'Git, GitHub',
    tools: ['Git', 'GitHub'],
  },
]

export const projectList = [
  {
    title: 'Dynamic Difficulty Adjustment AI (Thesis)',
    description:
      'Implemented Reinforcement Learning to create adaptive enemy AI that personalizes gameplay by predicting and responding to player behavior.',
  },
  {
    title: 'Purdue AR Game (Google AI Summit 2024)',
    description: 'Lead Developer on an Alternate reality game showcased at Google AI Summit.',
  },
  {
    title: 'His Life',
    description: 'Was the creative director, leading a team of 10 while making an open world Adventure puzzler game in UE5.',
  },
  {
    title: 'Digimon TCG Sim',
    description: 'Designed and developed a multiplayer TCG engine based on the Digimon Card Game using unity engine.',
  },
  {
    title: 'Echos of War',
    description:
      'Created a VR Museum experience promoting peace by illustrating the consequences of war in an immersive and interactive mode.',
  },
  {
    title: 'Zombie FPS (Unity)',
    description: 'Developed a first-person shooter with survival mechanics.',
  },
  {
    title: 'Choose Your Own Adventure Game',
    description: 'Integrated LLMs for dynamic storytelling.',
  },
  {
    title: 'Bio Inspired Neural Network',
    description: 'Thesis on implementing Grey Wolf Optimizer in Neural Networks.',
  },
  {
    title: 'Tsundoku',
    description: "Designed and developed a magazine webpage for my university's Literature Club (LiQuiD).",
  },
]

export const contactDetails = [
  { text: '+1(765)4098813', href: 'tel:+17654098813' },
  { text: 'Kireet.gannavarapu@gmail.com', href: 'mailto:Kireet.gannavarapu@gmail.com' },
  { text: 'GitHub', href: 'https://github.com/Ayano' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/kireet-gannavarapu/' },
  { text: 'Resume', href: 'https://drive.google.com/file/d/10d5bNcj3dKnL9rEC9cmUzyC2gxwx1cFE/view?usp=sharing' },
]

export const novelsPage = {
  eyebrow: 'Personal Novels',
  title: 'Personal Novels',
  description: 'Browse the shelf, select a book, and open individual chapters right here on the site.',
}

export const novels = [
  {
    id: 'impostors-love',
    title: "Impostor's Love",
    subtitle: 'A Fantasy Romance Story',
    chapters: [
      {
        id: 'impostors-love-chapter-1',
        title: 'Chapter 1',
        body: impostorsLoveChapter1,
      },
      {
        id: 'impostors-love-chapter-2',
        title: 'Chapter 2',
        body: impostorsLoveChapter2,
      },
      {
        id: 'impostors-love-chapter-3',
        title: 'Chapter 3',
        body: impostorsLoveChapter3,
      },
      {
        id: 'impostors-love-chapter-4',
        title: 'Chapter 4',
        body: impostorsLoveChapter4,
      },
      {
        id: 'impostors-love-chapter-5',
        title: 'Chapter 5',
        body: impostorsLoveChapter5,
      },
      {
        id: 'impostors-love-chapter-6',
        title: 'Chapter 6',
        body: impostorsLoveChapter6,
      },
    ],
  },
  {
    id: 'shrine-silent-hope',
    title: 'Shrine: Silent Hope',
    subtitle: 'A Romance Horror Story',
    chapters: [
      {
        id: 'shrine-silent-hope-chapter-1',
        title: 'Chapter 1',
        body: shrineSilentHopeChapter1,
      },
    ],
  },
]

export const featureHighlights = [
  {
    title: 'Game Designer',
    description:
      "Architect of systems, mechanics, and player experience with research roots in player psychology and interaction.",
  },
  {
    title: 'Software Engineer in Test',
    description:
      'Former SDET who pressure-tests code and gameplay alike, hardening features by breaking them early.',
  },
  {
    title: 'Narrative Technologist',
    description: 'Blending story craft with systems to build interactive worlds that feel alive and intentional.',
  },
]

export const gameShowcases = [
  {
    id: 'purdue-arg',
    title: 'WebGame - Purdue Alternate Reality',
    video: 'https://www.youtube.com/embed/BeN-R7UKJyY',
    summary:
      "A professor vanishes on campus and an investigation unravels AI conspiracies buried in Purdue's systems. This web ARG promoted AI education at Purdue and was showcased at the Google AI Summit 2024.",
    role: 'Full Stack Developer',
    team: '3',
    duration: '4 months',
    skillTags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Save-based progression with file decryption mechanics',
      'Multi-page puzzles and timed decision-making',
      'Story-driven level design with AI integration clues',
    ],
    repo: 'https://github.com/AyanoKen/ARG-Game',
    images: [
      '/projects/ARG/GameScreenshot1.png',
      '/projects/ARG/GameScreenshot2.png',
      '/projects/ARG/GameScreenshot3.png',
      '/projects/ARG/GameScreenshot4.png',
    ],
  },
  {
    id: 'his-life',
    title: 'His Life - Unreal Engine 5',
    video: 'https://www.youtube.com/embed/_0ek0nY1bs4',
    summary:
      'Narrative adventure puzzler where each memory unlocks a new movement system and interaction style across an open cave world.',
    role: 'Creative Director, Programmer, Environment Artist',
    team: '10',
    duration: '3 months',
    skillTags: ['Unreal Engine', 'UE5 Blueprints', 'C++'],
    highlights: [
      'Three distinct movement systems tied to narrative beats',
      'Open-world cave exploration with layered puzzle logic',
      'Directed tone and pacing to match emotional arcs',
    ],
    repo: 'https://github.com/dmwhittinghill/cgt555spr24final',
    images: [
      '/projects/HisLife/GameScreenshot1.png',
      '/projects/HisLife/GameScreenshot2.png',
      '/projects/HisLife/GameScreenshot3.png',
      '/projects/HisLife/GameScreenshot4.png',
    ],
  },
  {
    id: 'digimon-tcg',
    title: 'Unity - TCG Engine',
    video: 'https://www.youtube.com/embed/eHd1UCbCS3c',
    summary:
      'Non-commercial Digimon TCG simulation focused on modular engine design, multiplayer readiness, and automated rules.',
    role: 'Solo Developer',
    team: '1',
    duration: '8 weeks',
    skillTags: ['Unity', 'C#'],
    highlights: [
      'Online PvP-ready architecture with syncable turn logic',
      'Automated plays: digivolution chains, triggers, passives, battle resolution',
      'Data-driven card loading with scalable keyword and conditional effect system',
    ],
    repo: 'https://github.com/AyanoKen/DigimonTCG',
    images: [
      '/projects/TCG/GameScreenshot1.png',
      '/projects/TCG/GameScreenshot2.png',
      '/projects/TCG/GameScreenshot3.png',
      '/projects/TCG/GameScreenshot4.png',
    ],
  },
  {
    id: 'dexters-game',
    title: "Unreal Engine VR - Dexter's Game",
    video: 'https://www.youtube.com/embed/zGtszny-JAM',
    summary:
      'Story-driven VR escape room where tension, narrative puzzles, and time pressure layer into a horror atmosphere.',
    role: 'Solo Developer',
    team: '1',
    duration: '1 month',
    skillTags: ['Unreal Engine', 'UE5 Blueprints', 'C++', 'VR (Oculus, SteamVR)'],
    highlights: [
      'Environmental storytelling with escalating audio-visual tension',
      'Interactive puzzle logic under timed pressure',
      'Fully immersive VR escape flow tuned for dread',
    ],
    repo: 'https://github.com/AyanoKen/VREscapeRoom',
    images: [
      '/projects/VREscapeRoom/GameScreenshot1.png',
      '/projects/VREscapeRoom/GameScreenshot2.png',
      '/projects/VREscapeRoom/GameScreenshot3.png',
      '/projects/VREscapeRoom/GameScreenshot4.png',
      '/projects/VREscapeRoom/GameScreenshot5.png',
    ],
  },
  {
    id: 'echoes-of-war',
    title: 'Unity VR - Echoes of War',
    video: 'https://www.youtube.com/embed/mHBEyzFZqeY',
    summary:
      'VR museum experience reflecting on the human cost of conflict through symbolic rooms, ambience, and voiceovers.',
    role: 'Solo Developer',
    team: '1',
    duration: '6 weeks',
    skillTags: ['Unity', 'C#', 'VR (Oculus, SteamVR)'],
    highlights: [
      'Unity XR build with room-by-room narrative progression',
      'Symbolic props and soundscapes for empathy-driven pacing',
      'Games for Change-aligned design to provoke reflection',
    ],
    repo: 'https://github.com/AyanoKen/VR_Museum',
    images: [
      '/projects/VrMuseum/GameScreenshot1.png',
      '/projects/VrMuseum/GameScreenshot2.png',
      '/projects/VrMuseum/GameScreenshot3.png',
      '/projects/VrMuseum/GameScreenshot4.png',
      '/projects/VrMuseum/GameScreenshot5.png',
    ],
  },
  {
    id: 'vr-unpacking',
    title: 'Unreal Engine - VR Unpacking',
    video: 'https://www.youtube.com/embed/qxm1qLjEVRU',
    summary:
      'VR customization vignette set in a cryo-chamber, focused on tactile object interaction and personalizing sterile space.',
    role: 'Solo Developer',
    team: '1',
    duration: '1 week',
    skillTags: ['Unreal Engine', 'UE5 Blueprints', 'VR (Oculus, SteamVR)'],
    highlights: [
      'Full VR grabbing, rotation, and snap-to-fit logic',
      'Randomized item pools for varied setups',
      'Custom placement mechanics to make the chamber feel lived-in',
    ],
    repo: 'https://github.com/AyanoKen/VRUnpacking',
    images: [
      '/projects/VRUnpacking/GameScreenshot1.png',
      '/projects/VRUnpacking/GameScreenshot2.png',
      '/projects/VRUnpacking/GameScreenshot3.png',
      '/projects/VRUnpacking/GameScreenshot4.png',
      '/projects/VRUnpacking/GameScreenshot5.png',
    ],
  },
  {
    id: 'pathways',
    title: 'Unity Engine - PathWays',
    video: 'https://www.youtube.com/embed/ktMj86VMTqs',
    summary:
      'LLM-powered choose-your-own-adventure that writes and illustrates itself in real time with Leonardo AI art.',
    role: 'Tech Lead, Developer',
    team: '3',
    duration: '1 month',
    skillTags: ['Unity', 'C#'],
    highlights: [
      'Integrated GPT APIs for adaptive, branching storytelling',
      'Real-time AI artwork generation for each beat',
      'Custom UI for seamless choice navigation',
    ],
    repo: 'https://github.com/AyanoKen/Pathways',
    images: [
      '/projects/PathWays/GameScreenshot1.png',
      '/projects/PathWays/GameScreenshot2.png',
      '/projects/PathWays/GameScreenshot3.png',
      '/projects/PathWays/GameScreenshot4.png',
    ],
  },
  {
    id: 'get-out',
    title: 'Unity - Get Out',
    video: 'https://www.youtube.com/embed/LwF2nFlZP40',
    summary:
      'A brutal maze platformer packed with decoys, loops, and traps designed to break player memory and pathing.',
    role: 'Solo Developer',
    team: '1',
    duration: '2 weeks',
    skillTags: ['Unity', 'C#'],
    highlights: [
      'Large multi-path maze with misdirection and red herrings',
      'Custom enemy and trap logic with animation state machines',
      'Physics-driven 2D platforming tuned for punishment and mastery',
    ],
    repo: 'https://github.com/AyanoKen/Impossible-Maze',
    images: [
      '/projects/Maze/GameScreenshot1.png',
      '/projects/Maze/GameScreenshot2.png',
      '/projects/Maze/GameScreenshot3.png',
      '/projects/Maze/GameScreenshot4.png',
    ],
  },
  {
    id: 'budget-fallguys',
    title: 'Unreal Engine - Budget FallGuys',
    video: 'https://www.youtube.com/embed/Bzm6P4sLhBs',
    summary:
      'Chaotic obstacle course inspired by Fall Guys—built from scratch with physics-based traps and ragdoll collisions.',
    role: 'Solo Developer',
    team: '1',
    duration: '1 week',
    skillTags: ['Unreal Engine', 'UE5 Blueprints', 'C++'],
    highlights: [
      'Custom obstacle logic with physics triggers and ragdolls',
      'Third-person camera with checkpointed respawns',
      'Deliberately unfair pacing to keep runs energetic',
    ],
    repo: 'https://github.com/AyanoKen/BudgetFallguys',
    images: [
      '/projects/FallGuys/GameScreenshot1.png',
      '/projects/FallGuys/GameScreenshot2.png',
      '/projects/FallGuys/GameScreenshot3.png',
      '/projects/FallGuys/GameScreenshot4.png',
      '/projects/FallGuys/GameScreenshot5.png',
    ],
  },
  {
    id: 'forest-of-dead',
    title: 'Unity Engine - Forest of the Dead',
    video: 'https://www.youtube.com/embed/HqGPUR88oTQ',
    summary:
      'Open-world zombie survival FPS focused on ammo scarcity, stealth-or-sprint choice, and relentless AI pursuit.',
    role: 'Solo Developer',
    team: '1',
    duration: '4 weeks',
    skillTags: ['Unity', 'C#'],
    highlights: [
      'Multiple firearm systems with manual reload and scarcity tuning',
      'AI with patrols, FOV detection, and pursuit behavior',
      'Nonlinear world design that layers tension and storytelling',
    ],
    repo: 'https://github.com/AyanoKen/Forest-of-Dead',
    
  },
]

export const otherProjects = [
  {
    title: 'Bio Inspired Neural Network',
    description: 'Grey Wolf Optimizer applied to neural networks for meta-heuristic training improvements.',
    repo: 'https://github.com/AyanoKen/Bioinspired-Neural-Network',
  },
  {
    title: 'Brain Tumor Detection',
    description: 'Digital image processing + ML pipeline for tumor detection on medical imagery.',
    repo: 'https://github.com/AyanoKen/Brain-Tumor-Detection',
  },
  {
    title: 'Recommender System',
    description: 'News recommender built with NLP-driven similarity and ranking.',
    repo: 'https://github.com/AyanoKen/Recommender-System',
  },
  {
    title: 'Tsundoku',
    description: "E-magazine experience for my university's literature club.",
    repo: 'https://github.com/AyanoKen/E-Magazine',
  },
  {
    title: 'Purdue Alternate Reality Game',
    description: 'ARG marketing site for Purdue x Google AI Summit 2024.',
    repo: 'https://github.com/AyanoKen/ARG-Game',
  },
  {
    title: 'MMO Mart',
    description: 'Marketplace backend for MMO items built with Node.js and MongoDB.',
    repo: 'https://github.com/AyanoKen/MMO-Market',
  },
  {
    title: 'Nova Drift - UX Study',
    description: 'UX and UI teardown of the early access game Nova Drift.',
    repo: 'https://github.com/AyanoKen/UX-Study-NovaDrift',
  },
  {
    title: 'Weather App',
    description: 'Mobile weather forecast app built with Dart.',
    repo: 'https://github.com/AyanoKen/Weather-App',
  },
  {
    title: 'Code Vein - UX Study',
    description: 'UX analysis of Code Vein with actionable interface notes.',
    repo: 'https://github.com/AyanoKen/Code-Vein-UX-Analysis',
  },
]

export const artworks = [
  { title: 'Chess Study', media: '3D Render', image: '/artworks/chess.png' },
  { title: 'Asteroids', media: '3D Render', image: '/artworks/Astroids.png' },
  { title: 'Candlelit Study', media: '3D Render', image: '/artworks/Candles.png' },
  { title: 'Teddy Guardian', media: '3D Render', image: '/artworks/Teddy_final.png' },
  { title: 'Egypt Cat', media: '3D Render', image: '/artworks/Egyptcat.png' },
  { title: 'Leomon', media: '3D Render', image: '/artworks/Leomon2.png' },
  { title: 'Jellyfish', media: '3D Render', image: '/artworks/JellyFish.jpg' },
  { title: 'Trio Bust', media: '3D Sculpt', image: '/artworks/trio.png' },
]
