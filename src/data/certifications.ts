export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Kimlik doğrulama linki varsa (LinkedIn, Credly vb.) */
  url?: string;
  /** Kısa açıklama isteğe bağlı — boş bırakılırsa kart yalnızca başlık/kurum gösterir */
  credentialId?: string;
}

// Yeni bir sertifika eklemek için bu diziye aynı şekilde bir obje ekle.
// En yeni sertifika en üstte durur (kartlar dizi sırasıyla render edilir).
export const certifications: Certification[] = [];
