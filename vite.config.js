import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',  // 确保基础路径正确
  server: {
    open: true  // 启动时自动打开浏览器
  }
})