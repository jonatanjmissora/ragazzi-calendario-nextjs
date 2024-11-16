"use client"
import Logo from "@/app/_assets/Logo";
import { useEffect, useState } from "react";

export default function Header() {

  const [currentColor, setCurrentColor] = useState<string>("")

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setCurrentColor("#222")
    } else {
      setCurrentColor("#555")
    }
  }, []);

  return (
    <div className="static h-[15rem]">
      <Logo className="h-full" currentColor={currentColor} />
    </div>
  )
}
