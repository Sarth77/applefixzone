import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";
import {
  addtoCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    if (cart?.cartItems?.length === 0) window.scrollTo(0, 0);
  }, [cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addtoCart(cartItem));
  };
  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="snap-y max-w-[90%] m-auto py-12 scro">
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              Shopping Cart
            </h5>
          </div>
          {cart.cartItems.length === 0 ? (
            <div className="snap-start max-w-[90%] m-auto flex flex-col gap-4 items-center justify-center">
              <div className="min-h-[30vh] flex flex-col items-center justify-center">
                <p>Your cart is empty !</p>
                <div>
                  <NavLink to="/products">
                    <div className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center justify-center gap-1">
                      <BiArrowBack />
                      Go to products
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden snap-start">
                {cart.cartItems?.map((cartItem) => (
                  <li
                    className="flex lg:flex-row md:flex-row flex-col py-6 gap-4 snap-start"
                    key={cartItem.id}
                  >
                    <div className="h-full w-full lg:h-24 lg:w-24 md:h-24 md:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 self-center ">
                      <img
                        src={cartItem.picture}
                        alt={cartItem.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="capitalize truncate">
                            <div className="capitalize truncate">
                              {cartItem.name}
                            </div>
                          </h3>
                          <p className="ml-4">
                            <FormatPrice
                              price={cartItem.price * cartItem.cartQuantity}
                            />
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {cartItem.category}
                        </p>
                        <span className="text-center w-1/3 font-semibold text-sm">
                          <FormatPrice price={cartItem.price} />
                        </span>
                      </div>
                      <div className="flex grow items-end justify-between text-sm">
                        <p className="text-gray-500 grow">
                          <button
                            className="fill-current text-gray-600 w-3"
                            onClick={() => handleDecreaseCart(cartItem)}
                          >
                            -
                          </button>
                          <span className="mx-2 border text-center px-2">
                            {cartItem.cartQuantity}
                          </span>
                          <button
                            className="fill-current text-gray-600 w-3"
                            onClick={() => {
                              handleIncreaseCart(cartItem);
                            }}
                          >
                            +
                          </button>
                        </p>

                        <div className="flex">
                          <button
                            className="font-semibold hover:bg-red-500 text-gray-500 hover:text-white text-xs cursor-pointer border border-1 py-1 rounded-md px-1"
                            onClick={() => {
                              handleRemoveFromCart(cartItem);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            className={
              cart.cartItems.length === 0 ? "hidden" : " flex self-start mt-5"
            }
          >
            <button
              className="px-3 py-2 bg-red-400 hover:bg-red-500 text-white rounded-md drop-shadow-md mb-3"
              onClick={() => {
                handleCartClear();
              }}
            >
              Clear Cart
            </button>
          </div>
          <div
            className={
              cart.cartItems.length === 0
                ? "hidden"
                : "border-t border-gray-200 px-4 py-6 sm:px-6"
            }
          >
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>
                <FormatPrice price={cart.cartTotalAmount} />
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Free Shipping across India !
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Checkout
              </div>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p className=" flex items-center justify-center gap-2">
                or
                <NavLink to="/products">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center justify-center gap-1">
                    <BiArrowBack />
                    Continue Shopping
                  </button>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
