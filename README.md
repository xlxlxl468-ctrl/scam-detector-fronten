# 詐騙簡訊檢測器 - 前端應用

這是一個基於 **Nuxt 3** 和 **Vue 3** 的現代化前端應用，用於詐騙簡訊檢測的 Web 界面。

## 📋 系統需求

### 必要軟體

- **Node.js** >= 18.x （建議 20.x LTS）
- **npm** >= 9.x 或 **yarn** >= 3.x
- **Git**（用於版本控制）

### 作業系統

- Windows 10/11
- macOS 10.15+
- Linux（Ubuntu 18.04+）

## 🚀 快速開始

### 1. 克隆倉庫

```bash
git clone https://github.com/你的GitHub帳戶/scam-detector-frontend.git
cd scam-detector-frontend
```

### 2. 安裝依賴

```bash
npm install
```

或使用 yarn：

```bash
yarn install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

開發伺服器將在 `http://localhost:3000` 啟動

### 4. 建置生產版本

```bash
npm run build
```

### 5. 預覽生產版本

```bash
npm run preview
```

## 📦 主要依賴框架與套件

### 核心框架

| 套件名稱 | 版本 | 用途 |
|---------|------|------|
| **Nuxt** | ^3.13.2 | 基於 Vue 3 的全棧框架，用於伺服器端渲染和靜態生成 |
| **Vue** | ^3.x | 前端頁面和元件開發 |

### UI 組件庫

| 套件名稱 | 版本 | 用途 |
|---------|------|------|
| **@nuxt/ui** | ^2.20.0 | 高質量的 Headless UI 元件庫，包含按鈕、表單、卡片等 |
| **Tailwind CSS** | （@nuxt/ui 內含） | Utility-first CSS 框架 |

### 動畫與視覺效果

| 套件名稱 | 版本 | 用途 |
|---------|------|------|
| **GSAP** | （開發依賴） | 高效能動畫函式庫 |
| **ScrollTrigger** | （GSAP 插件） | 基於滾動位置觸發動畫 |

### Live2D 角色

| 套件名稱 | 版本 | 用途 |
|---------|------|------|
| **pixi.js** | ^6.5.10 | 2D WebGL 渲染器 |
| **pixi-live2d-display** | ^0.4.0 | Live2D 角色渲染元件 |
| **Cubism 4 Runtime** | （內含） | Live2D 模型執行時環境 |

## 📂 項目結構

```
frontend/
├── app.vue                 # 主應用元件
├── nuxt.config.ts         # Nuxt 配置檔
├── package.json           # 專案依賴定義
├── components/            # 可復用的 Vue 元件
│   ├── Live2DDisplay.client.vue      # 主頁 Live2D 角色顯示
│   ├── Live2DAssistant.client.vue    # 助手面板 Live2D 角色
│   └── ...
├── pages/                 # 路由頁面
│   ├── index.vue          # 首頁（詐騙檢測儀表板）
│   └── ...
├── composables/           # Vue 可組合邏輯
│   ├── useScamApi.ts      # API 呼叫邏輯
│   └── ...
├── assets/                # 靜態資源（CSS、圖像等）
├── public/                # 公開資源
│   └── live2d/            # Live2D 模型檔案
└── .nuxt/                 # 自動生成的 Nuxt 目錄（勿編輯）
```

## 🛠️ 開發工具與配置

### 語言支援

- **TypeScript** - 可選，已配置在 `.vue` 檔案中
- **CSS / SCSS** - Tailwind CSS + 自訂樣式

### 推薦 IDE / 編輯器

- **Visual Studio Code** 或 **WebStorm**
- VS Code 推薦安裝的擴充功能：
  - Volar（Vue 3 支援）
  - Tailwind CSS IntelliSense
  - Prettier（程式碼格式化）

## 🔌 API 整合

前端應用會連接到後端 API 以進行詐騙檢測。確保後端伺服器在開發期間正在運行。

**後端倉庫位置**：[scam-detector-backend](https://github.com/你的GitHub帳戶/scam-detector-backend)

後端 API 預設位置：`http://localhost:5000`

若需修改 API 連接位置，編輯 `composables/useScamApi.ts` 檔案。

## 📝 常見任務

### 新增頁面

在 `pages/` 資料夾中新建 `.vue` 檔案，Nuxt 會自動建立對應路由。

### 新增元件

在 `components/` 資料夾中新建 `.vue` 檔案，可在其他元件中直接使用。

### 修改樣式

使用 Tailwind CSS 的 utility 類或在 `assets/` 中新建 CSS 檔。

### 測試動畫

修改 `pages/index.vue` 中的 GSAP 配置或 ScrollTrigger 參數。

## 🐛 故障排除

### 問題：`npm install` 失敗

**解決方案**：
```bash
npm cache clean --force
npm install
```

### 問題：端口 3000 被佔用

**解決方案**：
```bash
# 用另一個端口啟動
npm run dev -- --port 3001
```

### 問題：模組找不到

**解決方案**：
```bash
rm -rf node_modules
npm install
npm run dev
```

### 問題：Live2D 角色不顯示

- 確保 `/public/live2d/` 資料夾中有模型檔案
- 檢查瀏覽器控制台是否有錯誤訊息

## 📚 官方文檔連結

- [Nuxt 3 文檔](https://nuxt.com/)
- [Vue 3 文檔](https://vuejs.org/)
- [@nuxt/ui 文檔](https://ui.nuxt.com/)
- [Tailwind CSS 文檔](https://tailwindcss.com/)
- [GSAP 文檔](https://greensock.com/gsap/)
- [Pixi.js 文檔](https://pixijs.download/release/docs/index.html)

## 👥 團隊協作

### 建議工作流程

1. 拉取最新代碼：`git pull origin main`
2. 建立特性分支：`git checkout -b feature/your-feature`
3. 進行開發並測試
4. 提交變更：`git commit -m "描述變更"`
5. 推送分支：`git push origin feature/your-feature`
6. 開啟 Pull Request 進行代碼審查

### 代碼規範

- 使用 Prettier 自動格式化代碼
- 遵循 Vue 3 Composition API 最佳實踐
- 為元件添加必要的文檔註解

## 📄 授權

本項目使用 [MIT License](LICENSE)

## 📞 聯絡方式

如有任何問題或建議，請開立 Issue 或聯絡開發團隊。

---

**最後更新**：2026 年 5 月 3 日
