import { create } from 'zustand';

// State types
interface States {
  totalIds: string[];
  totalArray: { id: string, monto: number }[];
  total: number;
}

// Action types
interface Actions {
  addId: (id: string, monto: number) => void;
  eliminateId: (id: string) => void;
  getTotal: () => void;
  resetTotal: () => void;
}

// useCounterStore
export const useCountStore = create<States & Actions>((set) => ({
  // States
  totalIds: [],
  totalArray: [],
  total: 0,

  // Actions
  addId: (id, monto) => set((state) => ({ totalIds: [...state.totalIds, id], totalArray: [...state.totalArray, { id, monto }] })),
  eliminateId: (id) => set((state) =>
  ({
    totalIds: [...state.totalIds.filter(totalId => id !== totalId)],
    totalArray: [...state.totalArray.filter(totalId => id !== totalId.id)]
  }
  )),
  getTotal: () => set((state) => ({ total: state.totalArray.reduce((acc, pago) => acc + pago.monto, 0) })),
  resetTotal: () => set(() => ({ total: 0, totalIds: [], totalArray: [] })),
}));