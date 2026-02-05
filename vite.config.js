import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：如果您部署到 https://<USERNAME>.github.io/
  // 请保持 base 为 '/'。
  // 如果是子目录部署，请改为 '/subdirectory/'
  base: '/',
})