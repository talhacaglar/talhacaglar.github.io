export interface Role {
  id: string;
  company: string;
  role: string;
  /** As printed on the record, including the run length. */
  date: string;
  location?: string;
  current?: boolean;
}

/** Most recent first. */
export const roles: Role[] = [
  {
    id: 'isbir',
    company: 'İşbir Sentetik Dokuma Sanayi A.Ş.',
    role: 'IT Intern',
    date: 'July 2026 — Present',
    current: true,
  },
  {
    id: 'ptt-kule',
    company: 'PTT KULE AŞ.',
    role: 'IT Intern',
    date: 'August 11, 2026 — September 7, 2026 · 4 weeks',
  },
  {
    id: 'siber-vatan',
    company: 'Siber Vatan',
    role: 'Student',
    date: 'December 2025 — March 2026 · 4 months',
    location: 'Sakarya, Türkiye',
  },
  {
    id: 'ema-security',
    company: 'EMA Security LTD',
    role: 'Cyber Security Intern · Red Team Intern',
    date: 'October 2025 — March 2026 · 6 months',
  },
];

export const education = {
  school: 'Sakarya Uygulamalı Bilimler Üniversitesi',
  degree: "Bachelor's Degree, Computer Engineering",
  date: 'October 2023 — June 2027',
};
