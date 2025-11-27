import { Badge } from 'antd';
 import { useProducts } from './useContext'; 
import { Navigate } from 'react-router-dom';

export default function CartWidget() {
   const elValorDelContexto = useProducts() 
  
  function HandleNavigation(){
    Navigate("/Cart")
  }

  return (
    <Badge  count={elValorDelContexto.cant_productos} >
      <ion-icon name="cart" onClick={HandleNavigation}></ion-icon>
    </Badge>
  )
}

