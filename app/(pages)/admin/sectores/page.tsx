import { getSectoresAction } from '@/app/_actions/menuAction'
import Rubro from '@/app/_components/Admin/Rubro'

export default async function page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

  const type = (await searchParams)?.type || "actuales"
  const collection = type === "actuales" ? "SectoresActuales" : "ConstantMenuSectores"

  const sectoresArray = await getSectoresAction(collection)

  return (
    <section className='m-4 flex flex-col gap-4'>
      {sectoresArray.map(rubro => <Rubro key={rubro._id} rubro={rubro} />)}
    </section>
  )
}