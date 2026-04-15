import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/Home/Shop";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Login from "../pages/Login/Login";

export default function AppRoutes() {

    return (
       <Routes>
            <Route path="/" element={ <ShopPage /> } />
            <Route path="/product/productDetail/:id" element={ <ProductDetail /> }/>
            <Route path="/login" element={ <Login />} />

       </Routes>
    );

}

