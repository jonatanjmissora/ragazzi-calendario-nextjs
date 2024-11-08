import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { collection, getDocs, getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_APIKEY}`,
  authDomain: "pagos2-ragazzi-app.firebaseapp.com",
  projectId: "pagos2-ragazzi-app",
  storageBucket: "pagos2-ragazzi-app.appspot.com",
  messagingSenderId: "350768129131",
  appId: "1:350768129131:web:8f26fa3ffbc1c63f293d2e",
  measurementId: "G-EFF2DQ0PES"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const firebaseLogin = () => {
  const email = "jonatanjmissora@gmail.com"
  const password = "26794337"
  signInWithEmailAndPassword(auth, email, password)
}

export const firebaseLogout = async () => {
  signOut(auth);
}

export async function getCollection(collectionName: string) {
  const docs = collection(db, collectionName)
  const dataSnapshot = await getDocs(docs)
  const data = dataSnapshot.docs.map(doc => doc.data())
  return data
}