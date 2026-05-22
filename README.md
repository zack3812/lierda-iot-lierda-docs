# 利尔达模组资料中心

> Lierda Module Documentation Center

利尔达科技集团物联网模组文档管理与展示平台，支持多产品线、多语言（中/英/日/韩）、PDF 在线预览及云端存储。

**在线访问**: [https://lierda-iot-lierda-docs.xzackphone.workers.dev](https://lierda-iot-lierda-docs.xzackphone.workers.dev)

## ✨ 核心特性

- 📦 **多产品线管理** - 支持 Cat.1 bis、NB-IoT、5G、LoRaWAN、Wi-Fi、蓝牙、星闪等 13+ 产品线
- 🌍 **多语言支持** - 中文、英文、日文、韩文四语言界面切换
- 📄 **PDF 在线预览** - 内置 PDF 查看器，无需下载即可浏览文档
- ☁️ **云端存储** - 基于 Cloudflare R2 的对象存储，全球 CDN 加速
- 🔍 **智能搜索** - 支持文件名快速检索
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🔄 **增量部署** - 智能识别文件变更，仅上传新增或修改的文件

## 📁 项目结构

```
LierdaWorldFile/
├── index.html              # 主页面 - 产品列表与文档展示
├── viewer.html             # PDF 在线查看器
├── products.json           # 产品元数据配置（名称、颜色、多语言描述）
├── css/
│   └── style.css           # 全局样式表
├── js/
│   ├── data.js             # 自动生成的文件索引数据（勿手动编辑）
│   ├── i18n.js             # 多语言配置文件
│   └── main.js             # 前端主逻辑
├── assets/
│   └── images/
│       └── Lierda-logo.png # 品牌 Logo
├── docs/                   # 文档源文件目录（不上传到 Git）
│   ├── [产品线]/           # 例如：Cat.1 bis、NB-IOT、5G
│   │   └── [产品型号]/     # 例如：NT26-KCN、NT26-FCN
│   │       └── [系列]/     # 例如：B系列、C系列、D系列
│   │           ├── hardware/       # 硬件资料（Datasheet、原理图、封装库）
│   │           ├── software/       # 软件资料（SDK、AT指令、固件）
│   │           ├── tools/          # 开发工具（烧录工具、调试助手）
│   │           ├── certification/  # 认证资料（CCC、SRRC、RoHS）
│   │           └── evb/            # 开发板资料（EVB手册、BOM清单）
├── scripts/
│   ├── r2-upload.ps1       # R2 上传工具（部署/同步/状态查看）
│   ├── sync-data.js        # 数据同步脚本（docs/ → js/data.js）
│   └── init-dirs.js        # 目录初始化辅助脚本
└── .wrangler/              # Wrangler 配置缓存
```

## 🛠️ 环境要求

| 工具 | 版本要求 | 用途 | 安装方式 |
|------|---------|------|----------|
| **Node.js** | >= 14.0 | 数据同步脚本运行环境 | [下载](https://nodejs.org/) |
| **Wrangler** | >= 2.0 | Cloudflare R2 上传工具 | `npm install -g wrangler` |
| **Git** | >= 2.0 | 版本管理与代码推送 | [下载](https://git-scm.com/) |
| **PowerShell** | >= 5.0 | Windows 部署脚本执行环境 | Windows 内置 |

> 💡 **提示**: 首次使用前请运行 `wrangler login` 完成 Cloudflare 授权

## 🚀 快速开始

### 1. 克隆仓库

```powershell
git clone https://github.com/zack3812/lierda-iot-lierda-docs.git
cd lierda-iot-lierda-docs
```

### 2. Cloudflare 授权

```powershell
wrangler login
```

浏览器会自动打开，点击 **Allow** 完成授权。

### 3. 初始化目录结构

```powershell
.\scripts\r2-upload.ps1 init
```

此命令会在 `docs/` 下创建所有产品线及分类的文件夹，并生成占位文件。

### 4. 添加文档文件

将真实的模组文档放入对应的 `docs/` 子目录中：

```
docs/
├── Cat.1 bis/
│   └── NT26-KCN/
│       └── B系列/
│           ├── hardware/
│           │   └── NT26-KCN-B-Datasheet_Rev1.0.pdf
│           ├── software/
│           │   └── AT指令集.pdf
│           └── ...
```

> 📝 **命名规则**: 文件名（不含扩展名）即为网站上显示的名称

### 5. 查看文件状态

```powershell
.\scripts\r2-upload.ps1 status
```

输出示例：

```
   [ 新增 + ] Cat.1 bis/NT26-KCN/B系列/hardware/Datasheet.pdf
   [  占位  ] Cat.1 bis/NT26-KCN/B系列/software/placeholder.txt
   统计: 新增=1  修改=0  未变=0  占位=21
```

| 标识 | 含义 |
|------|------|
| `[ 新增 + ]` | 真实文件，待上传 |
| `[ 修改 * ]` | 已上传过但本地有更新 |
| `[ 未变 - ]` | 已上传且无变化 |
| `[  占位  ]` | 占位文件，不会上传 |

### 6. 一键部署

```powershell
.\scripts\r2-upload.ps1 deploy
```

此命令会：
1. 扫描 `docs/` 中新增/修改的文件
2. 逐个上传到 Cloudflare R2
3. 自动调用 `sync-data.js` 更新 `js/data.js`
4. 保存上传记录到 `.manifest.json`

### 7. 推送到 GitHub

```powershell
git add .
git commit -m "docs: 添加 NT26-KCN B系列文档"
git push origin main
```

## 📖 日常操作

### 上传新文件

1. 将文件放入 `docs/` 对应目录（参考 [项目结构](#-项目结构)）
2. 运行 `.\scripts\r2-upload.ps1 status` 确认状态
3. 运行 `.\scripts\r2-upload.ps1 deploy` 上传并同步

### 更新已有文件

1. 替换 `docs/` 中的文件（保持文件名不变）
2. 运行 `.\scripts\r2-upload.ps1 deploy`
3. 系统会自动检测哈希变化并重新上传

### 仅同步数据（不上传）

```powershell
node scripts/sync-data.js sync
```

适用于本地修改了 `products.json` 后重新生成 `js/data.js`。

### 查看扫描结果（只读模式）

```powershell
node scripts/sync-data.js scan
```

输出所有产品线、产品型号及文件统计信息，不修改任何文件。

### 查看 R2 上的文件

```powershell
# 列出所有文件
.\scripts\r2-upload.ps1 list

# 按前缀过滤
.\scripts\r2-upload.ps1 list "Cat.1 bis/NT26-KCN/"
```

### 删除 R2 文件

```powershell
.\scripts\r2-upload.ps1 delete "Cat.1 bis/NT26-KCN/B系列/hardware/old-file.pdf"
```

> ⚠️ **注意**: 删除后需手动从 `docs/` 目录移除对应文件，然后运行 `deploy` 同步

### 重置上传记录

```powershell
.\scripts\r2-upload.ps1 reset
```

下次 `deploy` 时将全量上传所有文件（慎用）。

### 检查环境状态

```powershell
.\scripts\r2-upload.ps1 check
```

检查 wrangler 安装、R2 API 连接、docs/ 目录文件数量等。

## 🆕 新增产品线

### 1. 创建目录结构

```powershell
# 以新产品线 "WiFi-6" 为例
New-Item -ItemType Directory -Path "docs\WiFi-6\产品型号\系列\hardware" -Force
New-Item -ItemType Directory -Path "docs\WiFi-6\产品型号\系列\software" -Force
New-Item -ItemType Directory -Path "docs\WiFi-6\产品型号\系列\tools" -Force
New-Item -ItemType Directory -Path "docs\WiFi-6\产品型号\系列\certification" -Force
New-Item -ItemType Directory -Path "docs\WiFi-6\产品型号\系列\evb" -Force
```

### 2. 编辑 products.json

在 `products.json` 的 `lines` 部分添加新产品线：

```json
{
  "lines": {
    ...已有产品线...,
    "WiFi-6": {
      "color": "#0ea5e9",
      "i18n": {
        "zh": "WiFi-6 高速无线",
        "en": "WiFi-6 High-Speed Wireless",
        "ja": "WiFi-6 高速無線",
        "ko": "WiFi-6 고속 무선"
      }
    }
  },
  ...已有产品...
}
```

如需添加具体产品，在产品列表中添加：

```json
{
  ...已有产品...,
  "NT30-WFN": {
    "line": "WiFi-6",
    "name": "NT30-WFN",
    "color": "#0ea5e9",
    "i18n": {
      "zh": { "fullName": "NT30-WFN", "subtitle": "WiFi-6 无线模组" },
      "en": { "fullName": "NT30-WFN", "subtitle": "WiFi-6 Wireless Module" },
      "ja": { "fullName": "NT30-WFN", "subtitle": "WiFi-6 ワイヤレスモジュール" },
      "ko": { "fullName": "NT30-WFN", "subtitle": "WiFi-6 무선 모듈" }
    },
    "variants": {
      "A系列": {
        "name": "NT30-WFN A",
        "models": ["NT30-WFN A01", "NT30-WFN A02"],
        "i18n": {
          "zh": {
            "fullName": "NT30-WFN A系列",
            "subtitle": "标准型 WiFi-6 模组",
            "badge": "📶 无线通信 · WiFi-6",
            "description": "NT30-WFN A是利尔达推出的标准型 WiFi-6 无线模组...",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT30-WFN A Series",
            "subtitle": "Standard WiFi-6 Module",
            "badge": "📶 Wireless · WiFi-6",
            "description": "NT30-WFN A is a standard WiFi-6 wireless module...",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          }
        }
      }
    }
  }
}
```

### 3. 放入文件并部署

```powershell
.\scripts\r2-upload.ps1 deploy
```

系统会自动扫描新目录并生成对应的数据索引。

## 📂 自定义分类

分类由 `docs/` 下的子文件夹名决定。系统支持以下标准分类：

| 文件夹名 | 分类ID | 图标 | 显示名称（中文） | 用途 |
|---------|--------|------|---------------|------|
| `hardware` | hardware | cpu | 硬件资料 | Datasheet、原理图、封装库、射频设计 |
| `software` | software | code | 软件资料 | SDK、AT指令集、固件升级、示例代码 |
| `tools` | tools | wrench | 开发工具 | 烧录工具、调试助手、串口工具 |
| `certification` | certification | shield | 认证资料 | CCC、SRRC、RoHS、NAL 等证书 |
| `evb` | evb | board | 开发板资料 | EVB使用手册、原理图、BOM清单 |

### 新增自定义分类

如需新增分类（例如 `application`），需修改两处：

1. **scripts/sync-data.js** - 添加图标映射：

```javascript
var CATEGORY_ICONS = {
  hardware: 'cpu',
  software: 'code',
  tools: 'wrench',
  certification: 'shield',
  evb: 'board',
  application: 'layers'  // 新增
};
```

2. **js/i18n.js** - 添加多语言文本：

```javascript
zh: {
  ...
  catApplication: "应用方案",
  catApplicationDesc: "典型应用场景与参考设计"
},
en: {
  ...
  catApplication: "Applications",
  catApplicationDesc: "Typical use cases and reference designs"
}
```

## 💻 本地预览

### 方法一：Python HTTP 服务器

```powershell
python -m http.server 8080
```

访问 [http://localhost:8080](http://localhost:8080)

### 方法二：Node.js http-server

```powershell
npm install -g http-server
http-server -p 8080
```

### 方法三：VS Code Live Server

安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 插件，右键 `index.html` 选择 "Open with Live Server"。

> 📝 **注意**: 本地预览时 PDF 在线查看功能可能受浏览器 CORS 策略限制，建议使用部署后的线上地址测试完整功能。

## 🌐 网站访问地址

- **Cloudflare Workers**: [https://lierda-iot-lierda-docs.xzackphone.workers.dev](https://lierda-iot-lierda-docs.xzackphone.workers.dev)
- **自定义域名**: 在 Cloudflare Dashboard → Workers → Settings → Domains & Routes 中绑定

### 部署架构

```
用户浏览器
    ↓
Cloudflare CDN (全球加速)
    ↓
Cloudflare Workers (静态站点托管)
    ↓
Cloudflare R2 (对象存储 - 文档文件)
```

所有文档文件存储在 R2 Bucket `lierda-docs` 中，通过公开访问 URL 提供下载和预览。

## 📄 配置文件说明

### products.json - 产品元数据

控制每个产品线在网站上的展示信息：

```json
{
  "lines": {
    "Cat.1 bis": {
      "color": "#2563eb",
      "i18n": {
        "zh": "Cat.1 bis 蜂窝通信",
        "en": "Cat.1 bis Cellular"
      }
    }
  },
  "NT26-KCN": {
    "line": "Cat.1 bis",
    "name": "NT26-KCN",
    "color": "#2563eb",
    "i18n": {
      "zh": { "fullName": "NT26-KCN", "subtitle": "Cat.1bis 蜂窝通信模组" },
      "en": { "fullName": "NT26-KCN", "subtitle": "Cat.1bis Cellular Module" }
    },
    "variants": {
      "B系列": {
        "name": "NT26-KCN B",
        "models": ["NT26-KCN B01", "NT26-KCN B02"],
        "sharedCategories": ["software", "tools"],
        "sharedFrom": "B系列",
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN B系列",
            "subtitle": "通用型 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis",
            "description": "产品描述...",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          }
        }
      }
    }
  }
}
```

#### 字段说明

| 字段 | 层级 | 说明 |
|------|------|------|
| `lines` | 根节点 | 所有产品线定义 |
| `lines.{id}.color` | 产品线 | 主题色（Hero 区域背景） |
| `lines.{id}.i18n` | 产品线 | 多语言名称 |
| `{productId}` | 根节点 | 具体产品定义 |
| `{productId}.line` | 产品 | 所属产品线 ID |
| `{productId}.variants` | 产品 | 产品系列/变体列表 |
| `variants.{id}.models` | 变体 | 具体型号列表 |
| `variants.{id}.sharedCategories` | 变体 | 共享分类列表 |
| `variants.{id}.sharedFrom` | 变体 | 共享来源变体 ID |
| `i18n.*.fullName` | 变体 | 全名（Hero 标题） |
| `i18n.*.subtitle` | 变体 | 副标题 |
| `i18n.*.badge` | 变体 | 徽章文字 |
| `i18n.*.description` | 变体 | 产品描述 |
| `i18n.*.status` | 变体 | 资料状态（完整/维护中） |
| `i18n.*.readingOrder` | 变体 | 推荐阅读顺序 |

### js/data.js - 文件索引数据

**⚠️ 自动生成，勿手动编辑。**

由 `scripts/sync-data.js` 扫描 `docs/` 目录和 `products.json` 合并生成。包含：

- `SITE_CONFIG` - 站点配置（Repo、R2 URL）
- `LINES` - 产品线列表及关联产品
- `PRODUCTS` - 完整的产品层次结构及文件列表
- `getLocalizedName()` - 多语言名称获取函数

每次运行 `deploy` 或 `sync` 时自动更新。

### js/i18n.js - 界面多语言文本

包含网站界面的所有多语言文本：

- 按钮文字（预览、下载）
- 分类名称（硬件资料、软件资料等）
- 提示信息（加载中、错误提示）
- 统计标签（文档总数、最后更新）

支持语言：中文 (zh)、英文 (en)、日文 (ja)、韩文 (ko)

## 📝 文件命名规则

`docs/` 中的文件命名直接影响网站显示：

### 基本规则

- **文件名（不含扩展名）** = 网站上显示的名称
- **扩展名** = 文件类型标识（pdf/zip/xlsx/step等）
- **文件大小** = 自动读取并格式化（B/KB/MB）
- **修改日期** = 自动读取文件最后修改时间

### 示例

```
docs/Cat.1 bis/NT26-KCN/B系列/hardware/NT26-KCN-B-Datasheet_Rev1.0.pdf
      ↓
显示名: NT26-KCN-B-Datasheet_Rev1.0
类型:   PDF
大小:   3.5MB（自动计算）
日期:   2026-05-22（自动读取）
R2路径: Cat.1 bis/NT26-KCN/B系列/hardware/NT26-KCN-B-Datasheet_Rev1.0.pdf
下载地址: https://pub-xxx.r2.dev/Cat.1 bis/NT26-KCN/B系列/hardware/NT26-KCN-B-Datasheet_Rev1.0.pdf
```

### 支持的文件类型

| 类型 | 扩展名 | 预览支持 |
|------|--------|----------|
| PDF 文档 | .pdf | ✅ 在线预览 |
| 压缩文件 | .zip, .rar, .7z | ❌ 直接下载 |
| Excel 表格 | .xlsx, .xls | ❌ 直接下载 |
| Word 文档 | .docx, .doc | ❌ 直接下载 |
| 3D 模型 | .step, .stp | ❌ 直接下载 |
| 图片 | .png, .jpg, .jpeg | ✅ 浏览器预览 |
| 链接文件 | .link | 🔗 外部链接 |

### 链接文件 (.link)

创建 `.link` 文件可指向外部资源（如钉钉文档、在线手册）：

```
# docs/Cat.1 bis/NT26-KCN/B系列/tools/Flash Tool.link
https://alidocs.dingtalk.com/i/nodes/xxx
```

系统会识别为外部链接，点击后跳转到指定 URL。

## ❓ 常见问题

### Q1: Git 推送失败，无法连接 GitHub

**解决方案**: 配置代理（端口改为你的实际代理端口）

```powershell
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```

取消代理：

```powershell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

---

### Q2: GitHub 认证失败

GitHub 不再支持密码推送，需使用 **Personal Access Token**：

1. 访问 [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. 点击 **Generate new token (classic)**
3. 勾选 `repo` 权限
4. 生成后复制 Token（只显示一次）
5. 推送时用户名填 GitHub 用户名，密码填 Token

缓存凭据避免重复输入：

```powershell
git config --global credential.helper manager
```

---

### Q3: Wrangler 日志目录报错

**错误信息**: `ENOENT: no such file or directory, open '...\.wrangler\logs'`

**解决方案**:

```powershell
New-Item -ItemType Directory -Path "$env:APPDATA\\xdg.config\\.wrangler\\logs" -Force
```

---

### Q4: 如何修改 R2 公开访问地址

1. 登录 Cloudflare Dashboard → R2 → `lierda-docs` → 设置 → 公开访问
2. 启用后获得 `pub-xxx.r2.dev` 地址
3. 更新以下两处配置：
   - `js/data.js` 中的 `SITE_CONFIG.r2PublicUrl`
   - `scripts/r2-upload.ps1` 中的 `$R2_PUBLIC_URL`
4. 运行 `node scripts/sync-data.js sync` 重新生成 `data.js`

---

### Q5: PDF 在线预览不显示

**可能原因**:
- 浏览器 CORS 策略限制（本地预览时常见）
- R2 Bucket 未启用公开访问
- 文件路径包含特殊字符

**解决方案**:
- 使用部署后的线上地址测试
- 检查 R2 Bucket 公开访问设置
- 避免在文件名中使用空格和特殊符号

---

### Q6: 部署后网站未更新

**检查清单**:
1. 确认 `deploy` 命令执行成功，无报错
2. 检查 `js/data.js` 是否已更新
3. 清除浏览器缓存（Ctrl + Shift + Delete）
4. 等待 Cloudflare CDN 刷新（通常 1-5 分钟）
5. 使用无痕模式访问测试

---

### Q7: 如何共享通用资料（如 AT 指令集）

在 `products.json` 中配置 `sharedCategories`：

```json
{
  "variants": {
    "D系列": {
      "sharedCategories": ["software", "tools", "certification", "evb"],
      "sharedFrom": "B系列"
    }
  }
}
```

系统会自动从 B系列 复制指定分类的文件引用，无需重复上传。

---

### Q8: 文件大小显示不准确

`sync-data.js` 会读取文件实际大小并自动格式化：
- < 1KB: 显示为 `xxxB`
- < 1MB: 显示为 `xx.xKB`
- ≥ 1MB: 显示为 `xx.xMB`

如显示异常，检查文件是否完整上传到 R2。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范

- 遵循现有代码风格
- 提交信息使用语义化格式（如 `docs:`, `fix:`, `feat:`）
- 确保 `sync-data.js` 生成的 `data.js` 格式正确
