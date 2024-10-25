import { create } from "zustand"

type MenuStoreProps = {
    menuRubros: MenuRubroProps[],
    setMenuRubros: (rubros: MenuRubroProps[]) => void;
    addMenuSector: (rubro: string, sector: string) => void;
    deleteMenuSector: (rubro: string, sector: string) => void;
  }

export const useMenuStore = create<MenuStoreProps>()((set, get) => ({

menuRubros: [],
  setMenuRubros: (menuRubros: MenuRubroProps[]) => set({ menuRubros }),
  addMenuSector: (rubro: string, sector: string) => {
    const newMenuRubros = get().menuRubros
    const newMenuSectores = newMenuRubros 
      .find(menu => menu.rubro === rubro)
      ?.sectores || []
      newMenuSectores?.push(sector)
      const index = newMenuRubros.findIndex(menu => menu.rubro === rubro)
      console.log(rubro, index)
    newMenuRubros[index].sectores = newMenuSectores
    set({menuRubros: newMenuRubros})
  },
  deleteMenuSector: (rubro: string, sector: string) => {
    const newMenuRubros = get().menuRubros
    const newMenuSectores = newMenuRubros 
      .find(menu => menu.rubro === rubro)
      ?.sectores
      .filter(newSector => newSector !== sector)
    const index = newMenuRubros.findIndex(menu => menu.rubro === rubro)
    newMenuRubros[index].sectores = newMenuSectores || []
    set({menuRubros : newMenuRubros})
  },

}))