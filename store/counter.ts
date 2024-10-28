import { create } from 'zustand';

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const initialState = {
  count: 0,
};

type CounterAction = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState & CounterAction>()(set => ({
  ...initialState,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
