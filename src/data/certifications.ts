export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** Issue date as printed on the certificate. */
  date: string;
  /** Verification link, where the issuer offers one. */
  url?: string;
  credentialId?: string;
  /** Certificate preview. Without one, the card renders a typographic document frame. */
  thumbnail?: string;
}

/** Newest first — the section renders them in array order. */
export const certifications: Certification[] = [
  {
    id: 'siber-vatan-2026',
    name: 'Türkiye Siber Vatan Program 2026',
    issuer: 'Siber Vatan',
    date: 'Jun 2026',
    url: 'https://drdogrulama.sanayi.gov.tr/tr/verify/32735234861993/',
    credentialId: '32735234861993',
    thumbnail: '/certs/siber-vatan-preview.jpg',
  },
  {
    id: 'cwse',
    name: 'Certified Web Security Expert',
    issuer: 'Hackviser',
    date: 'Feb 2026',
    url: 'https://hackviser.com/verify?id=HV-CWSE-ZNKC7QAY',
    credentialId: 'HV-CWSE-ZNKC7QAY',
    thumbnail: '/certs/cwse-preview.jpg',
  },
  {
    id: 'capt',
    name: 'Certified Associate Penetration Tester',
    issuer: 'Hackviser',
    date: 'Oct 2025',
    url: 'https://hackviser.com/verify?id=HV-CAPT-2U0W5XSE',
    credentialId: 'HV-CAPT-2U0W5XSE',
    thumbnail: '/certs/capt-preview.jpg',
  },
  {
    id: 'cisco-networking',
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Aug 2025',
    url: 'https://www.credly.com/badges/282ce09e-2a2f-4b44-9e28-52516f78225d',
    thumbnail: '/certs/cisco-networking-preview.jpg',
  },
  {
    id: 'teknofest-2024',
    name: 'TEKNOFEST 2024 Robolig Finalist',
    issuer: 'TEKNOFEST',
    date: 'Oct 2024',
    url: 'https://drdogrulama.sanayi.gov.tr/tr/verify/88821725841029/',
    credentialId: '88821725841029',
    thumbnail: '/certs/teknofest-preview.jpg',
  },
];
