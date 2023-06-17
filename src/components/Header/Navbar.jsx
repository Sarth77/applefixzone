import React from "react";
import MobileMenu from "./Nav/MobileMenu";
import WebMenu from "./Nav/WebMenu";
const navlinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/products",
    display: "Products",
  },
  {
    path: "/faq",
    display: "FAQ's",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "contact",
    display: "Contact Us",
  },
];
const Navbar = () => {
  return (
    <>
      <header className="shadow-[-1px_15px_17px_-8px_rgba(0,0,0,0.1)] pb-4 w-full">
        <div className="max-w-[90%] m-auto select-none">
          <WebMenu links={navlinks} />
        </div>
        <div className="md:hidden">
          <MobileMenu links={navlinks} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
