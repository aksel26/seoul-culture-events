import { TList } from "@/lib/types";
import { create } from "zustand";

// TList 인터페이스 정의

// 스토어 상태 인터페이스 정의
interface ListState {
  selectedItem: TList | null;
  loading: boolean;
  error: string | null;

  // 액션들
  setItems: (item: TList) => void;
}

// Zustand 스토어 생성
const useListStore = create<ListState>((set) => ({
  // items: [],
  selectedItem: null,
  loading: false,
  error: null,

  // 전체 아이템 설정
  setItems: (selectedItem: TList) => set({ selectedItem }),
}));

export default useListStore;
