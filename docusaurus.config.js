// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Готовимся к ЕГЭ по информатике',
  tagline: 'Быстро и эффективно',
  url: 'https://github.com',
  baseUrl: '/infa_100/',
  favicon: 'img/favicon.ico',

  organizationName: 'sidewinder-x', // Название организации (или ваше)
  projectName: 'infa_100', // Название проекта (репозитория)

  onBrokenLinks: 'throw', // Либо "warn", если не хочешь, чтобы сайт падал при ошибках ссылок
  onBrokenMarkdownLinks: 'warn', // Предупреждения о битых Markdown-ссылках
  deploymentBranch: "gh-pages",

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Путь к файлу боковой панели
          remarkPlugins: [require('remark-math')], // Поддержка LaTeX (Math)
          rehypePlugins: [require('rehype-katex')], // Поддержка KaTeX
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // Ваша ссылка на GitHub-репозиторий
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Кастомные стили
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // Социальная карточка (опционально)
    navbar: {
      title: 'Infa 100', // Название сайта в меню
      logo: {
        alt: 'My Site Logo', // Альтернативный текст для логотипа
        src: 'img/logo.svg', // Путь к логотипу
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Обязательно должно быть совпадение с sidebars.js
          position: 'left',
          label: 'Задания ЕГЭ (теория)', // Название пункта меню
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Обязательно должно быть совпадение с sidebars.js
          position: 'left',
          label: 'Решение задач', // Название пункта меню
        },
        {
          href: 'https://github.com/facebook/docusaurus', // Внешняя ссылка
          label: 'Telegram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark', // Темный стиль подвала
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro', // Ссылка на документ "intro"
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus', // Внешняя ссылка
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog', // Ссылка на блог
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github, // Тема для подсветки кода
      darkTheme: prismThemes.dracula, // Темная тема для подсветки
    },
  },
};

export default config;
