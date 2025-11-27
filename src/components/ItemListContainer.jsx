import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Flex } from "antd";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then(data => data.json())
      .then((data) => {
        const result = data.products
        setProductos(result)
      })
  }, []);

  const EstiloBase = {
    width: '25%',
    height: 54
  };

  return (
    <Flex gap="middle" wrap="wrap" className="contenedor">
      {productos.map((producto) => {
        return <Item productos={producto} key={producto.id}/>
      })}
    </Flex>
  );


}
