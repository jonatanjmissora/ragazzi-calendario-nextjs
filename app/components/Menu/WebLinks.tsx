import { WEBLINKS } from '@/app/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function WebLinks() {

  const webLinks = WEBLINKS

  return (
    <div>
      <ul className='w-full bg-my-white flex justify-between'>
        {
          webLinks.map(link =>
            <li key={link._id} className='w-[20%] p-2 border border-my-white'>
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
