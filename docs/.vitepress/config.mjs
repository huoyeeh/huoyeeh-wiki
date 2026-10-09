import { defineConfig } from 'vitepress'

// ⚠️ base 必须与你的 GitHub 仓库名一致：
// 如果你的仓库叫 huoyeeh-wiki，则站点地址为 https://huoyeeh.github.io/huoyeeh-wiki/
// 如果想用根域名（https://huoyeeh.github.io/），把 base 改为 '/'
const base = '/huoyeeh-wiki/'

export default defineConfig({
  base,
  title: '📚 Huoyeeh Wiki',
  description: 'Huoyeeh 的个人技术学习知识库：Linux、K8s、云原生、Git/GitHub、AIOps',
  lang: 'zh-CN',

  // 侧边栏：按目录组织，与 docs/ 下的文件夹一一对应
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Git / GitHub', link: '/git-github/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Kubernetes', link: '/kubernetes/' },
      { text: '云 / DevOps', link: '/cloud/' },
      { text: 'AIOps', link: '/aiops/' }
    ],
    sidebar: {
      '/git-github/': [
        {
          text: 'Git / GitHub 学习',
          items: [
            { text: '总览', link: '/git-github/' },
            { text: 'Git 基础', link: '/git-github/git-basics' },
            { text: '用 GitHub Pages 建站', link: '/git-github/github-pages' },
            { text: '建站实操记录', link: '/git-github/build-record' },
            { text: '建站问题排查', link: '/git-github/troubleshooting' }
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
      ],
      '/aiops/': [
        {
          text: 'AIOps 课程笔记',
          items: [
            { text: '总览', link: '/aiops/' },
            { text: '1 大模型基础', link: '/aiops/1_大模型基础' },
            { text: '2 大模型私有部署', link: '/aiops/2_大模型私有部署' },
            { text: '3 大模型微调', link: '/aiops/3_大模型微调' },
            { text: '4 大模型优化', link: '/aiops/4_大模型优化' },
            { text: '5 智能体Agent实战', link: '/aiops/5_智能体Agent实战' },
            { text: '6 打卡任务', link: '/aiops/6_打卡任务' }
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
