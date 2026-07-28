import { defineConfig } from 'astro/config';

// GitHub Pages: repo adı `talhacaglar.github.io` ise base '/' kalmalı.
// Farklı bir repo adı kullanılırsa base: '/<repo-adi>/' yapılmalı.
export default defineConfig({
  site: 'https://talhacaglar.github.io',
  base: '/',
});
