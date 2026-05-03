# Nuxt UI Frontend

## 安裝

在 `c:\專題\frontend` 執行：

```bash
npm install
npm run dev
```

預設會跑在 `http://localhost:3000`。

## 後端 API

請先啟動 Flask API：

```bash
c:/專題/.venv/Scripts/python.exe c:/專題/api_server.py
```

本專案在開發模式下會透過 `nuxt.config.ts` 的 `devProxy` 將 `/api/*` 轉發到 Flask `http://127.0.0.1:8000/api/*`。
