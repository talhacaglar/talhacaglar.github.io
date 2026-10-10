export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  /** A factual system category used by the visual index. */
  category: string;
  /** Short technical label shown in the project list. */
  signal: string;
  /** Primary implementation language of the source. */
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
      'Local-first, AI-assisted dictionary and language-learning app: context, tone, examples, Turkish translations and spaced repetition.',
    tags: ['Python', 'PyQt6', 'Gemini', 'SQLite'],
    url: 'https://github.com/talhacaglar/Lexis',
    category: 'Desktop learning system',
    signal: 'Local-first / AUR',
    lang: 'Python',
    updated: '2026.09',
    media: {
      src: '/projects/lexis.webp',
      alt: 'Lexis vocabulary library with search, learning states, and nine sample entries',
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
    updated: '2026.09',
    caseStudy: {
      problem: 'Printer health, toner stock, costs, directory access, and audit evidence live in separate operational views.',
      decision: 'Unify SNMP monitoring, LDAP access views, inventory, RBAC, and audit records in a local Electron application.',
      result: 'One panel for day-to-day printer operations with CSV and ISO 27001-oriented reporting workflows.',
    },
    size: 'standard',
  },
  {
    id: 'omarchy-focus',
    name: 'Omarchy Focus',
    description:
      'Pomodoro timer, task queue and a reversible site blocker for Omarchy: a native bar widget, a Textual terminal app and a CLI sharing one local SQLite database.',
    tags: ['Python', 'Textual', 'QML', 'SQLite'],
    url: 'https://github.com/talhacaglar/omarchy-focus',
    category: 'Focus infrastructure',
    signal: 'Bar widget / AUR',
    lang: 'Python',
    updated: '2026.10',
    media: {
      src: '/projects/clar-focus.webp',
      alt: 'Focus dashboard showing the next task and a queue of sample tasks',
      position: 'center',
    },
    caseStudy: {
      problem: 'Tasks, focus timers, and distraction blocking were split across unrelated tools and fragile shell state.',
      decision: 'Use a SQLite service layer and reversible, marked /etc/hosts blocks with crash recovery behind a keyboard-first interface.',
      result: 'A recoverable focus system with a live Omarchy Shell bar widget, heatmap statistics and an AUR package.',
    },
    highlights: [
      'Native Omarchy Shell widget with a live countdown; no polling, it watches a change file with inotify',
      'Site guard asks for elevation through the polkit dialog, with strict mode and crash recovery',
      'Daily goal, streaks and a GitHub-style heatmap in the panel, the TUI and the CLI',
      'Packaged on the AUR as omarchy-focus',
    ],
    size: 'standard',
  },
  {
    id: 'rv32i',
    name: 'RV32I Toolchain',
    description:
      'Assembler and linker for RV32I programs written in C, with object files, symbol resolution, relocations, PicoRV32-oriented memory output and a Flask interface.',
    tags: ['C', 'RISC-V', 'Flask', 'PicoRV32'],
    url: 'https://github.com/talhacaglar/rv32i-assembler-linker',
    category: 'Low-level toolchain',
    signal: 'Assembler / Linker',
    lang: 'C',
    updated: '2026.09',
    size: 'compact',
  },
  {
    id: 'notion-dictionary',
    name: 'Notion Dictionary',
    description:
      'Terminal workflow that asks Gemini for a word’s meaning and an example sentence as JSON, then sends it through an ActivePieces webhook into Notion.',
    tags: ['Python', 'Gemini', 'ActivePieces', 'Notion'],
    url: 'https://github.com/talhacaglar/notion-dictionary-automation',
    category: 'AI automation',
    signal: 'Gemini / Webhook',
    lang: 'Python',
    updated: '2026.09',
    size: 'compact',
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
    updated: '2026.09',
    size: 'compact',
  },
  {
    id: 'tarlam-cebimde',
    name: 'PocketFarm',
    description:
      'Android marketplace connecting farmers and buyers directly. Map-based listings, real-time chat, and per-kilogram price offers.',
    tags: ['Java', 'Android', 'Firebase', 'Google Maps'],
    url: 'https://github.com/talhacaglar/PocketFarm',
    category: 'Android marketplace',
    signal: 'Maps / Realtime',
    lang: 'Java',
    updated: '2026.09',
    size: 'compact',
  },
  {
    id: 'tui-translator',
    name: 'DTR · Instant Translator',
    description:
      'A small terminal interface for translation without leaving the shell. Uses DeepL.',
    tags: ['Python', 'TUI', 'DeepL'],
    url: 'https://github.com/talhacaglar/tui-translator',
    category: 'Terminal utility',
    signal: 'DeepL / Textual',
    lang: 'Python',
    updated: '2026.09',
    media: {
      src: '/projects/translator.webp',
      alt: 'DTR translating English into Turkish with source and target language selectors',
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
    updated: '2026.09',
    size: 'compact',
  },
];
