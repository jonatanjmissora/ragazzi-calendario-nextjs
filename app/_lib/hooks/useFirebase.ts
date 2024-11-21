import { auth, getCollection } from "@/app/_db/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export type FireDataProps = {
  date: string;
  rubro: string;
  sector: string;
  monto: string;
  fechaPagado: string;
}

export const useFirebase = () => {

  const router = useRouter()
  const [firebaseUser, setFirebaseUser] = useState<string>("");
  const [firebaseData, setFirebaseData] = useState<FireDataProps[]>([]);
  const collection = "2023_11_noviembre"

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setFirebaseUser(currentUser?.email ?? "");
        console.log("usuario Firebase:", currentUser.email);
        toast(`Usuario fire logueado: ${currentUser.email}`)
      }
      else {
        console.log("firebase: usuario no logueado");
        toast("Usuario fire no logueado")
        router.refresh()
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    const get = async () => {
      const res = await getCollection(collection) as FireDataProps[]
      setFirebaseData(res)
    }
    if (firebaseUser) {
      get()
    }
  }, [firebaseUser]);


  return { firebaseUser, firebaseData, collection };
};