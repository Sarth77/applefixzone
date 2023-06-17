import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/mainpage/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Userdetails from "../pages/User";
import ContactUs from "../pages/ContactUs";
import Track from "../pages/Track";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/Error";
import AuthRedirect from "../components/auth/AuthRequire";
import RequireAuth from "../components/auth/RequireAuth";
import Products from "../pages/Products";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/AboutUs";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route
        path="/login"
        element={
          <AuthRedirect>
            <Login />
          </AuthRedirect>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthRedirect>
            <SignUp />
          </AuthRedirect>
        }
      />
      <Route
        path="/user"
        element={
          <RequireAuth>
            <Userdetails />
          </RequireAuth>
        }
      />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/track" element={<Track />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
