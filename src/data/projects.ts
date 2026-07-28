export interface Project {
  name: string;
  url: string;
  tags: string[];
  description: { tr: string; en: string };
}

// Yeni bir proje eklemek için bu diziye aynı şekilde bir obje ekle.
export const projects: Project[] = [
  {
    name: 'Lexis',
    url: 'https://github.com/talhacaglar/Lexis',
    tags: ['Python', 'PyQt6', 'SQLite', 'Local-first'],
    description: {
      tr: 'Yapay zeka destekli, çevrimdışı çalışan kişisel sözlük uygulaması. Aralıklı tekrar sistemiyle öğrendiğin kelimeleri kalıcı hale getirir.',
      en: 'An AI-assisted, offline-first personal dictionary. Spaced repetition turns the words you look up into words you keep.',
    },
  },
  {
    name: 'PrintHub',
    url: 'https://github.com/talhacaglar/PrintHub',
    tags: ['Electron', 'JavaScript', 'Active Directory', 'ISO 27001'],
    description: {
      tr: 'Kurumsal ağ yazıcılarını tek yerden yöneten masaüstü uygulaması: toner maliyeti takibi, stok yönetimi, Active Directory entegrasyonu ve ISO 27001 uyum raporlaması.',
      en: 'A desktop app for managing networked office printers in one place: toner cost tracking, stock management, Active Directory integration, and ISO 27001 compliance reporting.',
    },
  },
  {
    name: 'TUI Anlık Çevirmen',
    url: 'https://github.com/talhacaglar/TUI-Anlik-Cevirmen',
    tags: ['Python', 'TUI', 'DeepL'],
    description: {
      tr: 'Terminalden çıkmadan çeviri yapmak için yazılmış hafif bir TUI uygulaması. DeepL üzerinden anlık Türkçe çeviri sağlar.',
      en: 'A lightweight terminal UI for translating without leaving the shell. Instant Turkish translation through DeepL.',
    },
  },
];
