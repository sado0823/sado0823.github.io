// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Go-Kitx',
  tagline: 'Some practical tools、 algorithms written in Go',
  url: 'https://sado0823.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/emoji.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sado0823', // Usually your GitHub org/user name.
  projectName: 'sado0823.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: "Sado's Blog",
          blogDescription: "Sado's personal Blog",
          showReadingTime: true,
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All my posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_me',
        content: '⭐️ 如果这个网站能帮助到你,欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/sado0823/go-kitx">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'Go-Kitx',
        logo: {
          alt: 'My Site Logo',
          src: 'img/emoji.svg',
        },
        items: [
          {
            type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/blog/archive', label: 'Archive', position: 'right' },
          { to: '/blog/tags', label: 'Tags', position: 'right', },
          {
            href: 'https://github.com/sado0823/go-kitx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: '6e927a1fd7d99c2bc33be265eb1b0e46',
        appId: 'Y6EGDIBDW1',
        indexName: 'sado0823.github.io',
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           html: `<a href="mailto:sadosado0823@gmail.com?subject=from sado0823.github.io">Email</a>`,
      //         },
      //         // {
      //         //   label: 'Stack Overflow',
      //         //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         // },
      //         // {
      //         //   label: 'Discord',
      //         //   href: 'https://discordapp.com/invite/docusaurus',
      //         // },
      //         // {
      //         //   label: 'Twitter',
      //         //   href: 'https://twitter.com/docusaurus',
      //         // },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [

      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/sado0823/go-kitx',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Go-Kitx, Inc.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
