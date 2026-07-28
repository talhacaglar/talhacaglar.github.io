export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Kimlik doğrulama linki varsa (LinkedIn, Credly vb.) */
  url?: string;
  /** Kısa açıklama isteğe bağlı — boş bırakılırsa kart yalnızca başlık/kurum gösterir */
  credentialId?: string;
  thumbnail?: string;
}

// Yeni bir sertifika eklemek için bu diziye aynı şekilde bir obje ekle.
// En yeni sertifika en üstte durur (kartlar dizi sırasıyla render edilir).
export const certifications: Certification[] = [
  {
    name: 'Certified Web Security Expert (CWSE)',
    issuer: 'Hackviser',
    date: 'Feb 2026',
    url: 'https://hackviser.com/verify?id=HV-CWSE-ZNKC7QAY',
    credentialId: 'HV-CWSE-ZNKC7QAY',
    thumbnail: '/certs/cwse-preview.jpg',
  },
  {
    name: 'Certified Associate Penetration Tester (CAPT)',
    issuer: 'Hackviser',
    date: 'Oct 2025',
    url: 'https://hackviser.com/verify?id=HV-CAPT-2U0W5XSE',
    credentialId: 'HV-CAPT-2U0W5XSE',
    thumbnail: '/certs/capt-preview.jpg',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Aug 2025',
    thumbnail: '/certs/cisco-networking-preview.jpg',
  },
];
