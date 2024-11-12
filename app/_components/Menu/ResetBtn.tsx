import { menuResetAction } from "@/app/_actions/menuAction";
import SubmitBtn from "../SubmitBtn";

export default function ResetBtn() {

  const toggleDialog = () => {
    // Get the dialog element
    const dialog = document.getElementById("dialog");
    // Figure out what the 'open' attribute is set to
    const open = dialog?.getAttribute("open");
    // Set the dialog's 'open' value accordingly
    if (open) {
      dialog?.removeAttribute("open");
    } else {
      dialog?.setAttribute("open", "true");
    }
  };

  return (
    <div className="scale-75 w-full flex flex-col justify-center items-center">
      <form action={menuResetAction}>

        <SubmitBtn text={"reset"} />
      </form>
      <div>
        <dialog id="dialog" className="bg-my-white p-4">
          <form>
            <input type="text" />
            <button formMethod="dialog" type="submit">Cancel</button>
            <button type="submit">Submit</button>
          </form>
        </dialog>
        <button onClick={toggleDialog}>This button toggles a dialog</button>
      </div>
    </div>
  )
}
