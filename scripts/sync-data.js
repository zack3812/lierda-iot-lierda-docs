var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var DOCS_DIR = path.join(ROOT, 'docs');
var DATA_FILE = path.join(ROOT, 'js', 'data.js');
var PRODUCTS_DIR = path.join(ROOT, 'products');

var FILE_SORT_ORDER = {
  tools: ['Flash Tool', 'Log Tool', 'FotaToolkit']
};

var SITE_CONFIG = {
  repo: 'zack3812/lierda-iot-lierda-docs',
  baseRepo: 'https://github.com/zack3812/lierda-iot-lierda-docs',
  r2PublicUrl: 'https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev'
};

var CATEGORY_ICONS = {
  hardware: 'cpu',
  software: 'code',
  tools: 'wrench',
  certification: 'shield',
  evb: 'board',
  brief: 'file-text'
};

var CATEGORY_ORDER = ['brief', 'hardware', 'software', 'tools', 'certification', 'evb'];

function matchCategoryId(dirName) {
  var lower = dirName.toLowerCase();
  for (var i = 0; i < CATEGORY_ORDER.length; i++) {
    if (CATEGORY_ORDER[i] === lower) return CATEGORY_ORDER[i];
  }
  return null;
}

function loadExistingSiteConfig() {
  if (!fs.existsSync(DATA_FILE)) return null;
  try {
    var content = fs.readFileSync(DATA_FILE, 'utf8');
    var match = content.match(/const SITE_CONFIG\s*=\s*(\{[\s\S]*?\});/);
    if (match) return JSON.parse(match[1]);
  } catch (e) { }
  return null;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

function getFileType(filename) {
  var ext = path.extname(filename).toLowerCase().replace('.', '');
  return ext || 'unknown';
}

function getFileNameWithoutExt(filename) {
  return path.basename(filename, path.extname(filename));
}

function safeReaddir(dirPath) {
  try { return fs.readdirSync(dirPath); } catch (e) { return []; }
}

function isDir(p) {
  try { return fs.statSync(p).isDirectory(); } catch (e) { return false; }
}

function deepMerge(target, source) {
  var result = {};
  Object.keys(target).forEach(function(k) { result[k] = target[k]; });
  Object.keys(source).forEach(function(k) {
    if (source[k] && typeof source[k] === 'object' && !Array.isArray(source[k]) &&
        result[k] && typeof result[k] === 'object' && !Array.isArray(result[k])) {
      result[k] = deepMerge(result[k], source[k]);
    } else {
      result[k] = source[k];
    }
  });
  return result;
}

function expandVariantHighlights(lineDefaults, productDefaults, variantData) {
  var template = (lineDefaults && lineDefaults.variantDefaults && lineDefaults.variantDefaults.highlights) || {};
  var productHL = (productDefaults && productDefaults.highlights) || {};
  var variantHL = variantData.highlights || {};

  if (Object.keys(template).length === 0 && Object.keys(variantHL).length === 0) return [];

  var merged = {};
  Object.keys(productHL).forEach(function(k) { if (productHL[k] !== null) merged[k] = productHL[k]; });
  Object.keys(variantHL).forEach(function(k) {
    if (variantHL[k] === null) { delete merged[k]; } else { merged[k] = variantHL[k]; }
  });

  var result = [];
  Object.keys(template).forEach(function(key) {
    if (merged[key] === undefined) return;
    var tpl = template[key] || {};
    result.push({
      label: tpl.label || {},
      value: merged[key],
      icon: tpl.icon || 'file'
    });
  });

  Object.keys(merged).forEach(function(key) {
    if (template[key]) return;
    result.push({ label: {}, value: merged[key], icon: 'file' });
  });

  return result;
}

function expandVariantI18n(lineDefaults, productDefaults, variantData) {
  var lineVariantI18nDefaults = (lineDefaults && lineDefaults.variantDefaults && lineDefaults.variantDefaults.i18n) || {};
  var langs = ['zh', 'en', 'ko', 'ja'];
  var variantI18n = variantData.i18n || {};
  var result = {};

  langs.forEach(function(lang) {
    var base = (lineVariantI18nDefaults[lang] && JSON.parse(JSON.stringify(lineVariantI18nDefaults[lang]))) || {};
    var override = variantI18n[lang] || {};
    result[lang] = deepMerge(base, override);
  });

  return result;
}

function expandProductI18n(lineDefaults, productData) {
  var lineProductI18nDefaults = (lineDefaults && lineDefaults.i18n) || {};
  var langs = ['zh', 'en', 'ko', 'ja'];
  var productI18n = productData.i18n || {};
  var result = {};

  langs.forEach(function(lang) {
    var base = (lineProductI18nDefaults[lang] && JSON.parse(JSON.stringify(lineProductI18nDefaults[lang]))) || {};
    var override = productI18n[lang] || {};
    var merged = deepMerge(base, override);
    if (!merged.fullName) merged.fullName = '';
    result[lang] = merged;
  });

  return result;
}

function loadProductsData() {
  var linesData = {};
  var linesFilePath = path.join(PRODUCTS_DIR, 'lines.json');
  if (fs.existsSync(linesFilePath)) {
    try { linesData = JSON.parse(fs.readFileSync(linesFilePath, 'utf8')); } catch (e) { }
  }

  var linesMeta = linesData.items || {};
  var lineOrder = linesData.order || Object.keys(linesMeta);

  var productsMeta = {};
  var productOrder = [];

  var files = safeReaddir(PRODUCTS_DIR).filter(function(f) {
    return f !== 'lines.json' && f.endsWith('.json');
  });

  files.forEach(function(filename) {
    var filePath = path.join(PRODUCTS_DIR, filename);
    try {
      var lineFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      var lineId = lineFile.line;
      var lineDefaults = lineFile.defaults || {};
      var products = lineFile.products || {};

      Object.keys(products).forEach(function(productId) {
        var pData = products[productId];
        var productDefaults = pData.defaults || {};
        var variants = pData.variants || {};

        var expandedVariants = {};
        Object.keys(variants).forEach(function(variantId) {
          var vData = variants[variantId];
          var expandedI18n = expandVariantI18n(lineDefaults, productDefaults, vData);
          var expandedHighlights = expandVariantHighlights(lineDefaults, productDefaults, vData);

          var expandedVariant = {
            name: vData.name || variantId,
            models: vData.models || [],
            i18n: expandedI18n
          };
          if (vData.sharedCategories) expandedVariant.sharedCategories = vData.sharedCategories;
          if (vData.sharedFrom) expandedVariant.sharedFrom = vData.sharedFrom;
          if (vData.color) expandedVariant.color = vData.color;

          if (expandedHighlights.length > 0) {
            var langs = ['zh', 'en', 'ko', 'ja'];
            langs.forEach(function(lang) {
              if (expandedVariant.i18n[lang]) {
                expandedVariant.i18n[lang].highlights = expandedHighlights.map(function(h) {
                  return {
                    label: (h.label && h.label[lang]) || '',
                    value: h.value || '',
                    icon: h.icon || 'file'
                  };
                });
              }
            });
          }

          expandedVariants[variantId] = expandedVariant;
        });

        var expandedProductI18n = expandProductI18n(lineDefaults, pData);

        productsMeta[productId] = {
          line: lineId,
          name: pData.name || productId,
          color: pData.color || '#2563eb',
          i18n: expandedProductI18n,
          variants: expandedVariants
        };

        productOrder.push(productId);
      });
    } catch (e) {
      console.error('Error loading ' + filename + ': ' + e.message);
    }
  });

  return {
    linesMeta: linesMeta,
    lineOrder: lineOrder,
    productsMeta: productsMeta,
    productOrder: productOrder
  };
}

function scanCategoryDir(categoryPath, r2KeyPrefix) {
  var files = [];

  function scanDir(dirPath, prefix) {
    safeReaddir(dirPath).forEach(function(filename) {
      var fullPath = path.join(dirPath, filename);

      if (isDir(fullPath)) {
        scanDir(fullPath, prefix ? prefix + '/' + filename : filename);
        return;
      }

      try {
        var stat = fs.statSync(fullPath);
        if (!stat.isFile() || filename === '.manifest.json' || stat.size < 5) return;

        if (path.extname(filename).toLowerCase() === '.link') {
          var content = fs.readFileSync(fullPath, 'utf8').trim();
          var lines = content.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });
          if (lines.length === 0) return;
          
          var url = lines[0];
          var linkName = getFileNameWithoutExt(filename);
          var descriptions = {};
          
          for (var i = 1; i < lines.length; i++) {
            var line = lines[i];
            var match = line.match(/^(zh|en|ja|ko):\s*(.+)$/);
            if (match) {
              descriptions[match[1]] = match[2];
            }
          }
          
          files.push({
            name: linkName,
            type: 'link',
            url: url,
            descriptions: descriptions,
            size: '',
            date: stat.mtime.toISOString().substring(0, 10),
            r2Key: r2KeyPrefix + '/' + (prefix ? prefix + '/' : '') + linkName
          });
          return;
        }

        files.push({
          name: getFileNameWithoutExt(filename),
          type: getFileType(filename),
          size: formatSize(stat.size),
          date: stat.mtime.toISOString().substring(0, 10),
          r2Key: r2KeyPrefix + '/' + (prefix ? prefix + '/' : '') + filename
        });
      } catch (e) { }
    });
  }

  scanDir(categoryPath, '');

  return files;
}

