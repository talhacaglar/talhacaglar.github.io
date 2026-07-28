import { translations, DEFAULT_LANG } from '../data/translations.ts';

const STORAGE_KEY = 'lang';

function resolveInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'tr' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

function apply(lang) {
  const dict = translations[lang] ?? translations[DEFAULT_LANG];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    // format: "attribute:key" — örn. data-i18n-attr="aria-label:nav.langLabel"
    const [attr, key] = el.dataset.i18nAttr.split(':');
    const value = dict[key];
    if (value !== undefined) el.setAttribute(attr, value);
  });

  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-lang-indicator]').forEach((el) => {
    el.textContent = lang === 'tr' ? 'EN' : 'TR';
  });
}

let current = resolveInitialLang();
apply(current);

document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    current = current === 'tr' ? 'en' : 'tr';
    localStorage.setItem(STORAGE_KEY, current);
    apply(current);
  });
});
