import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '李立军选集',
  description: '呼市二中一位伟大的思想家的部分演讲收录',

  theme: defaultTheme({
    logo: '/images/li-li-jun.jpg',
    editLink: true,
    lastUpdated: true,
    navbar: ['/', '/get-started'],
    docsRepo: 'https://github.com/Gayloc/li-jun-collection',
    docsBranch: 'main',
    docsDir: 'docs',
    sidebar: [
      '/',
      '/get-started',
      '/当代马克思关于女权和厕所革命的演说',
      '/当代马克思关于人格和自由的演讲',
      '/当代马克思关于实验室必须保持干燥环境及重申女权主义的演讲',
      '/当代马克思关于择偶和未来规划的演讲',
      '/当代儒学大师：人狗论',
      '/关于二中灰色文化的讲演',
      '/宣扬努力实干的外衣下粉饰对金钱权力赤裸裸的拜金主义',
    ],
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '📌提示',
        warning: '❗注意',
        danger: '⚡警告',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    },
  }),

  bundler: viteBundler(),
})
