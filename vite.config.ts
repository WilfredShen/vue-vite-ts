import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
// eslint-disable-next-line
export default env => {
  return defineConfig({
    base: "/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@comp": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
    server: {
      open: true,
      proxy: {
        "/api": {
          target: "http://dev.api.xxx.com",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
    esbuild: false,
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
