// GeldPilot.de — site.js
// Cookie-Consent, Dark Mode, Back-to-Top, Lesefortschritt.
// Läuft auf jeder Seite; Funktionen prüfen selbst, ob ihr Zielelement existiert.

/* ---------- 1. Cookie-Consent-Banner ---------- */
(function cookieConsent() {
  const KEY = 'gp_cookie_consent';
  if (localStorage.getItem(KEY)) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>Diese Website verwendet Cookies, u. a. für Werbeanzeigen über Google AdSense.
    Mehr dazu in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>
    <div class="cookie-actions">
      <button class="cookie-btn cookie-btn-accept" id="cookieAccept">Akzeptieren</button>
      <button class="cookie-btn cookie-btn-reject" id="cookieReject">Ablehnen</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    banner.remove();
  });
  document.getElementById('cookieReject').addEventListener('click', () => {
    localStorage.setItem(KEY, 'rejected');
    banner.remove();
  });
})();

/* ---------- 2. Dark Mode ---------- */
(function darkMode() {
  const KEY = 'gp_theme';
  const saved = localStorage.getItem(KEY);
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(KEY, 'light');
        btn.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(KEY, 'dark');
        btn.textContent = '☀️';
      }
    });
  });
})();

/* ---------- 3. Back-to-Top-Button ---------- */
(function backToTop() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Nach oben scrollen');
    btn.textContent = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });
})();

/* ---------- 4. Lesefortschritt (nur auf Artikelseiten) ---------- */
(function readingProgress() {
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (!main || !document.querySelector('.article-nav')) return; // nur Artikelseiten

    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    const inner = document.createElement('div');
    inner.className = 'reading-progress-bar';
    bar.appendChild(inner);
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      inner.style.width = pct + '%';
    });
  });
})();

/* ---------- 6. Artikel-Erweiterungen: TOC, Ähnliche Artikel, Quellen, FAQ, Teilen ---------- */
(function articleEnhancements() {
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const nav = document.querySelector('.article-nav');
    if (!main || !nav || typeof SEARCH_INDEX === 'undefined') return;

    const currentFile = location.pathname.split('/').pop() || 'index.html';
    const currentEntry = SEARCH_INDEX.find(i => i.url === currentFile);

    /* --- Tabelle: Inhaltsverzeichnis --- */
    const headings = Array.from(main.querySelectorAll('h2'));
    if (headings.length >= 3) {
      const toc = document.createElement('nav');
      toc.className = 'toc';
      toc.innerHTML = '<span class="label">Inhalt</span>';
      const list = document.createElement('ol');
      headings.forEach((h, i) => {
        const id = 'sec-' + i;
        h.id = id;
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}">${h.textContent}</a>`;
        list.appendChild(li);
      });
      toc.appendChild(list);
      const routeDiv = main.querySelector('.route');
      if (routeDiv) routeDiv.after(toc); else main.prepend(toc);
    }

    /* --- Teilen-Buttons --- */
    if (currentEntry) {
      const url = encodeURIComponent(location.href);
      const title = encodeURIComponent(currentEntry.title);
      const share = document.createElement('div');
      share.className = 'share-row';
      share.innerHTML = `
        <span class="label">Teilen</span>
        <a href="https://wa.me/?text=${title}%20${url}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank" rel="noopener">X</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener">LinkedIn</a>
      `;
      nav.after(share);

      /* --- Ähnliche Artikel --- */
      const related = SEARCH_INDEX.filter(i => i.cat === currentEntry.cat && i.url !== currentFile).slice(0, 3);
      if (related.length > 0) {
        const relSection = document.createElement('section');
        relSection.className = 'related-section';
        relSection.innerHTML = '<span class="label">Ähnliche Artikel</span><div class="related-grid"></div>';
        const grid = relSection.querySelector('.related-grid');
        related.forEach(r => {
          grid.innerHTML += `<a class="related-card" href="${r.url}"><span class="label">${r.cat}</span><strong>${r.title}</strong></a>`;
        });
        share.after(relSection);
      }

      /* --- Quellen --- */
      if (typeof SOURCE_LINKS !== 'undefined' && SOURCE_LINKS[currentEntry.cat]) {
        const src = document.createElement('div');
        src.className = 'sources-box';
        src.innerHTML = '<span class="label">Quellen &amp; weiterführende Links</span><ul>' +
          SOURCE_LINKS[currentEntry.cat].map(([name, link]) => `<li><a href="${link}" target="_blank" rel="noopener nofollow">${name}</a></li>`).join('') +
          '</ul>';
        const disclaimer = main.querySelector('.article-disclaimer');
        if (disclaimer) disclaimer.after(src); else main.appendChild(src);
      }

      /* --- FAQ --- */
      if (typeof FAQ_DATA !== 'undefined' && FAQ_DATA[currentFile]) {
        const faqItems = FAQ_DATA[currentFile];
        const faqSection = document.createElement('section');
        faqSection.className = 'faq-section';
        faqSection.innerHTML = '<h2>Häufige Fragen</h2>' + faqItems.map(item => `
          <details class="faq-item">
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>
        `).join('');
        nav.before(faqSection);

        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        };
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(schemaScript);
      }
    }
  });
})();
(function categoryFilter() {
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.card-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.card'));
    const cats = ['Alle', ...new Set(cards.map(c => c.querySelector('.label').textContent.trim()))];

    const filterBar = document.createElement('div');
    filterBar.className = 'category-filter';
    filterBar.innerHTML = cats.map((cat, i) =>
      `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');
    grid.parentElement.insertBefore(filterBar, grid);

    filterBar.addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.cat;
      cards.forEach(card => {
        const cardCat = card.querySelector('.label').textContent.trim();
        card.style.display = (cat === 'Alle' || cardCat === cat) ? '' : 'none';
      });
    });
  });
})();
