var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var DOCS_DIR = path.join(ROOT, 'docs');
var DATA_FILE = path.join(ROOT, 'js', 'data.js');
var PRODUCTS_FILE = path.join(ROOT, 'products.json');

var CATEGORY_ICONS = {
  hardware: 'cpu',
  software: 'code',
  tools: 'wrench',
  certification: 'shield',
  evb: 'board'
};

var FILE_SORT_ORDER = {
  tools: ['Flash Tool', 'Log Tool', 'FotaToolkit']
};

var SITE_CONFIG = {
  repo: 'zack3812/lierda-iot-lierda-docs',
  baseRepo: 'https://github.com/zack3812/lierda-iot-lierda-docs',
  r2PublicUrl: 'https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev'
};

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

function scanVariantDir(variantPath, lineId, productId, variantId) {
  var categories = {};
  var categoryDirs = safeReaddir(variantPath).filter(function(name) {
    return isDir(path.join(variantPath, name));
  });

  categoryDirs.forEach(function(categoryId) {
    var categoryPath = path.join(variantPath, categoryId);
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
            var url = fs.readFileSync(fullPath, 'utf8').trim();
            if (!url) return;
            var linkName = getFileNameWithoutExt(filename);
            var r2Key = lineId + '/' + productId + '/' + variantId + '/' + categoryId + '/' + (prefix ? prefix + '/' : '') + linkName;
            files.push({
              name: linkName,
              type: 'link',
              url: url,
              size: '',
              date: stat.mtime.toISOString().substring(0, 10),
              r2Key: r2Key
            });
            return;
          }

          var r2Key = lineId + '/' + productId + '/' + variantId + '/' + categoryId + '/' + (prefix ? prefix + '/' : '') + filename;
          files.push({
            name: getFileNameWithoutExt(filename),
            type: getFileType(filename),
            size: formatSize(stat.size),
            date: stat.mtime.toISOString().substring(0, 10),
            r2Key: r2Key
          });
        } catch (e) { }
      });
    }

    scanDir(categoryPath, '');

    if (files.length > 0) {
      var sortOrder = FILE_SORT_ORDER[categoryId];
      if (sortOrder) {
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
      }
      categories[categoryId] = files;
    }
  });

  return categories;
}

function scanDocs() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error('docs/ directory not found');
    return { lines: {}, products: {} };
  }

  var raw = {};
  if (fs.existsSync(PRODUCTS_FILE)) {
    try { raw = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8')); } catch (e) { }
  }
  var productsMeta = {};
  Object.keys(raw).forEach(function(key) {
    if (key !== 'lines') productsMeta[key] = raw[key];
  });

  var lines = {};
  var products = {};

  var lineDirs = safeReaddir(DOCS_DIR).filter(function(name) {
    return isDir(path.join(DOCS_DIR, name));
  });

  lineDirs.forEach(function(lineId) {
    var linePath = path.join(DOCS_DIR, lineId);
    if (!hasSubDirs(linePath)) return;

    var productDirs = safeReaddir(linePath).filter(function(name) {
      return isDir(path.join(linePath, name));
    });

    var lineProducts = [];
    productDirs.forEach(function(productId) {
      var productPath = path.join(linePath, productId);
      if (!hasSubDirs(productPath)) return;

      var variantDirs = safeReaddir(productPath).filter(function(name) {
        return isDir(path.join(productPath, name));
      });

      var productVariants = [];
      variantDirs.forEach(function(variantId) {
        var variantPath = path.join(productPath, variantId);
        if (!hasSubDirs(variantPath)) return;

        var categories = scanVariantDir(variantPath, lineId, productId, variantId);
        if (Object.keys(categories).length > 0) {
          productVariants.push({
            id: variantId,
            categories: categories
          });
        }
      });

      if (productVariants.length > 0) {
        products[productId] = {
          line: lineId,
          variants: productVariants
        };
        lineProducts.push(productId);
      }
    });

    lines[lineId] = lineProducts;
  });

  Object.keys(productsMeta).forEach(function(productId) {
    var meta = productsMeta[productId];
    var lineId = meta.line;
    if (!lineId) return;

    if (!products[productId]) {
      products[productId] = { line: lineId, variants: [] };
    }
    if (!lines[lineId]) { lines[lineId] = []; }
    if (lines[lineId].indexOf(productId) === -1) { lines[lineId].push(productId); }
  });

  return { lines: lines, products: products };
}

