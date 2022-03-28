import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import {presetIcons, presetUno} from "unocss";

// @ts-ignore
import path from "path";

/**
 * more config ref https://vitejs.dev/config/
 */
export default defineConfig({

    server: {
        port: 9527
    },
    resolve: {
        alias: {
            // @ts-ignore
            "~": path.resolve(__dirname, "src")
        },
    },
    plugins: [
        vue(),
        Pages(),
        Layouts(),
        UnoCSS({
            presets: [
                presetUno(),
                presetIcons()
            ],
        }),

    ],

})
