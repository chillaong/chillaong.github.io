# Ava's Portfolio

个人作品集网站，展示项目案例、技术栈和个人信息。

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 5
- **样式方案**: Tailwind CSS 3
- **动画效果**: Framer Motion
- **图标库**: Lucide React
- **部署方式**: GitHub Pages + GitHub Actions

## 项目结构

```
├── .github/workflows/       # GitHub Actions 部署配置
├── src/                     # 源代码目录
│   ├── App.jsx              # 主应用组件
│   ├── index.css            # 全局样式
│   └── main.jsx             # 应用入口
├── .gitignore               # Git 忽略文件配置
├── index.html               # HTML 模板
├── package.json             # 项目依赖和脚本
├── postcss.config.js        # PostCSS 配置
├── tailwind.config.js       # Tailwind CSS 配置
├── vite.config.js           # Vite 配置
└── README.md                # 项目说明文档
```

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd ava-portfolio
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 http://localhost:5173/ava-portfolio/ 启动。

### 4. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

## 部署到 GitHub Pages

本项目使用 GitHub Actions 自动部署到 GitHub Pages，具体配置如下：

1. **GitHub Actions 工作流**：`.github/workflows/deploy.yml` 配置了自动构建和部署流程
2. **Vite 配置**：`vite.config.js` 中设置了 `base: '/ava-portfolio/'` 以适配 GitHub Pages 路径
3. **部署分支**：部署到 `gh-pages` 分支

### 部署步骤

1. 在 GitHub 上创建名为 `ava-portfolio` 的仓库
2. 将本地仓库关联到 GitHub 仓库：
   ```bash
   git remote add origin <repository-url>
   git push -u origin main
   ```
3. 推送代码到 `main` 分支后，GitHub Actions 会自动触发部署流程
4. 部署完成后，可通过 `https://<username>.github.io/ava-portfolio/` 访问网站

## 自定义配置

### 修改站点基础路径

如果需要修改部署路径，可在 `vite.config.js` 中更新 `base` 配置：

```javascript
export default defineConfig({
  // 例如：部署到根目录时使用 '/'，部署到子目录时使用 '/subdirectory/'
  base: '/',
});
```

### 修改 GitHub Actions 工作流

可在 `.github/workflows/deploy.yml` 中修改工作流配置，如监听分支、构建命令等。

## 项目特色

- **响应式设计**：适配不同屏幕尺寸
- **现代美感**：使用 Tailwind CSS 构建美观的 UI
- **流畅动画**：集成 Framer Motion 实现平滑过渡效果
- **模块化结构**：清晰的代码组织和组件划分
- **自动部署**：通过 GitHub Actions 实现 CI/CD 流程

## 许可证

MIT

## 联系方式

- **Email**: avawang821@gmail.com
- **GitHub**: https://github.com/AvaWang821