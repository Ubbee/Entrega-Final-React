import { Navigate, useNavigate } from "react-router-dom"

export default function CartPage() {
const navigate = useNavigate()
function handleFinalizarCompra(){
    navigate("/checkout")
}
    return (
        <div className="Contenedor-carro">
            <h1>Mi Carrito</h1>
            <p>*desglose de productos*</p>
            <button onClick={handleFinalizarCompra}>Finalizar compra</button>
        </div>
    )
}

