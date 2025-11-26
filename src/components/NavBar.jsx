import { Link } from "react-router"
import CartWidget from "./cartWidget"
export default function NavBar() {
    return (
        <div className="headerContainer">
            <h1><Link to="/">LOGO</Link></h1>
            <ul className="iconosHeader">
                <Link to="/">Inicio</Link>
                <Link to="/">Productos</Link>
                <Link to="/categoria/muebles">Muebles</Link>
                <Link to="/" className="icono-carro"><CartWidget /></Link>
            </ul>
        </div>
    )
}
