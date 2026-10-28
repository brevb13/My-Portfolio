const tabs = document.querySelectorAll('.tab');
  const lens = document.getElementById('lens');
  const track = document.getElementById('track');
  const sections = track.querySelectorAll('section');
  const tabWidth = 112; // keep in sync with --tab-w in the CSS

  function go(index) {
    lens.style.transform = 'translateX(' + (index * tabWidth) + 'px)';
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    tabs.forEach((tab, i) => tab.setAttribute('aria-current', i === index ? 'page' : 'false'));
    sections.forEach((s, i) => s.setAttribute('aria-hidden', i === index ? 'false' : 'true'));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => go(Number(tab.dataset.index)));
  });

  const themeToggle = document.getElementById('theme-toggle');
  const themeThumb = themeToggle.querySelector('.theme-toggle-thumb');
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeThumb.textContent = isDark ? '🌙' : '☀️';
  });

  go(0);
