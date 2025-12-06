import { Flex } from "antd";
import { useEffect, useState } from "react";
import Item from "./Item";
import { fetchProductosByCategory } from "../utils";

export default function Categoria() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargar = async () => {
            try {
                const respuesta = await fetchProductosByCategory("smartphones");
                console.log("RESP CATEGORIA:", respuesta);
                setProductos(respuesta.products || []);
            } catch (err) {
                console.error("Error en Categoria:", err);
            } finally {
                setLoading(false);
            }
        };

        cargar();
    }, []);

    if (loading) return <p style={{ padding: 16 }}>Cargando productos...</p>;

    if (!productos.length)
        return <p style={{ padding: 16 }}>No hay productos en esta categoría.</p>;

    return (
        <Flex gap="middle" wrap="wrap" className="contenedor">
            {productos.map((producto) => (
                <Item key={producto.firebaseID} productos={producto} />
            ))}
        </Flex>
    )
}
