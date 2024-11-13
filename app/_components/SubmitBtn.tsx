import { useFormStatus } from "react-dom";
import SpinnerSVG from "../_assets/SpinnerSVG";

export default function SubmitBtn({ text, className }: { text: string, className: string }) {

  const { pending } = useFormStatus()

  return (
    <button
      className={`tracking-wider ${className} mb-2 flex justify-center primary p-4 py-2 rounded-lg ${false && "opacity-80"} duration-200 hover:text-my-black hover:border hover:border-black`}
      disabled={pending}
      type="submit" >
      {pending ? <SpinnerSVG className="size-6" currentColor="#eeeeee" /> : text}
    </button>

  )
}
