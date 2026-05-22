const ICONS = {
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  board: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="6" cy="10" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/><circle cx="18" cy="10" r="1"/><path d="M6 14h4M14 14h4"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

let currentProductId = null;

function getFileUrl(file) {
  return `${SITE_CONFIG.r2PublicUrl}/${file.r2Key}`;
}

function canPreview(file) {
  return file.type === 'pdf';
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getCurrentProduct() {
  return getProduct(currentProductId);
}

function getProductI18n(product) {
  return product.i18n[currentLang] || product.i18n.zh;
}

function getCatTitle(catId) {
  const key = "cat" + catId.charAt(0).toUpperCase() + catId.slice(1);
  return t(key) || catId;
}

function getCatDesc(catId) {
  const key = "cat" + catId.charAt(0).toUpperCase() + catId.slice(1) + "Desc";
  return t(key) || "";
}

function switchLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("lierda-lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const product = getCurrentProduct();
  if (product) renderProductPage(product);
}

function switchProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;

  currentProductId = productId;
  history.replaceState(null, '', `#${productId}`);

  document.querySelectorAll('.product-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.product === productId);
  });

  renderProductPage(product);
}

function renderProductPage(product) {
  const pi = getProductI18n(product);

  const heroEl = document.getElementById('heroSection');
  heroEl.style.background = `linear-gradient(135deg, ${product.color}dd 0%, ${product.color} 50%, ${product.color}bb 100%)`;

  document.getElementById('heroBadge').textContent = pi.badge;
  document.getElementById('heroTitle').textContent = `${pi.fullName}${t('siteName').includes('Docs') || t('siteName').includes('資料') || t('siteName').includes('자료') ? '' : '模组资料'} ${currentLang === 'zh' ? '' : ''}${t('docTotal').length > 0 ? '' : ''}`;
  document.getElementById('heroTitle').textContent = `${pi.fullName} ${currentLang === 'zh' ? '模组资料' : currentLang === 'ja' ? 'モジュール資料' : currentLang === 'ko' ? '모듈 자료' : 'Module Docs'}`;
  document.getElementById('heroDesc').textContent = pi.description;

  document.querySelector('.logo-text').textContent = t('siteName');
  document.querySelector('.logo-sub').textContent = t('siteSub');
  document.querySelector('.btn-primary').innerHTML = t('browseFiles');
  document.querySelector('.btn-outline').innerHTML = t('githubRepo');
  document.getElementById('searchInput').placeholder = t('searchPlaceholder');
  document.querySelector('.tabs-label').textContent = t('productLine');
  document.querySelector('.footer-inner > div').textContent = t('footer');

  updateStats(product);
  updateInfoBar(product);
  updateNav(product);
  renderCategories(product);
}

function updateStats(product) {
  const pi = getProductI18n(product);
  let total = 0;
  let latestDate = '';
  product.categories.forEach(cat => {
    total += cat.files.length;
    cat.files.forEach(f => {
      if (f.date > latestDate) latestDate = f.date;
    });
  });
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statDate').textContent = latestDate.substring(0, 7);
  document.getElementById('statStatus').textContent = pi.status;
  document.getElementById('statCategories').textContent = product.categories.length;

  document.querySelectorAll('.stat-label')[0].textContent = t('docTotal');
  document.querySelectorAll('.stat-label')[1].textContent = t('lastUpdate');
  document.querySelectorAll('.stat-label')[2].textContent = t('docStatus');
  document.querySelectorAll('.stat-label')[3].textContent = t('categories');
}

function updateInfoBar(product) {
  const pi = getProductI18n(product);
  document.getElementById('infoReadingOrder').textContent = `${t('readingOrder')}${pi.readingOrder}`;
  document.querySelectorAll('.info-item')[1].querySelector('span') || document.querySelectorAll('.info-item')[1];
  const infoItems = document.querySelectorAll('.info-item');
  infoItems[1].lastChild.textContent = t('publicNote');
  infoItems[2].lastChild.textContent = t('supportNote');
}

function updateNav(product) {
  const nav = document.getElementById('productNav');
  nav.innerHTML = '';
  product.categories.forEach(cat => {
    const a = document.createElement('a');
    a.href = `#cat-${cat.id}`;
    a.textContent = getCatTitle(cat.id);
    nav.appendChild(a);
  });
}

