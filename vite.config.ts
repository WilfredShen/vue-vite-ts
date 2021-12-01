import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
// eslint-disable-next-line
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const apiServer = "http://api.xxx.com/";
  return defineConfig({
    base: "/",
    plugins: [vue()],
    server: {
      open: true,
      proxy: {
        [env.VITE_BASE_API]: {
          target: apiServer,
          changeOrigin: true,
          rewrite: path => path.replace(`${env.VITE_BASE_API}`, "/"),
        },
      },
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },
      // 禁用该功能可能会提高大型项目的构建性能
      brotliSize: false,
      rollupOptions: {
        output: {
          // 拆分单独模块
          manualChunks: {
            // "element-plus": ["element-plus"], // 示例
          },
        },
      },
    },
  });
};
