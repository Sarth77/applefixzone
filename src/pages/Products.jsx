import React, { useEffect, useState } from "react";
import axios from "axios";
import FormatPrice from "../helper/FormatPrice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const subscribe = async () => {
      try {
        const response = await axios.get(
          "https://api-9av6.onrender.com/api/products",
        );
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.code);
      }
    };
    subscribe();
  }, []);

  if (loading) {
    return (
      <>
        <ToastContainer />
        <div>Loading..</div>
      </>
    );
  }
  return (
    <>
      <ToastContainer />
      <div className="max-w-[90%] m-auto">
        <div className="flex flex-wrap my-8 gap-8 justify-center">
          {products.map((curElem) => {
            const { id, name, picture, price, description } = curElem;
            return (
              <div className="w-52  flex flex-col" key={id}>
                <NavLink to={`/products/${id}`}>
                  <div className="bg-blue-100 p-5 h-52 rounded-xl overflow-hidden relative flex items-center justify-center">
                    <img
                      src={picture}
                      alt="productpicture"
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold capitalize truncate">{name}</h3>
                  </div>
                  <p className="text-sm mt-1 leading-4 text-gray-500 h-20">
                    {description.slice(0, 90)}...Read More
                  </p>
                </NavLink>
                <div className="flex">
                  <div className="text-2xl font-bold grow flex gap-3">
                    <h3>
                      <FormatPrice price={price} />
                    </h3>
                  </div>
                  <button className="bg-emerald-400 text-white px-3 rounded-xl flex justify-center items-center">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
