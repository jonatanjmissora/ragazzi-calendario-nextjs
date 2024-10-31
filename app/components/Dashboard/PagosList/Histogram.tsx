import montoFormat from "@/app/utils/montoFormat"

export default function Histogram() {


    //TODO hace la llamada a la base de datos, segun el filter
    const histogram = { 
            id: "ragazzi-agua", 
            pagos: [
                {fecha: "2024-10", monto: "2595"},
                {fecha: "2024-09", monto: "3850"},
                {fecha: "2024-08", monto: "4580"},
                {fecha: "2024-07", monto: "2595"},
                {fecha: "2024-06", monto: "7890"},
                {fecha: "2024-05", monto: "3050"},
                {fecha: "2024-04", monto: "5580"},
                {fecha: "2024-03", monto: "7580"},
            ] 
        }
  
    const pagosArray = histogram.pagos.map(pago => Number(pago.monto))
    const maximoMonto = Math.max(...pagosArray)

    const getMontoHeight = (monto: string) => {
        return Math.round(Number(monto)/maximoMonto*7)
    }

    return (
        <div className="bg-my-white mx-4 rounded-lg flex flex-row-reverse justify-center items-end">
            {
                histogram.pagos.map(pago => <Bar fecha={pago.fecha} monto={pago.monto} heightPercentage={getMontoHeight(pago.monto)} />)
            }
        </div>
    )
}

const Bar = ({fecha, monto, heightPercentage}: {fecha: string, monto: string, heightPercentage: number}) => {

    
    return (
        <div className="w-[10%] text-center my-2">

            <div 
                style={{height: `${heightPercentage}rem`}}
                className={`w-full primary`}>$ {montoFormat(Number(monto))}
            </div>
            <p className="w-full text-center text-my-black mt-1">{fecha}</p>
        </div>
    )
}