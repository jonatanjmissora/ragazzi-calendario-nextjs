
"use client"
import CancelSVG from '@/app/_assets/CancelSVG';
import montoFormat from '@/app/_lib/utils/montoFormat';
import { useCountStore } from '@/app/_lib/zustand/counter'
import React, { useEffect } from 'react'

export default function TotalCounter() {

    const { totalArray, total, getTotal, resetTotal } = useCountStore((state) => state);   

    useEffect(() => {
        getTotal()
    }, [totalArray])

  return (
    <div>

        { total > 0 && 
        <div className='flex justify-center items-center gap-4'>
            <span className='text-my-black tracking-wide font-semibold'>total: $ {montoFormat(total)}</span>
            <button className='hover-scale-125 text-gray-500 rounded-lg hover:bg-gray-400 hover:text-my-white duration-200' onClick={resetTotal}><CancelSVG className="size-6 p-1" currentColor='currentColor'/></button>
        </div>
        }

    </div>
  )
}
