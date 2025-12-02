import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import { Link } from 'react-router';

export default function Item(prop) {

  const { Meta } = Card;

  return (
    <Card className='card'
      hoverable
      style={{ width: 240 }}
      actions={[
        <Button className="card-btn"><Link to={`/productos/${prop.productos.firebaseID}`}>Ver Mas...</Link></Button>
      ]}
      cover={
        <img className='card-img'
          alt="example"
          src={prop.productos.imagen?.[0]}

        />
      }
    >
      <Meta title={prop.productos.nombre} />
      <Meta title={prop.productos.precio} className='card-precio'/>


    </Card>
  )
}
