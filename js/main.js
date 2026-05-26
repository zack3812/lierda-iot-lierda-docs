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
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8z"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="1"/><path d="M6 6v4M10 6v6M14 6v4M18 6v6"/></svg>'
};

let currentLineId = null;
let currentProductId = null;
let currentVariantId = null;
let isFirstLoad = true;
let currentFileUrl = null;
let currentFileName = null;

function getFileUrl(file) {
  return `${SITE_CONFIG.r2PublicUrl}/${file.r2Key}`;
}

function canPreview(file) {
  return file.type === 'pdf';
}

function getLine(id) {
  return LINES.find(l => l.id === id);
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductColor(product) {
  if (product.color) return product.color;
  const line = LINES.find(l => l.id === product.line);
  return line ? line.color : '#2563eb';
}

function getLineI18n(line) {
  return line.i18n[currentLang] || line.i18n.zh || line.id;
}

function getProductI18n(product) {
  return product.i18n[currentLang] || product.i18n.zh;
}

function getVariantI18n(variant) {
  return variant.i18n[currentLang] || variant.i18n.zh;
}

function resolveCategory(cat, product) {
  if (!cat.shared || !cat.sharedFrom) return cat;
  if (cat.sharedFrom === 'product' || cat.sharedFrom === 'line') return cat;
  const sourceVariant = product.variants.find(v => v.id === cat.sharedFrom);
  if (!sourceVariant) return cat;
  const sourceCat = sourceVariant.categories.find(c => c.id === cat.id);
  if (!sourceCat) return cat;
  return { ...sourceCat, shared: true, sharedFrom: cat.sharedFrom };
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

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  renderSidebar();
  updateSidebarActive(true);
  if (currentVariantId) {
    const product = getProduct(currentProductId);
    const variant = product ? product.variants.find(v => v.id === currentVariantId) : null;
    if (variant) renderVariantPage(product, variant);
  }
}

function switchLine(lineId) {
  const line = getLine(lineId);
  if (!line) return;
  currentLineId = lineId;
  updateSidebarActive();

  if (line.products.length >= 1) {
    const product = getProduct(line.products[0]);
    if (product && product.variants.length >= 1) {
      switchVariant(product.id, product.variants[0].id);
    }
  } else {
    currentProductId = null;
    currentVariantId = null;
    renderEmptyLine(line);
  }
}

function switchProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;
  currentProductId = productId;
  if (product.variants.length >= 1) {
    switchVariant(productId, product.variants[0].id);
  }
}

