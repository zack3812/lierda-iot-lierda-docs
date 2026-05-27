var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var DOCS_DIR = path.join(ROOT, 'docs');
var PRODUCTS_DIR = path.join(ROOT, 'products');

var CATEGORIES = [
  {
    id: 'hardware',
    templates: [
      { suffix: 'Datasheet_Rev1.0', ext: 'pdf' },
      { suffix: '硬件设计手册_Rev1.0', ext: 'pdf' },
      { suffix: '原理图参考设计_Rev1.0', ext: 'pdf' },
      { suffix: 'PCB封装库_Rev1.0', ext: 'zip' },
      { suffix: '射频设计指南_Rev1.0', ext: 'pdf' }
    ]
  },
  {
    id: 'software',
    templates: [
      { suffix: 'SDK_V1.0.0', ext: 'zip' },
      { suffix: 'AT指令集_Rev1.0', ext: 'pdf' },
      { suffix: '软件开发指南_Rev1.0', ext: 'pdf' },
      { suffix: '固件升级工具_V1.0.0', ext: 'zip' },
      { suffix: '示例代码库_V1.0.0', ext: 'zip' }
    ]
  },
  {
    id: 'tools',
    templates: [
      { suffix: '烧录工具_V1.0.0', ext: 'zip' },
      { suffix: '调试工具_V1.0.0', ext: 'zip' },
      { suffix: '串口调试助手_V3.5.0', ext: 'zip' }
    ]
  },
  {
    id: 'certification',
    templates: [
      { suffix: '认证证书合集_Rev1.0', ext: 'pdf' },
      { suffix: '环保报告_Rev1.0', ext: 'pdf' }
    ]
  },
  {
    id: 'evb',
    templates: [
      { suffix: 'EVB开发板使用手册_Rev1.0', ext: 'pdf' },
      { suffix: 'EVB原理图_Rev1.0', ext: 'pdf' },
      { suffix: 'EVB-BOM清单_Rev1.0', ext: 'xlsx' }
    ]
  }
];

var PLACEHOLDER_CONTENT = 'PLACEHOLDER';

function safeReaddir(dirPath) {
  try { return fs.readdirSync(dirPath); } catch (e) { return []; }
}

function loadProductsData() {
  var linesMeta = {};
  var linesFilePath = path.join(PRODUCTS_DIR, 'lines.json');
  if (fs.existsSync(linesFilePath)) {
    try {
      var linesData = JSON.parse(fs.readFileSync(linesFilePath, 'utf8'));
      linesMeta = linesData.items || {};
    } catch (e) { }
  }

  var productsMeta = {};
  var files = safeReaddir(PRODUCTS_DIR).filter(function(f) {
    return f !== 'lines.json' && f.endsWith('.json');
  });

  files.forEach(function(filename) {
    var filePath = path.join(PRODUCTS_DIR, filename);
    try {
      var lineFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      var lineId = lineFile.line;
      var products = lineFile.products || {};

      Object.keys(products).forEach(function(productId) {
        var pData = products[productId];
        productsMeta[productId] = {
          line: lineId,
          name: pData.name || productId
        };
      });
    } catch (e) { }
  });

  return { linesMeta: linesMeta, productsMeta: productsMeta };
}

function main() {
  var loaded = loadProductsData();
  var linesMeta = loaded.linesMeta;
  var productsMeta = loaded.productsMeta;

  var dirCount = 0;
  var fileCount = 0;

  Object.keys(linesMeta).forEach(function(lineId) {
    var lineDir = path.join(DOCS_DIR, lineId);
    fs.mkdirSync(lineDir, { recursive: true });
    dirCount++;

    var productsInLine = Object.keys(productsMeta).filter(function(pid) {
      return productsMeta[pid].line === lineId;
    });

    productsInLine.forEach(function(productId) {
      var meta = productsMeta[productId];
      var productShortName = meta.name || productId;

      CATEGORIES.forEach(function(cat) {
        var catDir = path.join(lineDir, productId, cat.id);
        fs.mkdirSync(catDir, { recursive: true });
        dirCount++;

        cat.templates.forEach(function(tpl) {
          var filename = productShortName + '-' + tpl.suffix + '.' + tpl.ext;
          var fullPath = path.join(catDir, filename);
          if (!fs.existsSync(fullPath)) {
            fs.writeFileSync(fullPath, PLACEHOLDER_CONTENT, 'utf8');
            fileCount++;
          }
        });
      });
    });
  });

  console.log(JSON.stringify({ dirs: dirCount, files: fileCount, lines: Object.keys(linesMeta).length, products: Object.keys(productsMeta).length }));
}

main();
