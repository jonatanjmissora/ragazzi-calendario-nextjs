import CancelSVG from "@/app/assets/CancelSVG";
import { PagoPendienteProps } from "@/app/types/pagosPendientes";

export default function PagoModal({ pago, setPagosPend, setShowModal, setPagosTotal }: { pago: PagoPendienteProps, setPagosPend: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>>, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, setPagosTotal: React.Dispatch<React.SetStateAction<PagoPendienteProps[]>> }) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { editDate, editMonto } = Object.fromEntries(formData);
    const newPago = { ...pago, vencimiento: editDate.toString(), monto: editMonto.toString() }

    setPagosPend(prev => {
      const newPagos = prev.filter(prevPago => prevPago._id !== pago._id)
      newPagos.push(newPago)
      return newPagos
    })

    if (Number(pago.monto) !== Number(newPago.monto))
      setPagosTotal(prev => {
        const isOnPagosTotal = prev.findIndex(pago => pago._id === pago._id) >= 0
        if (!isOnPagosTotal) return prev
        const newPagosTotal = prev.filter(oldPrev => oldPrev._id !== pago._id)
        newPagosTotal.push(newPago)
        return newPagosTotal
      })
    setShowModal(false)

  }

  return (
    <>
      <div className="inset-0 absolute z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
      <div className="absolute z-10 inset-0 top-0 left-0 flex justify-center items-center">
        <form
          className="relative bg-my-white rounded-xl p-8 text-my-black flex flex-col gap-6"
          onSubmit={handleSubmit}
        >

          <i className="absolute -top-10 -right-0" onClick={() => setShowModal(false)}><CancelSVG className="size-7 p-1 hover:bg-slate-500 rounded-lg" currentColor="#cacaca" /></i>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-4">
              <span>{pago.rubro}</span>
              <input className="w-5rem" type="date" name="editDate" defaultValue={pago.vencimiento} />
            </div>

            <div className="flex flex-col gap-4">
              <span>{pago.sector}</span>
              <input className="w-[6rem] pb-[2px]" type="number" name="editMonto" defaultValue={pago.monto} onFocus={(e) => e.currentTarget.select()} />
            </div>
          </div>

          <button
            className="font-semibold tracking-wide p-2 px-4 primary rounded-lg"
            type="submit">Cambiar</button>

        </form>
      </div>
    </>
  )
}