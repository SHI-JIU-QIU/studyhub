import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  vueSetupExtend({ /* options */ }),
  ],


  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