function sortFiles(files, categoryId) {
  var sortOrder = FILE_SORT_ORDER[categoryId];
  if (!sortOrder) return files;
  files.sort(function(a, b) {
    var na = a.name;
    var nb = b.name;
    var ia = -1;
    var ib = -1;
    for (var k = 0; k < sortOrder.length; k++) {
      if (na.indexOf(sortOrder[k]) !== -1 && ia === -1) ia = k;
      if (nb.indexOf(sortOrder[k]) !== -1 && ib === -1) ib = k;
    }
    if (ia === -1) ia = 999;
    if (ib === -1) ib = 999;
    if (ia !== ib) return ia - ib;
    var typeOrder = { link: 0, zip: 1, pdf: 2 };
    var ta = typeOrder[a.type] !== undefined ? typeOrder[a.type] : 9;
    var tb = typeOrder[b.type] !== undefined ? typeOrder[b.type] : 9;
    if (ta !== tb) return ta - tb;
    return na.localeCompare(nb);
  });
  return files;
}

function scanDocs() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error('docs/ directory not found');
    return { variantFiles: {}, productFiles: {}, lineFiles: {} };
  }

  var variantFiles = {};
  var productFiles = {};
  var lineFiles = {};

  var lineDirs = safeReaddir(DOCS_DIR).filter(function(name) {
    return isDir(path.join(DOCS_DIR, name));
  });

  lineDirs.forEach(function(lineId) {
    var linePath = path.join(DOCS_DIR, lineId);

    var lineLevelCategories = {};
    var entries = safeReaddir(linePath);

    entries.forEach(function(entry) {
      var entryPath = path.join(linePath, entry);
      if (!isDir(entryPath)) return;

      var catId = matchCategoryId(entry);
      if (catId) {
        var files = scanCategoryDir(entryPath, lineId + '/' + entry);
        if (files.length > 0) {
          sortFiles(files, catId);
          lineLevelCategories[catId] = files;
        }
      } else if (entry === '通用') {
        var commonSubDirs = safeReaddir(entryPath).filter(function(name) {
          return isDir(path.join(entryPath, name));
        });
        commonSubDirs.forEach(function(catId) {
          var catPath = path.join(entryPath, catId);
          var files = scanCategoryDir(catPath, lineId + '/通用/' + catId);
          if (files.length > 0) {
            sortFiles(files, catId);
            lineLevelCategories[catId] = files;
          }
        });
      }
    });

    if (Object.keys(lineLevelCategories).length > 0) {
      lineFiles[lineId] = lineLevelCategories;
    }

    var productDirs = entries.filter(function(name) {
      var p = path.join(linePath, name);
      return isDir(p) && name !== '通用' && !matchCategoryId(name);
    });

    productDirs.forEach(function(productId) {
      var productPath = path.join(linePath, productId);
      var productLevelCategories = {};

      var productEntries = safeReaddir(productPath);

      productEntries.forEach(function(entry) {
        var entryPath = path.join(productPath, entry);
        if (!isDir(entryPath)) return;

        var catId = matchCategoryId(entry);
        if (catId) {
          var files = scanCategoryDir(entryPath, lineId + '/' + productId + '/' + entry);
          if (files.length > 0) {
            sortFiles(files, catId);
            productLevelCategories[catId] = files;
          }
        }
      });

      if (Object.keys(productLevelCategories).length > 0) {
        productFiles[productId] = productLevelCategories;
      }

      var variantDirs = productEntries.filter(function(name) {
        var p = path.join(productPath, name);
        return isDir(p) && !matchCategoryId(name);
      });

      variantDirs.forEach(function(variantId) {
        var variantPath = path.join(productPath, variantId);
        var categories = {};

        var categoryDirs = safeReaddir(variantPath).filter(function(name) {
          return isDir(path.join(variantPath, name));
        });

        categoryDirs.forEach(function(categoryId) {
          var categoryPath = path.join(variantPath, categoryId);
          var files = scanCategoryDir(categoryPath, lineId + '/' + productId + '/' + variantId + '/' + categoryId);
          if (files.length > 0) {
            sortFiles(files, categoryId);
            categories[categoryId] = files;
          }
        });

        if (Object.keys(categories).length > 0) {
          if (!variantFiles[productId]) variantFiles[productId] = {};
          variantFiles[productId][variantId] = categories;
        }
      });
    });
  });

  return { variantFiles: variantFiles, productFiles: productFiles, lineFiles: lineFiles };
}

