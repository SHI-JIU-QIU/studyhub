import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  Unocss({
    presets: [
      presetAttributify({ /* preset options */ }),
      presetUno(),
      // ...custom presets
    ],
  }),
  vueSetupExtend({ /* options */ }),
  ],


  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
