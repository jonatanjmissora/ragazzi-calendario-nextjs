"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Input({ text }: { text: string }) {

  const labelText = text[0].toUpperCase() + text.slice(1)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const filterR = searchParams.get("filterR") || "todos"

  const handleChange = (newFilter: string) => {
    params.set('filterR', newFilter);
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <input
        className="hidden flex-0"
        onChange={() => handleChange(text)}
        type="radio" id={text} name="filter"
        checked={filterR === text}
      />
      <label htmlFor={text}
        className="text-my-black text-center flex-1 rounded-sm hover:bg-my-hover hover:text-my-white px-2 duration-200">{labelText}</label>
    </>
  )
}