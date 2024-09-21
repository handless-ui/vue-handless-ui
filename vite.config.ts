import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
    plugins: [
        vue(), // VUE插件
        vueJsx() // JSX 插件
    ],
    build: {
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        },

        // 可以指定压缩工具terser, 需要安装后使用 npm i terser -D
        minify: false,

        // 是否生成 sourcemap 文件，方便debug
        sourcemap: true,

        // css 代码分割
        cssCodeSplit: true,

        lib: {
            entry: "./src/index.ts",
            name: "VueHandlessUI",
            fileName: "vue-handless-ui",

            // 输出常用的三种模块类型
            formats: ["es", "umd", "iife"]
        }
    }
});