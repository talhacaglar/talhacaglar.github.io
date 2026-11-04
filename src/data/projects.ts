export type SketchName = "akilli-ekstre" | "short-video" | "clarsec";

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  /** Public repository. Private projects have no link to show. */
  url?: string;
  /** Shown when there is no public repository. */
  status?: "private repo" | "in development";
  /** AUR package name, where one exists. */
  aur?: string;
  /** A real application screenshot, 16:9. */
  image?: { src: string; alt: string };
  /** Private projects show how the system works in place of a screenshot. */
  sketch?: SketchName;
}

/** The home page grid. AI projects first, then the desktop apps on the AUR. */
export const featuredProjects: Project[] = [
  {
    id: "akilli-ekstre",
    name: "Akıllı Ekstre",
    description:
      "Bank statement analyzer. Calculations stay in deterministic code, and an optional LLM explains them by choosing from approved copy, so it writes no numbers or free text.",
    stack: ["Python", "FastAPI", "Pydantic", "OpenAI API", "Next.js"],
    status: "private repo",
    sketch: "akilli-ekstre",
  },
  {
    id: "short-video",
    name: "Short Video Automation",
    description:
      "Turns a topic into a voiced, captioned vertical video, and a long video into short clips an LLM selects from the transcript. Three providers sit behind one layer.",
    stack: ["Python", "Gemini", "Claude", "OpenRouter", "faster-whisper", "FFmpeg"],
    status: "private repo",
    sketch: "short-video",
  },
  {
    id: "clarsec",
    name: "ClarSec",
    description:
      "Terminal assistant that parses saved Nmap output into rule-based findings. Optional LLM analysis has to pass typed JSON validation and exact evidence matching.",
    stack: ["Python", "Typer", "Pydantic", "httpx", "pytest"],
    status: "in development",
    sketch: "clarsec",
  },
  {
    id: "lexis",
    name: "Lexis",
    description:
      "Local-first dictionary app with SM-2 spaced repetition. Optional Gemini assistance returns JSON against a Pydantic schema, with backoff retries.",
    stack: ["Python", "PyQt6", "Gemini", "SQLite"],
    url: "https://github.com/talhacaglar/Lexis",
    aur: "lexis-git",
    image: {
      src: "/projects/lexis.webp",
      alt: "Lexis vocabulary library with search, filters and nine sample words",
    },
  },
  {
    id: "omarchy-focus",
    name: "Omarchy Focus",
    description:
      "Pomodoro timer, task queue and site blocker for Omarchy, with a native bar widget, a TUI and a CLI sharing one SQLite database.",
    stack: ["Python", "Textual", "QML", "SQLite"],
    url: "https://github.com/talhacaglar/omarchy-focus",
    aur: "omarchy-focus",
    image: {
      src: "/projects/omarchy-focus.webp",
      alt: "Omarchy Focus terminal dashboard with the next task and a queue of sample tasks",
    },
  },
  {
    id: "pritingo",
    name: "Pritingo",
    description:
      "Print on Canon PIXMA E400-series printers from Linux: one page per job so nothing gets dropped, with guided two-sided printing.",
    stack: ["C++", "Qt", "QML"],
    url: "https://github.com/talhacaglar/pritingo",
    aur: "pritingo",
    image: {
      src: "/projects/pritingo.webp",
      alt: "Pritingo planning a five-page document onto three two-sided sheets",
    },
  },
  {
    id: "ceviribro",
    name: "ceviribro",
    description: "Keyboard-first terminal translator powered by DeepL.",
    stack: ["Python", "Textual", "DeepL"],
    url: "https://github.com/talhacaglar/ceviribro",
    aur: "ceviribro",
    image: {
      src: "/projects/ceviribro.webp",
      alt: "ceviribro translating an English sentence into Turkish in the terminal",
    },
  },
  {
    id: "stretch-buddies",
    name: "Stretch Buddies",
    description:
      "Stardew-style stretch breaks for Omarchy. Rigo, Mochi and Porcini pop up every 20 minutes and lead a one-minute neck and back stretch.",
    stack: ["QML"],
    url: "https://github.com/talhacaglar/stretch-buddies",
    image: {
      src: "/projects/stretch-buddies.webp",
      alt: "Stretch Buddies dialog with a pixel-art character leading a seated twist",
    },
  },
];

/** Listed on /projects only. */
export const otherProjects: Project[] = [
  {
    id: "notion-dictionary",
    name: "Notion Dictionary Automation",
    description:
      "Terminal workflow that asks Gemini for a word's meaning and an example sentence as JSON, then sends it through an ActivePieces webhook into Notion.",
    stack: ["Python", "Gemini", "ActivePieces"],
    url: "https://github.com/talhacaglar/notion-dictionary-automation",
  },
  {
    id: "printhub",
    name: "PrintHub",
    description:
      "Printer and toner management with Active Directory integration, SNMP device discovery, LDAP access, role-based permissions and audit logs. Built during my İşbir internship.",
    stack: ["Electron", "Express", "SQLite"],
    url: "https://github.com/talhacaglar/PrintHub",
  },
  {
    id: "archsweep",
    name: "archsweep",
    description:
      "Dependency-free TUI in pure Bash that cleans Arch systems: orphans, pacman and AUR caches, journal. Nothing runs until you select it.",
    stack: ["Bash"],
    url: "https://github.com/talhacaglar/archsweep",
  },
  {
    id: "rv32i",
    name: "RV32I Toolchain",
    description:
      "Assembler and linker for RV32I programs written in C, with object files, symbol resolution, relocations, PicoRV32-oriented memory output and a Flask interface.",
    stack: ["C", "RISC-V", "Flask"],
    url: "https://github.com/talhacaglar/rv32i-assembler-linker",
  },
  {
    id: "pocketfarm",
    name: "PocketFarm",
    description:
      "Android marketplace connecting farmers and buyers directly, with map-based listings, real-time chat and per-kilogram price offers.",
    stack: ["Java", "Android", "Firebase"],
    url: "https://github.com/talhacaglar/PocketFarm",
  },
  {
    id: "dotfiles",
    name: "Dotfiles",
    description: "My Arch Linux and Hyprland setup, with full system backup and restore scripts.",
    stack: ["Shell"],
    url: "https://github.com/talhacaglar/dotfiles",
  },
];

export const projectCount = featuredProjects.length + otherProjects.length;
