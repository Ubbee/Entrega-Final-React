import { Flex } from "antd";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Categoria() {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/smartphones`)
            .then(data => data.json())
            .then((data) => {
                const result = data.products
                setProductos(result)
            })
            .catch(console.error);
    }, []);

    return (
        <Flex gap="middle" wrap="wrap" className="contenedor">
            {productos.map((producto) => {
                return <Item productos={producto} />
            })}
        </Flex>
    )
}
