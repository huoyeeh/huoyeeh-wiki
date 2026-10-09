# Git 基础

> Git 是一个分布式版本控制系统。本页记录核心概念与高频命令。

## 核心概念

- **工作区（Working Directory）**：你正在编辑的文件。
- **暂存区（Staging Area / Index）**：`git add` 后暂存准备提交的改动。
- **本地仓库（Local Repo）**：`git commit` 后保存在本地的提交历史。
- **远程仓库（Remote）**：托管在 GitHub 等平台的仓库，用 `push` / `pull` 同步。

```
工作区  --git add-->  暂存区  --git commit-->  本地仓库  --git push-->  远程仓库
        <--git checkout--       <--git reset--        <--git pull/fetch--
```

## 高频命令

| 场景 | 命令 |
|------|------|
| 配置用户信息 | `git config --global user.name "huoyeeh"` / `user.email` |
| 克隆仓库 | `git clone <url>` |
| 查看状态 | `git status` |
| 加入暂存区 | `git add <file>` 或 `git add .` |
| 提交 | `git commit -m "message"` |
| 推送 | `git push origin main` |
| 拉取 | `git pull origin main` |
| 分支 | `git branch` / `git checkout -b <name>` / `git merge <name>` |
| 查看日志 | `git log --oneline` |
