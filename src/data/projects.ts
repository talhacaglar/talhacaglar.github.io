export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  /** Primary language by bytes, as GitHub reports it. */
  lang: string;
  /** Last push, YYYY.MM. Shown on the card instead of a decorative counter. */
  updated: string;
  /** Featured tiles only: concrete detail to earn the extra area. */
  highlights?: string[];
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
      'AI-assisted offline dictionary with spaced repetition. Learn words you look up, permanently.',
    tags: ['Python', 'PyQt6', 'SQLite', 'Local-first'],
    url: 'https://github.com/talhacaglar/Lexis',
    lang: 'Python',
    updated: '2026.07',
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
      'Enterprise printer management with toner cost tracking, stock management, Active Directory integration, and ISO 27001 compliance reporting.',
    tags: ['Electron', 'JavaScript', 'Active Directory', 'ISO 27001'],
    url: 'https://github.com/talhacaglar/PrintHub',
    lang: 'JavaScript',
    updated: '2026.07',
    size: 'standard',
  },
  {
    id: 'clar-focus',
    name: 'Clar Focus',
    description:
      'Terminal-first productivity suite: SQLite task manager, pomodoro engine, and a focus blocker that edits /etc/hosts behind recovery markers. Ships a Waybar module.',
    tags: ['Python', 'Textual', 'SQLite', 'Hyprland'],
    url: 'https://github.com/talhacaglar/Clar-Focus',
    lang: 'Python',
    updated: '2026.07',
    size: 'standard',
  },
  {
    id: 'archsweep',
    name: 'archsweep',
    description:
      'Dependency-free TUI that cleans Arch systems — orphans, pacman and AUR caches, journal. Pure Bash, no fzf or gum. Nothing runs until you select it.',
    tags: ['Bash', 'Arch Linux', 'TUI', 'pacman'],
    url: 'https://github.com/talhacaglar/archsweep',
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
    lang: 'Java',
    updated: '2026.05',
    size: 'compact',
  },
  {
    id: 'tui-translator',
    name: 'TUI Anlık Çevirmen',
    description:
      'Lightweight terminal UI for instant translation without leaving the shell. Powered by DeepL.',
    tags: ['Python', 'TUI', 'DeepL'],
    url: 'https://github.com/talhacaglar/TUI-Anlik-Cevirmen',
    lang: 'Python',
    updated: '2026.07',
    size: 'compact',
  },
  {
    id: 'dotfiles',
    name: 'Dotfiles',
    description:
      'My Arch Linux and Hyprland setup — Waybar, Neovim, Fish, Ghostty, plus full system backup and restore scripts.',
    tags: ['Arch Linux', 'Hyprland', 'Neovim', 'Shell'],
    url: 'https://github.com/talhacaglar/dotfiles',
    lang: 'Shell',
    updated: '2026.08',
    size: 'compact',
  },
];
