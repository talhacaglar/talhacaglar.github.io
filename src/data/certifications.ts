export interface Certification {
  id: string;
  name: string;
  detail: string;
  /** YYYY.MM, as on the CV. */
  date: string;
  /** Verification link from the issuer, where there is one. */
  url?: string;
  /** The certificate files themselves, for issuers with no verification page. The first one is the main link. */
  files?: { label: string; href: string }[];
  /** The certificate itself, landscape. */
  image: { src: string; alt: string };
}

/** Newest first. */
export const certifications: Certification[] = [
  {
    id: "siber-vatan-2026",
    name: "Türkiye Siber Vatan Program 2026",
    detail: "Certificate of participation",
    date: "2026.03",
    url: "https://drdogrulama.sanayi.gov.tr/tr/verify/32735234861993/",
    image: { src: "/certs/siber-vatan-preview.jpg", alt: "Türkiye Siber Vatan Program 2026 certificate of participation" },
  },
  {
    id: "cwse",
    name: "CWSE, Certified Web Security Expert",
    detail: "Hackviser · HV-CWSE-ZNKC7QAY",
    date: "2026.02",
    url: "https://hackviser.com/verify?id=HV-CWSE-ZNKC7QAY",
    image: { src: "/certs/cwse-preview.jpg", alt: "Hackviser CWSE certificate" },
  },
  {
    id: "capt",
    name: "CAPT, Certified Associate Penetration Tester",
    detail: "Hackviser · HV-CAPT-2U0W5XSE",
    date: "2025.10",
    url: "https://hackviser.com/verify?id=HV-CAPT-2U0W5XSE",
    image: { src: "/certs/capt-preview.jpg", alt: "Hackviser CAPT certificate" },
  },
  {
    id: "dijital-genc-deep-learning",
    name: "Deep Learning for Image Processing",
    detail: "Dijital Genç AI Ecosystem, Presidency of Türkiye Digital Transformation Office",
    date: "2024.10",
    files: [
      { label: "pdf", href: "/certs/dijital-genc-deep-learning-achievement.pdf" },
      { label: "participation", href: "/certs/dijital-genc-deep-learning-participation.pdf" },
    ],
    image: {
      src: "/certs/dijital-genc-deep-learning-preview.jpg",
      alt: "Dijital Genç certificate of achievement for Deep Learning for Image Processing",
    },
  },
  {
    id: "dijital-genc-machine-learning",
    name: "Machine Learning",
    detail: "Dijital Genç AI Ecosystem, Presidency of Türkiye Digital Transformation Office",
    date: "2024.10",
    files: [
      { label: "pdf", href: "/certs/dijital-genc-machine-learning-achievement.pdf" },
      { label: "participation", href: "/certs/dijital-genc-machine-learning-participation.pdf" },
    ],
    image: {
      src: "/certs/dijital-genc-machine-learning-preview.jpg",
      alt: "Dijital Genç certificate of achievement for Machine Learning",
    },
  },
  {
    id: "teknofest-2024",
    name: "TEKNOFEST 2024 Robolig, Finalist",
    detail: "University level · Team AllSpark · interface design",
    date: "2024.10",
    url: "https://drdogrulama.sanayi.gov.tr/tr/verify/88821725841029/",
    image: { src: "/certs/teknofest-preview.jpg", alt: "TEKNOFEST 2024 Robolig finalist certificate" },
  },
];
