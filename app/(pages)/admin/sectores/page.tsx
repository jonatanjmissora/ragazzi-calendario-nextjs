import Rubro from '@/app/components/Admin/Rubro'
import { SECTORESRESET } from '@/app/utils/constants'

export default function page() {

  const sectoresReset = SECTORESRESET

  return (
    <section className='m-4 flex flex-col gap-4'>
      {sectoresReset.map(rubro => <Rubro key={rubro._id} rubro={rubro} />)}
    </section>
  )
}