export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** Issue date as printed on the certificate. */
  date: string;
  /** Verification link, where the issuer offers one. */
  url?: string;
  credentialId?: string;
  thumbnail: string;
}

/** Newest first — the section renders them in array order. */
export const certifications: Certification[] = [
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
    thumbnail: '/certs/cisco-networking-preview.jpg',
  },
];
