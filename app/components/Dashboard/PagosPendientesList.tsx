import { getPagosPendientes } from "@/app/db/pagos"

export default async function PagosPendientesList() {

  const data = await getPagosPendientes()

  return (
    <section
      className="primary p-4 m-8 rounded-lg shadow">

      {data.map(pago => <PagoPendiente key={pago._id.toString()} pago={pago} />)}

    </section>
  )
}

type PagoProps = {
  _id: string;
  vencimiento: string;
  rubro: string;
  sector: string;
  monto: string;
}

const PagoPendiente = ({ pago }: { pago: PagoProps }) => {
  return (
    <div>
      {JSON.stringify(pago)}
    </div>
  )
}