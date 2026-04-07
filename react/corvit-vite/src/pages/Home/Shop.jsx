import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Shop.css'
import { useNavigate, useNavigation } from "react-router-dom";

export default function ShopPage() {

    const baseURL = "http://localhost:3000";

    const [productsData, setProductsData] = useState();
    const [isloading, setIsloading] = useState(true);

    const navigate = useNavigate();

    const navigateToDetailPage = ()=>{
        navigate('/product/productDetail');
    }

    const getProductData = async () => {

        try {
            const response = await fetch("http://localhost:3000/api/products");
            const data = await response.json();
            setProductsData(data);
        } catch (e) {

        } finally {
            setIsloading(false);
        }


    };


    useEffect(() => {
        getProductData();
    }, []);


    if (isloading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light">
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand text-success fw-bold" href="#">
                        Ecobazar
                    </a>

                    <form className="d-flex w-50">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button className="btn btn-success">Search</button>
                    </form>

                    <div>
                        <span className="me-3">♡</span>
                        <span>🛒</span>
                    </div>
                </div>
            </nav>

            {/* Banner */}
            <div className="container mt-4">
                <div className="p-5 bg-success bg-opacity-10 rounded d-flex justify-content-between align-items-center bannerbackground">
                    <div>
                        <p className=" mb-1">BEST DEALS</p>
                        <h2 className="fw-bold">Sale of the Month</h2>
                        <button className="btn btn-success mt-3">Shop Now</button>
                    </div>

                </div>
            </div>

            {/* Filters */}
            <div className="container mt-4 d-flex justify-content-between flex-wrap gap-2">
                <div className="d-flex gap-2">
                    <select className="form-select">
                        <option>Select Category</option>
                    </select>
                    <select className="form-select">
                        <option>Select Price</option>
                    </select>
                    <select className="form-select">
                        <option>Select Rating</option>
                    </select>
                </div>

                <div className="d-flex gap-2">
                    <select className="form-select">
                        <option>Sort by: Latest</option>
                    </select>
                    <select className="form-select">
                        <option>Show: 16</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mt-4">
                <div className="row g-4">

                    {/* COL -1  */}

                    {
                        productsData != null &&
                        productsData.products.map((product) => (

                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="card h-100 shadow-sm" onClick={navigateToDetailPage}>
                                    <img
                                        src={baseURL+product.image}
                                        className="card-img-top"
                                        alt="product"
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title">{product.name}</h6>
                                        <p className="text-success fw-bold">${product.price}</p>
                                        <button className="btn btn-success mt-auto">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }




                </div>
            </div>



            {/* Newsletter */}
            <div className="bg-light py-5 mt-5 text-center">
                <div className="container">
                    <h4 className="fw-semibold">Subscribe our Newsletter</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <input
                            type="email"
                            className="form-control w-50"
                            placeholder="Your email address"
                        />
                        <button className="btn btn-success ms-2">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="text-success">Ecobazar</h5>
                            <p className="text-muted small">
                                Morbi cursus porttitor enim lobortis molestie.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h6>My Account</h6>
                            <ul className="list-unstyled text-muted small">
                                <li>My Account</li>
                                <li>Order History</li>
                                <li>Wishlist</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Helps</h6>
                            <ul className="list-unstyled text-muted small">
                                <li>Contact</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Categories</h6>
                            <ul className="list-unstyled text-muted small">
                                <li>Fruits & Vegetables</li>
                                <li>Meat & Fish</li>
                                <li>Bread & Bakery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
