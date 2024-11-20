import { getHistogramAction } from "@/app/_actions/pagosAction"
import { HistoProps } from "@/app/_types/histogram"
import { PagoProps } from "@/app/_types/pagos"
import montoFormat from "@/app/_lib/utils/montoFormat"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Histogram({ pago }: { pago: PagoProps }) {

    const [histogram, setHistogram] = useState<HistoProps>({ id: "", pagos: [] })

    const pagosArray = histogram.pagos.map(pago => Number(pago.monto))
    const maximoMonto = Math.max(...pagosArray)

    const getMontoHeight = (monto: string) => {
        return Math.round(Number(monto) / maximoMonto * 7)
    }

    useEffect(() => {

        let histogramNumber = 12
        if (window.screen.width < 500) histogramNumber = 4

        const getHistory = async () => {
            const res = await getHistogramAction(pago.rubro, pago.sector)
            if (res?.error) toast.error("No fue posible cargar histograma")
            else {
                if (histogramNumber === 4) {
                    const newPagos = res.data.pagos.slice(9, 13)
                    const newHistogram = { ...res.data, pagos: newPagos }
                    setHistogram(newHistogram)
                }
                else setHistogram(res.data)
            }
        }

        getHistory()

    }, [pago])

    return (
        <div className="bg-header m-4 rounded-lg">
            <p className="w-full text-my-black pt-2 mx-4">{`${pago.rubro} - ${pago.sector}`}</p>

            <div className="flex flex-row-reverse justify-center items-end overflow-hidden">
                {
                    histogram.pagos.map(pago => <Bar key={pago.fecha} fecha={pago.fecha} monto={pago.monto} heightPercentage={getMontoHeight(pago.monto)} />)
                }
            </div>
        </div>
    )
}

const Bar = ({ fecha, monto, heightPercentage }: { fecha: string, monto: string, heightPercentage: number }) => {

    const isLower = (!heightPercentage || heightPercentage < 2) ? true : false
    return (
        <div className="w-[20%] sm:w-[10%] text-center my-2">
            <div
                style={{ height: `${heightPercentage}rem` }}
                className={`relative w-full text-xs bg-histogram border-on-top pt-1 flex justify-center`}>
                <span className={`absolute ${isLower ? "-top-5 text-my-black" : "top-2"}`}>$ {montoFormat(Number(monto))}</span>
            </div>
            <p className="w-full text-xs text-center text-my-black mt-1">{fecha.substring(0, 7)}</p>
        </div>
    )
}