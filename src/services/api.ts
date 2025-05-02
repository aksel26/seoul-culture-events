// src/services/api.ts
import axios from "axios";

// .env 파일에서 설정한 기본 URL 사용

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (선택 사항)

export default apiClient;
