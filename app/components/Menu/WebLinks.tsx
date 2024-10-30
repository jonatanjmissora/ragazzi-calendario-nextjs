import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import absa_logo from "../../assets/absa_logo.webp"
import arba_logo from "../../assets/arba_logo.webp"
import bahia_logo from "../../assets/bahia_logo.webp"
import camuzzi_logo from "../../assets/camuzzi_logo.webp"
import edes_logo from "../../assets/edes_logo.webp"

export default function WebLinks() {

  const links = [
    {
      name: "aguas bonaerenses",
      href: "https://oficinavirtual.aguasbonaerenses.com.ar/login",
      img: absa_logo
    },
    {
      name: "camuzzi gas pampeana",
      href: "https://oficinavirtual.camuzzigas.com.ar/#/landing",
      img: camuzzi_logo
    },
    {
      name: "edes",
      href: "https://oficinavirtual.infoedes.com/ingreso",
      img: edes_logo
    },
    {
      name: "municipilada bahia blanca",
      href: "https://www.bahia.gob.ar/apex/f?p=204:LOGIN_DESKTOP:9560258291395:::::",
      img: bahia_logo
    },
    {
      name: "arba rentas",
      href: "https://app.arba.gov.ar/LiqPredet/InicioLiquidacion.do",
      img: arba_logo
    }
  ]

  return (
    <div>
      <ul className='w-full bg-my-white flex justify-between'>
        {
          links.map(link =>
            <li key={link.name} className='w-[20%] p-2 border border-my-white'>
              <Link
                href={link.href}
                key={link.name}
                target="_blank"
              >
                <Image src={link.img} alt={link.name} />
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
