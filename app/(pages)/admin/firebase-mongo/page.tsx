"use client"
import { firebaseLogin, firebaseLogout } from "@/app/_db/firebaseClient";
import { PagoProps } from "@/app/_types/pagos";
import { useFirebase } from "@/app/_lib/hooks/useFirebase";
import { convertFireToMongo } from "./convertFireToMongo";
import { addAllPagosAction } from "@/app/_actions/pagosAction";
import toast from "react-hot-toast";
import { useState } from "react";

export default function FireToMongoPage() {

  const { firebaseUser, firebaseData, collection } = useFirebase()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const convertedData = convertFireToMongo(firebaseData, collection)

  const handleAddAll = async () => {
    setError("")
    setIsLoading(true)
    const res = await addAllPagosAction("PagosRealizados", convertedData)
    if (!res?.error) {
      toast.success("Pagos añadidos exitosamente")
    }
    else {
      toast.error("Error al añadir datos")
      setError(res?.error)
    }
    setIsLoading(false)
  }

  return (
    <section className="py-2 px-4 h-full overflow-auto">

      <div className="flex gap-4 p-2 items-center">
        <span className="font-bold text-2xl tracking-wide">FIREBASE to MONGO</span>
        <span>usuario: {firebaseUser}</span>
        {
          firebaseUser
            ? <button className="bg-gray-500 text-my-white border border-black p-1 px-2 w-max rounded-lg" onClick={firebaseLogout}>Logout</button>
            : <button className="bg-gray-500 text-my-white border border-black p-1 px-2 w-max rounded-lg" onClick={firebaseLogin}>Login</button>
        }
      </div>

      <div className="p-2 flex gap-8">
        <span>COLECCION: {collection}</span>
        <button className="bg-gray-500 text-my-white border border-black p-1 px-2 w-max rounded-lg" onClick={handleAddAll}>{isLoading ? "Procesando..." : "Pasar a Mongo"}</button>
      </div>
      <span className="text-yellow-500">{error}</span>

      <div className="grid db-grid-6 font-bold text-xs p-2">
        <span className="border border-black text-center">_id</span>
        <span className="border border-black text-center">rubro</span>
        <span className="border border-black text-center">sector</span>
        <span className="border border-black text-center">vencim</span>
        <span className="border border-black text-center">monto</span>
        <span className="border border-black text-center">pagado</span>
      </div>
      {/* {firebaseData.map((data, index) => <Row key={index} data={data} docYear={docYear} />)} */}
      {convertedData.map((data, index) => <Row key={index} data={data} />)}
    </section>
  )
}

const Row = ({ data }: { data: PagoProps }) => {

  return (
    <div className="grid db-grid-6 text-xs px-2">
      <span className="border-b border-black">{data._id}</span>
      <span className="border-b border-black text-center">{data.rubro}</span>
      <span className="border-b border-black text-center">{data.sector}</span>
      <span className="border-b border-black text-center">{data.vencimiento}</span>
      <span className="border-b border-black text-center">{data.monto}</span>
      <span className="border-b border-black text-center">{data.pagado}</span>
    </div>
  )
}