function buildDataJS(scanResult) {
  var variantFiles = scanResult.variantFiles;
  var productLevelFiles = scanResult.productFiles;
  var lineLevelFiles = scanResult.lineFiles;

  var loaded = loadProductsData();
  var linesMeta = loaded.linesMeta;
  var lineOrder = loaded.lineOrder;
  var productsMeta = loaded.productsMeta;
  var productOrder = loaded.productOrder;

  var publishedProducts = {};
  Object.keys(productsMeta).forEach(function(productId) {
    var meta = productsMeta[productId];
    var variantsMeta = meta.variants || {};
    var pVariantFiles = variantFiles[productId] || {};
    var pProductFiles = productLevelFiles[productId] || {};
    var lineId = meta.line;
    var pLineFiles = lineLevelFiles[lineId] || {};
    var hasPublished = false;
    Object.keys(variantsMeta).forEach(function(variantId) {
      var vFiles = pVariantFiles[variantId] || {};
      var allCats = Object.assign({}, vFiles);
      Object.keys(pProductFiles).forEach(function(catId) {
        if (!allCats[catId]) allCats[catId] = pProductFiles[catId];
      });
      Object.keys(pLineFiles).forEach(function(catId) {
        if (!allCats[catId]) allCats[catId] = pLineFiles[catId];
      });
      if (Object.keys(allCats).length > 0 && allCats['hardware']) hasPublished = true;
    });
    if (hasPublished) publishedProducts[productId] = true;
  });

  var linesArray = [];
  var allLineIds = Object.keys(linesMeta);
  allLineIds.sort(function(a, b) {
    var ia = lineOrder.indexOf(a); if (ia === -1) ia = 999;
    var ib = lineOrder.indexOf(b); if (ib === -1) ib = 999;
    return ia - ib;
  });

  allLineIds.forEach(function(lineId) {
    var meta = linesMeta[lineId] || {};
    var productIds = [];
    productOrder.forEach(function(pid) {
      if (productsMeta[pid].line === lineId && publishedProducts[pid]) productIds.push(pid);
    });
    if (productIds.length === 0) return;
    linesArray.push({
      id: lineId,
      color: meta.color || '#2563eb',
      i18n: meta.i18n || { zh: lineId, en: lineId },
      products: productIds
    });
  });

  var productsArray = [];
  productOrder.forEach(function(productId) {
    var meta = productsMeta[productId];
    if (!meta) return;
    var variantsMeta = meta.variants || {};
    var pVariantFiles = variantFiles[productId] || {};
    var pProductFiles = productLevelFiles[productId] || {};
    var lineId = meta.line;
    var pLineFiles = lineLevelFiles[lineId] || {};

    var variantsArray = [];
    Object.keys(variantsMeta).forEach(function(variantId) {
      var vMeta = variantsMeta[variantId];
      var vFiles = pVariantFiles[variantId] || {};
      var categoryMap = {};

      CATEGORY_ORDER.forEach(function(catId) {
        if (vFiles[catId]) {
          categoryMap[catId] = {
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: vFiles[catId],
            shared: false
          };
        }
      });

      CATEGORY_ORDER.forEach(function(catId) {
        if (categoryMap[catId]) return;
        if (vMeta.sharedCategories && vMeta.sharedCategories.indexOf(catId) !== -1) {
          var sourceFiles;
          var sharedFrom = vMeta.sharedFrom || 'product';
          if (sharedFrom === 'product') {
            sourceFiles = pProductFiles[catId];
          } else if (sharedFrom === 'line') {
            sourceFiles = pLineFiles[catId];
          } else {
            sourceFiles = (pVariantFiles[sharedFrom] || {})[catId];
          }
          if (sourceFiles) {
            categoryMap[catId] = {
              id: catId,
              icon: CATEGORY_ICONS[catId] || 'file',
              files: sourceFiles,
              shared: true,
              sharedFrom: sharedFrom
            };
          }
        }
      });

      CATEGORY_ORDER.forEach(function(catId) {
        if (categoryMap[catId]) return;
        if (pProductFiles[catId]) {
          categoryMap[catId] = {
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: pProductFiles[catId],
            shared: true,
            sharedFrom: 'product'
          };
        }
      });

      CATEGORY_ORDER.forEach(function(catId) {
        if (categoryMap[catId]) return;
        if (pLineFiles[catId]) {
          categoryMap[catId] = {
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: pLineFiles[catId],
            shared: true,
            sharedFrom: 'line'
          };
        }
      });

      var categoryArray = CATEGORY_ORDER.filter(function(catId) {
        return categoryMap[catId];
      }).map(function(catId) {
        return categoryMap[catId];
      });

      if (categoryArray.length === 0) return;
      if (!categoryMap['hardware']) return;

      variantsArray.push({
        id: variantId,
        name: vMeta.name || variantId,
        models: vMeta.models || [],
        i18n: vMeta.i18n || {
          zh: { fullName: variantId, subtitle: '', badge: '', readingOrder: '' },
          en: { fullName: variantId, subtitle: '', badge: '', readingOrder: '' },
          ko: { fullName: variantId, subtitle: '', badge: '', readingOrder: '' },
          ja: { fullName: variantId, subtitle: '', badge: '', readingOrder: '' }
        },
        categories: categoryArray
      });
    });

    if (variantsArray.length === 0) return;

    productsArray.push({
      id: productId,
      line: meta.line,
      name: meta.name || productId,
      color: meta.color || '#2563eb',
      i18n: meta.i18n || {
        zh: { fullName: productId, subtitle: '' },
        en: { fullName: productId, subtitle: '' }
      },
      variants: variantsArray
    });
  });

  var existingConfig = loadExistingSiteConfig();
  var finalConfig = existingConfig || SITE_CONFIG;

  var lineSharedObj = {};
  Object.keys(lineLevelFiles).forEach(function(lineId) {
    var cats = {};
    Object.keys(lineLevelFiles[lineId]).forEach(function(catId) {
      cats[catId] = lineLevelFiles[lineId][catId];
    });
    if (Object.keys(cats).length > 0) lineSharedObj[lineId] = cats;
  });

  var productSharedObj = {};
  Object.keys(productLevelFiles).forEach(function(productId) {
    var cats = {};
    Object.keys(productLevelFiles[productId]).forEach(function(catId) {
      cats[catId] = productLevelFiles[productId][catId];
    });
    if (Object.keys(cats).length > 0) productSharedObj[productId] = cats;
  });

  return '// This file is auto-generated by scripts/sync-data.js.\n' +
    '// Do NOT edit manually — any changes will be overwritten on next sync.\n' +
    '// To update product metadata, edit files in products/ directory instead.\n\n' +
    'const SITE_CONFIG = ' + JSON.stringify(finalConfig, null, 2) + ';\n\n' +
    'const LINES = ' + JSON.stringify(linesArray, null, 2) + ';\n\n' +
    'const LINE_SHARED = ' + JSON.stringify(lineSharedObj, null, 2) + ';\n\n' +
    'const PRODUCT_SHARED = ' + JSON.stringify(productSharedObj, null, 2) + ';\n\n' +
    'const PRODUCTS = ' + JSON.stringify(productsArray, null, 2) + ';\n\n' +
    'function getLocalizedName(obj) {\n' +
    '  if (typeof obj === "string") return obj;\n' +
    '  return obj[currentLang] || obj.zh || obj.en || "";\n' +
    '}\n';
}

