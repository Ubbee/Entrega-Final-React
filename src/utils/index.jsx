import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "./firebaseConfig"

export async function fetchProductosAsync() {

    try {

        const usuariosCollection = collection(db, "productos")

        const miConsulta = await getDocs(usuariosCollection)

        const usuariosFinales = miConsulta.docs.map((doc) => {

            const producto = doc.data() //{ id : 1, title : "Producto 1", price : 100 , ....}

            producto.firebaseID = doc.id //{ id : 1, title : "Producto 1", price : 100 , ...., firebaseID : "1234567890" }

            return producto
        })

        return {
            products: usuariosFinales
        }

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    /*  console.log("Termino todo ") */

}

export async function getDocumentByID(id = "42IRaTHwZxvS9PQtQTrV") {
    try {

        const productosCollection = collection(db, "productos")

        const docRef = doc(productosCollection, id)

        const miConsulta = await getDoc(docRef)

        const elProducto = miConsulta.data()

        return elProducto

    } catch (error) {
        console.log(error)
    }
}