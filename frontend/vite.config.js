// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Access environment variables directly
const cloudName = process.env.VITE_CLOUD_NAME
const uploadPreset = process.env.VITE_UPLOAD_PRESET

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})

