# 📝 简历网站部署指南

这是一个完整的指南，教您如何将 Next.js 简历网站部署到 GitHub Pages。

## 🚀 快速部署步骤

### 1. 创建 GitHub 仓库

1. 登录您的 GitHub 账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称建议设为：`resume-website`
4. 设置为 Public（这样面试官可以访问）
5. 不要初始化 README、.gitignore 或 license（因为我们已经有了这些文件）

### 2. 推送代码到 GitHub

在项目根目录运行以下命令：

```bash
# 初始化 Git 仓库（如果还没有的话）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Resume website ready for deployment"

# 添加 GitHub 远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/resume-website.git

# 推送到 GitHub
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入您的 GitHub 仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

### 4. 启用 Actions 权限

1. 在仓库页面点击 "Settings"
2. 在左侧菜单中点击 "Actions" > "General"
3. 确保 "Actions permissions" 设置为 "Allow all actions and reusable workflows"
4. 在 "Workflow permissions" 部分选择 "Read and write permissions"
5. 勾选 "Allow GitHub Actions to create and approve pull requests"
6. 点击 "Save" 保存设置

## 🔧 自动部署工作流

我已经为您配置了 GitHub Actions 工作流，它会：

- ✅ 在每次推送到 `main` 分支时自动触发
- ✅ 安装 Node.js 和项目依赖
- ✅ 构建 Next.js 项目为静态文件
- ✅ 自动部署到 GitHub Pages

工作流配置文件位于：`.github/workflows/deploy.yml`

## 🌐 访问您的网站

部署成功后，您的简历网站将在以下地址可访问：

```
https://YOUR_USERNAME.github.io/resume-website/
```

替换 `YOUR_USERNAME` 为您的 GitHub 用户名。

## 📋 部署清单

- [x] ✅ 已配置 Next.js 静态导出
- [x] ✅ 已设置 GitHub Actions 工作流
- [x] ✅ 已优化 SEO 元数据
- [x] ✅ 已添加 .nojekyll 文件
- [x] ✅ 已配置 Tailwind CSS

## 🔍 故障排除

### 如果部署失败：

1. **检查 Actions 页面**：进入仓库 > Actions 标签查看构建日志
2. **权限问题**：确保 Actions 有写入权限（见步骤4）
3. **分支问题**：确保推送到 `main` 分支

### 如果网站无法访问：

1. **等待几分钟**：首次部署可能需要5-10分钟生效
2. **检查 Pages 设置**：确保 Source 设置为 "GitHub Actions"
3. **清除浏览器缓存**：尝试硬刷新或无痕模式

## 🎯 分享给面试官

部署成功后，您可以：

1. **直接分享链接**：`https://YOUR_USERNAME.github.io/resume-website/`
2. **在简历中添加**：将网站链接添加到您的简历联系信息中
3. **在 LinkedIn 中添加**：将链接添加到您的 LinkedIn 个人资料中

## 🔄 更新简历内容

如需更新简历内容：

1. 编辑 `src/app/page.tsx` 文件
2. 提交并推送更改到 GitHub
3. GitHub Actions 会自动重新部署

```bash
git add .
git commit -m "Update resume content"
git push
```

## 📱 响应式设计

您的简历网站已经优化为响应式设计，在手机、平板和桌面设备上都能完美显示。

---

🎉 **恭喜！** 您的专业简历网站即将上线，面试官可以随时访问查看您的完整信息！
