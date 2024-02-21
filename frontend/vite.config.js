// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const dotenv = require('dotenv')
dotenv.config()


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})
