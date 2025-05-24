import { TList } from "@/lib/types";
import { create } from "zustand";

// 1. 상태의 타입을 정의하는 인터페이스
interface CounterState {
  events: TList[];
}

// 2. 액션의 타입을 정의하는 인터페이스 (선택 사항이지만 명확성을 위해 권장)
interface CounterActions {
  setEvents: (events: TList[]) => void;
}

// 3. 전체 스토어의 타입을 정의 (상태 + 액션)
type CounterStore = CounterState & CounterActions;

// create 함수를 사용하여 스토어를 정의합니다.
// 제네릭으로 CounterStore 타입을 전달하여 타입 안전성을 확보합니다.
const useAllEvents = create<CounterStore>((set) => ({
  events: [], // 초기 상태 정의

  // 액션 정의
  setEvents: (events: TList[]) => set({ events: events }),
}));

export default useAllEvents;
