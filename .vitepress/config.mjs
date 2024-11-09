import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/WindLin/",
  head: [["link", { rel: "icon", href: "https://sysyz-itcom.github.io/doc/img/windlin.png" }]],
  title: "WindLin Studio",
  description: "WindLin Studio，邵阳市第一中学信息技术社团分支项目组，提供网络搜索服务、软件服务、公共信息查询服务和其他互联网信息相关服务。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: [2, 6],
    logo: "https://sysyz-itcom.github.io/doc/img/windlin.png",
    // 页脚
    footer: {
      copyright: 'Copyright © 2024 WindLin'
    },

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: "项目",
        items: [
          { text: '浏览器插件', link: '/markdown-examples' },
          { text: 'JS 网页组件', link: '/markdown-examples' },
          { text: '软件服务', link: '/markdown-examples' },
          { text: '浏览器起始页', link: '/markdown-examples' },
        ],
      },
      {
        text: "文档",
        items: [
          { text: '希沃白板故障排查', link: '/docs/seewo/Easinote' },
        ],
      },
      {
        text: "关于我们",
        items: [
          { text: '关于我们', link: '/docs/windlin/about' },
        ],
      },
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sysyz-itcom/WindLin' }
    ]
  }
})
