import Menu from "./Menu"
import { getMenuRubrosDB } from "@/app/db/client"

export default async function MenuContainer() {

  //const data = await getMenuRubrosDB()
  const data = [
    { _id: "01", rubro: "ragazzi", sectores: ["gas", "luz", "telefono"] },
    { _id: "02", rubro: "patricios", sectores: ["municipal", "internet", "patente"] },
    { _id: "03", rubro: "palihue", sectores: ["municipal", "monotributo"] },
    { _id: "04", rubro: "jmolina", sectores: [] },
  ]

  return (
    <>
      <Menu data={data} />
    </>
  )
}
