"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function SectoresMenu() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const type = searchParams.get("type") ?? "actuales"

  const handleClick = (value: string) => {

    params.set('type', value)
    router.replace(`${pathname}?${params.toString()}`)

  }

  return (
    <div className='w-1/2 h-[5rem] text-my-black flex items-center p-4 '>
      <button
        className={`link-btn border-b border-gray-500 ${type === "actuales" && "link-btn-active"}`}
        onClick={() => handleClick("actuales")}
      >
        actuales
      </button>

      <button
        className={`link-btn border-b border-gray-500 ${type === "reset" && "link-btn-active"}`}
        onClick={() => handleClick("reset")}
      >
        reset
      </button>

    </div>
  )
}
