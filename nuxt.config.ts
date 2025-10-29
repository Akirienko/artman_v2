// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/assets/style/main.scss'],
  components: {
		"dirs": [
			{ "path": "~/components/", "global": true, pathPrefix: false, },
		],
	},

	app: {
		head: {
			title: 'Artman',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Write your own movie-making story beyond time and epoch. Manage the smallest details of film production, to achieve the ultimate art of cinematography.' },
			],
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	nitro: {
    compressPublicAssets: true,
    minify: true
  },

	vite: {
    build: {
      cssMinify: "esbuild",
      cssCodeSplit: true,
      minify: "esbuild",

    },
    esbuild: {
      drop: ['console', 'debugger'],
      legalComments: 'none'
    }
  }
})
