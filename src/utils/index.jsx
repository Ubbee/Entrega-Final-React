import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig"

export async function fetchProductosAsync() {

    try {

        const usuariosCollection = collection(db, "productos")

        const miConsulta = await getDocs(usuariosCollection)

        const usuariosFinales = miConsulta.docs.map((doc) => {

            const producto = doc.data()

            producto.firebaseID = doc.id


            return producto
        })

        return {
            products: usuariosFinales
        }

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }


}

export async function fetchProductosByCategory(categoria) {

    try {

        const productosCollection = collection(db, "productos")
        const data = query(productosCollection, where("categoria", "==", categoria));
        const miConsulta = await getDocs(data)

        const productos = miConsulta.docs.map((doc) => {

            const producto = doc.data()

            producto.firebaseID = doc.id
            console.log(producto);
            

            return producto
        })

        const products = productos
        return {
            products
        }

    } catch (error) {
        console.log("Salio todo mal", error)
        throw error
    }


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