function switchVariant(productId, variantId) {
  const product = getProduct(productId);
  if (!product) return;
  const variant = product.variants.find(v => v.id === variantId);
  if (!variant) return;

  currentProductId = productId;
  currentVariantId = variantId;
  history.replaceState(null, '', `#${productId}/${variantId}`);
  updateSidebarActive(true);
  isFirstLoad = false;
  renderVariantPage(product, variant);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function getCurrentVariant() {
  const product = getProduct(currentProductId);
  if (!product) return null;
  return product.variants.find(v => v.id === currentVariantId);
}

function renderVariantPage(product, variant) {
  const vi = getVariantI18n(variant);

  const heroEl = document.getElementById('heroSection');
  const pc = getProductColor(product);
  heroEl.style.background = `linear-gradient(135deg, ${pc}dd 0%, ${pc} 50%, ${pc}bb 100%)`;

  document.getElementById('heroBadge').textContent = vi.badge;
  document.getElementById('heroTitle').textContent = `${vi.fullName} ${t('moduleDocs')}`;
  document.getElementById('heroDesc').textContent = vi.description;

  const modelsEl = document.getElementById('heroModels');
  if (variant.models && variant.models.length > 0) {
    const labelText = t('models');
    modelsEl.innerHTML = `<span class="hero-models-label">${labelText}</span>` +
      variant.models.map(m => {
        if (typeof m === 'object') {
          const descHtml = m.desc ? `<span class="hero-model-desc">${getLocalizedName(m.desc)}</span>` : '';
          return `<span class="hero-model-tag">${m.name}${descHtml}</span>`;
        }
        return `<span class="hero-model-tag">${m}</span>`;
      }).join('');
    modelsEl.style.display = '';
  } else {
    modelsEl.style.display = 'none';
  }

  const specsEl = document.getElementById('heroSpecs');
  if (vi.highlights && vi.highlights.length > 0) {
    specsEl.innerHTML = vi.highlights.map(h => `
      <span class="hero-spec">
        <span class="hero-spec-icon">${ICONS[h.icon] || ICONS.file}</span>
        <span class="hero-spec-label">${h.label}</span>
        <span class="hero-spec-value">${h.value}</span>
      </span>`).join('');
    specsEl.style.visibility = 'visible';
  } else {
    specsEl.style.visibility = 'hidden';
  }

  document.querySelector('.logo-text').textContent = t('siteName');
  document.querySelector('.logo-sub').textContent = t('siteSub');
  document.getElementById('searchInput').placeholder = t('searchPlaceholder');
  document.getElementById('sidebarLineLabel').textContent = t('productLine').replace('：', '');
  document.querySelector('.footer-inner > div').textContent = t('footer');

  updateStats(variant, product);
  updateInfoBar(variant);
  renderCategories(product, variant);
}

function renderEmptyLine(line) {
  const lineName = getLineI18n(line);
  const heroEl = document.getElementById('heroSection');
  heroEl.style.background = `linear-gradient(135deg, ${line.color}dd 0%, ${line.color} 50%, ${line.color}bb 100%)`;
  document.getElementById('heroBadge').textContent = '';
  document.getElementById('heroTitle').textContent = lineName;
  document.getElementById('heroDesc').textContent = t('noProductsInLine');
  document.getElementById('heroModels').style.display = 'none';
  document.getElementById('statTotal').textContent = '0';
  document.getElementById('statDate').textContent = '-';
  document.getElementById('statStatus').textContent = '-';
  document.getElementById('statCategories').textContent = '0';
  document.querySelectorAll('.stat-label')[0].textContent = t('docTotal');
  document.querySelectorAll('.stat-label')[1].textContent = t('lastUpdate');
  document.querySelectorAll('.stat-label')[2].textContent = t('docStatus');
  document.querySelectorAll('.stat-label')[3].textContent = t('categories');
  document.getElementById('categoriesContainer').innerHTML = '';
}

const HW_REQUIRED_DOCS = [
  { key: 'hwDesignManual', pattern: /Hardware\s+Design\s+Manual/i, exclude: /Reference/i },
  { key: 'hwRefDesignManual', pattern: /Hardware\s+Reference\s+Design\s+Manual/i },
  { key: 'hw3DModel', pattern: /3D/i },
  { key: 'hwFootprint', pattern: /Footprint/i }
];

const HW_CHECK_LINES = ['Cat.1 bis', 'NB-IOT'];

function checkHardwareCompleteness(variant, product) {
  if (!HW_CHECK_LINES.includes(product.line)) return null;

  const hwCat = variant.categories.find(c => c.id === 'hardware');
  if (!hwCat) {
    return HW_REQUIRED_DOCS.map(d => d.key);
  }

  const resolved = resolveCategory(hwCat, product);
  const files = resolved.files || [];
  const missing = [];

  HW_REQUIRED_DOCS.forEach(doc => {
    const found = files.some(f => {
      const name = f.name || '';
      if (doc.exclude && doc.exclude.test(name)) return false;
      return doc.pattern.test(name);
    });
    if (!found) missing.push(doc.key);
  });

  return missing;
}

function updateStats(variant, product) {
  const vi = getVariantI18n(variant);
  let total = 0;
  let latestDate = '';
  variant.categories.forEach(cat => {
    const resolved = resolveCategory(cat, product);
    total += resolved.files.length;
    resolved.files.forEach(f => { if (f.date > latestDate) latestDate = f.date; });
  });
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statDate').textContent = latestDate.substring(0, 7);

  const missingDocs = checkHardwareCompleteness(variant, product);
  const missingEl = document.getElementById('hwMissingBar');

  if (missingDocs !== null) {
    if (missingDocs.length === 0) {
      document.getElementById('statStatus').textContent = t('hwDocComplete');
      document.getElementById('statStatus').style.color = '#16a34a';
      missingEl.style.display = 'none';
    } else {
      document.getElementById('statStatus').textContent = t('hwDocMissing').replace('{n}', missingDocs.length);
      document.getElementById('statStatus').style.color = '#dc2626';
      missingEl.style.display = '';
      missingEl.innerHTML = '<span class="hw-missing-label">' + t('hwMissingLabel') + '：</span>' +
        missingDocs.map(key => '<span class="hw-missing-tag">' + t(key) + '</span>').join('');
    }
  } else {
    document.getElementById('statStatus').textContent = total < 23 ? t('updating') : vi.status;
    document.getElementById('statStatus').style.color = '';
    missingEl.style.display = 'none';
  }

  document.getElementById('statCategories').textContent = variant.categories.length;
  document.querySelectorAll('.stat-label')[0].textContent = t('docTotal');
  document.querySelectorAll('.stat-label')[1].textContent = t('lastUpdate');
  document.querySelectorAll('.stat-label')[2].textContent = t('docStatus');
  document.querySelectorAll('.stat-label')[3].textContent = t('categories');
}

function updateInfoBar(variant) {
  const vi = getVariantI18n(variant);
  document.getElementById('infoReadingOrder').textContent = `${t('readingOrder')}${vi.readingOrder}`;
}

function fuzzyMatch(text, query) {
  if (!query) return { match: false, score: 0 };
  if (!text) return { match: false, score: 0 };
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.length < 1) return { match: false, score: 0 };
  
  let queryIndex = 0;
  let textIndex = 0;
  let score = 0;
  let consecutiveMatches = 0;
  let maxConsecutiveMatches = 0;
  
  while (queryIndex < lowerQuery.length && textIndex < lowerText.length) {
    if (lowerText[textIndex] === lowerQuery[queryIndex]) {
      score += 3;
      consecutiveMatches++;
      maxConsecutiveMatches = Math.max(maxConsecutiveMatches, consecutiveMatches);
      queryIndex++;
    } else {
      consecutiveMatches = 0;
      score -= 0.3;
    }
    textIndex++;
  }
  
  const exactMatch = lowerText === lowerQuery;
  const containsMatch = lowerText.includes(lowerQuery);
  const startsWithMatch = lowerText.startsWith(lowerQuery);
  const endsWithMatch = lowerText.endsWith(lowerQuery);
  
  if (exactMatch) {
    score += 50;
    return { match: true, score };
  }
  
  if (startsWithMatch) {
    score += 30;
    return { match: true, score };
  }
  
  if (endsWithMatch) {
    score += 25;
    return { match: true, score };
  }
  
  if (containsMatch) {
    score += 20;
    return { match: true, score };
  }
  
  if (queryIndex === lowerQuery.length) {
    const matchRatio = queryIndex / lowerQuery.length;
    const textRatio = queryIndex / lowerText.length;
    
    if (maxConsecutiveMatches >= 2) {
      score += 15;
      score += (matchRatio * 10);
      score += (textRatio * 5);
      
      if (score >= 10) {
        return { match: true, score };
      }
    }
  }
  
  return { match: false, score: 0 };
}

