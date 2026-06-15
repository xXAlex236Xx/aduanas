(function() {
  // ── DARK MODE ──
  const DARK_KEY = 'sigf-dark';
  const saved = localStorage.getItem(DARK_KEY);
  if (saved === 'true' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
  }

  // ── ACTIVE NAV LINK ──
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // ── DARK TOGGLE CLICK ──
  document.addEventListener('click', e => {
    if (e.target.closest('.dark-toggle')) {
      document.body.classList.toggle('dark');
      localStorage.setItem(DARK_KEY, document.body.classList.contains('dark'));
    }
    // ── HAMBURGER ──
    if (e.target.closest('.hamburger')) {
      const hb = document.querySelector('.hamburger');
      const sb = document.querySelector('.sidebar');
      const ov = document.querySelector('.sidebar-overlay');
      hb.classList.toggle('open');
      sb.classList.toggle('open');
      ov.classList.toggle('show');
    }
    // ── OVERLAY CLOSE ──
    if (e.target.closest('.sidebar-overlay')) {
      document.querySelector('.hamburger').classList.remove('open');
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay').classList.remove('show');
    }
    // ── SIDEBAR LINK ON MOBILE: close menu ──
    if (e.target.closest('.sidebar a') && window.innerWidth <= 768) {
      document.querySelector('.hamburger').classList.remove('open');
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay').classList.remove('show');
    }
  });

  // ── PAGE ENTER ANIMATION ──
  document.querySelectorAll('.main').forEach(el => el.classList.add('page-enter'));
})();
