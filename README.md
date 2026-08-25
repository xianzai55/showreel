# 数字艺术作品集

东方数字诗意 × 沉浸式未来美术馆

在线预览：https://xianzai55.github.io/showreel/

## 技术栈

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router v7
- Lenis（平滑滚动）
- lucide-react（图标）

## 快速开始

```bash
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:5173/`。

## 构建与预览

```bash
npm run build
npm run preview
```

## 自动部署（GitHub Actions）

本站已接入 GitHub Actions 自动部署到 GitHub Pages：

- 触发条件：任何 **push 到 `main` 分支** 的代码变更
- 流程：[.github/workflows/deploy.yml](.github/workflows/deploy.yml) 会自动执行 `npm ci` → `npm run build` → 上传 `dist` 产物 → 部署到 GitHub Pages
- 因此**改动网站后只需 commit 并 push 到 main**，线上站点会自动同步更新，无需手动部署
- 站点构建在子路径 `/showreel/` 下（见 [vite.config.ts](vite.config.ts) 的 `base` 配置），保持不变即可

## 性能优化

- 路由级代码分割：每个页面按路由懒加载，配合 `PageLoader` 骨架屏
- 图片懒加载：所有非首屏图片使用 `loading="lazy"` + `decoding="async"`
- 图片淡入占位：`BoardImage` / `ExhibitFrame` 组件在加载完成前显示背景占位，加载后淡入
- 构建分块：vendor / icons / lightbox / 页面 chunk 分离，便于缓存

## 项目结构

### 展示项目

本站目前收录 7 个项目，数据定义在 `src/data/projects.ts`：

1. **体乐里 / AR Museum** — AR 博物馆
2. **云林寺壁画 / Digital Mural** — 数字壁画
3. **数字山水 / Digital Landscape** — 数字山水
4. **星球召唤 / Planet Summon** — 星球召唤
5. **线上博物馆 / The Weingreen Museum Online** — 虚拟展馆体验
6. **爱尔兰策展 / Irish Curation** — 虚拟展馆体验
7. **爱尔兰风景 / Irish Landscape** — 虚拟展馆体验

展馆类项目（线上博物馆、爱尔兰策展等）使用独立的 `Museum` 虚拟展馆系统，由 `OnlineMuseum` 页面根据 URL 中的展览 id 动态解析并渲染（见 [App.tsx](src/App.tsx) 与 [onlineMuseum.ts](src/data/onlineMuseum.ts)）：

- 展览门厅 Lobby
- 线性导览 Guided Tour（Hall 01 → Hall 02 → ...）
- 非线性自由观展 Free Explore（展馆总览平面图）
- 每个展厅有独立空间氛围、展品墙与展签
- 所有展品可点击放大查看细节

其余项目使用 `Board` 展板系统（`ProjectDetail` 页面）：每项目 2–4 块横向展板，图片以中、小尺寸编排，点击放大。

## 如何替换图片

所有展示图片整理至 `public/images/` 下，按项目分子文件夹：

- `ar-museum/` — AR博物馆
- `digital-mural/` — 数字壁画
- `digital-landscape/` — 数字山水
- `planet-summon/` — 星球召唤
- `online-museum/` — 线上博物馆
  - `atmosphere/` — 展馆氛围/网站截图
  - `exhibits/` — 展品图
- `irish-curation/` — 爱尔兰策展
- `irish-landscape/` — 爱尔兰风景

每个项目建议包含：

- 1 张封面：`cover.jpg` / `cover.png`
- 6–12 张叙事图：`01.jpg`、`02.png` 等

替换后直接修改对应数据文件中的路径：

- 前四个项目：`src/data/projects.ts`
- 线上博物馆：`src/data/onlineMuseum.ts`

## 如何替换文案

- 前四个项目文案：`src/data/projects.ts`
- 线上博物馆文案：`src/data/onlineMuseum.ts`
- 全局站点信息：`src/data/projects.ts` 中的 `site`

全局样式变量（颜色、字体、间距、图片尺寸层级、展馆色板）位于：

```
src/index.css
```

## 占位项

- `Kexin Hu` — 艺术家姓名，已同步更新至 `index.html`、导航、页脚、关于页
- `k811138129@126.com` — 联系邮箱，已同步更新至联系页与 `src/data/projects.ts`
- 艺术家照片 — `public/images/artist-avatar.svg`（抽象肖像，非真人照片）

## 设计说明

- 默认深色主题，以墨黑与宣纸米为基调
- 桌面端以 16:9 视口为画布，按画册页/展厅取景框节奏构图
- 四个展板项目拥有各自的强调色与版式节奏
- 线上博物馆使用独立展馆色板：展墙、灯光、展签系统
- 默认图片以中、小尺寸呈现，点击后进入全屏灯箱查看细节
- 灯箱支持左右切换、缩略图条、键盘 Esc/方向键、缩放与 caption

## 代码结构

```
src/
  components/
    museum/          # 虚拟展馆组件（Lobby、Hall、Floorplan、ExhibitFrame、Lightbox 等）
    BoardModules/    # 展板排版模块
    Board.tsx        # 展板容器
    BoardImage.tsx   # 展板图片
    Lightbox.tsx     # 展板项目灯箱
    ...
  pages/
    OnlineMuseum.tsx # 线上博物馆虚拟展馆页面
    ProjectDetail.tsx# 展板项目详情页
    Home.tsx / Works.tsx / About.tsx / Contact.tsx
  data/
    projects.ts      # 前四个项目 + 站点信息
    onlineMuseum.ts  # 线上博物馆展览数据
  hooks/             # Lenis 平滑滚动等
  App.tsx            # 路由与懒加载边界
  index.css          # 设计 tokens 与全局样式
public/
  images/            # 项目图片（按项目分目录）
```
