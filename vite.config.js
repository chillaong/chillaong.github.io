import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：如果您部署到 https://<USERNAME>.github.io/ava-portfolio/
  // 请保持 base 为 '/ava-portfolio/'。
  // 如果是自定义域名根目录，请改为 '/'
  base: '/ava-portfolio/',
})