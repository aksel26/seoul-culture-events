import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // 서비스 워커 업데이트 방식 설정
      injectRegister: "auto", // 서비스 워커 등록 코드 자동 삽입
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // 캐시할 파일 패턴 지정
      },
      manifest: {
        name: "서울아트맵", // 앱 이름
        short_name: "서울아트맵", // 짧은 앱 이름
        description:
          "서울의 다양한 예술(Art) 공연을 지도처럼 한눈에 찾아보세요!", // 앱 설명
        theme_color: "#fedee1", // 테마 색상 (상단 바 색상 등)
        background_color: "#fedee1", // 배경 색상
        display: "standalone", // 앱 표시 방식 (standalone, fullscreen, minimal-ui, browser)
        scope: "/", // PWA 범위 (앱의 시작 URL)
        start_url: "/", // 앱 시작 URL
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://openapi.seoul.go.kr:8088",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
