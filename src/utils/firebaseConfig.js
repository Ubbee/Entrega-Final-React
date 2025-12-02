//Firebase : Es la plataforma de google con TODO
//Firestore : Es la base de datos
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// configuracion del firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "comision-react-diplo-3af4d.firebaseapp.com",
  projectId: "comision-react-diplo-3af4d",
  storageBucket: "comision-react-diplo-3af4d.firebasestorage.app",
  messagingSenderId: "760344696397",
  appId: "1:760344696397:web:63ba216424babf74a5ae04"
};

//La aplicacion ya conectada
const app = initializeApp(firebaseConfig);

//La conexion a la DB de una aplicacion ya conectada
export const db = getFirestore(app)