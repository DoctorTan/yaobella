import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { fileURLToPath, URL } from 'node:url'
import pxtorem from 'postcss-pxtorem'

import compressPlugin from 'vite-plugin-compression'

export default {
  plugins: [
    compressPlugin({
      threshold: 3072, //3KB 仅压缩文件大小大于此阈值的文件
      deleteOriginFile: false, // 是否删除原始文件
    }),

    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),

  ], resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,

          // 所有px均转化为rem
          propList: ["*"]

        })
      ]
    }
  },
};
