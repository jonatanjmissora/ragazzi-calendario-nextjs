"use client"
import { firebaseLogin, firebaseLogout } from "@/app/_db/firebaseClient";
import { PagoProps } from "@/app/_types/pagos";
import { FireDataProps, useFirebase } from "@/app/lib/hooks/useFirebase";
import { convertFireToMongo, correctSector } from "./convertFireToMongo";

const invDate = (date: string) => {
  const [day, month] = date.split("-")
  return month + "-" + day
}

export default async function page() {

  const { firebaseUser, firebaseData, docYear } = useFirebase()

  const convertedData = convertFireToMongo(firebaseData, docYear)
  
  return (
    <section className="py-2 h-full overflow-auto">

      <div className="flex gap-4 p-4 items-center">
        <span className="font-bold text-2xl tracking-wide">FIREBASE to MONGO</span>
        <span>usuario: {firebaseUser}</span>
        {
          firebaseUser
            ? <button className="bg-gray-500 text-my-white border border-black p-1 px-2 w-max rounded-lg" onClick={firebaseLogout}>Logout</button>
            : <button className="bg-gray-500 text-my-white border border-black p-1 px-2 w-max rounded-lg" onClick={firebaseLogin}>Login</button>
        }
      </div>

      <div className="grid grid-cols-6 font-bold">
        <span className="border border-black">mongo _id</span>
        <span className="border border-black">mongo rubro</span>
        <span className="border border-black">mongo sector</span>
        <span className="border border-black">mongo vencim</span>
        <span className="border border-black">mongo monto</span>
        <span className="border border-black">mongo pagado</span>
      </div>
      {/* {firebaseData.map((data, index) => <Row key={index} data={data} docYear={docYear} />)} */}
      {convertedData.map((data, index) => <Row key={index} data={data} />)}
    </section>
  )
}

const Row = ({data}: {data: PagoProps}) => {

  return (
    <div className="grid grid-cols-6">
      <span className="border border-black">{data._id}</span>
      <span className="border border-black text-right">{data.rubro}</span>
      <span className="border border-black">{data.sector}</span>
      <span className="border border-black text-right">{data.vencimiento}</span>
      <span className="border border-black text-right">{data.monto}</span>
      <span className="border border-black text-right">{data.pagado}</span>
    </div>
  )
}