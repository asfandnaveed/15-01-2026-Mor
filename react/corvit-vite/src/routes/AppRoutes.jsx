import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/Home/Shop";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

export default function AppRoutes() {

    return (
       <Routes>
            <Route path="/" element={ <ShopPage /> } />
            <Route path="/product/productDetail" element={ <ProductDetail /> }/>

       </Routes>
    );

}

