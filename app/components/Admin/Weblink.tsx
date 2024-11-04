"use client"

import { updateWeblinkAction } from '@/app/_actions/weblinksAction'
import { WebLinksProps } from '@/app/_types/webLinks'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function Weblink({ link }: { link: WebLinksProps }) {

    const formAction = async (formData: FormData) => {
      const newHref = formData.get("href") as string
      if (!newHref || newHref.trim() === "") return
        const res = await updateWeblinkAction(link._id, newHref)
        if(res.modifiedCount === 0) toast.error("El link no se pudo modificar")
        else toast.success("Link modificado correctamente")
      }
    
      return (
        <div className='bg-my-white p-4 rounded-lg shadow flex justify-between items-center gap-12'>

          <picture className='size-8 flex relative'>
            <Image src={link.img} alt={link._id} fill />
          </picture>
          
          <form className='flex gap-6 flex-1' action={formAction}>
            <input className="w-3/4" type="text" defaultValue={link.href} name="href"/>
            <button className='btn-dark rounded-lg border border-my-black shadow hover:border-gray-500'>Cambiar</button>
          </form>
        </div>
      )
}
