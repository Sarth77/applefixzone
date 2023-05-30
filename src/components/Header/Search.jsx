import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Search = () => {
  return (
    <>
      <section className="px-0 py-[20px] w-full">
        <div className="max-w-[90%] m-auto flex justify-between items-center gap-x-4">
          <div className="flex items-center gap-x-2 justify-start">
            <NavLink to="/">
              <div className="w-[2.5rem] h-[2.5rem]">
                <img
                  className="w-full h-full object-cover"
                  src={logo}
                  alt="logo"
                />
              </div>
            </NavLink>
            <div className="hidden lg:flex">
              <NavLink to="/">
                <h1 className="text-xl font-semibold text-black">
                  AppleFixZone
                </h1>
              </NavLink>
            </div>
          </div>
          <div className="w-[60%] border-2 border-solid text-center opacity-50 flex rounded-full items-center flex-wrap">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none focus:border-none p-[5px] rounded-full ml-2 w-full"
            />
          </div>
          <div className="icon flex items-center text-xl justify-end select-none">
            <div className="flex items-center gap-x-6 select-none">
              <Link to="/login">
                <div className="bg-[#f6f9fc] h-10 w-10 rounded-full flex justify-center items-center drop-shadow-md hover:scale-110 cursor-pointer select-none">
                  <i className="fa fa-user icon-circle select-none"></i>
                </div>
              </Link>
              <div className="bg-[#f6f9fc] h-10 w-10 rounded-full flex justify-center items-center drop-shadow-md hover:scale-110">
                <div className="relative select-none">
                  <Link to="/cart">
                    <i className="fa fa-shopping-bag icon icon-circle select-none"></i>
                    <span className="absolute flex top-[-20%] right-[-35%] w-[15px] h-[15px] rounded-full items-center justify-center text-[0.8rem] font-bold text-white bg-black select-none">
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
