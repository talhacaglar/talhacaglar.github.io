export type Lang = 'tr' | 'en';

export const translations = {
  tr: {
    'meta.title': 'Talha Çağlar — Güvenlik & Sistemler',
    'meta.description':
      'Güvenlik ve sistemlerin kesiştiği yerde çalışıyorum. Linux araçları, otomasyon ve gerçek kullanımda temiz kalan yazılımlar.',

    'nav.about': 'Hakkımda',
    'nav.skills': 'Yetkinlikler',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    'nav.langLabel': 'Dili değiştir',

    'hero.eyebrow': 'Güvenlik & Sistemler',
    'hero.title': 'Talha Çağlar',
    'hero.subtitle':
      'Güvenlik ve sistemlerin kesiştiği yerde çalışıyorum. Linux araçları, otomasyon ve gerçek kullanımda temiz kalan yazılımlar.',
    'hero.ctaPrimary': 'Projelere göz at',
    'hero.ctaSecondary': 'İletişime geç',
    'hero.scroll': 'Aşağı kaydır',

    'about.label': 'Hakkımda',
    'about.title': 'Sadelik bir tercih, kısıtlama değil.',
    'about.p1':
      'Siber güvenlik ve sistem programlamaya odaklanıyorum. İşimin büyük kısmı Linux üzerinde geçiyor: araç yazmak, tekrar eden işleri otomatikleştirmek ve altyapıyı anlaşılır tutmak.',
    'about.p2':
      'Öğrenme biçimim gerçek şeyler inşa etmek. Bir problemi çözerken en az parça ile ilerlemeyi, karmaşıklık eklemek yerine kaldırmayı tercih ederim. Yazdığım yazılımın aylar sonra da okunabilir olması benim için performans kadar önemli.',
    'about.p3':
      'Şu an ilgi alanlarım: güvenlik otomasyonu, masaüstü Linux araçları ve yerel-öncelikli (local-first) uygulamalar.',

    'about.stat1.value': '15+',
    'about.stat1.label': 'Açık kaynak proje',
    'about.stat2.value': 'Arch',
    'about.stat2.label': 'Günlük sürücü',
    'about.stat3.value': '6+',
    'about.stat3.label': 'Aktif dil',

    'skills.label': 'Yetkinlikler',
    'skills.title': 'Kullandığım araçlar',
    'skills.subtitle':
      'Alışkanlıktan değil, ihtiyaç duyduğum için kullandığım teknolojiler.',
    'skills.cat1': 'Diller',
    'skills.cat2': 'Uygulama & Veri',
    'skills.cat3': 'Sistem & Ortam',

    'projects.label': 'Projeler',
    'projects.title': 'Üzerinde çalıştıklarım',
    'projects.subtitle':
      'Gerçek bir ihtiyaçtan doğan, kullanılmak üzere yazılmış projeler.',
    'projects.viewAll': 'GitHub’da tümünü gör',
    'projects.viewRepo': 'Depoyu görüntüle',

    'contact.label': 'İletişim',
    'contact.title': 'Bir fikrin mi var?',
    'contact.subtitle':
      'Güvenlik, Linux araçları veya birlikte çalışabileceğimiz bir şey hakkında yazabilirsin.',
    'contact.email': 'E-posta gönder',

    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.built': 'Astro ile yapıldı.',
  },
  en: {
    'meta.title': 'Talha Çağlar — Security & Systems',
    'meta.description':
      'I work in the space between security and systems — Linux tooling, automation, and software that stays clean under real use.',

    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.langLabel': 'Switch language',

    'hero.eyebrow': 'Security & Systems',
    'hero.title': 'Talha Çağlar',
    'hero.subtitle':
      'I work in the space between security and systems — Linux tooling, automation, and software that stays clean under real use.',
    'hero.ctaPrimary': 'View projects',
    'hero.ctaSecondary': 'Get in touch',
    'hero.scroll': 'Scroll',

    'about.label': 'About',
    'about.title': 'Restraint is a choice, not a limitation.',
    'about.p1':
      'I focus on cybersecurity and systems programming. Most of my work happens on Linux: writing tools, automating repetitive work, and keeping infrastructure understandable.',
    'about.p2':
      'I learn by building real things. When solving a problem I prefer the fewest moving parts, and removing complexity over adding it. Code that still reads well months later matters to me as much as performance.',
    'about.p3':
      'Currently interested in: security automation, desktop Linux tooling, and local-first applications.',

    'about.stat1.value': '15+',
    'about.stat1.label': 'Open source projects',
    'about.stat2.value': 'Arch',
    'about.stat2.label': 'Daily driver',
    'about.stat3.value': '6+',
    'about.stat3.label': 'Active languages',

    'skills.label': 'Skills',
    'skills.title': 'Tools of trade',
    'skills.subtitle':
      'Technologies I reach for because I need them, not out of habit.',
    'skills.cat1': 'Languages',
    'skills.cat2': 'Apps & Data',
    'skills.cat3': 'Systems & Environment',

    'projects.label': 'Projects',
    'projects.title': 'What I’ve been building',
    'projects.subtitle':
      'Projects that came out of a real need and were written to be used.',
    'projects.viewAll': 'See everything on GitHub',
    'projects.viewRepo': 'View repository',

    'contact.label': 'Contact',
    'contact.title': 'Have something in mind?',
    'contact.subtitle':
      'Write to me about security, Linux tooling, or anything we could build together.',
    'contact.email': 'Send an email',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro.',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['tr'];

export const DEFAULT_LANG: Lang = 'tr';
