import { create } from "zustand";
import { PagoPendienteProps } from "../types/pagosPendientes";

// const pagosDB = [
//   { _id: "er223", vencimiento: "2024-10-30", rubro: "ragazzi", sector: "contador", monto: "1285000" },
//   { _id: "edf23", vencimiento: "2024-10-20", rubro: "jmolina", sector: "agua", monto: "7654" },
//   { _id: "fsw23", vencimiento: "2024-10-25", rubro: "palihue", sector: "cable", monto: "25385" },
//   { _id: "rtf23", vencimiento: "2024-10-15", rubro: "patricios", sector: "rentas", monto: "5854" },
// ]

// const getPagosFromDB = () => new Promise((res) => {
//   setTimeout(() => {
//     res(pagosDB)
//   }, 2000)
// })

// type PagoProps = {
//   id: string;
//   sector: string;
//   monto: string;
// }

type PagosStoreProps = {
  filter: string;
  setFilter: (value: string) => void;

  pagosPend: PagoPendienteProps[];
  setPagosPend: (pagos: PagoPendienteProps[]) => void;
  // getPagos: () => Promise<void>;
  getPagoPendById: (id: string) => void;
  addPagoPend: (newPagPend: PagoPendienteProps) => void;
  deletePagoPend: (id: string) => void;
  editPagoPend: (newPagoPend: PagoPendienteProps) => void;

  idsTotal: string[];
  addIdTotal: (newId: string) => void;
  deleteIdTotal: (id: string) => void;
  deleteAllIdsTotal: () => void;

  total: number;
  getTotal: () => number;

  //menuRubros: MenuRubroProps,
  //addMenuRubro: (rubro: string, sector: string) => void;
  //deleteMenuRubro: (id: string) => void;
}

export const usePagosStore = create<PagosStoreProps>()((set, get) => ({
  filter: "todos",
  setFilter: (value: string) => set({ filter: value }),

  pagosPend: [],
  setPagosPend: (pagosPend: PagoPendienteProps[]) => set({ pagosPend }),
  // getPagos: async () => {
  //   const data = await getPagosFromDB() as PagoPendienteProps[]
  //   set({ pagos: data })
  // },
  getPagoPendById: (id: string) => get().pagosPend.filter(pago => pago._id === id)[0],
  addPagoPend: (newPagoPend: PagoPendienteProps) => set({ pagosPend: [...get().pagosPend, newPagoPend] }),
  deletePagoPend: (id: string) => set({ pagosPend: get().pagosPend.filter(pago => pago._id !== id) }),
  editPagoPend: (newPagoPend: PagoPendienteProps) => set({ pagosPend: get().pagosPend.map(pago => pago._id === newPagoPend._id ? newPagoPend : pago) }),

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
  //menuRubros: {},
  //addMenuRubro: (rubro: string, sector: string) => set({menuRubros: {...get().menuRubros, get().menuRubros[rubro]: get().menuRubros[rubro].push(sector) || [sector]} }),
  //deleteMenuRubro: (id: string) => null,
}))