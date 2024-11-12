import { getHistogramAction } from "@/app/_actions/pagosAction"
import { HistoProps } from "@/app/_types/histogram"
import { PagoProps } from "@/app/_types/pagos"
import { HISTOGRAM } from "@/app/_lib/utils/constants"
import montoFormat from "@/app/_lib/utils/montoFormat"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Histogram({ pago }: { pago: PagoProps }) {

    // const histogram = HISTOGRAM

    const [histogram, setHistogram] = useState<HistoProps>({ id: "", pagos: [] })

    const pagosArray = histogram.pagos.map(pago => Number(pago.monto))
    const maximoMonto = Math.max(...pagosArray)

    const getMontoHeight = (monto: string) => {
        return Math.round(Number(monto) / maximoMonto * 7)
    }

    useEffect(() => {

        const getHistory = async () => {
            const res = await getHistogramAction(pago.rubro, pago.sector)
            if (res?.error) toast.error("No fue posible cargar histograma")
            else setHistogram(res.data)
        }

        getHistory()

    }, [])

    return (
        <div className="bg-my-white m-4 rounded-lg">
            <p className="w-full text-my-black pt-2 mx-4">{`${pago.rubro} - ${pago.sector}`}</p>

            <div className="flex flex-row-reverse justify-center items-end">
                {
                    histogram.pagos.map(pago => <Bar key={pago.fecha} fecha={pago.fecha} monto={pago.monto} heightPercentage={getMontoHeight(pago.monto)} />)
                }
            </div>
        </div>
    )
}

const Bar = ({ fecha, monto, heightPercentage }: { fecha: string, monto: string, heightPercentage: number }) => {


    return (
        <div className="w-[10%] text-center my-2">
            <div
                style={{ height: `${heightPercentage}rem` }}
                className={`w-full text-xs primary border border-gray-500 border-on-top pt-1`}>$ {montoFormat(Number(monto))}
            </div>
            <p className="w-full text-xs text-center text-my-black mt-1">{fecha.substring(0, 7)}</p>
        </div>
    )
}