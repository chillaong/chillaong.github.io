# Ava Wang - Personal Portfolio

## 项目简介

个人作品集网站，展示Ava Wang的专业技能、项目经验和个人成就。

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Framer Motion (动画效果)
- Lucide React (图标库)

## 本次更新内容

### 1. 功能模块添加

#### ✅ Solo Lab 游戏展示模块
- 添加了9:16比例游戏截图展示
- 实现了手机样式的图片轮播
- 集成了病毒式增长轨迹图表
- 添加了项目亮点数据展示

#### ✅ 导航栏优化
- 在Work后添加了Solo Lab导航链接
- 实现了点击跳转到游戏模块的功能
- 保持了UI距离和字体风格的一致性

#### ✅ 邮箱弹窗功能
- 为Mail图标添加了点击事件
- 实现了手绘风格的邮箱弹窗
- 添加了平滑的动画效果
- 显示个人邮箱：avawang821@gmail.com

### 2. 图片处理与优化

#### ✅ 个人照片
- 修复了图片显示问题
- 将原始HEIF格式转换为标准JPEG格式
- 压缩图片大小从3MB到487KB
- 确保图片每次都能正常加载

#### ✅ 游戏截图
- 配置了9:16比例的游戏截图路径
- 实现了4张截图的轮播展示
- 保持了图片的清晰度和加载速度

#### ✅ 浏览器图标 (Favicon)
- 将200x200像素的star.png压缩为32x32像素
- 配置为桌面浏览器标签页图标
- 替换了默认的Vite图标

### 3. 链接与文案更新

#### ✅ LinkedIn链接
- 更新为个人LinkedIn档案链接
- 实现了新窗口打开功能

#### ✅ Resume下载按钮
- 修改文案为"Resume"（移除"(PDF)"）
- 等比例缩小了图标尺寸
- 保持了其他样式和动画效果

#### ✅ Footer文案
- 删除了邮箱链接
- 替换为"Learn in public."文案
- 保持了与h2元素一致的字体风格

### 4. 问题修复

#### ✅ 白屏问题
- 修复了文件加载错误
- 确保了App组件的正确导出

#### ✅ 图片加载错误
- 解决了`net::ERR_CONNECTION_CLOSED`错误
- 移除了无效的placeholder图片链接

#### ✅ SVG动画问题
- 优化了GrowthPath组件的动画配置
- 确保了动画能够可靠触发
- 增强了动画的兼容性

### 5. 文件结构

```
public/
├── favicon.png              # 32x32像素浏览器图标
├── images/
│   ├── profile-small.jpg    # 压缩后的个人照片
│   ├── game-screens/        # 游戏截图
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   └── 4.jpg
│   └── star.png             # 原始star图标
└── resume/
    └── UserPM_Gamefication&growth.pdf  # 简历PDF

src/
├── App.jsx                  # 主应用组件
├── main.jsx                 # 入口文件
└── index.css                # 全局样式
```

### 6. 开发服务器

- 启动命令：`npm run dev`
- 预览地址：http://localhost:5173

### 7. 部署准备

- 构建命令：`npm run build`
- 构建输出：`dist/` 目录
- 可直接部署到GitHub Pages或其他静态网站托管服务

## 总结

本次更新成功实现了游戏展示模块的添加、图片的优化处理、导航栏的完善、链接的更新以及各种问题的修复。网站现在功能更加完整，视觉效果更加美观，用户体验更加流畅。

---

© 2026 Ava Wang