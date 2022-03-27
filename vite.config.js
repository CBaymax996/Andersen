import {
    defineConfig
} from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

/**
 * more config ref https://vitejs.dev/config/
 */
export default defineConfig({

    server: {
        port: 9527
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
    },
    plugins: [vue()],
})
