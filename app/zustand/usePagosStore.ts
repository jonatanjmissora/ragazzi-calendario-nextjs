import { create } from "zustand";
import { getPagosDB } from "../db/dataDB";

type PagosStoreProps = {

  idsTotal: string[];
  addIdTotal: (newId: string) => void;
  deleteIdTotal: (id: string) => void;
  deleteAllIdsTotal: () => void;

  total: number;
  getTotal: () => Promise<number>;

}

export const usePagosStore = create<PagosStoreProps>()((set, get) => ({

  idsTotal: [],
  addIdTotal: (newId: string) => set({ idsTotal: [...get().idsTotal, newId] }),
  deleteIdTotal: (id: string) => set({ idsTotal: get().idsTotal.filter(pagoId => pagoId !== id) }),
  deleteAllIdsTotal: () => set({ idsTotal: [] }),


  total: 0,
  getTotal: async () => {
    const pagosPend = await getPagosDB("pendientes")
    const totalValues = get().idsTotal
      .map(id => pagosPend.filter(pago => pago._id === id)[0]
        .monto)
      .reduce((acc, monto) => acc + Number(monto), 0)
    return totalValues
  },

}))