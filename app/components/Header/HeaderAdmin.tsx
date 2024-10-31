import getActualDate from "@/app/utils/date"

export default function HeaderAdmin() {

    const fechaActual = getActualDate()

  return (
    <article className="flex justify-between items center mx-4">

    {/* TODO hacer un menu para elegir si quiero editar, rubro-sectores, un pago realizado, o los web links */}
        <div className="flex justify-center items-center gap-8">
            <select name="" id="">
    {/* TODO listar rubros */}
            </select>
            <select name="" id="">
    {/* TODO listar todos los sectores de todos los rubros */}
            </select>

            <input className="w-[11ch]" type="date" name="" id="" defaultValue={fechaActual}/>
            <input className="w-[11ch]" type="date" name="" id="" defaultValue={fechaActual}/>
        </div>

        <span>WEB</span>
        
    </article>
  )
}
