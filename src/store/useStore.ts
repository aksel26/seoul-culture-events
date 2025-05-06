// src/store/useStore.ts
import { create } from "zustand";

interface Params {
  title?: string;
  codeName?: string;
  date?: string;
}
// 스토어 상태 타입 정의
interface CategoryState {
  params: Params;
  setParams: (categories: Params) => void;
  reset: () => void;
}

// TypeScript와 함께 스토어 생성
const useCategoryStore = create<CategoryState>((set) => ({
  // 상태(State)
  params: {
    title: "",
    codeName: "",
    date: "",
  },

  // 액션(Actions)
  setParams: (params: Params) => set({ params: params }),
  reset: () =>
    set({
      params: {
        title: "",
        codeName: "",
        date: "",
      },
    }),
}));

export default useCategoryStore;
