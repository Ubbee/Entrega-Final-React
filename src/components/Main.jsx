
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Item from "./Item";
import DetalleProducto from "./DetalleProducto";
import Categoria from "./categoria";
import CartPage from "./CartPage";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/category/smartphones" element={<Categoria/>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />}/>
        </Routes>
    )
}
