import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/mainpage/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Userdetails from "../pages/User";
import ContactUs from "../pages/ContactUs";
import Track from "../pages/Track";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<Userdetails />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="track" element={<Track />} />
    </Routes>
  );
};

export default Routers;
