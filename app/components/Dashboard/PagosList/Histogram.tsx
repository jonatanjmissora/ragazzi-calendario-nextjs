import { PagoProps } from "@/app/types/pagos"
import { HISTOGRAM } from "@/app/utils/constants"
import montoFormat from "@/app/utils/montoFormat"

export default function Histogram({ pago }: { pago: PagoProps }) {

    const histogram = HISTOGRAM

    const pagosArray = histogram.pagos.map(pago => Number(pago.monto))
    const maximoMonto = Math.max(...pagosArray)

    const getMontoHeight = (monto: string) => {
        return Math.round(Number(monto) / maximoMonto * 7)
    }

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
                className={`w-full primary border border-gray-500 border-on-top`}>$ {montoFormat(Number(monto))}
            </div>
            <p className="w-full text-center text-my-black mt-1">{fecha}</p>
        </div>
    )
}