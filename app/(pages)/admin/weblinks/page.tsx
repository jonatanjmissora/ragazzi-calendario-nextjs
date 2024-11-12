
import { getWeblinksAction, updateWeblinkAction } from '@/app/_actions/weblinksAction'
import Weblink from '@/app/_components/Admin/Weblink'

export default async function page() {

  // const webLinks = WEBLINKS as WebLinksProps[]

  const webLinks = await getWeblinksAction()

  return (
    <section className='m-4 flex flex-col gap-4'>
      {webLinks.map(link => <Weblink key={link._id} link={link} />)}
    </section>
  )
}
