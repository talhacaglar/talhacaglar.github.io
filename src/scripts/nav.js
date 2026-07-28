// Nav kapsülündeki cam hapı aktif bölüme (ve imleçle gezilen linke) kaydırır.
const wrap = document.querySelector('[data-nav-links]');
const indicator = document.querySelector('[data-nav-indicator]');

if (wrap && indicator) {
  const links = [...wrap.querySelectorAll('a')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  let activeLink = null;

  const moveTo = (link) => {
    // Dar ekranda kapsül gizli; ölçüm anlamsız olur
    if (!link || !link.offsetParent) {
      indicator.style.opacity = '0';
      return;
    }
    const parent = indicator.parentElement.getBoundingClientRect();
    const target = link.getBoundingClientRect();
    indicator.style.left = `${target.left - parent.left}px`;
    indicator.style.width = `${target.width}px`;
    indicator.style.opacity = '1';
  };

  const setActive = (link) => {
    activeLink = link;
    links.forEach((l) => l.toggleAttribute('data-active', l === link));
    moveTo(link);
  };

  // Görünür alanın üst üçte birini geçen son bölüm aktif sayılır
  const syncActive = () => {
    const line = window.innerHeight * 0.35;
    let current = null;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= line) current = links[i];
    });
    if (current !== activeLink) setActive(current);
  };

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => moveTo(link));
  });

  wrap.addEventListener('mouseleave', () => moveTo(activeLink));

  window.addEventListener('scroll', syncActive, { passive: true });
  window.addEventListener('resize', () => moveTo(activeLink));

  syncActive();
}
