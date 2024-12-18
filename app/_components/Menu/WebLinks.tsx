import { WEBLINKS } from '@/app/_lib/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function WebLinks() {

  const webLinks = WEBLINKS

  return (
    <div>
      <ul className='w-full flex justify-between'>
        {
          webLinks.map(link =>
            <li key={link._id} className='w-[15%] sm:w-[20%] p-2 weblink duration-200'>
              <Link
                href={link.href}
                target="_blank"
              >
                <Image src={link.img} alt={link._id} />
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
