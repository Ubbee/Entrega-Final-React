import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router';

export default function Item(prop) {

  const { Meta } = Card;



  return (
    <div className='card'>
      <img src={prop.productos.images?.[0]} width={100} alt="Producto" />
      <h2>{prop.productos.title}</h2>
      <p >$ {prop.productos.price}</p>
      <button ><Link to={`/productos/${prop.productos.id}`}>Ver Mas...</Link></button>
    </div>
  )
}