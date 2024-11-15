import { useFormStatus } from "react-dom";
import SpinnerSVG from "../_assets/SpinnerSVG";

export default function SubmitBtn({ text, className }: { text: string, className: string }) {

  const { pending } = useFormStatus()

  return (
    <button
      className={`primary-btn ${className}`}
      disabled={pending}
      type="submit" >
      {pending ? <SpinnerSVG className="size-6" currentColor="#eeeeee" /> : text}
    </button>

  )
}
