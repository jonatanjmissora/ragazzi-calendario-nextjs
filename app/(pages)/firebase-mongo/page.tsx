"use client"
import { firebaseLogin, firebaseLogout } from "@/app/_db/firebaseClient";
import { PagoProps } from "@/app/_types/pagos";
import { useFirebase } from "@/app/lib/hooks/useFirebase";

const invDate = (date: string) => {
  const [day, month] = date.split("-")
  return month + "-" + day
}

export default async function page() {

  const { firebaseUser, firebaseData } = useFirebase()
  const convData = firebaseData.map(doc => {
    return {
      _id: `2024-${invDate(doc.date)}-${doc.sector}-${doc.rubro.toLocaleLowerCase()}`,
      vencimiento: `2024-${invDate(doc.date)}`,
      rubro: doc.sector,
      sector: doc.rubro.toLocaleLowerCase(),
      monto: doc.monto,
      pagado: `2024-${invDate(doc.fechaPagado)}`,
    }

  }) as PagoProps[]

  return (
    <section className='my-4 flex flex-col'>
      <h1>FIREBASE to MONGO</h1>
      {
        firebaseUser
          ? <button className="border border-black p-1 px-2 w-max" onClick={firebaseLogout}>Logout</button>
          : <button className="border border-black p-1 px-2 w-max" onClick={firebaseLogin}>Login</button>
      }
      <p>usuario: {firebaseUser}</p>
      {firebaseData.map(data => <span>{JSON.stringify(data)}</span>)}
      {convData.map(data => <span>{JSON.stringify(data)}</span>)}
    </section>
  )
}