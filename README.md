# Kexin Hu — 数字艺术作品集

东方数字诗意 × 沉浸式未来美术馆

## 技术栈

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router v7
- Lenis（平滑滚动）
- yet-another-react-lightbox（图片灯箱）
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

## 性能优化

- 路由级代码分割：每个页面按路由懒加载，配合 `PageLoader` 骨架屏
- 图片懒加载：所有非首屏图片使用 `loading="lazy"` + `decoding="async"`
- 图片骨架屏：`LazyImage` 组件在加载完成前显示微光占位，加载后淡入
- 构建分块：vendor / icons / lightbox / 页面 chunk 分离，便于缓存

## 如何替换图片

所有展示图片已整理至 `public/images/` 下，按项目分子文件夹：

- `ar-museum/` — AR博物馆
- `digital-mural/` — 数字壁画
- `digital-landscape/` — 数字山水
- `planet-summon/` — 星球召唤

每个项目建议包含：

- 1 张封面：`cover.jpg` / `cover.png`
- 6–12 张叙事图：`01.jpg`、`02.png` 等

替换后直接修改 `src/data/projects.ts` 中对应的 `src` 路径即可。

## 如何替换文案

所有项目文案、标题、描述、年份、媒介、标签集中管理于：

```
src/data/projects.ts
```

全局样式变量（颜色、字体、间距、图片尺寸层级）位于：

```
src/index.css
```

## 占位项

- `Kexin Hu` — 艺术家姓名，已同步更新至 `index.html`、导航、页脚、关于页
- `k811138129@126.com` — 联系邮箱，已同步更新至联系页与 `src/data/projects.ts`
- 艺术家照片 — `public/images/artist-avatar.svg`（抽象肖像，非真人照片）

## 设计说明

- 默认深色主题，以墨黑与宣纸米为基调
- 桌面端以 16:9 视口为画布，按画册页节奏构图
- 四个项目拥有各自的强调色与版式节奏
- 默认图片以中、小尺寸呈现，点击后进入全屏灯箱查看细节
- 首页使用数字山水/数字壁画封面作为编辑式拼贴
- 联系页使用星尘粒子背景
- 灯箱支持左右切换、缩略图条、键盘 Esc/方向键、缩放与 caption

## 项目结构

```
src/
  components/      # 可复用组件（导航、章节、图片、灯箱等）
  pages/           # 页面组件（Home / Works / ProjectDetail / About / Contact）
  data/            # 项目文案与配置
  hooks/           # Lenis 平滑滚动、滚动进度等自定义 Hook
  App.tsx          # 路由与懒加载边界
  index.css        # 设计 tokens 与全局样式
public/
  images/          # 项目图片（按项目分目录）
```
