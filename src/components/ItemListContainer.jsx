import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Flex } from "antd";
import toast from "react-hot-toast";
import { fetchProductosAsync } from "../utils";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    toast.promise(fetchProductosAsync, {
      loading: "Cargando productos...",
      success: (respuesta) => {
        setProductos(respuesta.products)
        setLoading(false)
        return "Productos cargados exitosamente!"
      },
      error: () => {
        setLoading(false)
        return "Hubo un error al cargar los productos"
      },
    })
  }, [])

  return (
    <Flex gap="middle" wrap="wrap" className="contenedor" >
      {productos.map((producto) => {
        return <Item productos={producto} key={producto.firebaseID}/>
      })}
    </Flex>
  );


}
