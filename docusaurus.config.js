// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devtron Resource Center',
  tagline: 'Master seamless software deployment using K8s with ease. Tutorials, insights, and documents to help you deliver excellence.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://ashokdevtron.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/newdoc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ashokdevtron', // Usually your GitHub org/user name.
  projectName: 'newdoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://devtron.ai/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ["@chatwoot/docusaurus-plugin"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      chatwoot: {
        websiteToken: "sYogv7et97xtwCv6kSzM2KNL",
        baseURL: "https://app.chatwoot.com",  // optional
        enableInDevelopment: false,  // optional
        chatwootSettings: {
          hideMessageBubble: false,
          position: "right", // This can be left or right
          locale: "en", // Language to be set
          useBrowserLanguage: false, // Set widget language from user's browser
          darkMode: "auto", // [light, auto]
          type: "expanded_bubble",
          launcherTitle: "Chat with us",
        }
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Devtron Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Devtron Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pluginSidebar',
            position: 'left',
            label: 'Plugin Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/devtron-labs/devtron',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/jsRG5qx2gp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DevtronL',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://devtron.ai/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/devtron-labs/devtron',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devtron Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
