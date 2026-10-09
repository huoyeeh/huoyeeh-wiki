# 建站问题排查与解决方案

> 记录「从安装 GitHub CLI 到部署个人网站」过程中遇到的 8 个问题、原因、解决方法和影响说明。

## 问题排查总表

| 序号 | 问题 | 原因 | 解决方案 | 说明 / 影响 |
|---|---|---|---|---|
| 1 | Homebrew 无法安装 gh | macOS 26.3 版本过新，brew 不认识 | 改用 GitHub 官方二进制下载 | 与 brew 无关，需手动安装 |
| 2 | 命令行下载国外资源慢/被截断 | curl 默认直连，不走系统代理 | 用浏览器下载，或 `curl -x http://127.0.0.1:4780` | 理解浏览器与命令行代理机制差异 |
| 3 | gh 登录需浏览器授权 | 涉及账号安全，须本人操作 | 设备授权码流程 | 无法全自动，需用户配合 |
| 4 | 推送 workflow 文件被拒 | 登录 token 缺 `workflow` 权限 | `gh auth refresh --hostname github.com -s workflow` | token 需追加 workflow scope |
| 5 | git push 报「could not read Username」 | git 未配置凭据助手 | `gh auth setup-git` | 让 git 推送能取到 token |
| 6 | configure-pages 自动启用失败 | token 权限不足以让 action 建 Pages 站点 | API 手动启用（build_type=workflow） | 不依赖 configure-pages 的 enablement |
| 7 | 部署反复失败「in progress deployment」 | 首次 branch 源启用留下卡住部署占锁 | 网页切 None 再切回 GitHub Actions | branch 源与 Actions 源切换会留遗留锁 |
| 8 | 部署报「Missing environment」 | deploy job 缺 environment | 加 `environment: github-pages` | deploy-pages@v4 必须指定环境 |

## 详情说明

### 1. Homebrew 装不了 gh
`brew install gh` 报 `unknown or unsupported macOS version: 26.3`。Homebrew 4.4.0 太旧，无法识别新 macOS 版本。改为官方二进制下载解压安装。macOS 大版本更新常导致 Homebrew 暂时失效。

### 2. 命令行下载国外资源慢/截断
curl 默认直连、不读系统代理，GitHub 发布源在国内不稳定；浏览器自动走系统代理（VPN，`127.0.0.1:4780`）所以快。命令行需显式 `-x` 代理。

### 3. gh 登录需浏览器授权
GitHub 登录授权涉及账号安全，必须本人操作。采用设备授权码流程（访问 github.com/login/device 输入一次性 code）。

### 4. 推送 workflow 被拒
修改 `.github/workflows` 文件需要 `workflow` 权限。用 `gh auth refresh --hostname github.com -s workflow` 追加权限。属 GitHub 安全机制。

### 5. git push 读不到用户名
git 走 https 推送需凭据但未配置助手。`gh auth setup-git` 把 gh 设为凭据助手即可。

### 6. configure-pages 自动启用失败
让 action 自动创建 Pages 站点权限不足。改用 API：`gh api -X POST /repos/huoyeeh/huoyeeh-wiki/pages -f build_type=workflow`。

### 7. 部署反复失败「in progress deployment」
最初用「Deploy from a branch」启用 Pages 时为初始 commit 创建了卡住部署占锁。网页 Settings→Pages 把 Source 切 None 保存、再切回 GitHub Actions 保存即可清掉。

### 8. 部署报 Missing environment
deploy job 未配置 environment。给 deploy job 加 `environment: github-pages`。标准 Pages 部署要求指定该环境。

## 复用建议

- 以后搭建 GitHub Pages 站点，遇错对照本表定位。
- 前 6 条属环境/权限问题，第 7、8 条属部署配置问题。
