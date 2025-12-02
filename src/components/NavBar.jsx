import { Link } from "react-router"
import CartWidget from "./cartWidget"
export default function NavBar() {
    
    return (
        <div className="headerContainer">
            <h1><Link to="/">LOGO</Link></h1>
            <ul className="iconosHeader">
                <Link to="/">Productos</Link>
                <Link to="/category/smartphones">Celulares</Link>
                <Link to="/cart" className="icono-carro"><CartWidget /></Link>
            </ul>
        </div>
    )
}
