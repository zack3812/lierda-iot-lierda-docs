var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var DOCS_DIR = path.join(ROOT, 'docs');
var DATA_FILE = path.join(ROOT, 'js', 'data.js');
var PRODUCTS_FILE = path.join(ROOT, 'products.json');

var FILE_SORT_ORDER = {
  tools: ['Flash Tool', 'Log Tool', 'FotaToolkit']
};

var SITE_CONFIG = {
  repo: 'zack3812/lierda-iot-lierda-docs',
  baseRepo: 'https://github.com/zack3812/lierda-iot-lierda-docs',
  r2PublicUrl: 'https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev'
};

var LINE_ORDER = ['Cat.1 bis', 'NB-IOT', '5G', 'LoRaWAN模组', 'LoRaWAN网关', 'LoRa SPI', 'LoRa自组网', 'IOT Wi-Fi', '标准Wi-Fi', '蓝牙', '星闪', '嵌入式工控', '嵌入式终端'];

var CATEGORY_ICONS = {
  hardware: 'cpu',
  software: 'code',
  tools: 'wrench',
  certification: 'shield',
  evb: 'board'
};

var CATEGORY_ORDER = ['hardware', 'software', 'tools', 'certification', 'evb'];

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

function hasSubDirs(dirPath) {
  return safeReaddir(dirPath).some(function(name) { return isDir(path.join(dirPath, name)); });
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

  var raw = {};
  if (fs.existsSync(PRODUCTS_FILE)) {
    try { raw = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8')); } catch (e) { }
  }
  var linesMeta = raw.lines || {};
  var productsMeta = {};
  Object.keys(raw).forEach(function(key) {
    if (key !== 'lines') productsMeta[key] = raw[key];
  });

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
    var ia = LINE_ORDER.indexOf(a); if (ia === -1) ia = 999;
    var ib = LINE_ORDER.indexOf(b); if (ib === -1) ib = 999;
    return ia - ib;
  });

  allLineIds.forEach(function(lineId) {
    var meta = linesMeta[lineId] || {};
    var productIds = [];
    Object.keys(productsMeta).forEach(function(pid) {
      if (productsMeta[pid].line === lineId && publishedProducts[pid]) productIds.push(pid);
    });
    productIds.sort(function(a, b) {
      var ia = Object.keys(productsMeta).indexOf(a); if (ia === -1) ia = 999;
      var ib = Object.keys(productsMeta).indexOf(b); if (ib === -1) ib = 999;
      return ia - ib;
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
  Object.keys(productsMeta).forEach(function(productId) {
    var meta = productsMeta[productId];
    var variantsMeta = meta.variants || {};
    var pVariantFiles = variantFiles[productId] || {};
    var pProductFiles = productLevelFiles[productId] || {};
    var lineId = meta.line;
    var pLineFiles = lineLevelFiles[lineId] || {};

    var variantsArray = [];
    Object.keys(variantsMeta).forEach(function(variantId) {
      var vMeta = variantsMeta[variantId];
      var vFiles = pVariantFiles[variantId] || {};
      var categoryArray = [];
      var existingCats = {};

      CATEGORY_ORDER.forEach(function(catId) {
        if (vFiles[catId]) {
          categoryArray.push({
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: vFiles[catId],
            shared: false
          });
          existingCats[catId] = true;
        }
      });

      if (vMeta.sharedCategories && vMeta.sharedFrom) {
        var sourceFiles = pVariantFiles[vMeta.sharedFrom] || {};
        vMeta.sharedCategories.forEach(function(catId) {
          if (existingCats[catId]) return;
          if (!sourceFiles[catId]) return;
          categoryArray.push({
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: sourceFiles[catId],
            shared: true,
            sharedFrom: vMeta.sharedFrom
          });
          existingCats[catId] = true;
        });
      }

      CATEGORY_ORDER.forEach(function(catId) {
        if (existingCats[catId]) return;
        if (pProductFiles[catId]) {
          categoryArray.push({
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: pProductFiles[catId],
            shared: true,
            sharedFrom: 'product'
          });
          existingCats[catId] = true;
        }
      });

      CATEGORY_ORDER.forEach(function(catId) {
        if (existingCats[catId]) return;
        if (pLineFiles[catId]) {
          categoryArray.push({
            id: catId,
            icon: CATEGORY_ICONS[catId] || 'file',
            files: pLineFiles[catId],
            shared: true,
            sharedFrom: 'line'
          });
          existingCats[catId] = true;
        }
      });

      if (categoryArray.length === 0) return;
      if (!existingCats['hardware']) return;

      variantsArray.push({
        id: variantId,
        name: vMeta.name || variantId,
        models: vMeta.models || [],
        i18n: vMeta.i18n || {
          zh: { fullName: variantId, subtitle: '', badge: '', status: '完整', readingOrder: '' },
          en: { fullName: variantId, subtitle: '', badge: '', status: 'Complete', readingOrder: '' },
          ja: { fullName: variantId, subtitle: '', badge: '', status: '資料完備', readingOrder: '' },
          ko: { fullName: variantId, subtitle: '', badge: '', status: '자료 완비', readingOrder: '' }
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

  return 'const SITE_CONFIG = ' + JSON.stringify(finalConfig, null, 2) + ';\n\n' +
    'const LINES = ' + JSON.stringify(linesArray, null, 2) + ';\n\n' +
    'const PRODUCTS = ' + JSON.stringify(productsArray, null, 2) + ';\n\n' +
    'function getLocalizedName(obj) {\n' +
    '  if (typeof obj === "string") return obj;\n' +
    '  return obj[currentLang] || obj.zh || obj.en || "";\n' +
    '}\n';
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

  console.log('Usage: node scripts/sync-data.js [sync|scan]');
}

main();