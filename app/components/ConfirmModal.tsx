"use client"

import React, { useState } from 'react'
import CancelSVG from '../assets/CancelSVG'
import SubmitBtn from './SubmitBtn'
import { deletePagoAction } from '../_actions/pagosAction'
import { addSectorAction, getSectoresAction } from '../_actions/menuAction'
import toast from 'react-hot-toast'
import { PagoProps } from '../_types/pagos'

export default function ConfirmModal({ pago, collection, setShowConfirm }: { pago: PagoProps, collection: string, setShowConfirm: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [error, setError] = useState<string>("")

    const formAction = async () => {
        setError("")
        const res = await deletePagoAction(collection, pago)
        if (res?.error) {
            setError(res?.error)
            toast.error("El pago no ha podido ser eliminado")
            return
        }
        else {
            if (collection === "Pagos realizados") return
            const menuRubros = await getSectoresAction("SectoresActuales")
            const newSectores = menuRubros
                .find(mr => mr.rubro === pago.rubro)?.sectores
                .filter(s => s !== pago.sector) || []
            newSectores.push(pago.sector)
            const res = await addSectorAction("SectoresActuales", pago.rubro, newSectores)
            if (res?.error) {
                setError(res?.error)
                toast.error("El sector no ha podido ser añadido")
                return
            }

        }
        toast.success("Pago cancelado con exito")
        setShowConfirm(false)
    }

    return (
        <>
            <div className="inset-0 absolute z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
            <div className="absolute z-10 inset-0 top-0 left-0 flex justify-center items-center">
                <form
                    className="relative bg-my-white rounded-xl p-8 text-my-black flex flex-col gap-6"
                    action={formAction}
                >

                    <i className="absolute -top-10 -right-0" onClick={() => setShowConfirm(false)}><CancelSVG className="size-7 p-1 hover:bg-slate-500 rounded-lg" currentColor="#cacaca" /></i>

                    <span>¿ Seguro deseas eliminar el pago pendiente ?</span>

                    <SubmitBtn text="Eliminar" />

                    <span className="absolute -bottom-4 left-4 text-xs text-my-white">{error}</span>

                </form>
            </div>
        </>
    )
}
