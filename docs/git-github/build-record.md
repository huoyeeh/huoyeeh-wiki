# GitHub Pages 建站实操记录

> 记录从安装 GitHub CLI 到个人网站部署成功的完整过程、踩坑与总结。

## 成果一览

- 网站已上线：`https://huoyeeh.github.io/huoyeeh-wiki/`
- 技术栈：**VitePress**（Markdown → 静态网站）+ **GitHub Actions**（自动构建部署）+ **GitHub Pages**（托管）
- 已安装工具：GitHub CLI（gh v2.102.0）

## 操作全过程

### 第 1 步：安装 gh（GitHub CLI）

- 问题：Homebrew 因 macOS 26.3 版本过新无法使用。
- 解决：从 GitHub 官方下载 macOS arm64 二进制，解压安装到 `/opt/homebrew/bin/gh`。
- 要点：**命令行 curl 默认不走代理，浏览器自动走系统代理，所以浏览器下载更快。**

### 第 2 步：登录 gh

```bash
git config --global user.name "huoyeeh"
git config --global user.email "<你的邮箱>"
git init && git add . && git commit -m "init"
git branch -M main
gh auth login          # 浏览器设备授权码登录
```

### 第 3 步：创建仓库并推送

```bash
gh repo create huoyeeh-wiki --public --source=. --remote=origin --push
```

### 第 4 步：配置 GitHub Pages

- 部署源选择 **GitHub Actions**（不是 Deploy from a branch，因为 VitePress 需要先编译）。

### 第 5 步：编写部署 workflow

在 `.github/workflows/deploy.yml` 中配置：push 到 main 时自动构建并部署。

```yaml
build:   # 构建
  - actions/checkout
  - actions/setup-node
  - npm ci && npm run docs:build   # 生成 docs/.vitepress/dist
  - actions/upload-pages-artifact   # 上传产物

deploy:  # 部署
  environment: github-pages        # 必须指定环境
  - actions/deploy-pages@v4
```

## 总结

1. VitePress 把 Markdown 笔记编译成静态网站，GitHub Actions 每次 push 自动构建，GitHub Pages 免费托管，形成「写笔记 → 自动上线」的闭环。
2. 命令行工具（curl/git）默认不走系统代理，下载国外资源要显式 `-x 代理端口`，或用浏览器。
3. 部署 Pages 的 deploy job 必须写 `environment: github-pages`。

## 后续建议

- 把 Notion 里的笔记整理成 Markdown 填充到对应目录，push 后自动更新。
- 可进阶：自定义域名、搜索、主题美化。
