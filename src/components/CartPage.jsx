import { Navigate } from "react-router-dom"

export default function CartPage() {

function handleFinalizarCompra(){
    Navigate("/checkout")
}
    return (
        <div className="Contenedor-carro">
            <h1>Mi Carrito</h1>
            <p>*desglose de productos*</p>
            <button onClick={handleFinalizarCompra}>Finalizar compra</button>
        </div>
    )
}

