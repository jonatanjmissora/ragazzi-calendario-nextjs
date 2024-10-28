import { getSectoresDB } from "@/app/db/dataDB";
import Menu from "./Menu"

export default async function MenuContainer() {

  const data = await getSectoresDB("SectoresActuales")

  return (
    <>
      <Menu data={data} />
    </>
  )
}