function renderCategories(product, filter = '') {
  const container = document.getElementById('categoriesContainer');
  container.innerHTML = '';

  const lowerFilter = filter.toLowerCase();
  let hasResults = false;

  product.categories.forEach(cat => {
    const filteredFiles = filter
      ? cat.files.filter(f => getLocalizedName(f.name).toLowerCase().includes(lowerFilter))
      : cat.files;

    if (filteredFiles.length === 0) return;
    hasResults = true;

    const section = document.createElement('section');
    section.className = 'category';
    section.id = `cat-${cat.id}`;

    section.innerHTML = `
      <div class="category-header">
        <div class="category-icon" style="background:${product.color}15;color:${product.color}">${ICONS[cat.icon]}</div>
        <div>
          <div class="category-title">${getCatTitle(cat.id)}</div>
          <div class="category-desc">${getCatDesc(cat.id)}</div>
        </div>
        <div class="category-count">${filteredFiles.length}${t('files')}</div>
      </div>
      <div class="file-grid">
        ${filteredFiles.map(f => renderFileCard(f, product)).join('')}
      </div>`;

    container.appendChild(section);
  });

  if (!hasResults) {
    container.innerHTML = `
      <div class="empty-state">
        ${ICONS.search}
        <p>${t('noResults')}</p>
      </div>`;
  }
}

function renderFileCard(file, product) {
  const fileUrl = getFileUrl(file);
  const previewable = canPreview(file);
  const displayName = getLocalizedName(file.name);

  return `
    <div class="file-card">
      <div class="file-icon ${file.type}">${file.type}</div>
      <div class="file-info">
        <div class="file-name" title="${displayName}">${displayName}</div>
        <div class="file-meta">
          <span>${file.type.toUpperCase()}</span>
          <span>${file.size}</span>
          <span>${file.date}</span>
        </div>
      </div>
      <div class="file-actions">
        ${previewable ? `<button class="btn-icon" title="${t('preview')}" onclick='openViewer(${JSON.stringify(file).replace(/'/g, "&#39;")})'>${ICONS.eye}</button>` : ''}
        <a class="btn-icon" title="${t('download')}" href="${fileUrl}" download>${ICONS.download}</a>
      </div>
    </div>`;
}

function openViewer(file) {
  const overlay = document.getElementById('viewerOverlay');
  const title = document.getElementById('viewerTitle');
  const body = document.getElementById('viewerBody');

  title.textContent = getLocalizedName(file.name);
  const fileUrl = getFileUrl(file);

  if (canPreview(file)) {
    body.innerHTML = `<iframe src="viewer.html?file=${encodeURIComponent(fileUrl)}&lang=${currentLang}" allow="fullscreen"></iframe>`;
  } else {
    body.innerHTML = `
      <div class="no-preview">
        ${ICONS.file}
        <p>${t('noPreview')}</p>
        <a href="${fileUrl}" class="btn btn-primary" download>${ICONS.download} ${t('downloadFile')}</a>
      </div>`;
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeViewer() {
  const overlay = document.getElementById('viewerOverlay');
  const body = document.getElementById('viewerBody');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  body.innerHTML = '';
}

function renderProductTabs() {
  const tabsContainer = document.getElementById('productTabs');
  tabsContainer.innerHTML = '';
  PRODUCTS.forEach(product => {
    const pi = getProductI18n(product);
    const tab = document.createElement('button');
    tab.className = 'product-tab';
    tab.dataset.product = product.id;
    tab.innerHTML = `
      <span class="tab-name">${product.name}</span>
      <span class="tab-sub">${pi.subtitle}</span>`;
    tab.addEventListener('click', () => switchProduct(product.id));
    tabsContainer.appendChild(tab);
  });
}

function renderLangSwitcher() {
  const container = document.getElementById('langSwitcher');
  container.innerHTML = '';
  SUPPORTED_LANGS.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.dataset.lang = lang;
    btn.textContent = I18N[lang].langName;
    btn.addEventListener('click', () => switchLang(lang));
    container.appendChild(btn);
  });
}

function init() {
  renderLangSwitcher();
  renderProductTabs();

  const hashProduct = location.hash.substring(1);
  const defaultProduct = hashProduct && getProduct(hashProduct)
    ? hashProduct
    : PRODUCTS[0].id;

  switchProduct(defaultProduct);
  switchLang(currentLang);

  const searchInput = document.getElementById('searchInput');
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const product = getCurrentProduct();
      if (product) renderCategories(product, e.target.value.trim());
    }, 200);
  });

  document.getElementById('viewerOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeViewer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewer();
  });

  window.addEventListener('hashchange', () => {
    const hash = location.hash.substring(1);
    if (hash && getProduct(hash) && hash !== currentProductId) {
      switchProduct(hash);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
