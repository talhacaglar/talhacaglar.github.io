export interface Certification {
  id: string;
  name: string;
  detail: string;
  /** YYYY.MM, as on the CV. */
  date: string;
  /** Verification link from the issuer. */
  url: string;
}

/** Newest first. */
export const certifications: Certification[] = [
  {
    id: "siber-vatan-2026",
    name: "Türkiye Siber Vatan Program 2026",
    detail: "Certificate of participation",
    date: "2026.03",
    url: "https://drdogrulama.sanayi.gov.tr/tr/verify/32735234861993/",
  },
  {
    id: "cwse",
    name: "CWSE, Certified Web Security Expert",
    detail: "Hackviser · HV-CWSE-ZNKC7QAY",
    date: "2026.02",
    url: "https://hackviser.com/verify?id=HV-CWSE-ZNKC7QAY",
  },
  {
    id: "capt",
    name: "CAPT, Certified Associate Penetration Tester",
    detail: "Hackviser · HV-CAPT-2U0W5XSE",
    date: "2025.10",
    url: "https://hackviser.com/verify?id=HV-CAPT-2U0W5XSE",
  },
  {
    id: "teknofest-2024",
    name: "TEKNOFEST 2024 Robolig, Finalist",
    detail: "University level · Team AllSpark · interface design",
    date: "2024.10",
    url: "https://drdogrulama.sanayi.gov.tr/tr/verify/88821725841029/",
  },
];
