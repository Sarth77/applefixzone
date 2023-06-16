import React from "react";
import FormatPrice from "../helper/FormatPrice";
import { NavLink } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/middlewareApi";
import Loading from "react-fullscreen-loading";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cart/cartSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
  };
  return (
    <>
      <div className="max-w-[90%] m-auto">
        {error ? (
          <div>Oh no, there was an error</div>
        ) : isLoading ? (
          <Loading loading={true} background="#FFFFFF" loaderColor="#89CFF0" />
        ) : data ? (
          <>
            <div className="flex flex-wrap my-8 gap-8 justify-center">
              {data?.data.map((curElem) => {
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
                        <h3 className="font-bold capitalize truncate">
                          {name}
                        </h3>
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
                      <button
                        className="bg-emerald-400 drop-shadow-md hover:scale-105 hover:bg-emerald-500 text-white px-3 rounded-xl flex justify-center items-center"
                        onClick={() => handleAddToCart(curElem)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Products;
