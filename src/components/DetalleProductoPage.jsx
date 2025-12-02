import DetalleProducto from "./DetalleProducto";
import { useParams } from "react-router-dom";


function DetalleProductoPage() {
    
    const params = useParams()

    return (
        <DetalleProducto id={params.id}/>
    )
}

export default DetalleProductoPage