function globalSearch(query) {
  if (!query.trim()) return [];
  const results = [];
  const lowerQuery = query.toLowerCase();

  PRODUCTS.forEach(product => {
    const pi = getProductI18n(product);
    const productMatch = fuzzyMatch(pi.fullName, query);
    
    product.variants.forEach(variant => {
      const vi = getVariantI18n(variant);
      const variantMatch = fuzzyMatch(vi.fullName, query);
      
      variant.categories.forEach(cat => {
        const resolved = resolveCategory(cat, product);
        const catTitle = getCatTitle(cat.id);
        const catMatch = fuzzyMatch(catTitle, query);
        
        resolved.files.forEach(file => {
          const fileName = getLocalizedName(file.name);
          const fileMatch = fuzzyMatch(fileName, query);
          
          if (fileMatch.match) {
            results.push({
              product,
              variant,
              category: cat,
              file,
              fileName,
              score: fileMatch.score,
              matchType: 'file'
            });
          }
        });
      });
    });
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 20);
}

function clearHighlight() {
  document.querySelectorAll('.category.highlight, .file-card.highlight, .file-card.highlight-pulse').forEach(el => {
    el.classList.remove('highlight', 'highlight-pulse');
  });
}

function highlightTarget(catId, fileName) {
  clearHighlight();
  setTimeout(() => {
    const catEl = document.getElementById(`cat-${catId}`);
    if (catEl) {
      catEl.classList.add('highlight');
      if (fileName) {
        const fileCards = catEl.querySelectorAll('.file-card');
        for (const card of fileCards) {
          const nameEl = card.querySelector('.file-name');
          if (nameEl && nameEl.textContent.trim() === fileName.trim()) {
            card.classList.add('highlight', 'highlight-pulse');
            break;
          }
        }
      }
    }
    setTimeout(clearHighlight, 3000);
  }, 150);
}

function renderSearchResults(results) {
  const container = document.getElementById('searchResults');
  
  if (!results || results.length === 0) {
    container.innerHTML = `<div class="search-no-results">${t('noResults')}</div>`;
    return;
  }

  const groupedResults = {};
  results.forEach(result => {
    const key = `${result.product.id}/${result.variant.id}`;
    if (!groupedResults[key]) {
      groupedResults[key] = {
        product: result.product,
        variant: result.variant,
        files: []
      };
    }
    groupedResults[key].files.push(result);
  });

  container.innerHTML = Object.values(groupedResults).map(group => {
    const pi = getProductI18n(group.product);
    const vi = getVariantI18n(group.variant);
    const pc = getProductColor(group.product);
    
    return `
      <div class="search-result-group">
        <div class="search-result-header" onclick="switchVariant('${group.product.id}','${group.variant.id}')">
          <span class="search-result-dot" style="background:${pc}"></span>
          <span class="search-result-product">${pi.fullName}</span>
          <span class="search-result-variant">${vi.fullName}</span>
        </div>
        <div class="search-result-files">
          ${group.files.map(f => `
            <div class="search-result-file" onclick="event.stopPropagation();switchVariant('${group.product.id}','${group.variant.id}');setTimeout(()=>{document.getElementById('cat-${f.category.id}')?.scrollIntoView({behavior:'smooth',block:'center'});highlightTarget('${f.category.id}','${f.fileName.replace(/'/g, "\\'")}');},100)">
              <span class="file-type-icon ${f.file.type}">${f.file.type}</span>
              <span class="file-name-text">${f.fileName}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderCategories(product, variant, filter = '') {
  const container = document.getElementById('categoriesContainer');
  container.innerHTML = '';
  const lowerFilter = filter.toLowerCase();
  let hasResults = false;

  variant.categories.forEach(cat => {
    const resolved = resolveCategory(cat, product);
    const filteredFiles = filter
      ? resolved.files.filter(f => {
          const fileName = getLocalizedName(f.name).toLowerCase();
          return fuzzyMatch(fileName, filter).match;
        })
      : resolved.files;
    if (filteredFiles.length === 0) return;
    hasResults = true;

    const section = document.createElement('section');
    section.className = 'category';
    section.id = `cat-${cat.id}`;
    
    const groupedFiles = groupFilesByType(filteredFiles);
    const typeGroupsHtml = Object.entries(groupedFiles).map(([type, files]) => `
      <div class="file-type-group">
        <div class="file-type-header">
          <span class="file-type-badge ${type}">${type.toUpperCase()}</span>
          <span class="file-type-count">${files.length}</span>
        </div>
        <div class="file-grid">
          ${files.map(f => renderFileCard(f, product)).join('')}
        </div>
      </div>
    `).join('');

    section.innerHTML = `
      <div class="category-header">
        <div class="category-icon" style="background:${getProductColor(product)}15;color:${getProductColor(product)}">${ICONS[resolved.icon]}</div>
        <div>
          <div class="category-title">${getCatTitle(cat.id)}${resolved.shared ? `<span class="shared-badge">${t('sharedFrom')} ${(() => { if (resolved.sharedFrom === 'product') return t('sharedProduct'); if (resolved.sharedFrom === 'line') return t('sharedLine'); const sv = product.variants.find(v => v.id === resolved.sharedFrom); return sv ? getVariantI18n(sv).fullName : resolved.sharedFrom; })()}</span>` : ''}</div>
          <div class="category-desc">${getCatDesc(cat.id)}</div>
        </div>
        <div class="category-count">${filteredFiles.length}${t('files')}</div>
      </div>
      ${typeGroupsHtml}`;
    container.appendChild(section);
  });

  if (!hasResults) {
    container.innerHTML = `<div class="empty-state">${ICONS.search}<p>${t('noResults')}</p></div>`;
  }
}

function groupFilesByType(files) {
  const groups = {};
  const typeOrder = ['pdf', 'zip', 'xlsx', 'step', 'link'];
  
  files.forEach(file => {
    const type = file.type || 'other';
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(file);
  });
  
  const orderedGroups = {};
  typeOrder.forEach(type => {
    if (groups[type]) {
      orderedGroups[type] = groups[type];
    }
  });
  
  Object.keys(groups).forEach(type => {
    if (!typeOrder.includes(type)) {
      orderedGroups[type] = groups[type];
    }
  });
  
  return orderedGroups;
}

function renderFileCard(file, product) {
  const isLink = file.type === 'link';
  if (isLink) {
    const displayName = getLocalizedName(file.name);
    const hasDescriptions = file.descriptions && Object.keys(file.descriptions).length > 0;
    const description = hasDescriptions ? getLocalizedName(file.descriptions) : t('guideDoc');
    return `
    <div class="file-card file-card-link">
      <div class="file-icon link">${ICONS.globe}</div>
      <div class="file-info">
        <div class="file-name" title="${displayName}">${displayName}</div>
        <div class="file-meta">
          <span>${description}</span>
        </div>
      </div>
      <div class="file-actions">
        <a class="btn-icon btn-external" title="${t('viewOnline')}" href="${file.url}" target="_blank" rel="noopener noreferrer">${ICONS.external}</a>
      </div>
    </div>`;
  }

  const fileUrl = getFileUrl(file);
  const previewable = canPreview(file);
  const displayName = getLocalizedName(file.name);
  const escapedUrl = fileUrl.replace(/'/g, "\\'");
  const escapedName = displayName.replace(/'/g, "\\'");
  return `
    <div class="file-card">
      <div class="file-icon ${file.type}">${file.type}</div>
      <div class="file-info">
        <div class="file-name" title="${displayName}">${displayName}</div>
        <div class="file-meta">
          <span>${file.type.toUpperCase()}</span><span>${file.size}</span><span>${file.date}</span>
        </div>
      </div>
      <div class="file-actions">
        ${previewable ? `<button class="btn-icon" title="${t('preview')}" onclick='openViewer(${JSON.stringify(file).replace(/'/g, "&#39;")})'>${ICONS.eye}</button>` : ''}
        <button class="btn-icon" title="${t('download')}" onclick="downloadFile('${escapedUrl}','${escapedName}')">${ICONS.download}</button>
      </div>
    </div>`;
}

function openViewer(file) {
  const overlay = document.getElementById('viewerOverlay');
  const title = document.getElementById('viewerTitle');
  const body = document.getElementById('viewerBody');
  const displayName = getLocalizedName(file.name);
  title.textContent = displayName;
  currentFileUrl = getFileUrl(file);
  currentFileName = displayName + '.pdf';
  if (canPreview(file)) {
    body.innerHTML = `<iframe src="${currentFileUrl}" allow="fullscreen"></iframe>`;
    const iframe = body.querySelector('iframe');
    iframe.addEventListener('load', () => iframe.focus());
    body.addEventListener('mouseenter', () => iframe.focus());
  } else {
    body.innerHTML = `<div class="no-preview">${ICONS.file}<p>${t('noPreview')}</p><button class="btn btn-primary" onclick="downloadCurrentFile()">${ICONS.download} ${t('downloadFile')}</button></div>`;
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function closeViewer() {
  document.getElementById('viewerOverlay').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('viewerBody').innerHTML = '';
  currentFileUrl = null;
  currentFileName = null;
}

async function downloadFile(url, name) {
  const fileName = name || decodeURIComponent(url.split('/').pop().split('?')[0]) || 'download';
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error('下载失败:', err);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function downloadCurrentFile() {
  if (!currentFileUrl) return;
  downloadFile(currentFileUrl, currentFileName);
}

function renderSidebar() {
  const treeContainer = document.getElementById('sidebarTree');
  treeContainer.innerHTML = '';

  LINES.forEach(line => {
    const lineName = getLineI18n(line);
    const group = document.createElement('div');
    group.className = 'sidebar-line-group';

    const lineItem = document.createElement('div');
    lineItem.className = 'sidebar-item';
    lineItem.dataset.line = line.id;

    if (line.products.length > 0) {
      lineItem.innerHTML = `<span class="item-dot" style="border-color:${line.color}"></span><span class="item-name">${lineName}</span><svg class="item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
      lineItem.addEventListener('click', (e) => {
        const isArrowClick = e.target.closest('.item-arrow');
        const children = group.querySelector('.sidebar-children');
        const isOpen = children.classList.contains('open');
        
        if (isArrowClick) {
          e.stopPropagation();
          if (isOpen) {
            children.classList.remove('open');
            lineItem.classList.remove('expanded');
          } else {
            children.classList.add('open');
            lineItem.classList.add('expanded');
          }
        } else {
          if (isOpen) {
            children.classList.remove('open');
            lineItem.classList.remove('expanded');
          } else {
            children.classList.add('open');
            lineItem.classList.add('expanded');
            switchLine(line.id);
          }
        }
      });
    } else {
      lineItem.innerHTML = `<span class="item-dot" style="border-color:${line.color}"></span><span>${lineName}</span><span class="item-count">0</span>`;
      lineItem.addEventListener('click', () => switchLine(line.id));
    }
    group.appendChild(lineItem);

    if (line.products.length > 0) {
      const lineChildren = document.createElement('div');
      lineChildren.className = 'sidebar-children';

      line.products.forEach(productId => {
        const product = getProduct(productId);
        if (!product) return;
        const pi = getProductI18n(product);

        if (product.variants.length > 1) {
          const productGroup = document.createElement('div');
          productGroup.className = 'sidebar-line-group';

          const productItem = document.createElement('div');
          productItem.className = 'sidebar-item sidebar-item-nested';
          productItem.dataset.product = product.id;
          productItem.innerHTML = `<span class="item-dot" style="border-color:${getProductColor(product)}"></span><span class="item-name">${product.name}</span><svg class="item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
          productItem.addEventListener('click', (e) => {
            e.stopPropagation();
            const isArrowClick = e.target.closest('.item-arrow');
            const vChildren = productGroup.querySelector('.sidebar-children');
            const isOpen = vChildren.classList.contains('open');
            
            if (isArrowClick) {
              e.stopPropagation();
              if (isOpen) {
                vChildren.classList.remove('open');
                productItem.classList.remove('expanded');
              } else {
                vChildren.classList.add('open');
                productItem.classList.add('expanded');
              }
            } else {
              if (isOpen) {
                vChildren.classList.remove('open');
                productItem.classList.remove('expanded');
              } else {
                vChildren.classList.add('open');
                productItem.classList.add('expanded');
                switchProduct(product.id);
              }
            }
          });
          productGroup.appendChild(productItem);

          const variantChildren = document.createElement('div');
          variantChildren.className = 'sidebar-children';

          product.variants.forEach(variant => {
            const vi = getVariantI18n(variant);
            const vItem = document.createElement('div');
            vItem.className = 'sidebar-variant-item';
            vItem.dataset.variant = variant.id;
            vItem.dataset.product = product.id;
            vItem.innerHTML = `<span class="variant-name">${variant.name}</span><span class="variant-sub">${vi.subtitle}</span>`;
            vItem.addEventListener('click', (e) => {
              e.stopPropagation();
              switchVariant(product.id, variant.id);
            });
            variantChildren.appendChild(vItem);
          });

          productGroup.appendChild(variantChildren);
          lineChildren.appendChild(productGroup);
        } else if (product.variants.length === 1) {
          const variant = product.variants[0];
          const vi = getVariantI18n(variant);
          const pItem = document.createElement('div');
          pItem.className = 'sidebar-product-item';
          pItem.dataset.product = product.id;
          pItem.dataset.variant = variant.id;
          pItem.innerHTML = `<span class="product-name">${product.name}</span><span class="product-sub">${vi.subtitle}</span>`;
          pItem.addEventListener('click', (e) => {
            e.stopPropagation();
            switchVariant(product.id, variant.id);
          });
          lineChildren.appendChild(pItem);
        }
      });

      group.appendChild(lineChildren);
    }

    treeContainer.appendChild(group);
  });

  updateSidebarActive();
}

function updateSidebarActive(expandActive = false) {
  document.querySelectorAll('.sidebar-item').forEach(item => {
    const isLineActive = item.dataset.line === currentLineId;
    const isProductActive = item.dataset.product === currentProductId;
    const isActive = isLineActive || isProductActive;
    item.classList.toggle('active', isActive);

    const dot = item.querySelector('.item-dot');
    if (isLineActive) {
      const line = getLine(currentLineId);
      if (line) dot.style.background = line.color;
      if (expandActive) {
        const group = item.closest('.sidebar-line-group');
        if (group) {
          const children = group.querySelector('.sidebar-children');
          if (children) { children.classList.add('open'); item.classList.add('expanded'); }
        }
      }
    } else if (isProductActive) {
      const product = getProduct(currentProductId);
      if (product) dot.style.background = getProductColor(product);
      if (expandActive) {
        const group = item.closest('.sidebar-line-group');
        if (group) {
          const children = group.querySelector('.sidebar-children');
          if (children) { children.classList.add('open'); item.classList.add('expanded'); }
        }
      }
    } else {
      dot.style.background = 'transparent';
    }
  });

  document.querySelectorAll('.sidebar-product-item').forEach(item => {
    item.classList.toggle('active', item.dataset.variant === currentVariantId && item.dataset.product === currentProductId);
  });

  document.querySelectorAll('.sidebar-variant-item').forEach(item => {
    item.classList.toggle('active', item.dataset.variant === currentVariantId && item.dataset.product === currentProductId);
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
  renderSidebar();

  const hash = location.hash.substring(1);
  let initialLine = null;
  let initialProduct = null;
  let initialVariant = null;

  if (hash) {
    const parts = hash.split('/');
    if (parts.length >= 2) {
      const p = getProduct(parts[0]);
      if (p) {
        initialProduct = parts[0];
        initialLine = p.line;
        const v = p.variants.find(v => v.id === parts[1]);
        if (v) initialVariant = parts[1];
      }
    } else if (parts.length === 1) {
      const p = getProduct(parts[0]);
      if (p) { initialLine = p.line; initialProduct = parts[0]; }
    }
  }

  if (!initialLine) {
    const firstLine = LINES.find(l => l.products.length > 0);
    initialLine = firstLine ? firstLine.id : (LINES[0] ? LINES[0].id : null);
  }

  if (initialLine) {
    currentLineId = initialLine;
    if (initialProduct && initialVariant) {
      switchVariant(initialProduct, initialVariant);
    } else {
      switchLine(initialLine);
    }
  }

  switchLang(currentLang);
  updateSidebarActive(true);

  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.trim();
    
    debounceTimer = setTimeout(() => {
      if (query.length < 1) {
        searchResults.style.display = 'none';
        const product = getProduct(currentProductId);
        const variant = getCurrentVariant();
        if (product && variant) renderCategories(product, variant, '');
        return;
      }
      
      const results = globalSearch(query);
      renderSearchResults(results);
      searchResults.style.display = results.length > 0 ? 'block' : 'none';
    }, 300);
  });
  
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length >= 1) {
      searchResults.style.display = 'block';
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
  
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchResults.style.display = 'none';
      searchInput.blur();
    }
  });

  document.getElementById('viewerOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeViewer();
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeViewer(); });

  window.addEventListener('hashchange', () => {
    const hash = location.hash.substring(1);
    if (!hash) return;
    const parts = hash.split('/');
    if (parts.length >= 2) {
      const p = getProduct(parts[0]);
      if (p && p.variants.find(v => v.id === parts[1])) {
        if (parts[1] !== currentVariantId) switchVariant(parts[0], parts[1]);
      }
    }
  });

  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  
  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('open');
      sidebar.classList.remove('collapsed');
    } else {
      sidebar.classList.toggle('collapsed');
      sidebar.classList.remove('open');
    }
  };
  
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) sidebar.classList.remove('open');
    }
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
