# My-Portfolio

一個全端開發的個人作品集網站。本專案採用 **Next.js (App Router)** 混合架構（Server/Client Components）與 **Prisma + Supabase** 進行動態資料對接，旨在提供極致的加載效能、流暢的微互動，以及無閃爍（Flicker-free）的使用者體驗。

---

## 🚀 技術棧 (Tech Stack)

### 前端體驗 (Frontend & UI)
- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Interactions**: React Hooks、打字機動態組件 (`TextType`)、動態模糊文字特效 (`FuzzyText`)

### 後端與資料庫 (Backend & Database)
- **Database**: Supabase (PostgreSQL 雲端資料庫)
- **ORM**: Prisma Client
- **Data Pipeline**: Next.js Server Components 直接連線資料庫，理順全站動態資料管線

---

## 🛠️ 架構優化與技術亮點 (Architecture & Highlights)

本專案採用 **Next.js 現代全端架構** 進行開發與效能優化，核心設計包含：

1. **高效能零閃爍載入 (Flicker-Free Loading)**: 全面由後端 Server Component 直接連線資料庫撈取初始資料（`initialData`），省去客戶端二次請求的時間，大幅優化 FCP（First Contentful Paint）與整體網頁載入流暢度。
2. **Server / Client 職責分離**: 
   - **Server Components (`page.tsx`)**: 專職在伺服器端高速、安全地處理非同步資料查詢與排序，保障資料庫連線與敏感憑證的安全性。
   - **Client Components (`*Client.tsx`)**: 專注於前端 UI 互動狀態維護、即時資料分類篩選與動態視覺效果。
3. **動態排序系統 (Dynamic Ordering)**: 全站資料表皆導入 `sortOrder` 控制欄位，可自由在資料庫後台或透過種子腳本隨時微調學經歷、作品集的展示順序。
4. **流暢的客戶端資料清洗 (Client-Side Filtering)**: 透過 JavaScript 陣列方法（如 `.filter()`）在 Client 端將後端傳入的資料集進行精準分類（如 `Skill` 依前端、後端、設計等分類），確保元件高效能渲染且結構清晰。

---

## 📂 專案目錄結構 (Project Structure)

```text
my-portfolio/
├── app/                        # Next.js App Router 核心路由
│   ├── page.tsx                # 首頁 (Server 端資料撈取)
│   ├── HomeClient.tsx          # 首頁互動組件 (跑打字機與名字特效)
│   ├── about/                  # 關於我區塊
│   │   ├── page.tsx            # 四區塊並行非同步撈取 (Profile, Edu, Exp, Skill)
│   │   └── AboutClient.tsx     # 依類別過濾並渲染膠囊標籤
│   ├── design-projects/        # 設計作品頁面 (漫畫、海報、社群貼文)
│   ├── programming-projects/   # 程式作品頁面 (個人網站、共享部落格等專案)
│   ├── exhibitions/            # 實體模型、展覽經歷
│   └── photography/            # 攝影作品集
├── components/                 # 可複用的 UI 互動組件 (FuzzyText, TextType, Menu)
├── lib/                        # 全域工具庫
│   └── db.ts                   # Prisma Client 單例模式執行個體
├── prisma/                     # 資料庫配置
│   ├── schema.prisma           # PostgreSQL 資料模型定義 (Prisma Schema)
│   └── seed.ts                 # 支援動態環境變數的初始化資料腳本
└── public/                     # 靜態資源
```

## 🗃️ 資料庫模型定義 (Data Schema)

- **`TypingText`**: 首頁打字機動態文案。
- **`Profile`**: 個人 Bio 與詳細簡介 (支援 HTML 富文本直接渲染)。
- **`Education` & `Experience`**: 學經歷。
- **`Skill`**: 支援 `category` 分類過濾 (Frontend, Backend, Tools, Design)。
- **`DesignProject` & `ProgrammingProject`**: 各類數位與程式作品集鏈結、外部 Source 標籤管理。
- **`Exhibition` & `Photography`**: 攝影作品與多圖展覽紀錄。

---

## 💻 本地開發指南 (Development Setup)

### 1. 環境變數配置 (`.env`)
在專案根目錄建立 `.env` 檔案（參考 `.env.example`），並填入你的 Supabase 連線字串。

### 2. 資料庫結構同步與編譯
```bash
npx prisma db push
npx prisma generate
```

### 3 灌入初始資料 (Seeding)

```bash
npx tsx prisma/seed.ts
```

### 4. 啟動開發伺服器

```bash
npm run dev
```