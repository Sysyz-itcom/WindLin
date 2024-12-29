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
      copyright: 'Copyright © 2024 WindLin Studio'
    },

    // 深色模式
    darkModeSwitchLabel: '深色模式',

    // Return to top
    returnToTopLabel: "返回顶部",

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: "项目",
        items: [
          { text: '浏览器插件', link: '/projects/addons' },
          { text: 'JS 网页组件', link: '/projects/webjs' },
          { text: '软件服务', link: '/projects/software' },
          { text: '浏览器起始页', link: '/projects/startpage' },
          { text: 'H5 工具箱', link: '/projects/h5tools' },
          { text: 'ReadTable', link: '/projects/readtable/readtable' },
          { text: '一中校园信息技术协助', link: '/projects/school/index' },
          { text: '一中校园GIS地图系统', link: '/projects/school/sysyz-gis' },
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
