import React from 'react';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { ProductsContextProvider } from '../services/ProductContext'
const Routers = () => {
  return (
    <Router>
    <ProductsContextProvider>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="shop/:id" element={<ProductDetails/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
    </Routes>
    </ProductsContextProvider>
    </Router>
  )
}

export default Routers
