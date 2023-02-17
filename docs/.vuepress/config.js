module.exports = {
  title: '见微前端组件站点', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '见微前端组件站点', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [],
  themeConfig: {
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },

      //格式二：添加下拉菜单，link指向的文件路径
      // {
      //   text: '分类', //默认显示
      //   ariaLabel: '分类', //用于识别的label
      //   items: [
      //     { text: '文章', link: '/pages/folder1/test1.md' },
      //     //点击标签会跳转至link的markdown文件生成的页面
      //     { text: '琐碎', link: '/pages/folder2/test4.md' },
      //   ],
      // },
      // { text: '功能演示', link: '/pages/folder1/test3.md' },

      //格式三：跳转至外部网页，需http/https前缀
      {
        text: '代码仓库',
        link: 'https://git.zjvis.org/nebula-platform/graph-application-components/tree/master/packages/lowcode-index',
      },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/components/': [
        {
          title: '组件说明', // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            {
              title: 'GridInteract',
              path: 'GridInteract.md',
            },
            {
              title: 'DivInteract',
              path: 'DivInteractDemo.md',
            },
            {
              title: 'Portal',
              path: 'PortalDemo.md',
            },
          ],
        },
        {
          title: '通用表单',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: 'CommonForm.md',
            },
            {
              title: '值路径path',
              path: 'common-form/DataPath.md',
            },
            {
              title: '校验规则',
              path: 'common-form/Rules.md',
            },
            {
              title: '工具函数',
              path: 'common-form/Utils.md',
            },
            {
              title: '示例',
              collapsable: false,
              children: [
                {
                  title: '基本用法',
                  path: 'common-form/LayoutDemo.md',
                },
                {
                  title: '表单校验',
                  path: 'common-form/Validate.md',
                },
                {
                  title: '自定义控件',
                  path: 'common-form/CustomComponent.md',
                },
              ],
            },
          ],
        },
      ],

      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    },
  },
  plugins: ['vuepress-plugin-typescript'],
};
