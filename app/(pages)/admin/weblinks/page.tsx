"use client"

import { WebLinksProps } from '@/app/types/webLinks'
import { WEBLINKS } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

export default function page() {

  const webLinks = WEBLINKS as WebLinksProps[]

  return (
    <section className='m-4 flex flex-col gap-4'>
      {webLinks.map(link => <Link key={link._id} link={link} />)}
    </section>
  )
}

const Link = ({ link }: { link: WebLinksProps }) => {

  const cambiarLink = async () => {
    toast.loading("Cambiando link")
  }

  return (
    <div className='bg-my-white p-4 rounded-lg shadow flex justify-between items-center gap-12'>
      <picture className='size-8 flex relative'>
        <Image src={link.img} alt={link._id} fill />
      </picture>
      <form className='flex gap-6 flex-1' onSubmit={cambiarLink}>
        <input className="w-3/4" type="text" defaultValue={link.href} />
        <button className='btn-dark rounded-lg border border-my-black shadow hover:border-gray-500'>Cambiar</button>
      </form>
    </div>
  )
}