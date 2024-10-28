import { useFormStatus } from "react-dom";
import SpinnerSVG from "../assets/SpinnerSVG";

export default function SubmitBtn({ text }: { text: string }) {

  const { pending } = useFormStatus()

  return (
    <button
      className={`tracking-wider w-full h-[2.6rem] mb-2 self-end flex justify-center primary p-4 py-2 rounded-lg ${false && "opacity-80"} duration-200 hover:text-my-black hover:border-slate-400`}
      disabled={pending}
      type="submit" >
      {pending ? <SpinnerSVG className="size-6" currentColor="#eeeeee" /> : text}
    </button>

  )
}