function generateLineFile(lineId, lineMeta) {
  var lineI18n = lineMeta.i18n || {};
  var lineNameZh = lineI18n.zh || lineId;
  var lineNameEn = lineI18n.en || lineId;
  var lineNameKo = lineI18n.ko || lineId;
  var lineNameJa = lineI18n.ja || lineId;

  var suffixZh = /模组|模块|网关|终端|工控$/.test(lineNameZh) ? '' : '模组';
  var suffixEn = /Module|Modules|Gateway|Terminal|Control$/.test(lineNameEn) ? '' : ' Module';
  var suffixKo = /모듈|게이트웨이|단말|제어$/.test(lineNameKo) ? '' : ' 모듈';
  var suffixJa = /モジュール|ゲートウェイ|端末|制御$/.test(lineNameJa) ? '' : 'モジュール';

  return {
    line: lineId,
    defaults: {
      i18n: {
        zh: { subtitle: lineNameZh + suffixZh },
        en: { subtitle: lineNameEn + suffixEn },
        ko: { subtitle: lineNameKo + suffixKo },
        ja: { subtitle: lineNameJa + suffixJa }
      },
      variantDefaults: {
        i18n: {
          zh: { readingOrder: '硬件设计 → 参考设计 → AT指令 → 开发资料' },
          en: { readingOrder: 'Hardware Design → Reference Design → AT Commands → Development Resources' },
          ko: { readingOrder: '하드웨어 설계 → 참조 설계 → AT 명령 → 개발 자료' },
          ja: { readingOrder: 'ハードウェア設計 → 参考設計 → ATコマンド → 開発資料' }
        },
        highlights: {
          bands: { label: { zh: '支持频段', en: 'Supported Bands', ko: '지원 대역', ja: '対応バンド' }, icon: 'signal' },
          certs: { label: { zh: '已获认证', en: 'Certifications', ko: '취득 인증', ja: '取得認証' }, icon: 'shield' },
          size:  { label: { zh: '产品尺寸', en: 'Product Dimensions', ko: '제품 크기', ja: '製品寸法' }, icon: 'ruler' },
          chip:  { label: { zh: '主芯片', en: 'Main Chip', ko: '메인 칩', ja: 'メインチップ' }, icon: 'cpu' }
        }
      }
    },
    products: {}
  };
}

