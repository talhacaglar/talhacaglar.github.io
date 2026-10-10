export interface Role {
  id: string;
  company: string;
  role: string;
  /** As printed on the record, including the run length. */
  date: string;
  location?: string;
  /** One or two factual sentences, mirrored from the LinkedIn record. */
  summary?: string;
  current?: boolean;
}

/** Most recent first. */
export const roles: Role[] = [
  {
    id: 'ptt-kule',
    company: 'PTT KULE AŞ.',
    role: 'IT Intern',
    date: 'August 11, 2026 — September 10, 2026',
    location: 'İstanbul, Türkiye · On-site',
    summary:
      'Troubleshot physical and software issues across the large-scale IT infrastructure of Çamlıca Tower: camera-to-switch links, network equipment, cabling, device connectivity and on-site faults.',
  },
  {
    id: 'isbir',
    company: 'İşbir Sentetik Dokuma Sanayi A.Ş.',
    role: 'IT Intern',
    date: 'July 2026 — August 10, 2026',
    location: 'Balıkesir, Türkiye · On-site',
    summary:
      'Built PrintHub, an Active Directory-integrated printer and toner management tool, supporting inventory and reporting workflows oriented toward ISO 27001.',
  },
  {
    id: 'siber-vatan',
    company: 'Siber Vatan',
    role: 'Student',
    date: 'December 2025 — March 2026 · 4 months',
    location: 'Sakarya, Türkiye',
    summary:
      'Completed the four-month Siber Vatan cyber security program: hands-on, CTF-oriented work in network and web security, vulnerability analysis and security fundamentals.',
  },
  {
    id: 'ema-security',
    company: 'EMA Security LTD',
    role: 'Cyber Security Intern · Red Team',
    date: 'October 2025 — March 2026 · 6 months',
    location: 'Remote',
    summary:
      'Six-month Red Team internship focused on authorized web security testing, vulnerability analysis and OWASP Top 10, including documenting and communicating findings.',
  },
];

export const education = {
  school: 'Sakarya Uygulamalı Bilimler Üniversitesi',
  degree: "Bachelor's Degree, Computer Engineering",
  date: 'October 2023 — June 2027',
};
