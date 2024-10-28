import { create } from "zustand";
import { PagoProps } from "../types/pagos";

type PagosStoreProps = {
  filter: string;
  setFilter: (value: string) => void;

  /*
  pagosPend: PagoProps[];
  setPagosPend: (pagos: PagoProps[]) => void;
  // getPagoPendById: (id: string) => void;
  addPagoPendienteFront: (newPagPend: PagoProps) => void;
  deletePagoPendienteFront: (id: string) => void;
  editPagoPend: (newPagoPend: PagoProps) => void;
*/

  idsTotal: string[];
  addIdTotal: (newId: string) => void;
  deleteIdTotal: (id: string) => void;
  deleteAllIdsTotal: () => void;

  total: number;
  getTotal: () => number;

  /*
  pagosReal: PagoProps[];
  setPagosReal: (pagosReal: PagoProps[]) => void;
  addPagoRealizadosFront: (newPagPend: PagoProps) => void;
  */
}

export const usePagosStore = create<PagosStoreProps>()((set, get) => ({

  /*
          PAGOS PENDIENTES
  */
  filter: "todos",
  setFilter: (value: string) => set({ filter: value }),

/*
  pagosPend: [],
  setPagosPend: (pagosPend: PagoProps[]) => set({ pagosPend }),
  // getPagoPendById: (id: string) => get().pagosPend.filter(pago => pago._id === id)[0],
  addPagoPendienteFront: (newPagoPend: PagoProps) => set({ pagosPend: [...get().pagosPend, newPagoPend] }),
  deletePagoPendienteFront: (id: string) => set({ pagosPend: get().pagosPend.filter(pago => pago._id !== id) }),
  editPagoPend: (newPagoPend: PagoProps) =>
    set({ pagosPend: get().pagosPend.map(pago => pago._id === newPagoPend._id ? newPagoPend : pago) }),
*/

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

  /*
  PAGOS REALIZADOS
  */
 /*
  pagosReal: [],
  setPagosReal: (pagosReal: PagoProps[]) => set({ pagosReal }),
  a*/
}))