import { useEffect, useState } from 'react';
import Contador from './Contador';
import { useProducts } from './useContext';
import { getDocumentByID } from '../utils';

export default function DetalleProducto({ id }) {
    const elValorDelContexto = useProducts()
    const [producto, setProducto] = useState(null);

    let contadorActual = 0;

    useEffect(() => {
        getDocumentByID(id)
            .then((respuesta) => {
                setProducto(respuesta)
            }).catch((respuesta) => {
                console.log(respuesta)
            })
    }, [id]);


    if (!producto) return <div>Cargando…</div>;

    function handleAddToCart() {
        elValorDelContexto.addToCart(contadorActual, producto)
    }

    function handleEjemplo(contador) {
        contadorActual = contador
    }

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.imagen?.[0]} width={200} />
            <p>{producto.nombre}</p>
            <p>$ {producto.precio}</p>
            <Contador stock={producto.stock} handleEjemplo={handleEjemplo} />
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
    );
}