function cmdInitProducts() {
  var linesFilePath = path.join(PRODUCTS_DIR, 'lines.json');
  if (!fs.existsSync(linesFilePath)) {
    console.error('Error: products/lines.json not found');
    return;
  }

  var linesData = JSON.parse(fs.readFileSync(linesFilePath, 'utf8'));
  var items = linesData.items || {};
  var created = 0;
  var skipped = 0;

  Object.keys(items).forEach(function(lineId) {
    var meta = items[lineId];
    var filename = meta.file;
    if (!filename) {
      console.log('  SKIP: ' + lineId + ' (no file field)');
      skipped++;
      return;
    }

    var filePath = path.join(PRODUCTS_DIR, filename);
    if (fs.existsSync(filePath)) {
      console.log('  EXISTS: ' + filename + ' (' + lineId + ')');
      skipped++;
      return;
    }

    var template = generateLineFile(lineId, meta);
    fs.writeFileSync(filePath, JSON.stringify(template, null, 2) + '\n', 'utf8');
    console.log('  CREATED: ' + filename + ' (' + lineId + ')');
    created++;
  });

  console.log('\nDone: ' + created + ' created, ' + skipped + ' skipped');
}

function main() {
  var command = process.argv[2] || 'sync';

  if (command === 'scan') {
    var scanResult = scanDocs();
    console.log('=== Line-level shared files ===');
    Object.keys(scanResult.lineFiles).forEach(function(lineId) {
      console.log(lineId + ':');
      Object.keys(scanResult.lineFiles[lineId]).forEach(function(catId) {
        console.log('  ' + catId + '/ (' + scanResult.lineFiles[lineId][catId].length + ' files)');
      });
    });
    console.log('\n=== Product-level shared files ===');
    Object.keys(scanResult.productFiles).forEach(function(pid) {
      console.log(pid + ':');
      Object.keys(scanResult.productFiles[pid]).forEach(function(catId) {
        console.log('  ' + catId + '/ (' + scanResult.productFiles[pid][catId].length + ' files)');
      });
    });
    console.log('\n=== Variant-level files ===');
    Object.keys(scanResult.variantFiles).forEach(function(pid) {
      console.log(pid + ':');
      Object.keys(scanResult.variantFiles[pid]).forEach(function(vid) {
        console.log('  ' + vid + ':');
        Object.keys(scanResult.variantFiles[pid][vid]).forEach(function(cid) {
          console.log('    ' + cid + '/ (' + scanResult.variantFiles[pid][vid][cid].length + ' files)');
        });
      });
    });
    return;
  }

  if (command === 'init-products') {
    cmdInitProducts();
    return;
  }

  if (command === 'sync') {
    var scanResult = scanDocs();
    var output = buildDataJS(scanResult);
    fs.writeFileSync(DATA_FILE, output, 'utf8');

    var totalFiles = 0;
    var totalVariants = 0;
    Object.keys(scanResult.variantFiles).forEach(function(pid) {
      Object.keys(scanResult.variantFiles[pid]).forEach(function(vid) {
        totalVariants++;
        Object.keys(scanResult.variantFiles[pid][vid]).forEach(function(cid) {
          totalFiles += scanResult.variantFiles[pid][vid][cid].length;
        });
      });
    });
    Object.keys(scanResult.productFiles).forEach(function(pid) {
      Object.keys(scanResult.productFiles[pid]).forEach(function(cid) {
        totalFiles += scanResult.productFiles[pid][cid].length;
      });
    });
    Object.keys(scanResult.lineFiles).forEach(function(lineId) {
      Object.keys(scanResult.lineFiles[lineId]).forEach(function(cid) {
        totalFiles += scanResult.lineFiles[lineId][cid].length;
      });
    });

    console.log('Synced: ' + Object.keys(scanResult.variantFiles).length + ' products, ' + totalVariants + ' variants, ' + totalFiles + ' files');
    console.log('Output: ' + DATA_FILE);
    return;
  }

  console.log('Usage: node scripts/sync-data.js [sync|scan|init-products]');
}

main();
