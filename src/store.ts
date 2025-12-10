import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  set: (value: number) => void;
  reset: () => void;
}

interface UserStore {
  username: string;
  set: (name: string) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  set: (value: number) => set({ count: value }),
  reset: () => set({ count: 0 }),
}));

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      username: 'Guest',
      set: (name: string) => set({ username: name }),
    }),
    {
      name: 'user-storage', // name of the item in local storage
    }
  )
);
