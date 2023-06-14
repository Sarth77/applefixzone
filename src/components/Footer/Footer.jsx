import React from "react";
import { NavLink } from "react-router-dom";
import paymentimage from "../../assets/payment.png";
const Footer = () => {
  return (
    <>
      <footer className="bottom-0 max-w-[90%] m-auto py-10 overflow-scroll flex flex-col">
        <div className="flex gap-[50px] justify-between">
          <div className="flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">Categories</h1>
            <span className="text-gray">Motherboards</span>
            <span className="text-gray">Displays</span>
            <span className="text-gray">Batteries</span>
            <span className="text-gray">Others</span>
          </div>
          <div className="flex-1 flex flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">Links</h1>
            <NavLink to="/home">
              <span className="text-gray">Home</span>
            </NavLink>
            <NavLink to="/products">
              <span className="text-gray">Products</span>
            </NavLink>
            <span className="text-gray">FAQ</span>
            <span className="text-gray">About Us</span>
            <NavLink to="/contact">
              <span className="text-gray">Contact Us</span>
            </NavLink>
          </div>
          <div className="hidden  md:flex flex-1 flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">About</h1>
            <span className="text-gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id amet
              odit fuga doloremque facere laudantium minima impedit voluptates
              eos accusamus? Soluta quod numquam id et beatae aperiam incidunt!
              Accusantium, aperiam.
            </span>
          </div>
          <div className="hidden md:flex flex-1 flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">Contact</h1>
            <span className="text-gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id amet
              odit fuga doloremque facere laudantium minima impedit voluptates
              eos accusamus? Soluta quod numquam id et beatae aperiam incidunt!
              Accusantium, aperiam.
            </span>
          </div>
        </div>
        <div className="flex lg:items-center md:justify-between md:flex-row flex-col mt-[50px]">
          <div className="flex md:items-center md:flex-row flex-col">
            <span className="text-black font-bold md:text-xl text-lg">
              AppleFixZone
            </span>
            <span className="md:ml-[20px] md:text-lg text-gray-600 text-">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="">
            <img
              src={paymentimage}
              alt="payment"
              className="h-[50px] object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
