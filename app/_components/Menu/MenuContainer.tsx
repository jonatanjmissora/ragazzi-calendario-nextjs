import { getSectoresAction } from "@/app/_actions/menuAction"
import Menu from "./Menu"

export default async function MenuContainer() {

  const data = await getSectoresAction("SectoresActuales")

  return (
    <>
      <div className="flex items-center m-2 sm:hidden">
        <div className="h-16 w-16 logo-container-inv"></div>
        <span className="text-my-white font-bold text-3xl tracking-wider">Ragazzi</span>
      </div>
      <Menu data={data} />
    </>
  )
}
