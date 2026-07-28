# talhacaglar.github.io

Kişisel portfolyo sitesi. Astro ile yazıldı, TR/EN dil desteği var, GitHub Pages üzerinde yayınlanıyor.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne production build
npm run preview  # build çıktısını yerelde önizle
```

## İçerik güncelleme

- **Metinler:** `src/data/translations.ts` — her metin `tr` ve `en` altında aynı key ile durur. Yeni bir metin eklerken HTML tarafına `data-i18n="key.adi"` eklemeyi unutma.
- **Projeler:** `src/data/projects.ts` — diziye yeni bir obje ekle, kart otomatik oluşur.
- **Renkler / boşluk / animasyon:** `src/styles/global.css` içindeki `:root` değişkenleri.

## Yayınlama

`main` branch'e push edildiğinde `.github/workflows/deploy.yml` otomatik build alıp GitHub Pages'e deploy eder.

İlk kurulumda repo ayarlarından **Settings → Pages → Source: GitHub Actions** seçilmeli.

> Repo adı `talhacaglar.github.io` değilse, `astro.config.mjs` içindeki `base` değerini `'/<repo-adi>/'` olarak güncelle.
