export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  /** A factual system category used by the visual index. */
  category: string;
  /** Short proof label shown in the project list. */
  signal: string;
  /** Primary language by bytes, as GitHub reports it. */
  lang: string;
  /** Last push, YYYY.MM. Shown on the card instead of a decorative counter. */
  updated: string;
  /** Featured tiles only: concrete detail to earn the extra area. */
  highlights?: string[];
  media?: {
    src: string;
    alt: string;
    position?: string;
  };
  caseStudy?: {
    problem: string;
    decision: string;
    result: string;
  };
  size: 'featured' | 'standard' | 'compact';
}

/**
 * Every entry maps to a real public repo under github.com/talhacaglar.
 * `lang` and `updated` mirror the GitHub API so the card labels stay checkable.
 */
export const projects: Project[] = [
  {
    id: 'lexis',
    name: 'Lexis',
    description:
      'AI-assisted offline dictionary with spaced repetition for words you look up.',
    tags: ['Python', 'PyQt6', 'SQLite', 'Local-first'],
    url: 'https://github.com/talhacaglar/Lexis',
    category: 'Desktop learning system',
    signal: 'Local-first / AUR',
    lang: 'Python',
    updated: '2026.07',
    media: {
      src: '/projects/lexis.webp',
      alt: 'Lexis desktop dictionary showing its local vocabulary workspace',
      position: 'center',
    },
    caseStudy: {
      problem: 'Useful dictionary tools for Turkish learners are often subscription-based or locked behind API keys.',
      decision: 'Combine open dictionaries with optional Gemini assistance and keep every saved word in local SQLite storage.',
      result: 'A keyless desktop workflow with SM-2 practice, import/export, and an AUR package for Arch Linux.',
    },
    highlights: [
      'No API key — entries come from Wiktionary, dictionaryapi.dev and Tatoeba',
      'SM-2 spaced repetition, with streaks and a 7-day activity graph',
      'Every record stays local in ~/.lexis/lexis.db. Nothing syncs',
      'Packaged on the AUR as lexis-git',
    ],
    size: 'featured',
  },
  {
    id: 'printhub',
    name: 'PrintHub',
    description:
      'Printer management with toner costs, stock tracking, Active Directory integration, and ISO 27001 reporting.',
    tags: ['Electron', 'JavaScript', 'Active Directory', 'ISO 27001'],
    url: 'https://github.com/talhacaglar/PrintHub',
    category: 'IT operations console',
    signal: 'SNMP / LDAP / RBAC',
    lang: 'JavaScript',
    updated: '2026.07',
    caseStudy: {
      problem: 'Printer health, toner stock, costs, directory access, and audit evidence live in separate operational views.',
      decision: 'Unify SNMP monitoring, LDAP access views, inventory, RBAC, and audit records in a local Electron application.',
      result: 'One panel for day-to-day printer operations with CSV and ISO 27001-oriented reporting workflows.',
    },
    size: 'standard',
  },
  {
    id: 'clar-focus',
    name: 'Clar Focus',
    description:
      'Terminal-first productivity suite: SQLite task manager, pomodoro engine, and a focus blocker that edits /etc/hosts behind recovery markers. Ships a Waybar module.',
    tags: ['Python', 'Textual', 'SQLite', 'Hyprland'],
    url: 'https://github.com/talhacaglar/Clar-Focus',
    category: 'Focus infrastructure',
    signal: 'TUI / Omarchy',
    lang: 'Python',
    updated: '2026.07',
    media: {
      src: '/projects/clar-focus.webp',
      alt: 'Clar Focus terminal dashboard with tasks, pomodoro state, and productivity statistics',
      position: 'center',
    },
    caseStudy: {
      problem: 'Tasks, focus timers, and distraction blocking were split across unrelated tools and fragile shell state.',
      decision: 'Use a SQLite service layer and reversible hosts-file markers behind one keyboard-first Textual interface.',
      result: 'A recoverable focus system that also exposes live state through the native Omarchy bar.',
    },
    size: 'standard',
  },
  {
    id: 'archsweep',
    name: 'archsweep',
    description:
      'Dependency-free TUI that cleans Arch systems — orphans, pacman and AUR caches, journal. Pure Bash, no fzf or gum. Nothing runs until you select it.',
    tags: ['Bash', 'Arch Linux', 'TUI', 'pacman'],
    url: 'https://github.com/talhacaglar/archsweep',
    category: 'System maintenance TUI',
    signal: 'Zero dependencies',
    lang: 'Shell',
    updated: '2026.06',
    size: 'compact',
  },
  {
    id: 'tarlam-cebimde',
    name: 'Tarlam Cebimde',
    description:
      'Android marketplace connecting farmers and buyers directly. Map-based listings, real-time chat, and per-kilogram price offers.',
    tags: ['Java', 'Android', 'Firebase', 'Google Maps'],
    url: 'https://github.com/talhacaglar/TarlamCebimde',
    category: 'Android marketplace',
    signal: 'Maps / Realtime',
    lang: 'Java',
    updated: '2026.05',
    size: 'compact',
  },
  {
    id: 'tui-translator',
    name: 'TUI Anlık Çevirmen',
    description:
      'A small terminal interface for translation without leaving the shell. Uses DeepL.',
    tags: ['Python', 'TUI', 'DeepL'],
    url: 'https://github.com/talhacaglar/TUI-Anlik-Cevirmen',
    category: 'Terminal utility',
    signal: 'DeepL / Textual',
    lang: 'Python',
    updated: '2026.07',
    media: {
      src: '/projects/translator.webp',
      alt: 'TUI Anlik Cevirmen terminal interface in its dark theme',
      position: 'center',
    },
    size: 'compact',
  },
  {
    id: 'dotfiles',
    name: 'Dotfiles',
    description:
      'My Arch Linux and Hyprland setup — Waybar, Neovim, Fish, Ghostty, plus full system backup and restore scripts.',
    tags: ['Arch Linux', 'Hyprland', 'Neovim', 'Shell'],
    url: 'https://github.com/talhacaglar/dotfiles',
    category: 'Desktop system',
    signal: 'Arch / Hyprland',
    lang: 'Shell',
    updated: '2026.08',
    size: 'compact',
  },
];
