import { getSectoresAction } from "@/app/_actions/menuAction"
import Menu from "./Menu"

export default async function MenuContainer() {

  const data = await getSectoresAction("SectoresActuales")

  return (
    <Menu data={data} />
  )
}
