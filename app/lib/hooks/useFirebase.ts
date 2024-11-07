import { auth, getCollection } from "@/app/_db/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type DataProps = {
  date: string;
  rubro: string;
  sector: string;
  monto: string;
  fechaPagado: string;
}

export const useFirebase = () => {
  const [firebaseUser, setFirebaseUser] = useState<string>("");
  const [firebaseData, setFirebaseData] = useState<DataProps[]>([]);

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
        revalidatePath("/firabase-mongo")
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {

    const get = async () => {
      const res = await getCollection("2024_10_octubre") as DataProps[]
      setFirebaseData(res)
    }

    if (firebaseUser) {

      get()

    }
  }, [firebaseUser]);

  return { firebaseUser, firebaseData };
};