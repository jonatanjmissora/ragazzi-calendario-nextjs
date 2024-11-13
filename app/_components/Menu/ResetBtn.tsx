"use client"
import { menuResetAction } from "@/app/_actions/menuAction";
import SubmitBtn from "../SubmitBtn";
import { useState } from "react";
import CancelSVG from "@/app/_assets/CancelSVG";

export default function ResetBtn() {

  const [showConfirm, setShowConfirm] = useState<boolean>(true)


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button className="primary px-4 py-1 rounded-lg mt-8" onClick={() => setShowConfirm(true)}>reset</button>

      {
        showConfirm &&

        <>
          <div className="inset-0 absolute z-10 top-0 left-0 backdrop-blur-[1px] bg-[#22222290]"></div>
          <div className="absolute z-10 inset-0 top-0 left-0 flex justify-center items-center">
            <form
              className="relative bg-my-white rounded-xl p-4 py-8 m-4 text-my-black flex flex-col justify-center items-center gap-6"
              action={menuResetAction}
            >

              <i className="absolute -top-10 -right-0" onClick={() => setShowConfirm(false)}><CancelSVG className="size-7 p-1 hover:bg-slate-500 rounded-lg" currentColor="#cacaca" /></i>

              <span className="text-center">{`¿ Seguro deseas resetear los sectores ?`}</span>

              <SubmitBtn text="reset" />

              {/* <span className="absolute -bottom-4 left-4 text-xs text-red-700">{error}</span> */}

            </form>
          </div>
        </>
      }


    </div>
  )
}
