// src/store/useStore.ts
import { create } from "zustand";

export interface Params {
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
    codeName: "",
    title: "",
    date: "",
  },

  // 액션(Actions)
  setParams: (newParams: Partial<Params>) =>
    set((state) => ({
      params: {
        ...state.params, // 기존 상태 유지
        ...newParams, // 변경된 필드만 업데이트
      },
    })),
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
