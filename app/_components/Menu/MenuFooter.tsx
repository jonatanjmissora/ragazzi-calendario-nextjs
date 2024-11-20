"use client"

import { menuResetAction } from "@/app/_actions/menuAction"
import { deleteAllPagosAction } from "@/app/_actions/pagosAction"
import SpinnerSVG from "@/app/_assets/SpinnerSVG"
import { useState } from "react"

export default function PagoMenuFooter() {

    const [isLoading, setIsLoading] = useState<boolean[]>([false, false, false])

    const handleMenuReset = async () => {
        setIsLoading([true, false, false])
        await menuResetAction()
        setIsLoading([false, false, false])
    }

    const handlePendReset = async () => {
        setIsLoading([false, true, false])
        await deleteAllPagosAction("PagosPendientes")
        setIsLoading([false, false, false])
    }

    const handleRealReset = async () => {
        setIsLoading([false, false, true])
        await deleteAllPagosAction("PagosRealizados")
        setIsLoading([false, false, false])
    }

    return (
        <article className="w-full flex flex-col gap-4 items-center justify-center my-8">
            <button
                className={`primary-btn w-1/2 ${isLoading[0] && "bg-my-white"}`}
                onClick={handleMenuReset}
                disabled={isLoading[0]}
            >{isLoading[0] ? <SpinnerSVG className="size-6 p-1" currentColor="#ff0000" /> : "Menu Reset"}</button>

            <button
                className={`primary-btn w-1/2 ${isLoading[1] && "bg-my-white"}`}
                onClick={handlePendReset}
                disabled={isLoading[1]}
            >{isLoading[1] ? <SpinnerSVG className="size-6 p-1" currentColor="#ff0000" /> : "Pend Reset"}</button>

            <button
                className={`primary-btn w-1/2 ${isLoading[2] && "bg-my-white"}`}
                onClick={handleRealReset}
                disabled={isLoading[2]}
            >{isLoading[2] ? <SpinnerSVG className="size-6 p-1" currentColor="#ff0000" /> : "Real Reset"}</button>
        </article>
    )
}
