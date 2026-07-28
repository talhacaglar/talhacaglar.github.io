// Tema seçimi. İlk boyamadan önceki atamayı Layout'taki satır içi betik yapar;
// burası yalnızca düğmeleri ve sonraki sistem değişikliklerini bağlar.
const root = document.documentElement;
const STORAGE_KEY = 'theme';
const BAR_COLOR = { light: '#eaf0f6', dark: '#0d151d' };

const meta = document.querySelector('meta[name="theme-color"]');
const buttons = [...document.querySelectorAll('[data-theme-set]')];

const apply = (theme) => {
  root.dataset.theme = theme;
  meta?.setAttribute('content', BAR_COLOR[theme]);
  buttons.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.themeSet === theme));
  });
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, btn.dataset.themeSet);
    apply(btn.dataset.themeSet);
  });
});

// Kullanıcı henüz seçim yapmadıysa sistem tercihini izlemeye devam et
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (!localStorage.getItem(STORAGE_KEY)) apply(event.matches ? 'dark' : 'light');
});

apply(root.dataset.theme === 'dark' ? 'dark' : 'light');
