import { create } from "zustand";
import { PagoPendienteProps } from "../types/pagosPendientes";

type PagosStoreProps = {
  filter: string;
  setFilter: (value: string) => void;

  pagosPend: PagoPendienteProps[];
  setPagosPend: (pagos: PagoPendienteProps[]) => void;
  getPagoPendById: (id: string) => void;
  addPagoPendienteFront: (newPagPend: PagoPendienteProps) => void;
  deletePagoPend: (id: string) => void;
  editPagoPend: (newPagoPend: PagoPendienteProps) => void;

  idsTotal: string[];
  addIdTotal: (newId: string) => void;
  deleteIdTotal: (id: string) => void;
  deleteAllIdsTotal: () => void;

  total: number;
  getTotal: () => number;

}

export const usePagosStore = create<PagosStoreProps>()((set, get) => ({


  filter: "todos",
  setFilter: (value: string) => set({ filter: value }),


  pagosPend: [],
  setPagosPend: (pagosPend: PagoPendienteProps[]) => set({ pagosPend }),
  getPagoPendById: (id: string) => get().pagosPend.filter(pago => pago._id === id)[0],
  addPagoPendienteFront: (newPagoPend: PagoPendienteProps) => set({ pagosPend: [...get().pagosPend, newPagoPend] }),
  deletePagoPend: (id: string) => set({ pagosPend: get().pagosPend.filter(pago => pago._id !== id) }),
  editPagoPend: (newPagoPend: PagoPendienteProps) =>
    set({ pagosPend: get().pagosPend.map(pago => pago._id === newPagoPend._id ? newPagoPend : pago) }),


  idsTotal: [],
  addIdTotal: (newId: string) => set({ idsTotal: [...get().idsTotal, newId] }),
  deleteIdTotal: (id: string) => set({ idsTotal: get().idsTotal.filter(pagoId => pagoId !== id) }),
  deleteAllIdsTotal: () => set({ idsTotal: [] }),


  total: 0,
  getTotal: () => {
    const totalValues = get().idsTotal
      .map(id => get().pagosPend.filter(pago => pago._id === id)[0]
        .monto)
      .reduce((acc, monto) => acc + Number(monto), 0)
    return totalValues
  },

}))