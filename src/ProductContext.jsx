import { useState } from "react"
import { miContexto } from "./components/useContext"

const Provider = miContexto.Provider

export function ProductoProvider({ children }) {

  const [carrito, setCarrito] = useState([])
  const [cantProd, setCantProd] = useState(0)

  function agregarAlCarro(nuevaCantidad, producto) {
    const nuevoArray = [...carrito]
    nuevoArray.push(producto)

    const nuevasUnidades = cantProd + nuevaCantidad
    setCarrito(nuevoArray)
    setCantProd(nuevasUnidades)
  }


  function resetCart() {
    setCantProd(0)
    setCarrito([])
  }

  const elValorDelContexto = {
    cant_productos: cantProd,
    addToCart: agregarAlCarro,
    resetCart: resetCart
  }

  return (
    <Provider value={elValorDelContexto}>
      {children}
    </Provider>
  )
}