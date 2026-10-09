# 用 GitHub Pages 建站

> 本文记录「用 VitePress 写笔记，再通过 GitHub Pages 免费部署成个人网站」的完整流程。

## 原理

- **VitePress**：把 Markdown 笔记编译成静态网站。
- **GitHub Pages**：GitHub 免费提供的静态托管，为每个仓库提供 `https://<用户名>.github.io/<仓库名>/` 地址。

## 步骤

1. 用 VitePress 搭建项目（本项目即是范例）。
2. `npm run docs:build` 在本地生成静态文件 `docs/.vitepress/dist`。
3. 把代码推送到 GitHub 仓库（如 `huoyeeh-wiki`）。
4. 在仓库 **Settings → Pages**，选择分支 `main` + 目录 `/docs`（或 `/(root)`），保存。
5. 等待约 1 分钟，即可访问 `https://huoyeeh.github.io/huoyeeh-wiki/`。

## 关键配置

`docs/.vitepress/config.mjs` 里的 `base` 必须和仓库名一致：

```js
const base = '/huoyeeh-wiki/'
```

::: tip
若想使用根域名 `https://huoyeeh.github.io/`，需要新建一个叫 **`huoyeeh.github.io`** 的仓库，并把 `base` 改为 `'/'`。
:::
