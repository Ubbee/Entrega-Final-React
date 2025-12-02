import '../App.css'
import NavBar from './NavBar'
import Main from './Main'
import { ProductoProvider } from '../ProductContext'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useEffect } from 'react';




export default function App() {

    /* useEffect(() => {
    async function cargarProductos() {
      try {
        fetch(`https://dummyjson.com/products/`)
          .then(data => data.json())
          .then((data) => {
            const result = data.products
            
            for (const prod of result) {
              addDoc(collection(db, "productos"), {
                imagen: prod.images,
                nombre: prod.title,
                precio: prod.price,
                stock: prod.stock
              })
            }

          }, [])
      } catch (error) {
        console.log("❌ Error al cargar productos:", error)
      }
    }
    cargarProductos()
  })   */


  return (
    <ProductoProvider>
      <NavBar />
      <Main />
    </ProductoProvider>
  )
}



