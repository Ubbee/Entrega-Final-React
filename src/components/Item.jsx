import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router';

export default function Item(prop) {

  const { Meta } = Card;

  return (
    <div className='card'>
      <img src={prop.productos.imagen?.[0]} width={100} alt="Producto" />
      <h2>{prop.productos.nombre}</h2>
      <p >$ {prop.productos.precio}</p>
      <button ><Link to={`/productos/${prop.productos.firebaseID}`}>Ver Mas...</Link></button>
    </div>
  )
}