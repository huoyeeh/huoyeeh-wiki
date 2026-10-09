import { defineConfig } from 'vitepress'

// ⚠️ base 必须与你的 GitHub 仓库名一致：
// 如果你的仓库叫 huoyeeh-wiki，则站点地址为 https://huoyeeh.github.io/huoyeeh-wiki/
// 如果想用根域名（https://huoyeeh.github.io/），把 base 改为 '/'
const base = '/huoyeeh-wiki/'

export default defineConfig({
  base,
  title: '📚 Huoyeeh Wiki',
  description: 'Huoyeeh 的个人技术学习知识库：Linux、K8s、云原生、Git/GitHub',
  lang: 'zh-CN',

  // 侧边栏：按目录组织，与 docs/ 下的文件夹一一对应
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Git / GitHub', link: '/git-github/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Kubernetes', link: '/kubernetes/' },
      { text: '云 / DevOps', link: '/cloud/' }
    ],
    sidebar: {
      '/git-github/': [
        {
          text: 'Git / GitHub 学习',
          items: [
            { text: '总览', link: '/git-github/' },
            { text: 'Git 基础', link: '/git-github/git-basics' },
            { text: '用 GitHub Pages 建站', link: '/git-github/github-pages' }
          ]
        }
      ],
      '/linux/': [
        {
          text: 'Linux 学习',
          items: [
            { text: '总览', link: '/linux/' }
          ]
        }
      ],
      '/kubernetes/': [
        {
          text: 'Kubernetes 学习',
          items: [
            { text: '总览', link: '/kubernetes/' }
          ]
        }
      ],
      '/cloud/': [
        {
          text: '云 / DevOps 学习',
          items: [
            { text: '总览', link: '/cloud/' }
          ]
        }
      ]
    },
    footer: {
      message: '基于 VitePress 构建，托管于 GitHub Pages',
      copyright: 'Copyright © Huoyeeh'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huoyeeh' }
    ]
  }
})
