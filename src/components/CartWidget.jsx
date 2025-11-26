import { Badge } from 'antd';
 import { useProducts } from './useContext'; 

export default function CartWidget() {
   const elValorDelContexto = useProducts() 
  console.log(elValorDelContexto.cant_productos);
  
  return (
    <Badge  count={elValorDelContexto.cant_productos} >
      <ion-icon name="cart"></ion-icon>
    </Badge>
  )
}

