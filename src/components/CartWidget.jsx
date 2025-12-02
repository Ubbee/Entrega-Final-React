import { Badge } from 'antd';
import { useProducts } from './useContext';
import { Navigate, useNavigate } from 'react-router-dom';

export default function CartWidget() {
  const elValorDelContexto = useProducts()

  const navigate = useNavigate()

  function HandleNavigation() {
    navigate("/Cart")
  }

  return (
    <Badge count={elValorDelContexto.cant_productos} >
      <ion-icon name="cart" onClick={HandleNavigation}></ion-icon>
    </Badge>
  )
}

