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
  }),

  bundler: viteBundler(),
})
