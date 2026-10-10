export interface FocusArea {
  id: string;
  title: string;
  summary: string;
  /** Each item points at a record elsewhere on the page or at public source. */
  evidence: { label: string; detail: string; href: string }[];
}

export const focusAreas: FocusArea[] = [
  {
    id: 'security',
    title: 'Cyber security',
    summary:
      'Authorized web security testing, vulnerability analysis and OWASP Top 10, practiced through a Red Team internship and the Siber Vatan program.',
    evidence: [
      { label: 'EMA Security', detail: 'Red Team internship · 6 months', href: '#experience' },
      { label: 'Siber Vatan', detail: 'CTF-oriented program · 2026', href: '#experience' },
      { label: 'CWSE · CAPT', detail: 'Hackviser certifications', href: '#certifications' },
    ],
  },
  {
    id: 'ai',
    title: 'AI-assisted tools',
    summary:
      'Applications and automations that put language models to practical use while keeping data local and integration boundaries explicit.',
    evidence: [
      { label: 'Lexis', detail: 'Gemini-assisted dictionary', href: 'https://github.com/talhacaglar/Lexis' },
      {
        label: 'Notion Dictionary',
        detail: 'Gemini → webhook → Notion',
        href: 'https://github.com/talhacaglar/notion-dictionary-automation',
      },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & applications',
    summary:
      'Linux desktop software, IT infrastructure and low-level tooling, from bar widgets and terminal apps to directory-integrated operations and an RV32I toolchain.',
    evidence: [
      { label: 'Omarchy Focus', detail: 'Bar widget, TUI and CLI', href: 'https://github.com/talhacaglar/omarchy-focus' },
      { label: 'PrintHub', detail: 'Active Directory · ISO 27001', href: 'https://github.com/talhacaglar/PrintHub' },
      { label: 'RV32I Toolchain', detail: 'Assembler and linker in C', href: 'https://github.com/talhacaglar/rv32i-assembler-linker' },
    ],
  },
];
