import { Sorted } from "@/app/utils/sort"
import Rubro from "./Rubro"
import Header from "./Header"
import Menu from "./Menu"

export default function MenuContainer() {

  //const rubros = await getMenuRubros()
  const data = [  
    {_id: "01", rubro: "ragazzi", sectores: ["gas", "luz", "telefono"]}, 
    {_id: "02", rubro: "patricios", sectores: ["municipal", "rentas", "patente"]},
  ]

  return (
    <>
      <Menu data={data}/>
    </>
  )
}
