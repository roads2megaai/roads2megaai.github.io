import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ROADS to Mega-AI Models Workshop",
  description: "Research On Algorithms & Data Structures (ROADS) to Mega-AI Models Workshop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main', link: '/main' }
    ],

    sidebar: [
      {
        text: 'at MLSys 2023',
        link: '/main'
      }
    ],
  },
  outDir: './docs'
})
