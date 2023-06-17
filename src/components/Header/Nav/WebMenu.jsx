import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Categories from "./Categories";
const WebMenu = ({ links }) => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <>
      <div className="hidden md:flex justify-between w-full">
        <div
          className="flex relative items-center bg-[#f6f9fc] py-1 px-2 text-xl self-center rounded drop-shadow cursor-pointer gap-1"
          onClick={() => setOpenCategory(!openCategory)}
        >
          <div>
            <BiCategory />
          </div>
          <div className="text-zinc-600 focus-none select-none outline-none border-none">
            Categories
          </div>
          <div className="text-3xl">
            {openCategory ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>
        <div className="self-center">
          <div className="flex list-none  capitalize text-base justify-between gap-3 flex-wrap select-none">
            {links.map(({ display, path }, index) => {
              return (
                <NavLink
                  key={index}
                  to={path}
                  className="text-zinc-500 hover:bg-blue-100 rounded-full p-1 hover:scale-110 hover:text-zinc-700 hover:drop-shadow"
                >
                  <div className="transition duration-150 ease-out hover:ease-in select-none">
                    {display}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      {openCategory ? (
        <div className="absolute left-[5%] z-999 ">
          <Categories close={() => setOpenCategory(false)} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default WebMenu;
