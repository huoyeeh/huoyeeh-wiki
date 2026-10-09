# 📚 Huoyeeh Wiki

> Huoyeeh 的个人技术学习知识库：Linux、Kubernetes、云原生、Git/GitHub。

基于 **VitePress** 构建，通过 **GitHub Pages** 免费托管。

## 在线访问

部署后地址：`https://huoyeeh.github.io/huoyeeh-wiki/`

## 本地运行

```bash
npm install          # 安装依赖
npm run docs:dev     # 本地预览（默认 http://localhost:5173）
npm run docs:build   # 生成静态文件（docs/.vitepress/dist）
```

## 项目结构

```
huoyeeh-wiki/
├── docs/                    # 文档源文件（Markdown）
│   ├── .vitepress/config.mjs  # 站点配置（标题、导航、侧边栏、base）
│   ├── index.md             # 首页
│   ├── git-github/          # Git / GitHub 学习
│   ├── linux/               # Linux 学习
│   ├── kubernetes/          # Kubernetes 学习
│   └── cloud/               # 云 / DevOps 学习
├── package.json
└── README.md
```

## 部署到 GitHub Pages

1. 新建 GitHub 仓库 `huoyeeh-wiki`，并把本目录推上去。
2. 仓库 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支 `main`、目录 `/docs`。
3. 访问 `https://huoyeeh.github.io/huoyeeh-wiki/`。

## 如何新增一篇笔记

1. 在对应目录（如 `docs/linux/`）新建 `xxx.md`，按 Markdown 写内容。
2. 在 `docs/.vitepress/config.mjs` 的 `sidebar` 中加上这一篇的链接。
3. `npm run docs:dev` 本地预览，满意后 `git add/commit/push` 即可自动更新线上。

> 更多细节见 docs/git-github/github-pages.md
