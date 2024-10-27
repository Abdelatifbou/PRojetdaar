// vite.config.ts
import { defineConfig } from "file:///home/hichem/Desktop/M2/DAAR/collectible-card-game/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/hichem/Desktop/M2/DAAR/collectible-card-game/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: { outDir: "build", sourcemap: true },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9oaWNoZW0vRGVza3RvcC9NMi9EQUFSL2NvbGxlY3RpYmxlLWNhcmQtZ2FtZS9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvaGljaGVtL0Rlc2t0b3AvTTIvREFBUi9jb2xsZWN0aWJsZS1jYXJkLWdhbWUvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvaGljaGVtL0Rlc2t0b3AvTTIvREFBUi9jb2xsZWN0aWJsZS1jYXJkLWdhbWUvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDogeyBvdXREaXI6ICdidWlsZCcsIHNvdXJjZW1hcDogdHJ1ZSB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6ICcvc3JjJyB9XSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsb0JBQW9CO0FBQ2hZLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTyxFQUFFLFFBQVEsU0FBUyxXQUFXLEtBQUs7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBYSxPQUFPLENBQUM7QUFBQSxFQUM1QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==