function buildDataJS(scanned) {
  var raw = {};
  if (fs.existsSync(PRODUCTS_FILE)) {
    try { raw = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8')); } catch (e) { }
  }
  var linesMeta = raw.lines || {};
  var productsMeta = {};
  Object.keys(raw).forEach(function(key) {
    if (key !== 'lines') productsMeta[key] = raw[key];
  });

  var linesArray = [];
  var allLineIds = Array.from(new Set(Object.keys(scanned.lines).concat(Object.keys(linesMeta))));
  allLineIds.sort(function(a, b) {
    var order = ['Cat.1 bis', 'NB-IOT', '5G', 'LoRaWAN模组', 'LoRaWAN网关', 'LoRa SPI', 'LoRa自组网', 'IOT Wi-Fi', '标准Wi-Fi', '蓝牙', '星闪', '嵌入式工控', '嵌入式终端'];
    var ia = order.indexOf(a); if (ia === -1) ia = 999;
    var ib = order.indexOf(b); if (ib === -1) ib = 999;
    return ia - ib;
  });

  allLineIds.forEach(function(lineId) {
    var meta = linesMeta[lineId] || {};
    var productIds = scanned.lines[lineId] || [];
    linesArray.push({
      id: lineId,
      color: meta.color || '#2563eb',
      i18n: meta.i18n || { zh: lineId, en: lineId },
      products: productIds
    });
  });

  var productsArray = [];
  Object.keys(scanned.products).sort().forEach(function(productId) {
    var info = scanned.products[productId];
    var meta = productsMeta[productId] || {};
    var variantsMeta = meta.variants || {};

    var variantsArray = [];
    info.variants.forEach(function(v) {
      var vMeta = variantsMeta[v.id] || {};
      var categoryArray = [];
      Object.keys(v.categories).sort().forEach(function(catId) {
        categoryArray.push({
          id: catId,
          icon: CATEGORY_ICONS[catId] || 'file',
          files: v.categories[catId],
          shared: false
        });
      });

      if (vMeta.sharedCategories && vMeta.sharedFrom) {
        var sourceVariant = info.variants.find(function(sv) { return sv.id === vMeta.sharedFrom; });
        if (sourceVariant) {
          vMeta.sharedCategories.forEach(function(catId) {
            if (v.categories[catId]) return;
            var sourceCat = sourceVariant.categories[catId];
            if (!sourceCat) return;
            categoryArray.push({
              id: catId,
              icon: CATEGORY_ICONS[catId] || 'file',
              files: sourceCat,
              shared: true,
              sharedFrom: vMeta.sharedFrom
            });
          });
        }
      }

      categoryArray.sort(function(a, b) {
        var order = ['hardware', 'software', 'tools', 'certification', 'evb'];
        var ia = order.indexOf(a.id); if (ia === -1) ia = 999;
        var ib = order.indexOf(b.id); if (ib === -1) ib = 999;
        return ia - ib;
      });

      variantsArray.push({
        id: v.id,
        name: vMeta.name || v.id,
        models: vMeta.models || [],
        i18n: vMeta.i18n || {
          zh: { fullName: v.id, subtitle: '', badge: '', description: '', status: '完整', readingOrder: '' },
          en: { fullName: v.id, subtitle: '', badge: '', description: '', status: 'Complete', readingOrder: '' }
        },
        categories: categoryArray
      });
    });

    productsArray.push({
      id: productId,
      line: info.line,
      name: meta.name || productId,
      color: meta.color || '#2563eb',
      i18n: meta.i18n || {
        zh: { fullName: productId, subtitle: '' },
        en: { fullName: productId, subtitle: '' }
      },
      variants: variantsArray
    });
  });

  return 'const SITE_CONFIG = ' + JSON.stringify(SITE_CONFIG, null, 2) + ';\n\n' +
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
    var scanned = scanDocs();
    console.log('Lines: ' + Object.keys(scanned.lines).join(', '));
    Object.keys(scanned.lines).forEach(function(lineId) {
      console.log('  ' + lineId + ': ' + scanned.lines[lineId].join(', '));
      scanned.lines[lineId].forEach(function(pid) {
        var variants = scanned.products[pid].variants;
        console.log('    ' + pid + ':');
        variants.forEach(function(v) {
          var cats = v.categories;
          console.log('      ' + v.id + ':');
          Object.keys(cats).forEach(function(cid) {
            console.log('        ' + cid + '/ (' + cats[cid].length + ' files)');
          });
        });
      });
    });
    return;
  }

  if (command === 'sync') {
    var scanned = scanDocs();
    var output = buildDataJS(scanned);
    fs.writeFileSync(DATA_FILE, output, 'utf8');

    var totalFiles = 0;
    var totalVariants = 0;
    Object.keys(scanned.products).forEach(function(pid) {
      scanned.products[pid].variants.forEach(function(v) {
        totalVariants++;
        Object.keys(v.categories).forEach(function(cid) {
          totalFiles += v.categories[cid].length;
        });
      });
    });

    console.log('Synced: ' + Object.keys(scanned.lines).length + ' lines, ' + Object.keys(scanned.products).length + ' products, ' + totalVariants + ' variants, ' + totalFiles + ' files');
    console.log('Output: ' + DATA_FILE);
    return;
  }

  console.log('Usage: node scripts/sync-data.js [sync|scan]');
}

main();
