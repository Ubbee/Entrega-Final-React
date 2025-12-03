
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Categoria from "./Categoria.jsx";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import DetalleProductoPage from "./DetalleProductoPage";

export default function Main() {

    

    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<DetalleProductoPage />} />
            <Route path="/category/smartphones" element={<Categoria/>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />}/>
        </Routes>
    )
}
