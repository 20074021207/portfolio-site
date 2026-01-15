# 个人作品集网站（React + TypeScript + Vite）

一个基于 React、TypeScript、Vite 和 Tailwind CSS 构建的深色主题个人作品集网站，用于展示个人简介、技能和项目。

## 技术栈

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion（滚动与进入动画）

## 功能概览

- 首页 Hero：大标题、简介、头像占位和操作按钮
- 关于我：个人介绍与技能列表
- 项目展示：项目卡片列表，包含截图、描述、技术栈和链接
- 联系方式：邮箱、GitHub、社交链接
- 深色主题、渐变强调色、平滑滚动与基础动画

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查（ESLint）
npm run lint
```

开发服务器启动后，默认访问地址为：

```text
http://localhost:5173/
```

## 项目结构

只列出主要目录与文件：

- `src/main.tsx`：应用入口
- `src/App.tsx`：页面整体布局
- `src/components/`：
  - `Header.tsx`：顶部导航
  - `Hero.tsx`：首页 Hero 区
  - `About.tsx`：关于我与技能列表
  - `Projects.tsx`：项目展示
  - `Contact.tsx`：联系方式
  - `Footer.tsx`：底部信息
- `src/data/`：
  - `projects.ts`：项目数据
  - `skills.ts`：技能数据
- `src/index.css`：Tailwind 引入与全局样式
- `tailwind.config.js`：Tailwind 配置
- `postcss.config.js`：PostCSS 配置

## 自定义内容

你可以在以下文件中替换为自己的真实信息：

- 个人简介和首页文案：`src/components/Hero.tsx`、`src/components/About.tsx`
- 技能列表：`src/data/skills.ts`
- 项目列表（名称、描述、截图、链接）：`src/data/projects.ts`
- 联系方式（邮箱、GitHub 等）：`src/components/Contact.tsx`

## Git 仓库

项目已初始化 Git 仓库，可在 GitHub 创建远程仓库后，使用以下命令更新远程地址并推送：

```bash
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
git push -u origin master  # 或 main，视你的分支名而定
```

