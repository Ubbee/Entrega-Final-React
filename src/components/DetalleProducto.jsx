import { Flex } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Contador from './Contador';
import { useProducts } from './useContext';

export default function DetalleProducto() {
    const elValorDelContexto = useProducts()

    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    let contadorActual = 0;


    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(r => r.json())
            .then(data => setProducto(data))
            .catch(console.error);
    }, [id]);

    if (!producto) return <div>Cargando…</div>;

    function handleAddToCart() {
        elValorDelContexto.addToCart(contadorActual, producto)
        
        console.log(contadorActual);
        
    }

    function handleEjemplo(contador) {
        contadorActual = contador
    }

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.images?.[0]} width={200} />
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
            <Contador stock={producto.stock} handleEjemplo={handleEjemplo}/>
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
    );
}
