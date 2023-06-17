import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <Link to="/home">
              <span className="text-gray">Home</span>
            </Link>
            <NavLink to="/products">
              <span className="text-gray">Products</span>
            </NavLink>
            <Link to="/faq">
              <span className="text-gray">FAQ</span>
            </Link>
            <Link to="/about">
              <span className="text-gray">About Us</span>
            </Link>
            <Link to="/contact">
              <span className="text-gray">Contact Us</span>
            </Link>
          </div>
          <div className="hidden  md:flex flex-1 flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">About</h1>
            <span className="text-gray">
              We are Providing Original iPhone Spares, iPhone Displays, iPhone
              Charging Port, iPad Original Spares, iPhone Batteries, iPhone
              Motherboard, iPhone GX Display, iPhone OCA Glass and OCA Sheets.
            </span>
          </div>
          <div className="hidden md:flex flex-1 flex-col gap-[10px] text-justify text-[14px]">
            <h1 className="text-[18px] font-bold text-gray-500">Contact</h1>
            <span className="text-gray">
              Whenever you are browsing our site and are in doubt about
              something, we are always willing to share our deep knowledge and
              understanding of our makers, their craft and any technical
              assistance related to website. The most commonly asked questions
              are covered in our FAQs. If you have any specific questions please
              do not hesitate to contact us by writing us an email at
              support@applefixzone.com or messaging our customer services team.
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
