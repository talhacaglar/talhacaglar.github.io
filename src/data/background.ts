export interface Role {
  id: string;
  company: string;
  role: string;
  /** YYYY.MM range. */
  date: string;
  summary?: string;
}

/** Most recent first. Mirrors the current CV. */
export const roles: Role[] = [
  {
    id: "ptt-kule",
    company: "PTT KULE A.Ş.",
    role: "IT Intern · Çamlıca Tower, İstanbul",
    date: "2026.08 – 2026.09",
    summary:
      "Helped troubleshoot faults across the IT infrastructure and resolved connectivity issues for VLAN/PoE IP cameras.",
  },
  {
    id: "isbir",
    company: "İşbir Sentetik Dokuma Sanayi A.Ş.",
    role: "IT Intern · Balıkesir",
    date: "2026.07 – 2026.08",
    summary:
      "Built PrintHub, an Active Directory-integrated printer and toner management tool, with SNMP device discovery, LDAP access, role-based permissions and audit logs.",
  },
  {
    id: "ema-security",
    company: "EMA Security LTD",
    role: "Cyber Security Intern (Red Team) · Remote",
    date: "2025.10 – 2026.03",
    summary:
      "Performed authorized web security testing and OWASP Top 10 vulnerability analysis, then validated and reported the findings.",
  },
  {
    id: "subu",
    company: "Sakarya University of Applied Sciences",
    role: "B.Sc. in Computer Engineering, 4th year",
    date: "2023.10 – 2027.06 expected",
  },
];
