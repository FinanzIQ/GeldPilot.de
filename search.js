// GeldPilot.de — Live-Suche über alle Artikel
// Nutzt SEARCH_INDEX aus search-data.js. Pfade sind relativ zur Root-Ebene,
// funktioniert daher auf index.html und allen Artikel-/Rechtsseiten gleichermaßen.

function toggleSearch() {
  const box = document.getElementById('searchBox');
  const input = document.getElementById('searchInput');
  box.classList.toggle('open');
  if (box.classList.contains('open')) {
    input.focus();
  } else {
    document.getElementById('searchResults').innerHTML = '';
    input.value = '';
  }
}

function runSearch(query) {
  const resultsEl = document.getElementById('searchResults');
  const q = query.trim().toLowerCase();

  if (q.length < 2) {
    resultsEl.innerHTML = '';
    resultsEl.classList.remove('has-results');
    return;
  }

  const matches = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.excerpt.toLowerCase().includes(q) ||
    item.cat.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsEl.innerHTML = '<div class="search-empty">Keine Artikel gefunden.</div>';
    resultsEl.classList.add('has-results');
    return;
  }

  resultsEl.innerHTML = matches.map(item => `
    <a class="search-result" href="${item.url}">
      <span class="label">${item.cat}</span>
      <strong>${item.title}</strong>
    </a>
  `).join('');
  resultsEl.classList.add('has-results');
}

// Schließt die Suche, wenn außerhalb geklickt wird
document.addEventListener('click', function(e) {
  const search = document.querySelector('.site-search');
  if (search && !search.contains(e.target)) {
    document.getElementById('searchBox').classList.remove('open');
  }
});

// Escape-Taste schließt die Suche
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('searchBox').classList.remove('open');
  }
});
