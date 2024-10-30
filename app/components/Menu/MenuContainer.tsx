import { getSectoresAction } from "@/app/actions/menuAction"
import Menu from "./Menu"

export default async function MenuContainer() {

  const data = await getSectoresAction()

  return (
    <>
      <Menu data={data} />
    </>
  )
}